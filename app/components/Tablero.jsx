import React from 'react';

export default class Tablero extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      console.log(this.props)
        let tablero = this.props.valores.map((valoresFila, indiceFila) => {
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
             {tablero}
           </div>
        );
    }

}
