import React from 'react'
import Header from "../../components/Header"
import {images} from '../../constant/index'
import './gallery.css'

function Gallery() {

  const galleryLength = 15;
  const imagesGallery =[];

  for(let i=1; i< galleryLength; i++){
    imagesGallery.push(`images.gallery${i}`)
  }


  return (
    <>
    <Header title="Our Gallery" image={images.header_bg_3}>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus laboriosam alias aspernatur minima doloribus quos ipsa voluptatem architecto ea?</p>
    </Header>
    <section className='gallery'>
      <div className="container gallery__container">
        {
          imagesGallery.map((image, index) =>{
            return(
              <article key={index}>
                <img src={image} alt={`Gallery Image ${index + 1}`} />
              </article>
            )
          })
        }
      </div>


    </section>
    </>
  )
}

export default Gallery