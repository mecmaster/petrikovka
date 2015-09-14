window.addEvent("domready",function(){
	$('enviar').addEvent("click",function(e){
		e = new Event(e);
		//stop propagation
		if(!$('response').hasClass("loading")) $('response').addClass("loading");
		$('contacto').setStyle("display","none");
		$('response').setStyle("display","block");				
		var myAjax = new Ajax('mailer.php', {  
		   data:$('consulta'),
		   update:$('response'),
		   onComplete:function(){
			 var desaparecer = new Fx.Style('response', 'opacity', {duration:3000});
			  if($('response').hasClass("loading")) $('response').removeClass("loading");
				 desaparecer.start(1,0).addEvent("onComplete",function(){
					 $('response').setStyle("display","none");
					 $('response').setStyle("opacity","1");
					 $('response').empty();
					 $('contacto').setStyle("display","block");
			 	 }); //margin-top is set to 10px immediately
		  	 }
		}).request();
	})
})
//Tooltips
var Tips2 = new Tips($$('.tooltip'), {
	initialize:function(){
		this.fx = new Fx.Style(this.toolTip, 'opacity', {duration: 300, wait: false}).set(0);
	},
	onShow: function(toolTip) {
		this.fx.start(1);
	},
	onHide: function(toolTip) {
		this.fx.start(0);
	}
});

// SiFR
//<![CDATA[
if(typeof sIFR == "function"){
	sIFR.replaceElement(named({sSelector:"h2", sFlashSrc:"sifr/sifr.swf", sColor:"#000000", sLinkColor:"#FFFFFF", sBgColor:"#000000", sHoverColor:"#CCCCCC", sWmode:"transparent",sFlashVars:"textalign=right"}));
};
//]]>

var scroll = new Fx.Scroll('contenedor', {
	wait: false,
	duration: 2500,
	offset: {'x': 0, 'y': 0},
	transition: Fx.Transitions.Sine.easeInOut
});

$('slideout').addEvent('click', function(e){
	e = new Event(e);
	mySlide.slideOut();
	scroll.toElement('content1');
	e.stop();
});
 
$('link2').addEvent('click', function(event) {
	event = new Event(event).stop();
	scroll.toElement('content2');
});
 
$('link3').addEvent('click', function(event) {
	event = new Event(event).stop();
	scroll.toElement('content3');
});

$('link4').addEvent('click', function(event) {
	event = new Event(event).stop();
	scroll.toElement('content4');
});

 
// Slide About
var mySlide = new Fx.Slide('nosotros');
mySlide.hide();
 
$('slidein').addEvent('click', function(e){
	e = new Event(e);
	mySlide.slideIn();
	scroll.toElement('content1');
	e.stop();
});


