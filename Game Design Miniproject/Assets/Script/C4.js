private var Lifetime : float = 1000f;
private var Active : boolean = true;
var C4Ex : GameObject ;
function Start () {

}

function Update () {
if(Active == true)
	{
		DestroySelf();
	}
if(Lifetime+6f<Time.time)
	{
	Instantiate(C4Ex,transform.position,transform.rotation);
	Destroy(gameObject);
	}
}

function DestroySelf()
{
	//print("hell");
	Active = false;
	Lifetime = Time.time;
	
}


//is trigger off



