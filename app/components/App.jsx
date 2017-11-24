import React from 'react';
import './../assets/scss/main.scss';
import Cabecera from './Cabecera.jsx';
import Tablero from './Tablero.jsx';
import Reset from './Reset.jsx';
import { JUGADORX, JUGADOR0, TABLERO } from '../constants/constants';
import { connect } from 'react-redux';
import { jugarPosicion, reset } from './../reducers/actions';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.appClick = this.appClick.bind(this);
        this.resetClick = this.resetClick.bind(this);
    }

    appClick(numeroFila, numeroColumna) {
        this.props.dispatch(jugarPosicion(numeroFila, numeroColumna, this.props.turno));
    }

    resetClick() {
        this.props.dispatch(reset());
    }

    render() {
        let texto = "Turno del " + this.props.turno;
        return (
        <div>
          <Cabecera texto={texto}/>
          <Tablero valores={this.props.tablero} appClick={this.appClick}/>
          <h3>Número de movimientos: {this.props.movimientos}</h3>
          <Reset resetClick={this.resetClick} />
        </div>
        );
    }

}
function mapStateToProps(state) {
    return {
        movimientos: state.movimientos,
        tablero: state.tablero,
        turno: state.turno,
    };
}
export default connect(mapStateToProps)(App);
