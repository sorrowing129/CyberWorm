#pragma strict
var Weapon : int = 0;
var Cooldown : float=3.0f ;
var UpperLaser : GameObject;
var LowerLaser : GameObject;
var FlameThrower : GameObject;
var Beam : GameObject;
var TrapSpawn : GameObject;
//var Saw : GameObject;

function Start () {
	UpperLaser = GameObject.Find("MapScript");
	//LowerLaser = GameObject.Find("MapScript02");
	FlameThrower = GameObject.Find("FlameThrower");
	Beam = GameObject.Find("MapScriptB");
	TrapSpawn = GameObject.Find("TrapSpawn");
	//Saw = GameObject.Find("ChainSaw");
}

function Update () {
if(Cooldown < Time.time)
	{
		
		Shuffle();
	}
}

function Shuffle(){
Cooldown+=5.0f;
Weapon = Random.Range(1,12);//0-12
Launch();

}

function Launch(){

	if(Weapon == 1)
	{
		//Upperlaser
		UpperLaser.SendMessage("SetActive",true);
	}
	if(Weapon == 2)
	{
		//lowerlaser
		LowerLaser.SendMessage("SetActive",true);
	}
	if(Weapon == 3)
	{
		//Saw.SendMessage("SetActive",true);
		//Saw
	}
	if(Weapon == 4)
	{
		Beam.SendMessage("SetActiveUp",true);
		//UpperBeam
	}
	if(Weapon == 5)
	{
		Beam.SendMessage("SetActiveLow",true);
		//LowerBeam
	}
	if(Weapon == 6)
	{	
		FlameThrower.SendMessage("SetActiveTL",true);
		//TLFlame
	}
	if(Weapon == 7)
	{
		FlameThrower.SendMessage("SetActiveTR",true);
		//TRFlame
	}
	if(Weapon == 8)
	{
		FlameThrower.SendMessage("SetActiveDL",true);
		//DLFlame
	}
	if(Weapon == 9)
	{	
		FlameThrower.SendMessage("SetActiveDR",true);
		//DRFlame
	}
	if(Weapon == 10)
	{
		TrapSpawn.SendMessage("SetActiveC4",true);
		//SpawnC4
	}
	if(Weapon == 11)
	{
		TrapSpawn.SendMessage("SetActiveTrap",true);
		//SpawnTrap
	}
	
}