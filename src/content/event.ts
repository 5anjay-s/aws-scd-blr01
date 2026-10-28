// Approved event information shared by the home, track, agenda and registration pages.
export const event = {
  name: 'AWS Student Community Day Bengaluru 2026',
  date: '5 November 2026',
  startsAt: '2026-11-05T09:00:00+05:30',
  checkIn: '8:00 AM IST',
  programme: '9:00 AM IST',
  venue: 'REVA University, Bengaluru',
  address: 'Rukmini Knowledge Park, Kattigenahalli, Yelahanka, Bengaluru 560064',
  directions: 'https://www.google.com/maps/dir/?api=1&destination=REVA+University%2C+Kattigenahalli%2C+Yelahanka%2C+Bengaluru',
  email: 'connect.aws.sbg.ru@gmail.com',
  calendar: 'https://calendar.google.com/calendar/u/1?cid=ZGYzNGYwMzVjMGMyZDczYWMyMWE3MTExZTU1ZGQ2ZjhlMzVjOWM5N2ViMDk5ZjRjNGRlNzU4MDA1YzM5ODIzMUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t',
  bmtc: 'https://play.google.com/store/apps/details?id=com.bmtc.bmtcavls.two',
};

export const mainDay = {
  about: 'AWS technical sessions, hands-on workshops and non-technical sessions, with time to meet the community.',
  technicalPreview: 'AWS technical sessions and hands-on workshops.',
  nonTechnicalPreview: 'Non-technical sessions on the main day. Details to be announced.',
  technical: 'AWS technical sessions and hands-on workshops, with time to learn from speakers and meet other builders.',
  nonTechnical: 'Non-technical sessions will be part of the main day on 5 November. Topics, speakers and timings will be announced once confirmed.',
  aws: 'Learn about AWS through technical sessions and practical workshops. Topics and session timings will be announced.',
};

export const hackathon = {
  name: 'IMPULSE ’26',
  tagline: 'One Spark. Infinite Impact.',
  type: 'National-Level 24-Hour Hackathon',
  dates: '23–24 October 2026',
  // Archive the event after its final calendar day in Bengaluru; no start hour is implied.
  archiveAt: '2026-10-25T00:00:00+05:30',
  venue: 'Rangasthala, REVA University, Bengaluru',
  url: 'https://luma.com/t67kuo2c',
  winners: [
    { place: 1, label: '1st place', team: 'Cite and Conquer', members: ['Shria George', 'Sudiksha V'] },
    { place: 2, label: '2nd place', team: 'Algoarchitects', members: ['Chinranjeevi G', 'Ganesh T S', 'Kushal'] },
    { place: 3, label: '3rd place', team: 'ALPHA', members: ['Manish Rajak', 'Abhishek Yadav', 'Ravikant Chaurasiya'] },
  ],
  workshop: 'A ChatGPT workshop by OpenAI Student Collective for students attending IMPULSE. One participant per team can attend due to venue capacity and receive a free one-month ChatGPT Plus subscription.',
  access: 'Registrations completed before 21 October 2026, 10:00 AM IST receive Plus access before the hackathon. Registrations completed on or after that cutoff receive access after the hackathon.',
  workshopArchive: 'The ChatGPT workshop by OpenAI Student Collective was reserved for IMPULSE participants, with one participant per team due to venue capacity. Eligible attendees could receive one month of ChatGPT Plus.',
  accessArchive: 'The registration cutoff for Plus access before the hackathon was 21 October 2026, 10:00 AM IST. Later registrations were scheduled to receive access after the hackathon.',
};

export function hasHackathonEnded(now = Date.now()) {
  return now >= Date.parse(hackathon.archiveAt);
}

export const primaryNavigation = [
  ['/#experience', 'About'], ['/tracks', 'Tracks'], ['/agenda', 'Agenda'],
  ['/#speakers', 'Speakers'], ['/organisers', 'Organisers'], ['/partners', 'Partners'], ['/venue', 'Venue'],
] as const;
