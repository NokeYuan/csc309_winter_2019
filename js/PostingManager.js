'use strict';

// definition of a posting, contains all the necessary info about a posting
function Posting(imgSrc, title, comment){
	this.imgSrc = imgSrc;
	this.title = title;
	this.comment = comment;
}

function PostingManager(tableDom, maxPostingPerRow){
	this.tableDom = tableDom;
	this.maxPostingPerRow = maxPostingPerRow;
}


PostingManager.prototype = {
	appendPosting : function(newPosting){
		this.appendPostingDOM(newPosting);
	},

	getPostingsInTable: function(){
		const postingArray = new Array();
		const postingRows = Array.from(this.tableDom.querySelectorAll('tbody tr'));
		console.log(postingRows);
		postingRows.forEach((tr, index, array)=>{
			const postingTds = Array.from(tr.children);
			postingTds.forEach((td, tdIndex, tdArray)=>{
				const postingImgSrc = td.querySelector('.PostingImage img').getAttribute('src');
				const postingTitle = td.querySelector('.PostingTitle').innerHTML;
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
		const postingRows = this.tableDom.querySelectorAll('tbody tr');
		const lastPostingRow = postingRows[postingRows.length-1];

		// create dom td element for the posting
		const newPostingDom = this.createPostingDomTD(newPosting);
		// check whether to append to last row or create a new row
		if(lastPostingRow.children.length >= this.maxPostingPerRow){
			// create a new tr and append to it
			const newTr = document.createElement('tr');
			newTr.appendChild(newPostingDom);
			this.tableDom.querySelector('tbody').appendChild(newTr);
		}
		else{
		// append to the last row
		lastPostingRow.appendChild(newPostingDom);
		}
	},

	createPostingDomTD : function (newPosting){
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
}