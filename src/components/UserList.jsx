import React from "react";
import { connect } from "react-redux";
import UserItem from "./UserItem";
import styles from "../styles/UserList.module.css";

const UserList = ({ users, filter }) => {
  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(filter.toLowerCase())
  );

return (
    <ul className={styles.userList}>
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => <UserItem key={user.id} user={user} />)
      ) : (
        <li>No users found</li>
      )}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
  filter: state.filter,
});

export default connect(mapStateToProps)(UserList);
