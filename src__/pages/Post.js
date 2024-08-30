// src/pages/Post.js

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Post() {

    //이동을 위한 hook
    const navigate = useNavigate()

    //회원 목록 상태값 관리
    const [posts, setPosts]=useState([])
    //Member component 가 활성화 되는 시점에 호출되는 함수 등록
    // useEffect( 함수, 빈 배열)    함수는 component 가 활성화될 때 최초 한 번 호출된다 (개발환경: 2번)
    useEffect(()=>{
        //해당 component 에서 필요한 준비 작업을 여기서 하면 된다.
        axios.get("/posts")
        .then(res => setPosts(res.data))
        .catch(err=> console.log(err))
    }, [])
    return (
        <>
            <Link to="/posts/new">게시물 추가</Link>
            <h1>게시판 입니다</h1>
            <table>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>작성자</th>
                        <th>제목</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(item=> <tr>
                        <td>{item.id}</td>
                        <td>{item.author}</td>
                        <td>{item.title}</td>
                    </tr>)}
                </tbody>
            </table>
        </>
    );
}

export default Post;