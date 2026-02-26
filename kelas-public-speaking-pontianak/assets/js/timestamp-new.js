$(function () {
  $("#submits").attr("disabled", true);
  $("#uploadForm").on("input", function () {
    if ($("#names").val() !== "" && $("#locations").val() !== "" && $("#whatsapp").val() !== "") {
      $("#submits").attr("disabled", false);
    } else {
      $("#submits").attr("disabled", true);
    }
  });
});
