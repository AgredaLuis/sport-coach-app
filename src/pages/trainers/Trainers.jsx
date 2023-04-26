import React from 'react'
import Header from "../../components/Header"
import {trainers} from "../../constant/data"
import {BsInstagram} from "react-icons/bs"
import {FaFacebook} from "react-icons/fa"
import {AiOutlineTwitter} from "react-icons/ai"
import { FaLinkedinIn } from 'react-icons/fa'
import Trainer from '../../components/Trainer'
import {images} from '../../constant/index'

import './trainers.css'
function Trainers() {
  return (
    <>
    <Header title="Our Trainers" image={images.header_bg_5}>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, labore!</p>
    </Header>

    <section className='trainers'>
      <div className="container trainers__container">
        {
          trainers.map(({id, image, name,job, socials})=>{
            return(
              <Trainer key={id} image={image} name={name} job={job} socials={[
                {icon:<BsInstagram/>, link: socials[0]},
                {icon:<AiOutlineTwitter/>, link: socials[1]},
                {icon:<FaFacebook/>, link: socials[2]},
                {icon:<FaLinkedinIn/>, link: socials[3]},
              ]}/>
            )
          })
        }
      </div>
    </section>
    </>
  )
}

export default Trainers