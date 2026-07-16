import { useEffect, useState } from 'react';
import { supabase } from '../supabase'; // Make sure this path points to your supabase.js file
import EventCard from './EventCard';
import EventsTabs from './EventsTabs';
import { CalendarIcon, ArrowIcon } from './Icons';

function FutureEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await supabase
        .from('events')
        .select('*')
        .eq('status', 'future')
        .order('id', { ascending: false });
      
      if (data) setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <section className="future-events">
      <div className="events-hero">
        <div className="container future-events__header">
          <EventsTabs />
          <h2 className="section-heading">
            <span className="section-heading__line">FUTURE</span>
            <span className="section-heading__line section-heading__line--accent">EVENTS</span>
          </h2>
          <p className="section-subtitle">WHAT&apos;S NEXT? LET&apos;S GO!</p>
        </div>
      </div>

      <div className="container">
        <div className="event-list">
          {events.length > 0 ? (
            events.map((event) => (
              <EventCard key={event.id} event={event} variant="future" />
            ))
          ) : (
            <p style={{ color: '#888', fontStyle: 'italic', textAlign: 'center' }}>No future events scheduled yet.</p>
          )}
        </div>

        <div className="cta-banner">
          <div className="cta-banner__icon">
            <CalendarIcon />
          </div>
          <p className="cta-banner__text">
            DON&apos;T MISS WHAT&apos;S NEXT.
            <br />
            BE PART OF THE MOVEMENT.
          </p>
          <button type="button" className="btn btn--light">
            ADD TO CALENDAR
            <ArrowIcon className="icon-arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default FutureEvents;