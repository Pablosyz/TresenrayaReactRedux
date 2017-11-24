import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import turnoReducer from './turnoReducer';
import movimientosReducer from './movimientosReducer';

const GlobalState = combineReducers({
    turno: turnoReducer,
    tablero: gameReducer,
    movimientos: movimientosReducer,
});

export default GlobalState;
