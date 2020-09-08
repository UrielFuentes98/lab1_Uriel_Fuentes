var total = 0.0;

function get_element_li (name, price) {
  return `<li class="added-item">name: ${name} price: $${price}  <button class="remove-item" onclick="remove_item.call(this)" >remove</button></li>`
}

function add_item_to_list_with_template (name_ob, value_ob) {
  let name_el = document.getElementById("item-name");
  let price_el = document.getElementById("item-value");
  let name = name_el.value;
  let price = price_el.value;
  
  if (/^\d+(\.\d+)?$/.test(price) == false || name === ""){
    if (/^\d+(\.\d+)?$/.test(price) == false){
      inputError("item-value");
    }else{
      removeErrorEl(price_el);
    }
    if (name === ""){
      inputError("item-name");
    }else{
      removeErrorEl(name_el);
    }
  } else{
    removeErrorEl(name_el);
    removeErrorEl(price_el);
    let price_float = parseFloat(price);
    let new_entry = get_element_li (name, price);
    document.getElementById("items").innerHTML += new_entry;
    total += price_float;
    showTotal(total);    
  }
}

function removeErrorEl (element){
  if (element.classList.contains("error")){
    element.classList.remove("error");
  }
}

function inputError (id) {
  var element = document.getElementById(id);
  element.classList.add("error");
}

function showTotal (total){
  var total_show = Math.abs(total);
  total_show = total_show.toFixed(2);
  debugger;
  let prompt = `total: $${total_show}`;
  document.getElementById("total").innerHTML = prompt;
}

function remove_item () {
  let list_entry = this.parentNode.innerText;
  let price_string = list_entry.match(/\d+(\.\d+)?/);
  let price = parseFloat(price_string);
  this.parentNode.remove();
  total -= price;
  showTotal(total);
}

