'use strict';

document.getElementById("changeBg").onclick = function() {
	document.getElementById("selectImage").click();	
}

document.getElementById("changeIcon").onclick = function() {
	document.getElementById("selectIcon").click();	
}

function previewBannerImg() {
	const bannerImg = document.getElementById("bgPic");
	const selectImg = document.getElementById("selectImage").files[0];
	const reader = new FileReader();

	reader.addEventListener("load", function () {
		bannerImg.src = reader.result;
	}, false);
		
	if (selectImg) {
		reader.readAsDataURL(selectImg);
	}
}

function previewIconImg() {
	const iconImg = document.getElementById("avatar");
	const selectImg = document.getElementById("selectIcon").files[0];
	const reader = new FileReader();

	reader.addEventListener("load", function () {
		iconImg.src = reader.result;
	}, false);
		
	if (selectImg) {
		reader.readAsDataURL(selectImg);
	}
}

const profiles = document.querySelector("#userProfile");


function addPetForm() {
	const newForm = document.createElement("div");
	newForm.className = "petsInfoForm";

	const formList = document.createElement("ul");
	formList.innerHTML = `<li class="info">
							your furry family <button id="deletePetButton" onclick="delPetForm(this)"></button>
						</li>

						<li class="infoDetail"> 

							<input id="infoType" type="text" name="petName" value="Name: ">

						</li>
						<li class="infoDetail"> 

							<input id="infoType" type="text" name="petDob" value="DoB: ">

						</li>
						<li class="infoDetail"> 

							<input id="infoType" type="text" name="species" value="Species: ">

						</li>
						<li class="infoDetail"> 

							<input id="infoType" type="text" name="gender" value="Gender: ">

						</li>
						<li class="infoDetail"> 

							<input id="infoType" type="text" name="spayed" value="Spayed/Neuterd: ">

						</li>

						<li class="infoDetail"> 
							<input id="infoType" type="text" name="breed" value="Breed: ">
						</li>
						<li class="infoDetail"> 
							<input id="infoType" type="text" name="weight" value="Weight: ">
						</li>
						<li class="infoDetail"> 
							<input id="infoType" type="text" name="color" value="Color: ">
						</li>
						<li class="infoDetail">
							<button id="addPet" onclick="addPetForm()">
								<img src="./addIcon.png" class="addPetIcon"><span class="addPetText">Add another pet</span>
							</button>
						</li>`;

	newForm.appendChild(formList);
	profiles.appendChild(newForm);
} 


function delPetForm(currentButton) {
	const petToRemove = currentButton.parentElement.parentElement.parentElement;
	profiles.removeChild(petToRemove);
}

const saveButton = document.querySelector("#saveButton");
saveButton.addEventListener('click', saveUserEdit);

function saveUserEdit(e) {
	
}


