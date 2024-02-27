// Libs
import toast from "react-hot-toast";


export const notification = (notes) => {
    toast.success(notes, { duration: 1500 });
};