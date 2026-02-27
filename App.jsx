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
      "The Americas had just been carved out from the worldwide team in the Apple organization responsible for all internal retail communications, and no unified crisis communications framework existed for the nascent AMR geo. As the second team member hired, crisis communications became a primary responsibility, where messaging was reactive and started from scratch each time. The AMR geo needed a bespoke framework for rapid-response internal messaging.",
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
      "Identified and proactively mitigated operational risks and complexities.",
    ],
    results: [
      "Exceeded engagement benchmarks for new store and new country opening internal communications.",
      "Maintained consistent brand voice across all internal channels and markets.",
      "Recognized as a trusted partner for high-visibility, high-stakes internal launches.",
    ],
  },
  {
    id: 4,
    title: "Editorial Strategy for Daily Radio News at WBUR and GBH",
    period: "2000–2003",
    context:
      "NPR's Morning Edition (WBUR) and The World (BBC/PRI/GBH) are daily, deadline-driven radio news programs that reach large public radio audiences.",
    challenge:
      "Daily radio news demands rapid editorial judgement calls, consistent brand voice across multiple hosts and correspondents, and accurate and balanced content.",
    actions: [
      "Deftly realigned editorial strategies based on fast-moving news, deploying and directing reporters across New England, around the globe, and in war zones.",
      "Managed the full lifecycle of daily broadcasts, from strategic planning and deployment to final editing and host scripting. Directed recording sessions and worked with cross functional teams to produce final content.",
      "Helped drive consistent editorial strategy and content development across broadcast and digital platforms.",
    ],
    results: [
      "Directed original award-winning reporting under sustained deadline pressure.",
      "Successfully innovated to find compelling narratives, determine the appropriate format, and assign the journalist best suited for each project.",
      "Maintained consistent tone of voice across multiple hosts and formats.",
      "Strengthened editorial standards across both programs.",
    ],
  },
];

const workHistory = [
  {
    org: "Apple",
    role: "Writer/Editor, Retail Engagement & Marketing",
    period: "2022–2026",
    summary:
      "Wrote, developed, and edited internal communications for Apple Retail across the Americas. Crafted and edited executive messaging, launch communications, and cross-functional content for a diverse workforce and helped drive fast-turn crisis communications.",
  },
  {
    org: "Apple",
    role: "SMB Business Expert / Apple Pay Business Development Lead",
    period: "2017–2022",
    summary:
      "Drove business development and team leadership for Apple's SMB and Apple Pay programs. Directed a remote team, exceeded quarterly engagement and sales goals, and managed end-to-end performance cycles.",
  },
  {
    org: "Freelance",
    role: "Writer, Producer & Volunteer",
    period: "2011–2017",
    summary:
      "During an intentional career break, created editorial content for print and digital publications, including copy for a top 100 law firm. Produced and directed audio marketing materials for Houghton Mifflin Harcourt and Da Capo Press, and provided audio production services for BBC World Service.",
  },
  {
    org: "GBH / BBC",
    role: "Supervising Producer, The Changing World",
    period: "2004–2011",
    summary:
      "Tripled nationwide carriage for a BBC World Service/PRI co-production. Managed global stakeholders, authored all broadcast and digital copy, and led a full brand transformation.",
  },
  {
    org: "GBH",
    role: "Editor, The World",
    period: "2003",
    summary:
      "Helped drive editorial strategy for a daily 60-minute radio program (BBC/PRI/GBH). Managed global correspondents and maintained brand voice across breaking news and feature content.",
  },
  {
    org: "WBUR",
    role: "Editor, Morning Edition",
    period: "2000–2003",
    summary:
      "Produced breaking news and features for the local broadcast of NPR's Morning Edition. Drafted anchor scripts and managed full production lifecycle.",
  },
  {
    org: "Early Career",
    role: "Editor, Tech Reporter, Producer, Newscaster",
    period: "",
    summary:
      "Editorial and production roles at The Christian Science Monitor Radio, Here & Now (WBUR), Digital Review, and Natural Health Magazine. Produced audio books for Houghton Mifflin Harcourt.",
  },
];

