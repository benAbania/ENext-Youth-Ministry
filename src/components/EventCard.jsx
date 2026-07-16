import { ArrowIcon, PhotoIcon } from './Icons';

function EventCard({ event, variant }) {
  const { month, day, year, title, description, image, category, ctaLabel, albumUrl } = event;
  const isFuture = variant === 'future';

  // We use albumUrl for both since that's what comes from our database!
  const targetLink = albumUrl || '#';

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
          // Only show the button if there is actually a link saved in the database
          albumUrl ? (
            <a
              href={targetLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              {ctaLabel || 'LEARN MORE'}
              <ArrowIcon className="icon-arrow" />
            </a>
          ) : (
            <span className="btn btn--outline" style={{ opacity: 0.5, cursor: 'not-allowed' }}>
              COMING SOON
            </span>
          )
        ) : (
          albumUrl && (
            <a 
              href={targetLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="event-card__link"
            >
              {ctaLabel || 'VIEW PHOTOS'}
              <ArrowIcon className="icon-arrow" />
            </a>
          )
        )}
      </div>
    </article>
  );
}

export default EventCard;