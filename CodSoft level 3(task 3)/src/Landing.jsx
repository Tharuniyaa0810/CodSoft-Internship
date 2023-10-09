import React, { useEffect, useRef } from 'react';
import '../assets/css/landing.css';
import '../assets/css/App.css';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/UserSlice';
import Lottie from 'lottie-web';
import animationland from '../assets/lotties/animation_lmypnfln.json';
import welcomeanim from '../assets/lotties/welcome.json';
import ContactDetails from './ContactDetails';
import MarketInsightsTable from './MarketInsight';
import { Link as ScrollLink, Element } from 'react-scroll';
import { Link } from 'react-router-dom';
import Background from './Background';
import logo from '../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const Landing = () => {
  const user = useSelector(selectUser);
  const contain = useRef(null);
  const wel= useRef(null);
  const contactDetailsRef = useRef(null);

  const username = user.user && user.user.username ? user.user.username : 'Guest';
  useEffect(() => {
    const anim = Lottie.loadAnimation({
      container: contain.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationland,
    });
    return () => {
      anim.destroy();
    };
  }, []);
  useEffect(() => {
    const anime = Lottie.loadAnimation({
      container: wel.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: welcomeanim,
    });
    return () => {
      anime.destroy();
    };
  }, []);

  const handleContactClick = () => {
    if (contactDetailsRef.current) {
      contactDetailsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
  
      <div className="landing-page">
        <header className="headerlanding">
        <div className='sidebar-brand'>
            <img src={logo} alt='logo'></img>
            <h1 style={{fontSize:"28px",color:"white"}}>ForexFlare</h1>
          </div>
          <nav className="navbar">
            <ul>
              <li><ScrollLink to="home" smooth={true} offset={-100}>Home</ScrollLink></li>
              <li><ScrollLink to="insights" smooth={true} offset={-150}>Market Insights</ScrollLink></li>
              <li><Link to="/convertor">Currency Convertor</Link></li>
              
              <li><ScrollLink to="contact" smooth={true} >Contact</ScrollLink></li>
           
            </ul>
          </nav>
          {user ? (
            <div className="user-welcome" style={{color:"white",fontSize:"large"}}>
             
              <FontAwesomeIcon icon={faUser} style={{ marginRight: '8px' }} />
              Welcome, {username}!
            </div>
          ) : null}
        </header>

        <div>
        <div className="animation-containerland">

  <div ref={contain} className="animconf"></div>
</div>
          <div className="right-message">
         
    <h2>Discover ForexFlare</h2>
    <p>Unlock the world of currency trading with us. Get real-time market insights and convert currencies effortlessly.</p>
    <a class="convert-button1">Convert Currency </a>
          </div>

        </div>

        <Element name="home">
          <div className="paragraph-section">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Welcome to ForexFlare, your trustworthy companion in the realm of currency. In a world where financial markets are increasingly interconnected, understanding currency dynamics is essential. Whether you're an experienced trader, a curious investor, or someone simply looking to convert currencies for your upcoming international trip, we are here to empower you. Our platform offers a wide range of features to cater to your needs.For those seeking real-time currency insights, our up-to-the-minute data and analysis provide you with a competitive edge. We understand the importance of timing in currency trading, and our platform ensures that you have access to the latest trends, news, and forecasts.Our user-friendly conversion tools make it a breeze to convert one currency to another. Whether you're converting dollars to euros or yen to pounds, our intuitive interface ensures that you get accurate and instant results. Say goodbye to the hassle of manual calculations.Exploring currency pairings? Look no further. We offer comprehensive information on currency pairs, helping you understand their dynamics and historical performance. Whether you're interested in major pairs like EUR/USD or exotic pairs, our platform provides valuable insights.But we're not just about numbers and charts. At FOREXFLARE, we believe in making currency knowledge accessible. Our educational resources, including articles, guides, and tutorials, are designed to demystify the complexities of currency markets. Whether you're a beginner or an expert, there's always something new to learn.We also understand that currency matters can be perplexing, and you may have questions or concerns. That's why our dedicated support team is ready to assist you. Feel free to reach out with any inquiries, and we'll provide you with the guidance you need.In essence, FOREXFLARE is your all-in-one destination for everything related to currency. We're on a mission to make currency information transparent, reliable, and user-friendly. Join us on this journey as we strive to simplify the world of currencies, ensuring that understanding currency is not only easy but also accessible to everyone. Your financial decisions deserve to be well-informed, and FOREXFLARE is here to make that a reality. Welcome to a world where currency becomes clear, accessible, and, most importantly, your ally in the world of finance.</p>
          </div>
        </Element>

        <Element name="insights">
          <MarketInsightsTable isVisible={true} />
        </Element>
        
        <Element name='contact'>
          <ContactDetails />
        </Element>
        
      </div>
    </>
  );
};

export default Landing;