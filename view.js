// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Forme.prototype.paint = function (ctx) {
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.width;
}

Rectangle.prototype.paint = function (ctx) {
    Forme.prototype.paint.call(this, ctx);

    ctx.beginPath();
    ctx.rect(this.xIni, this.yIni, this.w, this.h);
    ctx.stroke();
}

Ligne.prototype.paint = function (ctx) {
    Forme.prototype.paint.call(this, ctx);

    ctx.beginPath();
    ctx.moveTo(this.xIni, this.yIni);
    ctx.lineTo(this.x1, this.y1);
    ctx.stroke();
}

Drawing.prototype.paint = function(ctx, canvas) {
    ctx.fillStyle  = "#F0F0F0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    this.shapes.forEach(s => s.paint(ctx));
}