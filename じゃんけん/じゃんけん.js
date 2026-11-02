const hands = ["グー", "チョキ", "パー"];
const result = document.getElementById("result");
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");

// グーがクリックされたときの処理
rock.addEventListener("click", function () {
  play("グー");
});

// チョキがクリックされたときの処理
scissors.addEventListener("click", function () {
  play("チョキ");
});

// パーがクリックされたときの処理
paper.addEventListener("click", function () {
  play("パー");
});

// じゃんけんをする関数
function play(playerHand) {

  // コンピューターの手をランダムに決める
  const computerHand = hands[Math.floor(Math.random() * hands.length)];

  // 勝ち負けを判定する
  let message;

  // あいこの場合
  if (playerHand === computerHand) {
    message = "あいこ！";

  // プレイヤーが勝つ場合
  } else if (
    (playerHand === "グー" && computerHand === "チョキ") ||
    (playerHand === "チョキ" && computerHand === "パー") ||
    (playerHand === "パー" && computerHand === "グー")
  ) {
    message = "あなたの勝ち！";

  // それ以外は負け
  } else {
    message = "あなたの負け！";
  }

  // 結果を画面に表示する
  result.textContent =
    "あなた：" + playerHand +
    "　コンピューター：" + computerHand +
    "　→ " + message;
}
