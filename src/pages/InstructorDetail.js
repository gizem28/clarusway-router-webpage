import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const InstructorDetail = () => {
  const navigate = useNavigate();
  const { login } = useParams();
  
  let url = "https://api.github.com/users/" + login;
  const [user, setUser] = useState([]);
  const { avatar_url, html_url, company, location } = user;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [url]);

  return (
    <Container className="text-center mt-4" style={{height:"81vh"}}>
      <h1>NAME: "{login}"</h1>
      <img src={avatar_url} alt="" style={{borderRadius:10,margin:20 }}/>
      <h4>{html_url}</h4>
      <h4>{company}</h4>
      <h4>{location}</h4>
      <button className="btn-warning btn-lg" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </Container>
  );
};

export default InstructorDetail;