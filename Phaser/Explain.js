class Explain extends Phaser.Scene {
    constructor() {
        super ("Explain");
    }

    preload(){
        this.load.image('Level1ExplainBackground', 'Assets/Level1 - Explication.png');
        this.load.image('Level2ExplainBackground', 'Assets/Level2 - Explication.png');
        this.load.image('Level3ExplainBackground', 'Assets/Level3 - Explication.png');
        
    }
    create(){
        
    
    }

    update(){ //Je sais que ça pose des problèmes d'optimisation mais j'ai pas le choix, quand je le met dans create ça ne marche pas
        
        if(levelCalled == 1){
            var img = this.add.image(0, 0, 'Level1ExplainBackground').setOrigin(0,0).setInteractive({ useHandCursor: true });
        }else if(levelCalled == 2){
            var img = this.add.image(0, 0, 'Level2ExplainBackground').setOrigin(0,0).setInteractive({ useHandCursor: true });
        }else if(levelCalled == 3){
            var img = this.add.image(0, 0, 'Level3ExplainBackground').setOrigin(0,0).setInteractive({ useHandCursor: true });
        }
        img.on("pointerdown",  () => this.clickButton());
    }

    clickButton() {
        if(levelCalled == 1){
            this.scene.switch("Level1");
        }else if(levelCalled == 2){
            this.scene.switch("Level2");
        }else if(levelCalled == 3){
            this.scene.switch("Level3");
        }
    }
}