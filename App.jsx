import React from "react";
import { useState } from "react/cjs/react.development";

const App = () => {
  let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();

  const [cdate, setCdate] = useState(date);
  const UpdateDate = () => {
    let newDate = new Date().toLocaleDateString();
    setCdate(newDate);
  }

  const [ctime, setCtime] = useState(time);
  const UpdateTime = () => {
    let newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
  };

  setInterval(UpdateDate,84000000)
  setInterval(UpdateTime,1000)

  return (
    <>
      <h1> {ctime} </h1>
      <h2> {cdate} </h2>
    </>
  );
};

export default App;