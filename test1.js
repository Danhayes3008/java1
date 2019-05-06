var price = 4.99;
var stock = 210;
var discount;
var total;
var buy = 5;

total = price * stock;
discount = total / 100 * 90;

var el = document.getElementById('cost');
el.textContent = '$' + discount;

var sk = document.getElementById('sk');
sk.textContent = stock;

var prs = document.getElementById('price');
prs.textContent = '$' + price;

var add = document.getElementById('add');
add.onclick = stock - buy;