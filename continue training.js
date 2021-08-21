var span=document.getElementsByClassName("my class")[0]
//alert(span.innerHTML)


var input=document.getElementsByName("my name")[0]
//alert(input.type)


var button=document.getElementById("btn")
button.onclick=function(){
	span.style.backgroundColor="yellow"
	console.log(input.value)
}