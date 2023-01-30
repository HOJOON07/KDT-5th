num_list = [1, 2, 3, 4, 5];

function solution(num_list) {
  let answer = [];
  let x = [];
  let y = [];
  for (let i = 0; i < num_list.length; i++) {
    if (i % 2 === 0) {
      return x.push(i);
    } else {
      return y.push(i);
    }
  }
  console.log(x);
  console.log(y);
  return (answer = [x.length - 1, y.length - 1]);
}
