//import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import{BrowserRouter,Routes, Route, Link} from "react-router-dom";
import App from "./App";
import { StateProvider } from "./context/StateProvider";
import {initialState} from "./context/initialState";
import reducer from "./context/reducer";



const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <StateProvider initialState={initialState} reducer={reducer}>
                    <App />
            </StateProvider>    
        </BrowserRouter>
    </React.StrictMode>
)

//ReactDOM.render(<App />, document.getElementById('root'));
