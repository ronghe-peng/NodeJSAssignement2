//const showCartButton = document.querySelector("#getCart");
const displayItems = document.querySelector(".displayItem");
const baseURL = "http://localhost:8000/api";

//const get = () => {
//displayItems.innerHTML = null;
console.log("start get");
const url = baseURL + "/shoppingcart";
console.log(url);
fetch(url, { method: "GET" })
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
    displayItem(data);
  });
//};
const deleteItem = name => {
  console.log("name =", name);
  //let name = document.querySelector(".name").innerHTML;
  //let price = document.querySelector(".price").innerHTML;
  //let pic = document.querySelector(".pic").src;
  let removeProduct = document.querySelector(`#${name}`);
  // let removeName = document.querySelectorAll(".name")[i];
  // let removePrice = document.querySelectorAll(".price")[i];
  // let removePic = document.querySelectorAll(".pic")[i];
  // let removeBtn = document.querySelectorAll(".deleteButton")[i];
  const url = baseURL + "/shoppingcart/" + name;
  fetch(url, { method: "DELETE" })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      console.log(data.message);
      //window.alert(data.message);
    });
  removeProduct.remove();
};

const displayItem = items => {
  console.log("start display");
  for (let i = 0; i < items.length; i++) {
    let product = document.createElement("div");
    product.setAttribute("class", "product");
    product.setAttribute("id", items[i].name); // set item's name as the element's id.

    let nameElem = document.createElement("h4");
    let priceElem = document.createElement("p");
    let picElem = document.createElement("img");
    let buttonElem = document.createElement("button");

    nameElem.setAttribute("class", "name");
    priceElem.setAttribute("class", "price");
    buttonElem.setAttribute("class", "deleteButton");
    buttonElem.setAttribute("class", "button");
    buttonElem.setAttribute("type", "submit");
    picElem.setAttribute("class", "pic");

    nameElem.innerHTML = items[i].name;
    priceElem.innerHTML = items[i].price;
    picElem.src = items[i].picture;
    buttonElem.innerHTML = "Delete item";
    buttonElem.addEventListener("click", e => {
      console.log(e.target.parentNode.id);
      let name = e.target.parentNode.id; // find the exact element in html file, and get the element's id
      deleteItem(name);
    });

    displayItems.append(product);
    product.appendChild(picElem);
    product.appendChild(buttonElem);
    product.appendChild(nameElem);
    product.appendChild(priceElem);
    /*document
      .querySelector(".deleteButton")
      .addEventListener("click", deleteItem);*/
  }
};
/*const deleteItem = () => {
  let name = document.querySelector(".name").innerHTML;
  let price = document.querySelector(".price").innerHTML;
  let pic = document.querySelector(".pic").src;
  const url =
    baseURL +
    "/shoppingcart" +
    "?name=" +
    name +
    "&price=" +
    price +
    "&picture=" +
    pic;
  fetch(url, { method: "DELETE" })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
    });
};*/

//showCartButton.addEventListener("click", get);
