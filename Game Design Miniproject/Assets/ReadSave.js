import System.IO;
private var  fileName = "MyFile1.txt"; 
private var LineNum : int=0;
private var GetInt : int=0;
var SC : Score;
 
 
function Start()
{
CheckFile();
}

function CheckFile()
{
	for(var i:int=1;i<100;i++)
		{
		
		var fileName = "MyFile" + i + ".txt";
        if (File.Exists(fileName))
        	{
            Debug.Log(fileName+" already exists.");
       		}
       	else
       		{
       		fileName = "MyFile" + (i-1) + ".txt";
       		ReadFile(fileName);
       		Debug.Log(fileName+" read.");
       		i+=1000;
       		}
        }
}

 
function ReadFile(file : String)
   {
    if(File.Exists(file)){
        var sr = File.OpenText(file);
        var line = sr.ReadLine();
        while(line != null){
        	Debug.Log(LineNum);
        	
            //Debug.Log(line); // prints each line of the file
            /////////
            if(LineNum==0)
            {
            GetInt = int.Parse(line);
            Debug.Log(GetInt);
            SC.Game+=GetInt+1;
            }
            if(LineNum==2)
            {
            GetInt = int.Parse(line);
            Debug.Log(GetInt);
            SC.SumFB+=GetInt;
            }
            if(LineNum==12)
            {
            GetInt = int.Parse(line);
            Debug.Log(GetInt);
            SC.SumFire+=GetInt;
            }
            
            if(LineNum==14)
            {
            GetInt = int.Parse(line);
            Debug.Log(GetInt);
            SC.SumLaser+=GetInt;
            }
            
            if(LineNum==16)
            {
            GetInt = int.Parse(line);
            Debug.Log(GetInt);
            SC.SumSpike+=GetInt;
            }
            
            if(LineNum==18)
            {
            GetInt = int.Parse(line);
            Debug.Log(GetInt);
            SC.SumSaw+=GetInt;
            }
            
            if(LineNum==20)
            {
            GetInt = int.Parse(line);
            Debug.Log(GetInt);
            SC.SumTrap+=GetInt;
            }
            
            if(LineNum==22)
            {
            GetInt = int.Parse(line);
            Debug.Log(GetInt);
            SC.SumBomb+=GetInt;
            }
            
            if(LineNum==24)
            {
            GetInt = int.Parse(line);
            Debug.Log(GetInt);
            SC.SumWin+=GetInt;
            }
            
            line = sr.ReadLine();          
            LineNum++;
            
        }  
    } else {
        Debug.Log("Could not Open the file: " + file + " for reading.");
        return;
    }
}
//-----------------------------------------------------------------------------------------
