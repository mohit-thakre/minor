(function () {
  const scriptTag = document.currentScript;
  const testimonialId = scriptTag.getAttribute("data-testimonial-id");

  if (!testimonialId) return;

  const iframe = document.createElement("iframe");
  iframe.src = `http://localhost:3000/embed/testi/${testimonialId}`;
  iframe.width = "100%";
  iframe.height = "200";
  iframe.style.border = "none";
  iframe.style.borderRadius = "12px";
  iframe.style.overflow = "hidden";
  iframe.style.marginTop = "1rem";

  scriptTag.parentNode.insertBefore(iframe, scriptTag.nextSibling);
})();
