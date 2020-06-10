import React, { Component } from "react";
import UserItem from "./UserItem";

export class User extends Component {
  state = {
    users: [
      {
        id: "1",
        login: "mojombo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v-4",
        html_url: "http://github.com/mojombo",
      },
      {
        id: "2",
        login: "Mamoa",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v-4",
        html_url: "http://github.com/defunkt",
      },
      {
        id: "3",
        login: "MumboJumbo",
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v-4",
        html_url: "http://github.com/pjhyett",
      },
    ],
  };

  render() {
    return (
      <div>
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default User;
