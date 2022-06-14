import React from "react";
import { Route, Router } from "react-router-dom";
import Del from "./Components/Deillvery";
import HomeLayoutHOC from "./Components/Hoc";




function App() {
  return (
    <>
      <div className="w-full h-full">
       
        <h1 className="text-3xl font-bold underline">Hello world   !</h1>
      </div><HomeLayoutHOC path="/"exact component={Temp}/>
    </>
  );
};

export default App;
