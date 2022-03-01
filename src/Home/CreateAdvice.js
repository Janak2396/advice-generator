import { useEffect, useState } from "react"
import './CreateAdvice.css'
import Ddivider from '../pics/pattern-divider-desktop.svg'

import icon from '../pics/icon-dice.svg'

export default function CreateAdvice() {

  const [advice, setAdvice] = useState();
  const [id, setId] = useState();

  async function getData() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const myJson = await response.json()
    setAdvice(myJson.slip.advice)
    setId(myJson.slip.id)
  }
  useEffect(() => {
    getData();
  }, [])
  function clickHandler(){
    getData();
  }


  return (
    <div>

      <div className="card">
        <div className="id-card">
          <h1>ADVICE #{id}</h1>
        </div>
        <div className="advice-card">
          <h1><span className="quote-symbl">&#8216;&#8216;</span> {advice} <span className="quote-symbl">&#8217;&#8217;</span></h1>
        </div>
        <div>
          <img src={Ddivider} className="larger-device" alt="React Logo" />
        </div>
        <div >
          <button className="icon" onClick={()=>clickHandler()}><img src={icon}  alt="React Logo" /></button>
        </div>
      </div>
    </div>
  )
}