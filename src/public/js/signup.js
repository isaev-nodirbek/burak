console.log("Signup frontend javascript file");
$(function () {
  const fileTarget = $(".file-box .upload-hidden");
  let filename;

  fileTarget.on("change", function () {
    if (window.FileReader) {
      const uploadFile = $(this)[0].files[0];
      if (!uploadFile) return; // Fayl tanlash bekor qilinsa xato bermasligi uchun

      const fileType = uploadFile["type"];
      const validImageType = ["image/jpg", "image/jpeg", "image/png"];
      if (!validImageType.includes(fileType)) {
        alert("Please insert only jpeg, jpg and png!");
      } else {
        if (uploadFile) {
          console.log(URL.createObjectURL(uploadFile));
          $(".upload-img-frame")
            .attr("src", URL.createObjectURL(uploadFile))
            .addClass("success");
        }
        filename = $(this)[0].files[0].name;
      }
      $(this).siblings(".upload-name").val(filename);
    }
  });

  // Real-time password check
  const passwordInput = $(".member-password");
  const confirmInput = $(".confirm-password");

  function checkPasswordMatch() {
    const password = passwordInput.val();
    const confirm = confirmInput.val();

    // if confirm is empty save original color
    if (confirm === "") {
      confirmInput.removeClass("input-error input-success");
      return;
    }

    if (password !== confirm) {
      confirmInput.addClass("input-error").removeClass("input-success");
    } else {
      confirmInput.addClass("input-success").removeClass("input-error");
    }
  }

  // confirm password check
  confirmInput.on("input", checkPasswordMatch);

  // main password check
  passwordInput.on("input", checkPasswordMatch);

  // using eye icon to show password
  $(".toggle-password").on("click", function () {
    const $input = $(this).siblings("input");
    const $icon = $(this).find("i");

    if ($input.attr("type") === "password") {
      $input.attr("type", "text");
      $icon.removeClass("fa-eye").addClass("fa-eye-slash");
      $(this).attr("aria-label", "Hide password");
    } else {
      $input.attr("type", "password");
      $icon.removeClass("fa-eye-slash").addClass("fa-eye");
      $(this).attr("aria-label", "Show password");
    }
  });
});

function validateSignupForm() {
  const memberNick = $(".member-nick").val();
  const memberPhone = $(".member-phone").val();
  const memberPassword = $(".member-password").val();
  const confirmPassword = $(".confirm-password").val();

  if (
    memberNick === "" ||
    memberPhone === "" ||
    memberPassword === "" ||
    confirmPassword === ""
  ) {
    alert("Please insert all required inputs");
    return false;
  }

  if (memberPassword !== confirmPassword) {
    alert("Password differs, please check!");
    return false;
  }

  const memberImage = $(".member-image").get(0)?.files[0]?.name
    ? $(".member-image").get(0)?.files[0]?.name
    : null;
  if (!memberImage) {
    alert("Please insert restaurant image!");
    return false;
  }

  return true;
}
