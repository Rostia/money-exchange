// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // 50¢ - H 25¢ - Q, 10¢ - D, 5¢ - N  1¢ - P
    if(currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    var result = {};
    var flag = 0;
    var data = {
        H: 50,
        Q: 25,
        D: 10,
        N: 5,
        P: 1
    };
    for(var key in data){
        flag = Math.floor(currency/data[key]);
        if(flag > 0){
            result[key] = flag;
            currency -= flag*data[key];
        }
    }
    return result;
}

