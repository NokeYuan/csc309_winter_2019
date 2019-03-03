'use strict';
// get elements
const postButton = document.querySelector('#newPostButtonDiv');
const postModal = document.querySelector('#PostModal');
// post form elements
const postModalForm = document.querySelector('#PostModal-Form');
const postImgDiv = document.querySelector('#PostModal-Picture');
const postImageFileSelector = document.querySelector('#PostModal-ImgFileSelector');
const submitPostButton = document.querySelector('#PostModal-SubmitPost');


postButton.addEventListener('click', showModal);
window.addEventListener('click', closeModal);
postImageFileSelector.addEventListener('change', parsePostImg);
postModalForm.addEventListener('submit', parsePostImg);


// post modal displays
function showModal(e){
	postModal.style.display = 'block';
}

function closeModal(e){
	if(e.target === postModal){
		postModal.style.display = 'none';
	}
}


// posting parsing and post
// dragover files to upload img
postImgDiv.addEventListener('click', function(e){
	console.log('click');
	postImageFileSelector.click();
});


function parsePostImg(e){
	e.preventDefault();

	const newPostImgFile = postImageFileSelector.files[0];
	// read the img url
	const fileReader = new FileReader();

	fileReader.onload = ()=>{
		const newPosting = new Posting(fileReader.result,'Posting1','comment1');
		addPost(newPosting);
	}
	fileReader.readAsDataURL(newPostImgFile);

}


function addPost(newPost){


	(new PostingManager(document.querySelector('#UserPostingsTable'), 4)).appendPostingDOM(newPost);
	postModal.style.display = 'none';
}
