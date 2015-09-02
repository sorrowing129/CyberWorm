#pragma strict

function Update () {
 
}


function OnMouseOver(){
    if (Input.GetMouseButton(0))
    {
    	Application.Quit();
    }     
}