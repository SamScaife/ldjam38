#pragma strict

import UnityEngine.SceneManagement;

var Destination : String;

function Start () {
	
}

function Update () {
	
}
 
function LoadScene () {
	SceneManager.LoadScene( Destination, LoadSceneMode.Single);
}