const skillCategories = [
  {
    label: "Strategic Communication",
    items: [
      "Internal Communications",
      "Crisis Response & Communications",
      "Executive Messaging & Talking Points",
      "Brand Voice & Tone of Voice",
      "Narrative Development",
      "Stakeholder Alignment",
    ],
  },
  {
    label: "Writing & Editorial",
    items: [
      "Copywriting (Event, Campaign, Digital, Broadcast)",
      "Feature & News Writing",
      "Script Writing (Keynote, Broadcast, Audio)",
      "Copy Editing & Proofreading",
      "Long-Form & Short-Form Content",
    ],
  },
  {
    label: "Production & Media",
    items: [
      "Audio Production & Direction",
      "Broadcast News Production",
      "Audio Book Production",
      "Editorial Calendar & Workflow Management",
      "Social Media Strategy",
    ],
  },
  {
    label: "Leadership & Operations",
    items: [
      "Cross-Functional Collaboration",
      "Project Management",
      "Team Leadership & Mentoring",
      "Business Development",
      "CRM & Customer Lifecycle Management",
      "Risk Identification & Mitigation",
    ],
  },
];

function getStyles(p) {
  return {
    nav: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: p.navBg,
      backdropFilter: "blur(14px)",
      WebkitBackdropFilter: "blur(14px)",
      borderBottom: `1px solid ${p.border}`,
      transition: "background 0.4s, border-color 0.4s",
    },
    navInner: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "12px 24px",
      minHeight: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 16,
      flexWrap: "wrap",
    },
    navLogo: {
      fontFamily: font.display,
      fontSize: 22,
      fontWeight: 700,
      color: p.accent,
      letterSpacing: 2,
      cursor: "pointer",
    },
    navRight: {
      display: "flex",
      alignItems: "center",
      gap: 6,
    },
    navLink: {
      background: "none",
      border: "none",
      color: p.textMuted,
      fontFamily: font.body,
      fontSize: 13.5,
      fontWeight: 500,
      padding: "7px 12px",
      cursor: "pointer",
      borderRadius: 6,
      transition: "color 0.2s, background 0.2s",
      letterSpacing: 0.3,
    },
    navLinkActive: {
      color: p.accent,
      background: p.accentBg,
    },
    themeBtn: {
      background: "none",
      border: `1px solid ${p.border}`,
      color: p.textMuted,
      fontSize: 16,
      width: 34,
      height: 34,
      borderRadius: 8,
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "border-color 0.3s, color 0.3s",
    },
    hero: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      background: p.heroGradient,
      overflow: "hidden",
      transition: "background 0.5s",
    },
    heroOverlay: {
      position: "absolute",
      inset: 0,
      background: p.heroGlow,
      pointerEvents: "none",
    },
    heroContent: {
      position: "relative",
      maxWidth: 720,
      padding: "120px 24px 80px",
      textAlign: "center",
    },
    heroEyebrow: {
      fontFamily: font.mono,
      fontSize: 12,
      letterSpacing: 3,
      textTransform: "uppercase",
      color: p.accent,
      marginBottom: 20,
    },
    heroTitle: {
      fontFamily: font.display,
      fontSize: "clamp(36px, 6vw, 64px)",
      fontWeight: 700,
      color: p.text,
      lineHeight: 1.1,
      margin: "0 0 24px",
      letterSpacing: -0.5,
      transition: "color 0.4s",
    },
    heroSub: {
      fontFamily: font.body,
      fontSize: "clamp(16px, 2vw, 19px)",
      color: p.textMuted,
      lineHeight: 1.7,
      margin: "0 auto 40px",
      maxWidth: 600,
      transition: "color 0.4s",
    },
    heroCTAs: {
      display: "flex",
      gap: 16,
      justifyContent: "center",
      flexWrap: "wrap",
    },
    btnPrimary: {
      fontFamily: font.body,
      fontSize: 15,
      fontWeight: 600,
      color: p.bg,
      background: p.accent,
      border: "none",
      padding: "13px 32px",
      borderRadius: 8,
      cursor: "pointer",
      letterSpacing: 0.3,
      transition: "background 0.2s, color 0.2s",
    },
    btnSecondary: {
      fontFamily: font.body,
      fontSize: 15,
      fontWeight: 600,
      color: p.accent,
      background: "transparent",
      border: `1.5px solid ${p.accent}`,
      padding: "13px 32px",
      borderRadius: 8,
      cursor: "pointer",
      letterSpacing: 0.3,
      transition: "background 0.2s, color 0.2s, border-color 0.2s",
    },
    section: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "96px 24px 64px",
    },
    sectionTitle: {
      fontFamily: font.display,
      fontSize: "clamp(28px, 4vw, 40px)",
      fontWeight: 700,
      color: p.text,
      margin: "0 0 12px",
      letterSpacing: -0.3,
      transition: "color 0.4s",
    },
    sectionIntro: {
      fontFamily: font.body,
      fontSize: 17,
      color: p.textMuted,
      lineHeight: 1.75,
      margin: "0 0 8px",
      maxWidth: 720,
      transition: "color 0.4s",
    },
    bodyText: {
      fontFamily: font.body,
      fontSize: 16,
      color: p.textMuted,
      lineHeight: 1.75,
      margin: "0 0 16px",
      maxWidth: 720,
      transition: "color 0.4s",
    },
    aboutGrid: {
      display: "flex",
      gap: 48,
      marginTop: 32,
      flexWrap: "wrap",
    },
    aboutMain: { flex: "1 1 480px", minWidth: 280 },
    aboutSidebar: {
      flex: "0 0 280px",
      display: "flex",
      flexDirection: "column",
      gap: 20,
    },
    aboutCard: {
      background: p.surfaceAlt,
      borderRadius: 10,
      padding: "20px 24px",
      border: `1px solid ${p.border}`,
      transition: "background 0.4s, border-color 0.4s",
    },
    aboutCardTitle: {
      fontFamily: font.mono,
      fontSize: 11,
      letterSpacing: 2,
      textTransform: "uppercase",
      color: p.accent,
      margin: "0 0 8px",
    },
    aboutCardText: {
      fontFamily: font.body,
      fontSize: 14,
      color: p.textMuted,
      lineHeight: 1.6,
      margin: "0 0 6px",
      transition: "color 0.4s",
    },
    workList: {
      marginTop: 32,
      display: "flex",
      flexDirection: "column",
      gap: 0,
    },
    workItem: {
      padding: "28px 0",
      borderBottom: `1px solid ${p.border}`,
      transition: "border-color 0.4s",
    },
    workMeta: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 6,
      flexWrap: "wrap",
      gap: 8,
    },
    workOrg: {
      fontFamily: font.mono,
      fontSize: 12,
      letterSpacing: 1.5,
      textTransform: "uppercase",
      color: p.accent,
    },
    workPeriod: {
      fontFamily: font.mono,
      fontSize: 12,
      color: p.textMuted,
    },
    workRole: {
      fontFamily: font.display,
      fontSize: 20,
      fontWeight: 600,
      color: p.text,
      margin: "0 0 8px",
      transition: "color 0.4s",
    },
    workSummary: {
      fontFamily: font.body,
      fontSize: 15,
      color: p.textMuted,
      lineHeight: 1.7,
      maxWidth: 700,
      margin: 0,
      transition: "color 0.4s",
    },
    caseList: {
      marginTop: 32,
      display: "flex",
      flexDirection: "column",
      gap: 12,
    },
    caseCard: {
      background: p.surfaceAlt,
      borderRadius: 10,
      border: `1px solid ${p.border}`,
      overflow: "hidden",
      transition: "background 0.4s, border-color 0.4s",
    },
    caseHeader: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 24px",
      background: "none",
      border: "none",
      cursor: "pointer",
      textAlign: "left",
    },
    caseTitle: {
      fontFamily: font.display,
      fontSize: 18,
      fontWeight: 600,
      color: p.text,
      margin: 0,
      transition: "color 0.4s",
    },
    casePeriod: {
      fontFamily: font.mono,
      fontSize: 12,
      color: p.textMuted,
      marginTop: 4,
      display: "block",
    },
    caseToggle: {
      fontFamily: font.mono,
      fontSize: 22,
      color: p.accent,
      flexShrink: 0,
      marginLeft: 16,
    },
    caseBody: { padding: "0 24px 24px" },
    caseSection: { marginBottom: 20 },
    caseSectionLabel: {
      fontFamily: font.mono,
      fontSize: 11,
      letterSpacing: 2,
      textTransform: "uppercase",
      color: p.accent,
      margin: "0 0 8px",
    },
    caseActionItem: {
      fontFamily: font.body,
      fontSize: 15,
      color: p.textMuted,
      lineHeight: 1.7,
      margin: "0 0 8px",
      paddingLeft: 20,
      position: "relative",
      transition: "color 0.4s",
      maxWidth: 720,
    },
    caseBullet: {
      position: "absolute",
      left: 0,
      color: p.accent,
    },
    testimonialsList: {
      marginTop: 32,
      display: "flex",
      flexDirection: "column",
      gap: 24,
    },
    testimonialCard: {
      background: p.surfaceAlt,
      borderRadius: 10,
      padding: "28px 32px",
      border: `1px solid ${p.border}`,
      transition: "background 0.4s, border-color 0.4s",
    },
    testimonialHeader: {
      marginBottom: 20,
    },
    testimonialName: {
      fontFamily: font.display,
      fontSize: 18,
      fontWeight: 600,
      color: p.text,
      margin: "0 0 6px",
      transition: "color 0.4s",
    },
    testimonialTitle: {
      fontFamily: font.body,
      fontSize: 15,
      color: p.textMuted,
      margin: "0 0 4px",
      transition: "color 0.4s",
    },
    testimonialDate: {
      fontFamily: font.mono,
      fontSize: 12,
      color: p.accent,
    },
    testimonialText: {
      fontFamily: font.body,
      fontSize: 16,
      color: p.text,
      lineHeight: 1.8,
      margin: 0,
      fontStyle: "italic",
      transition: "color 0.4s",
    },
    testimonialSource: {
      fontFamily: font.mono,
      fontSize: 12,
      color: p.textMuted,
      marginTop: 32,
      paddingTop: 24,
      borderTop: `1px solid ${p.border}`,
      transition: "color 0.4s, border-color 0.4s",
    },
    testimonialSourceLink: {
      color: p.accent,
      textDecoration: "none",
      transition: "color 0.2s",
    },
    skillsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: 20,
      marginTop: 32,
    },
    skillCard: {
      background: p.surfaceAlt,
      borderRadius: 10,
      padding: "24px",
      border: `1px solid ${p.border}`,
      transition: "background 0.4s, border-color 0.4s",
    },
    skillCatLabel: {
      fontFamily: font.mono,
      fontSize: 12,
      letterSpacing: 1.5,
      textTransform: "uppercase",
      color: p.accent,
      margin: "0 0 16px",
    },
    skillItems: { display: "flex", flexWrap: "wrap", gap: 8 },
    skillTag: {
      fontFamily: font.body,
      fontSize: 13,
      color: p.textMuted,
      background: p.accentBg,
      border: `1px solid ${p.accentBorder}`,
      borderRadius: 6,
      padding: "5px 12px",
      lineHeight: 1.4,
      transition: "background 0.4s, border-color 0.4s, color 0.4s",
    },
    contactGrid: { marginTop: 32 },
    contactMain: { maxWidth: 600 },
    contactDetails: {
      marginTop: 24,
      display: "flex",
      flexDirection: "column",
      gap: 16,
    },
    contactItem: { display: "flex", gap: 16, alignItems: "baseline" },
    contactLabel: {
      fontFamily: font.mono,
      fontSize: 11,
      letterSpacing: 2,
      textTransform: "uppercase",
      color: p.accent,
      minWidth: 80,
    },
    contactValue: {
      fontFamily: font.body,
      fontSize: 16,
      color: p.text,
      transition: "color 0.4s",
    },
    footer: {
      borderTop: `1px solid ${p.border}`,
      padding: "32px 24px",
      textAlign: "center",
      transition: "border-color 0.4s",
    },
    footerText: {
      fontFamily: font.mono,
      fontSize: 12,
      color: p.textMuted,
      letterSpacing: 1,
      margin: 0,
    },
  };
}

