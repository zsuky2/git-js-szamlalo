//Alapérték felvétele
let count = 0;

//Gombok és egyéb elemek eltárolása változóba
const value = document.getElementById("value");
//const decrease = document.getElementById("decrease");
//const reset = document.getElementById("reset");
//const increase = document.getElementById("increase");

//Ciklushoz
const btns = document.querySelectorAll(".btn"); 

/*Egyszerű módszer
increase.addEventListener("click", () => {

    //Növelem at alapértéket 1-el
    count++;

    //Megnézem, hogy az alapérték nagyobb-e mint 0
    if (count > 0) {

        //Ha nagyobb, akkor zöld betűszínt kap
        value.style.color = "green";
    }

    //Majd az alapértékem aktuális értékét beállítom a value id-val ellátott spamnek
    value.textContent = count;

})

decrease.addEventListener("click", () => {

    //Csökkentem at alapértéket 1-el
    count--;

    //Megnézem, hogy az alapérték nagyobb-e mint 0
    if (count < 0) {

        //Ha nagyobb, akkor zöld betűszínt kap
        value.style.color = "red";
    }

    //Majd az alapértékem aktuális értékét beállítom a value id-val ellátott spamnek
    value.textContent = count;

})

reset.addEventListener("click", () => {

    //Az alapértéket visszaállítjuk nullára
    count=0;
 
    //Visszaállítom az alap betűszínt
    value.style.color = "black";

     //Majd az alapértékem aktuális értékét beállítom a value id-val ellátott spamnek
     value.textContent = count;        
})*/

//Ciklussal végig lépkedek az eltárolt gombokon, amelyeken rajta van a btn class
btns.forEach((btn) => {

    //Az összes gomb közül, amelyeket bejárok a ciklussal, azt kattintom meg, amelyik az aktuális ciklusgutáskor jön a sorba (első ciklusfutás -> 0.indexű gond (decrease) stb)
    btn.addEventListener("click", (e) => {

        //Az éppen aktuálisan megkattintott gombon milyen class/classok vannak
        const style = e.currentTarget.classList;

        //Ha az aktuálisan megkattintott gombok közül tartalmazza a "decrease" classt
        if (style.contains("decrease")) {

            //Csökkentjük az alapértéket
            count--;

            //... "increase" classt
        } else if (style.contains("increase")) {

            //Növeljük az alapértéket
            count++;

            //Ha ezek közül egyik sem, akkor marad a "reset" class
        } else {

            //Visszaállítjuk az alapértéketű
            count = 0;
        }

        //Színek hozzáadása a spanhez
        if (count > 0) {

            value.style.color = "green";
        } else if (count < 0) {

            value.style.color = "red";
        } else {

            value.style.color = "black";
        }

        value.textContent = count;
    })

})