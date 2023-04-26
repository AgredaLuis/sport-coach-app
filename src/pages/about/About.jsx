import React from "react";
import "./about.css";
import Header from "../../components/Header";
import {images} from '../../constant/index'

const About = () => {
  return (
    <>
      <Header title="About Us" image={images.header_bg_1}>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias vitae
          labore commodi, soluta neque voluptas!
        </p>
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={images.about1} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus placeat ipsam culpa, sit officiis consequuntur, nemo
              atque ullam veniam vel, mollitia asperiores recusandae fugit
              quisquam dolorem nisi quis perspiciatis dolor.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              cumque tempora ratione laboriosam reprehenderit beatae dolore
              dolores autem quam veniam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              adipisci?
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              magnam voluptates sunt illo tempora.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              ipsa, beatae laboriosam nemo porro inventore quae necessitatibus
              magni, ut quaerat, mollitia a eius ea cum atque. Omnis illo
              molestias sunt! Harum, at.
            </p>
          </div>
          <div className="about__section-image">
            <img src={images.about2} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={images.about3} alt="Our Misiion Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Repellendus placeat ipsam culpa, sit officiis consequuntur, nemo
              atque ullam veniam vel, mollitia asperiores recusandae fugit
              quisquam dolorem nisi quis perspiciatis dolor.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              cumque tempora ratione laboriosam reprehenderit beatae dolore
              dolores autem quam veniam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
              adipisci?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
