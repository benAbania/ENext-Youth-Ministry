import { useEffect, useState } from 'react';
import { supabase } from '../supabase';
import { ArrowIcon, ChevronIcon, HeartIcon, PeopleIcon, ImpactIcon } from './Icons';
import logo from '../assets/ENextLogo.png';
import churchLogo from '../assets/ChurchLogo.png'; 
import groupPhoto from '../assets/group-photo.jpg';
import EventCard from './EventCard'; 

function Hero() {
  const [fbReelUrl, setFbReelUrl] = useState('');
  const [liveFutureEvents, setLiveFutureEvents] = useState([]);
  
  const [churchInfo, setChurchInfo] = useState({
    mission: '', goal: '', purpose: '', verse1: '', verse2: ''
  });

  useEffect(() => {
    const fetchFutureEvents = async () => {
      const { data } = await supabase
        .from('events')
        .select('*')
        .eq('status', 'future')
        .order('id', { ascending: false });
      
      if (data) setLiveFutureEvents(data);
    };

    const fetchSettings = async () => {
      const { data } = await supabase
        .from('homepage_settings')
        .select('*')
        .eq('id', 1)
        .single();

      if (data) {
        setFbReelUrl(data.fb_reel_url || '');
        setChurchInfo({
          mission: data.church_mission || '',
          goal: data.church_goal || '',
          purpose: data.church_purpose || '',
          verse1: data.church_verse_1 || '',
          verse2: data.church_verse_2 || ''
        });
      }
    };
    
    fetchFutureEvents();
    fetchSettings();

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
            {/* The title size is now supercharged for both mobile and desktop! */}
            <h1 className="hero__title" style={{ fontSize: 'clamp(4rem, 16vw, 7rem)', lineHeight: '0.9', marginBottom: '20px' }}>
              <span style={{ display: 'block' }}>EMPOWER</span>
              <span className="hero__title--accent" style={{ display: 'block' }}>NEXT</span>
            </h1>
            <p className="hero__tagline" style={{ fontSize: '1.4rem', letterSpacing: '2px', marginBottom: '15px' }}>
              YOUTH TODAY. LEADERS TOMORROW.
            </p>
            <p className="hero__description" style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
              Empowering the next generation to know Christ, find purpose, and make a difference.
            </p>
            <a href="/#about" className="btn btn--solid" onClick={scrollToAbout} style={{ fontSize: '1.1rem', padding: '14px 32px' }}>
              JOIN US
              <ArrowIcon className="icon-arrow" />
            </a>
          </div>
        </div>

        <div className="container brand-verse">
          <img src={logo} alt="EmpowerNext logo" className="brand-verse__logo" />
          <div className="brand-verse__text" style={{ width: '100%' }}>
            <span className="eyebrow" style={{ fontSize: '1.1rem' }}>OUR VERSE</span>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.6', marginTop: '10px', maxWidth: '100%' }}>
              &ldquo;We will not hide them from their descendants; we will tell the next generation the praiseworthy deeds of the Lord, his power, and the wonders he has done. He decreed statutes for Jacob and established the law in Israel, which he commanded our ancestors to teach their children, so the next generation would know them, even the children yet to be born, and they in turn would tell their children.&rdquo;
            </p>
            <span className="brand-verse__citation" style={{ fontSize: '1.1rem', marginTop: '10px', display: 'block' }}>PSALM 78:4-6</span>
          </div>
        </div>
      </section>

      {/* Featured Events Reel Section */}
      <div className="container fb-reel">
        <div className="fb-reel__media-wrapper">
          {fbReelUrl ? (
            <iframe
              className="fb-reel__frame"
              src={`https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(fbReelUrl)}&show_text=false&autoplay=true&mute=true`}
              frameBorder="0"
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div style={{ padding: '20px', textAlign: 'center', color: '#888', background: '#1a1a1a', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
              Loading video...
            </div>
          )}
        </div>
        <div className="fb-reel__content">
          <div className="fb-reel__heading">
            <span className="eyebrow" style={{ fontSize: '1.1rem' }}>FEATURED EVENTS</span>
            <p style={{ fontSize: '1.25rem', lineHeight: '1.6', marginTop: '10px' }}>
              Every gathering is a chance to know Christ, find purpose, and make an impact
              together. Watch a glimpse of what God is doing among us, and imagine
              yourself in the next one.
            </p>
          </div>

          <div className="fb-reel__event-preview">
            {liveFutureEvents.length > 0 ? (
              <EventCard event={liveFutureEvents[0]} variant="future" />
            ) : (
              <p className="empty-state" style={{ color: '#888', fontStyle: 'italic', fontSize: '1.2rem' }}>Loading next event...</p>
            )}
          </div>
        </div>
      </div>

      <div id="about" className="container who-we-are">
        <div className="who-we-are__text">
          <span className="eyebrow" style={{ fontSize: '1.1rem' }}>WHO WE ARE</span>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.6', marginTop: '10px' }}>
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

      {/* HARDCODED: Church Identity Section */}
      <div className="container brand-verse" style={{ marginTop: '40px', borderLeft: '4px solid #7ed957' }}>
        <img 
          src={churchLogo} 
          alt="WISDOM Church Logo" 
          className="brand-verse__logo" 
          style={{ 
            borderRadius: '50%', 
            objectFit: 'cover', 
            boxShadow: '0 0 30px rgba(126, 217, 87, 0.25)' 
          }} 
        />
        <div className="brand-verse__text" style={{ width: '100%' }}>
          
          <div style={{ marginBottom: '20px' }}>
            <h2 style={{ margin: '0 0 5px 0', fontSize: '2rem', textAlign: 'left', color: 'white', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 'bold' }}>
              WISDOM CHURCH - VILLA ESMERALDA OUTREACH
            </h2>
          </div>

          <div style={{ marginBottom: '0' }}>
            <span className="eyebrow" style={{ fontSize: '1.1rem', color: '#7ed957' }}>OUR VERSE</span>
            <p style={{ fontStyle: 'italic', marginBottom: '10px', fontSize: '1.25rem', lineHeight: '1.6', marginTop: '10px', maxWidth: '100%' }}>
              &ldquo;For with God nothing shall be impossible.&rdquo;
            </p>
            <span className="brand-verse__citation" style={{ fontSize: '1.1rem', color: '#7ed957' }}>LUKE 1:37</span>
          </div>

        </div>
      </div>

      {/* DYNAMIC: Editable Declaration Card */}
      {(churchInfo.verse1 || churchInfo.verse2) && (
        <div className="container brand-verse" style={{ marginTop: '20px', marginBottom: '40px', borderLeft: '4px solid #7ed957' }}>
          <div className="brand-verse__text" style={{ width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span className="eyebrow" style={{ color: '#7ed957', fontSize: '1.1rem' }}>DECLARATION</span>
            {churchInfo.verse1 && (
              <p style={{ fontSize: '1.4rem', fontStyle: 'italic', lineHeight: '1.6', marginTop: '15px', marginBottom: '15px', color: '#e0e0e0', whiteSpace: 'pre-wrap', maxWidth: '100%' }}>
                &ldquo;{churchInfo.verse1}&rdquo;
              </p>
            )}
            {churchInfo.verse2 && <span className="brand-verse__citation" style={{ fontSize: '1.2rem', color: '#7ed957' }}>{churchInfo.verse2}</span>}
          </div>
        </div>
      )}

      {/* DYNAMIC: Editable Mission, Goal, and Purpose Grid */}
      <div className="container features-grid" style={{ marginBottom: '80px' }}>
        <div className="feature-card">
          <span className="feature-card__icon">
            <HeartIcon />
          </span>
          <h3 style={{ color: '#e50914', fontSize: '1.6rem', marginBottom: '10px' }}>OUR MISSION</h3>
          <p style={{ whiteSpace: 'pre-wrap', fontSize: '1.25rem', color: 'white', lineHeight: '1.6' }}>{churchInfo.mission}</p>
        </div>
        <div className="feature-card">
          <span className="feature-card__icon">
            <PeopleIcon />
          </span>
          <h3 style={{ color: '#e50914', fontSize: '1.6rem', marginBottom: '10px' }}>OUR GOAL</h3>
          <p style={{ whiteSpace: 'pre-wrap', fontSize: '1.25rem', color: 'white', lineHeight: '1.6' }}>{churchInfo.goal}</p>
        </div>
        <div className="feature-card">
          <span className="feature-card__icon">
            <ImpactIcon />
          </span>
          <h3 style={{ color: '#e50914', fontSize: '1.6rem', marginBottom: '10px' }}>OUR PURPOSE</h3>
          <p style={{ whiteSpace: 'pre-wrap', fontSize: '1.25rem', color: 'white', lineHeight: '1.6' }}>{churchInfo.purpose}</p>
        </div>
      </div>
    </>
  );
}

export default Hero;