document.querySelectorAll("[data-toggle]").forEach(btn => {
  btn.addEventListener("click", () => {
    const id = btn.getAttribute("data-toggle");
    const el = document.getElementById(id);
    if (!el) return;
    const isHidden = el.classList.contains("hidden");
    el.classList.toggle("hidden");
    btn.textContent = isHidden ? "Hide evaluation parameters" : "Show evaluation parameters";
  });
});
