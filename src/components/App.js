import React, { Fragment } from 'react';

import Profile from './Profile/Profile';
import user from '../data/user';

import Statistics from './Statistics/Statistics';
import statisticalData from '../data/statistical-data.json';

import FriendList from './FriendList/FriendList';
import friends from '../data/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import items from '../data/transactions.json';

const App = () => {
  return (
    <Fragment>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={items} />
    </Fragment>
  );
};

export default App;
