const Challenge = () =>{
    return(
        <button onClick={soma}>Somar valores</button>
    )


}

function soma(){
    const a = 10
    const b = 20
    alert(a+b)
    return (<p>{a+b}</p>)
}

export default Challenge