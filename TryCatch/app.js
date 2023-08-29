//try-catch문의 기본 구조
// try {
//     hello.toUpperCase();
// } catch {
//     console.log("ERROR!!!!")
// }
// hello.toUpperCase();

// console.log("AFTER!")

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } 
    // catch에 특정 오류나 오류가 있는 액세스 권한 부여
    catch (e) {
        console.log("Please pass a string next time!");
    }
}