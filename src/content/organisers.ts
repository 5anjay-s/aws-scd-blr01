// Counts supplied by the organiser on 27 September 2026 are labelled by type.
// Event registrations can include the same person across multiple events.
export const techWeek = {
  url: "https://bengalurutechweek.com/",
  registrations: 1222,
  events: [
    {
      date: "02",
      dateISO: "2026-09-02",
      category: "CLOUD + AI",
      title: "Building AI Agents",
      subtitle: "with Amazon Bedrock AgentCore",
      url: "https://luma.com/2b53iqoo",
    },
    {
      date: "03",
      dateISO: "2026-09-03",
      category: "AI IDEATHON",
      title: "IdeateBLR ’26",
      subtitle: "Ideas for real-world problems",
      url: "https://luma.com/19zmed5q",
    },
    {
      date: "04",
      dateISO: "2026-09-04",
      category: "WEB3 + BLOCKCHAIN",
      title: "Build on Web3",
      subtitle: "Workshop & Build Challenge",
      url: "https://luma.com/2w5vx6y5",
    },
  ],
};

const meetup = "https://www.meetup.com/aws-sbg-at-reva-university";
const inauguration =
  "https://www.meetup.com/aws-cloud-club-at-reva-university/events/313750547/";

export const communityInitiatives = [
  {
    id: "inauguration",
    tag: "WHERE WE BEGAN",
    date: "13 MAR 2026",
    dateISO: "2026-03-13",
    title: "AWS Cloud Club REVA University - Inauguration & Keynote",
    count: 350,
    suffix: "",
    countLabel: "students at our inauguration",
    description:
      "Introducing our founding team and a shared vision for learning, with a keynote from AWS.",
    badges: ["Community launch", "REVA University"],
    url: inauguration,
  },
  {
    id: "intro",
    tag: "FIRST STEPS",
    date: "28 APR 2026",
    dateISO: "2026-04-28",
    title: "INTRO TO CLOUD & GETTING STARTED WITH AWS",
    count: 90,
    suffix: "+",
    countLabel: "participants",
    description:
      "Helping participants take their first steps in cloud computing through an introductory AWS workshop.",
    badges: ["Introductory workshop", "REVA University"],
    url: `${meetup}/events/314500658/`,
  },
  {
    id: "outreach",
    tag: "BEYOND CAMPUS",
    date: "20 MAY 2026",
    dateISO: "2026-05-20",
    title: "OA1 : INTRO TO CLOUD & GETTING STARTED WITH AWS",
    count: 120,
    suffix: "+",
    countLabel: "participants at HKBK",
    description:
      "Taking the community beyond REVA with cloud fundamentals and hands-on practice with Amazon S3 and EC2 at HKBK.",
    badges: ["Campus outreach", "HKBK"],
    url: `${meetup}/events/314813532/`,
  },
  {
    id: "launchpad",
    tag: "LEARN + GROW",
    date: "JUN – JUL 2026",
    dateISO: "2026-06",
    title: "AWS LaunchPad",
    count: 136,
    suffix: "",
    countLabel: "first-cohort registrations",
    description:
      "Our first cohort, in collaboration with AWS Academy, helped participants build cloud skills. Top participants received AWS goodies.",
    badges: ["AWS Academy collaboration", "First cohort"],
    url: `${meetup}/events/315342529/`,
  },
];

