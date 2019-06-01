$(function(){
	//小水平轮播按钮
			$('.leftBtn').click(function(){
				$('.btnBox02').css('left','-48px');
			})
			$('.rightBtn').click(function(){
				$('.btnBox02').css('left','20px');
			})
			//路径轮播
			$('.btnPic').mouseover(function(){
				var oIndex = $('.btnPic').index(this);	
				$('.btnPic').each(function(i){
					if(i == oIndex){
						$('.btnPic').eq(i).css('borderColor','gray');
					}else{
						$('.btnPic').eq(i).css('borderColor','white');
					}
				})
				var oIndex02;
				oIndex02 =  oIndex+1;
//				console.log(oIndex);
//				console.log(oIndex02);
				$('.11').attr('src','img/goodsDetail/bigPic0'+oIndex02+'.jpg');
			})
			//口味选择时的边框变化
			$('.tasteBox').click(function(){
				var oIndex03 = $('.tasteBox').index(this);	
				$('.tasteBox').each(function(i){
					if(i == oIndex03){
						$('.tasteBox').eq(i).css('borderColor','orangered');
					}else{
						$('.tasteBox').eq(i).css('borderColor','gray');
					}
				})
			})
			
			//放大镜效果
			$('.bigPic').mousemove(function(event){
				var nowleft = Math.floor(event.pageX - $('.bigPic').offset().left)-80;
				var nowtop = Math.floor(event.pageY - $('.bigPic').offset().top)-80;
//				console.log(nowleft,nowtop);
				if(nowleft<10){
					nowleft = 20;
				}
				if(nowtop<20){
					nowtop = 20;
				}
				if(nowleft>200){
					nowleft = 200;
				}
				if(nowtop>230){
					nowtop = 230;
				}
				$('.squre').css({
					'top':nowtop,
					'left':nowleft
				})
				$('.bb').css({
					'top':-nowtop*1.7,
					'left':-nowleft*2
				})
			})
			
			$('#Button').on('click','.upButton',function(){	
//				var oLindex = $('.upButton').index(this);
				var addNum01 = $('.number').html();
//				console.log(addNum01);
                addNum01++;
				$('.number').html(addNum01);
			})
			
			$('#Button').on('click','.downButton',function(){
				var addNum02 = $('.number').html();
				if($('.number').html()<1){
					addNum02 = 0;
				}else{
					addNum02--;
				}
				$('.number').html(addNum02);
			})
})