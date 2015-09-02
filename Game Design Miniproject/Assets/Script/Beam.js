#pragma strict
var ActA : boolean = false;
var ActB : boolean = false;
var BL_1 : Transform;
var BL_2 : Transform;
var Beam : GameObject;
function Start () {
	
}

function Update () {
if(ActA == true)
	{
	Beam1();
	ActA=false;
	}
if(ActB == true)
	{
	Beam2();
	}
}

function Beam1 (){

Instantiate(Beam,BL_1.position,BL_1.rotation);
}

function Beam2 (){
ActB=false;
Instantiate(Beam,BL_2.position,BL_2.rotation);
}

function SetActiveUp (Active : boolean){
	ActA = Active;
}

function SetActiveLow (Active : boolean){
	ActB = Active;
}

