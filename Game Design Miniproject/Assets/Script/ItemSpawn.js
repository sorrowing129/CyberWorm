#pragma strict
var Item : GameObject ;
var Cooldown : float = 2.0f;
var Active : boolean = false;
var X : float = 100000;
var Y : float = 100000;


function Start () {
}

function Update () {
if(Active == true)
{
	Active=false;
	Cooldown = Time.time+2.0f;
}
	
	
 if(Cooldown < Time.time)
 {
 	Cooldown+=7.0f;
 	ItemSpawn();
 }
}

function ItemSpawn (){
do{X=Random.Range(-310,310);}
while(X>-80&&X<80);
do{Y=Random.Range(-180,180);}
while(Y>-80&&Y<80);
Instantiate(Item,Vector3(X,Y,0),transform.rotation);
}

function SetActive (Act : boolean)
{
	Active = Act;
}

