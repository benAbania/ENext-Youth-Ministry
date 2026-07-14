import { futureEvents } from '../eventData';
import EventCard from './EventCard';
import EventsTabs from './EventsTabs';
import { CalendarIcon, ArrowIcon } from './Icons';

function FutureEvents() {
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
          {futureEvents.map((event) => (
            <EventCard key={event.id} event={event} variant="future" />
          ))}
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