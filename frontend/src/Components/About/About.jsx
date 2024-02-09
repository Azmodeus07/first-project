import React from 'react'
import './About.css'
import aboutus from '../Assets/aboutus.png'

const About = () => {
  return (
    <div className='about'>
        <section id="page-header" class="about-header">
             <h2>#KnowUs</h2>
             <p>Welcome to Tech Trends Closet </p>
          </section>

          <div id="about-head" class="section-p1">
              <img src={aboutus} alt=""/>
              <div>
                <h1>Who Are we?</h1>
                <p>At Tech Trends Closet, we believe in the seamless fusion of technology and style. Our mission is to curate a collection of cutting-edge gadgets and accessories that not only elevate your tech game but also complement your unique fashion sense. We understand that today's digital age demands more than just functionality; it calls for a harmonious blend of innovation and aesthetics.</p>
                <h3>Our Story</h3>
                <p>Tech Trends Closet emerged from a shared passion for the latest in technology and a keen eye for fashion trends. Our team of tech enthusiasts and style mavens came together with a vision to create a platform that goes beyond the ordinary. We wanted to redefine the way you experience and showcase your tech lifestyle.</p>
                <h3>What Sets Us Apart?</h3>
                <p><b>1.Curated Selection:</b> Every product in our catalog is carefully curated, ensuring that you have access to the most advanced and stylish tech accessories on the market.</p>
                <p><b>2.Quality Assurance:</b> We prioritize quality in every aspect, from the products we offer to the service we provide. Expect nothing but excellence when you shop with us.</p>
                <p><b>3.Trendsetting Style:</b>Stay ahead of the curve with our fashion-forward tech accessories. We believe that your gadgets should be an extension of your personal style, and we're here to make that happen.</p>
                <p><b>4.Customer-Centric Approach:</b> Your satisfaction is our top priority. Our dedicated customer support team is always ready to assist you, ensuring a smooth and enjoyable shopping experience.</p>
                <h3>Explore the Future with Us</h3>
                <p title="">Tech Trends Closet is not just a website; it's a journey into the future of tech and style. Whether you're a gadget geek, a fashionista, or someone who appreciates the perfect blend of form and function, you're sure to find something extraordinary here.</p>
                <br></br>
                <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Join us on this exciting adventure as we continue to discover and share the latest tech trends that will redefine the way you interact with your devices. Welcome to Tech Trends Closet, where innovation meets elegance!</marquee>
              </div>
          </div>        
          
    </div>
  )
}

export default About