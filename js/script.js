function obliczRate(){
    let k = parseInt(document.getElementById("kwota").value);
    let pr = parseInt(document.getElementById("procent").value);
    let n = parseInt(document.getElementById("ile_rat").value);
    let pr_mc = pr/12;
    let rata = (k*pr_mc)/(1-(1/((1+pr_mc)^n)));
    document.getElementById("rata").value=rata;
    document.getElementById("kwota_z_odsetkami").value=rata*n;

}

let operation;

function choseOperation(operator){operation = operator;}

function calculate(){
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);

    if(isNaN(number1) || isNaN(number2) || isFinite(number1) || isFinite(number2)){
        alert("Proszę wprowadzić poprawne liczby!");
        return 0;
    }

    let result="";
    switch(operation){
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 / number2;
            break;
        default:
            alert("Nie wybrano działania!");
    }
    document.getElementById("result").value=result;
}