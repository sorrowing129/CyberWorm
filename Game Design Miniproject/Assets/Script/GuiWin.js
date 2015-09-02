#pragma strict
var WinPlayer : int = 0;
var Retry : GameObject;
var Active : boolean = false ;
var Duration : float = 100000;
var Duration2 : float = 100000;
var PL1Win : GameObject;
var PL2Win : GameObject;
var Character1 : GameObject;
var Character2 : GameObject;
var FB : Feedback;
function Start () {

}

function Update () {
	if(Active==true)
	{
		Active=false;
		Duration=Time.time+2.0f;
		Duration2=Time.time+4.0f;
	}
	if(Duration<Time.time)
	{
		Duration+=1000000;
		if(WinPlayer == 1)
		{
			Instantiate(PL1Win,transform.position,transform.rotation);
			Instantiate(Retry,Vector3(0,-170,-720),transform.rotation);
			Destroy(Character1.gameObject);
			Destroy(Character2.gameObject);
		}
		if(WinPlayer == 2)
		{
			Instantiate(Retry,Vector3(0,-170,-720),transform.rotation);
			Instantiate(PL2Win,transform.position,transform.rotation);
			Destroy(Character1.gameObject);
			Destroy(Character2.gameObject);
		}
	}
	if(Duration2<Time.time)
	{
		FB.Create();
	}
	
}

function Victory(Player : int){
WinPlayer = Player;
}
function SetActive (Act : boolean){
Active = Act;
}
