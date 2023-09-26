import { useEffect, useReducer, useState } from "react";

const initialState = {
  loading: null,
  error: null,
};

const insertReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "INSERTED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const useEmployee = () => {
  const [response, dispatch] = useReducer(insertReducer, initialState);

  //deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  const checkCancelBeforeDispatch = (action) => {
    if (!cancelled) {
      dispatch(action);
    }
  };

  //add Employee
  const createEmployee = async (data) => {
    checkCancelBeforeDispatch({ type: "LOADING" });

    try {
      const newEmployee = { ...data };
      console.log(newEmployee);
    } catch (error) {
      checkCancelBeforeDispatch({
        type: "ERROR",
        payload: error.message,
      });
    }

  };
  useEffect   (() => {
    return () => setCancelled(true);
  }, []);

  
    return {
      createEmployee,
    };

};
