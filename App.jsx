import { useState, useEffect, useCallback } from "react";

const SECTIONS = ["home", "about", "work", "case-studies", "testimonials", "skills", "contact"];

const NAV_LABELS = {
  home: "Home",
  about: "About",
  work: "Work",
  "case-studies": "Case Studies",
  testimonials: "Testimonials",
  skills: "Skills",
  contact: "Contact",
};

const darkPalette = {
  bg: "#0E0F11",
  surface: "#16171B",
  surfaceAlt: "#1C1D22",
  border: "#2A2B31",
  text: "#E8E6E1",
  textMuted: "#9B9A97",
  accent: "#C4956A",
  accentLight: "#D4AA82",
  accentBg: "rgba(196,149,106,0.09)",
  accentBorder: "rgba(196,149,106,0.19)",
  heroGradient: "linear-gradient(160deg, #0E0F11 0%, #1A1510 50%, #0E0F11 100%)",
  heroGlow: "radial-gradient(ellipse at 30% 40%, rgba(196,149,106,0.07) 0%, transparent 60%)",
  navBg: "rgba(14,15,17,0.93)",
};

const lightPalette = {
  bg: "#F6F4F0",
  surface: "#FFFFFF",
  surfaceAlt: "#EDE9E3",
  border: "#D6D1CA",
  text: "#1A1A1A",
  textMuted: "#5C5A56",
  accent: "#9A6D3E",
  accentLight: "#B5874F",
  accentBg: "rgba(154,109,62,0.08)",
  accentBorder: "rgba(154,109,62,0.18)",
  heroGradient: "linear-gradient(160deg, #F6F4F0 0%, #EDE5D8 50%, #F6F4F0 100%)",
  heroGlow: "radial-gradient(ellipse at 30% 40%, rgba(154,109,62,0.08) 0%, transparent 60%)",
  navBg: "rgba(246,244,240,0.93)",
};

const font = {
  display: "'Playfair Display', 'Georgia', serif",
  body: "'Source Sans 3', 'Helvetica Neue', sans-serif",
  mono: "'IBM Plex Mono', monospace",
};

const testimonials = [
  {
    name: "Ije Nwokorie",
    title: "Chief Executive Officer, Dr. Martens (former Senior Director at Apple)",
    company: "",
    date: "October 2025",
    text: "Judy is a fantastic partner to work with. She brings a depth of human experience to her work as a communicator, with a wonderful ability to strip away the corporate noise and objectives, tease out the thing that really matters, and craft the comms that makes it relevant to people. She matches that talent with grit, integrity and a commitment to the cause. We once spent the Thanksgiving weekend dealing with a significant crisis and Judy was calmness personified. Her commitment to the people affected, to making sure they had the information they needed and her empathy in handling that, will stick with me for a long time.",
  },
  {
    name: "Maxwell Krauthamer",
    title: "Business Development at Apple",
    company: "",
    date: "July 2021",
    text: "Judy has qualities that are invaluable to our mission, many of which cannot be taught or faked. Judy's ability to connect with people and build relationships with her customers is an extremely valuable talent in a world where we increasingly rely on technology to drive sales. She is a skilled communicator with excellent attention to detail and maintains a professional demeanor with customers and peers. She's always quick to celebrate success of others and makes sure to provide ample positive and constructive feedback to her peers. Judy is a great asset to any team she works with.",
  },
  {
    name: "Lisa Mullins",
    title: "Anchor",
    company: "WBUR",
    date: "December 2016",
    text: "Judy produced the weekly BBC program I anchored. She's a top notch writer, an exacting editor, a perceptive voice coach, and delightful colleague. When she handed me a script, I knew she'd crafted it with the upmost care. She anticipated any issue I might raise and was ready with an answer or explanation. She also worked way ahead of deadline-- Who does that?! It was a pleasure to work with her.",
  },
  {
    name: "Michelle Pincombe",
    title: "Contracts Administrator",
    company: "Marts & Lundy, Inc.",
    date: "August 2016",
    text: "Judy captured every important element of our project with so few sentences. The care and thought that she put into expressing our goals and ideas were evident, as were her skills as a creative and competent writer.",
  },
  {
    name: "Heather Maclean",
    title: "Former Head of Business Development, North America & Australasia",
    company: "BBC World Service",
    date: "June 2016",
    text: "Judy is a highly talented and creative radio producer who is extremely dedicated to her projects and understands the importance of working to deadlines and to budgets. She worked with me for several years reversioning and producing BBC specials into compelling hour-long documentaries for US public radio stations.",
  },
  {
    name: "Jonathan Dyer",
    title: "Executive Producer, On Point",
    company: "WBUR",
    date: "May 2016",
    text: "Judy is a highly motivated producer with an exemplary work ethic. The attention to detail and passion that Judy brought to The Changing World lifted the program from its roots.",
  },
  {
    name: "Stephen Snyder",
    title: "Senior Producer, The World",
    company: "WGBH",
    date: "May 2016",
    text: "Judy is a dedicated journalist and producer with solid skills and an impressive work ethic. She took over production of the BBC program, The Changing World, and turned it into a very successful vehicle for showcasing the best of BBC documentaries here in the US. She writes very well, has mastery of radio production tools, and I can recommend her highly.",
  },
];

