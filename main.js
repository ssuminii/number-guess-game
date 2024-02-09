let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");



// 유저가 번호를 입력한 후 go 버튼을 누름
playButton.addEventListener("click", play);

// 랜덤 번호 지정
function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNum);
}

// 유저가 번호 입력
function play() {
    let userValue = userInput.value;
    if (userValue < computerNum) {
        resultArea.textContent = "UP!!"
    } else if (userValue > computerNum) {
        resultArea.textContent = "DOWN!!"
    } else {
        resultArea.textContent = "맞췄습니다!!"
    }
}

pickRandomNum();

// 유저가 랜덤 번호를 맞추면, 맞췄습니다!
// 랜덤번호 < 유저번호 down!
// 랜덤번호 > 유저번호 up!
// Reset버튼을 누르면 게임 reset
// 5번의 기회를 다 쓰면 게임이 끝남 (더이상 추측 불가, 버튼이 disable)
// 유저가 1~100 범위 밖 숫자를 입력하면 알려준다 (기회를 깎지 않음)
// 유저가 이미 입력한 숫자를 또 입력하면 알려준다 (기회를 깎지 않음)
