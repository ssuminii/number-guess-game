let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];


// 유저가 번호를 입력한 후 go 버튼을 누름
playButton.addEventListener("click", play);
// 유저가 Reset버튼을 누르면 게임 reset
resetButton.addEventListener("click", reset);
// 유저가 input칸 클릭하면 전의 값 사라짐
userInput.addEventListener("focus", function() {userInput.value = "";});

// 랜덤 번호 지정
function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100) + 1;
    console.log("정답", computerNum);
}

// 유저가 번호 입력
// 유저가 랜덤 번호를 맞추면, 맞췄습니다!
// 랜덤번호 > 유저번호 down!
// 랜덤번호 < 유저번호 up!
function play() {
    let userValue = userInput.value;

    // 유저가 1~100 범위 밖 숫자를 입력하면 알려준다 (기회를 깎지 않음)
    if (userValue < 1 || userValue > 100) {
        chanceArea.textContent = "1과 100사이의 숫자를 입력해주세요."
        return;
    }
    
    // 유저가 이미 입력한 숫자를 또 입력하면 알려준다 (기회를 깎지 않음)
    if (history.includes(userValue)) {
        chanceArea.textContent = "이미 입력한 숫자입니다. 다른 숫자를 입력해주세요."
        return;
    }

    // 5번의 기회를 다 쓰면 게임이 끝남 (더이상 추측 불가, 버튼이 disable)
    chances--;
    chanceArea.textContent = `남은 기회는 ${chances}번 입니다.`

    if (userValue < computerNum) {
        resultArea.textContent = "UP!!"
    } else if (userValue > computerNum) {
        resultArea.textContent = "DOWN!!"
    } else {
        resultArea.textContent = "맞췄습니다!!"
        chanceArea.textContent = "축하드립니다!!";
        gameOver = true;
    }

    history.push(userValue);
    console.log(history);

    // 남은 기회가 0번이면 gameover
    if(chances < 1) {
        gameOver = true;
        resultArea.textContent = "";
        chanceArea.textContent = "실패하셨습니다. 다시 도전하려면 reset버튼을 눌러주세요";
    }
    // gameover 되었을 때 playbutton 비활성화
    if (gameOver == true) {
        playButton.disabled = true;
    }
}

// reset button
// user-input창 깨끗하게 정리
// 새로운 번호 생성
// text content 값 바뀜
function reset() {
    userInput.value = "";
    pickRandomNum();
    chanceArea.textContent = "기회는 5번입니다.";
    playButton.disabled = false;
    chances = 5;
}

pickRandomNum();

