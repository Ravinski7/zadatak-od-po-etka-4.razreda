export default function Refs() {

    let ivo;

    function checkElement() {

        console.log(ivo.innerHTML);

        const newElement = document.createElement("p");
        newElement.textContent = "riba ribi grize rep! LAMAO";
        ivo.appendChild(newElement);

    }

    return (

        <>

            <div ref={ivo}>
                Tajna
            </div>

            <button onClick={checkElement}>Reci mi</button>

        </>
    );
}