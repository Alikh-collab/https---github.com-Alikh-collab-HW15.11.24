let parol = "amjilt_the_best";
let num = 0;
let maxPop = 5;


while (num < maxPop) {
    let password = prompt("Parol jaziniz:")

    if (password == parol) {
        alert("Durys parol")
        break;
    }else{
        alert("Qate parol, paroldy qaita engiziniz:")
        num += 1;
    }
    
}