class Trainer {
    constructor(){
        this.x = 0;
        this.y = 0;

        this.animation = new Animation();
        this.animation.change(0, 0, 2);
        this.animation.frame_delay = 6;
    }

    update(){
        this.animation.update();
		
		var speed = 1;
        var moved = false;
        
        if (Input.isKeyDown(Input.LEFT_KEY)){
            this.x -= speed;
            moved = true;
        }
        if (Input.isKeyDown(Input.RIGHT_KEY)){
            this.x += speed;
            moved = true;
        }
        if (Input.isKeyDown(Input.UP_KEY)){
            this.y -= speed;
            moved = true;
        }
        if (Input.isKeyDown(Input.DOWN_KEY)){
            this.y += speed;
            moved = true;
        }
        
        if (moved){
            this.animation.frame_delay = 6;
        }else{
            this.animation.frame_delay = 30;
        }
    }

    render(){
        this.animation.render(this.image, ~~this.x, ~~this.y);
    }
}
