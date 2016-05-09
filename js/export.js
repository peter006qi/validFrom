(function(data) {
  var exports = window[data] || {};
  exports.checkfoo = function(obj, type) {
    var reg;
    var msg;
    switch (type) {
      case "chn":
        reg = /[\u4e00-\u9fa5]/;
        msg = "必须全为汉字";
        break;
      case "zhanghao":
        reg = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
        msg = "字母开头，允许5-16字节，允许字母数字下划线";
        break;
      case "pwd":
        reg = /\S{6,}/;
        msg = "需要填写六位以上的密码";
        break;
      case "tel":
        reg = /^\d{11}$/;
        msg = "手机号码11位";
        break;
      case "qq":
        reg = /[1-9][0-9]{4,}/;
        msg = "QQ号5位以上";
        break;
      case "email":
        reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        msg = "邮箱";
        break;
      case "phone":
        reg = /\d{3}-\d{8}|\d{4}-\d{7}/;
        msg = "座机格式xxx-12345678/ xxxx-1234567";
        break;
      case "mailCode":
        reg = /[0-9]\d{5}(?!\d)/; //邮编
        msg = "邮编";
        break;
      case "idcard":
        reg = /(^\d{15}$)|(^\d{17}([0-9]|X)$)/;
        msg = "15位或18位，18位时最后一位可以为X";
        break;
    }
    func(obj, reg, msg);

    function func(input, reg, remindTxt) {
      input.addEventListener("focusout", function() {
        if (input.value != "" && !reg.test(input.value) || input.value == "") {
          input.setAttribute('class', 'negative');
          input.parentNode.setAttribute('class', 'current');
          input.parentNode.setAttribute("data-content", remindTxt);
        } else {
          input.parentNode.setAttribute('class', '');
          input.setAttribute('class', 'positive');
        }

      })
    }
  }
  window[data] = exports;
})("validForm");

