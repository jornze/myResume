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
	alert("dff")
}






















