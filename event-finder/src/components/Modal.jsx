import React from 'react'
import Popup from 'reactjs-popup'
import '../App.css'

const Modal =  ({seatmap}) => (
  <Popup trigger={<button className="button"> Seat Map </button>} modal closeOnDocumentClick>
  <span> 
    <img src={seatmap ? seatmap.staticUrl : "No seatmap available for this venue"} alt="seatmap"/> 
  </span>
</Popup>
)

export default Modal;

