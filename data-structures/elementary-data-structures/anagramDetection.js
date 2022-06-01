/* Two strings X and Y are anagrams if the letters of X can be rearranged
to form Y . For example, silent/listen, and incest/insect are anagrams. Give an
efficient algorithm to determine whether strings X and Y are anagrams. */

function problem(x, y) {
  if(x.length !== y.length) return false;

  return x.split("").sort().join() === y.split("").sort().join();
}