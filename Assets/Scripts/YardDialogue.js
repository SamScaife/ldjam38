#pragma strict

import UnityEngine.Events;
import System.Collections.Generic;

static var currentYardDialogue : String = '0';
static var nextYardDialogueLocation : int = 0;

var DialogueScriptLink : DialogueScript;


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
		'Agreed, I\'ll distract the guard.',
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
	"15",
	new dialogueSnipitObject(
		//speaker
		'Pickpocket',
		//dialogue
		'I can get those keys.',
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
	"16",
	new dialogueSnipitObject(
		//speaker
		'Arsonist',
		//dialogue
		'About time I get to start a fire!',
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
	print('begin');
}

function continueYardDialogue() {
	var dialogueSelection = nextYardDialogueLocation.ToString();
	//Load the next dialogue
	DialogueScriptLink.loadDialogue(AllYardDialogue[dialogueSelection]);

	//store current location
	currentYardDialogue = nextYardDialogueLocation + '';

	//update the next dialogue
	nextYardDialogueLocation ++;

}


function OnEnable() {
	//continueYardDialogue();
}

function Start () {
	//start text after 2 seconds;
	Invoke('continueYardDialogue',2);
}

function Update () {
	
}
