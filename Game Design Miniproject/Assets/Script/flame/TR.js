﻿#pragma strict
var speed :int=50;
function Start () {
//print(transform.eulerAngles.z);

}

function Update () {
Rt();	

	if (transform.eulerAngles.z <= 290f)
	{
		speed=50;		
	}
	
	if (transform.eulerAngles.z >= 340f)
	{
		
		speed=-50;
	}
	
}

function Rt(){
transform.Rotate(Vector3.forward * Time.deltaTime*speed);
}


