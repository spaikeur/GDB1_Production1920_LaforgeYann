class MainMenu extends Phaser.Scene {
    constructor() {
        super ("MainMenu");
    }

    preload(){
        this.load.image('Level1ExplainBackground', 'Assets/Level1 - Explication.png');
        this.load.image('Level2ExplainBackground', 'Assets/Level2 - Explication.png');
        this.load.image('Level3ExplainBackground', 'Assets/Level3 - Explication.png');

        this.load.image('MainMenuBackground', 'Assets/MainMenu - Scene.png');
        this.load.image('startButton', 'Assets/MainMenu - Button.png')

        this.load.video('intro', 'Animation/Intro.mp4','canplay', false, true);
        this.load.audio("Good","Sound/Good.mp3");
        this.load.audio("Wrong","Sound/Wrong.mp3");
        
    }
    create(){
        
        this.add.image(0, 0, 'MainMenuBackground').setOrigin(0, 0);
        var startButton = this.add.image(1035.934,423.285, "startButton").setInteractive({ useHandCursor: true });
        var videoIntro = this.add.video(0,0,'intro').setOrigin(0,0).play(); //timer position
        
        duration = videoIntro.getDuration(); 

        this.time.addEvent({
            delay: 8850,
            callback: () => {
                videoIntro.destroy();
            },
        })
        

        startButton.on("pointerdown",  () => this.clickButton());
        
    }

    update(){

    }

    clickButton() {
       
        var soundGood = this.sound.add('Good');
        var soundWrong = this.sound.add('Wrong');
        alert("Bonjour ! Par manque de temps, cette demo ne contient pas d'animation");
        alert("A la place, les bonnes actions declencherons ce bruit la : ");
        soundGood.play();
        alert("Et les mauvaise celle la : ");
        soundWrong.play();
        alert("Prenez bien soin de votre grub ! ");

        alert("Surtout : Ne restez pas plus d'une munite sur les écran d'explication et de fin.");
        alert("Possible surtravail de votre carte graphique et ralentissement de votre l'ordinateur.");

        levelCalled = 1;
        this.scene.switch("Explain");
    }
}