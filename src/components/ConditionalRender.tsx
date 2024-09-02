import React, {useState} from "react"

const ConditionalRender = ()=>{
    const [x] = useState(true)
    const [nome] = useState("Felipe")
    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, imprime</p> }
            <h1>Qual o seu nome?</h1>
            {nome === "Felipe" ? (
                <p>Meu nome está certo é Felipe</p>
            ):(
                <p>Meu nome está errado, não é Felipe</p>
            )}
        </div>
    )
}

export default ConditionalRender