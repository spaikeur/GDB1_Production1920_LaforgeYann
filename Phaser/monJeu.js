var config = {
	type: Phaser.AUTO,
	width: 1920,
	height: 1080,
	backgroundColor: 0x000000,
	physics: {
		default: 'arcade',
		arcade: {
			debug: true
		}
	},
	scene: [MainMenu,Explain,Ending,Level1,Level2,Level3]
	//
}


var game = new Phaser.Game(config);


