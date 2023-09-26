import React, { useState } from "react";
import { useVacation } from "../../hooks/useVacation";
import styles from "./Forms.module.css";

const Vacations = () => {
  const [registration, setRegistration] = useState("");
  const [startDate, setStartDate] = useState("");
  const [numberOfDays, setNumberofDays] = useState("");
  const [formError, setFormError] = useState("");

  const { createVacation } = useVacation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormError("");

    const vacation = {
      registration,
      startDate,
      numberOfDays,
    };

    //Validação de Campos
    //Campos Obrigatórios
    if (!registration) {
      setFormError("Preencha a matrícula");
      document.getElementById("registration").focus();
      return;
    } else if (!startDate) {
      setFormError("Preencha o dia de Início");
      document.getElementById("name").focus();
      return;
    } else if (!numberOfDays) {
      setFormError("Preencha a quantidade de dias");
      document.getElementById("department").focus();
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

    const res = await createVacation(vacation);
    console.log(res);

    setRegistration("");
    setStartDate("");
    setNumberofDays("");
  };

  return (
    <div>
      <div className={styles.forms}>
        <h1>Cadastrar Férias?</h1>

        <form>
          <label>
            <span>Funcionário:</span>
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
            <span>Data de Início:</span>
            <input
              type="date"
              id="startDate"
              name="startDate"
              placeholder="Dia do Início das Férias"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <label>
            <span>Quantidade de dias:</span>
            <input
              type="text"
              id="numberofDays"
              name="numberofDays"
              placeholder="Quantidade de dias de férias"
              value={numberOfDays}
              onChange={(e) => setNumberofDays(e.target.value)}
            />
          </label>
          <button onClick={handleSubmit}>Cadastrar</button>
          {formError && <p className="error">{formError}</p>}
        </form>
      </div>
    </div>
  );
};

export default Vacations;
