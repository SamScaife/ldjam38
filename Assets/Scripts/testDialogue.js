#pragma strict

var ModalScript : DialogueScript;

function runTest(message : String) {
	print('doing something');
	var imageChoice = Resources.Load("Images/Pyro", Sprite);
	print(imageChoice);
	ModalScript.UpdateDialogueArea('test speaker', message, 1, imageChoice, null, 2, 'continue', 'back', '', option1, option2, null);
}

function option1() {
	print('option 1 clicked');
}

function option2() {
	print('option 2 clicked');
}

