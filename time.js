const 시작_시간 = new Date();

let 타이머_실행중 = false;

function settime() {
  if (!타이머_실행중) return;
  const 현재_시간 = new Date();
  const 흐른_시간 = new Date(현재_시간 - 시작_시간);
  const 분 = 흐른_시간.getMinutes().toString();
  const 초 = 흐른_시간.getSeconds().toString();
  const timeH1 = document.querySelector(".time");
  timeH1.innerText = `${분.padStart(2, "0")}:${초.padStart(2, "0")}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const timeH1 = document.querySelector(".time");
  timeH1.addEventListener("click", () => {
    if (!타이머_실행중) {
      타이머_실행중 = true;
      setInterval(settime, 1000);
    }
  });
});
