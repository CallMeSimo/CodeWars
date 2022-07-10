const N = [2, 7, 5, 6];

function solution(N, k) {
  const process = N;
  for (let rep = 0; rep < k; rep++) {
    process.unshift(N[N.length - 1]);
    process.pop();
  }
  console.log(process);
}

solution(N, 4);
