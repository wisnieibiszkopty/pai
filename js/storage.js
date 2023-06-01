ITEMS_COUNT = 0;

document.getElementById("delete").
    addEventListener("click",function(){
        let element = document.getElementById("usun").value;
        let i, item;
        for(i=0;i<localStorage.length;i++){
            item = JSON.parse(localStorage.getItem('item_'+i));
            if(item.produkt === element){
                localStorage.removeItem('item_'+i);
            }
        }
});

function saveData(){
    sessionStorage.setItem(document.getElementById("rgb").value,
        document.getElementById("nazwa").value);
    document.getElementById("rgb").value = "";
    document.getElementById("nazwa").value = "";
}

function showData(){
    document.getElementById("data").innerHTML = "";
    let i, key, item, element;
    for(i=0;i<sessionStorage.length;i++){
        key = sessionStorage.key(i);
        item = sessionStorage.getItem(key);
        element = document.createElement("div");
        element.innerHTML = item + " kod koloru: " + key;
        element.style.backgroundColor= key;
        document.getElementById("data").appendChild(element);
        document.getElementById("data").innerHTML += '<br>';
    }
}

function deleteData(){
    sessionStorage.clear();
    document.getElementById("data").innerHTML = "";
}

function saveBasket(){
    let item = {};
    item.produkt = document.getElementById("produkt").value;
    item.cena = document.getElementById("cena").value;
    item.kolor = document.getElementById("kolor").value;
    item.ilosc = document.getElementById("ilosc").value;

    localStorage.setItem("item_"+ITEMS_COUNT, JSON.stringify(item));
    ITEMS_COUNT++;

    document.getElementById("produkt").value = "";
    document.getElementById("cena").value = "";
    document.getElementById("kolor").value = "";
    document.getElementById("ilosc").value = "";
}

function showBasket(){
    document.getElementById('basket').innerHTML="";
    let basket = document.getElementById('basket');
    let table = document.createElement('table');

    table.innerHTML += "<tr><th>Produkt</th><th>Cena</th><th>Kolor</th><th>Ilość</th></tr>";

    let i, j, item, values;
    for(i=0;i<localStorage.length;i++){

        item = JSON.parse(localStorage.getItem('item_'+i));
        values = [item.produkt, item.cena, item.kolor, item.ilosc];

        let tr = document.createElement('tr');
        for(j=0;j<4;j++) {tr.appendChild(document.createElement('td'));}
        tr.cells[0].appendChild(document.createTextNode(values[0]));
        tr.cells[1].appendChild(document.createTextNode(values[1]));
        tr.cells[2].appendChild(document.createTextNode(values[2]));
        tr.cells[3].appendChild(document.createTextNode(values[3]));

        table.appendChild(tr);
    }
    basket.appendChild(table);
}

function clearBasket(){
    document.getElementById("basket").innerHTML="";
    localStorage.clear();
}
