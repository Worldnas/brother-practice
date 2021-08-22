function openwin() { window.open ("award.html","newwin","height=250 width=250 toolbar=0 menubar=0 resizable=0 screenx=50 screeny=50");}



var input=document.getElementsByName("my name")[0]
//alert(input.type)


var button=document.getElementById("btn")
button.onclick=function(){
	 console.log(input.value)
}




