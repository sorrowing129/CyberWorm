﻿private var Lifetime : float = 1000f;
private var Active : boolean = true;
function Start () {

}

function Update () {
if(Active == true)
	{
		DestroySelf();
	}
if(Lifetime+2f<Time.time)
	{
	
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


