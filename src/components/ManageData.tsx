import React,{useState} from 'react'
const ManageData = () =>{
    var [numero, setNumero] = useState(0)
    
    function change(){
        setNumero(numero+=1)
    }
    return (
        <div>
            <p>Mudar o número {numero}</p>
            <button onClick={change}>Mudar</button>
        </div>
    )
}

export default ManageData 