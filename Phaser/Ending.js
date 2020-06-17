class Ending extends Phaser.Scene {
    constructor() {
        super ("Ending");
    }

    preload(){

        this.load.image('GEndingLevel1', 'Assets/Level1 - GoodEnding.png');
        this.load.image('BEndingLevel1', 'Assets/Level1 - BadEnding.png');
        this.load.image('GEndingLevel2', 'Assets/Level2 - GoodEnding.png');
        this.load.image('BEndingLevel2', 'Assets/Level2 - BadEnding.png');
        this.load.image('GEndingLevel3', 'Assets/Level3 - GoodEnding.png');
        this.load.image('BEndingLevel3', 'Assets/Level3 - BadEnding.png');   
    }

    create(){
        
        
    }

    update(){ //Je sais que ça pose des problèmes d'optimisation mais j'ai pas le choix, quand je le met dans create ça ne marche pas
        if(ending == 11){
            var imgEnding = this.add.image(0, 0, 'GEndingLevel1').setOrigin(0,0).setInteractive({ useHandCursor: true });
        }else if(ending == 12){
            var imgEnding = this.add.image(0, 0, 'BEndingLevel1').setOrigin(0,0).setInteractive({ useHandCursor: true });
        }else if(ending == 21){
            var imgEnding = this.add.image(0, 0, 'GEndingLevel2').setOrigin(0,0).setInteractive({ useHandCursor: true });
        }else if(ending == 22){
            var imgEnding = this.add.image(0, 0, 'BEndingLevel2').setOrigin(0,0).setInteractive({ useHandCursor: true });
        }else if(ending == 31){
            var imgEnding = this.add.image(0, 0, 'GEndingLevel3').setOrigin(0,0).setInteractive({ useHandCursor: true });
        }else if(ending == 32){
            var imgEnding = this.add.image(0, 0, 'BEndingLevel3').setOrigin(0,0).setInteractive({ useHandCursor: true });
        }
        imgEnding.on("pointerdown",  () => this.clickButton());
        
    }

    clickButton() {
        this.scene.switch("Explain");
    }
}