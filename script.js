
var quantity = prompt('add meg a darabszámot');
var type = prompt('add meg a típust');

console.log(quantity);
console.log(type);

var types = {
    student: 300,
    adult: 350,
    retired: 280,
}

var price = type === 'student' ? 300:350;
var discount = quantity > 5 ? 0.9 : 1;
var total = price * quantity * discount;

alert('A vásárlás összege: ' + total + ' Ft');