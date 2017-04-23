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

public class dialogueSnipitObject {
    public var speaker : String;
    public var dialogue : String;
    public var imageAmount : int;
    public var image1 : String;
    public var image2 : String;
    public var optionAmount : int;
    public var option1_text : String;
    public var option1_action : UnityAction;
    public var option2_text : String;
    public var option2_action : UnityAction;
    public var option3_text : String;
    public var option3_action : UnityAction;

    //dialogueSnipitObject constructor
    public function dialogueSnipitObject (newSpeaker : String, newDialogue : String, newImageAmount : int, newImage1 : String, newImage2 : String, newOptionAmount : int, newOption1_text : String, newOption1_action : UnityAction, newOption2_text : String, newOption2_action : UnityAction, newOption3_text : String, newOption3_action : UnityAction) {
        speaker = newSpeaker;
	    dialogue = newDialogue;
	    imageAmount = newImageAmount;
	    image1 = newImage1;
	    image2 = newImage2;
	    optionAmount = newOptionAmount;
	    option1_text = newOption1_text;
	    option1_action = newOption1_action;
	    option2_text = newOption2_text;
	    option2_action = newOption2_action;
	    option3_text = newOption3_text;
	    option3_action = newOption3_action;
    }

}

function Start() {
	//print('hit');
	//start hidden
	closeDialogueArea();
}

function loadDialogue(item : dialogueSnipitObject) {
	print('loading dialogue');
	print(item);
	//Set up images
	var image1Choice = null;
	var image2Choice = null;
	//load image 1
	if(item.imageAmount > 0) {
		image1Choice = Resources.Load(item.image1, Sprite);
		print(image1Choice);
	}
	//load image 2
	if(item.imageAmount > 1) {
		image2Choice = Resources.Load(item.image2, Sprite);
	}

	//Set up options
	var option1Text = '';
	var option1Action = null;

	var option2Text = '';
	var option2Action = null;

	var option3Text = '';
	var option3Action = null;
	//Set up option 1
	if(item.optionAmount > 0) {
		option1Text = item.option1_text;
		option1Action = item.option1_action;
	}
	//Set up option 2
	if(item.optionAmount > 1) {
		option2Text = item.option2_text;
		option2Action = item.option2_action;
	}
	//Set up option 3
	if(item.optionAmount > 2) {
		option3Text = item.option3_text;
		option3Action = item.option3_action;
	}

	UpdateDialogueArea(item.speaker, item.dialogue, item.imageAmount, image1Choice, image2Choice, item.optionAmount, option1Text, option2Text, option3Text, option1Action, option2Action, option3Action);	
};

function UpdateDialogueArea(speakerText: String, dialogueText: String, imageAmount: int, image1 : Sprite, image2 : Sprite, optionAmount : int, option1Text: String, option2Text: String, option3Text: String, option1Event : UnityAction, option2Event : UnityAction, option3Event : UnityAction) {
	print('updating Dialogue area');
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
		Option2Button.gameObject.SetActive(true);
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
		Option3Button.gameObject.SetActive(true);
		Option3Button.onClick.RemoveAllListeners();
	    Option3Button.onClick.AddListener (option3Event);
	    Option3TextArea.text = option3Text;
	} else {
		//hide option 3
		Option3Button.gameObject.SetActive(false);
	}

	if(imageAmount > 0) {
		Image1Area.gameObject.SetActive(true);
		Image1Area.sprite = image1;
	} else {
		Image1Area.gameObject.SetActive(false);
	}

	if(imageAmount > 1) {
		Image2Area.gameObject.SetActive(true);
		Image2Area.sprite = image2;
	} else {
		Image2Area.gameObject.SetActive(false);
	}

}

function closeDialogueArea() {
	DialogueArea.SetActive(false);
}



