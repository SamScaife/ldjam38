#pragma strict

import UnityEngine.Events;
import System.Collections.Generic;

static var currentYardDialogue : String = '0';
static var nextYardDialogueLocation : int = 0;

var ModalScript : DialogueScript;

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

private var AllYardDialogue = new Dictionary.<String, dialogueSnipitObject>();


AllYardDialogue.Add(
	"0",
	new dialogueSnipitObject(
		//speaker
		'?????',
		//dialogue
		'The Pickpocket, the Imposter and the Arsonist have found the note in the prison-yard…',
		//imageAmount
		0,
		//image1
		null,
		//image2
		null,
		//optionAmount
		1,
		//option1_text
		'Continue',
		//option1_action
		continueYardDialogue,
		//option2_text
		'',
		//option2_action
		null,
		//option3_text
		'',
		//option1_action
		null
	)
);

AllYardDialogue.Add(
	"1",
	new dialogueSnipitObject(
		//speaker
		'The Note',
		//dialogue
		'I hope this note finds you in time.\nYour life is in danger.',
		//imageAmount
		1,
		//image1
		'Images/Note',
		//image2
		null,
		//optionAmount
		1,
		//option1_text
		'Continue',
		//option1_action
		continueYardDialogue,
		//option2_text
		'',
		//option2_action
		null,
		//option3_text
		'',
		//option1_action
		null
	)
);

AllYardDialogue.Add(
	"2",
	new dialogueSnipitObject(
		//speaker
		'The Note',
		//dialogue
		'Ever wonder where all the other prisoners went? Let’s just say, they didn’t get early parole. \nSomething is happening at Helios Correctional Facility. Something out of the ordinary. Something sinister.',
		//imageAmount
		1,
		//image1
		'Images/Note',
		//image2
		null,
		//optionAmount
		1,
		//option1_text
		'Continue',
		//option1_action
		continueYardDialogue,
		//option2_text
		'',
		//option2_action
		null,
		//option3_text
		'',
		//option1_action
		null
	)
);

AllYardDialogue.Add(
	"3",
	new dialogueSnipitObject(
		//speaker
		'The Note',
		//dialogue
		'Your window for escape is narrowing. Make sure you’re out of there by the Summer Solstice. \n The door at the end of the corridor by C wing – that’s the real exit. The warden keeps a key.',
		//imageAmount
		1,
		//image1
		'Images/Note',
		//image2
		null,
		//optionAmount
		1,
		//option1_text
		'Continue',
		//option1_action
		continueYardDialogue,
		//option2_text
		'',
		//option2_action
		null,
		//option3_text
		'',
		//option1_action
		null
	)
);

AllYardDialogue.Add(
	"4",
	new dialogueSnipitObject(
		//speaker
		'The Note',
		//dialogue
		'Good luck. \nSigned A friend.',
		//imageAmount
		1,
		//image1
		'Images/Note',
		//image2
		null,
		//optionAmount
		1,
		//option1_text
		'Continue',
		//option1_action
		continueYardDialogue,
		//option2_text
		'',
		//option2_action
		null,
		//option3_text
		'',
		//option1_action
		null
	)
);

AllYardDialogue.Add(
	"5",
	new dialogueSnipitObject(
		//speaker
		'Imposter',
		//dialogue
		'...',
		//imageAmount
		1,
		//image1
		'Images/Impersonator',
		//image2
		null,
		//optionAmount
		1,
		//option1_text
		'Continue',
		//option1_action
		continueYardDialogue,
		//option2_text
		'',
		//option2_action
		null,
		//option3_text
		'',
		//option1_action
		null
	)
);

AllYardDialogue.Add(
	"6",
	new dialogueSnipitObject(
		//speaker
		'Imposter',
		//dialogue
		'What do you think it means, ‘something is happening’?',
		//imageAmount
		1,
		//image1
		'Images/Impersonator',
		//image2
		null,
		//optionAmount
		1,
		//option1_text
		'Continue',
		//option1_action
		continueYardDialogue,
		//option2_text
		'',
		//option2_action
		null,
		//option3_text
		'',
		//option1_action
		null
	)
);

AllYardDialogue.Add(
	"7",
	new dialogueSnipitObject(
		//speaker
		'Pickpocket',
		//dialogue
		'It’s probably a prank. Some dumb joke. Toss it in the trash.',
		//imageAmount
		1,
		//image1
		'Images/Pickpocket',
		//image2
		null,
		//optionAmount
		1,
		//option1_text
		'Continue',
		//option1_action
		continueYardDialogue,
		//option2_text
		'',
		//option2_action
		null,
		//option3_text
		'',
		//option1_action
		null
	)
);

AllYardDialogue.Add(
	"8",
	new dialogueSnipitObject(
		//speaker
		'Imposter',
		//dialogue
		'But where did all the other prisoners go? And what if it’s telling the truth?\nThe Summer Solstice is only two weeks away.',
		//imageAmount
		1,
		//image1
		'Images/Impersonator',
		//image2
		null,
		//optionAmount
		1,
		//option1_text
		'Continue',
		//option1_action
		continueYardDialogue,
		//option2_text
		'',
		//option2_action
		null,
		//option3_text
		'',
		//option1_action
		null
	)
);

