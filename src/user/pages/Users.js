import React, { Component } from "react";
import UsersList from "../components/UsersList";
class Users extends Component {
  users = [
    {
      id: "u1",
      name: "Jay-Z",
      image:
        "https://i.insider.com/5e3b33270ce3d15c650b3ced?width=600&format=jpeg&auto=webp",
      places: 3,
    },
    {
      id: "u2",
      name: "Jay-Z2",
      image:
        "https://i.insider.com/5e3b33270ce3d15c650b3ced?width=600&format=jpeg&auto=webp",
      places: 3,
    },
  ];
  render() {
    return <UsersList users={this.users} />;
  }
}

export default Users;
