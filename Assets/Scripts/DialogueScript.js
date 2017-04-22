#pragma strict

import UnityEngine.UI;
import UnityEngine.Events;

var DialogueArea : GameObject;
var Image1Area : Image; 
var Image2Area : Image;
var Speaker : Text;
var Dialogue : Text;
var Option1Button : Button;
var Option2Button : Button;
var Option3Button : Button;
var Option1TextArea : Text;
var Option2TextArea : Text;
var Option3TextArea : Text;

private var options = [Option1Button,Option2Button,Option3Button];

function Start() {
	//print('hit');
	//start hidden
	closeDialogueArea();
}

function UpdateDialogueArea(speakerText: String, dialogueText: String, imageAmount: int, image1 : Sprite, image2 : Sprite, optionAmount : int, option1Text: String, option2Text: String, option3Text: String, option1Event : UnityAction, option2Event : UnityAction, option3Event : UnityAction) {
	//print('updating Dialogue area');
	DialogueArea.SetActive(true);

	Speaker.text = speakerText;
	Dialogue.text = dialogueText;


	//set up option1
	Option1Button.onClick.RemoveAllListeners();
    Option1Button.onClick.AddListener (option1Event);
    Option1TextArea.text = option1Text;

    //check if there should be an option 2
	if(optionAmount > 1) {
		//set up option2
		Option2Button.onClick.RemoveAllListeners();
	    Option2Button.onClick.AddListener (option2Event);
	    Option2TextArea.text = option2Text;
	} else {
		//hide option2
		Option2Button.gameObject.SetActive(false);
	}

	//check if there should be an option 3
	if(optionAmount > 2) {
		//set up option3
		Option3Button.onClick.RemoveAllListeners();
	    Option3Button.onClick.AddListener (option3Event);
	    Option3TextArea.text = option3Text;
	} else {
		//hide option 3
		Option3Button.gameObject.SetActive(false);
	}

	if(imageAmount > 0) {
		Image1Area.sprite = image1;
	} else {
		Image1Area.gameObject.SetActive(false);
	}

	if(imageAmount > 1) {
		Image2Area.sprite = image2;
	} else {
		Image2Area.gameObject.SetActive(false);
	}

}

function closeDialogueArea() {
	DialogueArea.SetActive(false);
}



