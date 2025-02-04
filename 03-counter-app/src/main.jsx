import React from "react";
import ReactDom from 'react-dom/client'
import { CounterApp } from './CounterApp'
import { FirstApp } from './FirstApp'

import './style.css'


ReactDom.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp /> */}
        <CounterApp value = {0}/>
    </React.StrictMode>
)