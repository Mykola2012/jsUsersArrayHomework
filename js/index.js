"use strict";

function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

const fullNameProto = {};

fullNameProto.getFullName = function () {
  return `${this.firstName}  ${this.lastName}`;
};

User.prototype = fullNameProto;

const users = [];

for (let i = 0; i < 100; i++) {
  const user = new User(
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() > 0.5,
    `useremail${i}@gmail.com`,
    Math.random() > 0.5
  );
  users.push(user);
}

console.log("users :>> ", users);

console.log("usersc.getFullName :>> ", users[5].getFullName());

console.group("Task 1.2");

const schoolgirls = users.filter(
  (user) => user.isMale === true && user.age >= 6 && user.age <= 18
);
const schoolgirlsFullName = schoolgirls.map((user) => user.getFullName());

console.log("schoolgirls :>> ", schoolgirls);
console.log("schoolgirlsFullName :>> ", schoolgirlsFullName);

console.groupEnd();

console.group("Task 1.3");

console.log(
  "isThisEmail :>> ",
  users.some((user) => user.email === "useremail99@gmail.com")
);

console.groupEnd();

console.group("Task 1.4");

console.log(
  "isAllSubscribeds :>> ",
  users.every((user) => user.isSubscribed === true)
);

console.groupEnd();
