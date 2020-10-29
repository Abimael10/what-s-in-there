import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Nav from './components/Nav';
import Link from './components/LinkImagen';
import Reconocer from './components/Reconocer';
import Description from './components/Description';
import Particles from 'react-particles-js';
import Footer from './components/Footer';

const app = new Clarifai.App({
  apiKey: '729ec32cd5f04bef922cd3c39b7fb676'
 });

class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',
      imagenURL: ''
    };
  }

  descriptionImage = (data) => {
    //Toma de la information relacionada
    const first = data.outputs[0].data.concepts[0].name;
    const second = data.outputs[0].data.concepts[1].name;
    const third = data.outputs[0].data.concepts[2].name;
    const fourth = data.outputs[0].data.concepts[3].name;
    const fifth = data.outputs[0].data.concepts[4].name;

    //Recoge de los campos JSX
    const muestra1 = document.getElementById('primera');
    const muestra2 = document.getElementById('segunda');
    const muestra3 = document.getElementById('tercera');
    const muestra4 = document.getElementById('cuarta');
    const muestra5 = document.getElementById('quinta');

    //Muestra
    muestra1.innerHTML = first;
    muestra2.innerHTML = second;
    muestra3.innerHTML = third;
    muestra4.innerHTML = fourth;
    muestra5.innerHTML = fifth;

  }
  
  onInputChange = (e) => {
    this.setState({input: e.target.value})
  }

  onBtnSubmit = () => {
    this.setState({imagenURL: this.state.input});
    app.models.predict(Clarifai.GENERAL_MODEL, this.state.input)
    .then(response => this.descriptionImage(response))
    .catch(err => console.log(err));
  }

  render() {

    return (
      <div className="App">
        <Particles className="parts" />
        <Nav/>
        <Link
          onInputChange={this.onInputChange}
          onBtnSubmit={this.onBtnSubmit}
        />
        <Reconocer imagenURL={this.state.imagenURL}/>
        <Description />
        <Footer/>
      </div>
    );
  }
}

export default App;
