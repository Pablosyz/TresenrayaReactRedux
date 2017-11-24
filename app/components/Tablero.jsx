import React from 'react';

const casillaStyle = {
    height: '100px',
    width: '100px',
};

export default class Tablero extends React.Component {
    render() {
        let tablero = this.props.valores.map((valoresFila, indiceFila) => {
            let fila = valoresFila.map((valor, indiceColumna) => {
                let mykey = "" + indiceFila + indiceColumna;
                return (
                  <button style={casillaStyle} key={mykey}>{valor}</button>
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