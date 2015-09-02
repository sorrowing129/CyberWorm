function OnMouseOver(){
    if(Input.GetMouseButtonDown(0))
    {
    print("click");
    Quit();
    }     
  }
  
function Quit(){
Application.Quit();
}