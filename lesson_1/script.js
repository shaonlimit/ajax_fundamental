const loadData = () => {

    //create a request
    const xhr = new XMLHttpRequest();

    //what we need to do when response arrives
    xhr.onload = function () {
       document.getElementById('ajax').innerHTML = this.responseText;
    }

    //preparation stage
    xhr.open('GET','./data/data.txt');

    //send request
    xhr.send();
}