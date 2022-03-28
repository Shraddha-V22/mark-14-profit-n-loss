const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const checkBtn = document.querySelector("#check-btn");
const outputMsg = document.querySelector("#output");

function calculateProfitAndLoss(initial, quantity, current) {
    if(initial > current) {
        var loss = (initial - current)*quantity;
        var lossPercentage = (loss/initial)*100;

        showMsg(`Your total Loss is ${loss} by ${lossPercentage.toFixed(2)}%`);
    }
    else if(initial < current) {
        var profit = (current - initial)*quantity;
        var profitPercentage = (profit/initial)*100;

        showMsg(`Your total Profit is ${profit} by ${profitPercentage.toFixed(2)}%`);
    }
    else {
        showMsg(`No pain no gain, No gain no pain`);
    }
}

function showMsg(msg) {
    outputMsg.innerText = msg;
}

function clickHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

checkBtn.addEventListener("click", clickHandler);