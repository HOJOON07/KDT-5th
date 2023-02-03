const quiz = ["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"];

function solution(quiz) {
  var answer = [];
  for (let i = 0; i < quiz.length; i++) {
    const quizarr = quiz[i].split(" ");
    //["3,-,4,=,-3"]//
    for (let j = 0; j < quizarr.length; j++) {
      const numberarr = Number(quizarr[j]);
    }
    // console.log("quizarr:", quizarr);
    // console.log((quizarr[0], quizarr[1], quizarr[2]) == quizarr[4]);
    // console.log(typeof quizarr[0]);
    const quizstring = numberarr.join("");
    //[3-4=-3]//
    console.log("quizstring:", quizstring);
    typeof quizstring;
    if (quizstring == true) {
      answer.push("O");
    } else {
      answer.push("`X");
    }
  }

  return answer;
}

console.log(solution(quiz));
//     ["3 - 4 = -3","5 + 6 = 11"]
//     [3,-,4,=,-3]
//     024

//     [i]를 split
//     1.i->공백으로 나누고
//     조건에 맞으면 o,x를 리턴s
//     결과를 빈배열에 push 함 .
