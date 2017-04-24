#pragma strict

import System.Collections;

var speed : float = 0f;
var passiveSpeed : float = 0.5f;
var naturalMovement : boolean = true;
var offsetAmount : float = 0f;
private var rend : Renderer;

function Start () {
	rend = GetComponent.<Renderer>();
}

function Update () {
	offsetAmount += passiveSpeed * Time.deltaTime;
	var offset : Vector2 = Vector2(offsetAmount, 0);
	rend.material.mainTextureOffset = offset;

}


/* using UnityEngine;
using System.Collections;

public class TextureParallax : MonoBehaviour {

	public float speed = 0.5f;
	public float passiveSpeed = 0.0f;
	public bool naturalMovement = false;
	private float offsetAmount = 0;

	// Use this for initialization
	void Start () {
	}
	
	// Update is called once per frame
	void Update () {

		float userInput = Input.GetAxis ("Horizontal");

		if (userInput != 0) {
			offsetAmount += userInput * speed * Time.deltaTime;
		} else if (naturalMovement == true) {
			offsetAmount += passiveSpeed * Time.deltaTime;
		}

		Vector2 offset = new Vector2 (offsetAmount, 0);

		GetComponent<Renderer>().material.mainTextureOffset = offset;
	
	}
} */