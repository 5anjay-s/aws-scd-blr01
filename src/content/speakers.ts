// Confirmed main-day profiles shared by both responsive compositions.
// The final lineup runs 01–03: Shreyans, Vraj and Mitul.
export const speakers = {
  // Shreyans leads the directory in slot 01.
  shreyans: {
    name: 'Shreyans Dhankhar',
    role: 'Senior AI Specialist Solutions Architect',
    background: 'ex-NVIDIA',
    company: 'AWS',
    photo: '/media/speakers/shreyans-dhankhar.png',
  },
  // Vraj takes the featured slot 02.
  vraj: {
    name: 'Vraj Chaubal',
    role: 'GTM',
    background: 'Sarvaswa AI',
    photo: '/media/speakers/vraj-chaubal.png',
  },
  // Mitul closes the directory in slot 03.
  mitul: {
    name: 'Mitul Sarvaiya',
    role: 'Principal Architect',
    company: 'Sarvaswa AI',
    photo: '/media/speakers/mitul-sarvaiya.png',
  },
} as const;
