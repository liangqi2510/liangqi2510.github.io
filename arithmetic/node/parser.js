function assert(a,b) {
  if (a !== b) {
    return new Error('语法错误')
  }
}

function parse(tokens) {

  function top() {
    return tokens[0] || {}
  }

  function next() {
    return tokens.shift()
  }

  // 因子
  // term_ -> (expression)|id|fncall
  function factor() {
    if (top() && top().value === '(') {
      assert(next().value, '(')
      const result = expression()
      assert(next().value, ')')
      return result
    } else {
      const id = next()
      if (top() && top().value === '(') {
        const arguments = []
        if (top() && top().value === '(') {
          assert(next().value, ')')
          while (top() && top().value !== ')') {
            arguments.push(expression())
          }
        }
        assert(next().value, ')')
        return {
          type: 'fncall',
          fn: id,
          arguments,
        }
      } else {
        return id
      }
    }
  }

  // 项
  // term_ -> * factor term_
  // term_ -> / factor term_
  function term_(left) {
    if (top() && (
      top().value === '+' || top().value === '-')
    ) {
      const operator = next()
      const rightFactor = factor()
      const result = {
        type: 'expression',
        left,
        operator,
        right: rightFactor,
      }

      return expression_(result)
    } else {
      return left
    }
  }

  // 项
  // term -> factor term_
  function term() {
    const left = factor()
    return term_(left)
  }

  // expression_ -> + term expression_ | ε
  // expression_ -> - term expression_ | ε
  function expression_(left) {
    if (top() && (
      top().value === '+' || top().value === '-')
    ) {
      const operator = next()
      const rightTerm = term()
      const result = {
        type: 'expression',
        left,
        operator,
        right: rightTerm,
      }

      return expression_(result)
    } else {
      return left
    }
  }

  // 表达式
  // expression -> term expression_
  function expression() {
    const left = term()
    return expression_(left)
  }

  // formula -> id = expression
  function formula() {
    const letfToken = next()

    assert(next().value, '=')

    return {
      left: letfToken,
      right: expression()
    }
  }

  const formulaRoot = formula()
  return formulaRoot
}

module.exports = {
  parse: parse
}