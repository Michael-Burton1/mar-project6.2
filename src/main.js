import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Money from './js/moneyExchange.js';

$(document).ready(function() {
  let myMoney= new Money(0);
  let promise = Money.getRates();
  promise.then(function (response) {
    const body = JSON.parse(response);
    console.log("myresponse")
    myMoney.CadRate= body.conversion_rates.CAD;
    myMoney.MxnRate= body.conversion_rates.CAD;
    myMoney.GbpRate= body.conversion_rates.CAD;
    myMoney.EurRate= body.conversion_rates.CAD;
    myMoney.AllRate= body.conversion_rates.CAD;
  });
  $("#moneyForm").submit(function(event){
    event.preventDefault();
    myMoney.userAmount = parseFloat($("#amountOfUSD").val());
    console.log(myMoney);
  });
});
