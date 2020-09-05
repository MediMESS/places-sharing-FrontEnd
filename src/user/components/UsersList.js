import React from "react";

import UserItem from "./UserItem";
import "./UsersList.css";

const UsersList = (props) => {
  if (props.users.length === 0) {
    // if (true) {
    return (
      <div className="center">
        <h1>Users Not Found</h1>
      </div>
    );
  }
  return (
    <ul className="user-list">
      {props.users.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placesCount={user.places}
        />
      ))}
    </ul>
  );
};
export default UsersList;
