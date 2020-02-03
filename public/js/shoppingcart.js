import { displayItem } from "./modules/module.js";
//const displayItems = document.querySelector(".displayItem");
const baseURL = "http://localhost:8000/api";

console.log("start get");
const url = baseURL + "/shoppingcart";
console.log(url);
fetch(url, { method: "GET" })
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data);
    data.forEach(data => {
      console.log(data.name);
    });
    displayItem(data);
  });
