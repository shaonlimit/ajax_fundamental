const loadData = () => {

    //create a request
    const xhr = new XMLHttpRequest();

    //what we need to do when response arrives
    xhr.onload = function (){
      
        document.getElementById('demo').innerHTML = this.responseText;
        console.log(this.getResponseHeader('date'));
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


