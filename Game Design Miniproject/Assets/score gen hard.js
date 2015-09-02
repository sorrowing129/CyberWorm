#pragma strict
var round : int=0;
var sum : int=10;
var ran : int =0;
public var FireDmg : int = 0;
public var LaserDmg : int = 0;
public var BeamDmg : int = 0;
public var SpikeDmg : int = 0;
public var SawDmg : int = 0;
public var TrapDmg : int = 0;
public var BombDmg : int = 0;
public var Win : int=0;
public var FB : int = 0;
public var PlayTime : float = 0.00f;


function Start () {
Gen();
}

function Update () {
/*ran = (Random.Range(0,5)*10);
Debug.Log(ran);*/

}

function Gen(){
			sum=10;
       		FireDmg=0;
       		LaserDmg=0;
       		BeamDmg=0;
       		SpikeDmg=0;
       		SawDmg=0;
       		TrapDmg=0;
       		BombDmg=0;
       		Win=0;
       		PlayTime = Random.Range(8.0,15.0);
       		FB = Random.Range(4,6);
       		 
       		 FireDmg = Random.Range(0,7);
       		 sum-=FireDmg;
       		 if (sum<=0)
			{
			Debug.Log(round);
			Win=0;
			Write();
			}
       		 else{
       		 LaserDmg = Random.Range(0,7);
       		 sum-=LaserDmg;
       		 if (sum<=0)
			{
			Debug.Log(round);
			Win=0;
			Write();
			}
			else
			{
       		 
       		 BeamDmg = Random.Range(0,4);
       		 sum-=BeamDmg;
       		 if (sum<=0)
			{
			Debug.Log(round);
			Win=0;
			Write();
			}
       		 	else{
       		 SpikeDmg = Random.Range(0,4);
       		 sum-=SpikeDmg;
       		 if (sum<=0)
			{
			Debug.Log(round);
			Win=0;
			Write();
			}
					else{
       		 SawDmg = Random.Range(0,3);
       		 sum-=SawDmg;
       		 if (sum<=0)
			{
			Debug.Log(round);
			Win=0;
			Write();
			}
						else{
       		 TrapDmg = Random.Range(0,3);
       		 sum-=TrapDmg;
       		 if (sum<=0)
			{
			Debug.Log(round);
			Win=0;
			Write();
			}
							else{
       		 BombDmg = Random.Range(0,3);
       		 sum-=BombDmg;
       		 if (sum<=0)
			{
			Debug.Log(round);
			Win=0;
			Write();
			}
								else{
       							 Win=1;
									Write();
									}
									}
									}
									}
									}
									}
									}
}

function Write(){
	
	for(var i:int=1;i<31;i++)
		{
		var fileName = "Hard" + i + ".txt";
        if (File.Exists(fileName))
        	{
           // Debug.Log(fileName+" already exists.");
       		}
       	else
       		{
       		round	= i;
       		 var sr = File.CreateText(fileName);
       		 sr.WriteLine (i);
       		 sr.WriteLine ("FeedBack : ");
       		 sr.WriteLine (FB);
       		 sr.WriteLine ("Play Time : ");
       		 sr.WriteLine (PlayTime);
       		 sr.WriteLine ("FireDmg : ");
       		 sr.WriteLine (FireDmg + "0");
       		 sr.WriteLine ("LaserDmg : ");
       		 sr.WriteLine (LaserDmg + "0");
       		 sr.WriteLine ("BeamDmg : ");
       		 sr.WriteLine (BeamDmg + "0");
       		 sr.WriteLine ("SpikeDmg : ");
       		 sr.WriteLine (SpikeDmg + "0");
       		 sr.WriteLine ("SawDmg : ");
       		 sr.WriteLine (SawDmg + "0");
       		 sr.WriteLine ("TrapDmg : ");
       		 sr.WriteLine (TrapDmg + "0");
       		 sr.WriteLine ("BombDmg : ");
       		 sr.WriteLine (BombDmg + "0");
       		 sr.WriteLine ("Win : ");
       		 sr.WriteLine (Win);
        	 sr.Close();
        	 Gen();
        	 
       		}
       		
        }
}