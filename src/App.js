import { useState, useEffect } from 'react';
import React from "react";
import{BrowserRouter,Routes, Route, Link} from "react-router-dom";
//import { AnimatePresence } from 'framer-motion/dist/framer-motion';

import {CreateContainer, Header, MainContainer} from "./components";

const App = () => {
    return (
        <div>
            <Header/>
            <MainContainer />
        </div>        
        )
}

export default App; 