AllYardDialogue.Add(
	"9",
	new dialogueSnipitObject(
		//speaker
		'Arsonist',
		//dialogue
		'Maybe they’re gonna blow us all up.',
		//imageAmount
		1,
		//image1
		'Images/Pyro',
		//image2
		null,
		//optionAmount
		1,
		//option1_text
		'Continue',
		//option1_action
		continueYardDialogue,
		//option2_text
		'',
		//option2_action
		null,
		//option3_text
		'',
		//option1_action
		null
	)
);

AllYardDialogue.Add(
	"10",
	new dialogueSnipitObject(
		//speaker
		'Pickpocket',
		//dialogue
		'What!? No one’s blowing me up!',
		//imageAmount
		1,
		//image1
		'Images/Pickpocket',
		//image2
		null,
		//optionAmount
		1,
		//option1_text
		'Continue',
		//option1_action
		continueYardDialogue,
		//option2_text
		'',
		//option2_action
		null,
		//option3_text
		'',
		//option1_action
		null
	)
);

AllYardDialogue.Add(
	"11",
	new dialogueSnipitObject(
		//speaker
		'Imposter',
		//dialogue
		'Well… they’ve told us where to find the key…',
		//imageAmount
		1,
		//image1
		'Images/Impersonator',
		//image2
		null,
		//optionAmount
		1,
		//option1_text
		'Continue',
		//option1_action
		continueYardDialogue,
		//option2_text
		'',
		//option2_action
		null,
		//option3_text
		'',
		//option1_action
		null
	)
);

AllYardDialogue.Add(
	"12",
	new dialogueSnipitObject(
		//speaker
		'Pickpocket',
		//dialogue
		'And this place is really starting to fuck with me...',
		//imageAmount
		1,
		//image1
		'Images/Pickpocket',
		//image2
		null,
		//optionAmount
		1,
		//option1_text
		'Continue',
		//option1_action
		continueYardDialogue,
		//option2_text
		'',
		//option2_action
		null,
		//option3_text
		'',
		//option1_action
		null
	)
);

AllYardDialogue.Add(
	"13",
	new dialogueSnipitObject(
		//speaker
		'Arsonist',
		//dialogue
		'Let’s get the fuck out of here!',
		//imageAmount
		1,
		//image1
		'Images/Pickpocket',
		//image2
		null,
		//optionAmount
		1,
		//option1_text
		'Continue',
		//option1_action
		continueYardDialogue,
		//option2_text
		'',
		//option2_action
		null,
		//option3_text
		'',
		//option1_action
		null
	)
);

AllYardDialogue.Add(
	"13",
	new dialogueSnipitObject(
		//speaker
		'Arsonist',
		//dialogue
		'Let’s get the fuck out of here!',
		//imageAmount
		1,
		//image1
		'Images/Pyro',
		//image2
		null,
		//optionAmount
		1,
		//option1_text
		'Continue',
		//option1_action
		continueYardDialogue,
		//option2_text
		'',
		//option2_action
		null,
		//option3_text
		'',
		//option1_action
		null
	)
);

AllYardDialogue.Add(
	"14",
	new dialogueSnipitObject(
		//speaker
		'Imposter',
		//dialogue
		'Agreed, I\'ll distract the guard.'
		//imageAmount
		1,
		//image1
		'Images/Impersonator',
		//image2
		null,
		//optionAmount
		1,
		//option1_text
		'Continue',
		//option1_action
		continueYardDialogue,
		//option2_text
		'',
		//option2_action
		null,
		//option3_text
		'',
		//option1_action
		null
	)
);

AllYardDialogue.Add(
	"14",
	new dialogueSnipitObject(
		//speaker
		'Pickpocket',
		//dialogue
		'I can get those keys.'
		//imageAmount
		1,
		//image1
		'Images/Pickpocket',
		//image2
		null,
		//optionAmount
		1,
		//option1_text
		'Continue',
		//option1_action
		continueYardDialogue,
		//option2_text
		'',
		//option2_action
		null,
		//option3_text
		'',
		//option1_action
		null
	)
);

AllYardDialogue.Add(
	"14",
	new dialogueSnipitObject(
		//speaker
		'Arsonist',
		//dialogue
		'About time I get to start a fire!'
		//imageAmount
		1,
		//image1
		'Images/Pyro',
		//image2
		null,
		//optionAmount
		1,
		//option1_text
		'Begin Escape',
		//option1_action
		startDistractionScene,
		//option2_text
		'',
		//option2_action
		null,
		//option3_text
		'',
		//option1_action
		null
	)
);

function startDistractionScene() {
	
}

function continueYardDialogue() {
	var dialogueSelection = nextYardDialogueLocation.ToString();
	//Load the next dialogue
	loadDialogue(AllYardDialogue[dialogueSelection]);

	//store current location
	currentYardDialogue = nextYardDialogueLocation + '';

	//update the next dialogue
	nextYardDialogueLocation ++;

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

	ModalScript.UpdateDialogueArea(item.speaker, item.dialogue, item.imageAmount, image1Choice, image2Choice, item.optionAmount, option1Text, option2Text, option3Text, option1Action, option2Action, option3Action);	
};

function OnEnable() {
	//continueYardDialogue();
}

function Start () {
	//start text after 2 seconds;
	Invoke('continueYardDialogue',2);
}

function Update () {
	
}
