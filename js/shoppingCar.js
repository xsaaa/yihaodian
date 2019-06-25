$(function(){
			$('.tableMathBox01').on('click','.add',function(){
				var oSindex = $('.add').index(this);
				var totlePrice = $('.tableGoodstotlePrice').eq(oSindex).html();
				var addNum01 = $('.numberBox').eq(oSindex).html();
				var price = $('.tableGoodsPrice').eq(oSindex).html();
                addNum01++;
				$('.numberBox').eq(oSindex).html(addNum01);
				totlePrice = addNum01*price;
				$('.tableGoodstotlePrice').eq(oSindex).html(totlePrice.toFixed(2));
			})
			
			$('.tableMathBox01').on('click','.sub',function(){
				var oSindex2 = $('.sub').index(this);
				var addNum02 = $('.numberBox').eq(oSindex2).html();
				var totlePrice2 = $('.tableGoodstotlePrice').eq(oSindex2).html();
				var price2 = $('.tableGoodsPrice').eq(oSindex2).html();
				if($('.numberBox').eq(oSindex2).html()<1){
					addNum02 = 0;
				}else{
					addNum02--;
				}
				totlePrice2 = addNum02*price2;
				$('.numberBox').eq(oSindex2).html(addNum02);
				$('.tableGoodstotlePrice').eq(oSindex2).html(totlePrice2.toFixed(2));
			})
			$('.tableBox').on('click','button',function(){
				var Dindex = $('button').index(this);
				$('.tableGoods').eq(Dindex).remove();
			})
			
			$('.tableGoods').on('click','input',function(){
				var Iindex = $('input').index(this);	
				var value = $('input').eq(Iindex).prop('checked');
				var totlePrice = $('.tableGoodstotlePrice').eq(Iindex-3).html();
				var allPrice = $('.allPrice').html();	
				var sum;
				sum = Number(totlePrice)+Number(allPrice);
				if(value == true){
					$('.allPrice').html(sum.toFixed(2));
				}else{
					result = allPrice - Number(totlePrice);
					$('.allPrice').html(result.toFixed(2));
				}	
			})
})
