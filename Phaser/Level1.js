class Level1 extends Phaser.Scene {
    constructor() {
        super ("Level1"); 
    }

    preload(){
        
        this.load.image('backgroundLevel1', 'Assets/Level1 - Scene.png');
        this.load.video('timer', 'Animation/timer.mp4','canplay', false, true);

        this.load.spritesheet('alarm', 'Assets/Spritesheet/Level1 - Object - Alarm.png',{
            frameWidth : 90 ,
            framHeight : 100
        });
        this.load.spritesheet('waterG', 'Assets/Spritesheet/Level1 - Object - Water Glass.png',{
            frameWidth : 68.286,
            framHeight : 73.387 
        });
        this.load.spritesheet('comforter', 'Assets/Spritesheet/Level1 - Object - Couette.png',{
            frameWidth : 1010.764,
            frameHeight : 290.277
        });
        
        this.load.audio("Good","Sound/Good.mp3");
        this.load.audio("Wrong","Sound/Wrong.mp3");

    }
    create(){
        var alarm = 0;
        var waterG = 0;
        var comforter = 0;
        var compt = 0;
        var echec = 0;

        this.time.addEvent({
            delay: 9000,
            callback: () => {
                if(compt != 3){
                    echec = 1; 
                }
            },
        })
        
        this.add.video(70,540,'timer').play(); //timer position
        this.add.image(155, 0, 'backgroundLevel1').setOrigin(0, 0); //Background position
        var soundGood = this.sound.add('Good');
        var soundWrong = this.sound.add('Wrong');
        
        var waterGObject = this.add.sprite(1607.857, 442.225, 'waterG').setInteractive({draggable: true});
        waterGObject.on('drag', function(pointer, dragX, dragY){
            waterGObject.setPosition(dragX, dragY);
            
        }) //Déplacement en drag
        waterGObject.on('dragend', function(pointer, dragX, dragY, dropped){
            if((waterGObject.x <= 1200 && waterGObject.x >= 850 ) && (waterGObject.y <= 390 && waterGObject.y >= 280) && waterG == 0){
                waterGObject.anims.play('dropW');
                waterG = 1;
                soundGood.play();
                compt++;
                waterGObject.setPosition(1607.857, 442.225);
                console.log("verre d'eau" + waterG + "compteur" + compt);
                if(compt == 3){
                    if(echec == 1){
                        ending = 12;
                        
                    }else{
                        ending = 11;
                        
                    }
                }
            }else{
                waterGObject.setPosition(1607.857, 442.225);
                soundWrong.play();
            }
        })//End du drag

        

        var alarmObject = this.add.sprite(365.709, 435.921, 'alarm').setInteractive();
        alarmObject.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
            if(alarm == 0){
                soundGood.play();
                alarm = 1;
                compt++;
                console.log("Alarm" + alarm + "compteur" + compt);
                if(compt == 3){
                    if(echec == 1){
                        ending = 12;
                       
                    }else{
                        ending = 11;
                        
                    }
                }
            }
        });//Toucher l'alarme
        

        var comforterObject = this.add.image(974.289, 586.099, 'comforter').setInteractive({draggable: true});
        comforterObject.on('dragstart', function(pointer, dragX, dragY){
            
        })

        comforterObject.on('drag', function(pointer, dragX, dragY){
            if(660 > comforterObject.y && comforterObject.y > 585){
                
                comforterObject.y = dragY;
                if(comforterObject.y <= 660 && comforter == 0){
                    soundGood.play();
                    comforter = 1; 
                    compt++;
                    console.log("couette" + comforter + "compteur" + compt);
                    if(compt == 3){
                        if(echec == 1){
                            ending = 12;
                            
                        }else{
                            ending = 11;
                            
                        }
                    }
                }
            }
        })

        comforterObject.on('dragend', function(pointer, dragX, dragY, dropped){
            comforterObject.setPosition(974.289, 586.099);
            
        })

        comforterObject.setInteractive().on('pointerdown', function(pointer, localX, localY, event){
            // comforterCompt++;
            // console.log("prit en compte")
            // this.scene.time.addEvent({
			// 	delay: 350,
			// 	callback: () => {
            //         console.log("Ah ?")
			// 		if(comforterCompt == 2 && comforter == 0){
            //             console.log("fait")
            //             comforter = 1;
            //             compt++;
            //         }
			// 	},
            // })
            // comforterCompt++;
        });
        
        this.anims.create({ //--Player attack Y--
            key: 'dropW',
            frames: this.anims.generateFrameNumbers('waterG', {
                start: 0,
                end: 5
            }),
            frameRate: 6,
            repeat: 0
        });
    }
    update(){
        if(ending == 11 || ending == 12){
            this.clickButton();
        }
    }

    clickButton() {
        levelCalled = 2;
        this.scene.switch("Ending");
    }
}
