export default class Money {
  constructor (userAmount,CadRate, MxnRate, GbpRate, EurRate, AllRate) {
    this.userAmount= userAmount;
    this.CadRate= CadRate;
    this.MxnRate = MxnRate;
    this.GbpRate= GbpRate;
    this.EurRate =EurRate;
    this.AllRate= AllRate; 
  }
  moneyConversion(chosenRate){
    let convertedAmount = this.userAmount * chosenRate;
    return convertedAmount;
  }

  static getRates() {
    return new Promise(function(resolve,reject){
      const apiKey = process.env.API_KEY;
      let request= new XMLHttpRequest();
      const URL =`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;
      request.onload = function () {
        if (this.status === 200) {
          resolve (request.response);          
        } else {
          reject(request.response);
        }
      };
      request.open("GET",URL, true);
      request.send(); 
    });
  }
}