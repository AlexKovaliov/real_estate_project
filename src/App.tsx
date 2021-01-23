import React, {useState} from 'react';
import {GlobalStyle} from "./globalStyle";
import {SliderData} from "./data/SliderData";
import {Navbar} from './components/Navbar';
import {Hero} from "./components/Hero";
import {Dropdown} from './components/Dropdown';


function App() {


    return (
        <>
            <GlobalStyle/>
            <Navbar/>
            <Dropdown/>
            <Hero slides={SliderData}/>
        </>
    );
}

export default App;
