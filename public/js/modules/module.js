//const displayProducts = document.querySelector(".displayProduct");

const displayItems = document.querySelector(".displayItem");
const baseURL = "http://localhost:8000/api";

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

      // Disable button when item is added
      let btnId = btn.id;
      let disableBtn = document.getElementById(btnId);

      disableBtn.classList.remove("button");
      disableBtn.classList.add("block");
      disableBtn.disabled = true;
      disableBtn.innerHTML = "Item Added";
    });
};

const deleteItem = name => {
  console.log("name =", name);

  let removeProduct = document.querySelector(`#${name}`);
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
  }
};

export { insert, displayItem, deleteItem };
