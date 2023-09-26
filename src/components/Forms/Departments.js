import React, { useState } from "react";
import { useDepartment } from "../../hooks/useDepartments";
import styles from "./Forms.module.css"
const Department = () => {

  const [unity, setUnity] = useState("");
  const [name, setName] = useState("");
  const [formError, setFormError] = useState("");

  const { createDepartment } = useDepartment();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormError("");

    const department = {
      name,
      unity,
    };

    //Validação de Campos
    //Campos Obrigatórios
    if (!name) {
      setFormError("Preencha o nome do Departamento!");
      document.getElementById("department").focus();
      return;
    } else if (!unity) {
      setFormError("Preencha o nome da Unidade!");
      document.getElementById("unity").focus();
      return;
    } 

    //Validação quantidade de caracteres
    if (name.length < 3) {
      setFormError("O campo Nome deve ter no mínimo 3 caracteres!");
      return;
    }

    
    const res = await createDepartment(department);
    console.log(res);
    console.log(department);


    setName("");
    setUnity("");
  };

  return (
    <div>
      <div className={styles.forms}>
        <h1>Cadastrar Novo Departamento?</h1>

        <form>
          
          <label>
            <span>Nome do Departamento:</span>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome do Departamento"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <span>Nome da Unidade:</span>
            <input
              type="text"
              id="unity"
              name="unity"
              placeholder="Unidade da qual faz parte o Departamento"
              value={unity}
              onChange={(e) => setUnity(e.target.value)}
            />
          </label>
          <button onClick={handleSubmit}>Cadastrar</button>
          {formError && <p className="error">{formError}</p>}
        </form>
      </div>
    </div>
  );
};

export default Department;
