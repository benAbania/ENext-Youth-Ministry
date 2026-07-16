import { useEffect, useState } from 'react';
import { supabase } from '../supabase'; // Ensure this path matches your folder structure
import EventCard from './EventCard';
import EventsTabs from './EventsTabs';

function PastEvents() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await supabase
        .from('events')
        .select('*')
        .eq('status', 'past')
        .order('id', { ascending: false });
      
      if (data) setEvents(data);
    };
    fetchEvents();
  }, []);

  return (
    <section className="past-events">
      <div className="events-hero">
        <div className="container">
          <EventsTabs />
          <h2 className="section-heading">
            <span className="section-heading__line">EVENTS</span>
            <span className="section-heading__line section-heading__line--accent">HELD</span>
          </h2>
          <p className="section-subtitle">LOOKING BACK. CELEBRATING WHAT GOD HAS DONE.</p>
        </div>
      </div>

      <div className="container">
        <div className="event-list">
          {events.length > 0 ? (
            events.map((event) => (
              <EventCard key={event.id} event={event} variant="past" />
            ))
          ) : (
            <p style={{ color: '#888', fontStyle: 'italic', textAlign: 'center' }}>No past events found.</p>
          )}
        </div>

        <div className="quote-block">
          <div className="quote-block__text">
            <p>&ldquo;Remember what the Lord has done. Let it fuel what He will do next.&rdquo;</p>
            <span className="quote-block__citation">1 SAMUEL 7:12</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PastEvents;