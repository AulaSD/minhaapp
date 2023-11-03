import { useEffect, useState } from "react";
import api from "../../services/Api";

const Tabela = (props) =>{
    const url = "/search/" + props.textopesquisa
    const [personagens,setPersonagens] = useState([])
    
    useEffect(()=>{
            api
            .get(url)
            .then((response)=>setPersonagens(response.data.results))
            .catch((err)=>{console.log(err);})
        },[url]);
   
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Aparência</th>
                    <th>Conexões</th>
                    <th>Poderes</th>
                </tr>
            </thead>

            <tbody>
                {personagens.map((p,i)=>(
                    <tr key={i}>
                        <td><img src={p.image["url"]} width="150" height="200" alt="imagem" /></td>
                        <td>{p.biography["full-name"]} ({p.name})</td>
                        <td>
                            Gênero:{p.appearance["gender"]}<br/>Raça:{p.appearance["race"]}<br/>
                            Altura:{p.appearance["height"]}<br/>Peso:{p.appearance["weight"]}<br/>
                        </td>
                        <td>
                            Grupos:{p.connections["group-affiliation"]}<br/>
                            Família:{p.connections["relatives"]}<br/>
                        </td>
                        <td>
                            Inteligência:{p.powerstats["intelligence"]}<br/>Força:{p.powerstats["strength"]}<br/>
                            Velocidade:{p.powerstats["speed"]}<br/>Durabilidade:{p.powerstats["durability"]}<br/>
                            Poder:{p.powerstats["power"]}<br/>Combate:{p.powerstats["combat"]}<br/>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Tabela;