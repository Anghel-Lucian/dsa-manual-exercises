/* A common problem for compilers and text editors is determining whether
the parentheses in a string are balanced and properly nested. For example, the
string ((())())() contains properly nested pairs of parentheses, while the strings
)()( and ()) do not. Give an algorithm that returns true if a string contains
properly nested and balanced parentheses, and false if otherwise. For full credit,
identify the position of the ﬁrst oﬀending parenthesis if the string is not properly
nested and balanced. */

// input = )()(
// output = false

// input = (()))
// output = false

// input = ()(()()(()))
// output = true

function problem(input) {
  const stack = [];

  if(input.startsWith(")") || input.endsWith("(")) return false;

  for(let i = 0; i < input.length; i++) {
    const oppositeParen = input[i] === "(" ? ")" : "(";

    if(stack[stack.length - 1] === oppositeParen) {
      stack.pop();
    } else {
      stack.push(input[i]);
    }
  }

  return stack.length === 0;
}

console.log(problem("(()()"));