#pragma strict
public var FireDmg : float = 0.0f;
public var LaserDmg : float = 0.0f;
public var BeamDmg : float = 0.0f;
public var SpikeDmg : float = 0.0f;
public var SawDmg : float = 0.0f;
public var TrapDmg : float = 0.0f;
public var BombDmg : float = 0.0f;
public var SumFire : float = 0.0f;
public var SumLaser : float = 0.0f;
public var SumBeam : float = 0.0f;
public var SumSpike : float = 0.0f;
public var SumSaw : float = 0.0f;
public var SumTrap : float = 0.0f;
public var SumBomb : float = 0.0f;
public var AvrFire : float = 0.0f;
public var AvrLaser : float = 0.0f;
public var AvrBeam : float = 0.0f;
public var AvrSpike : float = 0.0f;
public var AvrSaw : float = 0.0f;
public var AvrTrap : float = 0.0f;
public var AvrBomb : float = 0.0f;
public var Game : float = 1.0f;
public var SumWin : float = 0.0f;
public var WinRate : float=0.0f;
public var FeedBack : float = 0.0f;
public var SumFB : float = 0.0f;
public var AvrFB : float = 0.0f;
public var Diff : int = 0;
public var SumPlayTime : float = 0.0f;



function Start () {

}

function Update () {
			
}


public function SaveGame(){
			SumFB += FeedBack;
       		SumFire += FireDmg;
       		SumLaser += LaserDmg;
       		SumBeam += BeamDmg;
       		SumSpike += SpikeDmg;
       		SumSaw += SawDmg;
       		SumTrap += TrapDmg;
       		SumBomb += BombDmg;
       		AvrFire = (SumFire/Game);
       		AvrLaser = (SumLaser/Game);
       		AvrBeam = (SumBeam/Game);
       		AvrSpike = (SumSpike/Game);
       		AvrSaw = (SumSaw/Game);
       		AvrTrap = (SumTrap/Game);
       		AvrBomb = (SumBomb/Game);
       		AvrFB = (SumFB/Game);
       		WinRate = ((SumWin/Game)*100);
       		WriteText();
       		
}

function WriteText(){
	for(var i:int=1;i<100;i++)
		{
		var fileName = Diff + "MyFile" + i + ".txt";
        if (File.Exists(fileName))
        	{
            Debug.Log(fileName+" already exists.");
       		}
       	else
       		{
       		 var sr = File.CreateText(fileName);
       		 sr.WriteLine (i);
       		 sr.WriteLine ("SumFeedBack : ");
       		 sr.WriteLine (SumFB);
       		 sr.WriteLine ("AvrFeedBack : " + AvrFB); 
       		 sr.WriteLine ("FireDmg : " + FireDmg);
       		 sr.WriteLine ("LaserDmg : " + LaserDmg);
       		 sr.WriteLine ("BeamDmg : " + BeamDmg);
       		 sr.WriteLine ("SpikeDmg : " + SpikeDmg);
       		 sr.WriteLine ("SawDmg : " + SawDmg);
       		 sr.WriteLine ("TrapDmg : " + TrapDmg);
       		 sr.WriteLine ("BombDmg : " + BombDmg);
       		 sr.WriteLine ("SumFire : ");
       		 sr.WriteLine (SumFire);
       		 sr.WriteLine ("SumLaser : ");
       		 sr.WriteLine (SumLaser);
       		 sr.WriteLine ("SumBeam : ");
       		 sr.WriteLine (SumBeam);
       		 sr.WriteLine ("SumSpike : ");
       		 sr.WriteLine (SumSpike);
       		 sr.WriteLine ("SumSaw : ");
       		 sr.WriteLine (SumSaw);
       		 sr.WriteLine ("SumTrap : ");
       		 sr.WriteLine (SumTrap);
       		 sr.WriteLine ("SumBomb : ");
       		 sr.WriteLine (SumBomb);
       		 sr.WriteLine ("WinSum : ");   
       		 sr.WriteLine (SumWin);
       		 sr.WriteLine ("AvrFire : " + AvrFire);
       		 sr.WriteLine ("AvrLaser : " + AvrLaser);
       		 sr.WriteLine ("AvrBeam : " + AvrBeam);
       		 sr.WriteLine ("AvrSpike : " + AvrSpike);
       		 sr.WriteLine ("AvrSaw : " + AvrSaw);
       		 sr.WriteLine ("AvrTrap : " + AvrTrap);
       		 sr.WriteLine ("AvrBomb : " + AvrBomb);  
       		 sr.WriteLine ("WinRate : " + WinRate);
        	 sr.Close();
        	 i+=100;
       		}
       		Debug.Log(i);
        }
}

