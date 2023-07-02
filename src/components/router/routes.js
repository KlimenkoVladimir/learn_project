import About from "../../pages/About"
import Posts from "../../pages/Posts"
import PostIdPage from "../../pages/PostIdPage"
import Login from "../../pages/Login"

export const privateRoutes = [
    {component: <About/>, path: '/about', exact: true},
    {component: <Posts/>, path: '/posts', exact: true},
    {component: <PostIdPage/>, path: '/posts/:id', exact: true},

]

export const publicRoutes = [
    {component: <Login/>, path: '/login', exact: true},

]