$(document).on("click", ".pricing-btn-link", function () {
  var walink = "https://web.whatsapp.com/send",
    phone = "6285162992597",
    defaultMessage =
      "Salam Hangat, Saya melihat *Website dialogika.co* tentang kursus public speaking online dan saya tertarik untuk tahu lebih lanjut.";
  (text_yes = "Terkirim."), (text_no = "Isi semua Formulir lalu klik Kirim.");

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    walink = "whatsapp://send";
  }

  // Get custom message dari elementnya
  var customMessage = $(this).attr("data-message");

  // Final WhatsApp URL
  var blanter_whatsapp = walink + "?phone=" + phone + "&text=" + encodeURIComponent(defaultMessage + customMessage);

  // Open WA
  window.open(blanter_whatsapp, "_blank");
  document.getElementById("text-info").innerHTML =
    '<span class="yes">' + text_yes + "</span>";
});
