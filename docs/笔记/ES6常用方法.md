---
title: ES6常用方法
date: 2025-03-06
info: 方法
prev: false
next: false
sidebar: true,
tags:
  - skill
---

# ES6常用方法

## ES6新特性

### 1、let和const

在ECMAScript 6（ES6）中，`let` 和 `const` 是两种新的变量声明方式，相较于传统的 `var` 声明，它们引入了一些新的特性和行为。以下是关于 `let` 和 `const` 的总结：

#### 1.1 作用域：

- `let` 和 `const` 声明的变量都具有块级作用域，而不是函数作用域。块级作用域指的是变量只在声明它的块（通常是花括号内的代码块）内部可见，而不是整个函数。
- `var` 声明的变量则具有函数作用域。

```JavaScript
{
  let x = 10;
  console.log(x); // 可以访问
}

console.log(x); // 报错，x 不可访问
```

#### 1.2 变量提升：

- `let` 和 `const` 不会被提升（hoist）到作用域顶部，而是留在它们被定义的位置。这意味着在声明之前访问这些变量会导致暂时性死区（Temporal Dead Zone，TDZ）。

```JavaScript
console.log(x); // 报错，x 在这里还没有被定义let x = 10;
```

#### 1.3 重复声明：

- 使用 `let` 重复声明同一变量会引发错误。

```JavaScript
let x = 5;
let x = 10; // 报错，重复声明
```

- 使用 `const` 声明常量时，不允许重复声明，而且必须进行初始化。

```JavaScript
const y = 20;
const y = 30; // 报错，重复声明const z; // 报错，常量声明必须初始化
```

#### 1.4 赋值和重新赋值：

- 使用 `let` 声明的变量可以被重新赋值。

```JavaScript
let a = 5;
a = 10; // 可以重新赋值
```

- 使用 `const` 声明的变量是常量，一旦被赋值就不能再次赋值。

```JavaScript
const b = 15;
b = 20; // 报错，常量不能被重新赋值
```

#### 1.5 对象和数组：

- 使用 `const` 声明的变量引用的对象或数组可以被修改，但不能重新赋值为新的对象或数组。

```JavaScript
const obj = { key: 'value' };
obj.key = 'new value'; // 可以修改对象属性
obj.newKey = 'another value'; // 可以添加新属性// obj = { newKey: 'another value' }; // 报错，不能重新赋值为新对象
```

总体而言，`let` 主要用于声明可变变量，而 `const` 用于声明不可变的常量。选择使用哪个取决于变量是否需要在声明后重新赋值。

### 2、symbol

Symbol是ES6中引入的一种新的基本数据类型，用于表示一个独一无二的值，不能与其他数据类型进行运算。它是JavaScript中的第七种数据类型，与undefined、null、Number（数值）、String（字符串）、Boolean（布尔值）、Object（对象）并列。

你可以这样创建一个Symbol值：

```JavaScript
const a = Symbol();
console.log(a);  //Symbol()

// 因为Symbol是基本数据类型，而不是对象，不能 new 。 const a = new Symbol();//报错，Symbol is not a constructor
```

使用Symbol()创建一个Symbol类型的值并赋值给a变量后，你就得到了一个在内存中独一无二的值。现在除了通过变量a，任何人在任何作用域内都无法重新创建出这个值

```JavaScript
const a = Symbol();
const b = Symbol();
```

内存解构图

