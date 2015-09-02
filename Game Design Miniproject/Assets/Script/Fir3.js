#pragma strict
var LS_Top_1 : Transform;
var LS_Top_2 : Transform;
var LS_Top_3 : Transform;
var LS_Top_4 : Transform;
var LS_Top_5 : Transform;
var LS_Top_6 : Transform;
var LS_Top_7 : Transform;
var LS_Top_8 : Transform;
var laser : GameObject;
var TmLaser1 : float=0;
var TmLaser2 : float=3;
var TmLaser3 : float=0;
var TmLaser4 : float=0;
var TmLaser5 : float=0;
var TmLaser6 : float=0;
var TmLaser7 : float=0;
var TmLaser8 : float=0;

function Start () {


}

function Update () {
Lasering();
}

function Laser1(){
Instantiate(laser,LS_Top_1.position,LS_Top_1.rotation);
}

function Laser2(){
Instantiate(laser,LS_Top_2.position,LS_Top_2.rotation);
}

function Laser3(){
Instantiate(laser,LS_Top_3.position,LS_Top_3.rotation);
}

function Laser4(){
Instantiate(laser,LS_Top_4.position,LS_Top_4.rotation);
}

function Laser5(){
Instantiate(laser,LS_Top_5.position,LS_Top_5.rotation);
}

function Laser6(){
Instantiate(laser,LS_Top_6.position,LS_Top_6.rotation);
}

function Laser7(){
Instantiate(laser,LS_Top_7.position,LS_Top_7.rotation);
}

function Laser8(){
Instantiate(laser,LS_Top_8.position,LS_Top_8.rotation);
}

function Lasering(){
	
	if(TmLaser1<Time.time)
	{
		Laser1();
		TmLaser1=Time.time+Random.Range(0.0,1.0);
	}
	
	if(TmLaser2<Time.time)
	{
		Laser2();
		TmLaser2=Time.time+Random.Range(0.0,1.0);
	}
	
	if(TmLaser3<Time.time)
	{
		Laser3();
		TmLaser3=Time.time+Random.Range(0.0,1.0);
	}
	
	if(TmLaser4<Time.time)
	{
		Laser4();
		TmLaser4=Time.time+Random.Range(0.0,1.0);
	}
	
	if(TmLaser5<Time.time)
	{
		Laser5();
		TmLaser5=Time.time+Random.Range(0.0,1.0);
	}
	
	if(TmLaser6<Time.time)
	{
		Laser6();
		TmLaser6=Time.time+Random.Range(0.0,1.0);
	}
	
	if(TmLaser7<=Time.time)
	{
		Laser7();
		TmLaser7=Time.time+Random.Range(0.0,1.0);
	}
	
	if(TmLaser8<Time.time)
	{
		Laser8();
		TmLaser8=Time.time+Random.Range(0.0,1.0);
	}
	
}
