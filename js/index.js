var Menu = [
	{
		name:"基础",
		list:[{
			name:"Vuejs是什么",
			url:"main.html"
		},{
			name:"Hello World",
			url:"helloWorld.html"
		},{
			name:"数据双向绑定",
			url:"bindDouble.html"
		},{
			name:"if else 条件判断",
			url:"ifelse.html"
		},{
			name:"for循环渲染",
			url:"for.html"
		},{
			name:"常用事件集合",
			url:"events.html"
		},{
			name:"按键修饰符大集合",
			url:"keycodes.html"
		}]
	}
];

//ES6 箭头函数

initMenu = () =>{
	var _html = [];
	$(Menu).each(function(){
		_html.push('<h5>'+this.name+'</h5><ul>');
		$(this.list).each(function(){
			_html.push('<li><a data-url="'+this.url+'">'+this.name+'</a></li>');
		});
		_html.push('</ul>');
	});
	$("#menuBox").html(_html.join(''));
};

/**
* 调整大小
*/
resize = () =>{
	var _h = $(window).height();
	$(".main-box").css("height",_h+"px");
};

$(document).ready(function(){
	resize();
	$(window).resize(function(){
		resize();
	});

	initMenu();

	$('.left-box ul li a').click(function(){
		$('.left-box ul li a').removeClass("active");
		$(this).addClass("active");
		$('.right-box .source').load('/example/'+$(this).data("url"),function(_html){
			//显示 输出到显示容器内
			$('.result').html(_html);

			$('.right-box .source').html('<pre class="brush: js;">'+$('.right-box .source').html()+'</pre>');
			
			//源代码高亮
			SyntaxHighlighter.highlight();
		});
	});

	$('.left-box ul li a:eq(0)').trigger("click");
});