// Public event titles, in chronological order. Tech Week dates follow Luma:
// the IdeateBLR Meetup listing differs from the 3 September Luma programme.
export const pastEvents: {
  date: string;
  dateISO: string;
  title: string;
  url: string;
  linkLabel: string;
  detail?: string;
  metric?: string;
}[] = [
  {
    date: "11 Dec 2025",
    dateISO: "2025-12-11",
    title:
      "CODE to CLOUD: Build & Deploy with AWS - From Idea to Production in 30 minutes",
    url: `${meetup}/events/past/`,
    linkLabel: "Meetup archive",
  },
  {
    date: "13 Mar 2026",
    dateISO: "2026-03-13",
    title: communityInitiatives[0].title,
    metric: "350 students",
    detail: communityInitiatives[0].description,
    url: inauguration,
    linkLabel: "Meetup",
  },
  {
    date: "28 Apr 2026",
    dateISO: "2026-04-28",
    title: communityInitiatives[1].title,
    metric: "90+ participants",
    detail: communityInitiatives[1].description,
    url: communityInitiatives[1].url,
    linkLabel: "Meetup",
  },
  {
    date: "20 May 2026",
    dateISO: "2026-05-20",
    title: communityInitiatives[2].title,
    metric: "120+ participants · HKBK",
    detail: communityInitiatives[2].description,
    url: communityInitiatives[2].url,
    linkLabel: "Meetup",
  },
  {
    date: "20 Jun 2026",
    dateISO: "2026-06-20",
    title: "AWS Launchpad : Info session",
    metric: "136 first-cohort registrations",
    detail: communityInitiatives[3].description,
    url: `${meetup}/events/315342529/`,
    linkLabel: "Meetup",
  },
  {
    date: "24 Jul 2026",
    dateISO: "2026-07-24",
    title: "AWS Launchpad : Goodies Announcement & Doubt(s) clearing session.",
    url: `${meetup}/events/315815706/`,
    linkLabel: "Meetup",
  },
  {
    date: "02 Sep 2026",
    dateISO: "2026-09-02",
    title: "Building AI Agents using Amazon Bedrock AgentCore",
    url: techWeek.events[0].url,
    linkLabel: "Luma",
  },
  {
    date: "03 Sep 2026",
    dateISO: "2026-09-03",
    title: "IdeateBLR ’26 - An AI Ideathon",
    url: techWeek.events[1].url,
    linkLabel: "Luma",
  },
  {
    date: "04 Sep 2026",
    dateISO: "2026-09-04",
    title: "Build on Web3: Workshop & Build Challenge",
    url: techWeek.events[2].url,
    linkLabel: "Luma",
  },
];

// Channel figures updated by the organiser on 1 October 2026.
// WhatsApp remains approximate. These are memberships/follows, not unique people.
export const communityChannels = [
  {
    name: "Meetup",
    count: 1107,
    approximate: false,
    suffix: "+",
    label: "members",
  },
  {
    name: "Luma",
    count: 1035,
    approximate: false,
    suffix: "+",
    label: "members",
  },
  {
    name: "WhatsApp",
    count: 900,
    approximate: true,
    suffix: "",
    label: "members",
  },
  {
    name: "LinkedIn",
    count: 250,
    approximate: false,
    suffix: "+",
    label: "followers",
  },
];
export const communityTotal = communityChannels.reduce(
  (sum, channel) => sum + channel.count,
  0,
);

export type PreviousSpeaker = {
  id: string;
  name: string;
  role: string;
  company: string;
  companyLogo: string;
  photo: string;
  photoPosition?: string;
  photoScale?: number;
  background?: string;
  linkedin: string;
  event?: string;
};

// These profiles belong to past community events, not the 2026 SCD lineup.
// Names, affiliations and portraits supplied by the organiser, 2 October 2026.
export const previousSpeakers: PreviousSpeaker[] = [
  {
    id: "ashita-prasad",
    name: "Ashita Prasad",
    role: "SDE / Developer Relations",
    company: "AWS",
    companyLogo: "/brands/aws-white.svg",
    photo: "/media/previous-speakers/ashita-prasad.jpeg",
    photoPosition: "50% 42%",
    background: "IIT Kanpur · IIM Ahmedabad",
    linkedin: "https://www.linkedin.com/in/ashitaprasad/",
  },
  {
    id: "smiti-guru",
    name: "Smiti Guru",
    role: "Senior Solutions Architect",
    company: "AWS",
    companyLogo: "/brands/aws-white.svg",
    photo: "/media/previous-speakers/smiti-guru.jpeg",
    photoPosition: "50% 30%",
    photoScale: 1.5,
    background: "Ex-Capgemini · IIM Calcutta · ISB",
    linkedin: "https://www.linkedin.com/in/smitirashmiguru/",
  },
  {
    id: "arun-kumar",
    name: "Arun Kumar",
    role: "Technical Account Manager",
    company: "AWS",
    companyLogo: "/brands/aws-white.svg",
    photo: "/media/previous-speakers/arun-kumar.png",
    photoPosition: "50% 40%",
    linkedin: "https://www.linkedin.com/in/arun-kumar-402674120/",
  },
  {
    id: "deepak-n",
    name: "Deepak N",
    role: "Site Reliability Engineer",
    company: "JLL",
    companyLogo: "/brands/jll.svg",
    photo: "/media/previous-speakers/deepak-n.png",
    photoPosition: "50% 40%",
    linkedin: "https://www.linkedin.com/in/deepak--n/",
  },
];
