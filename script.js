function firstChar(text) {
  // your code here
	let newText = text.trim();
	if(newText.length < 1)return '';
	return newText[0];
	
}

// Do not change the code below
//Uncomment the following line to show he prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
