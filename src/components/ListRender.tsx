import React,{useState} from "react"
const ListRender = () =>{
    const [list] = useState(["Felipe","Lucas","Fábio","Maria"])
    const [lista, setUsers] = useState([
        {id:1, name:"Ferdinand", age:14},
        {id:2, name: "Antonino",age:23},
        {id:3, name:"Tulino", age:54}
    ])



    var [b,setUser] = useState([
        { id: 1, nome: 'Felipe', age: 21 },
        { id: 2, nome: 'Maria', age: 15 },
        { id: 3, nome: 'Joao', age: 24 },
        { id: 4, nome: 'Rita', age: 52 },
      ]);
        
    function apagar() {
        try{
            if(b.length===0){
                throw new Error
            }
            const ran = Math.floor(Math.random() * b.length);
            const updatedList = [...b];
            updatedList.splice(ran, 1);
            setUser(updatedList);
        }catch(e){
            alert("Todos os usuários já foram removidos!")
        }
    }
    
    return (
        <div>
            <ol>
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ) )}
            </ol>

            <ul>
                {b.map((item)=>(
                    <li key={item.id}>{item.nome} - {item.age}</li>
                ))}
            </ul>
            
            <button onClick={apagar}>Deletar usuário</button>
        </div>
    )
}

export default ListRender

