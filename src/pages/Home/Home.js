import React, { useState } from "react";
import Employees from "../../components/Forms/Employees";
import styles from "./Home.module.css";
import Department from "../../components/Forms/Departments";
import Button from "../../components/Button/Button";
import Vacations from "../../components/Forms/Vacations";

const Home = () => {
  const [showEmployee, setShowEmployee] = useState(false);
  const [showDepartment, setShowDepartment] = useState(false);
  const [showVacation, setShowVacation] = useState(false);

  const showDivEmployee = (e) => {
    e.preventDefault();
    setShowEmployee(true);
    setShowDepartment(false);
    setShowVacation(false)
  };

  const showDivDepartment = (e) => {
    e.preventDefault();
    setShowEmployee(false);
    setShowDepartment(true);
    setShowVacation(false)
  };

  const showDivVacations = (e) => {
    e.preventDefault();
    setShowEmployee(false);
    setShowDepartment(false);
    setShowVacation(true)
  };

  return (
    <div className={styles.home}>
      <div className={styles.button}>
        <li>
          <Button onClick={showDivEmployee} Text="Cadastrar Funcionário" />
        </li>
        <li>
          <Button onClick={showDivDepartment} Text="Cadastrar Departamento" />
        </li>
      
      </div>

      {showEmployee ? (
        <div className={styles.employees}>
          <Employees />
        </div>
      ) : null}
      {showDepartment ? (
        <div className={styles.department}>
          <Department />
        </div>
      ) : null}
    
        <div className={styles.vacation}>
          <Vacations />
        </div>

  
    </div>
  );
};

export default Home;
