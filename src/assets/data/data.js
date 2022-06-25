import { v4 as uuidv4 } from 'uuid';
import { BiCodeAlt } from 'react-icons/bi';
import { BsStars, BsBuilding } from 'react-icons/bs';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import css from '../images/css.png';
import javascript from '../images/js.png';
import react from '../images/react.png';
import tailwind from '../images/tailwind-css.png';
import redux from '../images/redux.png';

export const projects = [
  {
    id: uuidv4(),
    title: "Top Stocks App",
    description: "A web application that provides you with the data about the most active trading stocks for the day.",
    image: "https://user-images.githubusercontent.com/55185309/169798193-a19f93bf-b494-4125-a7eb-0e3ad7836491.png",
    url: "https://top-stocks.vercel.app/",
    technologies: [
      {
        name: "React",
        image: react
      },
      {
        name: "Redux",
        image: redux
      },
      {
        name: "TailwindCSS",
        image: tailwind
      }
    ]
  },
  {
    id: uuidv4(),
    title: "Bookstore CMS",
    description: "A content management system for storing books. Books are managed by an external REST API.",
    image: "https://user-images.githubusercontent.com/55185309/171854400-26e3a455-c961-434d-b921-e7036c489b39.png",
    url: "https://jovial-bonbon-ff2eb8.netlify.app/",
    technologies: [
      {
        name: "React",
        image: react
      },
      {
        name: "Redux",
        image: redux
      },
      {
        name: "CSS",
        image: css
      }
    ]
  },
  {
    id: uuidv4(),
    title: "ShowBox Movies",
    description: "A movies recommendation app. Discover new movies to watch on ShowBox Movies app.",
    image: "https://raw.githubusercontent.com/deyemiobaa/Movie-Database/dev/src/app-sc.png",
    url: "https://deyemiobaa.github.io/Movie-Database/",
    technologies: [
      {
        name: "JavaScript",
        image: javascript
      },
      {
        name: "CSS",
        image: css
      },
    ]
  },
]

export const skills = [
  {
    id: uuidv4(),
    icon: <BiCodeAlt />,
    text: "Building accessible and performant apps.",
  },
  {
    id: uuidv4(),
    icon: <BsBuilding />,
    text: "Learning fast, building things that solve problems.",
  },
  {
    id: uuidv4(),
    icon: <BsStars />,
    text: "Detailed designs and polish websites.",
  },
  {
    id: uuidv4(),
    icon: <MdOutlineVerifiedUser />,
    text: "Responsibility and accountability.",
  }
]

export const techSkills = [
  {
    id: uuidv4(),
    skill: 'JavaScript (ES6)',
  },
  {
    id: uuidv4(),
    skill: 'React.js/Next.js',
  },
  {
    id: uuidv4(),
    skill: 'Redux',
  },
  {
    id: uuidv4(),
    skill: 'Tailwind CSS',
  },
  {
    id: uuidv4(),
    skill: 'Jest/Mocha',
  },
  {
    id: uuidv4(),
    skill: 'MySQL/PostgreSQL',
  },
  {
    id: uuidv4(),
    skill: 'TDD',
  },
  {
    id: uuidv4(),
    skill: 'Agile Methodologies',
  },
  {
    id: uuidv4(),
    skill: 'Git/GitHub',
  },
  {
    id: uuidv4(),
    skill: 'Netlify/Heroku/Vercel',
  },
  {
    id: uuidv4(),
    skill: 'Dev Tools',
  },
  {
    id: uuidv4(),
    skill: 'Mobile/Responsive Design',
  }
]