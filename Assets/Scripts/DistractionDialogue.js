#pragma strict

import UnityEngine.Events;
import System.Collections.Generic;

static var currentDistractionDialogue : String = 'start';
static var nextDistractionDialogueLocation : String = 'start';

var DialogueScriptLink : DialogueScript;

private var GuardSuspicion : int = 8;
private var novelDiscovered : boolean = false;
private var novelAskedAbout : boolean = false;
private var novelLearnedAbout : boolean = false;


private var AllDistractionDialogue = new Dictionary.<String, dialogueSnipitObject>();

AllDistractionDialogue.Add(
	"start",
	new dialogueSnipitObject(
		//speaker
		'Guard',
		//dialogue
		'...',
		//imageAmount
		1,
		//image1
		"Images/Guard_Right",
		//image2
		null,
		//optionAmount
		1,
		//option1_text
		'Continue',
		//option1_action
		continueIntroduction,
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

AllDistractionDialogue.Add(
	"introduction",
	new dialogueSnipitObject(
		//speaker
		'Guard',
		//dialogue
		'*sigh*',
		//imageAmount
		2,
		//image1
		"Images/Guard_Right",
		//image2
		"Images/Imposter_left",
		//optionAmount
		3,
		//option1_text
		'Overly familiar greeting',
		//option1_action
		continueFamiliar,
		//option2_text
		'Timid, endearing greeting',
		//option2_action
		continueTimid,
		//option3_text
		'Casual greeting',
		//option1_action
		continueCasual
	)
);

AllDistractionDialogue.Add(
	"familiar",
	new dialogueSnipitObject(
		//speaker
		'Imposter',
		//dialogue
		'Jerry! Jerry, my man! How the hell are you?',
		//imageAmount
		2,
		//image1
		"Images/Guard_Right",
		//image2
		"Images/Imposter_left",
		//optionAmount
		1,
		//option1_text
		'Continue',
		//option1_action
		continueNext1,
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

AllDistractionDialogue.Add(
	"timid",
	new dialogueSnipitObject(
		//speaker
		'Imposter',
		//dialogue
		'Hey.. it\'s Jerry right? How\'s everything with you?',
		//imageAmount
		2,
		//image1
		"Images/Guard_Right",
		//image2
		"Images/Imposter_left",
		//optionAmount
		1,
		//option1_text
		'Continue',
		//option1_action
		continueNext1,
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

AllDistractionDialogue.Add(
	"casual",
	new dialogueSnipitObject(
		//speaker
		'Imposter',
		//dialogue
		'Hey, Jerry, how\'s it going?',
		//imageAmount
		2,
		//image1
		"Images/Guard_Right",
		//image2
		"Images/Imposter_left",
		//optionAmount
		1,
		//option1_text
		'Continue',
		//option1_action
		continueNext1,
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

AllDistractionDialogue.Add(
	"next1_lowSuspicion",
	new dialogueSnipitObject(
		//speaker
		'Jerry',
		//dialogue
		'Hey... yeah it\'s Jerry. I\'m doing  okay, same old, same old.',
		//imageAmount
		2,
		//image1
		"Images/Guard_Right",
		//image2
		"Images/Imposter_left",
		//optionAmount
		3,
		//option1_text
		'Pry about day',
		//option1_action
		continuePry,
		//option2_text
		'Ask about day',
		//option2_action
		continueAsk,
		//option3_text
		'Casually chat about day',
		//option1_action
		continueChat
	)
);

AllDistractionDialogue.Add(
	"next1_neutralSuspicion",
	new dialogueSnipitObject(
		//speaker
		'Jerry',
		//dialogue
		'Inmate.',
		//imageAmount
		2,
		//image1
		"Images/Guard_Right",
		//image2
		"Images/Imposter_left",
		//optionAmount
		3,
		//option1_text
		'Pry about day',
		//option1_action
		continuePry,
		//option2_text
		'Ask about day',
		//option2_action
		continueAsk,
		//option3_text
		'Casually chat about day',
		//option1_action
		continueChat
	)
);

AllDistractionDialogue.Add(
	"next1_highSuspicion",
	new dialogueSnipitObject(
		//speaker
		'Jerry',
		//dialogue
		'Hmm.. what do you want?',
		//imageAmount
		2,
		//image1
		"Images/Guard_Right",
		//image2
		"Images/Imposter_left",
		//optionAmount
		3,
		//option1_text
		'Pry about day',
		//option1_action
		continuePry,
		//option2_text
		'Ask about day',
		//option2_action
		continueAsk,
		//option3_text
		'Casually chat about day',
		//option1_action
		continueChat
	)
);

AllDistractionDialogue.Add(
	"pry",
	new dialogueSnipitObject(
		//speaker
		'Imposter',
		//dialogue
		'Whatcha up to today, Jerry? What are you doing after work? Can I come?\nHaha, just kidding! Really though, don\'t you get bored just standing there?',
		//imageAmount
		2,
		//image1
		"Images/Guard_Right",
		//image2
		"Images/Imposter_left",
		//optionAmount
		1,
		//option1_text
		'Continue',
		//option1_action
		continueNext2,
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

AllDistractionDialogue.Add(
	"ask",
	new dialogueSnipitObject(
		//speaker
		'Imposter',
		//dialogue
		'How are things going for you today? Everything okay?',
		//imageAmount
		2,
		//image1
		"Images/Guard_Right",
		//image2
		"Images/Imposter_left",
		//optionAmount
		1,
		//option1_text
		'Continue',
		//option1_action
		continueNext2,
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

AllDistractionDialogue.Add(
	"chat",
	new dialogueSnipitObject(
		//speaker
		'Imposter',
		//dialogue
		'How\'s it going?',
		//imageAmount
		2,
		//image1
		"Images/Guard_Right",
		//image2
		"Images/Imposter_left",
		//optionAmount
		1,
		//option1_text
		'Continue',
		//option1_action
		continueNext2,
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

function continueDistractionDialogue() {
	//Load the next dialogue
	DialogueScriptLink.loadDialogue(AllDistractionDialogue[nextDistractionDialogueLocation]);

	//store current location
	currentDistractionDialogue = nextDistractionDialogueLocation;
}

function beginDistraction() {
	//print('link sucess');
	continueDistractionDialogue();
}

function continueIntroduction() {
	nextDistractionDialogueLocation = "introduction";
	continueDistractionDialogue();
}

function continueFamiliar() {
	GuardSuspicion += 1;
	nextDistractionDialogueLocation = "familiar";
	continueDistractionDialogue();
}

function continueTimid() {
	GuardSuspicion -= 1;
	nextDistractionDialogueLocation = "timid";
	continueDistractionDialogue();
}

function continueCasual() {
	nextDistractionDialogueLocation = "casual";
	continueDistractionDialogue();
}

function continueNext1() {
	if(GuardSuspicion > 8) {
		nextDistractionDialogueLocation = "next1_highSuspicion";
	} else if(GuardSuspicion < 8) {
		nextDistractionDialogueLocation = "next1_lowSuspicion";
	} else {
		nextDistractionDialogueLocation = "next1_neutralSuspicion";
	}
	//continueDistractionDialogue();
	//Start Office scene
}

function continuePry() {

}

function continueAsk() {

}

function continueChat() {

}

function continueNext2() {

}




function Start () {
	
}

function Update () {
	
}