const caseStudies = [
  {
    id: 1,
    title: "Crisis Communications Framework at Apple Retail",
    period: "2022–2026",
    context:
      "Apple has over 150K employees worldwide, including tens of thousands of retail employees who work across Apple Stores, the Apple Store Online, and Retail Contact Centers. When crises hit (natural disasters, public safety threats, geopolitical events), internal and executive communications must be targeted for Retail team members, who have different operational needs and sensitivities than corporate employees.",
    challenge:
      "As the second member hired for the nascent Americas geo when it was carved out as a new team from Apple's worldwide retail communications organization, the lack of a dedicated crisis communications framework was clear. Messaging was reactive and started from scratch with each crisis. The AMR geo needed a tailored rapid-response framework.",
    actions: [
      "Designed and implemented a comprehensive crisis communications framework covering natural disasters, public safety events, civil unrest, and operational disruptions across the Americas.",
      "Drew on years of journalism experience to activate quickly and calmly, and was available 24/7 as a go-to partner for rapid-response messaging and internal information dissemination.",
      "Wrote and regularly updated dozens of templated messages that could be activated within minutes, tailored by crisis type, regional context, and internal platform.",
      "Coordinated with executives and cross-functional stakeholders to align messaging and tone.",
    ],
    results: [
      "Customizable templated messaging and leader scripts decreased turnaround time of nuanced brand-aligned messaging during critical moments.",
      "Framework introduced consistency on which platforms to activate in diverse scenarios, reassuring stakeholders and providing quick support to field leaders.",
      "Established as a primary strategic partner for Apple Global Security for crisis communications, crisis response, and crisis planning across the Americas.",
    ],
  },
  {
    id: 2,
    title: "Tripling Nationwide Carriage Through Brand Transformation: BBC World Service at GBH",
    period: "2004–2011",
    context:
      "The Changing World was a BBC World Service/Public Radio International program produced at GBH that repackaged select BBC documentaries for U.S. public radio listeners.",
    challenge:
      "The program had limited reach, lacked a cohesive brand identity, and had no online or social media presence.",
    actions: [
      "Architected a comprehensive editorial strategy and led a full brand transformation, including a new visual identity, modern website, and logo.",
      "Served as the sole project manager and primary global liaison, synchronizing communications and workflow between international executives, reporters, and production teams.",
      "Built an online and social media presence from the ground up to drive audience engagement.",
      "Authored all broadcast and online copy while editing and producing final audio assets.",
    ],
    results: [
      "Tripled nationwide carriage for the program.",
      "Built an editorial strategy that made long-form BBC documentaries culturally relevant to U.S. listeners.",
      "Developed an editorial calendar that strategically aligned international topics with domestic milestones.",
      "Delivered a cohesive brand across broadcast, digital, and social channels.",
    ],
  },
  {
    id: 3,
    title: "High-Profile New Store and Country Openings at Apple",
    period: "2022–2026",
    context:
      "Apple's new store and new country openings are significant events that require coordinated communications across multiple platforms and teams. Every opening carries brand, operational, and employee engagement implications.",
    challenge:
      "Internal communications for these launches were an opportunity to foster positive team sentiment and brand pride, while navigating disclosed project details, cross-functional dependencies, and executive visibility.",
    actions: [
      "Developed and orchestrated end-to-end internal communications plans for multiple high-profile store and country openings.",
      "Partnered with cross-functional stakeholders to craft messaging that aligned with external marketing.",
      "Drove communications across multiple internal platforms and touchpoints, ensuring consistency in tone and timing.",
      "Identified and proact
