import Home from "./pages/Home";
import User from "./pages/User";
import Formacao from "./pages/Formacao";
import Experiencia from "./pages/Experiencia";


const routesConfig = [
    {
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/user",
        component: User,
        exact: true
    },
    {
        path: "/formacao",
        component: Formacao,
        exact: true
    },
    {
        path: "/experiencia",
        component: Experiencia,
        exact: true
    },
]
export default routesConfig