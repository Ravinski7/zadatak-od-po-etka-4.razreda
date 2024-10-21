import { createEffect, createSignal } from "solid-js";

export default function Counter() {

    const [counter, setCounter] = createSignal(0);

    const doubleCount = () => counter() * 2;

    const tripleCount = () => counter() * 3;

    createEffect(() => {
        if (counter() % 2 == 0){
            console.log(counter() + " je djeljiv s 2")
        }
    });

    setInterval(() => { 
        setCounter(counter() + 1);
    }, 1000);

    return (
        <div>
            Brojač: {counter()} <br></br>
            Dupli Brojač: {doubleCount()}
            <br></br>
            Trostruki Brojač: {tripleCount()}
        </div>
    );

}