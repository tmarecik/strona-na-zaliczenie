window.onload = function f() {

    let button = document.getElementById("add-element-1");
    let modelDOM = document.getElementById('container');


    modelDOM.addEventListener('click', function (e) {


        console.log(e);
        console.log(e.target);
        let button = document.getElementById('add-element-id-1');
        let itemName = modelDOM.getElementsByClassName('item-name')[0].textContent;
        let price = modelDOM.getElementsByClassName('price')[0].textContent;
        console.log(itemName + '' + price);


        let itemInCart = document.createElement('div');
        itemInCart.textContent = itemName + ' price: ' + price;
        itemInCart.classList.add('item-in-box');

        let items_numbers = 0;
        if(items_numbers < 8) {
            document.getElementById('cart').appendChild(itemInCart);
            items_numbers += 1;
            console.log(items_numbers);
        } else {
            console.log('koszyk jest pełny,\nnie możesz dodac więcej produktów do koszyka')
        }
    })






}