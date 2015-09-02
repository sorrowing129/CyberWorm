#pragma strict
var i : int=1;
var  fileName = "MyFile3.txt"; 
private var LineNum : int=0;
private var GetInt : int=0;
private var GetFloat : float = 0.0f;
var SumFire : float = 0.0f;
var SumLaser : float = 0.0f;
var SumBeam : float = 0.0f;
var SumSpike : float = 0.0f;
var SumSaw : float = 0.0f;
var SumTrap : float = 0.0f;
var SumBomb : float = 0.0f;
var AvrFire : float = 0.0f;
var AvrLaser : float = 0.0f;
var AvrBeam : float = 0.0f;
var AvrSpike : float = 0.0f;
var AvrSaw : float = 0.0f;
var AvrTrap : float = 0.0f;
var AvrBomb : float = 0.0f;
var SumWin : float = 0.0f;
var WinRate : float=0.0f;
var FeedBack : float = 0.0f;
var SumFB : float = 0.0f;
var AvrFB : float = 0.0f;
var SumPlayTime : float = 0.0f;
var AvrPlayTime : float = 0.0f;
 
 
function Start()
{
CheckFile();
}

function Update()
{
if(Input.GetKeyDown("up"))
{
CheckFile();
}

if(Input.GetKeyDown("down"))
{
Write();
}
}


function CheckFile()
{
		
		fileName = "Normal" + i + ".txt";
        if (File.Exists(fileName))
        	{
        	ReadFile(fileName);
            Debug.Log(fileName+" read.");
            Debug.Log(SumFB);
       		Debug.Log(SumPlayTime);
       		Debug.Log(SumFire);
       		LineNum=0;
       		i++;
       		
       		}
       	else
       		{
       		Debug.Log("end.");
       		
       		}
        
}

 
function ReadFile(file : String)
   {
    if(File.Exists(file)){
        var sr = File.OpenText(file);
        var line = sr.ReadLine();
        while(line != null){
        	//Debug.Log(file + "ex");
        	
            //Debug.Log(line); // prints each line of the file
            /////////
            if(LineNum==2)
            {
            GetInt = int.Parse(line);
            SumFB+=GetInt;
            Debug.Log("SumFB += " + SumFB);
            }
            if(LineNum==4)
            {
            GetFloat = float.Parse(line);
            SumPlayTime+=GetFloat;
            }
            if(LineNum==6)
            {
            GetInt = int.Parse(line);           
            SumFire+=GetInt;
            }
            
            if(LineNum==8)
            {
            GetInt = int.Parse(line);
            SumLaser+=GetInt;
            Debug.Log("SumLaser += " + SumLaser);
            }
            
            if(LineNum==10)
            {
            GetInt = int.Parse(line);
            SumBeam+=GetInt;
            }
            
            if(LineNum==12)
            {
            GetInt = int.Parse(line);
            SumSpike+=GetInt;
            }
            
            if(LineNum==14)
            {
            GetInt = int.Parse(line);
            SumSaw+=GetInt;
            }
            
            if(LineNum==16)
            {
            GetInt = int.Parse(line);
            SumTrap+=GetInt;
            }
            
            if(LineNum==18)
            {
            GetInt = int.Parse(line);
            SumBomb+=GetInt;
            }
            
            if(LineNum==20)
            {
            GetInt = int.Parse(line);
            SumWin+=GetInt;
            }
            
            line = sr.ReadLine();          
            LineNum++;
            
            //Debug.Log(LineNum);
            
        }  return;
        
    }
    
    
}



function Write(){
       		 var sr = File.CreateText("NormalAvr.txt");
       		 AvrFB = (SumFB/30);
       		 sr.WriteLine ("AvrFeedBack : ");
       		 sr.WriteLine (AvrFB);
       		 
       		 AvrPlayTime = (SumPlayTime/30);
       		 sr.WriteLine ("AvrPlay Time : ");
       		 sr.WriteLine (AvrPlayTime);
       		 
       		 AvrFire = (SumFire/30);
       		 sr.WriteLine ("AvrFireDmg : ");
       		 sr.WriteLine (AvrFire);
       		 
       		 
       		 AvrLaser = (SumLaser/30);
       		 sr.WriteLine ("AvrLaser : ");
       		 sr.WriteLine (AvrLaser);
       		 
       		 AvrBeam = (SumBeam/30);
       		 sr.WriteLine ("AvrBeam : ");
       		 sr.WriteLine (AvrBeam);
       		 
       		 AvrSpike  = (SumSpike/30);
       		 sr.WriteLine ("AvrSpike : ");
       		 sr.WriteLine (AvrSpike);
       		 
       		 AvrSaw  = (SumSaw/30);
       		 sr.WriteLine ("AvrSaw : ");
       		 sr.WriteLine (AvrSaw);       		
       		 
       		 AvrTrap  = (SumTrap/30);
       		 sr.WriteLine ("AvrTrap : ");
       		 sr.WriteLine (AvrTrap);
       		 
       		 AvrBomb  = (SumBomb/30);
       		 sr.WriteLine ("AvrBomb : ");
       		 sr.WriteLine (AvrBomb);
       		 
       		 WinRate  = (SumWin/30*100);
       		 sr.WriteLine ("AvrWin : ");
       		 sr.WriteLine (WinRate);
        	 sr.Close();
        	 
        	 
       		
       		
        
}

//-----------------------------------------------------------------------------------------
