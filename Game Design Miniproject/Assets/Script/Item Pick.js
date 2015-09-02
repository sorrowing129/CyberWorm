#pragma strict
var SoundPick : GameObject;
var Spawner : GameObject;
function Start () {

}

function Update () {
	Spawner = GameObject.Find("ItemSpawner");
}

function OnCollisionEnter(other:Collision){
	if(other.collider.gameObject.tag == "character"||other.collider.gameObject.tag == "character2"){
		Instantiate(SoundPick,transform.position,transform.rotation);
		Spawner.SendMessage("SetActive",true);
		Destroy(gameObject);
		
		}
	}