// Set `image` to an imported photo once you have real event pictures, e.g.:
//   import elevateNight from './assets/events/elevate-night.jpg';
// Leave it as `null` and EventCard will render a placeholder instead.
import annivThumbnail from './assets/Cover.jpg';

export const pastEvents = [
  {
    id: 'anniversary-2024',
    month: 'NOV', 
    day: '24',  
    year: '2024',
    title: 'ANNIVERSARY 2024',
    description: 'Celebrating Another Amazing Year of Gods Faithfulness.',
    image: annivThumbnail,
    albumUrl: 'https://photos.app.goo.gl/22wPE4JW35PWyDPJA',
    ctaLabel: 'VIEW PHOTOS',
  },
];

export const futureEvents = [
  {
    id: 'ignite',
    month: 'MAY',
    day: '17',
    year: '2025',
    category: 'WORSHIP NIGHT',
    title: 'IGNITE',
    description: 'A night to encounter God and be empowered to live for Him.',
    image: null,
    ctaLabel: 'LEARN MORE',
  },
];