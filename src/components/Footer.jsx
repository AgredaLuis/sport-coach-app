import {Link} from 'react-router-dom'
import {images} from '../constant/index'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter , AiFillInstagram } from 'react-icons/ai'
function Footer() {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className='Logo'>
                    <img src={images.logo_png} alt="logo" />
                </Link>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum, perspiciatis iure recusandae quam in nostrum.</p>
                <div className="footer__socials">
                    <a href="https://linkedin.com/" target="_blank" rel='noreferrer noopener'>
                        <FaLinkedin/>
                    </a>
                    <a href="https://facebook.com/" target="_blank" rel='noreferrer noopener'>
                        <FaFacebook/>
                    </a>
                    <a href="https://twitter.com/" target="_blank" rel='noreferrer noopener'>
                        <AiOutlineTwitter/>
                    </a>
                    <a href="https://instagram.com/" target="_blank" rel='noreferrer noopener'>
                        <AiFillInstagram/>
                    </a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/about">About</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/about">About</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/plans">Plans</Link>
                <Link to="/about">About</Link>
                <Link to="/trainers">Trainers</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2022 Luis Agreda &copy; sientete libre de copiarte </small></div>    
    </footer>
  )
}

export default Footer