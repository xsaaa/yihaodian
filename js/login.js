$(function(){
				$('.loginBoxSon02Button').click(function(){
				var valueA = $('.a').val();
				console.log(valueA);
				var valueB = $('.b').val();
				var reg = /\w/;
				var oA = reg.test(valueA);
				var oB = reg.test(valueB);
				console.log(oB);
				if( oA == true && oB== true){
					alert('成功登录');
				}
				else if( oA == true && oB== false){
					alert('密码不能为空');
				}else if( oB == true && oA== false){
					alert('账号不能为空');
				}else{
					alert('登录失败')
				}
			})
})