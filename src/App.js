
import { Navigation } from './components/Nav/Navigation'
import { MainPage } from './Page/Main/MainPage'
import { ChatsPage } from './Page/Chats/ChatsPage'
import { ProfilePage } from './Page/Profile/ProfilePage'
import { Articles } from './Page/Article/Article'
import { ApiBlogs } from './Page/API/Api_Blogs'
import { ListChat } from './components/ListChat/ListChat'
import { Registration } from './Page/Registration/Registration'
import { Login } from './Page/Login/Login'
import { PrivateRoute } from './hocs/PrivateRoute'
import { PublicRoute } from './hocs/PublicRoute'

import { onValue } from "firebase/database";

import { useDispatch } from 'react-redux'
import { persistor } from './Store/index'
import { PersistGate } from 'redux-persist/integration/react'
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { firebaseAuth, messagesRef } from './services/firebase'
import { auth } from './Store/Profile/profile_action'




export function App() {
  const dispatch = useDispatch();
  const [messagesDB, setMessagesDB] = useState({})
  const [chats, setChats] = useState([])


  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(auth(true));
      } else {
        dispatch(auth(false));
      }
    })

    return unsubscribe
  }, [])


  useEffect(() => {
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val()

      const newChats = Object.entries(data).map((item) => ({
        name: item[0],
        messages: item[1].messageList
      }))

      setMessagesDB(data)
      setChats(newChats)
    })
  }, [])

  return (


    <PersistGate persistor={persistor}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<MainPage />} />

          <Route path="chats" element={<PrivateRoute />}>
            <Route
              index
              element={<ListChat chats={chats} messagesDB={messagesDB} />}
            />
            <Route
              path=":chatId"
              element={<ChatsPage chats={chats} messagesDB={messagesDB} />}
            />
          </Route>

          <Route path='profile' element={<ProfilePage />} />


          <Route path='articles' element={<Articles />} />

          <Route path='blogs' element={<ApiBlogs />} />

          <Route path='registration' element={<Registration />} />

          <Route path='login' element={<PublicRoute component={<Login />} />} />

        </Route>



        {/* Защита от Дурака */}
        <Route path='*' element={(<h1 >404 Error</h1>)}></Route>
      </Routes >
    </PersistGate >
  )
}