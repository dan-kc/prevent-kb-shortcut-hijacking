(window.opera ? document.body : document).addEventListener(
  "keydown",
  function (e) {
    var modifier_cmd = e.metaKey;
    var modifier_ctrl = e.ctrlKey;
    var modifier_alt = e.altKey;
    var modifier_shift = e.shiftKey;

    var no_mods =
      !modifier_shift && !modifier_ctrl && !modifier_alt && !modifier_cmd;
    if (no_mods) {
      return;
    }

    // F5
    if (e.keyCode === 116) {
      e.stopImmediatePropagation();
      return;
    }

    if (modifier_cmd && modifier_alt) {
      switch (e.keyCode) {
        case 37: // <- - tab left
        case 39: // -> - tab right
          e.stopImmediatePropagation();
          return;
      }
    }

    if (modifier_cmd) {
      switch (e.keyCode) {
        case 188: // , - settings
        case 82: // r - reload
        case 70: // f - find
        case 191: // / - command menu
          e.stopImmediatePropagation();
          return;
      }
    }
  },
  true,
);
