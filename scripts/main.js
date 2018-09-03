var myHeading = document.querySelector('h1');
var myImage = document.getElementById('myImage');
var image1 = 'images/babe.jpeg';
var image2 = 'images/flowers.jpeg';
var image3 = 'images/womany.jpeg';
var image4 = 'images/sunset.jpeg';
myHeading.textContent = 'Hello world!';
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === image1) {
      myImage.setAttribute ('src',image2);
    } else if(mySrc === image2){
      myImage.setAttribute ('src',image3);
    }
     else if(mySrc === image3){
       myImage.setAttribute ('src',image4);
    }
     else if (mySrc === image4){
       myImage.setAttribute ('src',image1);
    }
   

   {
    var e = document.getElementById('id');
e.style.backgroundImage = 'url(bloom.jpeg)';
   }
}

function changeHeaderBackground(color){

  console.log('was here');
  var header = document.getElementById("header");
  header.setAttribute('style','background-color:'+color);
  
  


}

function changeFooterBackground(color){

  console.log('was here');
  var footer = document.getElementById("footer");
  footer.setAttribute('style','background-color:'+color);
}

function changefontcolor(color){
  var body =document.getElementById('body')
  body.setAttribute('style','color:'+color);


}



var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'You are cool,' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'You are cool , ' + storedName;
}
myButton.onclick = function() {
  setUserName();

}

