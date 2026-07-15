// Set `image` to an imported photo once you have real event pictures, e.g.:
//   import elevateNight from './assets/events/elevate-night.jpg';
// Leave it as `null` and EventCard will render a placeholder instead.
import annivThumbnail from './assets/annivthumbnail.jpg';

export const pastEvents = [
  {
    id: 'anniversary-2024',
    month: 'DEC', // Feel free to change this to the actual month!
    day: '15',    // And change the day!
    year: '2024',
    title: 'ANNIVERSARY 2024',
    description: 'Celebrating another amazing year of what God is doing through EmpowerNext.',
    image: annivThumbnail,
    albumUrl: 'https://photos.app.goo.gl/9WrGcGbtBWXZwaGt5',
    ctaLabel: 'VIEW PHOTOS',
  },
  {
    id: 'elevate-night',
    month: 'APR',
    day: '13',
    year: '2024',
    title: 'ELEVATE NIGHT',
    description: 'A night of worship, word, and encounter. We lifted high the name of Jesus!',
    image: null,
    ctaLabel: 'VIEW PHOTOS',
  },
  {
    id: 'youth-outreach',
    month: 'JUN',
    day: '22',
    year: '2024',
    title: 'YOUTH OUTREACH',
    description: 'We brought hope and love to our community through acts of service.',
    image: null,
    ctaLabel: 'VIEW PHOTOS',
  },
  {
    id: 'next-gen-talk',
    month: 'AUG',
    day: '10',
    year: '2024',
    title: 'NEXT GEN TALK',
    description: 'Real conversations about faith, identity, and the future.',
    image: null,
    ctaLabel: 'VIEW PHOTOS',
  },
  {
    id: 'unity-night',
    month: 'OCT',
    day: '26',
    year: '2024',
    title: 'UNITY NIGHT',
    description: 'One church. One youth. One purpose.',
    image: null,
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
  {
    id: 'be-the-light',
    month: 'JUN',
    day: '07',
    year: '2025',
    category: 'MISSION DAY',
    title: 'BE THE LIGHT',
    description: 'One day. One mission. Many lives changed.',
    image: null,
    ctaLabel: 'LEARN MORE',
  },
  {
    id: 'next-level',
    month: 'JUL',
    day: '19',
    year: '2025',
    category: 'YOUTH CAMP',
    title: 'NEXT LEVEL',
    description: 'A weekend to grow deeper, stronger, and bolder in faith.',
    image: null,
    ctaLabel: 'LEARN MORE',
  },
];