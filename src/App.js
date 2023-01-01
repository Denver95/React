
import { Navigation } from './components/Nav/Navigation'
import { MainPage } from './Page/Main/MainPage'
import { ChatsPage } from './Page/Chats/ChatsPage'
import { ProfilePage } from './Page/Profile/ProfilePage'
import { Route, Routes } from 'react-router-dom'
import { ListChat } from './components/ListChat/ListChat'
<<<<<<< HEAD
// 3. Подключаем наш стор и провайдер
import { Provider } from 'react-redux'
import { store, persistor } from './Store/index'
// P.6 Обернули все Redux/ Нужно импортитровать persistor
import { PersistGate } from 'redux-persist/integration/react'
=======
// import { useState } from 'react'
// 3. Подключаем наш стор и провайдер
import { Provider } from 'react-redux'
import { store } from './Store/index'

// const defaultMessges = {
//   BOT: [
//     {
//       author: 'user',
//       text: 'one text'
//     },
//     {
//       author: 'user',
//       text: 'two text'
//     },
//   ]
// }

>>>>>>> main


  // const [messages, setMessages] = useState(defaultMessges)


<<<<<<< HEAD
export function App() {

  return (
    //4. Оборачиваем наше приложение (можно отдельный компонент) в провайдер и пропсами прокидываем наш стор(хранилище)
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route index element={<MainPage />} />
            <Route path='chats'>
              <Route index element={<ListChat />} ></Route>
              <Route path=':chatId' element={<ChatsPage />}></Route>
            </Route>
            <Route path='profile' element={<ProfilePage />} />
          </Route>

          {/* Защита от Дурака */}
          <Route path='*' element={(<h1 >404 Error</h1>)}></Route>
        </Routes >
      </PersistGate>
=======
  return (
    //4. Оборачиваем наше приложение (можно отдельный компонент) в провайдер и пропсами прокидываем наш стор(хранилище)
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<MainPage />} />
          <Route path='chats'>
            <Route index element={<ListChat />} ></Route>
            <Route path=':chatId' element={<ChatsPage />}></Route>
          </Route>
          <Route path='profile' element={<ProfilePage />} />
        </Route>

        {/* Защита от Дурака */}
        <Route path='*' element={(<h1 >404 Error</h1>)}></Route>
      </Routes >
>>>>>>> main
    </Provider>
  )
}