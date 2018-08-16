// Promise(object)

// -resolve
//   -then()
// -reject
//   -catch()

const promise = new Promise((resolve, reject) => {
  window.setTimeout(() => {
    resolve(1);
  }, 2000);
});

promise
  .then(result => console.log(result))
  .catch(err => console.log(err))
  .finally(console.log('finally'));  //output first, cuz its not a function


const getPromise = () => {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve('hello');
    }, 2000);
  })
}

const promise = getPromise();
promise.then(result => console.log(result)); //print hello

async function getPromiseResult(){
  const promiseResult = await getPromise();
  console.log(promiseResult);
  return promiseResult;
}
getPromiseResult();
// const result = getPromiseResult();
// console.log(result);

const ajax = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.setRequestHeader('Content-Type', 'application/jason');
  xhr.onload = () => {
    callback(JSON.parse(xhr.responseText));
  };
  xhr.send();
}

const handleUsers = (result) => {
  ajax(`${URL}/${result.names[0]}`, handleUser);
};

ajax(URL, handleUsers);




const ajaxPromise = (url, callback) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.setRequestHeader('Content-Type', 'application/jason');
    xhr.onload = result => resolve(result);
    xhr.onerror = err => reject(err);
    xhr.send();
  })
}

const promise = ajaxPromise();
console.log(promise);






