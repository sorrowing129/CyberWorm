#pragma strict
private var ActTL : boolean = false;
private var ActTR : boolean = false;
private var ActDL : boolean = false;
private var ActDR : boolean = false;
private var Trig : boolean = true;
private var DurationTL : float = 0;
private var DurationTR : float = 0;
private var DurationDL : float = 0;
private var DurationDR : float = 0;
var sound : GameObject;
var flame : GameObject;
var FT_TL : Transform;
var FT_DL : Transform;
var FT_TR : Transform;
var FT_DR : Transform;
var RdOut : int;
var FireTime : float;
var Cooldown : float=3.0;
var TmFire : float=0.0;
var TmFire2 : float=0.0;
var TmFire3 : float=0.0;
var TmFire4 : float=0.0;
function Start () {

}

function Update () {
	if(ActTL==true){
	ActTL=false;
	DurationTL=Time.time+4.0f;
	Instantiate(sound,transform.position,transform.rotation);
	}
	
	if(ActTR==true){
	ActTR=false;
	DurationTR=Time.time+4.0f;
	Instantiate(sound,transform.position,transform.rotation);
	}
	
	if(ActDL==true){
	ActDL=false;
	DurationDL=Time.time+4.0f;
	Instantiate(sound,transform.position,transform.rotation);
	}
	
	if(ActDR==true){
	ActDR=false;
	DurationDR=Time.time+4.0f;
	Instantiate(sound,transform.position,transform.rotation);
	}
	
	if(DurationTL>Time.time){
	Fire1();
	}
	
	if(DurationTR>Time.time){
	Fire2();
	}
	
	if(DurationDL>Time.time){
	Fire3();
	}
	
	if(DurationDR>Time.time){
	Fire4();
	}

}

function SetActiveTL (Active : boolean)
{
	ActTL = Active;
}

function SetActiveTR (Active : boolean)
{
	ActTR = Active;
}

function SetActiveDL (Active : boolean)
{
	ActDL = Active;
}

function SetActiveDR (Active : boolean)
{
	ActDR = Active;
}

function Fire1(){
	//FireTime=Time.time+5.0;
	//do{
		if(TmFire<=Time.time)
		{
			Instantiate(flame,FT_TL.position,FT_TL.rotation);
			TmFire=Time.time+0.2;
		}
		}
function Fire2(){
	
		if(TmFire2<=Time.time)
		{
			Instantiate(flame,FT_TR.position,FT_TR.rotation);
			TmFire2=Time.time+0.2;
		}
		}
function Fire3(){
	
		if(TmFire3<=Time.time)
		{
			Instantiate(flame,FT_DL.position,FT_DL.rotation);
			TmFire3=Time.time+0.2;
		}
		}
function Fire4(){
	
		if(TmFire4<=Time.time)
		{
			Instantiate(flame,FT_DR.position,FT_DR.rotation);
			TmFire4=Time.time+0.2;
		}
		}
	//}
	//while(FireTime>=Time.time);
	//Cooldown=Time.time+8.0;


/*
function Fire2(){
	FireTime=Time.time+5.0;
	do{
	Instantiate(flame,FT_TR.position,FT_TR.rotation);
	}
	while(FireTime>=Time.time);
	Cooldown=Time.time+8.0;
}

function Fire3(){
	FireTime=Time.time+5.0;
	do{
	Instantiate(flame,FT_DL.position,FT_DL.rotation);
	}
	while(FireTime>=Time.time);
	Cooldown=Time.time+8.0;

}

function Fire4(){
	FireTime=Time.time+5.0;
	do{
	Instantiate(flame,FT_DR.position,FT_DR.rotation);
	}
	while(FireTime>=Time.time);
	Cooldown=Time.time+8.0;
}


*/
