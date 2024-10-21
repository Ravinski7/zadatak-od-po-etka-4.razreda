import { createSignal, Show } from "solid-js";

export default function Login() {
    const [loggedIn, setLoggedIn] = createSignal(false);

    const toggle = () => setLoggedIn(!loggedIn());

    return (
        <div>

            <Show when={loggedIn()}>      
                <button onClick={toggle}>Log out</button>
            </Show>

            <Show when={!loggedIn()}>
            <button onClick={toggle}>Log in</button>
            </Show>




        </div>
    );



}