import { useState, useEffect } from 'react'
import { Form } from './components/Form/Form'
import { Message } from './components/Message/Message'
import style_App from './styleApp.module.css'

import IButton from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';

export function App() {
  const h3 = 'Open Message Component'
  const [messageList, setMessageList] = useState([{ text: '', author: '' }])
  const [toggle, setToggle] = useState(false)

  const addMessage = (newMessage) => {
    setMessageList([...messageList, newMessage])
  }


  useEffect(() => {
    if (messageList.length > 0 && messageList[messageList.length - 1].author === 'user') {
      const timeout = setTimeout(() => {
        addMessage({
          author: 'Bot',
          text: 'Im Bot',
        })
      }, 1500)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [messageList])



  return (
    <div className={style_App.App}>
      <div className={style_App.container}>

        <Typography variant="h4" gutterBottom>
          Message component
        </Typography>
        <IButton
          onClick={() => setToggle(!toggle)}
          variant="contained"
          color="secondary"
        >
          {toggle ? 'Hide' : 'Show'}
        </IButton>
        <div className={style_App.flex_box_chat}>

          {toggle && <Message h3={h3} messageList={messageList} />}
        </div>
        {toggle && <Form addMessage={addMessage} />}
      </div>
    </div>

  )
}
