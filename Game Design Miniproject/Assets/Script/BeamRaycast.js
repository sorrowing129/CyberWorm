#pragma strict

function Start () {

}

function Update () {
}

function OnCollisionEnter(other : Collision) 
{ 
	if(other.transform.tag == "character2"||other.transform.tag == "character")
	{
	transform.collider.isTrigger = true;
	}
	
}

