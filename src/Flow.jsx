import { createSignal } from "solid-js";

export default function Flow() {
    const [users, setUsers] = createSignal([
        { id: "1", name: "Pero Peric" },
        { id: "2", name: "Jure Jurić" },
        { id: "3", name: "Maksim Maksić" },
        { id: "4", name: "Janko Bananko" },
    ]);

    return (
        <><div>
            
        <For each={users()}>

            {(user, i) => 
            <div>

                <h3>{user.name}</h3>
                <p>Korisnik s indeksom {i} ima ID {user.id}</p>
                          
            </div>
            
            }


        </For>
    </div>
    
            <div>
                <Index each={users()}>
                    {
                        (user, i) =>
                            <div>
                                <h3>{user().name}</h3>
                                <p>{i}: id={user().id}</p>
                                
                            </div>
                    }
                </Index>
            </div>
    </>
        
    );
}