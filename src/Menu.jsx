import { Match, Switch, createSignal } from "solid-js";

export default function Menu() {

    const [x, setX] = createSignal(7);

    return (
        <Switch fallback={<p>X je između 5 i 10</p>}>

            <Match when={x() > 10}>
                <p>X je veći do 10</p>
            </Match>

            <Match when={x() < 5}>
                <p>X je manji do 5</p>
            </Match>

        </Switch> 
            
    
    );

}