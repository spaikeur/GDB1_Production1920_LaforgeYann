class Level3 extends Phaser.Scene {
    constructor() {
        super ("Level3");
        
    }

    preload(){
        this.load.image('fond', 'Assets/Level3 - Scene.png');
        this.load.video('timer', 'Animation/timer.mp4','canplay', false, true);
        this.load.spritesheet('grub', 'Assets/Spritesheet/Level3 - Object - Grub2.png',{
            frameWidth : 312,
            frameHeight : 715
        });
        // this.load.image('grub','Assets/Spritesheet/Level3 - Object - Grub.png');
        this.load.spritesheet('plat', 'Assets/Spritesheet/Level3 - Object - Plat.png',{
            frameWidth : 429.127,
            frameHeight : 68.746
        });
        this.load.spritesheet('fourchette', 'Assets/Spritesheet/Level3 - Object - Fourchette.png',{
            frameWidth : 399.288,
            frameHeight : 36.69 
        });


    }
    create(){
        
        this.time.addEvent({
            delay: 9000,
            callback: () => {
                ending = 31;
            },
        })

        this.add.video(70,540,'timer').play(); //timer position
        this.add.image(154, 0, 'fond').setOrigin(0, 0);
        
        var fourchette = this.add.image(1610.143, 585.775, 'fourchette').setInteractive({draggable: true});
        
        fourchette.on('drag', function(pointer, dragX, dragY){
            fourchette.setPosition(dragX, dragY);
            
        })
        fourchette.on('dragend', function(pointer, dragX, dragY, dropped){
            console.log("X" + fourchette.x);
            console.log("Y" + fourchette.y);
        })

        var grub = this.add.sprite(330, 680, 'grub');
        
        var plat = this.add.sprite(1000, 590, 'plat');
        
        alert("Par manque de temps, ce niveau n'est pas termine.");
        alert("Ceci est par conséquent la fin de la demo.");
    }

    update(){
        if(ending == 31 || ending == 32){
            this.clickButton();
        }
        console.log(ending);
    }

    clickButton() {
        this.scene.switch("Ending");
    }
}

