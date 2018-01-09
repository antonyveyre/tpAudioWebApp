
'use strict'

let a = document.createElement('audio')
let canplay = (a.canPlayType('audio/mpeg') == 'probably') ||(a.canPlayType('audio/mpeg') == 'maybe');
let c = canplay ? 0 : 1;

/** PART II **/
function createBlock(arr) {
  // console.log(canplay);
  for (let i = 0 ; i<arr.length; i++){
    let block = document.createElement('div');
    block.classList.add('block');
    block.id = arr[i].name;
    block.style.backgroundColor = arr[i].color;
    // let p = document.createElement('p')
    // let text = document.createTextNode(soundsKit[i].key['letter']);
    //p.appendChild(text);
    block.textContent = arr[i].key['letter'];
    document.querySelector('#container').appendChild(block);
    let audio = document.createElement('audio');
    let src = document.createElement('source');
    src.src = arr[i].url.path + arr[i].url.filenames[c]
    audio.appendChild(src);
    block.appendChild(audio)
  }
  //1) create a div with document.createElement
  //let block = ...
  //2) set the class to "block" for example,
  //set id to the object name and set style attribute of the newly-created div element (block):
  //(HINT: className, id and style.backgroundColor)
  //3) creates a new p element:
  //// creates a new text-node with the value of the key.letter object property.
  // appends the text-node to the newly-created p element:
  // appends the p element to the block
  //(HINT: appendChild)

  //4) instantiate a new Audio object
  //let audio = ...
  //5) check if the browser can play mp3 file ('audio/mpeg') with the canPlayType function
  //yes: sets the src attribute of the audio object: path + the first filenames (mp3)
  //no:  sets the src attribute of the audio object: path + the second filenames (ogg)
  //6)  sets the controls attribute of the audio object to false (we do not want to see the controls)
  //7) append the audio to the block
  //8) returns the block
}



document.querySelector('#container').addEventListener('click',buttonClicked);
function buttonClicked(e){
    let ca =  e.target.querySelector('audio')
    ca.currentTime = 0;
    ca.play();
}

document.addEventListener("keypress", myScript);
function myScript(e){
  for (let i = 0 ; i<soundsKit.length; i++){
    if((soundsKit[i].key.keyCode==e.keyCode) || (soundsKit[i].key.keyCode + 32 ==e.keyCode))
    {
      //      console.log('GOOOD!!!!!!!!');
      document.querySelector('#history').textContent += e.key;
      a.src=soundsKit[i].url.path+soundsKit[i].url.filenames[c]
      // console.log(a.src);
      a.play();
    }
  }
  // console.log(e);
}
function init() {
  let container = document.getElementById('container');
  // console.log('--- Assignment 2 --- ');
  // console.log('the soundsKit: ', soundsKit);
  createBlock(soundsKit);
  // PART II
  // iterate over the soundsKit Array
  // for each object:
  // appends the result of the createBlock function to the container
  //PART II 1) bind the click event on the result of the createBlock
  //end of the loop

}

init();
