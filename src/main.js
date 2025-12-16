// Main interactivity for Spitiwilly site
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu
  const menuBtn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const menuOpen = document.getElementById("menu-open");
  const menuClose = document.getElementById("menu-close");
  menuBtn?.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
      menuOpen.classList.add("hidden");
      menuClose.classList.remove("hidden");
    } else {
      menu.classList.add("hidden");
      menuOpen.classList.remove("hidden");
      menuClose.classList.add("hidden");
    }
  });

  // Gallery modal
  const galleryItems = document.querySelectorAll(".gallery-item");
  const modal = document.getElementById("gallery-modal");
  const modalImg = document.getElementById("gallery-full");
  const modalClose = document.getElementById("gallery-close");

  galleryItems.forEach((img) => {
    img.addEventListener("click", (e) => {
      const src = img.getAttribute("data-full") || img.src;
      modalImg.src = src;
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    });
  });

  modalClose?.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
    modalImg.src = "";
  });

  modal?.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
      modalImg.src = "";
    }
  });

  // Contact + booking handling with configurable endpoint (Formspree/Netlify) or mailto fallback.
  const OWNER_EMAIL = "spitiwilly@gmail.com"; // Mailto fallback address (update if needed)

  function saveLead(payload) {
    try {
      const key = "spitiwilly_leads";
      const existing = JSON.parse(localStorage.getItem(key) || "[]");
      existing.push(payload);
      localStorage.setItem(key, JSON.stringify(existing));
    } catch (err) {
      // ignore storage errors
    }
  }

  const MOCK_API_URL = "https://jsonplaceholder.typicode.com/posts"; // mock endpoint for demo/testing

  function submitToEndpoint(form, statusEl) {
    const endpoint = form.dataset.endpoint && form.dataset.endpoint.trim();
    const fd = new FormData(form);
    const payloadObj = {};
    fd.forEach((v, k) => (payloadObj[k] = v));
    payloadObj._received = new Date().toISOString();
    payloadObj._page = window.location.pathname || window.location.href;
    saveLead(payloadObj);

    const target = endpoint || MOCK_API_URL;
    statusEl.textContent = "Sending…";
    // If endpoint accepts FormData, send it directly; for JSONPlaceholder we'll send JSON
    const isMock = !endpoint;
    const fetchOpts = isMock
      ? {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payloadObj),
        }
      : { method: "POST", body: fd };

    fetch(target, fetchOpts)
      .then((res) => {
        if (res.ok) {
          statusEl.classList.remove("text-red-500");
          statusEl.classList.add("text-green-400");
          statusEl.textContent = isMock
            ? "Sent (simulation)."
            : "Thanks! We received your message.";
          form.reset();
        } else {
          throw new Error("Network response not ok");
        }
      })
      .catch(() => {
        // final fallback: open mail client
        statusEl.classList.remove("text-green-400");
        statusEl.classList.add("text-red-500");
        statusEl.textContent =
          "Could not send — opening email client as fallback.";
        const subject = encodeURIComponent(
          "Spitiwilly enquiry from " +
            (fd.get("name") || fd.get("bk_name") || "guest")
        );
        let body = "";
        fd.forEach((v, k) => {
          body += `${k}: ${v}\n`;
        });
        const mailto = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${encodeURIComponent(
          body
        )}`;
        setTimeout(() => {
          window.location.href = mailto;
        }, 800);
      });
  }

  // Purpose toggle in contact form
  const purpose = document.getElementById("purpose");
  const bookingFields = document.getElementById("booking-fields");
  purpose?.addEventListener("change", (e) => {
    if (e.target.value === "booking") bookingFields.classList.remove("hidden");
    else bookingFields.classList.add("hidden");
  });

  // Quick booking modal handlers
  const bookOpen = document.getElementById("book-open");
  const bookingModal = document.getElementById("booking-modal");
  const bookingClose = document.getElementById("booking-close");
  bookOpen?.addEventListener("click", () => {
    bookingModal.classList.remove("hidden");
    bookingModal.classList.add("flex");
  });
  bookingClose?.addEventListener("click", () => {
    bookingModal.classList.add("hidden");
    bookingModal.classList.remove("flex");
  });
  bookingModal?.addEventListener("click", (e) => {
    if (e.target === bookingModal) {
      bookingModal.classList.add("hidden");
      bookingModal.classList.remove("flex");
    }
  });

  // Contact form submit
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = (document.getElementById("name") || {}).value || "";
    const email = (document.getElementById("email") || {}).value || "";
    if (!name || !email) {
      status.textContent = "Please provide name and email.";
      status.classList.add("text-red-500");
      return;
    }
    submitToEndpoint(form, status);
  });

  // Booking form submit
  const bookingForm = document.getElementById("booking-form");
  const bookingStatus = document.getElementById("booking-status");
  bookingForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const email =
      bookingForm.querySelector('input[name="bk_email"]').value || "";
    const name = bookingForm.querySelector('input[name="bk_name"]').value || "";
    if (!email || !name) {
      bookingStatus.textContent = "Please provide name and email.";
      bookingStatus.classList.add("text-red-500");
      return;
    }
    submitToEndpoint(bookingForm, bookingStatus);
  });

  // Newsletter form (in footer) — graceful fallback
  const newsletterForm = document.getElementById("newsletter-form");
  const newsletterStatus = document.getElementById("newsletter-status");
  newsletterForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const fd = new FormData(newsletterForm);
    const email = fd.get("newsletter_email");
    if (!email) {
      newsletterStatus.textContent = "Enter an email.";
      newsletterStatus.classList.add("text-red-500");
      return;
    }
    // save to local leads and attempt to POST if endpoint set
    submitToEndpoint(newsletterForm, newsletterStatus);
  });
});
