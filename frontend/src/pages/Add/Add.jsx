import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormComp from "../../components/FormComp/FormComp";

const Add = ({ BASE_URI }) => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [error, seterror] = useState()

  const createAutor = (e) => {
    e.preventDefault();

    axios
      .post(`${BASE_URI}/autores`, {
        name,
      })
      .then((res) => console.log(res))
      .catch((err) => seterror(err))
      
      if(!error){
        navigate("/");
      }
      

  };

  const navegarAlHome = () => {
    navigate("/");
  };

  return (
    <div>
    <FormComp
      handleSubmit={createAutor}
      name={name}
      setName={setName}
      navegarAlHome={navegarAlHome}
      />
    {!!error ? <span style={{marginLeft: "750px", color: "red"}}>{error.response?.data.err.errors.name.message}</span>:""}
    </div>
  );
};

export default Add;
