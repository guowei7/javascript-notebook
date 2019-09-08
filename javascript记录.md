### <center>javascript笔记</center> ###
>* javascript语法
>   >* javascript字面量  
>   >   >1. 数字字面量(Number)：可以是整数或小数，或者科学计数(e)  
>   >   >2. 字符串字面量(String):可以使用单引号或双引号  
>   >   >3. 表达式字面量:用于计算，5 + 6、5 * 6  
>   >   >4. 数组字面量(Array)：定义一个数组,[49,9,8]  
>   >   >5. 对象字面量(Object): 定义一个对象,{firstName:"john",lastName:"Doe"}  
>   >   >6. 函数字面量(Function): 定义一个函数
>   >* javascript变量  
>   >   >javascript使用关键字var来定义变量，使用等号来为变量赋值。
>   >* javascript操作符  
>   >   >1. 算术运算符
>   >   >2. 赋值运算符
>   >   >3. 位运算符
>   >   >4. 逻辑运算符
>   >* javascript语句  
>   >   >javascript语句向浏览器发出命令，语句使用分号分隔的。  
>   >* javascript关键字
>   >   >关键字用于标识要执行的操作。javascript保留了一些关键字为自己所用。
>   >* javascript注释
>   >* javascript数据类型  
>   >   >javascript有多种数据类型:数字，字符串，数组，对象等等。
>   >* javascript字符集  
>   >   >javascript使用unicode字符集。  
>* javascript数据类型  
>   >* 值类型:字符串(String)、数字(Number)、布尔(Boolean)、对空(Null)、未定义(Undefined)、Symbol(ES6引入的一种新的原始数据类型，表示独一无二的值)  
>   >* 引用数据类型：对象(Object)、数组(Array)、函数(Function)  
>* javascript对象  
>   >* javascript对象是拥有属性和方法的数据。  
>* javascript函数  
>   >* 函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块。  
>* javascript作用域  
>   >作用域是可访问变量的集合，为可访问变量，对象，函数的集合
>   >* 局部作用域: 变量在函数内声明，变量为局部作用域。  
>   >* 全局变量:变量在函数外定义，即为全局变量。全局变量有全局作用域，网页中所有脚本和函数均可使用。（如果变量在函数内没有声明，该变量为全局变量),在HTML中，全局变量是window对象，所有数据变量都属于window对象。  
>* javascript事件  
>   >* HTML事件：HTML事件可以是浏览器行为，也可以是用户行为。  
>   >* 常见的HTML事件: onchange、onclick、onmouseover、onmouseout、onkeydown、onload
>* javascript条件语句
>   >* if语句、if else语句、if else if else语句、switch语句。
>   >   一种优化if的方法:
>   >   ``` javascript
>   >       const condition = "2";
>   >       let obj = {  
>   >           "1":() => { document.write(1)},
>   >           "2":() => { document.write(2)},
>   >           "3":() => { document.write(3)},
>   >       }
>   >       obj[condition]();
>   >   ```
>* javascript Break和Continue语句
>   >* Break语句  
>   >   break语句用于跳出循环，break语句跳出循环后，会继续执行该循环之后的代码。
>   >* continue语句  
>   >   中断循环中的迭代，如果出现了指定的条件，然后继续循环中的下一个迭代。  
>   >* javascript标签  
>   >   如需标记javascript语句，请在语句之前加上冒号。continue语句不管有没有标签只能用在循环中，而break不带标签只能用在switch和循环中。有了标签可以使用break和continue在多层循环的时候控制外层循环。  
>   >   ``` javascript
>   >       outerloop:
>   >       for(var i=0;i<10;i++){
>   >           innerloop:
>   >           for(var j=0;j<10;j++){
>   >               if(j>3) break;
>   >               if(i==2) break innerloop;
>   >               if(i==4) break outerloop;
>   >               document.write("i="+i+"j="j+"");
>   >           }
>   >       }
>   >   ```
>* javascript typeof  
>   >* typeof操作符：可以使用typeof操作符来检测变量的数据类型。数组是一种特殊的对象类型，所以typeof [1,2,3]值为object。
>   >* null:是一个只有一个值的特殊类型，表示一个空对象引用。
>   >* undefined:是一个没有设置值的变量。 null和undefined值相等，但类型不等。
>* javascript类型转换  
>   >* constructor属性  
>   >   constructor属性返回所有javascript变量的构造函数。如"John".constructor返回函数String()。使用constructor属性来查看是否为数组或Date对象。
>   >* javascript类型转换  
>   >   javascript变量可以转换为新变量或其他数据类型。
>   >   >* 将数字转换为字符串  
>   >   >   全局方法String()可以将数字转换为字符串。Number方法toString()也是有同样的效果。toExponential()把对象的值转换为指数计数法、toFixed()把数字转换为字符串,结果的小数点后有指定位数的数字、toPrecision()把数字格式化为指定的长度。
>   >   >* 将字符串转换为数字
>   >   >   全局方法Number()可以将字符串转换为数字。parseFloat("5.2")、parseInt("5")。一元运算符+可用于将变量转换为数字,如下:
>   >   >   ``` javascript
>   >   >       var y = "5"; //y是一个字符串
>   >   >       var x = + y; //x是一个数字
>   >   >       var y = "John"; //y是一个字符串
>   >   >       var x = + y; //x是一个数字(NaN)
>   >   >   ```
>   >   >* 将布尔值转换为字符串
>   >   >   全局方法String()可以将布尔值转换为字符串，Boolean方法toString也有相同的效果。
>   >   >* 将布尔值转换为数字  
>   >   >   全局方法Number()可将布尔值转换为数字。Number(false)//0、Number(true)//1
>   >   >* 将日期转换为字符串  
>   >   >   Date()返回字符串，全局方法String()可以将日期对象转换为字符串。Date方法toString()也是有同样的效果。
>   >   >* 将日期转换为数字  
>   >   >   全局方法Number()可将日期转换为数字。日期方法的getTime()也是有同样的效果。
>   >   >* 自动转换类型:
>   >   >   ``` javascript
>   >   >       5+null //返回5 null转换为0
>   >   >       "5"+null //返回"5null" null转换为"null"
>   >   >       "5"+1 //返回"51" 1转换为"1"
>   >   >       "5"-1 //返回4 "5"转换为5
>   >   >   ```
>* javascript正则表达式  
>   >使用单个字符串来描述、匹配一系列符合某个句法规则的字符串搜索模式。
>   >* 语法  
>   >   /正则表达式主题/修饰符(可选)  
>   >   ``` javascript
>   >       var patt = /runoob/i
>   >   ```
>   >   runoob是一个正则表达式主体,i是一个修饰符(搜索不区分大小写)。
>   >* 使用字符串方法
>   >   >* search()方法，用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串,并返回子串的起始位置。
>   >   >   ``` javascript
>   >   >       var str = "Visit Runoob!";
>   >   >       var n = str.search(/Runoob/i);//n为6
>   >   >       var n = str.search("Runoob");//search方法可使用字符串作为参数，字符串参数会转换为正则表达式。
>   >   >   ```
>   >   >* replace()方法，用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串。
>   >   >   ``` javascript
>   >   >       var str = "Visit Microsoft";
>   >   >       var txt = str.replace(/microsoft/i,"Runoob")//替换Microsoft为Runoob
>   >   >       var txt = str.replace("Microsoft","Runoob")//同上
>   >   >   ``` 
>   >* 使用RegExp对象
>   >   >在javascript中，RegExp对象是一个预定义了属性和方法的正则表达式对象。
>   >   >* 使用test()方法,用于检测一个字符串是否匹配某个模式，如果字符串含有匹配的文本，则返回true，否则返回false。
>   >   >   ``` javascript
>   >   >       var patt = /e/;
>   >   >       patt.test("The best things in life are free!");//true)
>   >   >   ```
>   >   >* 使用exec()方法,用于检索字符串中的正则表达式的匹配,该函数返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为null。
>   >   >   ``` javascript
>   >   >       /e/.exec("The best things in life are free")  
>   >   >   ```
>* javascript错误-throw、try和catch
>   >* try和catch: try语句允许我们定义在执行时进行错误测试的代码块。catch语句允许我们定义当try代码块发生错误时，所执行的代码块。javascript语句try和catch是成对出现的。
>   >* finally语句: 不论之前的try和catch中是否产生异常都会执行该代码块。
>   >* Throw语句:允许我们创建自定义错误。
>* javascript变量提升
>   > javascript中，函数及变量的声明都将被提升到函数的最顶部。变量可以在使用后声明，也就是变量可以先使用再声明。
>   > * 变量提升(hoisting):函数声明和变量声明总是会被解释器悄悄地"提升"到方法体的最顶部。javascript只有声明的变量会提升，初始化的不会。
>* javascript严格模式(use strict)
>   > "use strict"指令在es5中新增，它不是一条语句，但是是一个字面量表达式。目的是指代码在严格条件下执行。
>   >* 严格模式的限制
>   >   1. 不允许使用未声明的变量
>   >   2. 不允许删除变量或对象
>   >   3. 不允许删除函数
>   >   4. 不允许变量重名
>   >   5. 不允许使用八进制
>   >   6. 不允许使用转义字符
>   >   7. 不允许对只读属性赋值
>   >       ``` javascript
>   >       "use strict"
>   >       var obj={};
>   >       Object.defineProperty(obj,"x",{value:0,writable:false});
>   >       obj.x = 3.14 //报错
>   >       ```
>   >   8. 不允许对一个使用getter方法读取的属性进行赋值
>   >   9. 不允许删除一个不允许删除的属性
>   >   10. 变量名不能使用"eval"、"arguments"字符串。
>   >   11. 禁止this关键字指向全局对象。
>* javascript表单  
>   >* javascript表单验证
>   >* HTML表单自动验证、HTML约束验证。
>* javascript验证API  
>   >* 约束验证DOM方法
>   >   ><table>
>   >   >   <thead>
>   >   >       <tr><th>方法</th><th>描述</th></tr>
>   >   >   </thead>
>   >   >   <tbody>
>   >   >       <tr><td>checkValidity()</td><td>如果input元素中的数据是合法的返回true，否则返回fasle</td></tr>
>   >   >       <tr><td>setCustomValidity</td><td>设置input元素的validationMessage属性，用于自定义错误提示信息的方法。使用 setCustomValidity 设置了自定义提示后，validity.customError 就会变成true，则 checkValidity 总是会返回false。如果要重新判断需要取消自定义提示</td></tr>
>   >   >   </tbody> 
>   >   ></table> 
>   >* 约束验证DOM属性
>   >   <table>
>   >       <thead>
>   >           <tr><th>属性</th><th>描述</th></tr>
>   >       </thead>
>   >       <tbody>
>   >           <tr><td>validity</td><td>布尔属性值，返回input输入值是否合法</td></tr>  
>   >           <tr><td>validationMessage</td><td>浏览器错误提示信息</td></tr>
>   >           <tr><td>willValidate</td><td>指定input是否需要验证</td></tr>
>   >       </tbody>
>   >   </table>
>   >* Validity属性
>   >   <table>
>   >       <thead>
>   >           <tr><th>属性</th><th>描述</th></tr>
>   >       </thead>
>   >       <tbody>
>   >           <tr><td>customError</td><td>设置为true，如果设置了自定义的validity信息</td></tr>
>   >           <tr><td>patternMismatch</td><td>设置为true，如果元素的值不匹配它的模式属性</td></tr>
>   >           <tr><td>rangeOverflow</td><td>设置为true，如果元素的值大于设置的最大值</td></tr>
>   >           <tr><td>rnageUnderflow</td><td>设置为true，如果元素的值小于它的最小值</td></tr>
>   >           <tr><td>stepMismatch</td><td>设置为true，如果元素的值不是按照规定的step属性设置。</td></tr>
>   >           <tr><td>tooLong</td><td>设置为true，如果元素的值超过了maxLength属性设置的长度。</td></tr>
>   >           <tr><td>typeMismatch</td><td>设置为true，如果元素的值不是预期相匹配的类型</td></tr>
>   >           <tr><td>valueMissing</td><td>设置为true，如果元素没有值</td></tr>
>   >           <tr><td>valid</td><td>设置为true，如果元素的值是合法的</td></tr>
>   >       </tbody>
>   >   </table>
>* javascript this  
>   >面向对象语言中this表示当前对象的一个引用。  
>   >但在javascript中this不是固定不变的，它会随着执行环境的改变而改变。
>   >   * 在方法中，this表示该方法所属的对象。
>   >   * 如果单独使用，this表示全局对象。
>   >   * 在函数中，this表示全局对象。
>   >   * 在函数中，在严格模式下，this是未定义的(undefined)。
>   >   * 在事件中，this表示接受事件的元素。
>   >   * 类似call()和apply()方法可以将this引用到任何对象。
>   >   ``` javascript 
>   >   var person1 = {
>   >       fullName:function(){
>   >           return this.firstName+" "+this.lastName;
>   >       }
>   >   }
>   >   var person2 = {
>   >       firstName:"John",
>   >       laseName:"Doe",
>   >   }
>   >   person1.fullName.call(person2);
>   >   ```
>* javascript let和const  
>   ES6新增加了两个重要的javascript关键字:let和const。
>   let声明的变量只在let命令所在的代码块内有效。
>   const声明一个只读的常量，一旦声明，常量的值就不能改变。
>   在ES6之前，javascript只有两种作用域:全局变量与函数内的局部变量。  
>   >* 块级作用域  
>   >   使用var关键字声明的变量不具备块级作用域的特性，它在{}外依然能被访问到。ES6可以使用let关键字来实现块级作用域。  
>   >* 循环作用域  
>   >   ``` javascript
>   >   var i =5;
>   >   for(var i= 0;i<10;i++){
>   >   
>   >   }
>   >   //这里i输出10
>   >   ```
>   >   ``` javascript
>   >   let i=5;
>   >   for(let i=0;i<10;i++){  
>   >   }
>   >   //这里i输出5
>   >   ```
>   >   第一个实例中，使用了var关键字，它声明的变量是全局的，包括循环体内和循环体外。  
>   >   第二个实例中，使用let关键字，它声明的变量作用域只在循环体内，循环体外的变量不受影响。  
>   >* HTML代码中使用全局变量  
>   >   使用var关键字声明的全局作用域变量属于window对象。  
>   >   使用let关键字声明的全局作用域变量不属于window对象。
>   >* const关键字
>   >   const用于声明一个或多个常量，声明时必须进行初始化，且初始化后值不可再修改。  
>   >   const的本质：const定义的变量并非常量，并非不可变，它定义了一个常量引用一个值。使用const定义的对象或者数组，其实是可变的。
>* javascript函数定义  
>   javascript使用关键字function定义函数。
>   >* 函数声明
>   >* 函数表达式
>   >   ``` javascript 
>   >   var x = function(a,b){return a * b};
>   >   var z = x(4,3);
>   >   ```
>   >   以上函数时间上是一个匿名函数，函数存储在变量中，不需要函数名称，通常通过变量名来调用。
>   >* Function() 构造函数  
>   >   函数同样可以通过内置的javascript函数构造器定义。  
>   >   ``` javascript 
>   >   var myFunction = new Function("a","b","return a * b");
>   >   var x = myFunction(4,3);
>   >   ```
>   >* 自调用函数  
>   >   ``` javascript 
>   >   (function(){
>   >       var x = "hello!!";
>   >   })();
>   >   ```
>   >   以上函数实际上是一个匿名自我调用的函数。
>   >* 函数是对象
>   >   在使用typeof操作判断函数类型将返回"function"。  
>   >   但是函数描述为一个对象更加准确。函数有属性和方法。  
>   >   arguments.length属性返回函数调用过程接受到的参数个数。
>   >   toString()方法将函数转换为字符串。
>   >* 箭头函数  
>   >   ES6新增了箭头函数
>   >   ``` javascript 
>   >   var x = function(x,y){
>   >       return x * y;
>   >   }
>   >   const x = (x,y)=>{ return x * y };
>   >   ```
>   >   箭头函数是不能提升的，所以需要在使用之前定义。  
>   >   使用const比使用var更安全，因为函数表达式始终是一个常量。  
>   >   如果函数部分只是一个语句，则可以省略return和{}。  
>* javascript 函数参数  
>   函数显示参数(Parameters)与隐式参数(Arguments)。显示参数在函数定义时列出，隐式参数在函数调用时传递给函数真正的值。
>   >* 参数规则  
>   >   * 函数定义显式参数时没有 指定数据类型。
>   >   * 函数对隐式参数没有进行类型检测。
>   >   * 函数对隐式参数的个数没有进行检测。
>   >* 默认参数  
>   >   ES5中如果函数在调用时未提供隐式参数，参数会默认设置为undefined，有时这是可以接受的，但是建议最好为参数设置一个默认值。
>   >   如果函数调用时设置了过多的参数，参数将无法被引用，因为无法找到对应的参数名。只能使用arguments对象调用。
>   >   ES6支持函数带有默认参数，就判断undefined和||的操作。
>   >* arguments对象  
>   >   函数有个内置的对象arguments。包含了函数调用的参数数组。
>   >   通过值传递参数，通过对象传递参数。
>* javascript函数调用  
>   javascript函数有4种调用方式，每种方式的不同在于this的初始化。
>   >* 作为一个函数调用  
>   >   ``` javascript 
>   >   function myFunction(a,b){
>   >       return a*b;
>   >   }
>   >   myFunction(10,2);
>   >   以上函数 不属于任何对象。但是在js中它始终是默认的全局对象。
>   >* 函数作为方法调用  
>   >   在js中你可以将函数定义为对象的方法。
>   >   ``` javascript 
>   >   var myObject = {
>   >       firstName:"John",
>   >       lastName:"Doe",
>   >       fullName:function(){
>   >           return this;
>   >       }
>   >   }
>   >   myObject.fullName();
>   >   ```
>   >   函数作为对象的方法调用，会使得this的值成为对象本身。
>   >* 使用构造函数调用函数  
>   >   如果函数调用前使用了new关键字，则是调用了构造函数。
>   >   ``` javascript 
>   >   function myFunction(arg1,arg2){
>   >       this.firstName = arg1;
>   >       this.lastName = arg2;
>   >   }
>   >   var x = new myFunstion("John","Doe");
>   >   x.firstName; //返回"John"
>   >   ```
>   >   构造函数的调用会创建一个新的对象，新对象会继承构造函数的属性和方法。  
>   >   构造函数中的this关键字没有任何的值，this的值在函数调用实例化对象时3创建。 
>   >* 作为函数方法调用函数  
>   >   在js中，函数是对象。js函数有它的属性和方法。call和apply的预定义的函数方法。两个方法可用于调用函数，两个方法的第一个参数必须是对象本身。
>   >   ``` javascript 
>   >   function myFunction(a,b){
>   >       return a* b;
>   >   }
>   >   myObject = myFunction.call(myObject,10,2)//返回20
>   >   myArray= [10,2];
>   >   myObject = myFunction.apply(myObject,myArray)
>   >   ```
>   >   两个方法都是用了对象本身作为第一个参数。两者的区别在于第二个参数:apply传入的是一个参数数组，而call则是作为call的参数传入。通过call或apply方法你可以设置this的值，且作为已存在的对象的新方法调用。
>* javascript闭包  
>   javascript变量可以是局部变量或全局变量。私有变量可以用到闭包。
>   >* 变量的生命周期  
>   >   全局变量的作用域是全局性的，即在整个javascript程序中，全局变量处处都在。  
>   >   而在函数内部声明的变量，只在函数内部起作用。这些变量是局部变量，作用域是局部性的；函数的参数也是局部性的，至在函数内部起作用。
>   >* javascript内嵌函数  
>   >   所有函数都能访问全局变量。实际上，在js中，所有函数都能访问它们上一层的作用域。js支持嵌套函数。嵌套函数可以访问上一层的函数变量。  
>   >   ``` javascript 
>   >   function add(){
>   >       var conunter = 0;
>   >       function plus(){ counter +=1; }
>   >       plus();
>   >       return counter;
>   >   }
>   >   ```
>   >   plus函数可以访问父函数的counter变量。如果我们能在外部访问plus()函数,我们需要闭包
>   >* javascript闭包  
>   >   ``` javascript 
>   >   var add = (function(){
>   >       var counter = 0;
>   >       return function(){ return counter +=1;}
>   >   })();
>   >   add();
>   >   add();
>   >   ```
>   >   变量add指定了函数自我调用的返回值。  
>   >   自我调用函数只执行一次，add变量可以作为一个函数使用。非常棒的部分是它可以访问函数上一层作用域的计数器。这个叫做javascript闭包。它使得函数拥有私有变量变成可能。计数器受匿名函数的作用域保护，只能通过add方法修改。  
>   >   闭包是一种保护私有变量的机制，在函数执行时形成私有的作用域，保护里面的私有变量不受外界干扰。直观的说就是形成一个不销毁的栈环境。  
>* javascript HTML DOM  
>   >1. DOM简介
>   >   >* HTML DOM(文档对象模型)  
>   >   >   当网页被加载时，浏览器会创建页面的文档对象模型，HTML DOM模型被构造为对象的树。  
>   >   >   <img src="./DOM树.png">    
>   >   >* 查找HTML元素  
>   >   >   通常，通过javascript，您需要操作HTML元素。  
>   >   >   为了做到这件事情，您必须首先找到该元素。有三种方法来做这件事:
>   >   >   * 通过id找到HTML元素  
>   >   >      getElementById()  
>   >   >   * 通过标签名找到HTML元素  
>   >   >      getElementsByTagName()  
>   >   >   * 通过类名找到HTML元素  
>   >   >      getElementsByClassName()  
>   >2. DOM HTML  
>   >   >* 改变HTML输出流  
>   >   >   javascript能够创建动态的HTML内容。  
>   >   >   在javascript中,document.write()可用于直接向HTML输出流写内容。  
>   >   >* 改变HTML内容  
>   >   >   修改HTML内容的最简单方式是使用innerHTML属性。
>   >   >   doucment.getElementById(id).innerHTML = 新的HTML  
>   >   >* 改变HTML属性  
>   >   >   如需改变HTML元素的属性，请使用这个语法:
>   >   >   document.getElementById(id).attribute=新属性值  
>   >3. DOM CSS  
>   >   >* 改变HTML样式  
>   >   >   如需改变HTML元素的样式，请使用这个语法:  
>   >   >   document.getElementById(id).style.property=新样式  
>   >   >   注:property中原本font-size等带'-'的均用驼峰命名修改，如fontSize  
>   >   >* 使用事件  
>   >   >   HTML DOM允许我们通过触发事件来执行代码。比如以下事件:  
>   >   >   * 元素被点击  
>   >   >   * 页面加载完成  
>   >   >   * 输入框被修改  
>   >   >   * ...  
>   >4. DOM 事件  
>   >   >* 对事件做出反应  
>   >   >   我们可以在时间发生时执行javascript，比如当用户在HTML元素上点击时  
>   >   >   如需在用户点击某个元素时执行代码，请向一个HTML事件属性添加javascript代码  
>   >   >   onclick=javascript  
>   >   >   HTML事件的例子:  
>   >   >   * 当用户点击鼠标时  
>   >   >   * 当网页已加载时  
>   >   >   * 当图像已加载时  
>   >   >   * 当鼠标移动到元素上时  
>   >   >   * 当输入字段被改变时  
>   >   >   * 当提交HTML表单时  
>   >   >   * 当用户触发按键时  
>   >   >* onload和onunload事件  
>   >   >   onload和onunload事件会在用户进入或离开页面时触发。  
>   >   onload事件可用于检测访问者的浏览器类型和浏览器版本，并基于这些信息来加载网页的正确  
>   >   >   onload和onunload事件可用于处理cookie。
>   >   >   ``` javascript 
>   >   >   <body onload="checkCookies()"></body>  
>   >   >   ```  
>   >   >* onchange事件  
>   >   >   onchange事件常结合对输入字段的验证来使用。  
>   >   >   下面是一个如何使用onchange的例子。当用户改变输入字段的内容时，会调用upperCase()函数  
>   >   >   ``` javascript 
>   >   >   <input type="text" id="fname" onchange="upperCase()">  
>   >   >   ```  
>   >   >* onmouseover、onmouseout、onmousedown、onmouseup以及onclick事件  
>   >5. DOM EventListener  
>   >   >* addEventListener()方法  
>   >   >   在用户点击按钮时触发监听事件:  
>   >   >   doucment.getElementById("myBtn").addEventListener("click",displayDate)   
>   >   >   addEventListener方法用于向指定元素添加事件句柄。  
>   >   >   addEventListener方法添加的事件句柄不会覆盖已存在的事件句柄。  
>   >   >   你可以向一个元素添加多个事件句柄。  
>   >   >   你可以向同个元素添加多个同类型的事件句柄，如:两个"click"事件。  
>   >   >   你可以向任何DOM对象添加事件监听，不仅仅是HTML元素。如：window对象  
>   >   >   addEventListener方法可以更简单的控制事件(冒泡与捕获)。  
>   >   >   你可以使用removeEventListener方法来移除事件的监听。  
>   >   >   语法:  
>   >   >   element.addEventListener(evern,function,useCapture);  
>   >   >   第一个参数是事件的类型(如"click"或"mousedown")。  
>   >   >   第二个参数是事件触发后调用的函数。  
>   >   >   第三个参数是布尔值用于描述事件是冒泡还是捕获。该参数是可选的。  
>   >   >   注意:不要使用"on"前缀。例如，使用"click",而不是使用"onclick"  
>   >   >* 向window对象添加事件句柄  
>   >   >   addEventListener() 方法允许你在 HTML DOM 对象添加事件监听， HTML DOM 对象如： HTML 元素, HTML 文档, window 对象。或者其他支出的事件对象如: <strong>xmlHttpRequest</strong>对象。  
>   >   >* 事件冒泡或事件捕获  
>   >   >   事件传递有两种方式：冒泡与捕获。  
>   >   >   事件传递定义了元素事件触发的顺序。 如果你将p元素插入到div 元素中，用户点击p元素, 哪个元素的 "click" 事件先被触发呢？  
>   >   >   在<i>冒泡</i>中，内部元素的事件会先被触发，然后再触发外部元素，即：p元素的点击事件先触发，然后会触发div元素的点击事件。  
>   >   >   在<i>捕获</i>中，外部元素的事件会先被触发，然后才会触发内部元素的事件，即： div 元素的点击事件先触发 ，然后再触发p元素的点击事件。  
>   >   >   addEventlistener()方法可以指定"useCapture"参数来设置传递类型:
>   >   >   addEventlistener(event,function,useCapture);
>   >   >   默认值为false，及冒泡传递，当值为true时，事件使用捕获传递。  
>   >   >* removeEventListener()方法  
>   >   >   removeEventListener()方法移除由addEventListener()方法添加的事件句柄  
>   >   >   element.removeEventListener("mousemove",myFunctiont);  
>   >6. DOM 元素  
>   >   >* 创建新的HTML元素-appendChild()  
>   >   >   要创建新的HTML元素(节点)需要先创建一个元素，然后在已存在的元素中添加它。
>   >   >* 创建新的HTML元素-insertBefore()  
>   >   >   以上的实例我们使用了appendChild()方法，它用于添加新元素到尾部。  
>   >   >   如果我们需要将新元素添加到开始位置，可以使用insertBefore()方法。
>   >   >* 移除已存在的元素-removeChild()  
>   >   >   要移除一个元素，你需要知道该元素的父元素。  
>   >   >* 替换HTML元素-replaceChild()  
>   >   >   我们可以使用replaceChild()方法来替换HTML DOM中的元素。  
>   >7. HTML Collection对象  
>   >   >* HTMLCollection对象  
>   >   >   getElementsByTagName方法返回HTMLCollection对象。  
>   >   >   HTMLCollection对象类似包含HTML元素的一个数组。  
>   >   >* HTMLCollection对象length属性  
>   >   >   HTMLCollection对象的length属性定义了集合中元素的数量。
>   >   >   注意:HTMLCollection不是一个数组，无法使用数组的方法:valueOf(),pop()等。
>   >8. NodeList对象  
>   >   NodeList对象是一个从文档中获取的节点列表(集合)。  
>   >   NodeList对象类似HTMLCollection对象。  
>   >   所有浏览器的childNodes属性返回的是NodeList对象。  
>   >   大部分浏览器的querySelectorAll()返回NodeList对象。  
>   >   >* NodeList对象length属性  
>   >   >   NodeList对象length属性定义了节点列表中元素的数量。  
>   >   >* HTMLCollection与NodeList的区别  
>   >   >   * HTMLCollection是HTML元素的集合，NodeList是一个文档节点的集合。  
>   >   >   * HTMLCollection元素可以通过name，id或索引来获取。
>   >   >   * 只有NodeList对象有包含属性节点和文本节点  
>   >   >   ``` javascript 
>   >   >   plist = document.querySelectorAll("p");
>   >   >   pcoll = document.getElementsByTagName("p");
>   >   >   ```  
>   >   >   plist返回的是固定的值  
>   >   >   pcoll获取后，若html页面有变化刚好添加或移除了p标签，则pcoll也会跟着变。
>* javascript对象  
>   >1. javascript对象  
>   >   >javascript中的所有事物都是对象:字符串、数值、数组、函数...  
>   >   >此外，javascript允许自定义对象。  
>   >   >* javascript对象  
>   >   >   对象只是一种特殊的数据。对象拥有属性和方法。  
>   >   >   * 访问对象的属性  
>   >   >       objectName.propertyName  
>   >   >   * 访问对象的方法  
>   >   >       objectName.methodName()  
>   >   >* 创建javascript对象  
>   >   >   * 定义并创建对象的实例  
>   >   >       ``` javascript  
>   >   >       person = {firstname:"John",lastname:"Doe",age:50,eyecolor:"blue"};  
>   >   >       ```  
>   >   >   * 使用对象构造器  
>   >   >       ``` javascript  
>   >   >       function person(firstname,lastname,age,eyecolor){
>   >   >           this.firstname = firstname;
>   >   >           this.lastname = lastname;  
>   >   >           this.age=age;  
>   >   >           this.eyecolor = eyecolor;
>   >   >           this.changeName = changeName;
>   >   >           function changeName(name){
>   >   >               this.lastname = name;
>   >   >           }
>   >   >       }  
>   >   >      ```  
>   >2. javascript prototype(原型对象)  
>   >   >所有的javascript对象都会从一个prototype(原型对象)中继承属性和方法。  
>   >   >* prototype继承  
>   >   >   * Date对象从Date.prototype继承。  
>   >   >   * Array对象从Array.prototype继承。  
>   >   >   * Person对象从Person.prototype继承。  
>   >   >   所有javascript中的对象都是位于原型链顶端的Object的实例。  
>   >   >   javascript对象有一个指向一个原型对象的链。当试图访问一个对象的属性时，它不仅仅在该对象上搜索，还会搜索该对象的原型，以及该对象的原型的原型，依次层层向上搜索，知道找到一个名字匹配的属性或到达原型链的末尾。  
>   >   >* 添加属性和方法  
>   >   >   有的时候我们想要在所有已经存在的对象添加新的属性或方法。  
>   >   >   另外，有时候我们想要在对象的构造函数中添加属性和方法。  
>   >   >   使用prototype属性就可以给对象的构造函数添加新的属性。  
>   >3. javascript Number对象  
>   >   >   javascript数字可以使用也可以不使用小数点来书写。  
>   >   >   极大或极小的数字可通过科学计数法来写。  
>   >   >* 所有javascript数字均为64位  
>   >   >   javascript不是类型语言，与许多其他编程语言不同，javascript不定义不同类型的数字，比如整数、短、长、浮点等等。  
>   >   >   在javascript中，数字不分为整数类型和浮点型类型，所有的数字都是由浮点类型。javascript采用IEEE754标准定义的64位浮点格式表示数字  
>   >   >* 精度  
>   >   >   整数(不使用小数点或指数计数法)最多为15位。  
>   >   >   小数的最大位数是17，但是浮点运算并不总是100%准确。  
>   >   >* 八进制和十六进制  
>   >   >   如果前缀为0，则javascript会把数值常量解释为八进制数，如果前缀为0和"x"，则解释为十六进制数。  
>   >   >   但是你可以使用toString()方法输出16进制、8进制、2进制  
>   >   >* 无穷大(Infinity)  
>   >   >   当数字运算结果超过了javascript所能表示的数字的上限(溢出),结果为一个特殊的无穷大(infinity)值，分正负无穷大，基于它们的运算结果还是无穷大。  
>   >   >* NaN-非数字值  
>   >   >   NaN属性是代表非数字值得特殊值，该属性用于指示某个值不是数字。可以把Number对象设置为该值，来指示不是数字值。  
>   >   >   你可以使用isNaN()全局函数来判断一个值是否是NaN值。  
>   >   >   ``` javascript  
>   >   >   var x = 1000/"apple";
>   >   >   isNaN(x);//返回true  
>   >   >   var y=100/"1000";
>   >   >   isNaN(y);//返回false  
>   >   >   var x = 1000/0;
>   >   >   isNaN(x); //返回false,无穷大是一个数字  
>   >   >   ```  
>   >   >* 数字可以是数字或者对象  
>   >   >   数字可以私有数据进行初始化，就像x=123;  
>   >   >   javascript数字对象初始化数据，var y=new Number(123);  
>   >4. javascript 字符串对象  
>   >   >* javascript字符串  
>   >   >   一个字符串用于存储一系列字符就像"John Doe"。  
>   >   >   一个字符串可以使用单引号或双引号。  
>   >   >   你使用位置(索引)可以访问字符串中任何的字符  
>   >   >* 字符串(String)  
>   >   >   字符串(String)使用长度属性length来计算字符串的长度  
>   >   >* 在字符串中查找字符串  
>   >   >   字符串使用indexOf()来定位字符串中一个指定的字符首次出现的位置。  
>   >   >   如果没有找到对应的字符函数返回-1。lastIndexOf()方法在字符串末尾开始查找字符串出现的位置。  
>   >   >* 内容匹配  
>   >   >   match()函数用来查找字符串中特定的字符，并且如果找到的话，则返回这个字符。  
>   >   >* 替换内容  
>   >   >   replace()方法 在字符串中用 某些字符替换另一些字符。  
>   >   >* 字符串大小写转换  
>   >   >   字符串大小写转换使用函数toUpperCase()和toLowerCase()。  
>   >   >* 字符串转为数组  
>   >   >   字符串使用split()函数转为数组。  
>   >5. javascript Date(日期) 对象