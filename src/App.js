import React from "react";
import logo from './logo.svg';
import './App.css';
import Card from './card';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <section className="pricing py5">
     <div className='container'>
     <Card></Card>
    </div>
    </section>
  );
}

export default App;
