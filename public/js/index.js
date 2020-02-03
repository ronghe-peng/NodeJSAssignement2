const addToCartButton = document.querySelectorAll(".button");
/*let getName = document.querySelector(".name");
let getPrice = document.querySelector(".price");
let getPic = document.querySelector(".pic");*/
const displayItems = document.querySelector(".displayProduct");
//const productDiv = document.querySelectorAll('.product')
const baseURL = "http://localhost:8000/api";

//const product = event.target.parentNode.children;

const insert = product => {
  console.log(product);
  console.log(product[0]);
  const pic = product[0].src;
  const name = product[1].innerHTML;
  const price = product[2].innerHTML;
  const btn = product[3];

  console.log(btn);

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
      //window.alert(data.message);
      let btnId = btn.id;
      let changeBtn = document.getElementById(btnId);
      changeBtn.innerHTML = "Item Added";
      console.log(changeBtn);
      changeBtn.classList.remove("button");
      changeBtn.classList.add("block");
      changeBtn.disabled = true;
      changeBtn.innerHTML = "Item Added";
    });

  console.log("pic:", pic, "name:", name, "price:", price); // sucess
};

const updateCart = event => {
  event.preventDefault();
  const product = event.target.parentNode.children;
  console.log(product);

  insert(product);
};

addToCartButton.forEach(div => {
  div.addEventListener("click", updateCart);
});

// Do the same thing, if html contents are not hard coded in.

/*const get = () => {
  displayItems.innerHTML = null;
  const url = baseURL + "/product";
  console.log(url);
  fetch(url, { method: "GET" })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      displayProducts(data);
    });
};
const displayProducts = products => {
  for (let i = 0; i < products.length; i++) {
    let product = document.createElement("div");
    product.setAttribute("class", "product");
    product.setAttribute("id", products[i].name); // set item's name as the element's id.

    let nameElem = document.createElement("h4");
    let priceElem = document.createElement("p");
    let picElem = document.createElement("img");
    let buttonElem = document.createElement("button");

    nameElem.setAttribute("class", "name");
    priceElem.setAttribute("class", "price");
    buttonElem.setAttribute("class", "addItemButton");
    buttonElem.setAttribute("type", "submit");
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

    displayItems.append(product);
    product.appendChild(picElem);
    product.appendChild(buttonElem);
    product.appendChild(nameElem);
    product.appendChild(priceElem);
  }
};
document.querySelector("showProductsBtn").addEventListener("click", get);*/
