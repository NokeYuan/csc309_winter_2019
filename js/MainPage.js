'use strict';

const postingTable = document.querySelector('#UserPostingsTable');
const maxPostingPerRow = 4;

const postingManager = new PostingManager(postingTable, maxPostingPerRow);

postingManager.appendPostingArrayDOM(getUserPostings());



// Get user postings from remote server (hardcoded for now)
function getUserPostings(userId){
	const userPostingArray = new Array();
	userPostingArray.push(new Posting('../Image/samplePost1.jpg','Posting1','comment1'));
	userPostingArray.push(new Posting('../Image/samplePost2.jpg','Posting2','comment2'));
	userPostingArray.push(new Posting('../Image/samplePost3.jpg','Posting3','comment3'));
	userPostingArray.push(new Posting('../Image/samplePost4.jpg','Posting4','comment4'));
	userPostingArray.push(new Posting('../Image/samplePost5.jpg','Posting5','comment5'));
	userPostingArray.push(new Posting('../Image/samplePost6.jpg','Posting6','comment6'));	
	return userPostingArray;
}

