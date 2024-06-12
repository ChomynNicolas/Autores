import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormComp from "../../components/FormComp/FormComp";

const Edit = ({BASE_URI}) => {
  const [name, setName] = useState("")
  const {id} = useParams();
  const navigate = useNavigate();
  const [error, seterror] = useState()
  

  useEffect(() => {
    const cargandoAutor = ()=>{
      axios.get(`${BASE_URI}/autores/${id}`)
        .then(res => {
          const {data} = res
          setName(data.name);
        })
    }
    cargandoAutor();
  },[] )
  
  const handleSubmitActualizar = (e)=>{
    e.preventDefault()
    axios.put(`${BASE_URI}/autores/${id}`,{
      name
    })
    .then(res => console.log(res))
    .catch(err => seterror(err))
    if(!error){
      navigate('/')  
    }
  }

  const navegarAlHome = ()=>{
    navigate('/')
  }


  return( 
    <>
        <FormComp handleSubmit={handleSubmitActualizar} name={name} setName={setName} navegarAlHome={navegarAlHome} accion="Actualizar"/>
        {!!error ? <span style={{marginLeft: "750px", color: "red"}}>{error.response?.data.error}</span>:""}
    </>

);
};

export default Edit;
