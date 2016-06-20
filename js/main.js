var total = 0;

var isBlueInCart = false;
var isPinkInCart = false;
var isOrangeInCart = false;

var subtotalBox = document.getElementById('subtotal');
var totalBox = document.getElementById('total');

var blueCart = document.getElementById('blueShoppingCart');
var pinkCart = document.getElementById('pinkShoppingCart');
var orangeCart = document.getElementById('orangeShoppingCart');

function addToCart(price,color) {
	if(color==='blue' && isBlueInCart===false) {
		total += price;
		isBlueInCart = true;
	}
	else if(color==='blue' && isBlueInCart===true) {
		total -= price;
		isBlueInCart = false;
	}
	else if(color==='pink' && isPinkInCart===false) {
		total += price;
		isPinkInCart = true;
	}
	else if(color==='pink' && isPinkInCart===true) {
		total -= price;
		isPinkInCart = false;
	}
	else if(color==='orange' && isOrangeInCart===false) {
		total += price;
		isOrangeInCart = true;
	}
	else if(color==='orange' && isOrangeInCart===true) {
		total -= price;
		isOrangeInCart = false;
	}

	
	subtotalBox.innerHTML = total;
	totalBox.innerHTML = calculateFinalTotal();

}

function calculateFinalTotal() {
	return (total*.065)+total;
}
