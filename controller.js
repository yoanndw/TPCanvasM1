var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.rect;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function (dnd) {
		switch (this.currEditingMode) {
			case editingMode.line:
				this.currentShape = new Ligne(dnd.xIni, dnd.yIni, dnd.xEnd, dnd.yEnd, this.currLineWidth, this.currColour);
				break;

			case editingMode.rect:
				this.currentShape = new Rectangle(dnd.xIni, dnd.yIni, dnd.xEnd - dnd.xIni, dnd.yEnd - dnd.yIni, this.currLineWidth, this.currColour);
				break;

			default: console.log("ERR: no mode selected");
		}
	}.bind(this);

	this.onInteractionUpdate = function (dnd) {
		if (this.currentShape != 0) {
			drawing.paint(ctx, canvas);
			this.currentShape.updateDestPoint(dnd.xEnd, dnd.yEnd);
			this.currentShape.paint(ctx);
		}
	}.bind(this);

	this.onInteractionEnd = function (dnd) {
		if (this.currentShape != 0) {
			this.currentShape.paint(ctx);
			drawing.addShape(this.currentShape);
			drawing.paint(ctx, canvas);
		}
	}.bind(this);

	// Bind with radio buttons
	const butLine = document.getElementById("butLine");
	const butRect = document.getElementById("butRect");

	butLine.addEventListener("click", evt => this.currEditingMode = editingMode.line);
	butRect.addEventListener("click", evt => this.currEditingMode = editingMode.rect);

	// Bind the color
	const colour = document.getElementById("colour");

	colour.addEventListener("change", evt => this.currColour = evt.target.value);

	// Bind the thickness
	const spinnerWidth = document.getElementById("spinnerWidth");

	const updateWidth = (evt => this.currLineWidth = evt.target.value).bind(this);

	spinnerWidth.addEventListener("change", updateWidth);
};