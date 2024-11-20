import React from 'react';
import Navbar from "../../components/NavBar/Navbar";
import About from "./sections/About/About";
import Features from "./sections/Features/Features";
import Plans from "./sections/Plans/Plans";
import Testimonials from "./sections/Testimonials/Testimonials";
import Blog from "./sections/Blog/Blog.jsx";
import ContactUs from "./sections/ContactUs/ContactUs.jsx";
import Footer from "./sections/Footer/Footer.jsx";

const Home = () => {

  const urls = [
    { title: 'Home', href: '#home' },
    { title: 'Funcionalidades', href: '#funcionalidades' },
    { title: 'Preços', href: '#precos' },
    { title: 'Depoimentos', href: '#depoimento' },
    { title: 'Blog', href: '#blog' },
    { title: 'Contato', href: '#contato' }
  ];

  return (
    <>
      <Navbar items={urls} />
      <section id='home'>
      <About/>
      </section>
      <section id="funcionalidades" >
      <Features/>
      </section>
      <section id="precos">
      <Plans/>
      </section>
      <section id="depoimento">
      <Testimonials/>
      </section>
      <section id="blog">
      <Blog/>
      </section>
      <section id="contato">
      <ContactUs/>
      </section>
      <Footer />
    </>
  );
};

export default Home;