![img](https://uv4fs8d5x5w.feishu.cn/space/api/box/stream/download/asynccode/?code=MWRlMzI0MmJlZjkwY2ZjZDNmMzkwMjU4ZTQxODQ1YzhfT0lrbWFVelRQQXlpN2x0dzVWR2VVc2c2dWdnM2NvN09fVG9rZW46RmNwZGJaWEpIb3oyQmt4U3BOb2NzVmVzbjhiXzE3NDEyMjc2ODA6MTc0MTIzMTI4MF9WNA)

### 3、模板字符串

- 在ES6之前，处理模板字符串： 通过“\”和“+”来构建模板
- 对ES6来说: 用`${}`来界定； 反引号`(``)`直接搞定；

```JSON
<script>
    url="xxxxxx"
    // es6之前
    let html="<div>"+
    " <a>"+url+"</a>"+
    "</div>";
    //es6
    let eshtml=`<div>
        <a>${url}</a>
    </div>`
</script>
```

#### 3.1 字符串新方法（补充）

- `includes()`判断字符串是否包含参数字符串，返回boolean值。
- `startsWith() / endsWith()`，判断字符串是否以参数字符串开头或结尾。返回boolean值。这两个方法可以有第二个参数，一个数字，表示开始查找的位置。

```JavaScript
let str = 'blue,red,orange,white';
```

str.includes('blue');//true str.startsWith('blue');//true str.endsWith('blue');//false

- `repeat()`方法按指定次数返回一个新的字符串。

```JavaScript
console.log('hello'.repeat(2));   //'hellohello'
```

- `padStart()/padEnd()`，用参数字符串按给定长度从前面或后面补全字符串，返回新字符串。

```JavaScript
let arr = 'hell';
console.log(arr.padEnd(5,'o'));  //'hello'
console.log(arr.padEnd(6,'o'));  //'helloo'
console.log(arr.padEnd(6));  //'hell  ',如果没有指定将用空格代替

console.log(arr.padStart(5,'o')); //'ohell'
```

### 4、解构表达式

[解构赋值](https://so.csdn.net/so/search?q=解构赋值&spm=1001.2101.3001.7020)是对[赋值运算符](https://so.csdn.net/so/search?q=赋值运算符&spm=1001.2101.3001.7020)的扩展。它是一种针对**数组**或者**对象**进行[模式匹配](https://so.csdn.net/so/search?q=模式匹配&spm=1001.2101.3001.7020)，然后对其中的变量进行赋值。 **字符串**、以及ES6新增的**Map**和**Set** 都可以使用解构表达式

#### 4.1 数组解构

```JavaScript
let [a,b,c] = [1,2,3];
console.log(a,b,c);    //1,2,3
```

let [a,b,c] = [1,,3]; console.log(a,b,c); //1,undefined,3

let [a,,b] = [1,2,3]; console.log(a,b);//1,3

let [a,..b] = [1,2,3]; //…是剩余运算符，表示赋值运算符右边除第一个值外剩余的都赋值给b console.log(a,b);//1,[2,3]

#### 4.2 对象解构

对象的[解构赋值](https://so.csdn.net/so/search?q=解构赋值&spm=1001.2101.3001.7020)和数组类似，不过左边的变量名需要使用对象的属性名，并且用大括号{}而非中括号[]

```JavaScript
let obj = {
    name: "ren",
    age: 12,
    sex: "male"
};

let { name, age, sex } = obj; console.log(name, age, sex); //'ren' 12 'male'

let { name: myName, age: myAge, sex: mySex } = obj; //自定义变量名 console.log(myName, myAge, mySex); //'ren' 12 'male'
```

### 5、对象方面

#### 5.1 Map和Set

Map和Set属于es6新增加的对象

##### 5.1.1 Map

Map对象用于保存键值对，任何值JavaScript支持的值都可以作为一个键（key）或者一个值（value）。 与对象不同的是

1. object的键只能是**字符串**或ES6的**symbol**值，而Map可以是任何值。
2. Map对象有一个**size属性**，存储了键值对的个数，而object对象没有类似属性。

```JavaScript
let myMap = new Map([['name','ren'],['age',12]]);
console.log(myMap);  //{'name'=>'ren','age'=>12}

myMap.set('sex','male'); console.log(myMap); //{'name'=>'ren','age'=>12,'sex'=>'male'} console.log(myMap.size); //3

myMap.get('name'); //'ren' myMap.has('age'); //true myMap.delete('age'); //true myMap.has('age'); //false myMap.get('age'); //undefined
```

##### 5.1.2 Set

可以理解为后端的Set集合对象 Set对象和Map对象类似，但它存储不是键值对。类似数组，但它的**每个元素都是唯一的**。

```JavaScript
let mySet = new Set([1,2,3]);//里面要传一个数组，否则会报错
console.log(mySet);  //{1,2,3}

mySet.add(4); console.log(mySet); //{1,2,3,4}

mySet.delete(1); //true mySet.has(1); //false console.log(mySet); //{2,3,4}

利用Set对象**唯一性**的特点，可以轻松**实现数组的去重**
```

```JavaScript
let arr = [1,1,2,3,4,4];

let mySet = new Set(arr);

let newArr = Array.from(mySet); console.log(newArr); //[1,2,3,4]
```

#### 5.2 数组的新方法

- 新增的方法有：

1. `Array.from()`**是内置对象Array的方法，实例数组不能调用**
2. `includes()` 参数：数值 -------- 返回值：`true/false`
3. `map()`、`filter()` 参数：函数-------- 返回值：数组
4. `forEach()` 参数：函数-------- 返回值：`undefined`
5. `find()` 参数：函数-------- 返回值：数值
6. `some()`、`every()` 参数：函数-------- 返回值：`true/false`

##### 5.2.1 Array.from()方法

`Array.from()`方法可以将可迭代对象转换为新的数组。

- 函数可接受3个参数（后两个参数可以没有）：
  - 第一个表示将被转换的可迭代对象(如果只有一个参数就是把形参转变成数组)
  - 第二个是回调函数，将对每个数组元素应用该回调函数，然后返回新的值到新数组，
  - 第三个是回调函数内this的指向。

```JavaScript
let arr = [1, 2, 3];
let obj = {
    double(n) {
        return n * 2;
    }
}
console.log(Array.from(arr, function (n){
    return this.double(n);
}, obj)); // [2, 4, 6]
```

##### 5.2.2 includes()方法

参数：数值 -------- 返回值：`true/false` `includes()`方法------是查看数组中是否存在这个元素，存在就返回true,不存在就返回false

```JavaScript
let arr = [1,33,44,22,6,9]
let ary = arr.includes(22)
console.log(ary)
```

##### 5.2.3 map()、filter() 方法

参数：函数-------- 返回值：数组 `map()`方法-----要利用原数组经过运算后的数组，或者从对象数组中拿某个属性 `filter()`方法------是将符合挑选的筛选出来成为一个新数组，新数组不会影响旧数组。

```JavaScript
let arr = [1, 33, 44, 2, 6, 9];
<span class="token keyword">let</span> newarr1 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> v <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//newarr1-------[33, 44]</span>
<span class="token keyword">let</span> newarr2 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> v <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">//newarr2-------[1, 33, 44, 2, 6, 9]</span>

<span class="token keyword">let</span> newarr3 <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">v</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> v <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">//newarr3-------[false, true, true, false, false, false]</span>
<span class="token keyword">let</span> newarr4 <span class="token operator">=</span> arr
```

</script

##### 5.2.4 forEach()方法

参数：函数-------- 返回值：undefined

`forEach()` 方法------是循环遍历数组中的每一项，没有返回值

`find()`方法---------是查找数组中符合条件的第一个元素，直接将这个元素返回出来

```JavaScript
let arr = [1,33,44,2,6,9]
let a1= []
arr.forEach((v, i)=>{
  if (v > 10) {
    a1.push(arr[i])
  }
})
console.log(a1) [33,44]

let a2= arr.find(v => v 10) console.log(a2)
```

##### 5.2.5 find()方法

参数：函数-------- 返回值：数值

`find()`方法----------是查找数组中符合条件的第一个元素，直接将这个元素返回出来

```JavaScript
let arr = [1,33,44,2,6,9]
let a= arr.find(v => v > 10)
console.log(a) // 33
```

##### 5.2.6 some()、every() 方法

参数：函数-------- 返回值：`true/false`

`some()`方法------找到**一个符合**条件的就返回`true`,**所有都不符合**返回`false`。 `every()`方法------数组**所有值都符合**条件才会返回`true`,**有一个不符合**返回`false`。

```JavaScript
let arr = [1,2,3,4,6,11]

let newArr = arr.some(function(v){ return v 10 }) console.log(newArr) //true

let newArr2 = arr.every(function(v){ return v 10 }) console.log(newArr2) //false
```

#### 5.3 object的新方法

在 ES6 中，添加了`Object.is()`、`Object.assign()`、`Object.keys()`、`Object.values()`、`Object.entries()`等方法。

##### 5.3.1 Object.is()

- `Object.is()`方法用来判断两个值是否为同一个值，返回一个布尔类型的值。

```JavaScript
const obj1 = {};
const obj2 = {};
console.log(Object.is(obj1, obj2)); // false

const obj3 = { }; const value1 = obj3; const value2 = obj4; console.log(Object.is(value1, value2)); // true
```

##### 5.3.2 Object.assign()

- `Object.assign()`方法用于将所有可枚举属性的值从一个或多个源对象分配到目标对象，并返回目标对象。------难理解看实例 **对象合并**

```JavaScript
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { a:5 , c: 3 };
//对象合并，把后面对像合并到第一个对象，对象里相同的属性会覆盖
Object.assign(obj1, obj2, obj3);
console.log(obj1); // { a: 5, b: 2 , c:3}
```

##### 5.3.3 Object.keys()、Object.values()、Object.entries()

- Object.keys() 返回对象所有属性

```JavaScript
// object.keys()传入对象，返回一个数组类型 值是方法中对象的键（key）
let obj={name:"小白",age:18,sex:"男"}
let newobj=Object.keys(obj)
console.log(newobj)//["name", "age", "sex"]
// 传入字符串返回索引
let obj="ABCD123"
let newobj=Object.keys(obj)
console.log(newobj)//["0", "1", "2", "3", "4", "5", "6"]
console.log(obj[2])//C
// 传放入数组返回索引
let obj=["a","b","c","d"]
let newobj=Object.keys(obj)
console.log(newobj)//["0", "1", "2", "3"]
console.log(obj[1])//b
```

- Object.values() 返回对象所有属性值

```JavaScript
// Object.values()传入对象,返回一个数组类型 值是方法中对象的值（value）
let obj={name:"小白",age:18,sex:"男"}
let newobj=Object.values(obj)
console.log(newobj)//["小白", 18, "男"]
// Object.values()传入对象，返回对象顺序成员
let arr={5:"a",4:"b",3:"c",2:"d",1:"e"}
console.log(Object.values(arr))//["e", "d", "c", "b", "a"]
```

- Object.entries() 返回多个数组，每个数组是 key–value

```JavaScript
// Object.entries()传入对象，返回一个数组类型 值是方法中对象的键和值
let obj={name:"小白",age:18,sex:"男"}
let newobj=Object.entries(obj)
console.log(newobj)//[["name", "小白"],["age", 18],["sex", "男"]]
// Object.entries()传入数组，返回数组包数组的形式
let obj=["a","b","c","d"]
let newobj=Object.entries(obj)
console.log(newobj)//[["0", "a"],["0", "b"],["0", "c"],["0", "d"]]
```

</script

![img](https://uv4fs8d5x5w.feishu.cn/space/api/box/stream/download/asynccode/?code=NWIzNGRmN2E3ODI5ZWUwODE3MzMyOTVkODMxMzIwODRfTElMVlBPVjVFd3NMVnNaQVV0UFA1Mk5WRDFPWDFQVjJfVG9rZW46S3hBamJlYVdxb3B2WFd4ajRFU2MwUVlobkNlXzE3NDEyMjc2ODA6MTc0MTIzMTI4MF9WNA)

#### 5.4 对象声明简写

```JavaScript
<script>
    const age = 20
    const name = 'zhangsan'

    //传统
    let user = { name: name, age: age }

    //ES6
    // 1. {name, age} 表示对象的属性名是name, age
    // 2. 属性name的值是从变量/常量 name 来的
    let user1 = { name, age }
    console.log("user=>", user1)
</script>
```

#### 5.5 对象方法简写

```JavaScript
<script>
    //传统
    let user = {
        name: 'zhangsan',
        age: 20,
        sayHi: function () {
            console.log('name=', this.name, 'age=', this.age)
        }
    }
    user.sayHi();

    console.log('============================')

    //ES6
    let user1 = {
        name: 'zhangsan',
        age: 20,
        sayHi() {
            console.log('name=', this.name, 'age=', this.age)
        }
    }
    user1.sayHi()
</script>
```

#### 5.6 …(对象扩展运算符)

1. 拷贝

```JavaScript
<script>
    let cat = {
        name: '小花猫',
        age: 2
    }

    //拷贝对象（深拷贝）
    let cat1 = { ...cat }
    cat1.name = '大花猫'

    console.log('cat=>', cat)
    console.log('cat1=>', cat1)
</script>
```

</script

1. 合并对象

```JavaScript
<script>
    //合并对象[深拷贝，合并后的对象指向新的空间]
    let user = {
        name: 'lisi',
        age: 20
    }

    let student = {
        gender: '男',
        address: '北京市'
    }
    let user_student = { ...user, ...student }
    console.log("user_studnet=>", user_student)
</script>
```

</script

### 6、函数方面

#### 6.1 参数默认值

```JavaScript
<script>
    // es6之前
    function add(a, b) {
       if(!a) a=0
       if(!b) b=0
         return a + b;
    }
    //es6
    function add(a=0, b=0) {
        return a + b;
    }

    let x = add();
    let y = add(2);
    let z = add(3,4);
    console.log(x,y,z); //x=0, y=2, z=7
</script>
```

#### 6.2 箭头函数

箭头函数实现了一种更加简洁的书写方式。箭头函数内部没有`arguments`，也没有`prototype`属性，所以不能用`new`关键字调用箭头函数。

```JavaScript
let add = (a,b) => {
    return a+b;
}
let print = () => {
    console.log('hi');
}
let fn = a => a * a;
//当只有一个参数时，括号可以省略，函数体只有单行return语句时，大括号也可以省略。
```

#### 6.3 箭头函数和普通函数最大的区别在于其内部this永远指向其父级对象的this。(重点)

```JavaScript
 var age = 123;
 let obj = {
     age:456,
     say:() => {
         console.log(this.age);  //this指向window
     }
 };
obj.say();   //123
```

### 7、class（类）

`class` 作为对象的模板被引入ES6，你可以通过 `class `关键字定义类。`class `的本质依然是一个函数。

1. 创建类

```JavaScript
<script>
    class person {
        // 关键字声明方式
        constructor(name) {
            this.name = name
        }
        say() {
        console.log("hello");
        }
    }
    var p = new person('p');
    p.say(); //'hello';
    console.log(p.name);
</script>
```

1. 类的继承 类的继承通过`extends`关键字实现。 子类必须在`constructor`中调用`super()`

```JavaScript
<script>
    class Person {
            constructor(name, age) {
                    this.name = name;
                    this.age = age;
            }
            say() {
                    console.log(this.name + ":" + this.age);
            }
    }
    class Student extends Person {
            constructor(name, age, sex) {
                    super(name, age);
                    this.sex = sex;
            }
    }
    var student = new Student("admin", 12, "male");
    student.name;   //'admin'
    student.sex;    //'male'
    student.say(); //'ren:12'
</script>
```

### 8、promise 和 proxy

`Promise` 是一种处理异步操作的对象，用于更清晰地组织和处理异步代码。它表示一个异步操作最终会产生一个值（可能是成功的结果或失败的原因）。

```JavaScript
const myPromise = new Promise((resolve, reject) => {
  // 异步操作
  if (/* 操作成功 */) {
    resolve('成功的结果');
  } else {
    reject('失败的原因');
  }
});

myPromise.then(
  result => {
    // 处理成功的结果
  },
  error => {
    // 处理失败的原因
  }
);
```

`Proxy` 是一种元编程机制，允许你创建一个对象的代理，从而可以拦截和自定义该对象上的操作。通过使用 `Proxy`，你可以对对象的读取、设置、函数调用等行为进行拦截和自定义。

```JavaScript
const handler = {
  get: function(target, prop) {
    // 在获取属性时触发
    console.log(`获取属性 ${prop}`);
    return target[prop];
  },
  set: function(target, prop, value) {
    // 在设置属性时触发
    console.log(`设置属性 ${prop} 为 ${value}`);
    target[prop] = value;
  }
};

const obj = { name: 'John' };
const proxyObj = new Proxy(obj, handler);

console.log(proxyObj.name); // 获取属性 name
proxyObj.age = 25; // 设置属性 age 为 25
/**
    在这个例子中，handler 对象定义了 get 和 set 方法，
    这些方法会在获取和设置属性时被调用。通过创建 Proxy，我们可以拦截并自定义对象的行为。
*/
```

### 9、模块化

1. 导入

- ES6使用关键字 `import `导入模块（文件），有两种常用的方式：

```JavaScript
import '模块名称'  from  '路径'；
import  '路径'；
```

1. 导出

- ES6 通过 export 和export default 导出模块。

```JavaScript
let name = 'ren',age = 12;
export {name,age};
//注意：变量需要用大括号包裹，然后才能向外输出
```

- 模块化优点

```Plaintext
  1.防止命名冲突
  2.复用性强
```

### 10、运算符

```
... `扩展运算符 可选链 `?.` 函数绑定运算符`::
```

## ES6思维导图

![img](blob:https://uv4fs8d5x5w.feishu.cn/b24a097a-ecf0-477b-8a85-9812f5f1a17f)
