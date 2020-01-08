import {createStore} from 'redux';
import {renderState} from './Components/reducers';

export const Store=createStore(renderState);