function Nav({ active, onNav, dark, onToggleTheme, s }) {
  return (
    <nav style={s.nav}>
      <div style={s.navInner}>
        <span style={s.navLogo} onClick={() => onNav("home")}>JFH</span>
        <div style={s.navRight}>
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap", alignItems: "center" }}>
            {SECTIONS.map((sec) => (
              <button
                key={sec}
                onClick={() => onNav(sec)}
                style={{
                  ...s.navLink,
                  ...(active === sec ? s.navLinkActive : {}),
                }}
              >
                {NAV_LABELS[sec]}
              </button>
            ))}
            <button
              style={s.themeBtn}
              onClick={onToggleTheme}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              title={dark ? "Light mode" : "Dark mode"}
            >
              {dark ? "\u2600" : "\u263E"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Home({ onNav, s }) {
  return (
    <section style={s.hero}>
      <div style={s.heroOverlay} />
      <div style={s.heroContent}>
        <p style={s.heroEyebrow}>Strategic Communicator · Writer/Editor · Journalist</p>
        <h1 style={s.heroTitle}>Judy Finn Harris</h1>
        <p style={s.heroSub}>
          Translating complex strategies into clear, compelling narratives that move organizations forward. From Apple's crisis response to the BBC World Service, I bring journalistic rigor and editorial precision to high-stakes communications.
        </p>
        <div style={s.heroCTAs}>
          <button style={s.btnPrimary} onClick={() => onNav("about")}>
            About
          </button>
          <button style={s.btnSecondary} onClick={() => onNav("testimonials")}>
            Testimonials
          </button>
        </div>
      </div>
    </section>
  );
}

function About({ s }) {
  return (
    <section style={s.section}>
      <h2 style={s.sectionTitle}>About</h2>
      <div style={s.aboutGrid}>
        <div style={s.aboutMain}>
          <p style={s.bodyText}>
            I am a strategic communications professional with over 15 years of experience across internal communications, crisis response, editorial leadership, print and broadcast journalism, and business development. My career spans Apple, the BBC World Service, GBH, WBUR, and The Christian Science Monitor, among other media outlets.
          </p>
          <p style={s.bodyText}>
            At Apple, I helped steer internal communications for Retail across the Americas, writing and editing targeted content, executive voice, and crisis response messaging in partnership with teams across Apple, and driving communications for high-profile launches such as new store and new country openings. Content I wrote and strategized exceeded engagement benchmarks, and I became a trusted partner for sensitive, cross-functional initiatives.
          </p>
          <p style={s.bodyText}>
            Before Apple, I was immersed in journalism. At GBH, I tripled nationwide carriage for a BBC World Service co-production by overhauling editorial strategy, managing global stakeholders, crafting all broadcast and digital copy, and building a digital presence from scratch. At WBUR and The Christian Science Monitor Radio, I wrote, edited, and produced daily breaking news and feature content under sustained deadline pressure – and deployed correspondents to war zones.
          </p>
          <p style={s.bodyText}>
            I hold a BA in Politics from Oberlin College, a Graduate Certificate in Global Marketing Management from Boston University, and am currently working towards an MS in Project Management at Boston University. I also completed a semester-long speechwriting workshop at the Harvard Kennedy School of Government with the Head Speechwriter for Michelle Obama and Senior Speechwriter for President Obama.
          </p>
          <p style={s.bodyText}>
            Writing has always been integral to my life, and my published bylines date to my mid-teens, when I wrote news and feature articles as an intern reporter for a New York City weekly newspaper.
          </p>
        </div>
        <div style={s.aboutSidebar}>
          <div style={s.aboutCard}>
            <h3 style={s.aboutCardTitle}>Location</h3>
            <p style={s.aboutCardText}>San Francisco Bay Area</p>
          </div>
          <div style={s.aboutCard}>
            <h3 style={s.aboutCardTitle}>Education</h3>
            <p style={s.aboutCardText}>MS Project Management, Boston University (in progress)</p>
            <p style={s.aboutCardText}>Graduate Certificate, Global Marketing Management, Boston University</p>
            <p style={s.aboutCardText}>BA Politics, Oberlin College</p>
          </div>
          <div style={s.aboutCard}>
            <h3 style={s.aboutCardTitle}>Notable Affiliations</h3>
            <p style={s.aboutCardText}>Apple · BBC World Service · GBH · WBUR · The Christian Science Monitor</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work({ onNav, s }) {
  return (
    <section style={s.section}>
      <h2 style={s.sectionTitle}>Work</h2>
      <p style={s.bodyText}>
        A chronological overview of roles spanning communications, editorial leadership, copywriting and editing, and business development.
      </p>
      <div style={s.workList}>
        {workHistory.map((w, i) => (
          <div key={i} style={s.workItem}>
            <div style={s.workMeta}>
              <span style={s.workOrg}>{w.org}</span>
              {w.period && <span style={s.workPeriod}>{w.period}</span>}
            </div>
            <h3 style={s.workRole}>{w.role}</h3>
            <p style={s.workSummary}>{w.summary}</p>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 32 }}>
        <button style={s.btnPrimary} onClick={() => onNav("case-studies")}>
          View Case Studies
        </button>
      </div>
    </section>
  );
}

function CaseStudiesSection({ s }) {
  const [open, setOpen] = useState(null);
  return (
    <section style={s.section}>
      <h2 style={s.sectionTitle}>Case Studies</h2>
      <p style={s.bodyText}>
        Due to the confidential nature of my work, writing and editing samples are not available. These case studies illustrate how I approach complex communications challenges from strategy through execution.
      </p>
      <div style={s.caseList}>
        {caseStudies.map((cs) => (
          <div key={cs.id} style={s.caseCard}>
            <button
              style={s.caseHeader}
              onClick={() => setOpen(open === cs.id ? null : cs.id)}
              aria-expanded={open === cs.id}
            >
              <div>
                <h3 style={s.caseTitle}>{cs.title}</h3>
                <span style={s.casePeriod}>{cs.period}</span>
              </div>
              <span style={s.caseToggle}>{open === cs.id ? "\u2212" : "+"}</span>
            </button>
            {open === cs.id && (
              <div style={s.caseBody}>
                <div style={s.caseSection}>
                  <h4 style={s.caseSectionLabel}>Context</h4>
                  <p style={s.bodyText}>{cs.context}</p>
                </div>
                <div style={s.caseSection}>
                  <h4 style={s.caseSectionLabel}>Challenge</h4>
                  <p style={s.bodyText}>{cs.challenge}</p>
                </div>
                <div style={s.caseSection}>
                  <h4 style={s.caseSectionLabel}>Actions</h4>
                  {cs.actions.map((a, i) => (
                    <p key={i} style={s.caseActionItem}>
                      <span style={s.caseBullet}>&mdash;</span> {a}
                    </p>
                  ))}
                </div>
                <div style={s.caseSection}>
                  <h4 style={s.caseSectionLabel}>Results</h4>
                  {cs.results.map((r, i) => (
                    <p key={i} style={s.caseActionItem}>
                      <span style={s.caseBullet}>&mdash;</span> {r}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials({ s }) {
  return (
    <section style={s.section}>
      <h2 style={s.sectionTitle}>Testimonials</h2>
      <p style={s.bodyText}>
        Recommendations from senior executives, managers, colleagues, and clients across Apple, BBC World Service, GBH, WBUR, and beyond.
      </p>

      <div style={s.testimonialsList}>
        {testimonials.map((t, i) => (
          <div key={i} style={s.testimonialCard}>
            <div style={s.testimonialHeader}>
              <h3 style={s.testimonialName}>{t.name}</h3>
              <p style={s.testimonialTitle}>
                {t.title}{t.company && ` at ${t.company}`}
              </p>
              <p style={s.testimonialDate}>{t.date}</p>
            </div>
            <p style={s.testimonialText}>"{t.text}"</p>
          </div>
        ))}
      </div>

      <p style={s.testimonialSource}>
        Source: <a href="https://linkedin.com/in/judyfinnharris" target="_blank" rel="noopener noreferrer" style={s.testimonialSourceLink}>LinkedIn</a>
      </p>
    </section>
  );
}

function Skills({ s }) {
  return (
    <section style={s.section}>
      <h2 style={s.sectionTitle}>Skills</h2>
      <div style={s.skillsGrid}>
        {skillCategories.map((cat, i) => (
          <div key={i} style={s.skillCard}>
            <h3 style={s.skillCatLabel}>{cat.label}</h3>
            <div style={s.skillItems}>
              {cat.items.map((item, j) => (
                <span key={j} style={s.skillTag}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact({ s }) {
  return (
    <section style={s.section}>
      <h2 style={s.sectionTitle}>Contact</h2>
      <div style={s.contactGrid}>
        <div style={s.contactMain}>
          <p style={s.bodyText}>
            I am open to conversations about strategic communications, editorial leadership, campaign and event copywriting, and content strategy roles. Based in the San Francisco Bay Area.
          </p>
          <div style={s.contactDetails}>
            <div style={s.contactItem}>
              <span style={s.contactLabel}>Email</span>
              <span style={s.contactValue}>judy@judyfinnharris.com</span>
            </div>
            <div style={s.contactItem}>
              <span style={s.contactLabel}>LinkedIn</span>
              <span style={s.contactValue}>linkedin.com/in/judyfinnharris</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ s }) {
  return (
    <footer style={s.footer}>
      <p style={s.footerText}>Judy Finn Harris · Strategic Communicator · Writer/Editor · Journalist</p>
    </footer>
  );
}

export default function Portfolio() {
  const [section, setSection] = useState("home");
  const [dark, setDark] = useState(true);

  const palette = dark ? darkPalette : lightPalette;
  const s = getStyles(palette);

  const handleNav = useCallback((sec) => {
    setSection(sec);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleTheme = useCallback(() => setDark((d) => !d), []);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Source+Sans+3:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  useEffect(() => {
    document.body.style.margin = "0";
    document.body.style.padding = "0";
    document.body.style.background = palette.bg;
    document.body.style.transition = "background 0.4s";
  }, [palette.bg]);

  return (
    <div style={{ background: palette.bg, minHeight: "100vh", color: palette.text, transition: "background 0.4s, color 0.4s" }}>
      <Nav active={section} onNav={handleNav} dark={dark} onToggleTheme={toggleTheme} s={s} />
      {section === "home" && <Home onNav={handleNav} s={s} />}
      {section === "about" && <About s={s} />}
      {section === "work" && <Work onNav={handleNav} s={s} />}
      {section === "case-studies" && <CaseStudiesSection s={s} />}
      {section === "testimonials" && <Testimonials s={s} />}
      {section === "skills" && <Skills s={s} />}
      {section === "contact" && <Contact s={s} />}
      <Footer s={s} />
    </div>
  );
}
