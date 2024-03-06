import { PayPalButtons } from "@paypal/react-paypal-js"
import { notification } from "../../utils/toast";
import {useState , useContext} from 'react'
import { Context } from "../../utils/context";
import { makePaymentRequest } from "../../utils/api";



function Checkout() {

        const { cartSubTotal , setCartItems , cartItems } = useContext(Context);

        // const purchaseUnits = cartItems.map(item => {
        //     return {
        //         amount: {
        //             currency_code: 'GBP', // Sets the currency code to GBP (British Pound)
        //             value: (item.attributes.price * item.attributes.quantity).toFixed(2), // Sets the total value of the purchase for each item
        //         },
        //     };
        // });
        const [paidFor, setPaidFor] = useState(false);
        const [error, setError] = useState(null);
        
        const saveOrder = async() => {
            
            try {
                const res = await makePaymentRequest.post("/api/orders", {
                    products: cartItems,
                });
                console.log(res)

            }
            catch (err) {
            console.log(err);
           }
        }

        const handleApprove = async() => {
            saveOrder()
            setPaidFor(true);
           

            
        }

        if(paidFor){
            notification("Thank You for purchasing from Erin Sweets");
            setCartItems([])
            
        }

        if(error){
        notification(error);
        }


  return (
            
    <PayPalButtons
    onClick={(data, actions) => {
        const hasAlreadyBoughtCourse = false;
        if (hasAlreadyBoughtCourse) {
            setError("You already bought this product"); // Pass a string to setError
            return actions.reject();
        } else {
            return actions.resolve();
        }
    }}
    style={{
        shape: 'rect',
        layout: 'vertical',
        label: 'pay',
        fundingIcon: false // Note: 'false' should be false without quotes
    }}
    createOrder={(data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        // currency_code: "GBP", // Correct placement of currency_code
                        value: cartSubTotal
                    }
                }
            ]
        });
    }}
    onApprove={async (data, actions) => {
        const order = await actions.order.capture(); // 'action' should be 'actions'
        console.log("order", order);

        handleApprove(data.orderID);
    }}
    onCancel={() => {}}
    onError={(err) => {
        setError(err.toString()); // Convert error object to string before passing to setError
        console.log("PayPal Checkout onError", err);
    }}
/>

    )
}

export default Checkout