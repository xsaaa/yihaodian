$(function(){
				    //二级菜单 
				$('.btn03').eq(0).mouseover(function(){
					 $('#iconDown').css('transform','rotate(180deg)');
					 $('#caidanList').css('display','block');
				 }) 
				 $('.btn03').eq(0).mouseout(function(){
				 	$('#iconDown').css('transform','none');
				 	$('#caidanList').css('display','none');	
				 })
				 	
				 	
				// 	首页大轮播			    
			    slider();			    
			    function slider(){
			        inter();
			        var iNow = 0;
			    	var timer;
			    	for(var i = 0;i<$('.btnBox').length;i++){
			    		bind(i);
			    	}
			    	
			    	function bind(index){
			    		$('.btnBox').eq(index).mousemove(function(){
			    			clearInterval(timer);	
				    		iNow = index;
				    		changePic(index);
				    		changeBtn(index);
				    		inter();
			    		}) 
			    		
			    	}
			    	
			    	function changePic(index){
						for(var j = 0;j<$('.picBox').length;j++){
							$('.picBox').eq(j).css('opacity','0');
							if(j == index){
								$('.picBox').eq(j).css('opacity','1');
								$('.picBox').eq(j).css('transition','opacity 1s');
							}
						}
					}
			    	
			    	function inter(){
						    timer = setInterval(function(){
							iNow++;
							if(iNow>5){
								iNow = 0;
							}
                            changePic(iNow);
                            changeBtn(iNow);
						},2000);
					}
			    	
			    	function changeBtn(index){
						for(var k = 0;k<$('.btnBox').length;k++){
							if(k == index){
								$('.btnBox').eq(k).css('backgroundColor','black');
								$('.btnBox').eq(k).css('color','white');
							}else{
								$('.btnBox').eq(k).css('backgroundColor','white');
								$('.btnBox').eq(k).css('color','black');
							}
						}
					}
			    }
			    
			 //首页小轮播
			    	var a = 1;
			    	function changePic(){
			    		var nowLeft = -a*95;
			    		$('#lunbo02Box02').css('left',nowLeft+'px');
			    	}
			    	$('#next').click(function(){
			    		a++;
						if(a>1){
							$('#next').css('display','none');
						}else{
							$('#before').css('display','block');
						}
						changePic(a);
			    	})
			    	$('#before').click(function(){
			    		a--;
						if(a<1){
							$('#before').css('display','none');
						}else{
							$('#next').css('display','block');
						}
						changePic(a);
			    })
			  
			  //首页中轮播
			    $('#next02').css('opacity','0.3');
			    $('#before02').click(function(){
			    	$('#lunbo03Box01').css('left','-152px');
			    	$('#before02').css('opacity','0.3');
			    	$('#next02').css('opacity','1');
			    })
			      $('#next02').click(function(){
			    	$('#lunbo03Box01').css('left','0px');
			    	$('#before02').css('opacity','1');
			    	$('#next02').css('opacity','0.3');
			    })
			
			
			//动态创建商品列表1
                $.each(superGoods, function(index,data) {
                	var str =`<div id="bigBox04">
								<img src="${data.bgSrc}"/>
								<div id="smallBox01">
									<img src="${data.smallBoximg}"/>
								</div>
								<div id="smallText">
									<p style="font-size: 18px;font-weight: bold;">${data.name}</p>
									<div style="padding-top: 10px;">
										<span style="font-size: 16px;">${data.inf}</span>
									</div>
								    
								    <div id="smallTextbtn">进入</div>
								</div>
								<ul id="smallPic">
									<li id="smallPic01">
											<img src="${data.smallPic1}"/>
									</li>
									<li id="smallPic01">
										<img src="${data.smallPic2}"/>
									</li>
									<li id="smallPic01">
										<img src="${data.smallPic3}"/>
									</li>
								</ul>
							</div>`		
				$('#bigBox04').eq(0).append(str);
			  });
			
			//动态创建商品列表2
					$.each(goodsAllList, function(index,data) {
						var str1 =`<div id="goodsList">
								<div id="goodsBox">
									<img src="${data.goodsPic}"/>
								</div>
								<div id="goodsText">
									<p>${data.info}</p>
									<div id="goodsDetail">
										<div id="goodsSdetail"></div>
									</div>
									<p style="margin: 10px 50px; color: orangered; font-size: 16px;">${data.price}</p>
								</div>
				         </div>`
					$('#a').append(str1);
				 })
					
			//动态创建商品列表3
				$.each(goodsList02, function(index,data) {
					var str2 = `<div id="borderBox" class="l">
							<div id="listBox">
								<div id="listPic">
									<img src="${data.listPic}"/>
								</div>
								<div id="listDetail">
									<p>
									<span class="Detail">${data.Detail}</span>
									${data.listDetail}
									</p>
								</div>
								<div id="listMoney">
									<ul style="margin: 0 auto;">
										<li class="l" style="font-size: 16px; font-weight: bold;color: orangered;">${data.price}</li>
										<li class="r">
											<span style="background-color: #fff3fa;color: #ff62a1;border: 1px solid #ffcce0;">
												${data.Detail02}
											</span>
										</li>
										
									</ul>
								</div>
								<div id="listBtn">
									<div id="listBtnSon">
										<div id="listBtn01" class="listBtnClass">
											<div class="Sbox2"><img src="img/index/WshopCar.png"/></div>
										</div>
										<div id="listBtn02" class="listBtnClass">
											找相似
										</div>
									</div>
									
								</div>
							</div>
						</div>`;
					$('#maxList').append(str2);
				});
				
			//动态创建商品列表4
                $.each(goodsList03, function(index,data){
                	var str3 = `<div id="borderBox" class="l">
							<div id="listBox">
								<div id="listPic">
									<img src="${data.listPic}"/>
								</div>
								<div id="listDetail">
									<p>
									<span class="Detail">${data.Detail}</span>
									${data.listDetail}
									</p>
								</div>
								<div id="listMoney">
									<ul style="margin: 0 auto;">
										<li class="l" style="font-size: 16px; font-weight: bold;color: orangered;">${data.price}</li>
										<li class="r">
											<span style="background-color: #fff3fa;color: #ff62a1;border: 1px solid #ffcce0;">
												${data.Detail02}
											</span>
										</li>
										
									</ul>
								</div>
								<div id="listBtn">
									<div id="listBtnSon">
										<div id="listBtn01" class="listBtnClass">
											<div class="Sbox2"><img src="img/index/WshopCar.png"/></div>
										</div>
										<div id="listBtn02" class="listBtnClass">
											找相似
										</div>
									</div>
									
								</div>
							</div>
						</div>`;
						$('#d').append(str3)
                })	
            	//动态创建商品列表5
                $.each(goodsList05, function(index,data){
                	var str4 = `<div id="borderBox" class="l">
							<div id="listBox">
								<div id="listPic">
									<img src="${data.listPic}"/>
								</div>
								<div id="listDetail">
									<p>
									<span class="Detail">${data.Detail}</span>
									${data.listDetail}
									</p>
								</div>
								<div id="listMoney">
									<ul style="margin: 0 auto;">
										<li class="l" style="font-size: 16px; font-weight: bold;color: orangered;">${data.price}</li>
										<li class="r">
											<span style="background-color: #fff3fa;color: #ff62a1;border: 1px solid #ffcce0;">
												${data.Detail02}
											</span>
										</li>
										
									</ul>
								</div>
								<div id="listBtn">
									<div id="listBtnSon">
										<div id="listBtn01" class="listBtnClass">
											<div class="Sbox2"><img src="img/index/WshopCar.png"/></div>
										</div>
										<div id="listBtn02" class="listBtnClass">
											找相似
										</div>
									</div>
									
								</div>
							</div>
						</div>`;
						$('#b').append(str4)
                })	
            
			//倒计时
			    var h = 1;
				var m = 1;
				var s = 5;
			    var timer02 = setInterval(function(){	
							getTime();							
						},1000);
						function getTime(){
							s--;
						   if(s==0){
						   	s = 60;
						   	m--;
						   }
						   if(m==0){
						   		m = 60;
						   		h--;
						   }
						    change(h,m,s);	
						}
						function change(h,m,s){
							if(h<10){
								h = '0'+h;
							}
						   if(m<10){
								m = '0'+m;
							}
						   if(s<10){
								s = '0'+s;
							}
						   
							$('#oH').html(h) ;
							$('#oM').html(m) ;
							$('#oS').html(s) ;
						}
						
			//吸顶效果
			$(window).scroll(function(){
				console.log($(this).scrollTop());
				if($(this).scrollTop() > 500){
					$('header').eq(0).css('display','block');
					$('header').eq(0).css('position','fixed');
					$('#siderbar').css('position','fixed');
				}else{
					$('header').eq(0).css('display','none');
					$('#siderbar').css('position','static');
				}
			})
			$('#siderbarSon5').click(function(){
				 $('html,body').animate({ scrollTop: 0 }, 500);
			})
})
