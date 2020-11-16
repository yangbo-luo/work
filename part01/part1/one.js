const fp = require('lodash/fp')
// 数据
// horsepower 马力，dollar_value 价格，in_stock 库存
const cars = [
    { name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true },
    { name: 'Spyker C12 Zagato', horsepower: 650, dollar_value: 648000, in_stock: false },
    { name: 'Jaguar XKR-S', horsepower: 550, dollar_value: 132000, in_stock: false },
    { name: 'Audi R8', horsepower: 525, dollar_value: 114200, in_stock: false },
    { name: 'Aston Martin One-77', horsepower: 750, dollar_value: 1850000, in_stock: true },
    { name: 'Pagani Huayra', horsepower: 700, dollar_value: 1300000, in_stock: false }
]
/**
 * 练习1：使用函数组合 fp.flowRight() 重新实现下面这个函数
 */
let lastInStockFlag = fp.flowRight(fp.prop('in_stock'), fp.last)
console.log(lastInStockFlag(cars));
/**
 * 练习1：使用 fp.flowRight()、fp.prop、fp.first() 获取第一个 car 的 name
 */
let firstCarName = fp.flowRight(fp.prop('name'), fp.first);
console.log(firstCarName(cars));
/**
 * 练习3：使用帮助函数 _average 重构 averageDollarValue，使用函数组合的方式实现
 */
let _average = function (xs) {
    return fp.reduce(fp.add, 0, xs) / xs.length
} // 无需改动
let average = fp.flowRight(_average, fp.map(fp.curry(fp.prop)('dollar_value')))
console.log(average(cars));
/**
 * 练习4：使用 flowRight 写一个 sanitizeNames() 函数，返回一个下划线连接的小写字符串，把数组中的 name 转换为这种形式：例如：sanitizeNames(["Hello World"])=>["hello_world"]
 */
let arr = ['Hello    World  ']
let _underscore = fp.replace(/\W+/g,'_');
let sanitizeNames = fp.map(fp.flowRight(_underscore, fp.toLower, fp.trim))
console.log(sanitizeNames(arr));