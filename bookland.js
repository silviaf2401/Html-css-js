var bookArray = new Array(5);
var bookone = {
	'author': 'Thomas Mann', 
	'title': 'Death in Venice', 
	'description': 'One of the most famous literary works of the twentieth century, this novella embodies themes that preoccupied Thomas Mann in much of his work: the duality of art and life, the presence of death and disintegration in the midst of existence, the connection between love and suffering and the conflict between the artist and his inner self.'
};

var booktwo = {
	'author': 'James Joyce', 
	'title': 'A portrait of the artist as a young man', 
	'description': 'This book is a fictional re-creation of the Irish writer\'s own life and early environment. The experiences of the novel\'s young hero, unfold in astonishingly vivid scenes that seem freshly recalled from life and provide a powerful portrait of the coming of age of a young man of unusual intelligence, sensitivity and character.'
};

var bookthree = {
	'author': 'E. M. Forster', 
	'title': 'A room with a view', 
	'description': 'This work displays an unusually perceptive view of British society in the early 20th century. It is a social comedy set in Florence, Italy, and Surrey, England. Its heroine, Lucy Honeychurch, struggling against straitlaced Victorian attitudes of arrogance, narroe mindedness and sobbery, falls in love - while on holiday in Italy - with the socially unsuitable George Emerson.'
};

var bookfour = {
	'author': 'Isabel Allende', 
	'title': 'The house of spirits', 
	'description': 'Allende describes the life of three generations of a prominent family in Chile and skillfully combines with this all the main historical events of the time, up until Pinochet\'s dictatorship.'
};

var bookfive = {
	'author': 'Isabel Allende', 
	'title': 'Of love and shadows', 
	'description': 'The whole world of Irene Beltran, a young reporter in Chile at the time of the dictatorship, is destroyed when she discovers a series of killings carried out by government soldiers. With the help of a photographer, Francisco Leal, and risking her life, she tries to come up with evidence against the dictatorship.'
};

bookArray[0] = bookone;
bookArray[1] = booktwo;
bookArray[2] = bookthree;
bookArray[3] = bookfour;
bookArray[4] = bookfive;

function displayText() {
	var authorEntered = document.getElementById('author').value;
	var titleEntered = document.getElementById('title').value;
	var displayErrorMessage = true;
	if (authorEntered.length == 0 && titleEntered.length == 0) {
		document.getElementById('board').value = "Please enter an author name and a book title, then click on the \'Find Book\' button." ;
		displayErrorMessage = false;
	} else if (authorEntered.length > 0 && titleEntered.length == 0) {
		for (var i = 0; i < bookArray.length; i++) {
			if (bookArray[i].author == authorEntered) {
				document.getElementById('board').value = "Title: " + bookArray[i].title + ".\n" + 'Description: ' + bookArray[i].description;
				displayErrorMessage = false;
				break;
			}
		}
	} else if (authorEntered.length == 0 && titleEntered.length > 0) {
		for (var i = 0; i < bookArray.length; i++) {
			if (bookArray[i].title == titleEntered) {
				document.getElementById('board').value = "Author: " + bookArray[i].author + ".\n" + 'Description: ' + bookArray[i].description;
				displayErrorMessage = false;
				break;
			}
		}
	} else {
		for (var i = 0; i < bookArray.length; i++) {
			if (bookArray[i].title == titleEntered && bookArray[i].author == authorEntered) {
				document.getElementById('board').value = 'Description: ' + bookArray[i].description;
				displayErrorMessage = false;
				break;
			}
		}
	}
	if (displayErrorMessage) {
		document.getElementById('board').value = "That book and/or author was not found in our database.";
	}
}

function reset() {
	document.getElementById('author').value = "";
	document.getElementById('title').value = "";
	document.getElementById('board').value = "";
}