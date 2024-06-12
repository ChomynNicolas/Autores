import React from "react";
import { Link } from "react-router-dom";
import styles from './FormComp.module.css'

const FormComp = ({handleSubmit,name,setName,navegarAlHome,accion="Crear"}) => {
  return (
    <div className={styles.formContainer}>
    <Link className={styles.linkStyle} to={"/"}>Home</Link>
    <form onSubmit={handleSubmit}>
      <h2 className={styles.formTitle}>Añadir nuevo autor</h2>
      <div className={styles.divFormContainer}>
        <label>Nombre: </label>
        <input className={styles.input} type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.buttonCancel} onClick={navegarAlHome}>Cancelar</button>
        <button className={styles.buttonAccion}>{accion}</button>
      </div>
    </form>
  </div>
);
};

export default FormComp;
