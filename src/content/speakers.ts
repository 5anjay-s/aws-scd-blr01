// Confirmed main-day profiles shared by both responsive compositions.
export const speakers = {
  ayush: {
    name: 'Ayush Hooda',
    role: 'Senior System Software Engineer',
    background: 'IIT P · ex-Walmart',
    company: 'NVIDIA',
    photo: '/media/previous-speakers/ayush-hooda.png',
  },
  devansh: {
    name: 'Devansh Agrawal',
    role: 'Senior Solutions Architect – Security',
    background: 'ex-IBM · ex-Microsoft',
    company: 'AWS',
    credential: 'AWS re:Invent speaker',
    photo: '/media/speakers/devansh-agrawal-cutout.webp',
    linkedin: 'https://www.linkedin.com/in/devansh03/',
  },
  // Shreyans continues the main directory as slot 03; Vraj and Mitul take
  // slots 04–05 (reflected lineup on desktop, and the same continuous
  // directory on mobile). Slot 06 stays reserved for a future announcement.
  shreyans: {
    name: 'Shreyans Dhankhar',
    role: 'Senior AI Specialist Solutions Architect',
    background: 'ex-NVIDIA',
    company: 'AWS',
    photo: '/media/speakers/shreyans-dhankhar.png',
  },
  vraj: {
    name: 'Vraj Chaubal',
    role: 'GTM',
    background: 'Sarvaswa AI',
    photo: '/media/speakers/vraj-chaubal.png',
  },
  mitul: {
    name: 'Mitul Sarvaiya',
    role: 'Principal Architect',
    company: 'Sarvaswa AI',
    photo: '/media/speakers/mitul-sarvaiya.png',
  },
} as const;
