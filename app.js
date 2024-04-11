//selectors

let items = document.querySelector("#items");
let quantity = document.querySelector("#quantity");
let inputForm = document.querySelector("#inputForm");
let rows = document.querySelector(".rows");
let total = document.querySelector("#total");

//function

function calTotal(){
    let costs = document.querySelectorAll(".cost");
    let totalCost = [...costs].reduce((pv,cv)=>pv+Number(cv.innerText),0);
    total.innerText = totalCost;
}

function del(event){
    if(confirm("Are u sure U want to delete?")){
        event.target.parentElement.parentElement.remove()

        calTotal()
    }    
}


//process

products.forEach(function (product) {
  let newOption = new Option(product.name, product.id);
  items.append(newOption);
});

inputForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let currentProduct = products.find((product) => product.id == items.value);
  let newTr = document.createElement("tr");
  let cost = currentProduct.price * quantity.valueAsNumber;
  newTr.innerHTML = `
            
            <td>${currentProduct.name}
            <p class="text-small text-danger del-btn" onclick="del(event)">Delete</p></td>
            <td class="text-end">${currentProduct.price}</td>
            <td class="text-end">${quantity.value}</td>
            <td class="text-end cost">${cost}</td>`;
  rows.append(newTr);
  inputForm.reset();
  calTotal()
});
