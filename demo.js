//布尔值 最基本的数据类型就是简单的true/false值，在JavaScript和TypeScript里叫做boolean
let isDone = false;
isDone = true;
//数字 和JavaScript一样，TypeScript里的所有数字都是浮点数。
let decLiteral = 6;
decLiteral = 7;
//字符串 像其它语言里一样，我们使用string表示文本数据类型。和JavaScript一样，可以使用双引号（"）或单引号（'）表示字符串。
let name = 'bob';
//数组 TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。
// 第一种，可以在元素类型后面接上[]，表示由此类型元素组成的一个数组：
//第二种方式是使用数组泛型，Array<元素类型>：
let list = [1, 2, 3];
let list2 = [1, 2, 3];
//元组 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为string和number类型的元组。
let x = ['123', 123];
let y = ['123', 123123, 123123];
let z = ['123'];
//枚举 enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
//自动赋值
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
//手动赋值
var BackGroundColor;
(function (BackGroundColor) {
    BackGroundColor[BackGroundColor["Red"] = 1] = "Red";
    BackGroundColor[BackGroundColor["Green"] = 2] = "Green";
    BackGroundColor[BackGroundColor["Blue"] = 4] = "Blue";
})(BackGroundColor || (BackGroundColor = {}));
let color = Color.Red;
//反向映射
let colorName = BackGroundColor['2'];
//any 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型 那么我们可以使用any类型来标记这些变量：
let notSure = 123;
notSure = 123;
notSure = true;
//void 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型
//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
function add() {
    console.log('这是一个空函数');
}
let unusable = undefined;
//null和undefined  TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。
// 和void相似，它们的本身的类型用处不是很大：
let u = undefined;
let n = null;
//never  never类型表示的是那些永不存在的值的类型。
// 例如，never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
//类型推断返回值为never
function fail() {
    return error('错误了');
}
//存在无法达到的终点
function infiniterLoop() {
    while (true) {
    }
}
//类型断言   通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类
// 型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。
let someValue = 123;
//泛型断言确定类型
let strLength = someValue.length;
//as断言
let strIntLength = someValue.length;
let user = {
    name: '123'
};
let point = {
    x: 1,
    y: 2
};
//readOnlyArray 只读数组
let a = [1, 2, 3];
let currentList = a;
let search = function (source, substring) {
    return source.search(substring) != -1;
};
let myArray = ['Bob', 'Mary'];
let myStr = myArray[1];
class Clock {
    setTime(d) {
        this.currentTime = d;
    }
    constructor(h, m) {
        this.currentTime = new Date();
    }
}
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
let shape = { width: 18, height: 20, area: 15 };
//类  继承
class Animals {
    move(number) {
        console.log(`I am moving ${number} meter`);
    }
}
class Dog extends Animals {
    bark() {
        console.log('Woof! Woof');
    }
}
const dog = new Dog();
dog.move(10);
dog.bark();
export {};
//公共，私有与受保护的修饰符
//默认公开 public
