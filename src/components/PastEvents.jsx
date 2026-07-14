import { pastEvents } from '../eventData';
import EventCard from './EventCard';
import EventsTabs from './EventsTabs';
import logo from '../assets/ENextLogo.png';

function PastEvents() {
  return (
    <section className="past-events">
      <div className="past-events__hero">
        <div className="container past-events__hero-content">
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
          {pastEvents.map((event) => (
            <EventCard key={event.id} event={event} variant="past" />
          ))}
        </div>

        <div className="quote-block">
          <div className="quote-block__text">
            <p>&ldquo;Remember what the Lord has done. Let it fuel what He will do next.&rdquo;</p>
            <span className="quote-block__citation">1 SAMUEL 7:12</span>
          </div>
          <img src={logo} alt="" aria-hidden="true" className="quote-block__logo" />
        </div>
      </div>
    </section>
  );
}

export default PastEvents;