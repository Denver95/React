
// 1. Импортруем createStore, compose    и наш profile_reducer
import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
// P1. Подключаем библиотеку Persist
import storage from "redux-persist/lib/storage";


import { profile_reducer } from './Profile/profile_reducer';
// @4. Добавили наш Messages
import { messages_Reducer } from './Messages/reducer'
import { blogsReducer } from './Api_blogs/reducer'





// P2. Создаем persist config
const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['blogs']
}



//  Чтоб в redux devtools можно было работать со стором, акшион 
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Переменная которая будет собирать все наши Reducers в одно целое
const rootReducer = combineReducers({
	profile: profile_reducer,
	messages: messages_Reducer,
	blogs: blogsReducer,
})

// P3. Создаем персистРедюсер. Сюда передаем Переменную выще(Которая собираемт все наши редюсеры в одно)
const persistedReducer = persistReducer(persistConfig, rootReducer)

// 2. Создаем Стор
//#1 Подключаем мидлварку и thunk(Переходим в message/action)
// P.4 Вместо rootReducer подключаем persistReducer
export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))


// P5. Импортируем перстистор. Переходим в APP  и оборачиваем все 
export const persistor = persistStore(store)