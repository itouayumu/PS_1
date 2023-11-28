
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
    }

    // シーン初期化処理
    create() {
         // 単体画像をシーンに追加(X座標,Y座標,画像名)
        this.add.image(400, 225, 'sky');

        this.player = this.add.image(500, 350, 'taro');

    
        this.player_direction = 1;

    }
    
  // 毎フレーム実行される繰り返し処理
    update() {
        // プレイヤーの向きフラグを変更

        
        // if (this.player.y >= D_WIDTH - 400) this.player_direction3 = -1;
        // if (this.player.y <= 30) this.player_direction3 = 1;
        // if (this.player.x >= D_WIDTH - 100) this.player_direction3 = -1;
        // if (this.player.x <= 0) this.player_direction3 = 1;
        // // プレイヤーの移動
        // if (this.player_direction3 == 1) {
        //     this.player.y += 5;// 横方向へ移動を設定
        //     this.player.x += 5;// 横方向へ移動を設定
        // } else {
        //     this.player.y -= 5;// 横方向へ移動を設定
        //     this.player.x -= 5;// 横方向へ移動を設定
        // }
        
    }

}
