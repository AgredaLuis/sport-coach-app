
import Header from "../../components/Header"
import {images} from '../../constant/index'
import {MdEmail} from "react-icons/md"
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'

import './contact.css'
function Contact() {
  return (
    <>
    <Header title="Get In Touch" image={images.header_bg_2}>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, quisquam.</p>
    </Header>

    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:Luis.Agreda98@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="http://m.me/LuisAlfonsoAgreda" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
          <a href="https://wa.me/+584248416624" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact