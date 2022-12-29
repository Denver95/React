
// 1. Импортруем createStore, compose    и наш profile_reducer
import { createStore, compose, combineReducers } from "redux";
import { profile_reducer } from './Profile/profile_reducer';
// @4. Добавили наш Messages
import { messages_Reducer } from './Messages/reducer'


//  Чтоб в redux devtools можно было работать со стором, акшион 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Переменная которая будет собирать все наши Reducers в одно целое
const rootReducer = combineReducers({
	profile: profile_reducer,
	messages: messages_Reducer
})

// 2. Создаем Стор

export const store = createStore(rootReducer, composeEnhancers())
