import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";

const Navbar = () => {
  const [showEmployees, setShowEmployees] = useState(false);
  const [showDepartment, setShowDepartments] = useState("");
  const [showReports, setShowReports] = useState("");

  const employeesOptions = () => {
    setShowEmployees(true);
    setShowDepartments(false);
    setShowReports(false);
  };

  const departmentsOptions = () => {
    setShowEmployees(false);
    setShowDepartments(true);
    setShowReports(false);
  };

  const reportsOptions = () => {
    setShowEmployees(false);
    setShowDepartments(false);
    setShowReports(true);
  };

  return (
    <div className={styles.navbar}>
      <NavLink to='/home'>
        <h1>Gestão de Períodos de Férias</h1>
      </NavLink>
      <ul>
        <li>
          <div>
            <Button onClick={employeesOptions} Text="Funcionários" />
          </div>

          {showEmployees ? (
            <div className={styles.options}>
              <Button
                Text="Cadastrar Funcionário"
                to={"/addemployee"}
                onClick={(e) => {
                  setShowEmployees(false);
                }}
              ></Button>
              <Button
                Text="Cadastrar Férias por Funcionário"
                to={"/home"}
                onClick={(e) => {
                  setShowEmployees(false);
                }}
              ></Button>
            </div>
          ) : null}
        </li>

        <li>
          <div>
            <Button onClick={departmentsOptions} Text="Departamentos" />
          </div>

          {showDepartment ? (
            <div className={styles.options}>
              <Button
                Text="Cadastrar Unidade"
                to={"/home"}
                onClick={(e) => {
                  setShowDepartments(false);
                }}
              ></Button>
              <Button
                Text="Cadastrar Departamento"
                to={"/home"}
                onClick={(e) => {
                  setShowDepartments(false);
                }}
              ></Button>
              <Button
                Text="Cadastrar Férias por Departamento"
                to={"/home"}
                onClick={(e) => {
                  setShowDepartments(false);
                }}
              ></Button>
            </div>
          ) : null}
        </li>
        <li>
          <div>
            <Button onClick={reportsOptions} Text="Relatórios" />
          </div>

          {showReports ? (
            <div className={styles.options}>
              <Button
                Text="Férias por Departamento"
                to={"/home"}
                onClick={(e) => {
                  setShowReports(false);
                }}
              ></Button>
              <Button
                Text="Férias por Unidade"
                to={"/home"}
                onClick={(e) => {
                  setShowReports(false);
                }}
              ></Button>
            </div>
          ) : null}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
