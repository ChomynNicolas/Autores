import { useEffect, useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";

const Home = ({BASE_URI}) => {
  const [autores, setAutores] = useState();




  useEffect(() => {
    axios.get(`${BASE_URI}/autores`)
      .then((res) => {
        const {data} = res;
        setAutores(data);
      })
      .catch(err => console.log(err));

  
    
  }, [BASE_URI])
  
  if(!autores){
    return (
      <div>
        Cargando datos...
      </div>
    );
  }


  const handleDeleteAutores = (id)=>{
    axios.delete(`${BASE_URI}/autores/${id}`)
      .then(()=> console.log("Autor eliminado"))
      .catch(err => console.log(err))

    const nuevoAutores = autores.filter((autor,index)=> autor._id !== id)
    setAutores(nuevoAutores);


  }
  

  return (
    <div>
      <h1>Autores Favoritos</h1>
      <div>
        <Link to={"/add"}>Añadir nuevo autor</Link>
      </div>
      <h3>Autores</h3>
      <div>

      {autores.map((autor,index)=>{
        return(
          <div key={index}>
          <p>{autor.name}</p>
          <div>
            <Link to={`/edit/${autor._id}`}>Editar</Link>
            <button onClick={()=>handleDeleteAutores(autor._id)}>Eliminar</button>
          </div>
          </div>

        )
      })
      
      }
      </div>
      
    </div>
  );
};

export default Home;
