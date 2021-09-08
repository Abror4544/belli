$(function () {
  $("#formCall").submit(function () {
    var errors = false;

    if (!errors) {
      var data = $("#formCall").serialize();
      $.ajax({
        url: "modal.php",
        type: "POST",
        data: data,
        success: function (res) {
          if (res == 1) {
            $.fancybox.close({
              href: "javascript:;",
              src: "#modal-form",
            });
            $.fancybox.open({
              href: "javascript:;",
              src: "#thanks",
            });
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });
  $("#askForm").submit(function () {
    var errors = false;

    if (!errors) {
      var data = $("#askForm").serialize();
      $.ajax({
        url: "question.php",
        type: "POST",
        data: data,
        success: function (res) {
          if (res == 1) {
            $.fancybox.close({
              href: "javascript:;",
              src: "#modal-form",
            });
            $.fancybox.open({
              href: "javascript:;",
              src: "#thanks",
            });
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });
  $("#simpleForm").submit(function () {
    var errors = false;

    if (!errors) {
      var data = $("#simpleForm").serialize();
      $.ajax({
        url: "simple.php",
        type: "POST",
        data: data,
        success: function (res) {
          if (res == 1) {
            $.fancybox.open({
              href: "javascript:;",
              src: "#thanks",
            });
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });
  $("#calcForm").submit(function () {
    var errors = false;

    if (!errors) {
      var data = $("#calcForm").serialize();
      $.ajax({
        url: "calc.php",
        type: "POST",
        data: data,
        success: function (res) {
          if (res == 1) {
            $.fancybox.close({
              href: "javascript:;",
              src: "#calc-form",
            });
            $.fancybox.open({
              href: "javascript:;",
              src: "#thanks",
            });
          } else {
            alert("Ошибка отправки!");
          }
        },
        error: function () {
          alert("Ошибка!");
        },
      });
    }
    return false;
  });

});
