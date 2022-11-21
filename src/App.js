import React from 'react';
import MyContextProvider from './contexts/Mycontexts';
import Dashboard from './components/Dashboard';
function App() { return (<MyContextProvider><Dashboard /></MyContextProvider>); }





export default App;
