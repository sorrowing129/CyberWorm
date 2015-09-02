#pragma strict
var TrapDummy : GameObject ;

function Start () {

}

function Update () {

}

function OnCollisionEnter(other:Collision){
	if(other.collider.gameObject.tag == "character"||other.collider.gameObject.tag == "character2"){
		Instantiate(TrapDummy,transform.position,transform.rotation);
		Destroy(gameObject);
		}
}