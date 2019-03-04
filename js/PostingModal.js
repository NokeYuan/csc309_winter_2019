'use strict';
// constants
const postingRootDom = '.postContainer';

// get elements
const postButton = document.querySelector('#newPostButtonDiv');
const postModal = document.querySelector('#PostModal');
// post form elements
const postModalForm = document.querySelector('#PostModal-Form');
const postImgDiv = document.querySelector('#PostModal-Picture');
const postImg = document.querySelector('#PostModal-Picture .AddFilePic');
const postImageFileSelector = document.querySelector('#PostModal-ImgFileSelector');
const postTitleText = document.querySelector('#PostModal-PostTitle .PostModal-PostTitleText');
const submitPostButton = document.querySelector('#PostModal-SubmitPost');


postButton.addEventListener('click', showModal);
window.addEventListener('click', closeModal);
postImageFileSelector.addEventListener('change', previewImg);
postModalForm.addEventListener('submit', postNewPosting);


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
	postImageFileSelector.click();
});

// preview the img when uploaded
function previewImg(e){
	e.preventDefault();

	const newPostImgFile = postImageFileSelector.files[0];
	// read the img url
	const fileReader = new FileReader();
	fileReader.readAsDataURL(newPostImgFile);

	fileReader.onload = ()=>{
		postImg.setAttribute('src', fileReader.result);
	}

}


function postNewPosting(e){
	e.preventDefault();
	const fr = new FileReader();
	fr.readAsDataURL(postImageFileSelector.files[0]);
	fr.onload = function(e){
		const newPostImgSrc = fr.result;
		const newPostTitle = postTitleText.value;
		const newPostComment = "";
		const newPost = new Posting(newPostImgSrc, newPostTitle, newPostComment);
		(new PostingManager(document.querySelector(postingRootDom), 4)).appendPostingDOM(newPost);
		postModal.style.display = 'none';
	}
}
