import anbe from './images/anbeB.jpg';
import sasha from './images/sashaT.jpg';
import happybones from './images/hb.jpg';
import donke from './images/Donke.png';
import devaCurl from './images/devaCurl.png';
import morningside from './images/morningside.png';

export default [
  {
    description: `Anbe Baccam is an emerging photographer. When I was building his website, I really wanted to showcase his work in a simple way. It was important to me, to let the beauty of his work to speak for itself, without too much disruption or noise. This website is the first that I've ever built. It uses HTML and CSS, with some small amount of JavaScript and JQuery. Working on it made me fall in love with programming. It helped me understand how my passion for design and illustration fit together with tech.`,
    image:
    {
      alt: 'anbe portfolio site',
      src: anbe
    },
    links:
    {
      github: 'GitHub',
      ghUrl: 'https://github.com/Mightynumnums/anbe2',
      website: 'Website',
      webUrl: 'https://anbebaccamportfolio.herokuapp.com/'
    }
  },
  {
    description: `Sasha Turrentine is a New York based photographer and writer, originally hauling from California. Sasha uses her lens and her writing to create hauntingly beautiful narratives that transport any observer to a place where we can be 'present' to observe in stillness. This website is built using HTML5, CSS3 and JQuery.`,
    image:
    {
      alt: 'sasha turrentine portfolio',
      src: sasha
    },
    links:
    {
      github: 'GitHub',
      ghUrl: 'https://github.com/Mightynumnums/SashaTurrentine',
      website: 'Website',
      webUrl: 'https://mightynumnums.github.io/SashaTurrentine/'
    }
  },
  {
    description: `Happy Bones is a small coffee shop that is located smack in the middle of SOHO, Little Italy and China Town. I used to work at Happy Bones as a manager and a barista for 3 years. There was a period of time, when HB was growing rapidly, but for some reason was missing a website. I volunteered to build a prototype, because I loved the shop and I also recently fell in love with web development.`,
    image:
    {
      alt: 'happy bones sample site',
      src: happybones
    },
    links:
    {
      github: 'GitHub',
      ghUrl: 'https://github.com/Mightynumnums/HB',
      website: 'Website',
      webUrl: 'https//mightynumnums.github.io/HB/'
    }
  },
  {
    description: ` Donké is a native application created using Electron platform. It is built with React.js for the front end, Redux for state management, Green Sock Library for animations, and FireStore for data management and real-time updates.
    Donke encourages users to take care of their wellbeing by taking consistent breaks during their workday.
    My team and I have incorporated a playpen functionality that allows users to interact with other avatars.
    It is a playful application that dreams to help people to be healthier, active and intern more productive, even if they must sit behind the desk all day.`,
    image:
    {
      alt: 'Donke',
      src: donke
    },
    links:
    {
      github: 'GitHub',
      ghUrl: 'https://github.com/teamCrabby/donke',
      website: 'Website',
      webUrl: 'https://buddy-4f263.firebaseapp.com/',
      video: 'https://www.youtube.com/embed/xlSb_pJ16g4'
    }
  },
  {
    description: `DevaCurl was a project built with the team at thelab.
    It is built using Django and Wagtail to allow client the ease of modifying content, Angular, to make use of reusable components and SCSS for styling. This project involved over 20 people: from UX, design, project management and of course development. `,
    image:
    {
      alt: 'DevaCurl Main Site',
      src: devaCurl
    },
    links:
    {
      website: 'Website',
      webUrl: 'https://www.devacurl.com/'
    }
  },
  {
    description: `30 Morningside was the first project I built when I joined thelab. Along with 2 other engineers we created a simple and beautiful website for a leasing company.
    The website is built using HTML, SCSS, JavaScript, Python and Wagtail for client's ability to control their listings and content.`,
    image:
    {
      alt: '30 Morningside DRive',
      src: morningside
    },
    links:
    {
      website: 'Website',
      webUrl: 'https://30morningsidedrive.com/'
    }
  }
]