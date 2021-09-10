let todos = [];

function getItems() {
  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => _displayItems(data))
      .catch(error => console.error('Unable to get items.', error));
}

function _displayItems(data) {
    const tBody = document.getElementById('todos');
    tBody.innerHTML = '';

    data.forEach(item => {
        let tr = tBody.insertRow();

        let td1 = tr.insertCell(0);
        let textNode1 = document.createTextNode(item.id);
        td1.appendChild(textNode1);

        let td2 = tr.insertCell(1);
        let textNode2 = document.createTextNode(item.name);
        td2.appendChild(textNode2);

        let td3 = tr.insertCell(2);
        let textNode3 = document.createTextNode(item.username);
        td3.appendChild(textNode3);

        let td4= tr.insertCell(3);
        let textNode4 = document.createTextNode(item.email);
        td4.appendChild(textNode4);

        let td5= tr.insertCell(4);
        let textNode5 = document.createTextNode(item.website);
        td5.appendChild(textNode5);


    });

    todos = data;
}
