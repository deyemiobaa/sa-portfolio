import css from '../images/css.png';
import javascript from '../images/js.png';
import react from '../images/react.png';
import tailwind from '../images/tailwind-css.png';
import redux from '../images/redux.png';

const projects = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    title: "ShowBox Movies",
    description: "A movies recommendation app. Discover new movies to watch on ShowBox Movies app",
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

export default projects