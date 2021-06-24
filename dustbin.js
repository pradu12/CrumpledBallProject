class Dustbin{
    constructor(x,y){
        
        
        //this.image= loadImage("dustbingreen.png");
        this.bottombody = Bodies.rectangle(x,y,200,20,{
            isStatic: true
        });
        this.leftbody = Bodies.rectangle(x-100,y-90,20,200,{
            isStatic: true
        })
       this. rightbody = Bodies.rectangle(x+100,y-90,20,200,{
            isStatic: true
        })
        
        World.add(world,this.bottombody);
         World.add(world,this.leftbody);
        World.add(world,this.rightbody);
        this.width = 200;
        //this.height = 210;
        this.thickness = 20;
           
        

    }
    display(){
        var posbottom = this.bottombody.position;
        var posleft = this.leftbody.position;
        var posright = this.rightbody.position;
       
        fill ("yellow");
        rectMode(CENTER);
        rect(posbottom.x,posbottom.y,this.width,this.thickness);
        

        
        
        rectMode(CENTER);
        rect(posleft.x,posleft.y,this.thickness,this.width);
        
        
        rectMode(CENTER);
       rect(posright.x,posright.y,this.thickness,this.width);

    }
}