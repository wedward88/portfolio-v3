// projectsData.ts
export type ProjectType = {
  name: string;
  date: string;
  url: string;
  title: string;
  desc: string;
  badges: string[];
  github: string;
  link: string;
};

export const projects = [
  {
    name: 'servicecycle',
    date: 'January 2025',
    url: '/images/servicecycle.png',
    title: 'ServiceCycle',
    desc: 'A full stack application for tracking subscription services, and searching for TV shows and movies. Deployed on a dedicated server running Apache2.',
    badges: [
      'NextJS',
      'TypeScript',
      'React',
      'Motion',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
      'OAuth 2.0',
      'Apache2',
    ],
    github: 'https://github.com/wedward88/servicecycle',
    link: 'https://servicecycle.wedward.com',
  },
  {
    name: 'portfolio',
    date: 'November 2024',
    url: '/images/portfolio.jpg',
    title: 'Portfolio',
    desc: "I was once told that a software engineer isn't a designer. While I agree, I didn't want to settle for a cookie cutter portfolio. I wanted to create something unique, and personalized. This page is the result, deployed using Github Pages.",
    badges: [
      'NextJS',
      'TypeScript',
      'React',
      'Motion',
      'Tailwind CSS',
      'Github Pages',
    ],
    github: 'https://github.com/wedward88/portfolio-v3',
    link: 'https://wedward.com',
  },
  {
    name: 'nyt-headliner',
    date: 'November 2024',
    url: '/images/nyt-headliner.png',
    title: 'NYT Headliner',
    desc: 'Inspired by the New York Times Birthday Collection, this small app can be used to browse New York Times articles from a specified date. Deployed on a dedicated server running Apache2.',
    badges: ['NextJS', 'TypeScript', 'React', 'Tailwind CSS', 'Apache2'],
    github: 'https://github.com/wedward88/nyt-headliner',
    link: 'https://nyt-headliner.wedward.com/',
  },
  {
    name: 'twodeeskate',
    date: 'June 2019',
    url: '/images/twodeeskate.png',
    title: 'Two Dee Skate',
    desc: 'As an avid skateboarder, I had a blast creating this 2D side-scroller. Enjoy kickflipping over randomly generated obstacles, but avoid those gaps, and see how long you can survive!',
    badges: [
      'JavaScript',
      'HTML5',
      'Canvas',
      'CSS3',
      'Webpack',
      'Github Pages',
    ],
    github: 'https://github.com/wedward88/TwoDeeSkate',
    link: 'https://wedward88.github.io/TwoDeeSkate/',
  },
  {
    name: 'endeavornote',
    date: 'May 2019',
    url: '/images/endeavornote.png',
    title: 'Endeavornote',
    desc: 'A single page clone of Evernote with custom authentication. This was my very first full stack project back in 2019. Deployed on a dedicated server running Apache2.',
    badges: [
      'Ruby',
      'JavaScript',
      'Rails',
      'React',
      'Redux',
      'PostgreSQL',
      'HTML5',
      'CSS3',
      'Apache2',
    ],
    github: 'https://github.com/wedward88/Endeavornote',
    link: 'https://endeavornote.wedward.com/#/',
  },
];
