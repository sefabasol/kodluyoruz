

let user = {userName: "Sefa Basol", age: 18, isMarried: true}
console.log(user);

localStorage.setItem('userInfo', JSON.stringify(user));
let userInfo = localStorage.getItem('userInfo');
console.log(userInfo);
