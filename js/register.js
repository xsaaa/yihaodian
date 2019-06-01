$(function(){
	$('.registerBoxSon02Input').focus(function(){
		 	var oIndex = $('.registerBoxSon02Input').index(this);
		    $('.registerXsBox').eq(oIndex).css('left','-65px');
		    $('.registerMsBox').eq(oIndex).css('display','block');
		    $('.registerSsBox').eq(oIndex).css('display','none');
		 })
		 
		  $('.registerBoxSon02Input').blur(function(){
		  	    var oIndex2 = $('.registerBoxSon02Input').index(this);
				var value = $('.registerBoxSon02Input').eq(oIndex2).val();	
				var reg;
				switch(oIndex2){
					case 0:
					  reg=/^\w{4,20}$/;
					  break;
					case 1:
					  reg=/^1\d{10}$/;
					  break;
					case 2:
					  reg=/^\w{4,6}$/;
					  break;
					case 3:
					  reg=/^\w{4,20}$/;
					  break; 
//					case 4:
//					  reg=/^\w{4,20}$/;	 
//					  break;
				}
				if(oIndex2<4){
					checked(reg,value,oIndex2);
				}else{
					checked02(oIndex2);
				}
				
		  })
		  
		  function checked(reg,value,oIndex2){
		  		var result = reg.test(value);
				if(result == false){
					$('.registerMsBox').eq(oIndex2).css('display','none');
					$('.registerSsBox').eq(oIndex2).css('display','block');
				}else{
					$('.registerMsBox').eq(oIndex2).css('display','block');
					$('.registerSsBox').eq(oIndex2).css('display','none');
				}
		  }
		  
		 function checked02(oIndex2){	
		 	var a1 = $('.registerBoxSon02Input').eq(4).val();
		 	var aa = $('.registerBoxSon02Input').eq(3).val();
		 	if(aa == a1){
					$('.registerMsBox').eq(4).css('display','none');
					$('.registerSsBox').eq(4).css('display','none');
				}else{
					
					$('.registerMsBox').eq(4).css('display','none');
					$('.registerSsBox').eq(4).css('display','block');
				}
		 }
})
		