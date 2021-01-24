import React, {useState} from 'react';
import {GlobalStyle} from "./globalStyle";
import {SliderData} from "./data/SliderData";
import {InfoData} from './data/InfoData';
import {Navbar} from './components/Navbar';
import {Hero} from "./components/Hero";
import {Dropdown} from './components/Dropdown';
import {InfoSection} from "./components/InfoSection";


function App() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <GlobalStyle/>
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen}
                      toggle={toggle}/>
            <Hero slides={SliderData}/>
            <InfoSection {...InfoData}/>
        </>
    );
}

export default App;
