import { useEffect } from 'react';
import { ArrowIcon, ChevronIcon, HeartIcon, PeopleIcon, ImpactIcon } from './Icons';
import logo from '../assets/ENextLogo.png';
import groupPhoto from '../assets/group-photo.jpg';
const FB_REEL_URL = 'https://www.facebook.com/reel/2031612771058886/';
import EventCard from './EventCard'; 
import { futureEvents } from '../eventData'; // Or whatever your data file is named

function Hero() {
  // Supports the navbar's "/#about" link when arriving from another page.
  useEffect(() => {
    if (window.location.hash === '#about') {
      document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const scrollToAbout = (e) => {
    e.preventDefault();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <h1 className="hero__title">
              <span>EMPOWER</span>
              <span className="hero__title--accent">NEXT</span>
            </h1>
            <p className="hero__tagline">YOUTH TODAY. LEADERS TOMORROW.</p>
            <p className="hero__description">
              Empowering the next generation to know Christ, find purpose, and make a difference.
            </p>
            <a href="/#about" className="btn btn--solid" onClick={scrollToAbout}>
              JOIN US
              <ArrowIcon className="icon-arrow" />
            </a>
          </div>
        </div>

        <div className="container brand-verse">
          <img src={logo} alt="EmpowerNext logo" className="brand-verse__logo" />
          <div className="brand-verse__text">
            <span className="eyebrow">OUR VERSE</span>
            <p>
              &ldquo;We will not hide them from their descendants; we will tell the next
              generation the praiseworthy deeds of the Lord, his power, and the wonders he
              has done. He decreed statutes for Jacob and established the law in Israel,
              which he commanded our ancestors to teach their children, so the next
              generation would know them, even the children yet to be born, and they in
              turn would tell their children.&rdquo;
            </p>
            <span className="brand-verse__citation">PSALM 78:4&ndash;6</span>
          </div>
        </div>
      </section>

{/* Featured Events Reel Section */}
      <div className="container fb-reel">
        
        <div className="fb-reel__media-wrapper">
          <iframe
            className="fb-reel__frame"
            src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(FB_REEL_URL)}&show_text=false&autoplay=true&mute=true`}
            title="EmpowerNext Facebook Reel"
            frameBorder="0"
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="fb-reel__content">
          <div className="fb-reel__heading">
            <span className="eyebrow">FEATURED EVENTS</span>
            <p>
              Every gathering is a chance to know Christ, find purpose, and make an impact
              together. Watch a glimpse of what God is doing among us, and imagine
              yourself in the next one.
            </p>
          </div>

          <div className="fb-reel__event-preview">
            {/* Grabs the first item in your futureEvents array (Rooted) */}
            <EventCard event={futureEvents[0]} variant="future" />
          </div>
        </div>

      </div>

      <div id="about" className="container who-we-are">
        <div className="who-we-are__text">
          <span className="eyebrow">WHO WE ARE</span>
          <p>
            EmpowerNext is the youth ministry of our church, created to build a community
            where young people can grow in faith, discover their purpose, and step boldly
            into their future.
          </p>
        </div>
        <div className="who-we-are__media">
          <img src={groupPhoto} alt="EmpowerNext gathering" />
          <button type="button" className="who-we-are__next" aria-label="Next slide">
            <ChevronIcon />
          </button>
        </div>
      </div>

      <div className="container features-grid">
        <div className="feature-card">
          <span className="feature-card__icon">
            <HeartIcon />
          </span>
          <h3>KNOW CHRIST</h3>
          <p>Building a relationship that lasts.</p>
        </div>
        <div className="feature-card">
          <span className="feature-card__icon">
            <PeopleIcon />
          </span>
          <h3>FIND PURPOSE</h3>
          <p>Discover your God-given design.</p>
        </div>
        <div className="feature-card">
          <span className="feature-card__icon">
            <ImpactIcon />
          </span>
          <h3>MAKE AN IMPACT</h3>
          <p>Change your world for His glory.</p>
        </div>
      </div>

      <div className="container hero__closer">
        <span>YOU ARE NEXT.</span>
      </div>
    </>
  );
}

export default Hero;