function stocking(a,b)
{
	if (a>b)
		return "#00FF00";
	else if (a<b)
		return "red";
	else 
		return "#007AF4";
}

function stock()
{
	var n=document.getElementById("nifty");
	var nctx= n.getContext("2d");
	var b=document.getElementById("sensex");
	var bctx= b.getContext("2d");
	var d=document.getElementById("dax");
	var dctx= d.getContext("2d");
	
	var one=0;
	var two=0;
	
	one = parseInt(6000+2000*Math.random());
	two = parseInt(6000+2000*Math.random());
	var ngrd = nctx.createLinearGradient(0,0,0,260);
	ngrd.addColorStop(0,"black");
	ngrd.addColorStop(1,stocking(one,two));
	nctx.fillStyle=ngrd;
	nctx.fillRect(0,0,350,260);
	nctx.fillStyle="white";
	nctx.font = "40px Verdana";
	nctx.fillText(one,120,125);
	nctx.font = "25px Verdana";
	nctx.fillText("Nifty",135,240);
	
	one = parseInt(20000+10000*Math.random());
	two = parseInt(20000+10000*Math.random());
	var bgrd = bctx.createLinearGradient(0,0,0,260);
	bgrd.addColorStop(0,"black");
	bgrd.addColorStop(1,stocking(one,two));
	bctx.fillStyle=bgrd;
	bctx.fillRect(0,0,350,260);
	bctx.fillStyle="white";
	bctx.font = "40px Verdana";
	bctx.fillText(one,110,125);
	bctx.font = "25px Verdana";
	bctx.fillText("Sensex",125,240);

	one = parseInt(9000+3000*Math.random());
	two = parseInt(9000+3000*Math.random());
	var dgrd = dctx.createLinearGradient(0,0,0,260);
	dgrd.addColorStop(0,"black");
	dgrd.addColorStop(1,stocking(one,two));
	dctx.fillStyle=dgrd;
	dctx.fillRect(0,0,350,260);
	dctx.fillStyle="white";
	dctx.font = "40px Verdana";
	dctx.fillText(one,110,125);
	dctx.font = "25px Verdana";
	dctx.fillText("DAX",140,240);
}

