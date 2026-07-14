import { Link, useLocation } from 'react-router-dom';

function EventsTabs() {
  const { pathname } = useLocation();

  return (
    <div className="events-tabs">
      <Link
        to="/events"
        className={`events-tabs__link ${pathname === '/events' ? 'events-tabs__link--active' : ''}`}
      >
        EVENTS HELD
      </Link>
      <Link
        to="/events/future"
        className={`events-tabs__link ${pathname === '/events/future' ? 'events-tabs__link--active' : ''}`}
      >
        FUTURE EVENTS
      </Link>
    </div>
  );
}

export default EventsTabs;