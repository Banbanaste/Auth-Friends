import React, { useEffect, useState } from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useForm } from "react-hook-form";
import { Row } from "reactstrap";

import FriendCard from "./FriendCard";

export default function Dash(props) {
  const { register, handleSubmit, watch, errors } = useForm();

  const [isLoading, setIsLoading] = useState(true);
  const [friendsArray, setFriendsArray] = useState([]);

  const onSubmit = data => {
    console.log(data);
    axiosWithAuth()
      .post("/api/friends", data)
      .then(res => {
        console.log(res);
        setFriendsArray(res.data);
      })
      .catch(err => console.log(err));
  };

  const deleteFriend = id => {
    axiosWithAuth()
      .delete(`/api/friends/${id}`)
      .then(res => {
        console.log(res);
        setFriendsArray(res.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        setFriendsArray(res.data);
      });
  }, [friendsArray]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: "30px" }}>
        <input
          name="name"
          placeholder="name"
          ref={register}
          style={{
            marginRight: "30px",
            borderRadius: "5px",
            border: ".5px solid rgba(0, 0, 0, 0.2)",
            paddingLeft: "5px"
          }}
        />
        <input
          name="age"
          placeholder="age"
          ref={register}
          style={{
            marginRight: "30px",
            borderRadius: "5px",
            border: ".5px solid rgba(0, 0, 0, 0.20)",
            paddingLeft: "5px"
          }}
        />
        <input
          name="email"
          placeholder="email"
          ref={register}
          style={{
            marginRight: "30px",
            borderRadius: "5px",
            border: ".5px solid rgba(0, 0, 0, 0.2)",
            paddingLeft: "5px"
          }}
        />
        <input
          type="submit"
          style={{
            borderRadius: "5px",
            border: ".5px solid rgba(0, 0, 0, 0.2)"
          }}
        />
      </form>
      <Row>
        {/* !isLoading && */
        friendsArray.map(friend => {
          return (
            <FriendCard
              key={friend.id}
              name={friend.name}
              age={friend.age}
              email={friend.email}
              id={friend.id}
              deleteFriend={deleteFriend}
            />
          );
        })}
      </Row>
    </>
  );
}
