#pragma strict
private var waittime : float = 10.0f;
private var faketime : float = 3.0f;
var fakebutton : GameObject;
var realbutton : GameObject;

function Start () {
waittime += Time.time;
faketime += Time.time;
}

function Update () {
if(faketime < Time.time)
{
	faketime = 10000;
	Instantiate(fakebutton,Vector3(91.75,-75,450),transform.rotation);
}

if(waittime < Time.time)
{
	waittime = 10000;
	Instantiate(realbutton,Vector3(0,-60,450),transform.rotation);
}

}