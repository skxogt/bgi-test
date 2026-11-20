/* Contact form: opens the visitor's email app with their inquiry filled in.
   Without this script the form still posts to the same mailto: address. */
(function () {
  var form = document.querySelector("form[data-mailto]");
  if (!form) return;
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!form.reportValidity()) return;
    var get = function (name) { var f = form.elements[name]; return f ? f.value.trim() : ""; };
    var subject = "Website inquiry from " + (get("name") || "a visitor") + (get("company") ? " (" + get("company") + ")" : "");
    var body = get("message") + "\n\n---\nName: " + get("name") + "\nEmail: " + get("email") +
      (get("company") ? "\nCompany or website: " + get("company") : "");
    window.location.href = "mailto:" + form.getAttribute("data-mailto") +
      "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });
})();
