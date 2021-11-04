/* Retrieve data from DOM */
$(document).ready(function () {
  $('tbody tr').each(function (i, ele) {
    console.log($(ele).children().first().text());
  });
});
// Feetbook
// Yamazon
// Snoozechat
$(document).ready(function () {
  $('tbody tr').each(function (i, ele) {
    var sharesOwned = parseFloat($(ele).children('.shares').text());
    var marketPrice = parseFloat($(ele).children('.marketPrice').text());

    // market value is number of shares times market price per share
    var marketValue = sharesOwned * marketPrice;
    console.log(marketValue);
  });
});
// 2600
// 2500
// 300
/*Inject data into the DOM */
$(document).ready(function () {
  $('tbody tr').each(function (i, ele) {
    var sharesOwned = parseFloat($(ele).children('.shares').text());
    var marketPrice = parseFloat($(ele).children('.marketPrice').text());

    // market value is shares times market price per share
    var marketValue = sharesOwned * marketPrice;
    $(ele).children('.marketValue').html(marketValue);
  });
});

/*update unrealized gain/loss */
var updateMarketValue = function (ele) {
  var sharesOwned = parseFloat($(ele).children('.shares').text());
  var marketPrice = parseFloat($(ele).children('.marketPrice').text());

  // market value is shares times market price per share
  var marketValue = sharesOwned * marketPrice;
  $(ele).children('.marketValue').html(marketValue);

  return marketValue;
}

var updateUnrealizedProfit = function (ele, marketValue) {
  var sharesOwned = parseFloat($(ele).children('.shares').text());
  var costPerShare = parseFloat($(ele).children('.cost').text());
  var costOfPurchase = sharesOwned * costPerShare;

  // unrealized profit is market value minus cost of purchase
  var unrealizedProfit = marketValue - costOfPurchase;
  $(ele).children('.profit').html(unrealizedProfit);

  return unrealizedProfit;
}

$(document).ready(function () {
  $('tbody tr').each(function (i, ele) {
    var marketValue = updateMarketValue(ele);
    updateUnrealizedProfit(ele, marketValue);
  });
});

/*Calculate total portfolio value and profit*/
var sum = function (acc, x) { return acc + x; };
$(document).ready(function () {
  var stocksMarketValues = [];
  var stocksUnrealizedProfits = [];
  $('tbody tr').each(function (i, ele) {
    var marketValue = updateMarketValue(ele);
    stocksMarketValues.push(marketValue);
    var unrealizedProfit = updateUnrealizedProfit(ele, marketValue);
    stocksUnrealizedProfits.push(unrealizedProfit);
  });
  var portfolioMarketValue = stocksMarketValues.reduce(sum);
  var portfolioUnrealizedProfit = stocksUnrealizedProfits.reduce(sum);
  console.log(portfolioMarketValue);
  console.log(portfolioUnrealizedProfit);
});
// 5400
// 1400

var updatePortfolioValueAndProfit = function () {
  var stocksMarketValues = [];
  var stocksUnrealizedProfits = [];

  $('tbody tr').each(function (i, ele) {
    var marketValue = updateMarketValue(ele);
    stocksMarketValues.push(marketValue);
    var unrealizedProfit = updateUnrealizedProfit(ele, marketValue);
    stocksUnrealizedProfits.push(unrealizedProfit);
  });

  var portfolioMarketValue = stocksMarketValues.reduce(sum);
  var portfolioUnrealizedProfit = stocksUnrealizedProfits.reduce(sum);
  $('#portfolioValue').html(portfolioMarketValue);
  $('#portfolioProfit').html(portfolioUnrealizedProfit);
}

$(document).ready(function () {
  updatePortfolioValueAndProfit();
});

/* Remove buttons */
$(document).ready(function () {
  updatePortfolioValueAndProfit();

  $('.btn.remove').on('click', function (event) {
    $(this).closest('tr').remove();
    updatePortfolioValueAndProfit();
    // $(this).parent().parent().remove();
    // The above also works
  });
});

/*Make share cost and market price editable */
var updateMarketValue = function (ele) {
  var sharesOwned = parseFloat($(ele).find('.shares input').val());
  var marketPrice = parseFloat($(ele).find('.marketPrice input').val());

  // market value is shares times market price per share
  var marketValue = sharesOwned * marketPrice;
  $(ele).children('.marketValue').html(marketValue);

  return marketValue;
}

var updateUnrealizedProfit = function (ele, marketValue) {
  var sharesOwned = parseFloat($(ele).find('.shares input').val());
  var costPerShare = parseFloat($(ele).find('.cost input').val());
  var costOfPurchase = sharesOwned * costPerShare;

  // unrealized profit is market value minus cost of purchase
  var unrealizedProfit = marketValue - costOfPurchase;
  $(ele).children('.profit').html(unrealizedProfit);

  return unrealizedProfit;
}

/* Add an event handler to value change on inputs */
$(document).ready(function () {
  updatePortfolioValueAndProfit();

  $('.btn.remove').on('click', function (event) {
    $(this).closest('tr').remove();
    updatePortfolioValueAndProfit();
  });

  // Add the following

  $('tr input').on('input', function () {
    updatePortfolioValueAndProfit();
  });
});
var timeout;
$('tr input').on('input', function () {
  clearTimeout(timeout);
  timeout = setTimeout(function () {
    updatePortfolioValueAndProfit();
  }, 1000);
});