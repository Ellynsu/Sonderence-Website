/* Sonderence — opens the Fillout popup from the site's own CTA buttons.
 *
 * Fillout's embed script (server.fillout.com/embed/v1/) wires an existing
 * element instead of injecting its own button whenever the target is not a
 * <div>. From its source:
 *
 *     const initializePopupButton = (element, onclick) => {
 *       // leave previous button snippet as it is
 *       if (element.tagName !== 'DIV') { element.onclick = onclick; return; }
 *       ...builds its own <button>...
 *
 * Every CTA on this site is an <a>, so carrying the data-fillout-* attributes
 * on the CTA itself is all that is needed — no Fillout button is rendered.
 *
 * This loader exists because the embed script cannot simply be dropped into
 * <head>:
 *
 *   1. Page bodies are rendered client-side by support.js (React), so the CTAs
 *      are not in the initial HTML. The embed script is a plain IIFE that runs
 *      querySelectorAll once at execution time and never re-scans, so loading
 *      it early would bind nothing.
 *   2. The mobile-menu CTA sits inside an <sc-if> and only mounts when the menu
 *      is opened — after any first scan.
 *
 * So: load the embed script once CTAs exist, and re-run it whenever an unwired
 * CTA appears. Re-running is safe — Fillout stamps each element it wires with
 * data-fillout-initialized and skips those on subsequent passes.
 */
(function () {
  'use strict';

  var EMBED_SRC = 'https://server.fillout.com/embed/v1/';
  var UNWIRED = '[data-fillout-id]:not([data-fillout-initialized])';
  var queued = false;

  /* The CTAs deliberately carry no href: Fillout assigns element.onclick and
   * does not call preventDefault, so a surviving href would navigate away and
   * open the popup at the same time. An <a> without href loses the pointer
   * cursor and keyboard focusability, so both are restored here.
   *
   * This rule cannot override the design-system Button, which sets `cursor`
   * as an inline style — that is intended, so its disabled `not-allowed`
   * cursor still wins. It applies to the plain text-link CTAs. */
  var css = document.createElement('style');
  css.textContent = '[data-fillout-id]{cursor:pointer;}';
  document.head.appendChild(css);

  function makeFocusable(el) {
    if (!el.hasAttribute('role')) el.setAttribute('role', 'button');
    if (!el.hasAttribute('tabindex')) el.setAttribute('tabindex', '0');
  }

  function sync() {
    queued = false;
    var unwired = document.querySelectorAll(UNWIRED);
    if (!unwired.length) return;

    for (var i = 0; i < unwired.length; i++) makeFocusable(unwired[i]);

    var s = document.createElement('script');
    s.src = EMBED_SRC;
    s.onload = function () {
      if (s.parentNode) s.parentNode.removeChild(s);
    };
    document.head.appendChild(s);
  }

  function schedule() {
    if (queued) return;
    queued = true;
    // Let React finish its commit before scanning.
    requestAnimationFrame(sync);
  }

  /* <a> without href is not activated by the keyboard on its own. */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ' && e.key !== 'Spacebar') return;
    var el = e.target && e.target.closest && e.target.closest('[data-fillout-id]');
    if (!el) return;
    e.preventDefault();
    el.click();
  });

  /* Catches the initial React render and later mounts such as the mobile menu.
   * Fillout's own DOM writes re-enter here harmlessly: once everything is
   * wired, sync() finds nothing unwired and returns without reloading. */
  new MutationObserver(schedule).observe(document.documentElement, {
    childList: true,
    subtree: true
  });

  schedule();
})();
