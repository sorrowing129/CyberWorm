#pragma strict
var Lifetime:float;
function Start () {
//transform.eulerAngles = Quaternion(0,0,0,0).eulerAngles;
transform.eulerAngles = Vector3(0, 0, -90);
}

function Update () {
transform.Translate(Vector3.right*Time.deltaTime*300);

}


function OnCollisionEnter(other:Collision){
	if(other.collider.gameObject.tag == "character"||other.collider.gameObject.tag == "character2"||other.collider.gameObject.tag == "wall"){
		Destroy(gameObject);
		print("hit");
		}
}

