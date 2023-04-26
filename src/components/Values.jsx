import {SiOpenaigym} from 'react-icons/si'
import {images} from '../constant/index'
import SectionHead from "./SectionHead";
import {GiCutDiamond}   from 'react-icons/gi'
import {values} from '../constant/data'
import Card from '../UI/Card'

function Values() {
  return (
    <section className="values">
        <div className="container values__container">
            <div className="values__left">
                <div className="values__image">
                    <img src={images.values} alt="Values Image" />
                </div>
            </div>
            <div className="values__right">
                <SectionHead icon={<GiCutDiamond />} title="Values" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis quasi, cupiditate dolores quas quia ex?</p>
                <div className="values__wrapper">
                    {
                        values.map(({id, title, desc}) => {
                            return (
                                <Card className="values__value" key={id}>
                                    <span><SiOpenaigym/></span>
                                    <h4>{title}</h4>
                                    <small>{desc}</small>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default Values