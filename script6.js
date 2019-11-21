var a= document.getElementById("ash")
var b=document.getElementById("hibana")
var c=document.getElementById("therm")
var d=document.getElementById("sledge")
var e=document.getElementById("smoke")
var f=document.getElementById("jager")
var g=document.getElementById("valk")
var i=document.getElementById("bandit")
var j=document.getElementById("reset")
var y=document.getElementById("img")
var z=document.getElementById("img1")


function changePictures(){
	a.classList.add("power-up")
	y.src=("ash87.gif");
}

function changePicture(){
	b.classList.add("power-up1")
	y.src=("hibana24.gif");
}

function changePicture1(){
	c.classList.add("power-up2")
	y.src=("thermite57.gif");
}

function changePicture2(){
	d.classList.add("power-up3")
	y.src=("sledge23.gif");
}

function changePicture3(){
	e.classList.add("power-up4")
	z.src=("smoke3.gif");
}

function changePicture4(){
	f.classList.add("power-up5")
	z.src=("jager23.gif");
}

function changePicture5(){
	g.classList.add("power-up6")
	z.src=("valk.gif");
}
function changePicture6(){
	i.classList.add("power-up7")
	z.src=("bandit6.gif");
}


function resetPicture(){
	window.location.reload()
	a.classList.remove("power-up")
	b.classList.remove("power-up1")
	c.classList.remove("power-up2")
	d.classList.remove("power-up3")
	e.classList.remove("power-up4")
	f.classList.remove("power-up5")
	g.classList.remove("power-up6")
	i.classList.remove("power-up7")
}
