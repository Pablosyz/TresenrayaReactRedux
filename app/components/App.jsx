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
      let tablero = this.state.valores.map((valoresFila, indiceFila) => {
        let fila = valoresFila.map((valor, indiceColumna) => {
            let mykey = "" + indiceFila + indiceColumna;
            return (
              <span key={mykey}>{valor}</span>
            );
        });
        return (
           <div key={"fila" + indiceFila}>
             {fila}
           </div>
        );
      });

      return (
        <div>
          <header className="cabecera">
            {texto}
          </header>
          {tablero}
        </div>
      );
  }

}
