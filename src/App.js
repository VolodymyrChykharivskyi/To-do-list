import React from 'react';
import classes from './App.module.css';
import Button from './components/UI/Button/Button';
import Header from "./components/Header/Header";
import Loader from "./components/UI/Loader/Loader";

const App = (props) => {
    return (
        <div className={classes.app}>
            <Header />
            <div className={classes.wrapper}>
                <h1>Hello</h1>
                <Button type={"error"} disabled={false}>+</Button>
                <Button type={"success"} disabled={false}>Hello</Button>
                <Button type={"primary"} disabled={false}>Hello</Button>
                <Loader />
            </div>
        </div>

    );
}

export default App;
