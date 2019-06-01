$(function(){
	$('#listBodyNavBox02').focus(function(){
				$('#listBodyNavBox03').css('backgroundColor','orangered');
				$('#listBodyNavBox03').css('color','white');
			})
			$('#listBodyNavBox02').blur(function(){
				$('#listBodyNavBox03').css('backgroundColor','white');
				$('#listBodyNavBox03').css('color','black');
			})
			
			$('#chose').click(function(){
                $('#chose').css('display','none');
				$('#listBodyType01grandSon').css('display','block');
				$('#buttonS').css('display','block');
			})
			$('#sure').click(function(){
				$('#chose').css('display','block');
				$('#listBodyType01grandSon').css('display','none');
				$('#buttonS').css('display','none');
			})
			$('#delay').click(function(){
				$('#chose').css('display','block');
				$('#listBodyType01grandSon').css('display','none');
				$('#buttonS').css('display','none');
			})
			//动态创建
			$(function(){
				$.each(srr1, function(index,data) {
					var str = `<div class="goodListBox">
								<div id="goodListBox02"><a href="goodsDetail.html"><img src="${data.pic}"/></a></div>
								<div id="goodListBox03">
									<p>${data.price}</p>
								</div>
								<div id="goodListBox04">
									<p>
										<span class="Detail">${data.Detail01}</span>
										${data.Detail02}
									</p>
								</div>
								<div id="goodListBox05">
									<div class="number l">1</div>
									<div id="Button" class="l">
										<div class="upButton"><span>+</span></div>
										<div class="downButton"><span>-</span></div>
									</div>
									<div id="addShopcar" class="l">
										加入购物车
									</div>
								</div>
								<div class="comment">
									<div class="Sbox l"><img src="img/list/info.png"/></div>
									<span class="l">${data.read}+</span> 
									<div class="Sbox l" style="margin-left: 20px;"><img src="img/list/nice.png"/></div>
									<span class="l commentText">${data.nice}</span>
								</div>
							</div>`;
					$('#goodList').eq(0).append(str);
				});
			})
			$('#goodList').on('click','.upButton',function(){	
				var oLindex = $('.upButton').index(this);
				var addNum01 = $('.number').eq(oLindex).html();
                addNum01++;
                console.log(oLindex);
                 console.log(addNum01);
				$('.number').eq(oLindex).html(addNum01);
				console.log($('.number').eq(oLindex).html(addNum01++));
			})
			
			$('#goodList').on('click','.downButton',function(){
				var oLindex2 = $('.downButton').index(this);
				console.log(oLindex2);
				var addNum02 = $('.number').eq(oLindex2).html();
				if($('.number').eq(oLindex2).html()<1){
					addNum02 = 0;
				}else{
					addNum02--;
				}
				$('.number').eq(oLindex2).html(addNum02);
			})
})