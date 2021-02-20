'use stirct';

Fly.myFlies = []
Fly.travelFlies = [];

$('#addFly').on('submit', handleSubmit);

function turnOnListner() {

  $('button').on('click', handleMoveToTravel);
}

function Fly(type, size, color) {
  this.type = type;
  this.size = size;
  this.color = color;
  this.identifier = Fly.myFlies.length;
  Fly.myFlies.push(this)
}

Fly.prototype.render = function () {


  let $template = $('<li></li>')
  let $liTemplate = $('#template').html()
  $template.html($liTemplate)
  $template.find('h3').text(this.type);
  $template.find('h4').text(this.size);
  $template.find('h5').text(this.color);
  $('#my-flies').append($template)

}

function handleSubmit(event) {
  event.preventDefault();
  const $inputs = $('#addFly :input')
  let returnFly = new Fly($inputs[0].value, $inputs[1].value, $inputs[2].value);
  returnFly.render()
  // $('#my-flies').append(`<li><p>Type: ${returnFly.type},</p> <p>Size: ${returnFly.size},</p> <p>Color: ${returnFly.color}</p><button type="submit" value="${returnFly.identifier}">Add to Travel Box</button></li>`)
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

