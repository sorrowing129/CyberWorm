var SC : Score;
var Dummy1 : GameObject;
var Dummy2 : GameObject;
var Dummy3 : GameObject;
var Dummy4 : GameObject;
var Dummy5 : GameObject;
public var num : int =0;

function OnMouseOver(){
		if(num>0){
		Dummy1.transform.position.y=60;
		}
		if(num>1){
		Dummy2.transform.position.y=60;
		}
		if(num>2){
		Dummy3.transform.position.y=60;
		}
		if(num>3){
		Dummy4.transform.position.y=60;
		}
		if(num>4){
		Dummy5.transform.position.y=60;
		}
//    if(num>0){
//    Instantiate(Dummy1,Vector3(-250,58,-680), Quaternion.identity);
//    }
//    if(num>1){
//    Instantiate(WhtSkull,Vector3(-125,58,-680), Quaternion.identity);
//    }
//    if(num>2){
//    Instantiate(WhtSkull,Vector3(05,58,-680), Quaternion.identity);
//    }
//    if(num>3){
//    Instantiate(WhtSkull,Vector3(125,58,-680), Quaternion.identity);
//    }
//    if(num>4){
//    Instantiate(WhtSkull,Vector3(250,58,-680), Quaternion.identity);
//    }
	if(Input.GetMouseButtonDown(0))
    {
    print("click");
    SC.FeedBack+=num;
    SC.SaveGame();
    }     
  }
  
  function OnMouseExit(){
  	Dummy1.transform.position.y=-600;
  	Dummy2.transform.position.y=-600;
  	Dummy3.transform.position.y=-600;
  	Dummy4.transform.position.y=-600;
  	Dummy5.transform.position.y=-600;
  }
  
function Quit(){
Application.Quit();
}