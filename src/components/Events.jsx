const Events = () => {
    const handleEvent = () => {
        alert("Botao clicado")
        console.log("Cliquei")
    }

    const handleText = () => {
        console.log("BOHEMIIIIIAAAAAA....")
    }

    return(
        <div>
            <div>
                <button onClick={handleEvent}>Clique aqui</button>
                <p onClick={handleText}>Saiba mais</p>
            </div>
        </div>
    )
}

export default Events