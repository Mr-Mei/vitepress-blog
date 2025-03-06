# Ts常用方法

在 TypeScript 中，有许多实用的方法可以帮助你编写更健壮且可维护的代码。以下是一些常见且实用的 TypeScript 方法：

## **1. 类型推断**

TypeScript 可以根据变量的初始值自动推断类型，减少显式类型注解的需求。

```TypeScript
let message = "Hello, TypeScript!"; // 推断为 string
let count = 42; // 推断为 number
```

## **2. 联合类型和交叉类型**

联合类型允许变量具有多种可能的类型，交叉类型将多种类型组合成一个。

```TypeScript
// 联合类型
let value: string | number;
value = "Hello";
value = 42;

解释：
定义联合类型：let value: string | number; 这行代码定义了一个变量 value，它可以是 string 类型，也可以是 number 类型。这个特性称为联合类型，使用竖线 (|) 来分隔多个可能的类型。
赋值操作：
value = "Hello"; 这里将 value 赋值为一个字符串 "Hello"，这是合法的，因为 value 的类型可以是 string。
value = 42; 这里将 value 赋值为一个数字 42，这也是合法的，因为 value 的类型可以是 number。

// 交叉类型
interface Drivable {
    drive(): void;
}

interface Flyable {
    fly(): void;
}

type AmphibiousVehicle = Drivable & Flyable;

let vehicle: AmphibiousVehicle = {
    drive() {},
    fly() {}
};

解释：
定义接口：
interface Drivable { drive(): void; } 定义了一个接口 Drivable，包含一个 drive 方法。
interface Flyable { fly(): void; } 定义了另一个接口 Flyable，包含一个 fly 方法。
定义交叉类型：
type AmphibiousVehicle = Drivable & Flyable; 定义了一个新的类型 AmphibiousVehicle，
它是 Drivable 和 Flyable 的交叉类型。
这意味着 AmphibiousVehicle 类型的对象必须同时具有 Drivable 和 Flyable 两个接口的所有成员。
创建交叉类型的对象：
let vehicle: AmphibiousVehicle = { drive() {}, fly() {} }; 这里定义了一个变量 vehicle，
类型为 AmphibiousVehicle，并且为其提供了 drive 和 fly 方法的实现。
因为 AmphibiousVehicle 是 Drivable 和 Flyable 的交叉类型，所以这个对象必须实现这两个接口的所有方法。

总结:
联合类型允许一个变量可以是多种类型之一，增强了代码的灵活性。
交叉类型允许组合多个类型，创建一个包含所有组合类型成员的新类型，增强了代码的可复用性和拓展性。
```

## **3. 泛型**

泛型提供了一种创建可重用组件的方法，适用于多种类型。

```TypeScript
function identity<T>(arg: T): T {
    return arg;
}
这段代码定义了一个泛型函数 identity。其中 T 是一个类型参数，它可以代表任意类型。
函数 identity 接受一个参数 arg，类型为 T，并返回相同类型的值 arg。
这种泛型函数允许我们在调用时指定具体的类型，使其具有更大的灵活性和重用性。

let output1 = identity<string>("Hello"); // 类型是 string
这里调用 identity 函数，并显式地指定 T 为 string 类型。
因此，参数 "Hello" 被传递给函数，返回值 output1 的类型是 string。

let output2 = identity<number>(42); // 类型是 number
这里调用 identity 函数，并显式地指定 T 为 number 类型。
因此，参数 42 被传递给函数，返回值 output2 的类型是 number。
```

## **4. 映射类型**

映射类型允许你通过转换现有类型创建新的类型。

```TypeScript
// 映射类型 Readonly：
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
Readonly 是一个 TypeScript 的泛型工具类型，它将所有属性设为只读。这意味着属性的值一旦初始化，
就不能再被修改。这里使用了映射类型和索引类型查询 (keyof T) 来实现。
T 是泛型参数，代表一个类型。
[P in keyof T] 遍历 T 的所有键。
readonly 关键字将每个属性设为只读。

// 映射类型 Partial：
type Partial<T> = {
    [P in keyof T]?: T[P];
};
Partial 也是一个 TypeScript 的泛型工具类型，它将所有属性设为可选。这意味着属性可以存在也可以不存在。
实现方法类似于 Readonly，但这里使用了 ? 来表示可选属性。
[P in keyof T] 遍历 T 的所有键。
? 使每个属性变为可选。

interface User {
    name: string;
    age: number;
}
User 是一个普通的 TypeScript 接口，有两个属性：name 和 age，它们分别是 string 和 number 类型。

let readonlyUser: Readonly<User>= { name: "John", age: 30 };
let partialUser: Partial<User>= { name: "John" };
readonlyUser 是一个 Readonly<User> 类型的对象。
这意味着 readonlyUser 的 name 和 age 属性都是只读的，不能被修改。
partialUser 是一个 Partial<User> 类型的对象。
这意味着 partialUser 的 name 和 age 属性都是可选的。
在这里，仅仅指定了 name 属性，而 age 属性则被省略。

小结：
Readonly 将一个对象的所有属性设为只读。
Partial 将一个对象的所有属性设为可选。
使用这些工具类型可以更方便地控制对象属性的可变性和存在性，使代码更加健壮和易于维护。
```

