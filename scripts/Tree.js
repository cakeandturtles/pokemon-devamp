class Tree {
    constructor(x, y){
        this.x = x;
        this.y = y;

        this.animation = new Animation();
        this.animation.change(0, 0, 1);
		
		this.image = Resources.getImage("tree.png");
    }

    update(){
        this.animation.update();
    }

    render(){
        this.animation.render(this.image, ~~this.x, ~~this.y);
    }
}
