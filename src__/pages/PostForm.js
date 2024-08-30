// src/pages/PostForm.js

import axios from "axios";
import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function PostForm(props) {
    const navigate = useNavigate()
    const [state, setState] = useState()

    const handleChange = (e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    const handleSave = ()=>{
        axios.post("/posts", state)
        .then(res=>{
            console.log(res.data)
            alert(res.data.author+" 님의 정보가 추가 되었습니다")
            navigate("/posts")
        })
        .catch(error=>console.log(error))
    }

    return (
        <>
            <h1>게시물 추가 양식</h1>
            <Form>
            <Form.Group as={Row} className="mb-3" controlId="name">
                    <Form.Label column sm={2}>이름</Form.Label>
                    <Col sm={10}>
                        <Form.Control onChange={handleChange} type="text" name="author" placeholder="작성자 입력..." />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="addr">
                    <Form.Label column sm={2}>주소</Form.Label>
                    <Col sm={10}>
                        <Form.Control onChange={handleChange} type="text" name="title" placeholder="제목 입력..." />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button onClick={handleSave} variant="info" >추가</Button>
                    </Col>
                </Form.Group>
            </Form>
        </>
    );
}

export default PostForm;