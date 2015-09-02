#pragma strict
var Victory : int = 0;
var Win : GameObject;
var soundhp : GameObject;
var hp2 : int = 100;
var dead : GameObject;
var chr : GameObject;
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
var Icon1 : GameObject;
var Slot1 : Transform;
var Slot2 : Transform;
var Slot3 : Transform;
var Slot4 : Transform;
var Slot5 : Transform;


function Start () {
}

function Update () {

transform.Translate(Vector3.right*Time.deltaTime*200);
PlayerControl();
//////////////
if(hp2<=90)
{
	Destroy(hp100);
	}
	if(hp2<=80)
	{
	Destroy(hp90);
	}
	if(hp2<=70)
	{
	Destroy(hp80);
	}
	if(hp2<=60)
	{
	Destroy(hp70);
	}
	if(hp2<=50)
	{
	Destroy(hp60);
	}
	if(hp2<=40)
	{
	Destroy(hp50);
	}
	if(hp2<=30)
	{
	Destroy(hp40);
	}
	if(hp2<=20)
	{
	Destroy(hp30);
	}
	if(hp2<=10)
	{
	Destroy(hp20);
	}
	if(hp2<=0)
	{
	Destroy(hp10);
	Instantiate(dead,chr.transform.position,chr.transform.rotation);
	Destroy(gameObject);
	Win.SendMessage("Victory",1);
	Win.SendMessage("SetActive",true);
	//Instantiate(df,Vector3(0,0,-50),Quaternion.identity);
	//Invoke("Quit",5);
	//////////////
	}
}


function PlayerControl() {
if(Input.GetKey(KeyCode.A))
	{
	transform.Rotate(Vector3.forward*Time.deltaTime*120);
	}
if(Input.GetKey(KeyCode.D))
	{
	transform.Rotate(Vector3.back*Time.deltaTime*120);
	}
	
}
function OnCollisionEnter(other:Collision){
	if(other.collider.gameObject.tag == "Fire"||other.collider.gameObject.tag == "Laser"
	||other.collider.gameObject.tag == "Spike"||other.collider.gameObject.tag == "Saw")
	{
	Instantiate(soundhp,transform.position,transform.rotation);
	hp2-=10;
	print("Little Hp = " + hp2);
	}
	else if(other.collider.gameObject.tag == "wall")
	{
	Instantiate(soundhp,transform.position,transform.rotation);
	hp2-=100;
	print("Wall Hp = " + hp2);
	}
	else if(other.collider.gameObject.tag == "Trap"||other.collider.gameObject.tag == "Beam")
	{
		Instantiate(soundhp,transform.position,transform.rotation);
		hp2-=20;
		print("Beam Hp = " + hp2);
	}
	else if(other.collider.gameObject.tag == "Bomb")
	{
	Instantiate(soundhp,transform.position,transform.rotation);
	hp2-=30;
	print("Hp = " + hp2);
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
	Win.SendMessage("Victory",2);
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

function Quit(){
Application.Quit();
}

