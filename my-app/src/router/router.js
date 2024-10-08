// project/router/router.js
import App from '../App' //App Component 를 최상위 component 로 사용하기 위해
import Home from '../pages/Home'
import MemberCalendar from '../pages/MemberCalendar'

const { createBrowserRouter } = require("react-router-dom")

//라우트 정보를 배열에 저장
const routes=[
    {path:"/", element: <Home/>},
    {path:"/membercalendar", element: <MemberCalendar/>}
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