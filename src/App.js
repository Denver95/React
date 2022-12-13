import { useState, useEffect } from 'react'
import { Form } from './components/Form/Form'
import { Message } from './components/Message/Message'
import style_App from './styleApp.module.css'
import { Button } from './components/btn/Button'

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
          text: 'Im Bot'
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
        <div className={style_App.Message}>
          <h3 className={style_App.App_title}>Message component </h3>
          <Button
            className={style_App.App_btn}
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? 'Hide' : 'Show'}
          </Button>
          {/* <button className={style_App.App_btn} onClick={() => setToggle(!toggle)}>{toggle ? 'Hide' : 'Show'} </button> */}
          {toggle && <Form addMessage={addMessage} />}
          {toggle && <Message h3={h3} messageList={messageList} />}
        </div>
      </div>
    </div>
  )
}
