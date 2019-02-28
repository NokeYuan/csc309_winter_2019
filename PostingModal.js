'use strict';

// get elements
const postButton = document.querySelector('#UserPageHeader .UserPostButtonDiv');
const postModal = document.querySelector('#MakePostModal');

postButton.addEventListener('click', showModal);
window.addEventListener('click', closeModal);

function showModal(e){
	postModal.style.display = 'block';
}

function closeModal(e){
	if(e.target === postModal){
		postModal.style.display = 'none';
	}
}

