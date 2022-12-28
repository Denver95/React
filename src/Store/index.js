
// 1. Импортруем createStore, compose    и наш profile_reducer

import { createStore, compose } from "redux";
import { profile_reducer } from './reducers/profile_reducer';


//  Чтоб в redux devtools можно было работать со стором, акшион 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 2. Создаем Стор

export let store = createStore(profile_reducer, composeEnhancers())