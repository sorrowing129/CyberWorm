var Button : GameObject;
var X : float = 0;
var Y : float = 0;

function OnMouseOver(){
	X = Random.Range(-80,80);
	Y = Random.Range(-70,70);
    /*if(Input.GetMouseButtonDown(0))
    {
    print("click");
    Application.LoadLevel("login");
    }     */
    Instantiate(Button,Vector3(X,Y,120),transform.rotation);
    Destroy(gameObject);
  }