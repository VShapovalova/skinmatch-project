import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const domElement = document.getElementById('root-c3');
const root = createRoot(domElement);

root.render(<App />);
