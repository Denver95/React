import { useState } from 'react'
import { Message } from './components/Message/Message'
import style_App from './styleApp.module.css'

export function App() {
  const h3 = 'Open Message Component'
  const [toggle, setToggle] = useState(false)

  return (
    <div className={style_App.App}>
      <div className={style_App.container}>
        <div className={style_App.Message}>
          <h3 className={style_App.App_title}>Message component </h3>
          <button className={style_App.App_btn} onClick={() => setToggle(!toggle)}>{toggle ? 'Hide' : 'Show'} </button>
          {toggle && <Message text_h3={h3} />}
        </div>




      </div>

    </div>
  )
}
