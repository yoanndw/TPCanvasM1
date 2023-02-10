
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  console.log("Construit DnD");
  // Définir ici les attributs de la 'classe'
  this.xIni = 0;
  this.yIni = 0;
  this.xFin = 0;
  this.yFin = 0;

  this.mousePressed = false;

  // Developper les 3 fonctions gérant les événements
  this.dragStart = function (evt) {
    let pos = getMousePosition(canvas, evt);
    this.xIni = pos.x;
    this.yIni = pos.y;

    this.mousePressed = true;
    console.log("Start DnD: ", pos);
  }.bind(this);


  this.drag = function (evt) {
    if (this.mousePressed) {
      let pos = getMousePosition(canvas, evt);
      this.xEnd = pos.x;
      this.yEnd = pos.y;
      console.log("During DnD: ", pos);
    }
  }.bind(this);

  this.dragEnd = function (evt) {
    let pos = getMousePosition(canvas, evt);
    this.xEnd = pos.x;
    this.yEnd = pos.y;

    this.mousePressed = false;
    console.log("End DnD: ", pos);
  }.bind(this);

  // Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener("mousedown", this.dragStart);
  canvas.addEventListener("mousemove", this.drag);
  canvas.addEventListener("mouseup", this.dragEnd);

  console.log(this, canvas);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



