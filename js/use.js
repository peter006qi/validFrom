window.onload = function() {
  var username = document.querySelector("#userName");
  var userzhanghao = document.querySelector("#userzhanghao");
  var userPwd = document.querySelector("#userPwd");
  var againPwd = document.querySelector("#againPwd");
  var usertel = document.querySelector("#userTel");
  var userQq = document.querySelector("#userQq");
  var userEmail = document.querySelector("#userEmail");
  var userPhone = document.querySelector("#userPhone");
  var userMailCode = document.querySelector("#userMailCode");
  var userSelfId = document.querySelector("#userSelfId");

  validForm.checkfoo(username, 'chn');
  validForm.checkfoo(userzhanghao, 'zhanghao');
  validForm.checkfoo(userPwd, 'pwd');
  validForm.checkfoo(againPwd, 'pwd');
  validForm.checkfoo(usertel, 'tel');
  validForm.checkfoo(userQq, 'qq');
  validForm.checkfoo(userEmail, 'email');
  validForm.checkfoo(userPhone, 'phone');
  validForm.checkfoo(userMailCode, 'mailCode');
  validForm.checkfoo(userSelfId, 'idcard');

  againPwd.addEventListener("focusout", function() {
    if (userPwd.value != againPwd.value) {
      againPwd.setAttribute('class', 'negative');
      againPwd.parentNode.setAttribute('class', 'current');
      againPwd.parentNode.setAttribute("data-content", "两次输入的密码不一致，请重新输入");
    }
  });
  userPwd.addEventListener("focusout", function() {
    if (userPwd.value != againPwd.value) {
      againPwd.setAttribute('class', 'negative');
      againPwd.parentNode.setAttribute('class', 'current');
      againPwd.parentNode.setAttribute("data-content", "两次输入的密码不一致，请重新输入");
    }
  });

}
