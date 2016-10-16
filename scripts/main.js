function main() {
    clickengine.startGame({
        canvas: {
            id: "canvas",
            width: 256,
            height: 256,
			scale: 2
        },
        images: ["trainersheet.png", "tree.png"],
        init: initGame,
        update: updateGame,
        render: renderGame
    });
}
window.onload = main;

var trainer;
var trees;
function initGame() {
    trainer = new Trainer();
    trainer.x = (canvas.width/canvas.scale)/2;
    trainer.y = (canvas.height/canvas.scale)/2;
    trainer.image = Resources.getImage("trainersheet.png");
	
	trees = [];
}

function updateGame() {
    trainer.update();
	for (var i = 0; i < trees.length; i++) {
		trees[i].update();
	}
}

function renderGame() {
	ctx.fillStyle = "#ffaaaa";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
    trainer.render();
	
	for (var i = 0; i < trees.length; i++) {
		trees[i].render();
	}
}

window.onmousedown = function(e) {
	var coords = clickengine.getCanvasMouseCoords(e);
	var x = coords.x;
	var y = coords.y;
	
	var tile_x =  16 * Math.floor(x / 16);
	var tile_y = 16 * Math.floor(y / 16);
	
	trees.push(new Tree(tile_x, tile_y));
}
