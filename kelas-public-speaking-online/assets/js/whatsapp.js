// Function sendWhatsAppMessage digunakan saat user click DAFTAR SEKARANG di pricing
function sendWhatsAppMessage(button) {
  // WhatsApp Settings
  var walink = "https://web.whatsapp.com/send",
    phone = "6285780007799",
    baseMessage = "Salam Hangat, saya melihat *Website dialogika.co* dan tertarik banget dengan program",
    program = button.getAttribute("data-program");

  var additionalMessage = "apakah masih ada quota? - dari website (fb/ig)";

  // Smartphone Support
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    walink = "whatsapp://send";
  }

  // Final WhatsApp Message
  var blanter_whatsapp =
    walink + "?phone=" + phone + "&text=" + baseMessage + " " + program + "%0A%0A" + additionalMessage;

  // Open WhatsApp
  window.open(blanter_whatsapp, "_blank");
}

// Function askAdminMessage digunakan saat user click TANYA ADMIN di pricing
function askAdminMessage(button) {
  // WhatsApp Settings
  var walink = "https://web.whatsapp.com/send",
    phone = "6285780007799",
    baseMessage = "Salam Hangat, saya melihat *Website dialogika.co* dan ingin bertanya terkait program",
    program = button.getAttribute("data-program");

  var additionalMessage = "apakah masih ada quota? - dari website (fb/ig)";

  // Smartphone Support
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    walink = "whatsapp://send";
  }

  // Final WhatsApp Message
  var blanter_whatsapp = walink + "?phone=" + phone + "&text=" + baseMessage + " " + `"*  ${program}*"` + "%0A%0A";

  // Open WhatsApp
  window.open(blanter_whatsapp, "_blank");
}

$(document).on("click", ".send_contact", function () {
  var input_blanter = document.getElementById("names");

  // WhatsApp Settings
  var walink = "https://web.whatsapp.com/send",
    phone = "6285780007799",
    walink2 =
      "Salam Hangat, Saya melihat *Website dialogika.co* dan saya tertarik untuk tahu lebih lanjut." +
      "%0A%0A" +
      "Sebelumnya perkenalkan saya: ",
    text_yes = "Terkirim.",
    text_no = "Isi semua Formulir lalu klik Kirim.";

  // Smartphone Support
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    walink = "whatsapp://send";
  }

  if (input_blanter.value !== "") {
    // Call Input Form
    var input_name2 = $("#names").val(),
      input_domisili2 = $("#locations").val(),
      input_program2 = $("#programs :selected").text(),
      input_message2 = $("#messages").val();

    // Final WhatsApp URL
    var blanter_whatsapp =
      walink +
      "?phone=" +
      phone +
      "&text=" +
      walink2 +
      "%0A%0A" +
      "*Nama*         : " +
      input_name2 +
      "%0A" +
      "*Domisili*     : " +
      input_domisili2 +
      "%0A" +
      "*Program*      : " +
      input_program2 +
      "%0A" +
      "*Pesan*        : " +
      input_message2 +
      "%0A";

    // WhatsApp Window Open
    window.open(blanter_whatsapp, "_blank");
    document.getElementById("text-info").innerHTML = '<span class="yes">' + text_yes + "</span>";
  } else {
    document.getElementById("text-info").innerHTML = '<span class="no">' + text_no + "</span>";
  }
});
