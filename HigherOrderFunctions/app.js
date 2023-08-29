// ======================
// FUNCTIONS AS ARGUMENTS
// ======================

function callTwice(func) {
    func();
    func();
}

function callTenTimes(f) {
    for (let i = 0; i < 10; i++) {
        //f()는 함수 f가 전달하는 값을 실행시키게 함
        f();
    }
}


function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll);
}

//rollDie를 인수로 전달
//callTwice(rollDie())라고 적지 않음 -> 인수로 rollDie의 값을 전달해주는 것이기 때문
callTwice(rollDie)

// ====================
// RETURNING FUNCTIONS
// ====================

function makeMysteryFunc() {
    const rand = Math.random();     
    if (rand > 0.5) {
        return function () {
            console.log("CONGRATS, I AM A GOOD FUNCTION!")
            console.log("YOU WIN A MILLION DOLLARS!!")
        }
    } else {
        return function () {
            alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
        }
    }
}

//위의 방법보다 간단함
function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}



