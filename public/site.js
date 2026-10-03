(function () {
  var root = document.documentElement;

  document.querySelectorAll("[data-theme]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var next = !root.classList.contains("dark");
      root.classList.toggle("dark", next);
      try {
        localStorage.setItem("sm-theme", next ? "dark" : "light");
      } catch (e) {}
      btn.setAttribute("aria-label", next ? "Switch to light" : "Switch to dark");
    });
  });

  var menu = document.querySelector("[data-menu]");
  var toggle = document.querySelector("[data-menu-toggle]");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var open = menu.hasAttribute("hidden");
      if (open) menu.removeAttribute("hidden");
      else menu.setAttribute("hidden", "");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var search = document.querySelector("[data-search]");
  var chips = Array.prototype.slice.call(document.querySelectorAll("[data-filter]"));
  var cards = Array.prototype.slice.call(document.querySelectorAll("[data-cat]"));
  var empty = document.querySelector("[data-empty]");
  var cat = "All";
  function render() {
    var query = (search && search.value ? search.value : "").trim().toLowerCase();
    var shown = 0;
    cards.forEach(function (card) {
      var okCat = cat === "All" || card.getAttribute("data-cat") === cat;
      var hay = (card.getAttribute("data-search") || "").toLowerCase();
      var okQ = !query || hay.indexOf(query) !== -1;
      var show = okCat && okQ;
      card.hidden = !show;
      if (show) shown += 1;
    });
    if (empty) empty.hidden = shown !== 0;
  }
  chips.forEach(function (chip) {
    chip.addEventListener("click", function () {
      cat = chip.getAttribute("data-filter") || "All";
      chips.forEach(function (item) {
        item.setAttribute("aria-pressed", item === chip ? "true" : "false");
        item.classList.toggle("bg-fg", item === chip);
        item.classList.toggle("text-bg", item === chip);
        item.classList.toggle("border", item !== chip);
        item.classList.toggle("border-line", item !== chip);
      });
      render();
    });
  });
  if (search) search.addEventListener("input", render);

  var form = document.querySelector("[data-inquiry]");
  if (form) {
    var params = new URLSearchParams(location.search);
    var intent = params.get("intent");
    if (intent === "buy" || intent === "offer" || intent === "agent") {
      var radio = form.querySelector('input[name="intent"][value="' + intent + '"]');
      if (radio) radio.checked = true;
    }
    var budget = form.querySelector('[name="budget"]');
    var checked = form.querySelector('input[name="intent"]:checked');
    if (budget && checked && checked.value === "buy" && !budget.value) {
      budget.value = "$125,000 asking price";
    }
    form.querySelectorAll('input[name="intent"]').forEach(function (radio) {
      radio.addEventListener("change", function () {
        if (radio.value === "buy" && budget && !budget.value) budget.value = "$125,000 asking price";
        var submit = form.querySelector("[data-submit]");
        if (submit) {
          submit.textContent =
            radio.value === "buy" ? "Request buy-now escrow" : radio.value === "agent" ? "Contact the agent" : "Send offer";
        }
      });
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = new FormData(form);
      var name = String(data.get("name") || "").trim();
      var email = String(data.get("email") || "").trim();
      var use = String(data.get("use") || "").trim();
      var money = String(data.get("budget") || "").trim();
      var note = String(data.get("note") || "").trim();
      var path = String(data.get("intent") || "offer");
      var errors = {};
      if (name.length < 2) errors.name = "Add your name.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Use a real email so we can reply.";
      if (use.length < 3) errors.use = "Say what you would build on it.";
      if (money.length < 2) errors.budget = "Add a budget or accept the ask.";
      form.querySelectorAll("[data-error]").forEach(function (node) {
        var key = node.getAttribute("data-error");
        node.textContent = errors[key] || "";
      });
      if (Object.keys(errors).length) return;
      var label = path === "buy" ? "Buy now" : path === "agent" ? "Contact agent" : "Make offer";
      var body = [
        "Hello,",
        "",
        "I am interested in acquiring script.monster.",
        "Path: " + label,
        "Name: " + name,
        "Email: " + email,
        "Intended use: " + use,
        "Budget: " + money,
        note ? "Note: " + note : "",
        "",
        "Thank you.",
      ]
        .filter(Boolean)
        .join("\n");
      var href =
        "mailto:sales@desertrich.com?subject=" +
        encodeURIComponent("script.monster — " + label) +
        "&body=" +
        encodeURIComponent(body);
      var status = document.querySelector("[data-sent]");
      if (status) {
        status.hidden = false;
        var again = status.querySelector("a");
        if (again) again.href = href;
      }
      form.hidden = true;
      location.href = href;
    });
  }

  var exit = document.querySelector("[data-exit]");
  if (!exit) return;
  var armed = false;
  try {
    if (sessionStorage.getItem("sm-exit") === "1") return;
  } catch (e) {
    return;
  }
  function closeExit() {
    exit.hidden = true;
  }
  function openExit() {
    if (!armed || !exit.hidden) return;
    armed = false;
    try {
      sessionStorage.setItem("sm-exit", "1");
    } catch (e) {}
    exit.hidden = false;
    var close = exit.querySelector("[data-exit-close]");
    if (close) close.focus();
  }
  setTimeout(function () {
    armed = true;
  }, 8000);
  document.documentElement.addEventListener("mouseleave", function (event) {
    if (event.clientY > 0) return;
    openExit();
  });
  exit.addEventListener("click", function (event) {
    if (event.target === exit) closeExit();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeExit();
  });
  exit.querySelectorAll("[data-exit-close]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      closeExit();
    });
  });
})();
