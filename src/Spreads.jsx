import { onMount } from "solid-js";


export default function Spreads() {

    const objekt1 = {
        ime: "Pero",
        prezime: "Perić",
        adresa: "Trg slobode 7, Koprivnica"
    };
    const objekt2 = {
        ime: "Ivo",
        OIB: "1234566789456",
        
    };

    const spoj = {...objekt1, ...objekt2 };


    const polje1 = [1,2,3];
    const polje2 = ["pon", "uto", "sri"];

    const spojPolja = [...polje1, ...polje2];

    const elNaPoc = [0, ...spojPolja];
    const elNaKraj = [...spojPolja, "cet"];

   

    onMount(() => {
        console.log("Objekt1", objekt1);
        console.log("Objekt2", objekt2);

        console.log("Objekt1 + Objekt2", spoj);
        console.log("Spoj polja je", spojPolja);

        console.log("Element na pocetku", elNaPoc);
        console.log("Element na kraju", elNaKraj);
    });




    return(

        <>
            <Local ime = "Matija" prezime="Mohenski" adresa="Negdi nekaj" />
            <Local ime={objekt1.ime} prezime={objekt1.prezime} adresa={objekt1.adresa} />
            <Local {...objekt1} />
        </>

    ); 
}



function Local (props){

    return(
        <>
        <p>Ova komponenta je primila podatke iz vana.</p>
        <p>Podaci su sljedeći:</p>
        <ul>
            <li>ime: {props.ime}</li>
            <li>prezime: {props.prezime}</li>
            <li>adresa: {props.adresa}</li>
        </ul>
        </>
    );
}