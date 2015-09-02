#pragma strict
var Lifetime : float = 1000000f;
function Start () {
Lifetime = Time.time;
}

function Update () {
if(Lifetime+0.5f<Time.time)
	{
	Destroy(gameObject);
	}
}