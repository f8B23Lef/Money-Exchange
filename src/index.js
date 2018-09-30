module.exports = function makeExchange(currency) {
  
   const myCoin = {};

    if(currency <= 0) {
        return myCoin;
    } else if(currency > 10000 ) {
        myCoin.error = "You are rich, my friend! We don't have so much coins for exchange";
    } else {
   
        const constCoin = {
            H: 50,
            Q: 25,
            D: 10,
            N: 5,
            P: 1		
        };
    
        for (let key in constCoin) {
            if(constCoin[key] <= currency) {
                myCoin[key] = Math.trunc(currency/constCoin[key])
                currency = currency%constCoin[key];
            }
        }
    }
   return myCoin;
}