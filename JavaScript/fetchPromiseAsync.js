// Callbacks

function firstFunction(parameters, callback) {
  //do stuff
  callback();
}

// Promises
// can have three states Pending , fullfilles, Rejected

// const myPromise = new Promise((resolve, reject) => {
//   const error = true;
//   if (!error) {
//     resolve("Yes! promise resolved");
//   } else {
//     reject("No! rejected the promise");
//   }
// });

//############## 1st promise ###############
// console.log(myPromise);

// myPromise.then(value => {
//   return value + 1;
// })
// .then(newValue => {
//   console.log(newValue);
// })
// .catch((err) => {
//   console.log(err);
// })

//############# 2nd promise ###############

// const myNextPromise = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("myNextPromise resolved");
//   }, 3000);
// });

// myNextPromise.then((value) => {
//   console.log(value);
// })

//################ Pending explained contains fetch ##########

// const users = fetch("https://jsonplaceholder.typicode.com/users");

// pending
// console.log(users);

// fetch("https://jsonplaceholder.typicode.com/users")
// .then(Response => {
//   return Response.json();
// })
// .then(data => {
//   data.forEach(element => {
//     console.log(element);
//   });
// })

// ########################## ASYNC and AWAIT #############################

// const myUsers = {
//   userList : []
// }

// const myCoolFunction = async() => {
//   const Response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonRes = Response.json();
//   return jsonRes;
// }

// const anaotherFunc = async () => {
//   const data = await myCoolFunction();
//   myUsers.userList = data;
//   console.log(myUsers.userList);
// }

// anaotherFunc();
// console.log(myUsers.userList);

// ########### 2nd Example for async await ########

// const getAllUsersEmail = async () => {
//   const Response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const jsonRes = await Response.json();
//   const emailJson = jsonRes.map((user) => {
//     return user.email;
//   })
//   postToWebpage(emailJson);
// }

// const postToWebpage = (data) => {
//   console.log(data);
// }

// getAllUsersEmail();

// ############# 2nd parameter for fetch ##############

// const getDadJoke = async () => {
//   const Response = await fetch("https://icanhazdadjoke.com/",{
//     method: "GET",
//     headers: {
//       Accept: "application/json"
//     }
//   });
//   const jsonJoke = await Response.json();
//   console.log(jsonJoke);
// }

// getDadJoke();

// ############### POST Example ############

// const jokeObj = {
//   id: "lqWgFlyPusc",
//   joke: "What do you call an Argentinian with a rubber toe? Roberto",
// };

// const postJoke = async () => {
//   const Response = await fetch("https://httpbin.org/post", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(jokeObj),
//   });

//   const jsonRes = await Response.json();
//   console.log(jsonRes);
// };

// postJoke();


