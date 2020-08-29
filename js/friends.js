// Работа с коллекцией

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: false },
  { name: "Kong", online: true },
];

console.table(friends);

// for (const friend of friends) {
//   console.log(friend.name);

//   friend.newprop = 555;
// }
// console.table(friends);

const findFriendByName = function (allFriends, friendName) {
  for (const friend of allFriends) {
    // console.log(friend);
    // console.log(friend.name);

    if (friend.name === friendName) {
      return "Нашли!!!!";
    }
  }

  return "Не нашли :(";
};

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));

//Получаем имена всех друзей

const getAllNames = function (allFriends) {
  const names = [];

  for (const friend of allFriends) {
    console.log(friend.name);

    names.push(friend.name);
  }

  return names;
};

// console.log(getAllNames(friends));

// Получаем имена друзей, которые онлайн

const getOnlineFriends = function (allFriends) {
  const onlineFriend = [];

  for (const friend of allFriends) {
    console.log(friend);
    console.log(friend.online);

    if (friend.online) {
      onlineFriend.push(friend);
    }
  }
  return onlineFriend;
};

// console.log(getOnlineFriends(friends));

const getOfflineFriends = function (allFriends) {
  const offlineFriends = [];

  for (const friend of allFriends) {
    console.log(friend.online);

    if (!friend.online) {
      offlineFriends.push(friend);
    }
  }
  return offlineFriends;
};

// console.log(getOfflineFriends(friends));

//функция которая сортирует друзей по массивам в зависимости от статуса

const getFriendsByOnlineStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };

  for (const friend of allFriends) {
    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }

    friendsByStatus.offline.push(friend);
  }
  return friendsByStatus;
};

// console.log(getFriendsByOnlineStatus(friends));

//Узнать количество свойств в объекте
const x = {
  a: 1,
  b: 2,
  c: 50,
  d: 100,
};

// console.log(Object.keys(x).length);
