const { Container, Maybe } = require('./support')
const fp = require('lodash/fp')
/**
 * 练习1：使用 fp.add(x, y) 和 fp.map(f, x) 创建一个能让 functor 里的值增加的函数 ex1
 */

let maybe = Maybe.of([5, 6, 1])


let ex1 = fp.map(fp.add(1))

maybe = maybe.map(ex1)
    .map(ex1)
    .map(ex1)
/**
 * 练习2：实现一个函数 ex2 ，能够使用 fp.first 获取列表的第一个元素
 */

let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
var firstStr = '';
let ex2 = (_arr) => {
    firstStr = fp.first(_arr)
    return _arr
}
xs = xs.map(ex2)
/**
 * 练习3：实现一个函数 ex3 ，使用 safeProp 和 fp.first 找到 user 的名字的首字母
 */
let safeProp = fp.curry(function(x, o) {
  return Maybe.of(o[x])
})
let user = { id: 2, name: 'Albert' }

let ex3 = (_user)=>{
  return safeProp('name')(_user).map(fp.flowRight(fp.first,fp.split('')))
}
/**
 * 练习4：使用 Maybe 重写 ex4，不要有 if 语句
 */

let ex4 = function (n) {
  if(n){
      return parseInt(n)
  }
}

ex4 = (n)=>{
  return Maybe.of(n)
      .map(x=>parseInt(x))._value
}