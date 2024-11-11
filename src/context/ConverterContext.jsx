import { useReducer, createContext } from "react";
import { ConverterReducer } from "./ConverterReducer";
import { REDUCER_ACTIONS } from "./actions";

const initialState = {
  result: 0,
  type: "celsius",
  temp: 0,
};

export const ConverterContext = createContext(initialState);

export const ConverterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ConverterReducer, initialState);

  const handleTempChange = (evt) => {
    evt.preventDefault();
    const temp = parseFloat(evt.target.value);
    dispatch({ type: REDUCER_ACTIONS.CHANGE_TEMP, payload: temp });
  };

  const handleChangeMode = (evt) => {
    const mode = evt.target.value;
    dispatch({ type: REDUCER_ACTIONS.CHANGE_MODE, payload: mode });
  };

  const handleTransformation = () => {
    dispatch({ type: REDUCER_ACTIONS.TRANSFORM_TEMP });
  };

  return (
    <ConverterContext.Provider
      value={{
        state,
        handleTempChange,
        handleChangeMode,
        handleTransformation,
        result: state.result,
      }}
    >
      {children}
    </ConverterContext.Provider>
  );
};
