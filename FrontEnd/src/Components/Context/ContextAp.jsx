import { createContext, useContext, useReducer } from "react";
import reducer from '../Reducer/ReducerApi'
const AppContext = createContext();

const initialState = {
    name : "",
};

const AppProvider = ({children})=>{
   const [state, dispatch] =  useReducer(reducer, initialState)

   const HandleAdd = ()=>{
    return dispatch(
        {
            type : "Add_Todos"
        }
    )
   }

    return (
    <AppContext.Provider value={{...state, HandleAdd}}>
        {children}
    </AppContext.Provider>
    );
};

const useGlobalContext = ()=>{
   return useContext(AppContext);
}

export {AppProvider, AppContext, useGlobalContext};