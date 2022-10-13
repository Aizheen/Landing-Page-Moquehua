import React from 'react'
import "../stylesheets/btn-wp.css"
import {IoLogoWhatsapp} from "react-icons/io"


export default function BtnWp() {
  return (
    <>
    <a className='btn-wp-fixed' href='https://api.whatsapp.com/send?phone=541161397391' target="_blank"><IoLogoWhatsapp/></a>       
    </>
  )
}
