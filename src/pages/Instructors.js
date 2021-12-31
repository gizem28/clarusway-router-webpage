import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Grid} from "@mui/material";

const Instructors = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const url = "https://api.github.com/users";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
    <h1 style={{margin:30, color:"grey", textAlign:"center"}}>OUR INSTRUCTORS</h1>
    <br/>
      <Grid container style={{paddingLeft:30}} rowSpacing={5} columnSpacing={{xs:3, sm:4, md:5}} >
      {users.map((user) => {
        const { id, login, avatar_url } = user;
        return (
             <Grid item xs={4} key={id}>
            <img
              src={avatar_url}
              alt=""
              style={{cursor: "pointer", width: "300px",borderRadius:10 }}
              onClick={() => navigate(`/instructors/${user.login}`)}/>
              <h2 className="title" style={{color:"grey"}} >{login}</h2>
              </Grid>
        );
      })}
      </Grid>
      </div>
  );
};

export default Instructors;