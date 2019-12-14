window.onload = function f() {

    let mainFieldsElements = document.querySelector('#main-field');
    // let addBUtton = document.getElementById('#main-field');
    let cart = document.getElementById('cart');

    /*todo dodawnie obiektu po kliknieciu w przycisk add*/
    mainFieldsElements.addEventListener("click", addItemsToCart, false, );

        function addItemsToCart(e) {

            let itemProperty = itemPropertyExtractor(e);
            let itemName = itemProperty[1];
            let itemPrice = itemProperty[2];
            let itemIdNumber = itemProperty[0];

            // console.log("itemName: " + itemName);
            // console.log("itemPrice " + itemPrice);
            // console.log("itemIdNumber: " + itemIdNumber);

             if (itemPrice != undefined) {
                 if (cart.childElementCount <= 8 + 2) {
                     createItems(itemName, itemPrice, itemIdNumber);
                     addPrice(itemPrice);
                 } else {
                     window.alert("there is no room in your basket \n please press buy or modify\n your items collection")
                 }
             }
    }

        function itemPropertyExtractor(e) {
            let property = [];
            if (e.target !== e.currentTarget) {
                property.push(e.target.id);
                property.push(e.target.className);
                property.push(e.target.value);
                return property;
            }
        }

        function createItems(itemsClass, itemsValue, itemIdNumber) {
            this.tagName = 'div';
            this.itemName = itemsClass;
            this.itemPrice = itemsValue;

            let description = document.createTextNode(this.itemName);
            let nowyElement = document.createElement(this.tagName);
            nowyElement.id = itemIdNumber.toString() + '_cart';

            nowyElement.appendChild(description);
            nowyElement.classList.add(itemIdNumber.toString());

            let price = document.createTextNode(this.itemPrice);
            let innerDiv = document.createElement(this.tagName);

            innerDiv.appendChild(price);
            innerDiv.classList.add('priceInBasket');

            nowyElement.appendChild(innerDiv);
            nowyElement.classList.add('itemsInBasket');


            let cart = document.getElementById('cart');
            innerDiv.classList.add('cartWithItems');
            cart.appendChild(nowyElement);

            let buttonDelete = document.createElement('button');
            let buttonDeleteLabel = document.createTextNode('Usuń');
            buttonDelete.appendChild(buttonDeleteLabel);
            buttonDelete.id = itemIdNumber.toString() + '_db';
            buttonDelete.value = this.itemPrice.toString();

            nowyElement.appendChild(buttonDelete);

            buttonDelete.addEventListener("click", deletItemFromCart, false,);
            // itemIdNumber ++;
        }

        let totalPrice = 0;
        function addPrice(itemPrice) {
            totalPrice += parseInt(itemPrice);
            document.getElementById('total-price').textContent = totalPrice.toString();
            // console.log(totalPrice);
        }

        function deletItemFromCart(e) {

            let objId = constructDeleteObjectId(e);
            let usuwany = document.getElementById(objId);
            usuwany.remove();
            subtructPrice(e);

        }

        function constructDeleteObjectId(e) {
            let buttonDeletId = e.target.id;
            let itemId = buttonDeletId.split('_')[0].toString();
            return itemId + '_ab_cart'
        }

        function subtructPrice(e) {
            itemPrice = e.target.value;
            totalPrice -= parseInt(itemPrice);
            document.getElementById('total-price').textContent = totalPrice.toString();
        }

    let buyButtom = document.getElementById('buy');

    buyButtom.addEventListener('click', function () {

            let totalPrice = cart.children[0].textContent.split(" ")[2];
            let numberOfItems = parseInt(cart.childElementCount - 3);

            if (numberOfItems <= 0){
                alert(' Your cart is empty ');
            } else if (numberOfItems === 1) {
                window.alert(`Bought 1 item for price ${totalPrice} PLN`);
            } else {
                window.alert(`Bought ${numberOfItems} item for ${totalPrice} PLN`);
            }
            removeItemsFromCart()
        });

    let emptyCartButtom = document.getElementById('empty-cart');
    emptyCartButtom.addEventListener('click', removeItemsFromCart, false);

        function removeItemsFromCart() {
            let numberOfItems = cart.childElementCount;
            for (let i = 3; i < numberOfItems; i ++){
                cart.children[3].remove();
            }
            setTotalPriceEqualZero()
        }

        function setTotalPriceEqualZero(){
            totalPrice = 0;
            document.getElementById('total-price').textContent = totalPrice.toString();
        }

};