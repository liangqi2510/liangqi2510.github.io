/* 正则表达式
  下文中GROUP指的是正则的匹配组。
  详见 https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll
*/
const regexStr = // GROUP 0 请忽略 
  '\\s*(' // GROUP 1 请忽略
  +
  '([a-zA-z\u4e00-\u9fa5][0-9a-zA-z\u4e00-\u9fa5]*)|' // GROUP 2 TOKEN ID 标识符
  +
  '(\\d*\\.*\\d+)|' // GROUP 3 NUMBER 数字字面量
  +
  '([=\\+\\-\\*\\(\\)])' // GROUP 4 OPERATOR 操作符
  +
  ')?' // ? 在此表示，匹配前面的模式 x 0 或 1 次

function Token(type, value) {
  this.isToken = true
  this.type = type
  this.value = value
}

Token.prototype.toString = function () {
  return `<${this.type}, ${this.value}>`
}

function getTokens(str) {
  const tokens = [];
  const regex = new RegExp(regexStr, 'g')
  const matchGroupsList = [...str.matchAll(regex)];
  for (const matchGroups of matchGroupsList) {
    const idToken = matchGroups[2];
    const numberToken = matchGroups[3];
    const operatorToken = matchGroups[4];

    if (idToken) {
      tokens.push(new Token('ID', idToken))
      continue
    }

    if (numberToken) {
      tokens.push(new Token('NUMBER', numberToken))
      continue
    }

    if (operatorToken) {
      tokens.push(new Token('OPERATOR', operatorToken))
      continue
    }
  }

  return tokens;
}

module.exports = {
  getTokens: getTokens
}