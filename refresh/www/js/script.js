var mySwiper=new Swiper('.swiper-container',{
	pagination:'.swiper-pagination',
	autoplay:1000
})

var myScroll=new IScroll('#wrapper',{
	scrollbars:true,
	scrollX:true,
	scrollY:false
})
window.onload=function(){
	$('.one').css({'transform':'translateX(0)','opacity':1})
	$('.two').css({'transform':'translateY(0)','opacity':1})
	$('.three').css({'transform':'translateY(0)','opacity':1})
}
var ind=1;
$('.next').on('touchend',function(){
	ind++;
	if(ind>6) ind=1;
	var ele=$('#scroller p:nth-child('+ind+')')[0]
	myScroll.scrollToElement(ele,1200,null,null,IScroll.utils.ease.elastic)
})