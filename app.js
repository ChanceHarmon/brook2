'use stirct';

Fly.myFlies = []

$('#addFly').on('submit', handleSubmit);

Fly.prototype.turnOnTravelListner = function () {
  let convert = this.identifier.toString()
  $(`#fly_${convert}`).on('click', handleMoveToTravel);
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
  $template.find('h3').text(`Fly Type: ${this.type}`);
  $template.find('h4').text(`Fly Size: ${this.size}`);
  $template.find('h5').text(`Fly Color: ${this.color}`);
  $template.find('button').attr('value', this.identifier);
  $template.find('button').attr('id', `fly_${this.identifier}`);
  $('#my-flies').append($template)
}

Fly.prototype.renderTravel = function () {
  let $template = $('<li></li>')
  let $liTemplate = $('#travelTemplate').html()
  $template.html($liTemplate)
  $template.attr('id', `original_${this.identifier}`)
  $template.find('h3').text(`Fly Type: ${this.type}`);
  $template.find('h4').text(`Fly Size: ${this.size}`);
  $template.find('h5').text(`Fly Color: ${this.color}`);
  $('#travel-flies').append($template)
}

function handleSubmit(event) {
  event.preventDefault();
  const $inputs = $('#addFly :input')
  let returnFly = new Fly($inputs[0].value, $inputs[1].value, $inputs[2].value);
  returnFly.render()
  returnFly.turnOnTravelListner()
}

function handleMoveToTravel(event) {
  event.preventDefault();
  $(`#${this.id}`).off("click", handleMoveToTravel);
  $(`#${this.id}`).css({ 'background-color': 'red', 'border-radius': '0', 'padding': '0.5em 1.25em' })
  $(`#${this.id}`).text('Fly Ready!')
  Fly.myFlies[parseInt(this.value)].renderTravel()
}



//Take home Instructions

// Finish basic functionality for moves of flies // Considering basic refactor functional for now
// CSS
// Animation
// Deploy

