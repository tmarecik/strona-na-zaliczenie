window.onload = function f() {

    let mainFieldsElements = document.querySelector('#main-field');

    let col = mainFieldsElements.addEventListener("click", addItemsToCart, false, );


    function addItemsToCart(e) {
       let itemProperty = itemPropertyExtractor(e);
        createItems(itemProperty[1], itemProperty[2]);
        // console.log('itemProp ' + itemProp);
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

    function createItems(itemsClass, itemsValue ) {
        this.tagName = 'div';
        this.itemName = itemsClass;
        this.itemPrice = itemsValue;

        let description = document.createTextNode(this.itemName);
        let nowyElement = document.createElement(this.tagName);   // Create a <button> element
        nowyElement.appendChild(description);

        let price = document.createTextNode(this.itemPrice);
        let innerDiv = document.createElement(this.tagName);   // Create a <button> element

        innerDiv.appendChild(price);
        innerDiv.classList.add('priceInBasket');

        nowyElement.appendChild(innerDiv);
        nowyElement.classList.add('itemsInBasket');

        let cart = document.getElementById('cart');
        innerDiv.classList.add('cartWithItems');
        cart.appendChild(nowyElement);
    }


}