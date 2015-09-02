#pragma strict
var C4 : GameObject ;
var Trap : GameObject ;
var ActC4 : boolean ;
var ActTrap : boolean ;
var X : float = 100000;
var Y : float = 100000;


function Start () {
ActC4 = false;
ActTrap = false;
}

function Update () {
 if(ActC4 == true)
 {
 	C4Spawn();
 	ActC4 = false;
 }
 
 if(ActTrap == true)
 {
 	TrapSpawn();
 	ActTrap = false;
 }
}

function SetActiveC4(Active : boolean) {
ActC4 = Active;
}

function SetActiveTrap(Active : boolean) {
ActTrap = Active;
}

function TrapSpawn (){
do{X=Random.Range(-310,310);}
while(X>-80&&X<80);
do{Y=Random.Range(-180,180);}
while(Y>-80&&Y<80);
Instantiate(Trap,Vector3(X,Y,0),transform.rotation);
}

function C4Spawn (){
do{X=Random.Range(-310,310);}
while(X>-80&&X<80);
do{Y=Random.Range(-180,180);}
while(Y>-80&&Y<80);
Instantiate(C4,Vector3(X,Y,0),transform.rotation);
}