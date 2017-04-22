#pragma strict

private var cam0 : Camera;
private var cam1 : Camera;
private var cam2 : Camera;
private var cam3 : Camera;
private var cam4 : Camera;

var cameras = [cam0,cam1,cam2,cam3,cam4];

function Start () {
	for (var i = 0; i < cameras.length; i++) {
		//turn all cameras off
		cameras[i].enabled = false;
	}
	//enable the yard camera
	cameras[0].enabled = true;
}

function Update () {
	
}

function ChangeCamera (index : int) {
	for (var i = 0; i < cameras.length; i++) {
		//turn all cameras off
		cameras[i].enabled = false;
	}
	//enable defined camera 
	cameras[index].enabled = true;
}
