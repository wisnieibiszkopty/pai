function pokaz(id){
    let content = "";
    switch(id){
        case 2: content += pokazGalerie(); break;
        case 3: content += pokazPost(); break;
        case 4: content += pokazKontakt(); break;
        default: content += pokazO();
    }
    document.getElementById("blok").innerHTML = content;
}

function pokazGalerie(){
    let content ='<h2>Moja galeria</h2>';
    content +=' <div class="galeria">';
    for(let i=1; i<10; i++){
        content += '<div class="slajd"><img src="miniatury/obraz' + i + '.jpg" alt="Zdjęcie 1" /></div>';
    }
    return content + '</div>';
}

function pokazPost(){
    let content = '<h2>Dodaj post</h2>';
    content += '<form method="post" id="form">' +
        '<label for="email">Twój email:</label><br><input type="text" id="email" name="email"><br>' +
        '<label for="name">Nazwisko i imię:</label><br><input type="text" id="name" name="name"><br>' +
        '<label for="phone">Telefon:</label><br><input type="text" id="phone" name="phone"><br>' +
        '<p>Zainteresowania</p>' +
        '<div id="checkbox"><input type="checkbox" id="sport" name="sport" value="sport"><label for="sport">Sport</label><br>' +
        '<input type="checkbox" id="muzyka" name="muzyka" value="muzyka"><label for="muzyka">Muzyka</label><br>' +
        '<input type="checkbox" id="film" name="film" value="film"><label for="film">Film</label><br>' +
        '<input type="checkbox" id="inne" name="inne" value="inne"><label for="inne">Inne</label><br></div>' +
        '<p>Wiek</p>' +
        '<div id="radio"><input type="radio" id="10" name="wiek" value="10"><label for="10">Mniej niż 10</label><br>' +
        '<input type="radio" id="10-20" name="wiek" value="10-20"><label for="10-20">10-20</label><br>' +
        '<input type="radio" id="21-30" name="wiek" value="21-30"><label for="21-30">21-30</label><br>' +
        '<input type="radio" id="31-40" name="wiek" value="31-40"><label for="31-40">31-40</label><br>' +
        '<input type="radio" id="41-51" name="wiek" value="41-51"><label for="41-51">41-51</label><br>' +
        '<input type="radio" id="50" name="wiek" value="50"><label for="50">Więcej niż 50</label><br></div>' +
        '<p>Komentarz</p>' +
        '<textarea id="text" rows="5" cols="50"></textarea><br>' +
        '<button onclick="pokazDane()">Wyślij</button><br>' +
    '</form>';
    return content;
}

function pokazDane(){
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    const checkbox_buttons = document.querySelectorAll('input[type=checkbox]');
    let checkbox_array = [];
    for(const checkbox_button of checkbox_buttons){
        if(checkbox_button.checked){
            checkbox_array.push(checkbox_button.value);
        }
    }

    const radio_buttons = document.querySelectorAll('input[name="wiek"]');
    let age;
    for(const radio_button of radio_buttons){
        if(radio_button.checked){
            age = radio_button.value;
            break;
        }
    }

    let comment = document.getElementById("text").value;

    let message = "E-mail: " + email + "\nImię: " + name + "\nTelefon: " + phone +
        "\nZainteresowania: " + checkbox_array + "\nWiek: " + age + "\nKomentarz: " + comment;
    confirm(message);
}

function pokazKontakt(){
    let content = '<h2>Kontakt</h2>';
    content += '<div id="kontakt"><p>Imie i nazwisko: Kamil Wodowski</p>' +
    '<p>Telefon: 669399708</p>' +
    '<p>E-mail: KamilWodowski@o2.pl</p></div>';
    return content;
}

function pokazO(){
    let content ='<h2>Pierwsze kroki</h2> ';
    content += '<p> W aplikacjach typu SPA (ang. Single Page Application) po przesłaniu pierwszego żądania' +
    'również dochodzi do odesłania początkowego dokumentu HTML do przeglądarki, jednak po' +
    'zakończeniu inicjalizacji wszelkie działania użytkownika prowadzą tylko do wysłania żądań' +
    'asynchronicznie (w tle za pomocą AJAX). Odpowiedziami na te żądania zwykle są tylko' +
    'fragmenty kodu HTML (zamiast całych dokumentów), a niekiedy wyłącznie dane, które' +
    'następnie są wstawiane/zamieniane w ramach istniejących elementów dokumentu HTML.' +
    'Nigdy nie dochodzi do zamiany całego dokumentu HTML.</p>'+
    '<p class="srodek"><img src="baner.jpeg" alt="Baner"></p>'+
    '<article><h2>Wady SPA</h2><p>'+
    ' Czas wytworzenia oraz nakład pracy włożony w stworzenie aplikacji jest o wiele większy, co\n' +
        ' wiąże za sobą dodatkowe koszta, dlatego tworzenie małych stron jest nieopłacalne - efekt dla\n' +
        ' strony z jedną zakładką jest niezauważalny. Pozycjonowanie stron wymaga większego nakładu\n' +
        ' pracy. Obecnie roboty indeksujące Google nie radzą sobie ze stronami tego typu, co wiąże się\n' +
        ' z koniecznością tworzenia rozwiązań przystosowanych dla robotów.</p></article>';
    return content;
}