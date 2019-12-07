import React from 'react';
import '../App.css';
import '../Details.css';
import logo from '../share-eat.svg';
import background from '../background-paint.svg';
import addYellow from '../ic_add_black.svg';
import {Link} from "react-router-dom";
import testes from '../teste.json';


export default class Details extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
         testes: testes
       };
     } 
    
    render () {
       const lista = this.state.testes.map((testes) => <ul key={testes}>{`${testes.name}`}</ul>); 
       const item_name = this.state.testes[2].menuItems.map((testes) => <ul key={testes}> {`${testes.name}`}</ul>) ;
       const item_description = this.state.testes[2].menuItems.map((testes) => <ul key={testes}>{`${testes.description}`}</ul>);
       console.log(item_description);
       console.log(lista);
 
       return (
          <div className="App-header">
                <img src={logo} className="logo" alt="logo" />
                <h1> {lista[2]} </h1>
                <img src={background} className="App-background" alt="background" />
    
                <div className="card-details">
                   <div className="food-name"> {item_name[0]} </div>
                   <div className="food-details">{item_description[0]}</div>
                </div>
                <div className="card-details second">
                   <div className="food-name"> {item_name[1]} </div>
                   <div className="food-details">{item_description[1]}</div>
                </div>
                <Link to="/form/canal-cafe-puc-rs">
                   <button className="add-meal">
                      <img src={addYellow} alt="add-yellow" id="yellow"/>
                   </button>
                </Link>
          </div>
       );
    }
 }
 