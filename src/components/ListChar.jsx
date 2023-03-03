import { useEffect, useState } from "react"
import ChardCard from "./ChardCard"

const url = 'https://rickandmortyapi.com/api/character?page=5'

export default function ListChar (){
    
    const [chars, setChars] = useState([]); //se inicializa un array vacío-mantener el estado

    useEffect(()=>{
        const getChars = async () => {
            const response = await fetch(url); //comunicacion con server para obtener una respuesta
            const data     = await response.json(); //buscar la data con un json
            console.log(data);
            setChars(data.results)
        }
        getChars();
    },[])
           
    return (
        <div>
            <h2 style={{ 
                        margin:0,
                        fontFamily: 'verdana',
                        color: '#4682B4',
                        backgroundColor: '#D8BFD8',
                        borderRadius: 50,
                        display: 'inline-block',
                        marginBottom: 10,
                        padding: 10
                         }}>EJERCICIO 3 - SANDY</h2>
         <div style={{ display:'flex', 
                      flexWrap:'wrap', 
                      gap: 16,
                      justifyContent: 'center',
                      alignItems: 'center'
                      }}>
            {   
              chars.map(char=>(<ChardCard 
                 key={char.name}
                 name={char.name}
                 image={char.image}
              
              />))
            }
        </div>
        </div>
        
    )
}