import AdoptAPet from './assets/adoptAPet.png'
import donations from './assets/donations.png'
import expenseTracker from './assets/expenseTracker.png'
import pomodoro from './assets/pomodoro.png'
import wanderlust from './assets/wanderlust.png'
import css from './assets/css.png'
import github from './assets/github.png'
import html from './assets/html.png'
import javascript from './assets/javascript.png'
import mongo from './assets/mongo.png'
import react from './assets/react.png'
import node from './assets/node.png'
import tailwind from './assets/tailwind.png'
import imusic from './assets/imusic.jpg'
import numberGuesser from './assets/numberGuesser.jpg'
import teaCozy from './assets/teaCozy.jpg'
import architectureBlog from './assets/architectureBlog.jpg'
import tsunamiCoffee from './assets/tsunamiCoffee.jpg'

const projects = [
    {
        projectName: 'iMusic',
        gitUrl: 'https://github.com/Bentil-OkyereBoadu/imusic',
        demo: 'https://imusic-three.vercel.app/',
        pic: `${imusic}`,
        },
    {
        projectName: 'Donations',
        gitUrl: 'https://github.com/Bentil-OkyereBoadu/donations',
        demo: 'https://orphanagesupportservices.netlify.app/',
        pic: `${donations}`,
        },
    {
        projectName: 'Pomodoro Clock',
        gitUrl: 'https://github.com/Bentil-OkyereBoadu/pomodoro',
        demo: 'https://pomodorogroupwork.netlify.app/',
        pic: `${pomodoro}`,
    },
    {
        projectName: 'Adopt a pet',
        gitUrl: 'https://github.com/Bentil-OkyereBoadu/adoptAPet',
        demo: 'https://adoptapett.netlify.app/',
        pic: `${AdoptAPet}`,
    },
    {
        projectName: 'Wanderlust',
        gitUrl: 'https://github.com/Bentil-OkyereBoadu/wanderlust',
        demo: 'https://bentil-wanderlust.netlify.app/',
        pic: `${wanderlust}`,
    },
    {
        projectName: 'Number Guessor',
        gitUrl: 'https://github.com/Bentil-OkyereBoadu/numberGuesser',
        demo: 'https://number-guessor.netlify.app/',
        pic: `${numberGuesser}`,
    },
    {
        projectName: 'Expense Tracker',
        gitUrl: 'https://github.com/Bentil-OkyereBoadu/expenseTracker',
        demo: 'https://bentil-expensetracker.netlify.app/',
        pic: `${expenseTracker}`,
    },
    {
        projectName: 'Tea Cozy',
        gitUrl: 'https://github.com/Bentil-OkyereBoadu/teaCozy',
        demo: 'https://bentil-teacozy.netlify.app/',
        pic: `${teaCozy}`,
    },
    {
        projectName: 'Architecture Blog',
        gitUrl: 'https://github.com/Bentil-OkyereBoadu/architectureBlog',
        demo: 'https://bentil-architecture-blog.netlify.app/',
        pic: `${architectureBlog}`,
    },
    {
        projectName: 'Tsunami Coffee',
        gitUrl: 'https://github.com/Bentil-OkyereBoadu/tsunamiCoffee',
        demo: 'https://bentil-tsunami-coffee.netlify.app/',
        pic: `${tsunamiCoffee}`,
    },
    
]

const skills = [
    {
        skill: 'HTML',
        img: `${html}`,
    },
    {
        skill: 'CSS',
        img: `${css}`,
    },
    {
        skill: 'JAVASCRIPT',
        img: `${javascript}`,
    },
    {
        skill: 'REACT JS',
        img: `${react}`,
    },
    {
        skill: 'NODE JS',
        img: `${node}`,
    },
    {
        skill: 'GITHUB',
        img: `${github}`,
    },
    {
        skill: 'MONGO DB',
        img: `${mongo}`,
    },
    {
        skill: 'TAILWIND',
        img: `${tailwind}`,
    },
]

export const data = { projects, skills}
