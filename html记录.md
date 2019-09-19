### <center>HTML记录</center> ###
>* HTML链接  
>   HTML使用标签a来设置超文本链接。  
>   超链接可以是一个字，一个词，或者一组词，也可以是一幅图像。  
>   在标签a中使用href属性来描述链接的地址。  
>   >* HTML链接语法  
>   >   ``` HTML 
>   >   <a href="url">链接文本</a>  
>   >   ```  
>   >* HTML-target属性  
>   >   使用target属性，你可以定义被链接的文档在何处显示。  
>   >   <table>
>   >       <thead>
>   >           <tr>
>   >               <th>target值</th>
>   >               <th>描述</th>
>   >           </tr>
>   >       </thead>
>   >       <tbody>
>   >           <tr>
>   >               <td>_blank</td>
>   >               <td>在新窗口中打开文档</td>
>   >           </tr>
>   >           <tr>
>   >               <td>_self</td>
>   >               <td>默认值，在当前窗口中打开文档</td>
>   >           </tr>
>   >           <tr>
>   >               <td>_parent</td>
>   >               <td>在父frame中打开文档，如果当前为顶级则与_self相同</td>
>   >           </tr>
>   >           <tr>
>   >               <td>_top</td>
>   >               <td>在最外层的frame中打开文档，如果当前文档已是最顶级则与_self相同</td>
>   >           </tr>
>   >           <tr>
>   >               <td>framname</td>
>   >               <td>在指定的framename中打开文档</td>
>   >           </tr>
>   >       </tbody>
>   >   </table>
>   >* HTML-id属性  
>   >   id属性可用于创建在一个HTML文档书签标记  
>   >   在HTML文档中插入ID  
>   >   ``` HTML  
>   >   <a id="tips">有用的提示</a>  
>   >   ```  
>   >   在当前的HTML文档中创建一个链接到"有用的提示部分(id=tips)"  
>   >   ``` HTML  
>   >   <a href="#tips">访问有用大的提示部分</a>  
>   >   ```  
>   >   从另一个页面创建一个链接到"有用的提示部分(id=tips)"  
>   >   ``` HTML  
>   >   <a href="https://www.runoob.com/html/html-links.html#tips">访问有用的提示部分</a>  
>   >   ```  
>* HTML头部  
>   head元素包含了所有的头部标签元素。在head元素中你可以插入脚本(scripts)、样式文件(CSS)、以及各种meta信息。  
>   >* title元素  
>   >   title标签定义了不同文档的标题。  
>   >   title在HTML文档中是必须的。  
>   >   定义了浏览器工具栏的标题、当网页添加到收藏夹时，显示在收藏夹中的标题、显示在搜索引擎结果页面的标题。  
>   >* base元素  
>   >   base元素描述了基本的链接地址/链接目标，该标签作为HTML文档中所有的链接标签的默认链接。  
>   >   ``` HTML 
>   >   <head>
>   >       <base href="#" target="_blank">
>   >   </head>  
>   >   ```  
>   >* link元素  
>   >   link标签定义了文档与外部资源之间的关系。  
>   >   link标签通常用于链接到样式表  
>   >   ``` HTML  
>   >   <head>
>   >       <link rel="stylesheet" type="text/css" href="mystyle.css">
>   >   </head>  
>   >   ```  
>   >* style元素  
>   >   style标签定义了HTML文档的样式文件引用地址  
>   >   在style元素中你也快成直接添加样式来渲染HTML文档  
>   >* meta元素  
>   >   meta标签描述了一些基本的元数据。  
>   >   meta标签提供了元素据，元数据也不显示在页面上，但会被浏览器解析。  
>   >   使用实例:  
>   >   ``` HTML  
>   >   <head>
>   >       用于搜索引擎定义关键字
>   >       <meta name="keywords" content="HTML,CSS">
>   >       为网页定义描述内容
>   >       <meta name="description" content="免费">
>   >       定义网页作者
>   >       <meta name="author" content="gw">
>   >       用于移动端显示优化
>   >       <meta name="viewport" content="width=device-width, initial-scale=1.0">
>   >       每30秒钟刷新当前页面
>   >       <meta http-equiv="refresh" content="30">
>   >   </head>  
>   >   ```  
>* HTML表格  
>   表格由table标签来定义。每个表格均有若干行(由tr标签定义),每个被分割成若干个单元格(由td标签定义)。单元格可以包含文本、图片、列表、段落、表单、水平线、表格等等。  
>   >* HTML表格边框属性  
>   >   如果不定义边框属性，表格将不显示边框。有时这很有用，但是大多数时候，我们希望显示边框。  
>   >   border="1"  
>   >* HTML表格表头  
>   >   表格的表头使用th标签进行定义。  
>   >   大多数浏览器会把表头显示为粗体居中的文本  
>   >* HTML跨行或跨列  
>   >   进行跨行时,在要进行跨行的单元格元素添加rowspan属性:rowspan="2"  
>   >   进行跨列时,在要进行跨列的单元格元素添加colspan属性:colspan="2"  
>* HTML列表  
>   HTML支持有序、无序和定义列表  
>   >* 无序列表  
>   >   ``` HTML 
>   >   <ul style="list-style-type:disc">
>   >       <li>coffee</li>
>   >       <li>milk</li>
>   >   </ul>  
>   >   ```  
>   >   HTML5中不再支持ul属性使用css样式来设置无序的类型
>   >* 有序列表  
>   >   ``` HTML  
>   >   <ol type="A">
>   >       <li>coffee</li>
>   >       <li>milk</li>
>   >   </ol>  
>   >   ```  
>   >   type属性表示展示的类型
>   >* 自定义列表  
>   >   自定义列表不仅仅是一列项目，而是项目及其注释的组合。  
>   >   自定义列表以dl标签开始。每个自定义列表以dt开始，定义以dd开始  
>   >   ``` HTML 
>   >   <dl>
>   >       <dt>coffee</dt>
>   >       <dd>black hot drink</dd>
>   >       <dt>milk</dt>
>   >       <dd>white cold drink</dd>
>   >   </dl>  
>* HTML区块  
>   大多数HTML元素被定义为块级元素或内联元素。  
>   >* 区块元素  
>   >   块级元素在浏览器显示时，通常以新行来开始(和结束)。  
>   >   实例: h1、p、ul、table  
>   >* 内联元素  
>   >   内联元素在显示时通常不会以新行开始。  
>   >   实例: b、td、a、img  
>   >* div元素  
>   >   div元素是块级元素，它可用于组合其他HTML元素的容器。  
>   >   div元素没有特定的含义。除此之外，由于它属于块级元素，浏览器会在其前后显示折行。  
>   >   如果与CSS一同使用，div元素可用于对大的内容块设置样式属性。  
>   >   div元素的另一个常见的用途是文档布局。它取代了使用表格定义布局的老式方法。  
>   >* span元素  
>   >   span元素是内联元素，可用作文本的容器。  
>   >   当与CSS一同使用时，span元素可用于为部分文本设置样式属性。  
>* HTML表单  
>   HTML表单用于收集不同类型的用户输入。  
>   表单是一个包含表单元素的区域。  
>   表单元素是允许用户在表单中输入内容，比如:文本域、下拉列表、单选框、复选框等等。  
>   表单使用标签form来设置。  
>   >* 输入元素  
>   >   多数情况下被用到的表单标签是输入标签(input)。  
>   >   输入类型是由类型属性(type)定义的。大多数经常被用到的输入类型如下:
>   >       * 文本域(text)  
>   >       * 密码字段(password)  
>   >       * 单选按钮(radio)  
>   >       * 复选框(checkbox)  
>   >       * 提交按钮(submit)  
>   >* 文本域(textarea)  
>   >* input元素的标签(label)  
>   >* fieldset标签  
>   >   定义了一组相关的表单元素，并使用外框包含起来。  
>   >* 下拉列表标签(select)  
>   >* datalist标签  
>   >   指定一个预先定义的输入控件选项列表  
>* HTML框架  
>   通过使用框架，你可以在同一个浏览器窗口中显示不止一个页面  
>   ``` HTML  
>   <iframe src="URL"></iframe>  
>   ```  
>   >* 设置高度与宽度  
>   >   height和width属性用来定义iframe标签的高度与宽度。  
>   >* 移除边框  
>   >   frameborder属性用于定义iframe表示是否显示边框。  
>* HTML5  
>   >* HTML5新元素  
>   >   <b>canvas新元素</b>  
>   >   <table>
>   >       <thead>
>   >           <tr>
>   >               <th>标签</th>
>   >               <th>描述</th>
>   >           </tr>
>   >       </thead>
>   >       <tbody>
>   >           <tr>
>   >               <td>canvas</td>
>   >               <td>标签定义图形，比如图表和其他图像。该标签基于js的绘图API</td>
>   >           </tr>
>   >       </tbody>
>   >   </table>
>   >   <b>新多媒体元素</b>  
>   >   <table>
>   >       <thead>
>   >           <tr>
>   >               <th>标签</th>
>   >               <th>描述</th>
>   >           </tr>
>   >       </thead>
>   >       <tbody>
>   >           <tr>
>   >               <td>audio</td>
>   >               <td>定义音频内容</td>
>   >           </tr>
>   >           <tr>
>   >               <td>video</td>
>   >               <td>定义视频</td>
>   >           </tr>
>   >           <tr>
>   >               <td>source</td>
>   >               <td>定义多媒体资源video和audio</td>
>   >           </tr>
>   >           <tr>
>   >               <td>embed</td>
>   >               <td>定义嵌入的内容，比如插件。</td>
>   >           </tr>
>   >           <tr>
>   >               <td>track</td>>
>   >               <td>为video和audio元素之类的媒介规定外部文本轨道</td>
>   >           </tr>
>   >       </tbody>
>   >   </table>  
>   >   <b>新表单元素</b>  
>   >   <table>
>   >       <thead>
>   >           <tr>
>   >               <th>标签</th>
>   >               <th>描述</th>
>   >           </tr>
>   >       </thead>
>   >       <tbody>
>   >           <tr>
>   >               <td>datalist</td>
>   >               <td>定义选项列表，请与input元素配合使用该元素，来定义input可能的值</td>
>   >           </tr>
>   >           <tr>
>   >               <td>keygen</td>
>   >               <td>规定用于表单的密钥对生成器字段</td>
>   >           </tr>
>   >           <tr>
>   >               <td>output</td>
>   >               <td>定义不同类型的输出</td>
>   >           </tr>
>   >       </tbody>
>   >   </table>  
>   >   <b>新的语义和结构元素</b>  
>   >   <table>
>   >       <thead>
>   >           <tr>
>   >               <th>标签</th>
>   >               <th>描述</th>
>   >           </tr>
>   >       </thead>
>   >       <tbody>
>   >           <tr>
>   >               <td>header</td>
>   >               <td>定义了文档的头部区域</td>
>   >           </tr>
>   >           <tr>
>   >               <td>footer</td>
>   >               <td>定义section或document的页脚</td>
>   >           </tr>
>   >           <tr>
>   >               <td>section</td>
>   >               <td>定义文档中的节</td>
>   >           </tr>
>   >           <tr>
>   >               <td>nav</td>
>   >               <td>定义导航链接的部分</td>
>   >           </tr>
>   >           <tr>
>   >               <td>article</td>
>   >               <td>定义页面独立的内容区域</td>
>   >           </tr>
>   >           <tr>
>   >               <td>aside</td>
>   >               <td>定义页面的侧边栏内容</td>
>   >           </tr>
>   >           <tr>
>   >               <td>figure</td>
>   >               <td>规定独立的流内容(图像、图表、照片、代码等等)</td>
>   >           </tr>
>   >       </tbody>
>   >   </table>  
>   >* HTML5 Canvas  
>   >   canvas标签定义图形，比如图表和其他图像，您必须使用脚本来绘制图形。
>   >   <a href="https://www.runoob.com/html/html5-canvas.html">基本教程</a>  
>   >* HTML5内联SVG  
>   >   * SVG指可伸缩矢量图形(Scalable Vector Graphics)  
>   >   * SVG用于定义用于网络的基于矢量的图形  
>   >   * SVG使用XML格式定义图形  
>   >   * SVG图像在放大或改变尺寸的情况下其图形质量不会有损失  
>   >   * SVG是万维网联盟的标准  
>   >   >* SVG与Canvas两者间的区别  
>   >   >   SVG是一种使用XML描述2D图形的语言。  
>   >   >   Canvas通过js来绘制2D图形。  
>   >   >   SVG基于XML，这意味着SVG DOM中的每个元素都是可用的。您可以为某个元素附加js事件处理器。  
>   >   >   在SVG中，每个被绘制的图形均被视为对象。如果SVG对象的属性发生变化，那么浏览器能自动重现图形  
>   >   >   Canvas是逐像素进行渲染的。在canvas中，一旦图形被绘制完成，它就不会继续得到浏览器的关注。如果其位置发生变化，那么整个场景也需要重新绘制，包括任何或许已被图形覆盖的对象。  
>   >* HTML5拖放(Drag和Drop)  
>   >   拖放式HTML5标准的组成部分。拖放是一种常见的特性，即抓取对象以后拖到另一个位置。  
>   >   >1. 设置元素为可拖放  
>   >   >   为了使元素可拖动，把draggable属性设置为true:
>   >   >2. 拖动什么  
>   >   >   规定当元素被拖动时，会发生什么。  
>   >   >   ondragstart属性调用了一个函数drag。它规定了被拖动的数据。  
>   >   >   dataTransfer.setData()方法设置被拖数据的数据类型和值。
>   >   >   ``` javascript  
>   >   >   function drag(ev){
>   >   >       ev.dataTransfer.setData("Text",ev.target.id);
>   >   >   }  
>   >   >   ```
>   >   >3. 放到何处  
>   >   >   ondragover事件规定在何处放置被拖动的数据。  
>   >   >   默认地，无法将数据/元素放到其他元素中。如果需要设置允许放置，我们必须阻止对元素的默认处理方式。
>   >   >   event.preventDefault()  
>   >   >4. 进行放置  
>   >   >   当放置被拖数据时，会发生drop事件。  
>   >   >   在上面的例子中，ondrop属性调用了一个函数，drop。  
>   >   >   ``` javascript  
>   >   >   function drop(ev){
>   >   >       ev.preventDefault();//避免浏览器对数据的默认处理。
>   >   >       var data = ev.dataTransfer.getData("Text");//获取被拖动的数据
>   >   >       ev.target.appendChild(document.getElementById(data));//将被拖元素追加到放置元素中。 
>   >   >   }
>   >   >   ```  
>   >* HTML5 Web存储  
>   >   web存储是一个比cookie更好的本地存储方式。  
>   >   >* localStorage  
>   >   >   用于长久保存整个网站的数据，保存的数据没有过期时间，直到手动去除。  
>   >   >* sessionStorage  
>   >   >   用于临时保存同一窗口(或标签页)的数据，在关闭窗口或标签页之后将会删除这些数据。  
>   >   >* localStorage和sessionStorage常用的API都相同  
>   >   >   * 保存数据:localStorage.setItem(key,value)  
>   >   >   * 读取数据:localStorage.getItem(key)  
>   >   >   * 删除单个数据:localStorage.removeItem(key)  
>   >   >   * 删除所有数据:localStorage.clear()  
>   >   >   * 得到某个索引的key:localStorage.key(index)  
>   >* HTML5 Web SQL数据库  
>   >   Web SQL数据库API并不是HTML5规范的一部分，但是它是一个独立的规范，引入了一组使用SQL操作客户端数据库的API。
>   >   >* 核心方法  
>   >   >   * openDatabase：使用现有的数据库或者新建的数据库创建一个数据库对象。  
>   >   >   * transaction:这个方法让我们能够控制一个事务，以及基于这种情况执行提交或者回滚。  
>   >   >   * executeSql:用于执行实际的SQL查询。  
>   >   >   ``` javascript 
>   >   >   var db = openDatabase('mydb','1.0','Test DB',2*1024*1024);
>   >   >   db.transaction（function(tx）{
>   >   >       tx.executeSql('CREATE TABLE IF NOT EXISTS LOGS (id unique,log)')
>   >   >       tx.executeSql('INSERT INTO LOGS (id, log) VALUES (1, "菜鸟教程")');
>   >   >       //我们也可以使用动态值来插入数据  
>   >   >       tx.executeSql('INSERT INTO LOGS (id,log) VALUES (?, ?)', [e_id, e_log]);  
>   >   >   });
>   >   >   db.transaction(function (tx) {  
>   >   >       tx.executeSql('SELECT * FROM LOGS', [], function (tx, results) {  
>   >   >          var len = results.rows.length, i;  
>   >   >          msg = "<p>查询记录条数: " + len + "</p>";  
>   >   >          document.querySelector('#status').innerHTML +=  msg;  
>   >   >          for (i = 0; i < len; i++){  
>   >   >              alert(results.rows.item(i).log );  
>   >   >          }  
>   >   >      }, null);  
>   >   >   });    
>   >   >   ```  
>   >* HTML5 应用程序缓存  
>   >   使用HTML5，通过创建cache manifest文件，可以轻松地创建web应用的离线版本。  
>   >   >* CM基础  
>   >   >   如需启用应用程序缓存，请在文档的html标签中包含manifest属性  
>   >   >   每个指定了manifest的页面在用户对其访问时都会被缓存。如果未指定manifest属性，则页面不会被缓存(除非在manifest文件中直接指定了该页面)。  
>   >   >   manifest文件的建议的文件扩展名是".appcache"。  
>   >   >   manifest文件需要配置正确的MIME-type,即"text/cache-manifest",必须在web服务器上配置。  
>   >   >* manifest文件  
>   >   >   manifest文件是简单的文本文件，它告知浏览器被缓存的内容(以及不缓存的内容)  
>   >   >   * CACHE MANIFEST:在此标题下列出的文件将在首次下载后进行缓存。  
>   >   >   * NETWORK:在此标题下列出的文件需要与服务器的连接，且不会被缓存。  
>   >   >   * FAILBACK:在此标题下列出的文件规定当页面无法访问时的回退页面。  
>   >   >   完整的文件如下  
>   >   >   ```  text 
>   >   >   CACHE MANIFEST  
>   >   >   # 2012-02-21 v1.0.0  
>   >   >   /home.css  
>   >   >   /logo.gif  
>   >   >   /main.js 
>   >   >   
>   >   >   NETWORK:  
>   >   >   login.php  
>   >   >   
>   >   >   FAILBACK:  
>   >   >   /html/ /offline.html  
>   >   >   ```  
>   >   >   以 "#" 开头的是注释行，但也可满足其他用途。应用的缓存会在其 manifest 文件更改时被更新。如果您编辑了一幅图片，或者修改了一个 JavaScript 函数，这些改变都不会被重新缓存。更新注释行中的日期和版本号是一种使浏览器重新缓存文件的办法。
>   >   >* 更新缓存  
>   >   >   一旦应用被缓存，它就会保持缓存直到发生下列情况:  
>   >   >   * 用户清空浏览器缓存  
>   >   >   * manifest文件被修改  
>   >   >   * 由程序来更新应用缓存  
>   >* HTML Web Workers  
>   >   web worker是运行在后台的javascript，不会影响页面的性能。  
>   >   当在HTML页面中执行脚本时，页面的状态是不可响应的，直到脚本已完成。  
>   >   web worker是运行在后台的，独立于其他脚本，不会影响页面的性能。您可以继续做任何愿意做的事情:点击、选取内容等等，而此时web worker在后台运行。  
>   >   >* web worker实例  
>   >   >   ``` javascript  
>   >   >   var w;
>   >   >   function startWorker(){
>   >   >       //判断是否支持Web Worker
>   >   >       if(typeof(Worker)!== "undefined"){
>   >   >           if(typeof(w) == "undefined"){
>   >   >               //新建Worker对象
>   >   >               w = new Worker("demo_workers.js");
>   >   >           }
>   >   >           //接受Worker传递回的数据
>   >   >           w.onmessage = function(event){
>   >   >               document.getElementById("result").innerHTML = event.data;
>   >   >           }
>   >   >       }else{
>   >   >           document.getElementById("result").innerHTML = "抱歉，你的浏览器不支持Web Worker"
>   >   >       }
>   >   >   }  
>   >   >   function stopWorker(){
>   >   >       //停止worker
>   >   >       w.terminate();
>   >   >       w = undefined;
>   >   >   }
>   >   >   ```  
>   >   >   demo_workers.js如下  
>   >   >   ``` javascript  
>   >   >   var i =0;
>   >   >   function timedCount(){
>   >   >       i++;
>   >   >       //用于向HTML页面传回消息
>   >   >       postMessage(i);
>   >   >       setTimeout("timedCount()",500);
>   >   >   }
>   >   >   timedCount();
>   >   >   ```  
>   >* HTML5 服务器发送事件(Server-sent Events)  
>   >   允许网页获得来自服务器的更新。  
>   >   ``` javascript  
>   >   if(typeof(EventSource)!=="undefined"){
>   >       //规定发送更新的URL并创建EventSource对象
>   >       var source = new EventSource("demo_sse.php");
>   >       //每接受到一次更新，就会发生onmessage事件。
>   >       source.onmessage = function(event){
>   >           document.getElementById("result").innerHTML+=event.data+"<br>";
>   >       }
>   >   }else{
>   >       document.getElementById("result").innerHTML = "你的浏览器不支持server-sent事件"
>   >   }  
>   >   ```
>   >   服务端需要把包头设置为"text/event-stream"  
>   >* HTML5 WebSocket  
>   >   WebSocket是HTML5开始提供的一种在单个TCP连接上进行全双工通讯的协议。  
>   >   WebSocket使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。在WebSocketAPI中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。  
>   >   在WebSocket API中，浏览器和服务器只需要做一个握手的动作，然后，浏览器和服务器之间就形成了一条快速通道。两者之间就直接可以数据互相传送。  
>   >   现在，很多网站为了实现推送技术，所用的技术都是Ajax轮询。轮询是在特定的时间间隔，由浏览器对服务器发出HTTP请求，然后由服务器返回最新的数据给客户端的浏览器。这种传统的模式带来很明显的缺点，即浏览器需要不断的向服务器发出请求，然而HTTP请求可能包含较长的头部，其中真正有效的数据可能只是很小的一部分，显然这样会浪费很多的带宽等资源。  
>   >   <img src="./WebSocket.png">
>   >   >* 创建WebSocket对象  
>   >   >   var Socket = new WebSocket(url,[protocol]);  
>   >   >   url指定连接的URL，protocol是可选的，指定了可接受的子协议。  
>   >   >   Socket.readyState：只读属性readyState表示连接状态。  
>   >   >   Socket.bufferedAmount：只读属性bufferedAmount已被send()放入正在队列中等待传输，但是还没有发出的UTF-8文本字节数。  
>   >   >* WebSocket事件  
>   >   >   <table>
>   >   >       <thead>
>   >   >           <tr>
>   >   >               <th>事件</th>
>   >   >               <th>事件处理程序</th>
>   >   >               <th>描述</th>
>   >   >           </tr>
>   >   >       </thead>
>   >   >       <tbody>
>   >   >           <tr>
>   >   >               <td>open</td>
>   >   >               <td>Socket.onopen</td>
>   >   >               <td>连接建立时触发</td>
>   >   >           </tr>
>   >   >           <tr>
>   >   >               <td>message</td>
>   >   >               <td>Socket.onmessage</td>
>   >   >               <td>客户端接收服务端数据时触发</td>
>   >   >           </tr>
>   >   >           <tr>
>   >   >               <td>error</td>
>   >   >               <td>Socket.onerror</td>
>   >   >               <td>通信发生错误时触发</td>
>   >   >           </tr>
>   >   >           <tr>
>   >   >               <td>close</td>
>   >   >               <td>Socket.onclose</td>
>   >   >               <td>连接关闭时触发</td>
>   >   >           </tr>
>   >   >       </tbody>
>   >   >   </table>  
>   >   >* WebSocket方法  
>   >   >   <table>
>   >   >       <thead>
>   >   >           <tr>
>   >   >               <th>方法</th>
>   >   >               <th>描述</th>
>   >   >           </tr>
>   >   >       </thead>
>   >   >       <tbody>
>   >   >           <tr>
>   >   >               <td>Socket.send()</td>
>   >   >               <td>使用连接发送数据</td>
>   >   >           </tr>
>   >   >           <tr>
>   >   >               <td>Socket.close()</td>
>   >   >               <td>关闭连接</td>
>   >   >           </tr>
>   >   >       </tbody>
>   >   >   </table>   
>   >   >* WebSocket实例  
>   >   >   WebSocket协议本质是上一个基于TCP的协议。
>   >   >   为了建立一个WebSocket连接，客户端浏览器首先要向服务器发起一个HTTP请求，这个请求和通常的HTTP请求不同，包含了一些附加头信息，其中附加头信息"Upgrade:WebSocket"表明这是一个申请协议升级的HTTP请求，服务端解析这些附加的头信息然后产生应答信息返回给客户端，客户端和服务端的WebSocket连接就建立起来了，双方就可以通过这个连接通道自由的传递信息，并且这个连接会持续存在直到客户端或者服务端的某一方主动的关闭连接。  
>   >   >   ``` javascript  
>   >   >   function WebSocketTest(){
>   >   >       if(WebSocket!==undefined){
>   >   >           var ws = new WebSocket("ws://localhost:9998/echo");
>   >   >           
>   >   >           ws.onopen = function(){
>   >   >               ws.send("发送数据");
>   >   >           }
>   >   >           ws.onmessage = function(event){
>   >   >               var reveived_msg = event.data;
>   >   >           }
>   >   >           ws.onclose = function(){
>   >   >               alert("连接已关闭");
>   >   >           }
>   >   >       }else{
>   >   >           alert("您的浏览器不支持WebSocket")
>   >   >       }
>   >   >   } 
