document.getElementById("btn-start").addEventListener("click", function () {
  // 隱藏開始按鈕
  this.style.display = "none";

  // 顯示選秀結果區域
  document.getElementById("draft-result").classList.add("active");

  // 隨機洗牌三位玩家
  const players = ["Hank", "Alfred", "Allen"];
  for (let i = players.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [players[i], players[j]] = [players[j], players[i]];
  }

  // 100ms 間隔輪播三位玩家，總共 3 秒，最後定格
  const playerEls = [
    document.getElementById("player-1"),
    document.getElementById("player-2"),
    document.getElementById("player-3"),
  ];
  let count = 0;
  const interval = setInterval(() => {
    for (let i = 0; i < 3; i++) {
      playerEls[i].textContent = players[(count + i) % 3];
    }
    count++;
    if (count >= 30) {
      // 100ms * 30 = 3s
      clearInterval(interval);
      // 最後定格結果
      for (let i = 0; i < 3; i++) {
        playerEls[i].textContent = players[i];
      }
    }
  }, 100);
});
