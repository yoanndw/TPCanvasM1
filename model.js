
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

function Drawing() {
    this.shapes = [];
}

Drawing.prototype.addShape = function(shape) {
    this.shapes.push(shape);
}

function Forme(color, width, x, y) {
    this.color = color;
    this.width = width;

    this.xIni = x;
    this.yIni = y;
}

function Rectangle(x, y, w, h, width, color) {
    Forme.call(this, color, width, x, y);
    this.w = w;
    this.h = h;
}

Rectangle.prototype.updateDestPoint = function(x, y) {
    this.w = x - this.xIni;
    this.h = y - this.yIni;
}

function Ligne(x0, y0, x1, y1, width, color) {
    Forme.call(this, color, width, x0, y0);
    this.x1 = x1;
    this.y1 = y1;
}

Ligne.prototype.updateDestPoint = function(x, y) {
    this.x1 = x;
    this.y1 = y;
}