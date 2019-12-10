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
var imagea=0
var imageb=0
var imagec=0
var imaged=0
var imagee=0
var imagef=0
var imagek=0
var imagej=0


function changePictures(){
	a.classList.remove("pulse")
	a.classList.add("power-up")
	y.src=("ash87.gif");
	imagea=1;
	console.log(imagea);
	playGif();
}

function changePicture(){
	b.classList.remove("pulse")
	b.classList.add("power-up1")
	y.src=("hibana24.gif");
	imageb=1
	playGif ()
}

function changePicture1(){
	c.classList.remove("pulse")
	c.classList.add("power-up2")
	y.src=("thermite57.gif");
	imagec=1
	playGif ()
}

function changePicture2(){
	d.classList.remove("pulse")
	d.classList.add("power-up3")
	y.src=("sledge23.gif");
	imaged=1
	playGif ()
}

function changePicture3(){
	e.classList.remove("pulse")
	e.classList.add("power-up4")
	z.src=("smoke3.gif");
	imagee=1
	playGif ()
}

function changePicture4(){
	f.classList.remove("pulse")
	f.classList.add("power-up5")
	z.src=("jager23.gif");
	imagef=1
	playGif ()
}

function changePicture5(){
	g.classList.remove("pulse")
	g.classList.add("power-up6")
	z.src=("valk.gif");
	imagek=1
	playGif ()
}
function changePicture6(){
	i.classList.remove("pulse")
	i.classList.add("power-up7")
	z.src=("bandit6.gif");
	imagej=1
	playGif ()
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

function playGif () {
	if (imagea==1 && imageb==1 && imagec==1 && imaged==1 && imagee==1 && imagef==1 && imagek==1 && imagej==1) {
		y.src=("godhimself.GIF")
		z.src=("godhimself.GIF")
	}
}