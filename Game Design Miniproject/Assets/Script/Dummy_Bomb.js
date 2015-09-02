#pragma strict

var Cooldown : float = 0;
var sounddead : AudioClip;
var dead : Transform;


function Start () {
Cooldown = Time.time;
}

function Update () {
if(Cooldown+0.3<Time.time)
{

AudioSource.PlayClipAtPoint(sounddead,gameObject.transform.position);

}


if(Cooldown+1<Time.time)
{
Destroy(gameObject);
}

}