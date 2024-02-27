export const formatNumber = (number) => {
   
    return new Intl.NumberFormat("pt-BR", 
    { 
    style: "currency", 
    currency: "GBP" , 
     minimumFractionDigits: 0,
    maximumFractionDigits: 0 ,
    })
    .format(number);
};