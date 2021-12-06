
GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
		var me=this;
        me.load.image('background',"img/fondo1.jpg");
		me.load.spritesheet("crow","img/crow.png",97,120);
		me.load.spritesheet("man","img/man.png",69,174);
		
    },
    create: function() {
		var me=this;
        me.game.add.sprite(0, 0, 'background');
		
		me.crow= me.game.add.sprite(150,100,"crow");
		me.crow.animations.add("right",[0,1,2,3],8,true);
		me.crow.animations.add("left",[4,5,6,7],8,true);
		me.crow.animations.play("right");
		
		me.man=me.game.add.sprite(100,350,"man");
		me.man.animations.add("right",[0,1,2,3,4,5,6,7],10,true);
		me.man.animations.add("left",[15,14,13,12,11,10,9,8],10,true);
		me.game.cursores=me.input.keyboard.createCursorKeys();
		me.game.physics.startSystem(Phaser.Physics.ARCADE);
		me.man.animations.play("right");
    },
    update: function() {
		var me=this;
		me.crow.x+=2;
		me.man.x+=1;
		if(me.crow.x>=me.game.world.width){
			me.crow.x=-100;
			}
		if(me.man.x>=me.game.world.width){
			me.man.x=-100;
			}
		
        
    }
}

var game = new Phaser.Game(1136, 640, Phaser.CANVAS);
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");