## **5. 条件类型**

条件类型允许你根据其他类型定义类型。

```TypeScript
// 条件类型 Message<T>：
type Message<T> = T extends string ? string : never;
Message<T> 是一个条件类型，它根据泛型参数 T 的类型来确定返回的类型。
T extends string ? string : never 表示如果 T 是 string 类型，
那么 Message<T> 的类型就是 string；否则，类型就是 never。
extends 关键字用于检查 T 是否可以赋值给 string 类型。

// 使用条件类型 Message<T>：
let msg1: Message<string>; // 类型是 string
let msg2: Message<number>; // 类型是 never

msg1 的类型是 Message<string>。根据条件类型的定义，因为 string 类型满足 T extends string，
所以 msg1 的类型是 string。
msg2 的类型是 Message<number>。因为 number 类型不满足 T extends string，
所以 msg2 的类型是 never。never 类型表示不可能的类型，即不存在的值。

小结：
条件类型根据泛型参数的类型动态确定返回的类型，使得类型系统更加灵活和强大。
在这个例子中，条件类型 Message<T> 用于检查 T 是否是 string 类型，如果是则返回 string 类型，
否则返回 never 类型。
这种条件类型在 TypeScript 中非常有用，可以根据不同的类型参数实现类型推断和类型检查。
```

## **6. 实用类型**

TypeScript 包含一些实用类型，可以让你更方便地操作类型。

```TypeScript
// 定义一个接口 Todo，有三个属性：title、description 和 completed
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// 使用 Partial<T> 类型构造一个部分可选的 Todo 对象
let partialTodo: Partial<Todo> = {
  title: "Learn TypeScript",
  // 这里可以只提供部分属性，其余属性可以不提供，因为它们是可选的
};

// 使用 Pick<T, K> 类型从 Todo 中挑选出部分属性构造一个新的类型
let pickedTodo: Pick<Todo, "title" | "completed"> = {
  title: "Learn TypeScript",
  completed: false,
  // 这里只包含 title 和 completed 属性，description 属性被排除
};

// 使用 Omit<T, K> 类型从 Todo 中排除某些属性构造一个新的类型
let omittedTodo: Omit<Todo, "description"> = {
  title: "Learn TypeScript",
  completed: false,
  // 这里排除了 description 属性，只保留了 title 和 completed 属性
};
```

## **7. 类型保护**

类型保护帮助在条件块中缩小类型范围。

```JavaScript
// 自定义类型保护函数 isString：
function isString(value: any): value is string {
    return typeof value === "string";
}

isString 是一个类型保护函数，它接受一个任意类型的参数 value。
函数返回一个布尔值，表明 value 是否为字符串类型。
关键字 value is string 告诉 TypeScript 编译器，如果函数返回 true，则 value 是 string 类型。
这种写法定义了一个用户自定义的类型保护（type guard）。

// 在 example 函数中使用类型保护：
function example(value: string | number) {
    if (isString(value)) {
        console.log("It's a string: "value.toUpperCase());
    } else {
        console.log("It's a number: "value.toFixed(2));
    }
}

example 函数接受一个联合类型参数 value，它可以是 string 或 number。
使用 isString 类型保护函数来检查 value 的类型：
如果 isString(value) 返回 true，则 value 被推断为 string 类型，
因此可以调用 string 类型的方法 toUpperCase()。
否则，value 被推断为 number 类型，因此可以调用 number 类型的方法 toFixed(2)。

总结：
类型保护（Type Guards）是 TypeScript 中的一种机制，用于在运行时检查变量的类型，从而在类型检查的不同
分支中安全地使用特定类型的方法和属性。
自定义类型保护函数通过 value is type 的返回类型声明，使得 TypeScript 编译器能够在代码的特定分支中推
断出更精确的类型。
这种机制使代码更加健壮和可维护，避免了类型错误，提高了类型安全性。
```

