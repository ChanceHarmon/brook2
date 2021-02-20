'use stirct';

const myFlies = []
const travelFlies = [];

$('#addFly').on('submit', handleSubmit);

function turnOnListner() {

  $('button').on('click', handleMoveToTravel);
}

function Fly(type, size, color) {
  this.type = type;
  this.size = size;
  this.color = color;
  this.identifier = Date.now();
  myFlies.push(this)
}

function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target.flyType.value)
  let returnFly = new Fly(event.target.flyType.value, event.target.size.value, event.target.color.value);

  $('#my-flies').append(`<li><p>Type: ${returnFly.type},</p> <p>Size: ${returnFly.size},</p> <p>Color: ${returnFly.color}</p><button type="submit" value="${returnFly.identifier}">Add to Travel Box</button></li>`)
  turnOnListner()

}

function handleMoveToTravel(event) {

  event.preventDefault();
  for (let i = 0; i < myFlies.length; i++) {
    console.log(typeof myFlies[i].identifier)
    // console.log($('button').val(), myFlies[i].identifier)
    if (event.target.value === myFlies[i].identifier.toString()) {
      $('#travel-flies').append(`<li><p>Type: ${myFlies[i].type},</p> <p>Size: ${myFlies[i].size},</p> <p>Color: ${myFlies[i].color}</p><button type="submit">Let\'s Go Fishing</button></li>`)
    }
  }
}

//Bug on .val for button


//Take home Instructions

// Finish basic functionality for moves of flies
// CSS
// Animation
// Deploy

