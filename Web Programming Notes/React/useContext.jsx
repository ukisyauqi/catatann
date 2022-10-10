// create file context.js
import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppContextProvider = (props) => {
  const [myState1, setMyState1] = useState("Hi");
  const [myState2, setMyState2] = useState("Hi");

  const myFun1 = () => console.log("Hi");
  const myFun2 = () => console.log("Hi");

  return (
    <AppContext.Provider
      value={{
        myState1,
        setMyState1,
        myState2,
        setMyState2,
        myFun1,
        myFun2,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};



// wrap <App/> with <AppContextProvider/> in index.js / main.js
import { AppContextProvider } from "./AppContext.jsx";
ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);


// use the context
import { useContext } from "react";
import { AppContext } from "../AppContext";

export default function MyButton(props) {
  const { myState1, setMyState2, myState3, myFun1, myFun2, myFun3 } = useContext(AppContext)

  return (
  	<button onCLick={myFun1}>{myState1}</button>
  )
}