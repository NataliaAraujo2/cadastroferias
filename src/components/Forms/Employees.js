import React, {  useState } from "react";
import { useEmployee } from "../../hooks/useEmployees";
import styles from './Forms.module.css'


const Employees = () => {

  const [registration, setRegistration] = useState("");
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [formError, setFormError] = useState("");

  const { createEmployee } = useEmployee();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormError("");

    const employee = {
      registration,
      name,
      department,
    };

    //Validação de Campos
    //Campos Obrigatórios
    if (!registration) {
      setFormError("Preencha a matrícula");
      document.getElementById("registration").focus();
      return;
    } else if (!name) {
      setFormError("Preencha o nome do funcionário!");
      document.getElementById("name").focus();
      return;
    } else if (!department) {
      setFormError("Escolha um departamento!");
      document.getElementById("department").focus();
      return;
    }

    //Validação quantidade de caracteres
    if (name.length < 3) {
      setFormError("O campo Nome deve ter no mínimo 3 caracteres!");
      return;
    }

    //Validação Formato Matrícula
    const registrationValidate = document.getElementById("registration").value;
    const regex = /[C][0-9]/g;
    if (!regex.test(registrationValidate)) {
      setFormError(
        "A matrícula deve estar no formato CXXXXXX (exemplo: C123456)"
      );
      document.getElementById("registration").focus();
      return;
    }

    const res = await createEmployee(employee);
    console.log(res);

    setRegistration("");
    setName("");
    setDepartment("");
  };

  return (
    <div>
      <div className={styles.forms}>
        <h1>Cadastrar Novo Funcionário?</h1>

        <form>
          <label>
            <span>Matrícula:</span>
            <input
              type="text"
              id="registration"
              name="registration"
              placeholder="Matrícula do Funcionário"
              value={registration}
              maxLength={7}
              onChange={(e) => setRegistration(e.target.value)}
            />
          </label>
          <label>
            <span>Nome do Funcionário:</span>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome do Funcionário"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            <span>Departamento de lotação:</span>
            <input
              type="text"
              id="department"
              name="department"
              placeholder="Departamento de lotação"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </label>
          <button onClick={handleSubmit}>Cadastrar</button>
          {formError && <p className="error">{formError}</p>}
        </form>
      </div>
    </div>
  );
};

export default Employees;
