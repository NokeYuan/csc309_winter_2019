'use strict';

// definition of a posting, contains all the necessary info about a posting
function Posting(imgSrc, title, comment){
	this.imgSrc = imgSrc;
	this.title = title;
	this.comment = comment;
	this.owner = "user1";
}

function PostingManager(postingContainer, maxPostingPerRow){
	this.postingContainer = postingContainer;
	this.maxPostingPerRow = maxPostingPerRow;
}


PostingManager.prototype = {
	appendPosting : function(newPosting){
		this.appendPostingDOM(newPosting);
	},

	getPostingsInContainer: function(){
		const postingArray = new Array();
		const postingRows = Array.from(this.postingContainer.querySelectorAll('.row'));
		// loop through each row of postings
		postingRows.forEach((tr, index, array)=>{
			const postingTds = Array.from(tr.children);
			postingTds.forEach((td, tdIndex, tdArray)=>{
				const postingDiv = td.querySelector('.post')
				// get properties of each posting and add to array
				const postingImgSrc = postingDiv.querySelector('.postImageContainer .postImage').getAttribute('src');
				const postingTitle = postingDiv.querySelector('.postTextContainer .postText').innerHTML;
				const postingComment = ''; // TODO decide where the commet is
				postingArray.push(new Posting(postingImgSrc, postingTitle, postingComment));
			});
		});
		return postingArray;
	},

	/******  Functions to update the DOM accordingly ******/
	/*
	* Load all the User postings to the DOM
	 * Should be called only once when the page first load  
	 */
	 appendPostingArrayDOM : function (postingArray){
	 	postingArray.forEach((posting, index, array)=>{
	 		this.appendPostingDOM(posting);
	 	});
	 },

	// append Postings to the DOM
	appendPostingDOM: function (newPosting){
		const postingRows = this.postingContainer.querySelectorAll('.row');
		const lastPostingRow = postingRows[postingRows.length-1];

		// create dom td element for the posting
		const newPostingDom = this.createPostingDomTD(newPosting);
		// check whether to append to last row or create a new row
		if(lastPostingRow.children.length >= this.maxPostingPerRow){
			// create a new tr and append to it
			const newRow = document.createElement('div');
			newRow.classList.add('row');
			newRow.appendChild(newPostingDom);
			this.postingContainer.appendChild(newRow);
		}
		else{
		// append to the last row
		lastPostingRow.appendChild(newPostingDom);
		}
	},

	createPostingDomTD : function (newPosting){
		const column = document.createElement('div');
		column.classList.add('column')
		const newPostDiv = document.createElement('div');
		newPostDiv.classList.add('post');

		// create posting image section Dom
		const postingImageDiv = document.createElement('div');
		postingImageDiv.classList.add('postImageContainer');
		const postingImg = document.createElement('img');
		postingImg.classList.add('postImage');
		postingImg.setAttribute('src', newPosting.imgSrc);
		postingImageDiv.appendChild(postingImg);

		// create posting title section Dom
		const postingTitleDiv = document.createElement('div');
		postingTitleDiv.classList.add('postTextContainer');
		const postingTextSpan = document.createElement('span');
		postingTextSpan.classList.add('postText');
		postingTextSpan.appendChild(document.createTextNode(newPosting.title));
		postingTitleDiv.appendChild(postingTextSpan);

		newPostDiv.appendChild(postingImageDiv);
		newPostDiv.appendChild(postingTitleDiv);

		column.appendChild(newPostDiv);
		return column;
	}
}