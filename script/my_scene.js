
// MyScene1クラス
// 他のJSファイルから呼び出された場合はシーンを返す
class MyScene extends Phaser.Scene {

    // 継承した「Phaser.Scene」クラスのコンストラクタの呼び出し
    constructor() {
        super({ key: 'MyScene', active: true });
    }

    // シーンの事前読み込み処理
    preload() {
         // 画像の読み込み(使用する時の名前, パス)
        this.load.image('sky', 'assets/background.png');
        this.load.image('taro', 'assets/taro.png');
        this.load.image('jiro', 'assets/taro.png');
    }

    // シーン初期化処理
    create() {
         // 単体画像をシーンに追加(X座標,Y座標,画像名)
        this.add.image(400, 225, 'sky');

        const player = this.physics.add.sprite(500, 350, 'taro');
        this.player = player
        this.player.angle = 0;
        const player2 = this.physics.add.sprite(400, 350, 'jiro');
        this.player2 = player2

        this._leftTime = 'MyWorld';
        this._message1 = 'hello!';
        this._message2 = 'hey!';
  



    }
    
  // 毎フレーム実行される繰り返し処理
    update() {




        //  if (this.player.x >= D_WIDTH - 100) this.player_direction = -1;
        //  if (this.player.x <= 450) this.player_direction = 1;
        //  if (this.player_direction == 1) {
        //      this.player.setVelocityX(100);
        //      this.player.setVelocityY(-100);
        //  } else {
        //     this.player.setVelocityX(-100);
        //     this.player.setVelocityY(100);
        //  }


        // if (this.player.y >= D_WIDTH - 400) this.player_direction3 = -1;
        // if (this.player.y <= 30) this.player_direction3 = 1;
        // if (this.player.x >= D_WIDTH - 100) this.player_direction3 = -1;
        // if (this.player.x <= 0) this.player_direction3 = 1;

        //     this.player.y -= 5;
        //     this.player.x += 5;

        // this.player.angle += 5;
        // this.player.setAngle( this.player.angle );
        // if (this.player.x >= D_WIDTH - 100) this.player_direction = 1;
        //  if (this.player_direction == 1) {
        //     reset
        //  }

        let cursors = this.input.keyboard.createCursorKeys();

        if (cursors.up.isDown) {



        this.player2.y -= 50;
        this.player.y += 50;


        } else if (cursors.down.isDown) {

 

        this.player2.y += 5;
        this.player.y -= 50;


        } else if (cursors.left.isDown) {


        this.player2.x -= 50;
        this.player.x += 50;


        } else if (cursors.right.isDown) {


        this.player2.x += 50;
        this.player.x -= 50;
        }
    }

}
