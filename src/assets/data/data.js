import { v4 as uuidv4 } from 'uuid';
import { BiCodeAlt } from 'react-icons/bi';
import { BsStars, BsBuilding } from 'react-icons/bs';
import { MdOutlineVerifiedUser } from 'react-icons/md';
import css from '../images/css.png';
import javascript from '../images/js.png';
import tailwind from '../images/tailwind-css.png';
import ror from '../images/rubyonrails.png';
import react from '../images/react.png';
import redux from '../images/redux.png';

export const projects = [
  {
    id: uuidv4(),
    title: "MediBook",
    description: "A web app that allows users to book and track appointments with doctors.",
    image: "https://user-images.githubusercontent.com/55185309/188284939-b3f53fae-93bd-426a-a3e7-2d12eb84b923.png",
    url: "https://medibook-ui.vercel.app/",
    technologies: [
      {
        name: "Ruby on Rails",
        image: ror
      },
      {
        name: "React",
        image: react
      },
      {
        name: "Redux",
        image: redux
      },
      {
        name: "Tailwind CSS",
        image: tailwind
      }
    ]
  },
  {
    id: uuidv4(),
    title: "CC-global-summit",
    description: "A Fashion Summit website that provides information about the event and speakers.",
    image: "https://user-images.githubusercontent.com/55185309/181367968-0a773a01-357f-4949-9c94-281b67481f3b.png",
    url: "https://deyemiobaa.github.io/CC-global-summit/",
    technologies: [
      {
        name: "JavaScript",
        image: javascript
      },
      {
        name: "CSS",
        image: css
      }
    ]
  },
  {
    id: uuidv4(),
    title: "Budgit",
    description: "A simple web application for tracking your budget.",
    image: "https://user-images.githubusercontent.com/55185309/184540699-4353c054-c3e5-49e9-9b55-ece9ea3f6721.png",
    url: "https://my-budgit-app.herokuapp.com/",
    technologies: [
      {
        name: "Ruby on Rails",
        image: ror
      },
      {
        name: "Tailwind CSS",
        image: tailwind
      }
    ]
  }
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
    skill: 'Ruby on Rails',
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
    skill: 'Jest/RSpec',
  },
  {
    id: uuidv4(),
    skill: 'PostgreSQL',
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
    skill: 'Mobile/Responsive Design',
  }
]