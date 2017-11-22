import React from 'react';
import './../assets/scss/main.scss';
import Cabecera from './Cabecera.jsx';
import Tablero from './Tablero.jsx';
import Reset from './Reset.jsx';

const JUGADORX = "jugador 1 - las X";
const JUGADOR0 = "jugador 2 - los 0";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        turno: JUGADORX,
        valores: [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-'],
        ],
        movimientos: 0
    };
    this.appClick = this.appClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
  }

  appClick(numeroFila, numberoColumna) {
      let valores = this.state.valores;
      let nuevoValor = this.state.turno === JUGADORX ? 'X' : '0';
      valores[numeroFila][numberoColumna] = nuevoValor;
      this.setState({
          turno: this.state.turno === JUGADORX ? JUGADOR0 : JUGADORX,
          valores: this.state.valores,
          movimientos: this.state.movimientos + 1
      });
  }

  resetClick(){
    this.setState({
      turno: JUGADORX,
      valores: [
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-'],
      ],
      movimientos: 0
    });
  }

  render() {
      let texto = "Turno del " + this.state.turno;

      return (
        <div>
          <Cabecera texto={texto}/>
          <Tablero valores={this.state.valores} appClick={this.appClick}/>
          <h3>Número de movimientos: {this.state.movimientos}</h3>
          <Reset resetClick={this.resetClick}></Reset>
        </div>
      );
  }

}
