import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const friendStatusClasses = [styles.status];

  if (!isOnline) {
    friendStatusClasses.push(styles.isOffline);
  } else {
    friendStatusClasses.push(styles.isOnline);
  }

  return (
    <li className={styles.item}>
      <span className={friendStatusClasses.join(" ")}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt={{ name } + " avatar"}
        width="48"
      />
      <p className={styles.personName}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar:
    "https://lh3.googleusercontent.com/proxy/dB7GMCj4TDtyzpZ8tCzqBtyHEMA1Hjfct67Conl9l99zBD2AizU4b8vYiVMJYXo-X-n7JC73TE3RcVNXONekWihnVK0vfJO4Lzut4iRH8XWaKXJBjE153ukRGtQ"
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};

export default FriendListItem;
