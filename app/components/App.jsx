import React from 'react';
import './../assets/scss/main.scss';

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
    };
  }

  render() {
      let texto = "Turno del " + this.state.turno;
      let htmltablero = this.state.valores.map(function (valoresFila, indiceFila) {
        let fila = valoresFila.map(function (valor, indiceColumna) {
          return (
            <span>
              {valor}
            </span>
          )
        });
        return (
          <div>
            {fila}
          </div>
        )
      });

      return (
        <div>
          <header className="cabecera">
            {texto}
          </header>
          {htmltablero}
        </div>
      );
  }

}
