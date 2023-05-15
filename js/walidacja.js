function sprawdzPole(pole_id,obiektRegex) {
    let obiektPole = document.getElementById(pole_id);
    return obiektRegex.test(obiektPole.value);
}

function sprawdz_radio(nazwa_radio){
    let obiekt=document.getElementsByName(nazwa_radio);
    let wybrany;
    for (let i=0;i<obiekt.length;i++) {
        wybrany=obiekt[i].checked;
        if (wybrany) return true;
    }
    return false;
}
function sprawdz_checkbox(checkbox_id){
    let obiekt=document.getElementById(checkbox_id);
    return obiekt.checked;
}

function wyswietlDane(){
    const checkbox_buttons = document.querySelectorAll('input[type=checkbox]');
    let checkbox_array = [];
    for(const checkbox_button of checkbox_buttons){
        if(checkbox_button.checked){
            checkbox_array.push(checkbox_button.value);
        }
    }

    const radio_buttons = document.querySelectorAll('input[name="zaplata"]');
    let zaplata;
    for(const radio_button of radio_buttons){
        if(radio_button.checked){
            zaplata = radio_button.value;
            break;
        }
    }

    let message = "Dane z wypełnionego przez ciebie formularza: " +
        "\nNazwisko: " + document.getElementById("nazwa").value +
        "\nWiek: " + document.getElementById("wiek").value +
        "\nKraj: " + document.getElementById("kraj").value +
        "\nE-mail: " + document.getElementById("email").value +
        "\nWybrane produkty: " + checkbox_array +
        "\nSposób zapłaty: " + zaplata;

    alert(message);

    return true;
}

function sprawdz() {
    console.log("twoja stara");
    let ok=true;
    const obiektNazwa = /^[a-zA-Z]{2,20}$/;
    const obiektEmail =/^([a-zA-Z0-9])+([.a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-]+)+/;
    const obiektWiek=/^[1-9][0-9]{1,2}$/;

    if (!sprawdzPole("nazwa",obiektNazwa)) {
        ok=false;
        document.getElementById("nazwa_error").innerHTML="Wpisz poprawnie nazwisko!";
    } else document.getElementById("nazwa_error").innerHTML="";

    if (!sprawdzPole("wiek",obiektWiek)) {
        ok=false;
        document.getElementById("wiek_error").innerHTML="Wpisz poprawny wiek!";
    } else document.getElementById("wiek_error").innerHTML="";

    if (!sprawdzPole("email",obiektEmail)) {
        ok=false;
        document.getElementById("email_error").innerHTML="Wpisz poprawny adres email!";
    } else document.getElementById("email_error").innerHTML="";

    if(!(sprawdz_checkbox("php") || sprawdz_checkbox("c") || sprawdz_checkbox("java"))){
        ok=false;
        document.getElementById("produkt_error").innerHTML="Wybierz jakiś produkt!";
    } else document.getElementById("produkt_error").innerHTML="";

    if(!sprawdz_radio("zaplata")){
        ok=false;
        document.getElementById("zaplata_error").innerHTML="Wybierz sposób zapłaty!";
    } else document.getElementById("zaplata_error").innerHTML="";

    return ok && wyswietlDane();
}