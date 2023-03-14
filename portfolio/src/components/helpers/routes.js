import About from "../pages/About";
import Contact from "../pages/Contact";
import Continiue from "../pages/Continiue";
import Freinds from "../pages/Freinds";
import Home from "../pages/Home";
import Projects from "../pages/Projects";


export const routes = [
    {
        id: 1,
        path: '/',
        component: <Continiue/>
    },
    {
        id: 2,
        path: '/home',
        component: <Home/>
    },
    {
        id: 3,
        path: '/about',
        component: <About/>
    },
    {
        id: 4,
        path: '/contact',
        component: <Contact/>
    },
    {
        id: 5,
        path: '/freinds',
        component: <Freinds/>
    },
    {
        id: 6,
        path: '/projects',
        component: <Projects/>
    }
]