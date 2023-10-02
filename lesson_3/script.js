const loadData = () => {

    //create a request
    const xhr = new XMLHttpRequest();

    //what we need to do when response arrives
    xhr.onload = function (){
        console.log('request');
        document.getElementById('demo').innerHTML = this.responseText;
    };

    //preparation stage
    xhr.open('GET','./data/data.txt',false);

    //send a reqest header
    // xhr.setRequestHeader('name','Shaon');

    //send request
    xhr.send();

    //abort request
    // xhr.abort();
    console.log('my log');
}


