//布尔值 最基本的数据类型就是简单的true/false值，在JavaScript和TypeScript里叫做boolean
let isDone: boolean = false;
isDone=true

//数字 和JavaScript一样，TypeScript里的所有数字都是浮点数。
let decLiteral: number = 6;
decLiteral=7


//字符串 像其它语言里一样，我们使用string表示文本数据类型。和JavaScript一样，可以使用双引号（"）或单引号（'）表示字符串。
let name:string='bob'

//数组 TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。
// 第一种，可以在元素类型后面接上[]，表示由此类型元素组成的一个数组：
//第二种方式是使用数组泛型，Array<元素类型>：
let list:Array<number>=[1,2,3]
let list2:number[]=[1,2,3]

//元组 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为string和number类型的元组。
let x:[string,number]=['123',123]
let y:[string,...number[]]=['123',123123,123123]
let z:[string,number?]=['123']

//枚举 enum类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
//自动赋值
const enum Color {Red,Green,Blue}
//手动赋值
const enum BackGroundColor {Red=1,Green=2,Blue=4}
let color:Color=Color.Red
//反向映射
let colorName:string|undefined=BackGroundColor['2']

//any 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型 那么我们可以使用any类型来标记这些变量：
let notSure:any=123
notSure=123
notSure=true

//void 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型
//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
function add() {
    console.log('这是一个空函数')
}
let unusable:void=undefined

//null和undefined  TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。
// 和void相似，它们的本身的类型用处不是很大：
let u:undefined=undefined
let n:null=null

//never  never类型表示的是那些永不存在的值的类型。
// 例如，never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型；

// 返回never的函数必须存在无法达到的终点
function error(message:string):never{
    throw new Error(message)
}
//类型推断返回值为never
function fail() {
    return error('错误了')
}

//存在无法达到的终点
function infiniterLoop():never {
    while(true){

    }
}

//类型断言   通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类
// 型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。
let someValue:any=123
//泛型断言确定类型
let strLength:number=(<string>someValue).length
//as断言
let strIntLength:number=(someValue as string).length

//接口 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
interface NameInterFace {
    name:string
}
let user:NameInterFace={
    name:'123'
}
//可选属性
interface Person {
    name:string
    age?:number
}
//只读属性
interface PointInterFace {
    readonly x: number,
    readonly y:number
}
let point:PointInterFace={
    x:1,
    y:2
}
//readOnlyArray 只读数组
let a:number[]=[1,2,3]
let currentList:ReadonlyArray<number>=a

//额外的属性检查  添加额外的属性检查
interface SquareInterFace {
    name?:string
    area?:number
    [key:string]:any
}
//函数类型
interface SearchFunc{
    (source:string,substring:string):boolean
}
let search:SearchFunc=function (source:string,substring:string):boolean{
    return source.search(substring)!=-1
}
//可索引的类型
interface stringArray{
    [index:number]:string
}
let myArray:stringArray=['Bob','Mary']
let myStr:string|undefined=myArray[1]

//类类型
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date):void;
}

class Clock implements ClockInterface {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number,) {
        this.currentTime = new Date();
    }
}

//类静态部分与实例部分的区别
interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}
//继承接口
interface Width {
    width:number
}
interface Height{
    height:number
}

interface Shape extends Width, Height{
    area:number
}
let shape:Shape={width:18,height:20,area:15}

//类  继承
class Animals{
    move(number:number){
        console.log(`I am moving ${number} meter`)
    }
}
class Dog extends Animals {
    bark() {
        console.log('Woof! Woof')
    }
}
const dog=new Dog()
dog.move(10)
dog.bark()

//公共，私有与受保护的修饰符
//默认公开 public 类内部外部以及子类都能访问
class Person{
    constructor(public name:string){
        this.name=name
    }
}

// 当成员被标记成private时，它就不能在声明它的类的外部访问。比如：
class Student{
    constructor(private age:number){
        this.age=age
    }
}
// new Student(18).age

