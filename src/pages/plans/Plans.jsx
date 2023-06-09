import React from 'react'
import Header from "../../components/Header"
import {plans} from "../../constant/data"
import {images} from '../../constant/index'
import Card from "../../UI/Card"
import './plans.css'



function Plans() {
  return (
    <>
    <Header title="Membership Plans" image={images.header_bg_4}>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate aperiam perspiciatis veniam voluptas, qui quod unde.</p>
    </Header>
    <section className="plans">
      <div className="container plans__container">
        {
          plans.map(({id, name, desc, price, features}) => {
            return(
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1><h2>/month</h2>
                <h4>Features</h4>
                {
                  features.map(({feature, available}, index) => {
                    return (
                      <p key={index} className={!available ? 'disabled' : ""}>{feature}</p>
                    )
                  })
                }
                <button className='btn lg'>Choose Plan</button>
              </Card>
            )
          })
        }
      </div>
    </section>
    </>
  )
}

export default Plans