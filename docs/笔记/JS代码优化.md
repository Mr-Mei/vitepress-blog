---
title: JS代码优化
date: 2024-12-30
info: 代码优化
prev: false
next: false
sidebar: true,
tags:
  - optimizing
---

# JS 代码优化

## 1. 合理使用对象

### 1.1 多种条件(初始)

```ts
const a = 1
let res
switch (a) {
  case 1:
    res = 'one'
    break
  case 2:
    res = 'two'
    break
  // 超级多...
}
console.log(res) // one
```

### 1.2 利用对象(优化)

```ts
const a = 1
const mapping = {
  1: 'one',
  2: 'two',
  // ...超级多的键值对
}

const res = mapping[a] ?? 'unknown'
console.log(res) // one
```

## 2. 合理使用数组 + includes

### 2.1 多个或进行 if 判断(初始)

```ts
const a = 1

if (a === 1 || a === 2 || a === 3) {
  // ...
}
```

### 2.2 利用数组 + includes(优化)

```ts
const a = 1

if ([1, 2, 3].includes(a)) {
  // ...
}
```

## 3. ES6 默认参数

### 3.1 默认参数(初始)

```ts
const fn = (name) => {
  name = name || 'lhd'
  console.log(name)
}
```

### 3.2 ES6 默认参数(优化)

```ts
const fn = (name = 'lhd') => {
  console.log(name)
}
```

## 4. 嵌套解构赋值

### 4.1 链式取值(初始)

```ts
const obj = {
  eat: {
    breakfast: 'egg',
    dinner: 'meal',
  },
}

console.log(obj.eat.breakfast) // egg
console.log(obj.eat.dinner) // meal
```

### 4.2 嵌套解构(优化)

```ts
const {
  eat: { breakfast, dinner },
} = obj

console.log(breakfast) // egg
console.log(dinner) // meal
```

## 5. 三元代替 if

### 5.1 if 赋值(初始)

```ts
let player
let no = 24
if (no === 24) {
  player = 'kobe'
} else {
  player = 'james'
}
```

### 5.2 三元代替(优化)

```ts
let no = 24
const name = no === 24 ? 'kobe' : 'james'
```

## 6. 多 if 的 return

### 6.1 else if(初始)

```ts
const a = 1
const fn = () => {
  if (a === 1) {
    return 1
  } else if (a === 2) {
    return 2
  } else if (a === 3) {
    return 3
  }
}
```

### 6.2 if(优化)

```ts
const a = 1
const fn = () => {
  if (a === 1) return 1
  if (a === 2) return 2
  if (a === 3) return 3
}
```

## 7. if 判断假值

### 7.1 ===判断(初始)

```ts
if (key === null) {
  // 进行对应操作
}
```

### 7.2 自动转布尔值(优化)

```ts
if (!key) {
  // 进行对应操作
}
```

## 8. Vue 不需响应式的数据

### 8.1 初始

```ts
  data() {
    return {
      selects: [
        {label: '选项一', value: 1},
        {label: '选项二', value: 2},
        {label: '选项三', value: 3}
      ]
    };
  }
```

### 8.2 优化

```ts
  data() {
    this.selects = [
      {label: '选项一', value: 1},
      {label: '选项二', value: 2},
      {label: '选项三', value: 3}
    ]
    return {}
  }
```

## 9. 定时器、绑定事件的清除

```ts
export default {
  data() {
    return {
      timer: null,
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      console.log('1')
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
    this.timer = null
  },
}
```

## 10. 小程序多次 setData 合并

### 10.1 初始

```ts
this.setData({ name: 'lhd' })
if (condition1) {
  this.setData({ age: 22 })
}
if (condition2) {
  this.setData({ gender: '男' })
}
```

### 10.2 优化

```ts
const model = { name: 'lhd' }
if (condition1) model.age = 22
if (condition2) model.gender = '男'
this.setData(model)
```

## 11. 简短函数调用

### 11.1 初始

```ts
if (temp == '1') {
  test1()
} else {
  test2()
}
```

### 11.2 优化

```ts
;(temp == '1' ? test1 : test2)()
```

## 12. 给多个变量赋值

### 12.1 初始

```ts
let test1, test2, test3
test1 = 1
test2 = 2
test3 = 3
```

### 12.2 优化

```ts
let [test1, test2, test3] = [1, 2, 3]
```

## 13. 使用可选链操作符 (Optional Chaining)

### 13.1 初始

```ts
if (obj && obj.child && obj.child.value) {
  console.log(obj.child.value)
}
```

### 13.2 优化

```ts
console.log(obj?.child?.value)
```

## 14. 空值合并运算符 ??

### 14.1 初始

```ts
let val = obj.value !== undefined && obj.value !== null ? obj.value : 'default'
```

### 14.2 优化

```ts
let val = obj.value ?? 'default'
```

## 15. Object.entries 遍历对象

### 15.1 初始

```ts
const obj = { a: 1, b: 2, c: 3 }
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key, obj[key])
  }
}
```

### 15.2 优化

```ts
Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value)
})
```

## 16. 使用模板字符串

### 16.1 初始

```ts
const name = 'Tom'
const greeting = 'Hello, ' + name + '!'
```

### 16.2 优化

```ts
const name = 'Tom'
const greeting = `Hello, ${name}!`
```
