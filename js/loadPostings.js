'use strict';
const log = console.log;
/*
 * Global objects
 */
// array of User Postings sorted ascendingly by the posted date 
const postings = new Array();
// maximum number of posting to be displayed per row
const PostingPerRow = 4;

// definition of a posting, contains all the necessary info about a posting
function Posting(imgSrc, title, comment){
	this.imgSrc = imgSrc;
	this.title = title;
	this.comment = comment;
}

// root DOM element for display postings
const postingTable = document.querySelector('#UserPostingsTable');


getUserPostings('placeholder');
// functions to update the dom according to the user posting array
loadAllPostingDOM();



// Get user postings from remote server (hardcoded for now)
function getUserPostings(userId){
	postings.push(new Posting('./samplePosts/samplePost1.jpg','Posting1','comment1'));
	postings.push(new Posting('./samplePosts/samplePost2.jpg','Posting2','comment2'));
	postings.push(new Posting('./samplePosts/samplePost3.jpg','Posting3','comment3'));
	postings.push(new Posting('./samplePosts/samplePost4.jpg','Posting4','comment4'));
	postings.push(new Posting('./samplePosts/samplePost5.jpg','Posting5','comment5'));
	postings.push(new Posting('./samplePosts/samplePost6.jpg','Posting6','comment6'));	
}





/******  Functions to update the DOM accordingly ******/
/*
 * Load all the User postings to the DOM
 * Should be called only once when the page first load  
*/
function loadAllPostingDOM(){
	postings.forEach((posting, index, array)=>{
		appendPostingDOM(posting);
	});
}


// append Postings to the DOM
function appendPostingDOM(newPosting){
	const postingRows = postingTable.querySelectorAll('tbody tr');
	const lastPostingRow = postingRows[postingRows.length-1];
	
	// create dom td element for the posting
	const newPostingDom = createPostingDomTD(newPosting);
	// check whether to append to last row or create a new row
	if(lastPostingRow.children.length >= PostingPerRow){
		log(lastPostingRow.length);	
		// create a new tr and append to it
		const newTr = document.createElement('tr');
		newTr.appendChild(newPostingDom);
		postingTable.querySelector('tbody').appendChild(newTr);
	}
	else{
		// append to the last row
		lastPostingRow.appendChild(newPostingDom);
	}
}


function createPostingDomTD(newPosting){
	const td = document.createElement('td');
	td.classList.add('Posting');

		// create posting image section Dom
		const postingImageDiv = document.createElement('div');
		postingImageDiv.classList.add('PostingImage');
		const postingImg = document.createElement('img');
		postingImg.setAttribute('src', newPosting.imgSrc);
		postingImageDiv.appendChild(postingImg);

		// create posting title section Dom
		const postingTitleDiv = document.createElement('div');
		postingTitleDiv.classList.add('PostingTitle');
		postingTitleDiv.appendChild(document.createTextNode(newPosting.title));

		td.appendChild(postingImageDiv);
		td.appendChild(postingTitleDiv);
		return td;
	}