//protected修饰符与private修饰符的行为很相似，但有一点不同，protected成员在类内部和派生类中仍然可以访问。例如：
class Father{
    protected age:number
    constructor(age:number){
        this.age=age
    }
}
class Son extends Father{
    protected name:string
    constructor(age:number,name:string) {
        super(age);
        this.name=name
    }
    getNameAndAge(){
        return this.name +this.age;
    }
}
// console.log(new Son(18,'xiaoming').getNameAndAge())
// console.log(new Son(18,'xiaoming').name)  //实例对象无法访问

//readonly
class Mother{
    readonly name:string
    constructor(name:string){
        this.name=name;
    }
}
let mary=new Mother("Mary");
// mary.name='Alice'  //不可修改

//函数类型
function increment(x:number, y:number):number{
    return x+y
}
let myAdd:(x:number,y:number)=>number=increment  //完整类型
let myAdd2=increment  //类型推断

//默认参数，可选参数
function decrement(x?:number,y=12):number {
    if(x){
        return x-y
    }else{
        return y
    }
}
//剩余参数
function getMax(x:number,...argument:number[]):number{
    return Math.max(...arguments,x)
}
console.log(getMax(5,2,4))
//回调函数this
class Handler{
    info:string
    constructor(info:string) {
        this.info=info
    }
    onClick=(e:Event)=>{this.info=(e.target as HTMLInputElement).value}
}

//泛型
//泛型变量 打印参数的length T可以改成别的参数名
function identity<T>(arg:T[]) :T[]{
    console.log(arg.length)
    return arg
}

//泛型接口
interface GenericIdentityFn<T>{
    (arg:T):T
}
function nextIdentity<T>(arg:T) :T{
    return arg
}
let currentIdentity:GenericIdentityFn<number>=nextIdentity

//泛型类
class genericNumber<T>{
    value:T
    add: ((x: T, y: T) => T | undefined) | undefined;
    constructor(value:T){
        this.value=value
    }

}
let myGeneric=new genericNumber<number>(18)
myGeneric.value=10
myGeneric.add=function (x,y) {
    return x+y
}

//泛型约束
interface LengthWise{
    length:number
}
function nextExtendsIdentity<T extends LengthWise>(arg:T) :T{
    console.log(arg.length)
    return arg
}
// 获取对象属性
function getProperty<T,K extends keyof T>(obj:T,Key:K){
    return obj[Key]
}
//获得类类型
function create<T>(c:{new():T}):T{
    return new c()
}

//typeof类型保护 联合类型
function padLeft(value:string,padding:number|string){
    if(typeof padding=='string'){
        return padding+value
    }
    if(typeof padding==='number'){
        return Array(padding+1).join(' ')+value
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}

//instanceof类型保护
interface Padder {
    getPaddingString(): string
}

class SpaceRepeatingPadder implements Padder {
    constructor(private numSpaces: number) { }
    getPaddingString() {
        return Array(this.numSpaces + 1).join(" ");
    }
}

class StringPadder implements Padder {
    constructor(private value: string) { }
    getPaddingString() {
        return this.value;
    }
}

function getRandomPadder() {
    return Math.random() < 0.5 ?
        new SpaceRepeatingPadder(4) :
        new StringPadder("  ");
}

// 类型为SpaceRepeatingPadder | StringPadder
let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
    // padder; // 类型细化为'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
    // padder; // 类型细化为'StringPadder'
}

//类型别名
type Name='string'
type Age='number'

// 联合类型
type width=number|string

//交叉类型
type Area={
    heigth:number;
    width:number;
}
type  Address={
    num:number
    cell:number,
    room:number
}
type House=Area&Address
let house:House={
    heigth:18,
    width:20,
    num:21,
    cell:100,
    room:200
}

//字符串字面量类型
type MyName='Mary' |'Bob'|'Nick'

//索引类型和字符串索引签名
interface Map<T> {
    [key: string]: T;
}
let keys: keyof Map<number>; // string
let value: Map<number>['foo']; // number








