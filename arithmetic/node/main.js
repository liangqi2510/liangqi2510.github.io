const { getTokens } = require('./lexer');
const { parse } = require('./parser');

const tokens = getTokens('A = B - (C + D) + SUM(B, 1 + 2, 3)')
for (const token of tokens) {
  console.log(token.toString())
}

const formulaTree = parse(tokens)

console.log(JSON.stringify(formulaTree, null, 4))
