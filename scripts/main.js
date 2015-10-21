'use strict';
window.$ = require('jquery');
window.jQuery = $;

$(document).ready(function(){
	var $product = $('#productName');
	var $price = $('.price');
	var $quanity = $('.quanity');
	var $button = $('#button');
	var $productsPrices = $('.productsPrices');
	var $subtotal = $('.subtotal');
	var $taxAmount = $('.taxAmount');
	var $total = $('.total');
	var totalPrice = 0;
	var sum = 0;

	$button.on('click', function(e){
		e.preventDefault();
		totalPrice = totalPrice + ($price.val() * $quanity.val());
		console.log(totalPrice);
		//if there was more than one box for pricing
    	// $price.each(function(a, b) {
    	// 	sum += parseFloat($(b).val());
    	// });
		sum = sum + parseFloat($price.val()) * parseFloat($quanity.val());
    	var tax = (sum * .055).toFixed(2);
    	var totalFull= (sum + parseFloat(tax));
    	$productsPrices.append('<div class="full"><span class="product">'+$product.val()+'</span><span>Qty: '+$quanity.val()+'</span></div><hr />');
    	$subtotal.text('Subtotal: ' +sum);
    	$taxAmount.text('Tax: ' +tax);
    	$total.text('Total: ' +totalFull);
		


	});
		
    	




})