import { useEffect, useState } from "react"
import './CreateAdvice.css'
import Ddivider from '../pics/pattern-divider-desktop.svg'

import icon from '../pics/icon-dice.svg'

export default function CreateAdvice() {


  const [obj, setObj] = useState({});
  const [getlist, setGetList] = useState([]);


  async function getData() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const myJson = await response.json()
    setObj(myJson.slip)

  }
  useEffect(() => {

    getData();

  }, [])


  function saveHandler() {


    let retriveItem = JSON.parse(localStorage.getItem('quotes')) || [];
    retriveItem.push(obj);
    localStorage.setItem(("quotes"), JSON.stringify(retriveItem));
  }



  function listHandler() {

    let getdata = JSON.parse(localStorage.getItem('quotes')) || [];
    setGetList(getdata)
    const card = document.getElementById("card")
    card.classList.toggle("flipcard");

  }

  return (
    <div className='maincard'>
      <div className='card' id='card' >
        <div className='front'>

          <div className="id-card">
            <div>
              <button className="save" onClick={() => saveHandler()}>Save</button>
            </div>
            <h1 className="id">ADVICE #{obj.id}</h1>
            <div>
              <button className="list"  onClick={() => listHandler("card")}>List</button>
            </div>
          </div>
          <div className="advice-card">
            <h1><span className="quote-symbl">&#8216;&#8216;</span> {obj.advice} <span className="quote-symbl">&#8217;&#8217;</span></h1>
          </div>
          <div>
            <img src={Ddivider} className="larger-device" alt="React Logo" />
          </div>
          <div >
            <button className="icon" onClick={() => getData()}><img src={icon} alt="React Logo" /></button>
          </div>
        </div>

        <div className='back' onClick={() => listHandler("card")}>
          <ul className="list-item" >
            {getlist.map((item) => {

              return (
                <ul >
                  <li key={item.id}><span id="item-id">{item.id}</span> {item.advice}</li>
                </ul>
              )
            })}
          </ul>
        </div>
      </div>
    </div>

  )
}


