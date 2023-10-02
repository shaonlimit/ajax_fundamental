const loadData = (callBackFunction) => {

    //create a request
    const xhr = new XMLHttpRequest();

    //what we need to do when response arrives
    xhr.onload = function (){
        callBackFunction(xhr);
    };

    //preparation stage
    xhr.open('GET','./data/data.txt');

    //send a reqest header
    // xhr.setRequestHeader('name','Shaon');

    //send request
    xhr.send();

    //abort request
    // xhr.abort();
}


const myCallBack_1 = (xhr) => {
    document.getElementById('demo_1').innerHTML = xhr.responseText;
}

const myCallBack_2 = (xhr) => {
    document.getElementById('demo_2').innerHTML = xhr.responseText;
}