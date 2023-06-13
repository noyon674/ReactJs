import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
//styleing-2
const design = {
    color: 'blue',
    fontSize: '50px',
    textAlign: 'center',
};
root.render(
    <React.StrictMode>
        <h1 style={{color:'red', fontSize: '50px', textAlign: 'center'}}>One type of styling</h1>
        <h1 style={design}>Hi, I am Noyon</h1>

    </React.StrictMode>
);
