window.onload=function(){
    /*var eventUtil={
	   //添加句柄
	     addHandler:function(element,type,handler){
		if(element.addEventListener){   //DOM2级事件监听
             element.addEventListener(type,handler,false);
		}else if(element.attachEvent){ //IE浏览器事件监听
			element.attachEvent("on"+type,handler);
		}else{                  //旧版浏览器事件监听
			element["on"+type]=handler;
		}
	    },
	  //删除句柄
	    removeHandler:function(element,type,handler){
		if(element.removeEventListener){   //DOM2级事件监听
             element.removeEventListener(type,handler,false);
		}else if(element.detachEvent){ //IE浏览器事件监听
			element.detachEvent("on"+type,handler);
		}else{                  //旧版浏览器事件监听
			element["on"+type]=null;
		}
	    },
	  //获得事件
	    getEvent:function(event){
		      return event?event:window.event;
	    },
	   //获得事件类型
	    getType:function(event){
		      return event.type;
	    },
	  //获得时间目标（事件来源于哪个元素）
	    getElement:function(event){
		    return event.target || event.srcElement;
	    },
	   //阻止默认行为
	    preventDefault:function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue=false;
		}
	    },
	   //阻止冒泡行为
	    stopPropagation:function(event){
		    if(event.stopPropagation){
			    event.stopPropagation();
		    }else{
			   event.cancelBubble=true;
		     }
	    }
    }
    function getByClass(parent,clsName){
	      var boxArr=[],//用来存储获取到的所有class为box的元素
               oparent=parent?document.getElementById(parent):document,
	         oElements=oparent.getElementsByTagName("*");
	    for(var i=0;i<oElements.lgnth;i++){
            if(oElements[i].className==clsName){
       	     boxArr.push(oElements[i]);
            }
	    }
	    return boxArr;
    }
    //top轮播图特效
    	var fobox=document.getElementById("fosbox"),
    	    lis=fobox.getElementsByTagName("li"),
    	    pre=getByClass("lrbt","pre"),
    	    next=getByClass("lrbt","next"),
    	    btindex=document.getElementById("btindex"),
    	spans=btindex.getElementsByTagName("span");
    	eventUtil.addHandler('pre',"click",tt);
    	var tt=function(){
    		alert("ff");
    	}*/
	 var main=document.getElementById("fsbox"),
            pic=document.getElementById("ulb"),
            lis=pic.getElementsByTagName("li"),
            imgs=pic.getElementsByTagName('img'),
            prev=document.getElementById("pre"),
            next=document.getElementById("next"),
            span=document.getElementById("btindex").getElementsByTagName("span"),
            index=1,
            animated=false,
            timer=null,
            main3=document.getElementById("main3"),
            main3w=main3.offsetWidth,
            offW=main.offsetWidth,
            ulbw=ulb.style.width=offW*6+'px';
            ulb.style.left=-offW+'px';
            for(var i=0;i<lis.length;i++){
                lis[i].style.width=offW+'px';
                imgs[i].style.width=offW+'px';
            }
            function showcol(){
                for (var i = 0; i < span.length; i++) {
                    if(span[i].className=="active"){
                        span[i].className="";
                        break;
                    }
                };
                span[index-1].className="active"; 
            }
            function animate(offset){
                 if (offset == 0) {
                    return;
                }
                    animated=true;
                    var newleft=parseInt(pic.style.left)+offset;
                    var time=250;
                    var interval=10;
                    var speed=offset/(time/interval);
                    function go(){
                            if(speed<0 && parseInt(pic.style.left)>newleft ||speed>0 && parseInt(pic.style.left)<newleft){
                                pic.style.left=parseInt(pic.style.left)+speed+"px";
                                setTimeout(go,interval);
                            }
                        else{
                            animated=false;
                            pic.style.left=newleft+"px";
                             if(newleft<-offW*4){
                                  pic.style.left=-offW+"px";
                                }
                              if(newleft>-offW){
                                 pic.style.left=-offW*4+"px"; 
                                 }
                            }
                    }
                    go();
            }
             function play() {
                timer = setTimeout(function () {
                    next.onclick();
                    play();
                }, 3000);
            }
            function stop(){
                clearTimeout(timer);
            }
            next.onclick=function(){
                if(animated==true/*!animated*/){
                    return;
                } 
                if(index==4){
                    index=1;
                }
                else{
                    index+=1; 
                }
                 animate(-offW);
                 showcol();
            }
            prev.onclick=function(){
                  if(animated==true/*!animated*/){
                    return;
                } 
                 if(index==1){
                    index=4;
                }
                else{
                    index-=1; 
                }
                animate(offW);
                showcol();
            }
         for (var i = 0; i < span.length; i++) {
                span[i].onclick=function(){
                     if (animated==true) {
                        return;
                    }
                    if(this.className == 'active') {
                        return;
                    }
                    var myindex=parseInt(this.getAttribute("index"));
                    var offset=-offW*(myindex-index);
                    animate(offset);
                    index=myindex;
                    showcol();
                }
            };  
        main.onmouseover=stop;
        main.onmouseout=play;
        play();
        //基本资料
        var  bsid=document.getElementById("bsid"),
             ipts=bsid.getElementsByTagName("input"), 
        edt=document.getElementById("edit");
   var lirbox=document.getElementById("lirbox"),
       lirs=lirbox.getElementsByTagName("div"),
       spans=lirbox.getElementsByTagName("span"),
       ps=lirbox.getElementsByTagName('p'),
   leg=lirs.length;
   for(var i=0;i<leg;i++){
    lirs[i].style.transform="rotate("+i*360/leg+"deg)";
    lirs[i].style.transformOrigin="-50px 50px";
    spans[i].style.transform="rotate("+(-i*360/leg)+"deg)";
    ps[i].style.transform="rotate("+(-i*360/leg)+"deg)";
    ps[i].onmouseover=function(){
        this.style.backgroundColor="green";
        this.style.color="#fff";
        this.style.fontSize="1.2em";
    }
    ps[i].onmouseout=function(){
        this.style.backgroundColor="";
        this.style.color="#000";
         this.style.fontSize="1em";
    }
   }
  
}






















