import React from 'react';
import logo from './logo.svg';
import './App.css';
import Backdrop from "./components/UI/Backdrop/Backdrop";
import Button from "./components/UI/Button/Button";

function App() {
  return (
      <>
        <h1>Hello</h1>
        <Backdrop />
        <Button type={"primary"} disabled={false}>Hello</Button>
        </>

  );
}

export default App;
