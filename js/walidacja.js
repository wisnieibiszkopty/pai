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

    return ok;
}