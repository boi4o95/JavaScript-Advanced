function addItem() {
    let text = document.getElementById('newItemText').value;
    let val = document.getElementById('newItemValue').value;
    let option = document.createElement('option');
    option.value = val;
    option.appendChild(document.createTextNode(text));
    document.getElementById("menu").appendChild(option);
    document.getElementById('newItemText').value = '';
    document.getElementById('newItemValue').value = '';
}