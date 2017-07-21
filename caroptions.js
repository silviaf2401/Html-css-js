var colorImageDictionary = { 'blue': 'blue.jpg', 'red': 'red.jpg', 'black': 'black.jpg', 'silver': 'silver.jpg', 'white': 'white.jpg'};

function changeCarColor(){
	var colorselected = document.getElementById("carcolor").value;
	document.getElementById('carpicture').src = colorImageDictionary[colorselected];
}

function calculateTotalCost() {
	var optionsCostDictionary = {
		'gt-manual': 17790, 'gt-automatic': 18590, 'gt-s-manual': 22455,
		'gt-s-sportshift': 23155, 'stereo': 550, 'security': 399, 'mirror': 295, 'option-combo-1': 1235, 'option-combo-2':3354,
		'nocombo': 0}
	var total;
	var transmissionType = document.getElementById('formone').configuration.value;
	var factoryOption = document.getElementById('formtwo').factoryOptions.value;
	var dealerOptionOne = 'nocombo';
	var dealerOptionTwo ='nocombo';
	var dealerOptionThree = 'nocombo';
  if (document.getElementById('vipsecuritysystem').checked){
    dealerOptionOne = 'security';
   } 
   if (document.getElementById('autodimmingmirror').checked){
    dealerOptionTwo = 'mirror';
   }
   if (document.getElementById('upgradedstereosystem').checked){
    dealerOptionThree = 'stereo';
   }
  total = optionsCostDictionary[transmissionType] + optionsCostDictionary[factoryOption] + optionsCostDictionary[dealerOptionOne] + optionsCostDictionary[dealerOptionTwo] + optionsCostDictionary[dealerOptionThree];
  // Understand this could be done more simply using Regex but because I do not
  // have full command/understanding of the expression I did not want to use it here. 
  var totalDecimal = total.toFixed(2);
  var totalString = totalDecimal.toString();
  var firstHalf = totalString.substr(0,2);
  var secondHalf=totalString.substr(2);
  var totaltoDisplay =  '$' + firstHalf + ',' + secondHalf;
  var textContent = document.getElementById('totaldisplay');
  textContent.value = totaltoDisplay;
}
