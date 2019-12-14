window.onload = function f() {

    let mainFieldsElements = document.querySelector('#main-field');
    let cart = document.getElementById('cart');

    mainFieldsElements.addEventListener("click", addItemsToCart, false, );

        function addItemsToCart(e) {

            let itemProperty = itemPropertyExtractor(e);
            let itemName = itemProperty[1];
            let itemPrice = itemProperty[2];
            let itemIdNumber = itemProperty[0];

             if (itemPrice != undefined) {
                 if (cart.childElementCount <= 8 + 1) {
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

            let nowyElement = document.createElement(this.tagName);
            nowyElement.id = itemIdNumber.toString() + '_cart';
            nowyElement.classList.add(itemIdNumber.toString());


            let divContainerForNameAndDeleteButton = document.createElement(this.tagName);
            divContainerForNameAndDeleteButton.classList.add('divContainer');

            let innerDivDescription = document.createElement(this.tagName);
            innerDivDescription.classList.add('item-name');
            let description = document.createTextNode(this.itemName);
            innerDivDescription.appendChild(description);

            // nowyElement.appendChild(innerDivDescription);
            divContainerForNameAndDeleteButton.appendChild(innerDivDescription);


            let buttonDelete = document.createElement('button');
            let buttonDeleteLabel = document.createTextNode('Usuń');
            buttonDelete.appendChild(buttonDeleteLabel);
            buttonDelete.id = itemIdNumber.toString() + '_db';
            buttonDelete.value = this.itemPrice.toString();

            divContainerForNameAndDeleteButton.appendChild(buttonDelete);
            nowyElement.appendChild(divContainerForNameAndDeleteButton);
            // nowyElement.appendChild(buttonDelete);


            let innerDiv = document.createElement(this.tagName);
            innerDiv.classList.add('priceInBasket');

            let price = document.createTextNode(this.itemPrice);
            innerDiv.appendChild(price);


            nowyElement.appendChild(innerDiv);
            nowyElement.classList.add('itemsInBasket');


            let cart = document.getElementById('cart');
            innerDiv.classList.add('cartWithItems');

            cart.appendChild(nowyElement);


            buttonDelete.addEventListener("click", deletItemFromCart, false,);

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

            let totalPrice = cart.children[1].textContent.split(" ")[2];
            console.log("total price: " + totalPrice);
            let numberOfItems = parseInt(cart.childElementCount - 2);

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
            for (let i = 2; i < numberOfItems; i ++){
                cart.children[2].remove();
            }
            setTotalPriceEqualZero()
        }

        function setTotalPriceEqualZero(){
            totalPrice = 0;
            document.getElementById('total-price').textContent = totalPrice.toString();
        }

};