import { ArrowIcon, PhotoIcon } from './Icons';

function EventCard({ event, variant }) {
  const { month, day, year, title, description, image, category, ctaLabel, albumUrl, link } = event;
  const isFuture = variant === 'future';

  return (
    <article className={`event-card event-card--${variant}`}>
      <div className="event-card__date">
        <span className="event-card__month">{month}</span>
        <span className="event-card__day">{day}</span>
        <span className="event-card__year">{year}</span>
      </div>

      <div className="event-card__media">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="event-card__placeholder" aria-hidden="true">
            <PhotoIcon />
          </div>
        )}
      </div>

      <div className="event-card__content">
        {isFuture && category && <span className="event-card__category">{category}</span>}
        <h3 className="event-card__title">{title}</h3>
        <p className="event-card__description">{description}</p>

        {isFuture ? (
          <a
            href={link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline"
          >
            {ctaLabel || 'LEARN MORE'}
            <ArrowIcon className="icon-arrow" />
          </a>
        ) : (
          // We updated the href and added target/rel attributes to open a new tab
          <a 
            href={albumUrl || "#"} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="event-card__link"
          >
            {ctaLabel || 'VIEW PHOTOS'}
            <ArrowIcon className="icon-arrow" />
          </a>
        )}
      </div>
    </article>
  );
}

export default EventCard;