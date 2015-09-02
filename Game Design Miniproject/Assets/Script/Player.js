#pragma strict
var Mode : int=0;
var Victory : int = 0;
var Icon1 : GameObject;
var soundhp : GameObject;
var Win : GameObject;
var hp : int = 100;
var dead : GameObject;
var df : GameObject;
var hp100 : GameObject;
var hp90 : GameObject;
var hp80 : GameObject;
var hp70 : GameObject;
var hp60 : GameObject;
var hp50 : GameObject;
var hp40 : GameObject;
var hp30 : GameObject;
var hp20 : GameObject;
var hp10 : GameObject;
var chr : GameObject;
var Slot1 : Transform;
var Slot2 : Transform;
var Slot3 : Transform;
var Slot4 : Transform;
var Slot5 : Transform;
var duration : float = 10000f;
public var FireDmg : int = 0;
public var LaserDmg : int = 0;
public var BeamDmg : int = 0;
public var SpikeDmg : int = 0;
public var SawDmg : int = 0;
public var TrapDmg : int = 0;
public var BombDmg : int = 0;
var SC : Score;



function Start () {
}

function Update () {

transform.Translate(Vector3.right*Time.deltaTime*200);
PlayerControl();
//////////////////////
if(hp<=90)
	{
	Destroy(hp100);
	}
	if(hp<=80)
	{
	Destroy(hp90);
	}
	if(hp<=70)
	{
	Destroy(hp80);
	}
	if(hp<=60)
	{
	Destroy(hp70);
	}
	if(hp<=50)
	{
	Destroy(hp60);
	}
	if(hp<=40)
	{
	Destroy(hp50);
	}
	if(hp<=30)
	{
	Destroy(hp40);
	}
	if(hp<=20)
	{
	Destroy(hp30);
	}
	if(hp<=10)
	{
	Destroy(hp20);
	}
	if(hp<=0)
	{
	Destroy(hp10);
	
	//Instantiate(df,Vector3(0,0,-50),Quaternion.identity);
	Instantiate(dead,chr.transform.position,chr.transform.rotation);
	Destroy(gameObject);
	SaveGame();
	//Invoke("Quit",5);
	Win.SendMessage("Victory",2);
	Win.SendMessage("SetActive",true);
	}
	////////////////////////
}

function PlayerControl() {
if(Input.GetKey(KeyCode.LeftArrow))
	{
	transform.Rotate(Vector3.forward*Time.deltaTime*200);
	}
if(Input.GetKey(KeyCode.RightArrow))
	{
	transform.Rotate(Vector3.back*Time.deltaTime*200);
	}
	
}
function OnCollisionEnter(other:Collision){
	if(other.collider.gameObject.tag == "Fire")
	{
	Instantiate(soundhp,transform.position,transform.rotation);
	hp-=10;
	print("Hp = " + hp);
	FireDmg +=10;
	}
	
	if(other.collider.gameObject.tag == "Laser")
	{
	Instantiate(soundhp,transform.position,transform.rotation);
	hp-=10;
	print("Hp = " + hp);
	LaserDmg +=10;
	}
	
	if(other.collider.gameObject.tag == "Spike")
	{
	Instantiate(soundhp,transform.position,transform.rotation);
	hp-=10;
	print("Hp = " + hp);
	SpikeDmg +=10;
	}
	
	if(other.collider.gameObject.tag == "Saw")
	{
	Instantiate(soundhp,transform.position,transform.rotation);
	hp-=10;
	print("Hp = " + hp);
	SawDmg +=10;
	}
	
	if(other.collider.gameObject.tag == "wall")
	{
	Instantiate(soundhp,transform.position,transform.rotation);
	hp-=100;
	print("Hp = " + hp);
	}
	
	if(other.collider.gameObject.tag == "Trap")
	{
	Instantiate(soundhp,transform.position,transform.rotation);
	hp-=20;
	print("Hp = " + hp);
	TrapDmg +=20;
	}
	
	if(other.collider.gameObject.tag == "Beam")
	{
	Instantiate(soundhp,transform.position,transform.rotation);
	hp-=20;
	print("Hp = " + hp);
	BeamDmg +=20;
	}
	
	if(other.collider.gameObject.tag == "Bomb")
	{
	Instantiate(soundhp,transform.position,transform.rotation);
	hp-=30;
	print("Hp = " + hp);
	BombDmg +=30;
	}
	else if(other.collider.gameObject.tag == "Item")
	{
	Victory++;
	CheckVP();
	}
}

function CheckVP(){
	if(Victory>4)
	{
	Instantiate(Icon1,Slot5.position,Slot1.rotation);
	SC.SumWin +=1;
	SaveGame();
	Win.SendMessage("Victory",1);
	Win.SendMessage("SetActive",true);
	}
	else if(Victory>3)
	{
	Instantiate(Icon1,Slot4.position,Slot1.rotation);
	}
	else if(Victory>2)
	{
	Instantiate(Icon1,Slot3.position,Slot1.rotation);
	}
	else if(Victory>1)
	{
	Instantiate(Icon1,Slot2.position,Slot1.rotation);
	}
	else if(Victory>0)
	{
	Instantiate(Icon1,Slot1.position,Slot1.rotation);
	}
	
}

function SaveGame(){
	
			SC.FireDmg += FireDmg;
			SC.LaserDmg += LaserDmg;
			SC.BeamDmg += BeamDmg;
			SC.SpikeDmg += SpikeDmg;
			SC.SawDmg += SawDmg;
			SC.TrapDmg += TrapDmg;
			SC.BombDmg += BombDmg;
			
       		
       		
}


function Quit(){
Application.Quit();
}
