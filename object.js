let game = {
    startTime: null,
    displayArea: document.getElementById('display-area'),
    start: function() {
      game.startTime = Date.now();
      document.body.onkeydown = game.stop;
    },
    stop: function() {
      let currentTime = Date.now();
      let seconds = (currentTime - game.startTime) / 1000;
      if (9.5 <= seconds && seconds <= 10.5) {
        game.displayArea.innerText = seconds + '秒でした。すごい。';
      } else {
        game.displayArea.innerText = seconds + '秒でした。残念。';
      }
    }
  };
  if (confirm('OKを押して10秒だと思ったら何かキーを押して下さい')) {
    game.start();
  }

function cat(){
    let catObj = {
        name: [`茶マル`, `chamalu`],
        age: 11,
        feature: `毛並みが茶色くて、丸っこい猫です。`,
        interests: [`食事`, `昼寝`, `夜の散歩`],
        bio: function () {
          document.write(`${catObj.name[0]} は ${catObj.age} 歳の ${catObj.feature}`);
        },
        greeting: function() {
          document.write(`にゃおーにゃおにゃお！（${catObj.interests[0]}と${catObj.interests[1]}が大好きな${catObj.name[0]}だよ！）`);
        }
      }
      catObj.bio(); // bio 関数を実行して、猫が自己紹介をする。
      catObj.greeting(); // greeting 関数を実行して、猫が挨拶をする。
}
cat();