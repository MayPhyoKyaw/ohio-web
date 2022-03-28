// CONSTANTS
const reg =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// handleblur
var form = document.getElementById("contact-form");
var mmForm = document.getElementById("contact-form-mm");
var jpForm = document.getElementById("contact-form-jp");
// form.email.addEventListener("blur", function (event) {
//   validateField(this);
// });
form && form.subject.addEventListener("blur", function (event) {
  validateField(this, 'en');
});
form && form.message.addEventListener("blur", function (event) {
  validateField(this, 'en');
});
mmForm && mmForm.subject.addEventListener("blur", function (event) {
  validateField(this, 'mm')
})
mmForm && mmForm.message.addEventListener("blur", function (event) {
  validateField(this, 'mm')
})
jpForm && jpForm.subject.addEventListener("blur", function (event) {
  validateField(this, 'jp')
})
jpForm && jpForm.message.addEventListener("blur", function (event) {
  validateField(this, 'jp')
})

function validateField(field, lang) {
  var isOk = false;
  if(lang === 'mm') {
    if (field.type === "text") {
      if (field.value.length < 3) {
        onInvalid(field, "ခေါင်းစဉ်အတွက် အနည်းဆုံး စာလုံး ၃ လုံး ရိုက်ထည့်ပေးရန်လိုပါသည်");
      } else if (field.value.length > 60) {
        onInvalid(field, "ခေါင်းစဉ် သည် စားလုံးရေ ၆၀ ထက်မကျော်ရန်လိုပါသည်။");
      } else {
        onValid(field);
        isOk = true;
      }
    } else {
      if (field.value === "") {
        onInvalid(field, "ပို့ချင်သော စာ ကို ရိုက်ထည့်ပေးရန်လိုပါသည်");
      } else {
        onValid(field);
        isOk = true;
      }
    }
  }else if (lang === 'jp') {
    if (field.type === "text") {
      if (field.value.length < 3) {
        onInvalid(field, "件名には３文字以上必要です");
      } else if (field.value.length > 60) {
        onInvalid(field, "件名は最大60文字までです");
      } else {
        onValid(field);
        isOk = true;
      }
    } else {
      if (field.value === "") {
        onInvalid(field, "内容を入力してください");
      } else {
        onValid(field);
        isOk = true;
      }
    }
  }else {
    if (field.type === "text") {
      if (field.value.length < 3) {
        onInvalid(field, "Subject should contain at least 3 characters");
      } else if (field.value.length > 60) {
        onInvalid(field, "Subject should be at most 60 characters");
      } else {
        onValid(field);
        isOk = true;
      }
    } else {
      if (field.value === "") {
        onInvalid(field, "Please enter a message");
      } else {
        onValid(field);
        isOk = true;
      }
    }
  }
  return isOk;
}

function onInvalid(field, feedback) {
  field.style.border = "1px solid tomato";
  field.nextElementSibling.innerHTML = feedback;
  field.nextElementSibling.style.display = "block";
}

function onValid(field) {
  field.style.border = "1px solid #899456";
  field.nextElementSibling.style.display = "none";
}

function validateAll(form) {
  // validateField(form.email) &&
    validateField(form.subject) &&
    validateField(form.message) &&
    gotoMail({
      subject: form.subject.value,
      message: form.message.value,
    },form.id);
}

// submitForm
function submitForm(form) {
  validateAll(form);
}
// reset form

function resetForm(id) {
  document.getElementById(`${id}`).reset();
}

// go to mail
function gotoMail(values,id) {
  resetForm(id);
  window.open(
    `mailto:ohio.jl.center@gmail.com, ohio.mi.coltd@gmail.com?subject=${values.subject}&body=${values.message}`
  );
}
