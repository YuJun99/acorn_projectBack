// App.css 적용하기 (내부 css)
import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

//함수형 component
function App() {

  const [posts, setPosts] = useState()
  useEffect(() =>{
    axios.get("/membercalendar")
    .then(res=>console.log(res.data))
    .catch(err=>console.log(err))
  },[])
  
  return (
    <>
    <Link to="">식단일지</Link>
    <Link to="">운동일지</Link>
      <h1>인덱스 페이지 입니다</h1>
      
    </>
  );
}

//외부에서 App.js 를 import 하면 App 함수를 사용할수 있다. (src/index.js)
export default App;
