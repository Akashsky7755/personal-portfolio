
(function () {
  "use strict";

 
  var selector = [
    "section h2",
    "#about h3", "#about p", "#about ul", "#about li",
    "#skills h3", "#skills ul", "#skills li",
    "#projects h3", "#projects p", "#projects ul", "#projects li",
    "#contact p", "#contact ul", "#contact li", "#contact form",
    "footer p"
  ].join(", ");

  var targets = Array.prototype.slice.call(document.querySelectorAll(selector));

  if (targets.length === 0) return;

  
  targets.forEach(function (el) {
    el.classList.add("reveal");
  });

  
  var groups = document.querySelectorAll(
    "#about ul, #skills ul, #projects ul, #contact ul"
  );
  groups.forEach(function (group) {
    var items = group.querySelectorAll("li");
    items.forEach(function (li, i) {
      li.style.setProperty("--reveal-delay", (i % 8) * 0.06 + "s");
    });
  });

 
  if (!("IntersectionObserver" in window)) {
    targets.forEach(function (el) {
      el.classList.add("in-view");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });

 
  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var submitBtn = form.querySelector('button[type="submit"]');
      var formData = new FormData(form);

      if (status) status.textContent = "Sending…";
      if (submitBtn) submitBtn.disabled = true;

      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      })
        .then(function (response) {
          if (response.ok) {
            if (status) {
              status.textContent = "✓ Message sent — thanks for reaching out!";
            }
            form.reset();
          } else {
            return response.json().then(function (data) {
              var msg =
                data && data.errors
                  ? data.errors.map(function (err) { return err.message; }).join(", ")
                  : "Something went wrong. Please try again or email me directly.";
              if (status) status.textContent = msg;
            });
          }
        })
        .catch(function () {
          if (status) {
            status.textContent =
              "Network error. Please try again or email me directly.";
          }
        })
        .finally(function () {
          if (submitBtn) submitBtn.disabled = false;
        });
    });
  }
})();