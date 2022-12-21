
import { Navigation } from './components/Nav/Navigation'
import { MainPage } from './Page/Main/MainPage'
import { ChatsPage } from './Page/Chats/ChatsPage'
import { ProfilePage } from './Page/Profile/ProfilePage'
import { Route, Routes } from 'react-router-dom'
import { ListChat } from './components/ListChat/ListChat'

export function App() {



  return (
    <div >

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


    </div >

  )
}