/* The Grinch is given the job of partitioning 2n players into two teams of n
players each. Each player has a numerical rating that measures how good he or
she is at the game. The Grinch seeks to divide the players as unfairly as possible,
so as to create the biggest possible talent imbalance between the teams. Show
how the Grinch can do the job in O(n log n) time. */

// sort items
// split the items in half representing the teams

function problem(players) {
  const half = players.length / 2;

  const sortedPlayers = mergeSort(players);

  return [sortedPlayers.splice(0, half), sortedPlayers];
}

function merge(left, right) {
  let sortedArr = [];

  while(left.length && right.length) {
    if(left[0]< right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
  const half = arr.length / 2;

  if(arr.length <= 1) return arr;

  const left = arr.splice(0, half);
  const right = arr;

  return merge(mergeSort(left), mergeSort(right));
}

const players = [7, 3, 6, 10, 6, 14, 18, 2, 1, 13]

const [teamWeak, teamStrong] = problem(players);
console.log(teamWeak, teamStrong);