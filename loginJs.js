
const loginButton = document.querySelector("#loginButton");
loginButton.addEventListener('click', changeLogin)

function changeLogin(e){

      e.preventDefault();

      // console.log(e.path[0].innerHTML);
      if (e.path[0].innerHTML == 'Log in'){
      /*Change to log in*/
      document.getElementById("loginContainer").children[0].children[0].innerHTML = "Sign Up";
      /*remove email*/
      const email =  document.getElementById("loginContainer").children[0].children[2]
      email.parentNode.removeChild(email);
      /*remove confirm*/
      const comfirm  = document.getElementById("loginContainer").children[0].children[3]
      comfirm.parentNode.removeChild(comfirm);
      /*change content*/

      const content = document.getElementById("loginContainer").children[0].children[4].children[0]
      content.innerHTML = "Don't have account yet?"

      /*change button*/
      const button = document.getElementById("loginContainer").children[0].children[4].children[1]
      button.innerHTML = "Sign Up"

      /*change login button*/
      // document.getElementById("loginContainer").children[0].children[5].innerHTML = '<button type="button" id = "signUpButton"><span class="infoText" style="text-align: center; font-size: 90%;">Log in</span></button>'
      document.getElementById("signUpButton").outerHTML = '<button type="button" id = "signUpButton" onclick="signUp()" > <span class="infoText" style="text-align: center; font-size: 90%;">Log in</span></button>'


    } else {
      /*Change back to prev*/
      document.getElementById("loginContainer").children[0].children[0].innerHTML = 'Join Us'
      document.getElementById("loginContainer").children[0].children[4].children[0].innerHTML = 'Already have an account?'
      const signup = document.getElementById("loginContainer").children[0].children[3]
      signup.innerHTML = '<button type="button" id = "signUpButton" onclick="signUp()"><span class="infoText" style="text-align: center; font-size: 90%;">Sign Up</span></button>'
      const conatiner = document.getElementById("loginContainer").children[0];
      const clone_node = document.getElementById("loginContainer").children[0].children[1];
      const email = clone_node.cloneNode(true);
      conatiner.insertBefore(email,conatiner.children[2]);
      const comfirm = clone_node.cloneNode(true);
      conatiner.insertBefore(comfirm,conatiner.children[4]);
      email.innerHTML = '<span class="infoText">Email</span><input style="margin-left: 56px;" id="infoType" type="text" name="firstName" >'
      comfirm.innerHTML = '<span class="infoText">comfirm</span><input input style="margin-left: 35px;" id="infoType" type="text" name="lastName" >'
      document.getElementById("loginContainer").children[0].children[6].children[1].innerHTML = 'Log in'
    }
}


function signUp(){
  const flag = document.getElementById("signUpButton").innerText
  if (flag == "Sign Up"){
    //What happen if user click sign up
    console.log("You sign up, please log in");
  } else {

    //what happen if log in
    location.href = "./MainPage.html"
    console.log("Log in sucsss!");
  }

}
