// ==============
// FUNCTION SCOPE
// ==============
let totalEggs = 0;
function collectEggs() {
    totalEggs = 6;
}
console.log(totalEggs);
collectEggs();
console.log(totalEggs);

// 함수를 만들 새의 변수 정의
const bird = 'Scarlet Macaw';
//함수 정의
function birdWatch() {
    //다른 새 변수 정의
    const bird = 'Great Blue Heron';
    console.log(bird);  
}
birdWatch()

// ==============
// BLOCK SCOPE
// ==============
let radius = 8;
if (radius > 0) {
    const PI = 3.14159;
    let msg = 'HIII!'
}
console.log(radius);
console.log(msg)

for (let i = 0; i < 5; i++) {
    let msg = "ASKLDJAKLSJD";
    console.log(msg)
}
console.log(msg)
console.log(i)

// ==============
// LEXICAL SCOPE
// ==============

//외부 함수 정의
function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman']
    
    //내부 함수 정의
    //내부에 함수를 정의해주면 범위 내에서 명확하게 접근할 수 있음
    function cryForHelp() {
        let color = 'purple';
        function inner() {
            for (let hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
            }
        }
        inner();
    }

    //함수 호출
    cryForHelp();
}