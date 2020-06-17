class Level2 extends Phaser.Scene {
    constructor() {
        super ("Level2");
        
    }

    preload(){
        this.load.image('backgroundLevel2', 'Assets/Level2 - Scene.png');
        this.load.video('timer', 'Animation/timer.mp4','canplay', false, true);

        this.load.image('eggs', 'Assets/Level2 - Object - Eggs.png')
        this.load.spritesheet('poele', 'Assets/Spritesheet/Level2 - Object - poele.png',{
            frameWidth : 768,
            frameHeight : 817
        });


        this.load.audio("Good","Sound/Good.mp3");
        this.load.audio("Wrong","Sound/Wrong.mp3");
    }

    create(){
        var egg = 0;
        var oldPosition = 0;
        var echec = 0;

        this.time.addEvent({
            delay: 9000,
            callback: () => {
                if(egg !=2 ){
                    echec = 1; 
                }
            },
        })

        this.add.video(70,540,'timer').play(); //timer position
        this.add.image(155, 0, 'backgroundLevel2').setOrigin(0, 0);
        var soundGood = this.sound.add('Good');
        var soundWrong = this.sound.add('Wrong');
        
        var poeleObject = this.add.image(700, 535, 'poele');

        var eggsObject = this.add.image(1610.143, 585.775, 'eggs').setInteractive({draggable: true});
        eggsObject.on('drag', function(pointer, dragX, dragY){
            eggsObject.setPosition(dragX, dragY);
            var mousePosition = new Phaser.Math.Vector2(dragX,dragY);
            if((eggsObject.x > 444.1430000003 && eggsObject.x < 1134.143)&& ( (eggsObject.y < 1003.775 && eggsObject.y > 289 ))){
                if(oldPosition != 0){
                    var speed = Math.round(mousePosition.distance(oldPosition));
                    if((speed > 15 && speed < 59 ) && egg == 0){
                        egg = 1
                        soundGood.play();
                        
                    }else if(speed >= 60 && egg == 0){
                        alert("Oeuf cassé");
                        soundWrong.play();
                        ending = 22;
                        
                    }
                    if(egg == 1 && speed > 70){
                        egg = 2
                        soundGood.play();
                        if(echec == 0){
                            ending = 21;
                        }else{
                            ending = 22;
                        }
                    }
                }
                oldPosition = new Phaser.Math.Vector2(dragX,dragY);
            }
        })

        eggsObject.on('dragend', function(pointer, dragX, dragY, dropped){
            console.log("X" + eggsObject.x);
            console.log("Y" + eggsObject.y);
        })
        
        this.physics.add.overlap(poeleObject, eggsObject, this.eggBreaker,null);

    }
    update(){
        if(ending == 21 || ending == 22){
            this.clickButton();
        }
        console.log(ending);
    }

    clickButton() {
        levelCalled = 3;
        this.scene.switch("Ending");
    }

}
