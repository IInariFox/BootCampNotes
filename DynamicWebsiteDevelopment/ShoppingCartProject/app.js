var calculateSub = function (ele) { 
  var unitPrice = parseFloat($(ele).find('.unit input').val());
  var numUnit = parseFloat($(ele).find('.num input').val());

  var tax = unitPrice * numUnit * 0.10;
  var subT = unitPrice * numUnit + tax;
  $(ele).children('.subT').html(Math.floor((subT)));

  return subT;
}
var sum = function (acc, x) { return acc + x; };


var updateTotalPrice = function () { 
  var subTotal = [];
  $('tbody tr').each(function (i, ele) {
    var subT = calculateSub(ele); 
    subTotal.push(subT);
  });
  var overallTotalValue = subTotal.reduce(sum);
  $('#totalValue').html(overallTotalValue);
}
$(document).ready(function () {
  updateTotalPrice();

  $(document).on('click', '.btn.remove', function () {
    $(this).closest('tr').remove();
    updateTotalPrice();
  });

  var timeout;
  $(document).on('input', 'tr input', function () {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      updateTotalPrice();
    }, 1000);
  });

  $('#addItem').on('submit', function (event) {
    event.preventDefault();
    var name = $(this).children('[name=name]').val();
    var unit = $(this).children('[name=unit]').val();
    var num = $(this).children('[name=num]').val();
    
    $('tbody').append('<tr>' +
      '<td class="name">' + name + '</td>' +
      '<td class="unit"><input type="number" value="' + unit + '" /></td>' +
      '<td class="num"><input type="number" value="' + num + '" />$</td>' +
      '<td class="subT"></td>' +
      '<td><button class="btn btn-danger btn-sm remove">remove</button></td>' +
    '</tr>');

    updateTotalPrice();
    $(this).children('[name=name]').val('');
    $(this).children('[name=unit]').val('');
    $(this).children('[name=num]').val('');
  });
});
//