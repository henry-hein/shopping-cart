var updateTotalPrice = function (ele) {
  var price = $(ele).find('.price input').val();
  var quantity = $(ele).find('.qty input').val();
  var totalPrice = price * quantity;
  $(ele).children('.totalPrice').html(totalPrice);

  return totalPrice;
}

var updateCartTotal = function () {
  var totalSum = [];
  $('tbody tr').each(function(i,ele){
    var totalPrice = updateTotalPrice(ele);
    totalSum.push(totalPrice);
  });

  var cartTotal = totalSum.reduce(function (acc,r) {
      return acc + r;
  }, 0);
  $('.total').html(cartTotal);
}


$(document).ready(function() {
  updateCartTotal();

  $(document).on('click', '.btn.remove', function(event){
    $(this).closest('tr').remove();
    updateCartTotal();
  });
  
  $(document).on('input', 'tr input', function () {
    updateCartTotal();
  });

  $('#addItem').on('click', function (event) {
    event.preventDefault();
    var item = $(this).parent().siblings().children('[name = item]').val();
    var price = $(this).parent().siblings().children('[name = price]').val();
    var quantity = $(this).parent().siblings().children('[name = quantity]').val();
    $('tbody').append('<tr>' +
      '<td class="item"><input type="text" value="' + item + '"</td>' +
      '<td class="price"><input type="number" value="' + price + '" /></td>' +
      '<td class="qty"><input type="number" value="' + quantity + '" /></td>' +
      '<td class="totalPrice"></td>' +
      '<td><button class="btn btn-light btn-sm remove">remove</button></td>' +
    '</tr>');

    updateCartTotal();
    var item = $(this).parent().siblings().children('[name = item]').val('');
    var price = $(this).parent().siblings().children('[name = price]').val('');
    var quantity = $(this).parent().siblings().children('[name = quantity]').val('');
  });
});