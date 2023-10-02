const getData = () => {
    const xhr = new XMLHttpRequest;

    xhr.onload = function () {
        console.log(xhr.response);
    }

    xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1');
    xhr.responseType = 'json';
    xhr.send();
}

const sendData = () => {
 
   try {
    const xhr = new XMLHttpRequest(); // You need parentheses after new XMLHttpRequest
    xhr.onload = function () {
        if(this.status >= 400) {
            console.log(this.status); // Use responseText to get the response data
        }
        else {
           console.log(this.response);
        }
    }
    xhr.onerror = function() {
        console.log('there was an error');
    }
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts');
    // xhr.setRequestHeader('Content-Type', 'application/json'); // Set the content type header
    const data = JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    });
    xhr.responseType = 'json';

    xhr.send(data);
   } catch (error) {
    console.log(error);
   }

}



const getButton = document.getElementById('getData');
const sendButton = document.getElementById('sendData');

getButton.addEventListener('clcik',getData);
getButton.addEventListener('clcik',sendData);


