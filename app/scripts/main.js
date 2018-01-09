
'use strict';

/** PART II **/
function createBlock(obj) {
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


function init() {
    let container = document.getElementById('container');
    console.log('--- Assignment 2 --- ');
    console.log('the soundsKit: ', soundsKit);
    // PART II
    // iterate over the soundsKit Array
    // for each object:
        // appends the result of the createBlock function to the container
        //PART II 1) bind the click event on the result of the createBlock
        //end of the loop

}

init();
