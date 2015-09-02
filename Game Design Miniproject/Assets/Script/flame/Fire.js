#pragma strict
var Lifetime:float;
function Start () {
//transform.eulerAngles = Quaternion(0,0,0,0).eulerAngles;
//transform.eulerAngles = Vector3(0, 0, 45);
Lifetime = Time.time+1.5;
}

function Update () {
transform.Translate(Vector3.down*Time.deltaTime*300);

if(Lifetime<=Time.time)
{
Destroy(gameObject);
}
}


function OnCollisionEnter(other:Collision){
	if(other.collider.gameObject.tag == "character2"||other.collider.gameObject.tag == "character"){
		Destroy(gameObject);
		print("hit");
		}
	
}

