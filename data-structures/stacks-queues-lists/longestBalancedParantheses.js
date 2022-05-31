/* Give an algorithm that takes a string S consisting of opening and closing
parentheses, say )()(())()()))())))(, and ﬁnds the length of the longest balanced
parentheses in S, which is 12 in the example above. (Hint: The solution is not
necessarily a contiguous run of parenthesis from S.) */

function problem(input) {
  const stack = [];
  let inputSliced = input;
  let balancedParenthesesLength = 0;

  if(inputSliced.startsWith(")")) {
    inputSliced = inputSliced.slice(1);
  }

  if(inputSliced.endsWith("(")) {
    inputSliced = inputSliced.slice(0, -1);
  }

  for(let i = 0; i < inputSliced.length; i++) {
    const oppositeParen = input[i] === "(" ? ")" : "(";

    if(stack[stack.length - 1] === oppositeParen) {
      stack.pop();
      balancedParenthesesLength += 2;
    } else {
      stack.push(input[i]);
    }
  }

  return balancedParenthesesLength;
}
