// src/router/router.js
import App from '../App' //App Component 를 최상위 component 로 사용하기 위해
import ProtectedRoute from '../components/ProtectedRoute'
import Cafe from '../pages/Cafe'
import CafeForm from '../pages/CafeForm'
import Gallery from '../pages/Gallery'
import GalleryDetail from '../pages/GalleryDetail'
import GalleryForm from '../pages/GalleryForm'
import Home from '../pages/Home'
import Member from '../pages/Member'
import MemberForm from '../pages/MemberForm'
import MemberUpdateForm from '../pages/MemberUpdateForm'
import Post from '../pages/Post'
import PostForm from '../pages/PostForm'


const { createBrowserRouter } = require("react-router-dom")

//라우트 정보를 배열에 저장
const routes=[
    {path:"/", element: <Home/>},
    {path:"/members", element:<Member/>},
    {path:"/members/new", element: <MemberForm/>},
    {path:"/members/:num/edit", element:<MemberUpdateForm/>},
    {path:"/posts", element: <Post/>},
    {path:"/posts/new", element: <PostForm/>},
    {path:"/gallery", element: <ProtectedRoute><Gallery/></ProtectedRoute>},
    {path:"/gallery/new", element: <ProtectedRoute><GalleryForm/></ProtectedRoute>},
    {path:"/gallery/:num", element: <GalleryDetail/>},
    {path:"/cafes", element: <Cafe/>},
    {path:"/cafes/new", element: <ProtectedRoute><CafeForm/></ProtectedRoute>}

]

//BrowserRouter 를 만들기
const router = createBrowserRouter([{
    path:"/",
    element:<App/>,
    children: routes.map((route)=>{
        return {
            index: route.path === "/", //자식의 path 가 "/" 면 index 페이지 역할을 하게 하기
            path: route.path === "/" ? undefined : route.path, // path 에 "/" 두 개가 표시되지 않게
            element: route.element // 어떤 컴포넌트를 활성화 할것인지
        }
    })
}])

// import 한 곳에 router (BrowserRouter) 를 사용하도록 (HashRouter, BrowserRouter)
export default router