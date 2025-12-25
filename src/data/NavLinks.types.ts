import type { NavLinkItem } from "../components/navBar/NavBar";
import Home from "../components/pages/homePage/Home";
import Projects from "../components/pages/projectsPage/Projects";

export const brandName = "Operator-Syn";

export const navLinks: NavLinkItem[] = [
    { name: "Home", path: "/", component: Home },
    { name: "Projects", path: "/projects", component: Projects },
    { name: "Certificates", path: "/certs", component: null },
    { name: "Snippets", path: "/snippets", component: null },
];