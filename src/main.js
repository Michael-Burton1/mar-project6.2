import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Money from './js/money.js';

$(document).ready(function() {
  let myMoney= new Money(0);
  let promise = Money.getRates();
  promise.then(function (response) {
    const body = JSON.parse(response);
    if (body.result === "error") {
      alert("I'm sorry but we cannont get the current exchange rates at this time. Please try again later.");
      $("#formButton").hide();
    } else {
      myMoney.CadRate= body.conversion_rates.CAD;
      myMoney.MxnRate= body.conversion_rates.MXN;
      myMoney.GbpRate= body.conversion_rates.GBP;
      myMoney.EurRate= body.conversion_rates.EUR;
      myMoney.AllRate= body.conversion_rates.ALL;
    }
  });
  $("#moneyForm").submit(function(event){
    event.preventDefault();
    myMoney.userAmount = parseFloat($("#amountOfUSD").val());
    if($("#country").val()=== "CAD"){
      let chosenRate = myMoney.CadRate;
      let conversionResult= myMoney.moneyConversion(chosenRate);
      $(".results").html("Here is the amount your money is converted into Canadian currency: ");
      $(".resultAmount").text("$"+ parseFloat(conversionResult).toFixed(2));
    } else if ($("#country").val()=== "MXN"){
      let chosenRate = myMoney.MxnRate;
      let conversionResult= myMoney.moneyConversion(chosenRate);
      $(".results").html("Here is the amount your money is converted into Mexican currency: ");
      $(".resultAmount").text("$"+ parseFloat(conversionResult).toFixed(2));
    } else if ($("#country").val()=== "GBP"){
      let chosenRate = myMoney.GbpRate;
      let conversionResult= myMoney.moneyConversion(chosenRate);
      $(".results").html("Here is the amount your money is converted into British currency: ");
      $(".resultAmount").text("$"+ parseFloat(conversionResult).toFixed(2));
    } else if ($("#country").val()=== "EUR"){
      let chosenRate = myMoney.EurRate;
      let conversionResult= myMoney.moneyConversion(chosenRate);
      $(".results").html("Here is the amount your money is converted into Euros: ");
      $(".resultAmount").text("$"+ parseFloat(conversionResult).toFixed(2));
    } else if ($("#country").val()=== "ALL"){
      let chosenRate = myMoney.AllRate;
      let conversionResult= myMoney.moneyConversion(chosenRate);
      $(".results").html("Here is the amount your money is converted into Albainian currency: ");
      $(".resultAmount").text("$"+ parseFloat(conversionResult).toFixed(2));
    } else{
      alert("I'm sorry, we do not have information about that currency. Please try again.");
    }
  });
});
