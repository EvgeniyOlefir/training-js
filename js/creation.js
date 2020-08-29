const playlist = {
  name: "Мой плейлист",
  raiting: 5,
  track: ["track-1", "track-2", "track-3"],
  trackCount: 3,
};

//

// const x = {};

// const fn = function (myObject) {
//   console.log(myObject);
// };

// fn({ a: 1, b: 2 });

// const rtfm = function () {
//   return { a: 5 };
// };

// console.log(rtfm());

// console.log(playlist.track);
// console.log(playlist.name);
// console.log(playlist.trackCount);

const propertyName = "track";

// console.log(playlist.raiting);
// console.log(playlist["raiting"]);

// console.log(playlist.propertyName);
// console.log(playlist[propertyName]);

const username = "Mango";
const email = "mango@gmail.com";

const signupData = {
  username,
  email: email,
};

// console.log(signupData);

// <input name='color' value='tomato'>

const inputName = "color";
const inputValue = "tomato";

const colorPickerData = {
  [inputName]: inputValue,
};

// console.log(colorPickerData);

const a = { x: 1, y: 2 };
const b = a;

console.log(b === a);

a.c = "hello";

b.h = 200;
console.log(a);
console.log(b);
