import React from "react";
import PropTypes from "prop-types";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profileCard}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt={{ name } + " avatar"}
          className={styles.avatar}
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li>
          <span className={styles.label}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  avatar:
    "https://lh3.googleusercontent.com/proxy/dB7GMCj4TDtyzpZ8tCzqBtyHEMA1Hjfct67Conl9l99zBD2AizU4b8vYiVMJYXo-X-n7JC73TE3RcVNXONekWihnVK0vfJO4Lzut4iRH8XWaKXJBjE153ukRGtQ",
  stats: {
    followers: 0,
    views: 0,
    likes: 0
  }
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number)
};

export default Profile;
