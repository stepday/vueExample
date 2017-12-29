var Menu = [
	{
		name:"基础",
		list:[{
			name:"Vuejs是什么",
			url:"main.html"
		},{
			name:"常用指令集合",
			url:"command.html"
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
		},{
			name:"生命周期集合",
			url:"lifecycle.html"
		}]
	},
	{
		name:"中级",
		list:[{
			name:"计算属性computed",
			url:"canculateAtrr.html"
		},{
			name:"侦听属性watch",
			url:"watch.html"
		},{
			name:"自定义组件",
			url:"component.html"
		},{
			name:"动画过渡效果",
			url:"animation.html"
		}]
	},{
		name:"高级",
		list:[{
			name:"可复用性&选项合并",
			url:"itemMerge.html"
		},{
			name:"可复用&全局混合",
			url:"publicMerge.html"
		},{
			name:"自定义指令&全局注册",
			url:"publicCommand.html"
		},{
			name:"自定义指令&局部注册",
			url:"singleCommand.html"
		},{
			name:"渲染函数&render",
			url:"render.html"
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
		$('.result').load('/example/'+$(this).data("url"),function(_html){
			$('.right-box .source').html('<pre class="brush: js;">'+_html.replace(/\app/g,"myapp").replace("script",' script ')+'</pre>');
			SyntaxHighlighter.highlight();
		});
	});

	$('.left-box ul li a:eq(0)').trigger("click");
});