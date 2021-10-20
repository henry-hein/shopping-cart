var updateTotalPrice = function (ele) {
  var price = ($(ele).find('.price input').val());
  var quantity = $(ele).find('.qty input').val();
  var totalPrice = price * quantity;
  $(ele).children('.totalPrice').html(totalPrice);

  return totalPrice;
}

var sum = function (acc, x) {
  return acc + x;
}

var updateCartTotal = function () {
  var totalSum = [];
  $('tbody tr').each(function(i,ele){
    var totalPrice = updateTotalPrice(ele);
    totalSum.push(totalPrice);
  });

  var cartTotal = totalSum.reduce(sum);
  $('.total').html(cartTotal);
}


$(document).ready(function() {
  updateCartTotal();

  $('.btn.remove').on('click', function(event){
    $(this).closest('tr').remove();
    updateCartTotal();
  });
  
  $('tr input').on('input', function () {
    updateCartTotal();
  });
});