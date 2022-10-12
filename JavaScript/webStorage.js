const myArray = ["Cat","dog","parrot"];

const newObject = {
    name: "Moheet",
    petAnimals: myArray,
    load : function () {
        console.log(newObject.name);
    }
}

//json stringify nad json parse to store data as json in storage.

sessionStorage.setItem("myObject",JSON.stringify(newObject) );
sessionStorage.setItem( JSON.stringify('Hello'));
// sessionStorage.removeItem("myObject"); To remove single storage from storage;
// sessionStorage.clear() to empty session storage;
// sessionStorage.key(0) To get the name of storage based on index of storage;

const newSession = JSON.parse(sessionStorage.getItem("myObject")) ;
console.log(newSession);

// ***** Switch sessionstorage with localstorage to store locallay in browser for a long time**********