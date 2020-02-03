import { insert } from "./modules/module.js";
const addToCartButton = document.querySelectorAll(".button");

const baseURL = "http://localhost:8000/api";

// Check if item is in shooping cart. If yes, disable 'add' button

const url = baseURL + "/shoppingcart";
fetch(url, { method: "GET" })
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);

    data.forEach(data => {
      //console.log(data.name);
      let itemName = data.name;
      let getBtn = document.getElementById(`${itemName}`);
      getBtn.classList.remove("button");
      getBtn.classList.add("block");
      getBtn.disabled = true;
      getBtn.innerHTML = "Item Added";
    });
  });

const updateCart = event => {
  event.preventDefault();
  const product = event.target.parentNode.children;
  console.log(product);

  insert(product);
};

// Add function to each button

addToCartButton.forEach(div => {
  div.addEventListener("click", updateCart);
});

//////////////////
// Do the same thing, if html contents are not hard coded in.

//const displayProducts = document.querySelector(".displayProduct");

/*const get = () => {
  displayProducts.innerHTML = null;
  const url = baseURL + "/product";
  console.log(url);
  fetch(url, { method: "GET" })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      displayProducts(data);
      CheckCart()
    });
};

const CheckCart = () => {
  const url = baseURL + "/shoppingcart";
fetch(url, { method: "GET" })
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);

    data.forEach(data => {
      //console.log(data.name);
      let itemName = data.name;
      let getBtn = document.getElementById(`${itemName}`);
      getBtn.classList.remove("button");
      getBtn.classList.add("block");
      getBtn.disabled = true;
      getBtn.innerHTML = "Item Added";
    });
  });
}

const displayProducts = products => {
  for (let i = 0; i < products.length; i++) {
    let product = document.createElement("div");
    product.setAttribute("class", "product");
    
    let nameElem = document.createElement("h4");
    let priceElem = document.createElement("p");
    let picElem = document.createElement("img");
    let buttonElem = document.createElement("button");

    nameElem.setAttribute("class", "name");
    priceElem.setAttribute("class", "price");
    buttonElem.setAttribute("class", "addItemButton");
    buttonElem.setAttribute("type", "submit");
    buttonElem.setAttribute("id", `${products[i].name}`);
    picElem.setAttribute("class", "pic");

    nameElem.innerHTML = products[i].name;
    priceElem.innerHTML = products[i].price;
    picElem.src = products[i].picture;
    buttonElem.innerHTML = "Add To Cart";
    buttonElem.addEventListener("click", () => {
      addItem(products[i].name, products[i].price, products[i].picture);
    });

    addItem = () => {
      let name = document.querySelectorAll(".name")[i].innerHTML;
      let price = document.querySelectorAll(".price")[i].innerHTML;
      let pic = document.querySelectorAll(".pic")[i].src;

      const url =
        baseURL +
        "/shoppingcart" +
        "?name=" +
        name +
        "&price=" +
        price +
        "&picture=" +
        pic;

      fetch(url, { method: "POST" })
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data);
          console.log(data.message);
          window.alert(data.message);
        });
    };

    displayProducts.append(product);
    product.appendChild(picElem);
    product.appendChild(buttonElem);
    product.appendChild(nameElem);
    product.appendChild(priceElem);
  }
};
document.querySelector("showProductsBtn").addEventListener("click", get);*/