## **8. 枚举**

枚举允许你定义一组命名常量。

```TypeScript
// 定义枚举 Direction：
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}

enum 关键字用于定义一个枚举类型 Direction。
枚举成员 Up、Down、Left 和 Right 被定义为这个枚举的值。
Up 被显式赋值为 1，接下来的枚举成员将自动递增，因此 Down 的值为 2，Left 的值为 3，Right 的值为 4。
枚举的成员默认从 0 开始计数，但如果第一个成员被赋予了一个值（例如 1），其后的成员将基于这个值进行递增。
使用枚举：

// 使用枚举：
let dir: Direction = Direction.Up;

声明了一个变量 dir，它的类型是 Direction 枚举。
将 dir 的值设置为 Direction.Up，即 1。
```

## **9. 装饰器**

装饰器是一种修改类及其成员的方法。它们是实验特性，需要在 `tsconfig.json` 中启用。

```JavaScript
// sealed 装饰器
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

sealed 是一个装饰器函数，接受一个构造函数作为参数。
Object.seal(constructor) 方法封闭构造函数，使其无法添加新属性，同时保留现有属性。
Object.seal(constructor.prototype) 方法封闭构造函数的原型，使其无法添加新属性，同时保留现有属性。

//  使用 @sealed 装饰器
@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, "this.greeting;
    }
}

// 使用示例
const greeter = new Greeter("world");
console.log(greeter.greet()); // 输出: "Hello, world"

// 尝试添加新属性或方法会失败
greeter.newProperty = "test"; // TypeError: Cannot add property newProperty, object is not extensible
在这个示例中，Greeter 类被封闭，任何尝试在实例或类上添加新属性或方法的操作都会失败，从而保护类的完
整性和预期行为。

@sealed 装饰器应用于 Greeter 类。
当 Greeter 类定义时，sealed 装饰器函数将被调用，封闭 Greeter 类及其原型。

整个流程：
定义装饰器 sealed：封装类和类的原型，使其不可扩展。
应用装饰器 @sealed：在定义 Greeter 类时，应用 sealed 装饰器。
封闭类和原型：
Object.seal(constructor)：封闭 Greeter 类，防止添加新属性。
Object.seal(constructor.prototype)：封闭 Greeter 类的原型，防止添加新方法或属性。

优点：
防止扩展：确保类及其原型无法被扩展，增加安全性和稳定性。
提高代码可靠性：防止意外的属性或方法添加。
```

## **10. 类型断言**

类型断言允许你覆盖 TypeScript 推断的类型。

```TypeScript
let someValue: any = "this is a string";

变量声明：someValue 被声明为 any 类型。
any 类型允许变量持有任意类型的值，绕过了类型检查。
赋值：将字符串 "this is a string" 赋值给 someValue。

let strLength: number = (someValue as string).length;

类型断言：someValue as string
将 someValue 断言为 string 类型。
类型断言告诉 TypeScript 编译器，在此上下文中，开发者确定 someValue 是 string 类型。
获取字符串长度：.length
使用字符串的 .length 属性来获取字符串的长度。
变量声明：将获取到的长度值赋给 strLength，并声明 strLength 为 number 类型。

类型断言的两种语法：
1.尖括号语法（angle-bracket syntax）：let strLength: number = (<string>someValue).length;
2.as 语法：let strLength: number = (someValue as string).length;
在现代 TypeScript 中，推荐使用 as 语法，因为尖括号语法在某些情况下可能与 JSX 语法冲突。

类型断言的目的：
类型断言用于告诉 TypeScript 编译器一个值的具体类型，从而绕过编译时的类型检查。在某些情况下，
例如当你从外部数据源获取数据时，TypeScript 可能无法自动推断类型，这时就需要使用类型断言来帮助编译器。

总结：
类型断言是一种强大的工具，允许开发者在需要时手动指定类型，帮助 TypeScript 更准确地进行类型检查和代码
分析。然而，应该谨慎使用类型断言，确保在使用类型断言时对值的类型有足够的信心，以避免在运行时出现类型错
误。
```

这些技巧可以帮助更好地利用 TypeScript 的类型系统，确保类型安全，减少运行时错误，并提供更好的工具支持。
