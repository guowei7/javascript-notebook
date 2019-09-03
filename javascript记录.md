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