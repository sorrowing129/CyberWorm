#pragma strict

function Update () {
 
}

function OnMouseOver(){
    if(Input.GetMouseButtonDown(0))
    {
    print("click");
    Application.LoadLevel("sc2");
    }     
}