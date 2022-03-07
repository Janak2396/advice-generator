import { useEffect, useState } from "react"
import './CreateAdvice.css'
import Ddivider from '../pics/pattern-divider-desktop.svg';
import Backbtn from '../pics/back-btn.svg';
import icon from '../pics/icon-dice.svg'

export default function CreateAdvice() {


  const [obj, setObj] = useState({});
  const [getlist, setGetList] = useState([]);
  const[click, setClick] = useState('Save');

  async function getData() {
    const response = await fetch('https://api.adviceslip.com/advice')
    const myJson = await response.json()
    setObj(myJson.slip)
    setClick("Save")
  }
  useEffect(() => {
    
    getData();

  }, [])


  function saveHandler() {

    let retriveItem = JSON.parse(localStorage.getItem('quotes')) || [];

     //console.log("obj " ,obj)
    const found = retriveItem.find(elemnet => elemnet.id === obj.id)
    console.log(found)
    if (found) {
    }
    else {
      // console.log("error", found)
      retriveItem.push(obj);
      setClick('Saved !!!')
    }
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
              <button className="save" onClick={() => saveHandler()}>{click}</button>
            </div>
            <h1 className="id">ADVICE #{obj.id}</h1>
            <div>
              <button className="list" onClick={() => listHandler("card")}>List</button>
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

        <div className='back' >
          <div>
            <img  src={ Backbtn} className="back-btn" onClick={() => listHandler("card")}  alt="back-btn"  />
          </div>
          <div className="list-item" >
            {getlist.map((item) => {

              return (
                <ul  id="items">
                  <li id="item-id"> # {item.id}</li>
                  <li  className="item-advice" key={item.id}> {item.advice}</li>
                </ul>
              )
            })}
          </div>
        </div>
      </div>
    </div>

  )
}


