$(function(){
	var inner=1;
	
	var music=[
		{
			name:'方圆几里 (Live)',
			author:'薛之谦 ',
			img:'images/xue.jpg',
			src:'music/薛之谦 - 方圆几里 (Live).mp3',
			geci:"<li>《方圆几里》</li><li></li><li>词/曲/唱：薛之谦</li><li>感觉很诚恳 是好事</li><li>不需要发誓 那么幼稚</li><li>本以为可以 就这样随你</li><li>反正我也无处可去</li><li>我怕太负责任的人</li><li>因为他随时会牺牲</li><li>爱不爱都可以 我怎样都依你</li><li>连借口 我都帮你寻</li><li>与其在你不要的世界里</li><li>不如痛快把你忘记</li><li>这道理谁都懂 说容易 爱透了还要嘴硬</li><li>我宁愿 留在你方圆几里</li><li>我的心 要不回就送你</li><li>因为我爱你 和你没关系</li><li>感觉会压抑 的样子</li><li>勉强 也没什么意思</li><li>我不算很自私 也越来越懂事</li><li>爱你只是我的事</li><li>与其在你不要的世界里</li><li>不如痛快把你忘记</li><li>这道理谁都懂 说容易 爱透了还要嘴硬</li><li>我宁愿 留在你方圆几里</li><li>至少能感受你的悲喜</li><li>在你需要我的时候 就能陪你</li><li>我在你 不要的世界里</li><li>何苦不找个人来代替</li><li>可惜我 谁劝都不停</li><li>我宁愿 留在你方圆几里</li><li>我的心 要不回就送你</li><li>爱不爱都可以 我怎样都依你</li><li>因为我爱你 和你没关系</li><li>我的爱 扩散在方圆几里</li><li>近的能 听见你的呼吸</li><li>只要你转身 我就在这里</li>"
		},
		{
			name:'Ngẫu Hứng',
			author:'Hoaprox',
			img:'images/pdd.jpg',
			src:'music/Hoaprox - Ngẫu Hứng.mp3',
			geci:'<li>Hoaprox - Ngẫu Hứng</li>'
		},
		{
			name:'安和桥',
			author:'包师语',
			img:'images/anhe.jpg',
			src:"music/包师语 - 安和桥.mp3",
			geci:'<li>安和桥 - 包师语</li><li>原唱：宋冬野</li><li>词曲：宋冬野</li><li>编曲：闫天午</li><li>让我再看你一遍 从南到北</li><li>像是被五环路蒙住的双眼</li><li>请你再讲一遍 关于那天</li><li>抱着盒子的姑娘</li><li>和擦汗的男人</li><li>我知道</li><li>那些夏天就像青春一样回不来</li><li>代替梦想的也只能是勉为其难</li><li>我知道</li><li>吹过的牛皮</li><li>也会随青春一笑了之</li><li>让我困在城市里纪念你</li><li>让我再尝一口 秋天的酒</li><li>一直往南方开 不会太久</li><li>让我再听一遍</li><li>最美的那一句</li><li>你回家了 我在等你呢</li><li>我知道</li><li>那个夏天</li><li>就像青春一样回不来</li><li>代替梦想的</li><li>也只能是勉为其难</li><li>我知道</li><li>吹过的牛皮</li><li>也会随青春一笑了之</li><li>让我困在城市里纪念你</li><li>我知道</li><li>那个夏天就像你一样回不来</li><li>我也不会再对谁满怀期待</li><li>我知道</li><li>这个世界 每天都有太多的遗憾</li><li>所以 你好 再见</li><li>我知道</li><li>那个夏天</li><li>就像青春一样回不来</li><li>所以 你好 再见 </li>'
		},
		{
			name:'恋人心',
			author:'魏新雨',
			img:'images/lianren.jpg',
			src:'music/恋人心-魏新雨.mp3',
			geci:'<li>恋人心</li><li>作词：张超</li><li>作曲：张超</li><li>演唱：魏新雨 </li><li>化作风化作雨化作春走向你</li><li>梦如声梦如影梦是遥望的掌印</li><li>化作烟化作泥化作云飘向你</li><li>思如海恋如城思念最遥不可及</li><li>你问西湖水偷走她的几分美</li><li>时光一去不再信誓旦旦留给谁</li><li>你问长江水淘尽心酸的滋味</li><li>剩半颗恋人心唤不回 </li><li>化作风化作雨化作春走向你</li><li>梦如声梦如影梦是遥望的掌印</li><li>化作烟化作泥化作云飘向你</li><li>思如海恋如城思念最遥不可及</li><li>你问西湖水偷走她的几分美</li><li>时光一去不再信誓旦旦留给谁</li><li>你问长江水淘尽心酸的滋味</li><li>剩半颗恋人心唤不回 </li><li>你问西湖水偷走她的几分美</li><li>时光一去不再信誓旦旦留给谁</li><li>你问长江水淘尽心酸的滋味</li><li>剩半颗恋人心唤不回 </li><li>剩半颗恋人心唤不回 </li><li>剩半颗恋人心唤不回 </li>'
		},
		{
			name:'贝多芬的悲伤',
			author:'萧风',
			img:'images/xiaofeng.jpg',
			src:'music/萧风 - 贝多芬的悲伤.mp3',
			geci:'<li>贝多芬的悲伤</li><li>作词：口袋易百</li><li>作曲/编曲/唱/和声/混音：郑毅</li><li>演唱：萧风</li><li>旋律 伴随故事响起</li><li>揭开你 不平凡的传记</li><li>在夜里 天使在黎明前降临</li><li>唤醒 充满奇迹的命运</li><li>倾听 爱丽丝的旋律</li><li>若别离 撕毁我写的信</li><li>当序曲 落幕后拆穿的回忆</li><li>抚慰你 心灵悠扬的协奏曲</li><li>在莱茵河畔 贝多芬的悲伤在徜徉</li><li>诙谐夜晚 遗留在波恩城的泪光</li><li>维也纳 推开 窗 风景却如此委婉</li><li>黑白琴键上 谱写华丽的乐章</li><li>在破旧琴房 弹唱出贝多芬的悲伤</li><li>诙谐街上 探望绚烂欲望的橱窗</li><li>小木船 被遗忘 剩下黯淡的月光</li><li>无力哀叹 谁得情绪彷徨 结局被凌乱</li><li>旋律 伴随故事响起</li><li>揭开你 不平凡的传记</li><li>在夜里 天使在黎明前降临</li><li>唤醒 充满奇迹的命运</li><li>倾听 爱丽丝的旋律</li><li>若别离 撕毁我写的信</li><li>当序曲 落幕后拆穿的回忆</li><li>抚慰你 心灵悠扬的协奏曲</li><li>在莱茵河畔 贝多芬的悲伤在徜徉</li><li>诙谐夜晚 遗留在波恩城的泪光</li><li>维也纳 推开 窗 风景却如此委婉</li><li>黑白琴键上 谱写华丽的乐章</li><li>在破旧琴房 弹唱出贝多芬的悲伤</li><li>诙谐街上 探望绚烂欲望的橱窗</li><li>小木船 被遗忘 剩下黯淡的月光</li><li>无力哀叹 谁得情绪彷徨 结局被凌乱</li>'
		},
		{
			name:'青春记忆',
			author:'颖宝儿',
			img:'images/qingchun.jpg',
			src:'music/颖宝儿 - 青春记忆.mp3',
			geci:'<li>青春记忆</li><li>词曲:李俊杰 颖宝儿</li><li>编曲:李俊杰</li><li>混音：渔圈(KingStar)</li><li>演唱：渔圈&颖宝儿</li><li>lrc by:xlmusic QQ185232744</li><li>看窗外的雨滴</li><li>问我是否想你</li><li>已枯萎的爱情</li><li>没有人会珍惜</li><li>一个人的结局</li><li>没有人看得清</li><li>爱情 继续</li><li>我曾经问自己</li><li>如果我们可以回到过去</li><li>你会不会看见我的日记</li><li>如果真的能够看清自己</li><li>不再喘息是否还会爱你</li><li>lrc by:xlmusic QQ185232744</li><li>看窗外的雨滴</li><li>问我是否想你</li><li>已枯萎的爱情</li><li>没有人会珍惜</li><li>一个人的结局</li><li>没有人看得清</li><li>爱情 继续</li><li>我曾经问自己</li><li>如果我们可以回到过去</li><li>你会不会看见我的日记</li><li>如果真的能够看清自己</li><li>不再喘息是否还会爱你</li><li>如果我们可以回到过去</li><li>你会不会看见我的日记</li><li>如果真的能够看清自己</li><li>不再喘息是否还会爱你</li><li>看窗外的雨滴</li><li>问我是否想你</li><li>已枯萎的爱情</li><li>没有人会珍惜</li><li>一个人的结局</li><li>没有人看得清</li><li>爱情 继续</li><li>我曾经问自己</li><li>如果我们可以回到过去</li><li>你会不会看见我的日记</li><li>如果真的能够看清自己</li><li>不再喘息是否还会爱你</li>'
		}
		
	];
	//声明变量
	var audio = $("#audio").get(0);
	var play = $("#play");
	var pause=$("#pause");
	var current=$("#current-time");
	var duration=$("#duration");
	var progress=$("#progress");
	var progress_1=$("#progress_1");
	var pi=$("#p-i");
	var vol=$("#volume");
	var vi=$("#v-i");
	var mote = $("#mote");
	var but1=$(".pre");
	var but2=$(".next");
	var yinliang=$(".yinliang");
	var authorImg=$(".xiezhen");
		
	//将秒数转为时间
	function format(v){
		var v = Math.floor(v);
		var s = v % 60;
		var m = Math.floor(v/60);
		s = (s < 10)?( '0' + s) : s;
		return m+":"+s;
	}
	$(audio).on("canplay",function(){
		duration.html(format(audio.duration));
	})
	function render(){
		$("#list").empty();
		audio.src = music[inner].src;
		head();
		$.each(music,function(i , v){
			var c=(i === inner) ? "active" : "";
			$('<li class="'+c+'"><span class="name">'+v.name+'</span>-<span class="author">'+v.author+'</span><span class="delete">删除<span></li>').appendTo("#list");

		});
	}
	
	//删除
	$("#list").on("touchend",".delete",function(){
		var aa=$(this).closest("li")
		var num=aa.index()
		music.splice(num,1);
		
		if(num==inner){
			if(music[inner]){
				audio.src=music[inner].src;
			}else{
				audio.src="";
				inner=0;
			}
			
		}else if(num > inner){
			
		}else if(num < inner){
			inner-=1
		}
		render();
		head();
		 audio.play()
		return false;
	})
	
	//头部歌名和歌手 歌词
	function head(){
		$("#head").html("");
		$("#author").html("");
		$("#geci").html("");
		$(".xiezhen").html("");
		$('<li class="headname">'+music[inner].name+'</li>').appendTo("#head");
		$('<li class="headauthor">—'+music[inner].author+'—</li>').appendTo("#author");
		$('<ul class="geci">'+music[inner].geci+'</ul>').appendTo("#geci");
		$('<img src="'+music[inner].img+'"/>').appendTo('.xiezhen');
		
	}

	$("#list").on("click","li",function(){
		$("#list").find("li").removeClass('active');
		$(this).addClass("active");
		inner = $(this).index();
		audio.src = music[inner].src;
		audio.play();
		head();
		return false;
	});
	render();
	head();
	//播放和暂停
	play.on("click",function(){
	
		if(audio.paused){
			audio.play();
			head()
		}else{
			audio.pause();
		}
	});

	$(audio).on("play",function(){
			play.html("&#xe609;");
	})
	$(audio).on("pause",function(){
			play.html("&#xe60d;");
	})
	//歌曲播放过程中调用的函数
	$(audio).on("timeupdate",function(){
		current.html(format(audio.currentTime));
		var left = progress.width() * audio.currentTime / audio.duration - pi.width() / 2;
		pi.css("left",left);
		progress_1.css("width",left);
		var geciHeight=$("#geci .geci").height()
		var height=geciHeight* audio.currentTime / audio.duration ;
		$("#geci .geci").css("top","100"-height)
		var index=Math.floor(($(".geci li").length)*audio.currentTime / audio.duration)
		$(".geci li").css("color","white").eq(index).css("color","#D40203");
	});
	//歌曲进度条点击
	progress.on('click',function(e){
		audio.currentTime=e.offsetX/$(this).width()*audio.duration;
		return false;
	});	
	pi.on('click',false);
	// duration.html=format(audio.duration);	
	//歌曲进度拖拽
	pi.on('touchend',function(e){
		var r=pi.width()/2;
		var start=r-e.offsetX;
//		var start=e.offsetX;
		$(document).on('touchmove',function(e){
			var left=e.clientX-progress.position().left+start;
			var c = left/progress.width()*audio.duration;
			progress_1.css("width",left);
			if(c >= audio.duration || c <= 0){
				return;
			}
			audio.currentTime=c;
		});
		return false;
	});
	$(document).on('touchend',function(){
		$(document).off("touchmove");
	});
	//音频进度条点击
	vol.on("click",function(e){
		audio.volume = e.offsetX / vol.width();
		mote.removeAttr('data-v');
		return false;
	});
	vi.on('click',false);
	//音频拖拽
	vi.on("touchstart" , function(e){
//		e.preventDefault();
		var r = vi.width() / 2;
		var start = r - e.offsetX;
		$(document).on("touchmove" , function(e){
//			console.log(e.clientX);
			var left = e.clientX - vol.position().left + start;
			var v = left / vol.width();
			if(v > 1 || v < 0){
				return;
			}
			audio.volume = v;
		})
	});
	$(document).on('touchend',function(){
		$(document).off("touchmove");
	});
	//静音
	mote.on("touchend",function(){
		if($(this).attr("data-v")){
			audio.volume=$(this).attr("data-v");
			$(this).removeAttr("data-v");
			$(this).html("&#xe694;");
			
		}else{
			$(this).attr("data-v",audio.volume);
			audio.volume=0;
			$(this).html("&#xe614;");
			
		}
	});
	$(audio).on("volumechange",function(){
		vi.css("left",vol.width() * audio.volume - vi.width() / 2);		
	});
	
	
	but1.eq(0).click(function(){
		if(inner==undefined){
			inner=music.length-1;
		}else{
			inner--
			if(inner<0){
			inner=music.length-1;
	        }
		}
		render()
		head()
		audio.play();
	})	
	but2.eq(0).click(function(){
		if(inner==undefined){
			inner=0;
		}else{
			inner++
			if(inner>=music.length){
			inner=0;
		   }
		}
		render()
		head()
		audio.play();
	})
//默认状态
yinliang.css("display","none")
$(".liebiao").css("display","none")
//音量显示及隐藏
	$(".header").on("touchend",".dian",function(){
		yinliang.slideToggle()
//		return false;
	})
//	yinliang.on("touchend",".yl_2",function(){
//		yinliang.css("display","none");
//		return false;
//	})
//列表显示及隐藏

	$(".foot").on("touchend",".list_1",function(){
		$(".liebiao").slideToggle();
//		return false;
	})
//	$(".liebiao").on("touchend",".qx_1",function(){
//		$(".liebiao").css("display","none");
//		return false;
//	})
	//闪屏
	$(".shan").on("touchstart",function(e){
    	 pos=e.originalEvent.changedTouches[0].clientX
    	
    })
    var now=0
    $(".shan").css("display","none").eq(0).css("display","block")
	$(".shan").on("touchend",function(e){
  	 var y=e.originalEvent.changedTouches[0].clientX
 	 var index=$(this).index()
  	 if(y-pos<=-30){
 	 	now++
  	 	if(now>=$(".shan").length){
  	 		return;
 	 	}
 	 	$(".shan").css("display","none").eq(now).css("display","block") 	 	
 	 }
//	 if(y-pos>=30){
//	 	if(now==1){
// 	 		$(".shan").css("display","none").eq(now).css("display","block")
// 	    } 
//     }
  })
	
	//写真切换
//	$(audio).on("loadstart",function(){
//		authorImg.css("background-image",music[inner].img);
//	})
	
	
	$(audio).on("ended",function(){
		inner++
	})
	
	
});
