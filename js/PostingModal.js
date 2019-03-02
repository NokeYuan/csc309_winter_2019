'use strict';

// get elements
const postButton = document.querySelector('#UserPageHeader .UserPostButtonDiv');
const postModal = document.querySelector('#MakePostModal');
const submitPostButton = document.querySelector('#MakePostModal-Post');

postButton.addEventListener('click', showModal);
window.addEventListener('click', closeModal);
submitPostButton.addEventListener('click', addPost);

// testing posting object
const newPosting = new Posting('./samplePosts/samplePost1.jpg','Posting1','comment1');


function showModal(e){
	postModal.style.display = 'block';
}

function closeModal(e){
	if(e.target === postModal){
		postModal.style.display = 'none';
	}
}

function addPost(){
	(new PostingManager(document.querySelector('#UserPostingsTable'), 4)).appendPostingDOM(newPosting);
	postModal.style.display = 'none';
}
