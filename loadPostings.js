'use strict';
const log = console.log;
// global objects

const postings = new Array();


function Posting(imgSrc, title, comment){
	this.imgSrc = imgSrc;
	this.title = title;
	this.comment = comment;
}

const postingTable = document.querySelector('#UserPostingsTable');



getUserPostings('placeholder');
log(postings);




// Get user postings from remote server (hardcoded for now)
function getUserPostings(userId){
	postings.push(new Posting('./samplePosts/samplePost1.jpg','Posting1','comment1'));
	postings.push(new Posting('./samplePosts/samplePost2.jpg','Posting2','comment2'));
	postings.push(new Posting('./samplePosts/samplePost3.jpg','Posting3','comment3'));
	postings.push(new Posting('./samplePosts/samplePost4.jpg','Posting4','comment4'));
	postings.push(new Posting('./samplePosts/samplePost5.jpg','Posting5','comment5'));
	postings.push(new Posting('./samplePosts/samplePost6.jpg','Posting6','comment6'));	
}