import React from "react";
import styles from "./Hero.module.css"
import asset0 from '../assets/asset 0.jpeg';

const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet",
      name: "Gladis Lennon",
      position: "Head of SEO",
      img: "https://randomuser.me/api/portraits/women/47.jpg"
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet",
      name: "Gladis Lennon",
      position: "Head of SEO",
      img: "https://randomuser.me/api/portraits/women/47.jpg"
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi a voluptatum quidem Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      name: "Gladis Lennon",
      position: "Head of SEO",
      img: "https://randomuser.me/api/portraits/women/47.jpg"
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      name: "Gladis Lennon",
      position: "Head of SEO",
      img: "https://randomuser.me/api/portraits/women/47.jpg"
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet",
      name: "Gladis Lennon",
      position: "Head of SEO",
      img: "https://randomuser.me/api/portraits/women/47.jpg"
    },
  ];

const Hero = ()=>{


    return(
        <>
            <div className={styles.container}>
                <div className={styles.details}>
                    <h1>Let us find your <span className={styles.red}>Forever Food.</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                    <div className={styles.buttons}>
                        <button className={styles.btn1}>Search Now</button>
                        <button className={styles.btn2}>Know More</button>
                    </div>
                </div>
            </div>
            <div className={styles.container2}>
            <img src={asset0} className={styles.imageHome} alt="imgHome" />
            <div className={styles.cont2inner}>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tempore cupiditate nesciunt perspiciatis dignissimos.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                <button>Get in Touch</button>
            </div>
            </div>

            <div className={styles.container3}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className={styles.card}>
                    <p className={styles.text}>{testimonial.text}</p>
                    <div className={styles.author}>
                        <img src={testimonial.img} alt={testimonial.name} className={styles.avatar} />
                        <div>
                        <strong>{testimonial.name}</strong>
                        <p>{testimonial.position}</p>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Hero