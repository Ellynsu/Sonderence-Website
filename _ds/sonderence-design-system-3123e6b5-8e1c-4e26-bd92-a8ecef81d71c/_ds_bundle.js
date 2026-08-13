/* @ds-bundle: {"format":4,"namespace":"SonderenceDesignSystem_3123e6","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"CardFooter","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"ProgressMeter","sourcePath":"components/data/ProgressMeter.jsx"},{"name":"Stat","sourcePath":"components/data/Stat.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastStack","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"61895ce8b7da","components/core/Button.jsx":"15580ef5f828","components/core/Card.jsx":"f530b8fcf3b5","components/core/Eyebrow.jsx":"ff16df6fb2ce","components/core/Icon.jsx":"6e4ea5728b18","components/core/IconButton.jsx":"8d43432f8f2b","components/core/Logo.jsx":"feea27e27983","components/core/Tag.jsx":"ccec6e754f60","components/data/DataTable.jsx":"ddc3e2dfc823","components/data/ProgressMeter.jsx":"1fcd253292a3","components/data/Stat.jsx":"2d0d6f76d299","components/feedback/Dialog.jsx":"380cb5176858","components/feedback/Toast.jsx":"fd4bf4186a9d","components/feedback/Tooltip.jsx":"a18e151c76eb","components/forms/Checkbox.jsx":"900d97a20898","components/forms/Field.jsx":"8c4a69c28777","components/forms/Input.jsx":"eb0385ae03de","components/forms/Radio.jsx":"b6b6b4371181","components/forms/Select.jsx":"ea9f6b1e6983","components/forms/Switch.jsx":"dc66099f41f9","components/forms/Textarea.jsx":"de7a191b9297","components/navigation/Breadcrumbs.jsx":"14d6c621980e","components/navigation/Tabs.jsx":"4fba4b7b6087","ui_kits/portal/PortalDecisions.jsx":"9b4116e21558","ui_kits/portal/PortalOverview.jsx":"bf4a4fc01726","ui_kits/portal/PortalShell.jsx":"e6477ed8fe00","ui_kits/portal/PortalSystems.jsx":"789995a2cab8","ui_kits/portal/PortalWorkstream.jsx":"8450671e69d7","ui_kits/website/SiteChrome.jsx":"185ec549bbb6","ui_kits/website/WebsiteApproach.jsx":"dda61567e380","ui_kits/website/WebsiteCase.jsx":"55e46928e49d","ui_kits/website/WebsiteContact.jsx":"8eb39492339b","ui_kits/website/WebsiteHome.jsx":"8bc1addb3fa7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SonderenceDesignSystem_3123e6 = window.SonderenceDesignSystem_3123e6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    soft: ["var(--stone-100)", "var(--text-secondary)"],
    solid: ["var(--stone-700)", "var(--white)"],
    outline: ["var(--border-default)", "var(--text-secondary)"],
    dot: "var(--stone-400)"
  },
  brand: {
    soft: ["var(--navy-50)", "var(--navy-700)"],
    solid: ["var(--navy-800)", "var(--white)"],
    outline: ["var(--navy-200)", "var(--navy-700)"],
    dot: "var(--navy-600)"
  },
  accent: {
    soft: ["var(--brass-100)", "var(--brass-700)"],
    solid: ["var(--brass-500)", "var(--white)"],
    outline: ["var(--brass-200)", "var(--brass-700)"],
    dot: "var(--brass-500)"
  },
  success: {
    soft: ["var(--moss-100)", "var(--moss-600)"],
    solid: ["var(--moss-600)", "var(--white)"],
    outline: ["#C4D8C8", "var(--moss-600)"],
    dot: "var(--moss-500)"
  },
  warning: {
    soft: ["var(--amber-100)", "var(--amber-600)"],
    solid: ["var(--amber-600)", "var(--white)"],
    outline: ["#E6D2A4", "var(--amber-600)"],
    dot: "var(--amber-500)"
  },
  danger: {
    soft: ["var(--clay-100)", "var(--clay-600)"],
    solid: ["var(--clay-500)", "var(--white)"],
    outline: ["#E7C4BC", "var(--clay-600)"],
    dot: "var(--clay-500)"
  }
};
function Badge({
  tone = "neutral",
  variant = "soft",
  dot = false,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  const [bg, fg] = t[variant] || t.soft;
  const outline = variant === "outline";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      height: 20,
      padding: "0 var(--space-3)",
      borderRadius: "var(--radius-xs)",
      background: outline ? "transparent" : bg,
      color: fg,
      border: `1px solid ${outline ? bg : "transparent"}`,
      fontFamily: "var(--font-label)",
      fontSize: "var(--text-2xs)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      lineHeight: 1,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 5,
      height: 5,
      borderRadius: "var(--radius-full)",
      background: variant === "solid" ? "currentColor" : t.dot,
      flex: "none"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    h: "var(--control-height-sm)",
    px: "var(--space-5)",
    fs: "var(--type-control-sm)",
    gap: "var(--space-3)"
  },
  md: {
    h: "var(--control-height-md)",
    px: "var(--space-6)",
    fs: "var(--type-control-md)",
    gap: "var(--space-4)"
  },
  lg: {
    h: "var(--control-height-lg)",
    px: "var(--space-8)",
    fs: "var(--type-control-lg)",
    gap: "var(--space-4)"
  }
};
const VARIANTS = {
  primary: {
    base: {
      background: "var(--action-primary)",
      color: "var(--text-inverse)",
      border: "1px solid var(--action-primary)"
    },
    hover: {
      background: "var(--action-primary-hover)",
      borderColor: "var(--action-primary-hover)"
    },
    press: {
      background: "var(--action-primary-active)",
      borderColor: "var(--action-primary-active)",
      boxShadow: "var(--shadow-inset-press)"
    }
  },
  secondary: {
    base: {
      background: "var(--surface-card)",
      color: "var(--text-primary)",
      border: "1px solid var(--border-default)",
      boxShadow: "var(--shadow-xs)"
    },
    hover: {
      background: "var(--surface-muted)",
      borderColor: "var(--border-strong)"
    },
    press: {
      background: "var(--surface-active)",
      boxShadow: "var(--shadow-inset-press)"
    }
  },
  ghost: {
    base: {
      background: "transparent",
      color: "var(--text-secondary)",
      border: "1px solid transparent"
    },
    hover: {
      background: "var(--surface-hover)",
      color: "var(--text-primary)"
    },
    press: {
      background: "var(--surface-active)"
    }
  },
  accent: {
    base: {
      background: "var(--action-accent)",
      color: "var(--white)",
      border: "1px solid var(--action-accent)"
    },
    hover: {
      background: "var(--action-accent-hover)",
      borderColor: "var(--action-accent-hover)"
    },
    press: {
      background: "var(--brass-700)",
      borderColor: "var(--brass-700)",
      boxShadow: "var(--shadow-inset-press)"
    }
  },
  danger: {
    base: {
      background: "var(--action-danger)",
      color: "var(--white)",
      border: "1px solid var(--action-danger)"
    },
    hover: {
      background: "var(--action-danger-hover)",
      borderColor: "var(--action-danger-hover)"
    },
    press: {
      background: "var(--action-danger-hover)",
      boxShadow: "var(--shadow-inset-press)"
    }
  },
  inverse: {
    base: {
      background: "var(--white)",
      color: "var(--navy-800)",
      border: "1px solid var(--white)"
    },
    hover: {
      background: "var(--navy-50)",
      borderColor: "var(--navy-50)"
    },
    press: {
      background: "var(--navy-100)",
      borderColor: "var(--navy-100)"
    }
  },
  "inverse-outline": {
    base: {
      background: "transparent",
      color: "var(--white)",
      border: "1px solid var(--border-inverse-strong)"
    },
    hover: {
      background: "var(--surface-inverse-raised)",
      borderColor: "var(--white)"
    },
    press: {
      background: "rgba(255,255,255,.12)"
    }
  },
  link: {
    base: {
      background: "transparent",
      color: "var(--text-link)",
      border: "1px solid transparent",
      padding: 0,
      height: "auto"
    },
    hover: {
      color: "var(--text-link-hover)",
      textDecoration: "underline",
      textUnderlineOffset: "3px"
    },
    press: {
      color: "var(--navy-900)"
    }
  }
};
function Button({
  variant = "primary",
  size = "md",
  icon,
  iconAfter,
  fullWidth = false,
  disabled = false,
  loading = false,
  as: Tag = "button",
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const v = VARIANTS[variant] || VARIANTS.primary;
  const off = disabled || loading;
  const composed = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    height: s.h,
    padding: `0 ${s.px}`,
    width: fullWidth ? "100%" : undefined,
    fontFamily: "var(--font-body)",
    fontSize: s.fs,
    fontWeight: "var(--type-control-weight)",
    letterSpacing: "var(--type-control-tracking)",
    lineHeight: 1,
    borderRadius: "var(--radius-control)",
    cursor: off ? "not-allowed" : "pointer",
    transition: "var(--transition-control)",
    textDecoration: "none",
    whiteSpace: "nowrap",
    ...v.base,
    ...(hover && !off ? v.hover : null),
    ...(press && !off ? v.press : null),
    ...(off ? {
      background: variant === "ghost" || variant === "link" ? "transparent" : "var(--stone-150)",
      color: "var(--text-disabled)",
      borderColor: "transparent",
      boxShadow: "none"
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    disabled: Tag === "button" ? off : undefined,
    "aria-busy": loading || undefined,
    onMouseEnter: e => {
      setHover(true);
      rest.onMouseEnter && rest.onMouseEnter(e);
    },
    onMouseLeave: e => {
      setHover(false);
      setPress(false);
      rest.onMouseLeave && rest.onMouseLeave(e);
    },
    onMouseDown: e => {
      setPress(true);
      rest.onMouseDown && rest.onMouseDown(e);
    },
    onMouseUp: e => {
      setPress(false);
      rest.onMouseUp && rest.onMouseUp(e);
    }
  }, rest, {
    style: composed
  }), loading ? /*#__PURE__*/React.createElement(Spinner, null) : icon, children, iconAfter);
}
function Spinner() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 13,
      height: 13,
      borderRadius: "var(--radius-full)",
      flex: "none",
      border: "1.5px solid currentColor",
      borderTopColor: "transparent",
      animation: "sonderence-spin 620ms linear infinite",
      opacity: .75
    }
  });
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PADS = {
  none: "0",
  sm: "var(--space-6)",
  md: "var(--space-8)",
  lg: "var(--space-9)"
};
const VARIANTS = {
  default: {
    background: "var(--surface-card)",
    border: "1px solid var(--border-subtle)",
    boxShadow: "none",
    color: "var(--text-primary)"
  },
  raised: {
    background: "var(--surface-raised)",
    border: "1px solid var(--border-hairline)",
    boxShadow: "var(--shadow-sm)",
    color: "var(--text-primary)"
  },
  sunken: {
    background: "var(--surface-sunken)",
    border: "1px solid transparent",
    boxShadow: "none",
    color: "var(--text-primary)"
  },
  outline: {
    background: "transparent",
    border: "1px solid var(--border-default)",
    boxShadow: "none",
    color: "var(--text-primary)"
  },
  inverse: {
    background: "var(--surface-inverse)",
    border: "1px solid var(--navy-800)",
    boxShadow: "none",
    color: "var(--text-inverse)"
  },
  accent: {
    background: "var(--surface-accent-soft)",
    border: "1px solid var(--brass-200)",
    boxShadow: "none",
    color: "var(--text-primary)"
  }
};
function Card({
  variant = "default",
  padding = "md",
  interactive = false,
  as: Tag = "div",
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.default;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    onMouseEnter: e => {
      setHover(true);
      rest.onMouseEnter && rest.onMouseEnter(e);
    },
    onMouseLeave: e => {
      setHover(false);
      rest.onMouseLeave && rest.onMouseLeave(e);
    }
  }, rest, {
    style: {
      borderRadius: "var(--radius-card)",
      padding: PADS[padding] || PADS.md,
      transition: "var(--transition-surface)",
      ...v,
      ...(interactive ? {
        cursor: "pointer"
      } : null),
      ...(interactive && hover ? {
        boxShadow: variant === "inverse" ? "none" : "var(--shadow-md)",
        borderColor: variant === "inverse" ? "var(--border-inverse-strong)" : "var(--border-default)"
      } : null),
      ...style
    }
  }), children);
}
function CardHeader({
  eyebrow,
  title,
  action,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-6)",
      marginBottom: "var(--space-6)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      minWidth: 0
    }
  }, eyebrow, title && /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: "var(--text-md)",
      lineHeight: "var(--leading-snug)",
      letterSpacing: "var(--tracking-snug)",
      fontWeight: "var(--weight-semibold)",
      color: "inherit",
      margin: 0
    }
  }, title), children), action);
}
function CardFooter({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-5)",
      marginTop: "var(--space-8)",
      paddingTop: "var(--space-6)",
      borderTop: "1px solid var(--border-hairline)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  default: "var(--text-tertiary)",
  brand: "var(--text-brand)",
  accent: "var(--text-accent)",
  secondary: "var(--text-secondary)",
  inverse: "var(--text-inverse-secondary)"
};
function Eyebrow({
  tone = "default",
  rule = true,
  index,
  children,
  style,
  ...rest
}) {
  const color = TONES[tone] || TONES.default;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-5)",
      color,
      fontFamily: "var(--font-label)",
      fontSize: "var(--type-eyebrow-size)",
      fontWeight: "var(--type-eyebrow-weight)",
      letterSpacing: "var(--type-eyebrow-tracking)",
      textTransform: "uppercase",
      lineHeight: 1,
      ...style
    }
  }, rest), index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .65
    }
  }, String(index).padStart(2, "0")), rule && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 20,
      height: 1,
      background: "currentColor",
      opacity: .45,
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/* Lucide (https://lucide.dev) is the brand's icon set — 1.5px stroke, round
   caps, 24px grid. Geometry is read from the Lucide UMD global so nothing is
   hand-drawn. Load it once per page:
   <script src="https://unpkg.com/lucide@0.469.0/dist/umd/lucide.min.js"></script> */

const toPascal = n => String(n).replace(/(^\w|[-_]\w)/g, m => m.replace(/[-_]/, "").toUpperCase());
const camel = a => Object.fromEntries(Object.entries(a || {}).map(([k, v]) => [k.replace(/-([a-z])/g, (_, c) => c.toUpperCase()), v]));
function useLucide() {
  const [, tick] = React.useState(0);
  React.useEffect(() => {
    if (window.lucide && window.lucide.icons) return;
    let n = 0;
    const id = setInterval(() => {
      if (window.lucide && window.lucide.icons || ++n > 80) {
        clearInterval(id);
        tick(t => t + 1);
      }
    }, 60);
    return () => clearInterval(id);
  }, []);
  return window.lucide && window.lucide.icons || null;
}
function Icon({
  name,
  size = 18,
  strokeWidth = 1.5,
  color = "currentColor",
  label,
  style,
  ...rest
}) {
  const icons = useLucide();
  const entry = icons ? icons[toPascal(name)] || icons[name] : null;
  const children = Array.isArray(entry) ? Array.isArray(entry[2]) ? entry[2] : entry : null;
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": label ? undefined : true,
    "aria-label": label,
    role: label ? "img" : undefined,
    style: {
      display: "block",
      flex: "none",
      ...style
    },
    ...rest
  };
  if (!children) return /*#__PURE__*/React.createElement("svg", common);
  return /*#__PURE__*/React.createElement("svg", common, children.map((c, i) => Array.isArray(c) ? React.createElement(c[0], {
    key: i,
    ...camel(c[1])
  }) : null));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BOX = {
  sm: "var(--control-height-sm)",
  md: "var(--control-height-md)",
  lg: "var(--control-height-lg)"
};
function IconButton({
  size = "md",
  label,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Button, _extends({
    size: size,
    "aria-label": label,
    title: label
  }, rest, {
    style: {
      width: BOX[size] || BOX.md,
      padding: 0,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The mark is the supplied asset. No wordmark file was provided, so the
   wordmark is set in plain display type — see readme.md > Logo. */

function Logo({
  variant = "lockup",
  tone = "navy",
  size = 28,
  src,
  wordmark = "Sonderence",
  style,
  ...rest
}) {
  const inverse = tone === "white";
  const file = src || (inverse ? "assets/logo-mark-white.png" : "assets/logo-mark-navy.png");
  const mark = /*#__PURE__*/React.createElement("img", {
    src: file,
    alt: variant === "mark" ? wordmark : "",
    width: size,
    height: size,
    style: {
      display: "block",
      width: size,
      height: size,
      flex: "none"
    }
  });
  if (variant === "mark") return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      ...style
    }
  }, rest), mark);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: Math.round(size * 0.42),
      ...style
    }
  }, rest), mark, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: Math.round(size * 0.52),
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      lineHeight: 1,
      color: inverse ? "var(--text-inverse)" : "var(--text-brand)"
    }
  }, wordmark));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  selected = false,
  onRemove,
  icon,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const clickable = Boolean(rest.onClick);
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest, {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-3)",
      height: 26,
      padding: "0 var(--space-5)",
      borderRadius: "var(--radius-tag)",
      background: selected ? "var(--navy-800)" : hover && clickable ? "var(--surface-hover)" : "var(--surface-card)",
      color: selected ? "var(--text-inverse)" : "var(--text-secondary)",
      border: `1px solid ${selected ? "var(--navy-800)" : "var(--border-default)"}`,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-snug)",
      lineHeight: 1,
      whiteSpace: "nowrap",
      cursor: clickable ? "pointer" : "default",
      transition: "var(--transition-control)",
      ...style
    }
  }), icon, children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      all: "unset",
      cursor: "pointer",
      display: "inline-flex",
      opacity: .55,
      marginRight: -2,
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 10 10",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l8 8M9 1l-8 8",
    stroke: "currentColor",
    strokeWidth: "1.4",
    strokeLinecap: "round"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function DataTable({
  columns = [],
  rows = [],
  density = "comfortable",
  onRowClick,
  empty = "Nothing here yet",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(null);
  const padY = density === "compact" ? "var(--space-4)" : "var(--space-5)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: "100%",
      overflowX: "auto",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(c => /*#__PURE__*/React.createElement("th", {
    key: c.key,
    scope: "col",
    style: {
      textAlign: c.align || "left",
      padding: `var(--space-4) var(--space-6)`,
      borderBottom: "1px solid var(--border-default)",
      fontFamily: "var(--font-label)",
      fontSize: "var(--text-2xs)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-tertiary)",
      whiteSpace: "nowrap",
      width: c.width
    }
  }, c.header)))), /*#__PURE__*/React.createElement("tbody", null, rows.length === 0 && /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    colSpan: columns.length,
    style: {
      padding: "var(--space-11) var(--space-6)",
      textAlign: "center",
      color: "var(--text-tertiary)",
      fontSize: "var(--text-sm)"
    }
  }, empty)), rows.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: r.id ?? i,
    onMouseEnter: () => setHover(i),
    onMouseLeave: () => setHover(null),
    onClick: onRowClick ? () => onRowClick(r, i) : undefined,
    style: {
      background: hover === i && onRowClick ? "var(--surface-hover)" : "transparent",
      cursor: onRowClick ? "pointer" : "default",
      transition: "background-color var(--duration-fast) var(--ease-standard)"
    }
  }, columns.map(c => /*#__PURE__*/React.createElement("td", {
    key: c.key,
    style: {
      textAlign: c.align || "left",
      padding: `${padY} var(--space-6)`,
      borderBottom: "1px solid var(--border-hairline)",
      fontSize: "var(--type-control-md)",
      lineHeight: 1.45,
      letterSpacing: "var(--tracking-snug)",
      color: c.muted ? "var(--text-secondary)" : "var(--text-primary)",
      fontFamily: c.numeric ? "var(--font-mono)" : "inherit",
      fontVariantNumeric: c.numeric ? "tabular-nums" : undefined,
      whiteSpace: c.wrap ? "normal" : "nowrap"
    }
  }, c.render ? c.render(r, i) : r[c.key])))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/ProgressMeter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  brand: "var(--navy-800)",
  accent: "var(--brass-500)",
  success: "var(--moss-500)",
  warning: "var(--amber-500)",
  danger: "var(--clay-500)"
};
function ProgressMeter({
  value = 0,
  max = 100,
  label,
  valueLabel,
  tone = "brand",
  size = "md",
  segments,
  style,
  ...rest
}) {
  const h = size === "sm" ? 3 : size === "lg" ? 8 : 5;
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      width: "100%",
      ...style
    }
  }, rest), (label || valueLabel) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: "var(--space-5)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--text-secondary)",
      letterSpacing: "var(--tracking-snug)"
    }
  }, label), valueLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      color: "var(--text-primary)",
      fontVariantNumeric: "tabular-nums"
    }
  }, valueLabel)), segments ? /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": label,
    style: {
      display: "flex",
      gap: 2
    }
  }, segments.map((s, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    title: s.label,
    style: {
      flex: s.weight || 1,
      height: h,
      borderRadius: "var(--radius-xs)",
      background: s.done ? TONES[s.tone] || TONES.brand : "var(--stone-200)"
    }
  }))) : /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": 0,
    "aria-valuemax": max,
    style: {
      height: h,
      width: "100%",
      background: "var(--stone-200)",
      borderRadius: "var(--radius-xs)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      height: "100%",
      width: pct + "%",
      background: TONES[tone] || TONES.brand,
      borderRadius: "var(--radius-xs)",
      transition: `width var(--duration-slow) var(--ease-standard)`
    }
  })));
}
Object.assign(__ds_scope, { ProgressMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ProgressMeter.jsx", error: String((e && e.message) || e) }); }

// components/data/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: "var(--text-2xl)",
  md: "var(--text-3xl)",
  lg: "var(--text-4xl)"
};
const DELTA = {
  up: "var(--text-success)",
  down: "var(--text-danger)",
  flat: "var(--text-tertiary)"
};
function Stat({
  label,
  value,
  unit,
  delta,
  direction = "flat",
  caption,
  size = "md",
  tone = "default",
  align = "left",
  style,
  ...rest
}) {
  const inverse = tone === "inverse";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align,
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-label)",
      fontSize: "var(--text-2xs)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: inverse ? "var(--text-inverse-tertiary)" : "var(--text-tertiary)",
      lineHeight: 1
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: SIZES[size] || SIZES.md,
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-tighter)",
      lineHeight: "var(--leading-tight)",
      fontVariantNumeric: "tabular-nums",
      color: inverse ? "var(--text-inverse)" : "var(--text-primary)"
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-md)",
      fontWeight: "var(--weight-medium)",
      color: inverse ? "var(--text-inverse-secondary)" : "var(--text-secondary)"
    }
  }, unit), delta != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-medium)",
      color: inverse ? "var(--text-inverse-secondary)" : DELTA[direction],
      display: "inline-flex",
      alignItems: "center",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, direction === "up" ? "\u2191" : direction === "down" ? "\u2193" : "\u2192"), delta)), caption && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      lineHeight: 1.5,
      color: inverse ? "var(--text-inverse-secondary)" : "var(--text-secondary)",
      maxWidth: "34ch"
    }
  }, caption));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Stat.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const WIDTHS = {
  sm: 420,
  md: 560,
  lg: 720
};
function Dialog({
  open = false,
  onClose,
  title,
  description,
  eyebrow,
  footer,
  size = "md",
  children,
  style,
  ...rest
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape" && onClose) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: "var(--z-modal)",
      background: "var(--surface-scrim)",
      backdropFilter: "blur(var(--blur-scrim))",
      WebkitBackdropFilter: "blur(var(--blur-scrim))",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-8)",
      animation: "sonderence-fade var(--duration-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === "string" ? title : undefined,
    onClick: e => e.stopPropagation()
  }, rest, {
    style: {
      width: "100%",
      maxWidth: WIDTHS[size] || WIDTHS.md,
      maxHeight: "86vh",
      overflow: "auto",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-surface)",
      border: "1px solid var(--border-hairline)",
      boxShadow: "var(--shadow-xl)",
      animation: "sonderence-fade-up var(--duration-slow) var(--ease-entrance)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      padding: "var(--space-8) var(--space-8) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      minWidth: 0
    }
  }, eyebrow, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "var(--text-xl)",
      lineHeight: "var(--leading-snug)",
      letterSpacing: "var(--tracking-tight)",
      fontWeight: "var(--weight-semibold)"
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-base)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--text-secondary)"
    }
  }, description)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: onClose,
    style: {
      all: "unset",
      cursor: "pointer",
      width: 28,
      height: 28,
      flex: "none",
      borderRadius: "var(--radius-sm)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--text-tertiary)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l10 10M11 1L1 11",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  })))), children != null && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-8)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-5)",
      padding: "var(--space-6) var(--space-8)",
      borderTop: "1px solid var(--border-hairline)",
      background: "var(--surface-muted)",
      borderRadius: "0 0 var(--radius-surface) var(--radius-surface)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    dot: "var(--stone-400)",
    icon: "info"
  },
  success: {
    dot: "var(--moss-500)",
    icon: "check"
  },
  warning: {
    dot: "var(--amber-500)",
    icon: "alert-triangle"
  },
  danger: {
    dot: "var(--clay-500)",
    icon: "alert-circle"
  }
};
function Toast({
  tone = "neutral",
  title,
  description,
  action,
  onDismiss,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status"
  }, rest, {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-5)",
      width: 380,
      maxWidth: "100%",
      padding: "var(--space-6)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow-lg)",
      animation: "sonderence-fade-up var(--duration-slow) var(--ease-entrance)",
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 7,
      height: 7,
      borderRadius: "var(--radius-full)",
      background: t.dot,
      flex: "none",
      marginTop: 6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      minWidth: 0,
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--type-control-md)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-primary)",
      lineHeight: 1.35
    }
  }, title), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      lineHeight: 1.5,
      color: "var(--text-secondary)"
    }
  }, description), action && /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: "var(--space-3)"
    }
  }, action)), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      all: "unset",
      cursor: "pointer",
      color: "var(--text-tertiary)",
      flex: "none",
      marginTop: 2,
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "10",
    viewBox: "0 0 10 10",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l8 8M9 1l-8 8",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }))));
}
function ToastStack({
  position = "bottom-right",
  children,
  style,
  ...rest
}) {
  const [v, h] = position.split("-");
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: "fixed",
      zIndex: "var(--z-toast)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      padding: "var(--space-8)",
      [v]: 0,
      [h]: 0,
      alignItems: h === "right" ? "flex-end" : "flex-start",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Toast, ToastStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tooltip({
  content,
  placement = "top",
  delay = 120,
  children,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const timer = React.useRef(null);
  const show = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(true), delay);
  };
  const hide = () => {
    clearTimeout(timer.current);
    setOpen(false);
  };
  React.useEffect(() => () => clearTimeout(timer.current), []);
  const pos = {
    top: {
      bottom: "calc(100% + 6px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 6px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 6px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 6px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  }[placement];
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: show,
    onMouseLeave: hide,
    onFocus: show,
    onBlur: hide,
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }, rest), children, open && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: "var(--z-tooltip)",
      ...pos,
      background: "var(--navy-950)",
      color: "var(--white)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      lineHeight: 1.4,
      letterSpacing: "var(--tracking-snug)",
      padding: "var(--space-3) var(--space-5)",
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--shadow-md)",
      whiteSpace: "nowrap",
      pointerEvents: "none",
      animation: "sonderence-fade var(--duration-fast) var(--ease-standard)"
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked,
  indeterminate = false,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "var(--space-5)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange
  }, rest, {
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 16,
      height: 16,
      flex: "none",
      marginTop: 1,
      borderRadius: "var(--radius-xs)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: on ? "var(--navy-800)" : "var(--surface-card)",
      border: `1px solid ${on ? "var(--navy-800)" : "var(--border-strong)"}`,
      boxShadow: "var(--shadow-xs)",
      transition: "var(--transition-control)",
      color: "var(--white)"
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "2",
    viewBox: "0 0 8 2"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1h6",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round"
  })) : checked ? /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "8",
    viewBox: "0 0 10 8"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 4.2l2.6 2.6L9 1.4",
    stroke: "currentColor",
    strokeWidth: "1.8",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })) : null), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      minWidth: 0
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--type-control-md)",
      lineHeight: 1.35,
      color: "var(--text-primary)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      lineHeight: 1.45,
      color: "var(--text-tertiary)"
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Field({
  label,
  hint,
  error,
  required = false,
  htmlFor,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-snug)",
      color: "var(--text-primary)",
      lineHeight: 1.3
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: "var(--text-accent)",
      marginLeft: 3
    }
  }, "*")), children, (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      lineHeight: 1.45,
      color: error ? "var(--text-danger)" : "var(--text-tertiary)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ctrl = h => ({
  width: "100%",
  height: h,
  boxSizing: "border-box",
  fontFamily: "var(--font-body)",
  fontSize: "var(--type-control-md)",
  letterSpacing: "var(--tracking-snug)",
  color: "var(--text-primary)",
  background: "var(--surface-card)",
  borderRadius: "var(--radius-control)",
  border: "1px solid var(--border-default)",
  outline: "none",
  transition: "var(--transition-control)"
});
function Input({
  size = "md",
  invalid = false,
  prefix,
  suffix,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === "sm" ? "var(--control-height-sm)" : size === "lg" ? "var(--control-height-lg)" : "var(--control-height-md)";
  const pad = size === "sm" ? "var(--space-5)" : "var(--space-6)";
  const border = invalid ? "var(--border-danger)" : focus ? "var(--navy-800)" : "var(--border-default)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...ctrl(h),
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      padding: `0 ${pad}`,
      borderColor: border,
      boxShadow: focus ? `0 0 0 3px ${invalid ? "rgba(168,65,47,.16)" : "rgba(19,23,71,.12)"}` : "var(--shadow-xs)",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      color: disabled ? "var(--text-disabled)" : "var(--text-primary)",
      ...style
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--text-tertiary)",
      flex: "none"
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    "aria-invalid": invalid || undefined,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest, {
    style: {
      all: "unset",
      flex: 1,
      minWidth: 0,
      height: "100%",
      lineHeight: 1,
      fontFamily: "inherit",
      fontSize: size === "sm" ? "var(--type-control-sm)" : "var(--type-control-md)",
      letterSpacing: "inherit",
      color: "inherit",
      cursor: disabled ? "not-allowed" : "text"
    }
  })), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color: "var(--text-tertiary)",
      flex: "none",
      fontSize: "var(--text-xs)"
    }
  }, suffix));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  checked,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "var(--space-5)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    checked: checked,
    disabled: disabled,
    onChange: onChange
  }, rest, {
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 16,
      height: 16,
      flex: "none",
      marginTop: 1,
      borderRadius: "var(--radius-full)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--surface-card)",
      border: `1px solid ${checked ? "var(--navy-800)" : "var(--border-strong)"}`,
      boxShadow: "var(--shadow-xs)",
      transition: "var(--transition-control)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "var(--radius-full)",
      background: "var(--navy-800)"
    }
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      minWidth: 0
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--type-control-md)",
      lineHeight: 1.35,
      color: "var(--text-primary)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      lineHeight: 1.45,
      color: "var(--text-tertiary)"
    }
  }, description)));
}
function RadioGroup({
  legend,
  children,
  direction = "vertical",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("fieldset", _extends({
    style: {
      border: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      ...style
    }
  }, rest), legend && /*#__PURE__*/React.createElement("legend", {
    style: {
      padding: 0,
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-primary)",
      marginBottom: "var(--space-2)"
    }
  }, legend), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: direction === "horizontal" ? "row" : "column",
      gap: direction === "horizontal" ? "var(--space-8)" : "var(--space-5)",
      flexWrap: "wrap"
    }
  }, children));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  size = "md",
  invalid = false,
  disabled = false,
  options = [],
  children,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === "sm" ? "var(--control-height-sm)" : size === "lg" ? "var(--control-height-lg)" : "var(--control-height-md)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "block",
      width: "100%",
      ...style
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    disabled: disabled,
    "aria-invalid": invalid || undefined,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest, {
    style: {
      appearance: "none",
      WebkitAppearance: "none",
      width: "100%",
      height: h,
      boxSizing: "border-box",
      padding: "0 var(--space-9) 0 var(--space-6)",
      fontFamily: "var(--font-body)",
      fontSize: size === "sm" ? "var(--type-control-sm)" : "var(--type-control-md)",
      letterSpacing: "var(--tracking-snug)",
      color: disabled ? "var(--text-disabled)" : "var(--text-primary)",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      border: `1px solid ${invalid ? "var(--border-danger)" : focus ? "var(--navy-800)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-control)",
      outline: "none",
      boxShadow: focus ? "0 0 0 3px rgba(19,23,71,.12)" : "var(--shadow-xs)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "var(--transition-control)"
    }
  }), options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)), children), /*#__PURE__*/React.createElement("svg", {
    width: "10",
    height: "6",
    viewBox: "0 0 10 6",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: "var(--space-6)",
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--text-tertiary)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l4 4 4-4",
    stroke: "currentColor",
    strokeWidth: "1.5",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Switch({
  checked = false,
  disabled = false,
  label,
  description,
  onChange,
  size = "md",
  style,
  ...rest
}) {
  const w = size === "sm" ? 30 : 36,
    h = size === "sm" ? 17 : 20,
    knob = h - 6;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "flex-start",
      gap: "var(--space-5)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: onChange
  }, rest, {
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: w,
      height: h,
      flex: "none",
      marginTop: 1,
      borderRadius: "var(--radius-full)",
      background: checked ? "var(--navy-800)" : "var(--stone-300)",
      position: "relative",
      transition: `background-color var(--duration-base) var(--ease-standard)`,
      boxShadow: "inset 0 1px 2px rgba(8,10,28,.10)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: checked ? w - knob - 3 : 3,
      width: knob,
      height: knob,
      borderRadius: "var(--radius-full)",
      background: "var(--white)",
      boxShadow: "var(--shadow-xs)",
      transition: `left var(--duration-base) var(--ease-standard)`
    }
  })), (label || description) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2,
      minWidth: 0
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--type-control-md)",
      lineHeight: 1.35,
      color: "var(--text-primary)"
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      lineHeight: 1.45,
      color: "var(--text-tertiary)"
    }
  }, description)));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  rows = 4,
  invalid = false,
  disabled = false,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    disabled: disabled,
    "aria-invalid": invalid || undefined,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest, {
    style: {
      width: "100%",
      boxSizing: "border-box",
      resize: "vertical",
      padding: "var(--space-5) var(--space-6)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--type-control-md)",
      lineHeight: "var(--leading-relaxed)",
      letterSpacing: "var(--tracking-snug)",
      color: disabled ? "var(--text-disabled)" : "var(--text-primary)",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      border: `1px solid ${invalid ? "var(--border-danger)" : focus ? "var(--navy-800)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-control)",
      outline: "none",
      boxShadow: focus ? `0 0 0 3px ${invalid ? "rgba(168,65,47,.16)" : "rgba(19,23,71,.12)"}` : "var(--shadow-xs)",
      transition: "var(--transition-control)",
      ...style
    }
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Breadcrumbs({
  items = [],
  separator = "/",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    "aria-label": "Breadcrumb",
    style: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "var(--space-4)",
      ...style
    }
  }, rest), items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: it.label + i
    }, last || !it.href ? /*#__PURE__*/React.createElement("span", {
      "aria-current": last ? "page" : undefined,
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        color: last ? "var(--text-primary)" : "var(--text-secondary)",
        fontWeight: last ? "var(--weight-medium)" : "var(--weight-regular)",
        letterSpacing: "var(--tracking-snug)"
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href,
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        color: "var(--text-secondary)",
        textDecoration: "none",
        borderBottom: "none",
        letterSpacing: "var(--tracking-snug)"
      }
    }, it.label), !last && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        color: "var(--text-tertiary)",
        fontSize: "var(--text-sm)",
        opacity: .8
      }
    }, separator));
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tabs({
  items = [],
  value,
  onChange,
  variant = "underline",
  size = "md",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(null);
  const fs = size === "sm" ? "var(--type-control-sm)" : "var(--type-control-md)";
  const enclosed = variant === "enclosed";
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      alignItems: "stretch",
      gap: enclosed ? 2 : "var(--space-8)",
      padding: enclosed ? 3 : 0,
      background: enclosed ? "var(--surface-sunken)" : "transparent",
      borderRadius: enclosed ? "var(--radius-control)" : 0,
      borderBottom: enclosed ? "none" : "1px solid var(--border-subtle)",
      ...style
    }
  }, rest), items.map(it => {
    const key = it.value ?? it.label;
    const active = value === key;
    const hot = hover === key;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      role: "tab",
      "aria-selected": active,
      type: "button",
      disabled: it.disabled,
      onMouseEnter: () => setHover(key),
      onMouseLeave: () => setHover(null),
      onClick: () => !it.disabled && onChange && onChange(key),
      style: {
        all: "unset",
        boxSizing: "border-box",
        display: "inline-flex",
        alignItems: "center",
        gap: "var(--space-4)",
        cursor: it.disabled ? "not-allowed" : "pointer",
        fontFamily: "var(--font-body)",
        fontSize: fs,
        fontWeight: "var(--weight-medium)",
        letterSpacing: "var(--tracking-snug)",
        lineHeight: 1,
        whiteSpace: "nowrap",
        transition: "var(--transition-control)",
        color: it.disabled ? "var(--text-disabled)" : active ? "var(--text-primary)" : hot ? "var(--text-primary)" : "var(--text-secondary)",
        ...(enclosed ? {
          height: 30,
          padding: "0 var(--space-6)",
          borderRadius: "var(--radius-sm)",
          background: active ? "var(--surface-card)" : "transparent",
          boxShadow: active ? "var(--shadow-xs)" : "none"
        } : {
          height: size === "sm" ? 34 : 42,
          padding: "0 0 1px",
          boxShadow: active ? "inset 0 -2px 0 0 var(--navy-800)" : hot ? "inset 0 -2px 0 0 var(--border-default)" : "none"
        })
      }
    }, it.icon, it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-2xs)",
        color: active ? "var(--text-secondary)" : "var(--text-tertiary)",
        background: "var(--surface-sunken)",
        borderRadius: "var(--radius-xs)",
        padding: "2px 4px",
        lineHeight: 1
      }
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/PortalDecisions.jsx
try { (() => {
/* Wrapped in an IIFE: each <script type="text/babel"> shares one global scope,
   so top-level names would collide across kit files. Shared pieces are
   published on window at the bottom. */
(function () {
  const DS = window.SonderenceDesignSystem_3123e6;
  const {
    Badge,
    Button,
    Card,
    Icon,
    Eyebrow,
    Tag,
    Dialog,
    Field,
    Input,
    Textarea,
    Select,
    Toast,
    ToastStack
  } = DS;
  const DECISIONS = [{
    id: "D-031",
    t: "Single customer master held in NAV",
    when: "28 Jul 2026",
    who: "Steering group",
    state: "Agreed",
    tone: "success",
    body: "Customer records will be mastered in Dynamics NAV and syndicated to Salesforce and Snowflake. Salesforce becomes read-only for identity fields.",
    tradeoff: "Sales lose the ability to create accounts directly. Accepted in exchange for one definition of a customer."
  }, {
    id: "D-030",
    t: "Peterborough goes first in Wave 2",
    when: "21 Jul 2026",
    who: "H. Voss",
    state: "Agreed",
    tone: "success",
    body: "Peterborough leads the second rollout wave despite lower data quality, because its order desk has capacity in September.",
    tradeoff: "Two additional weeks of data remediation, funded from the programme contingency."
  }, {
    id: "D-029",
    t: "Retire the bespoke order desk rather than rebuild",
    when: "09 Jul 2026",
    who: "Steering group",
    state: "Agreed",
    tone: "success",
    body: "The custom order desk is retired at Wave 3 rather than being reimplemented on the new platform.",
    tradeoff: "Four exception workflows move to manual handling for roughly six weeks."
  }, {
    id: "D-032",
    t: "Reporting layer: Power BI or Snowflake-native",
    when: "Open",
    who: "S. Bhatt",
    state: "Open",
    tone: "warning",
    body: "Whether to retain Power BI as the presentation layer or move reporting into Snowflake dashboards.",
    tradeoff: "Pending a cost model from Sonderence — due 14 August."
  }];
  function PortalDecisions({
    dialogOpen,
    setDialogOpen
  }) {
    const [open, setOpen] = React.useState("D-031");
    const [sent, setSent] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1.35fr",
        gap: "var(--space-8)",
        padding: "var(--space-9) var(--space-10) var(--space-12)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      eyebrow: "Register",
      title: "Decisions",
      padding: "0"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, DECISIONS.map((d, i) => {
      const active = open === d.id;
      return /*#__PURE__*/React.createElement("button", {
        key: d.id,
        type: "button",
        onClick: () => setOpen(d.id),
        style: {
          all: "unset",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-3)",
          padding: "var(--space-6) var(--space-8)",
          borderTop: i ? "1px solid var(--border-hairline)" : "none",
          background: active ? "var(--surface-selected)" : "transparent",
          boxShadow: active ? "inset 2px 0 0 0 var(--navy-800)" : "none",
          transition: "var(--transition-control)"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "var(--space-5)"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-2xs)",
          letterSpacing: ".08em",
          color: "var(--text-tertiary)"
        }
      }, d.id), /*#__PURE__*/React.createElement(Badge, {
        tone: d.tone,
        dot: true
      }, d.state), /*#__PURE__*/React.createElement("span", {
        style: {
          marginLeft: "auto",
          fontSize: "var(--text-xs)",
          color: "var(--text-tertiary)"
        }
      }, d.when)), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: "var(--type-control-md)",
          fontWeight: "var(--weight-medium)",
          lineHeight: 1.4
        }
      }, d.t));
    }))), (() => {
      const d = DECISIONS.find(x => x.id === open);
      return /*#__PURE__*/React.createElement(Card, {
        padding: "lg",
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-8)"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "var(--space-8)"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-5)"
        }
      }, /*#__PURE__*/React.createElement(Eyebrow, null, d.id, " \xB7 ", d.who), /*#__PURE__*/React.createElement("h3", {
        style: {
          fontSize: "var(--text-2xl)"
        }
      }, d.t)), /*#__PURE__*/React.createElement(Badge, {
        tone: d.tone,
        dot: true
      }, d.state)), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-6)",
          paddingTop: "var(--space-7)",
          borderTop: "1px solid var(--border-hairline)"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-4)"
        }
      }, /*#__PURE__*/React.createElement(Eyebrow, {
        rule: false
      }, "Decision"), /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: "var(--text-md)",
          lineHeight: "var(--leading-relaxed)",
          color: "var(--text-secondary)"
        }
      }, d.body)), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: "var(--space-4)"
        }
      }, /*#__PURE__*/React.createElement(Eyebrow, {
        rule: false
      }, "Trade-off accepted"), /*#__PURE__*/React.createElement("p", {
        style: {
          fontSize: "var(--text-md)",
          lineHeight: "var(--leading-relaxed)",
          color: "var(--text-secondary)"
        }
      }, d.tradeoff))), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: "var(--space-5)",
          paddingTop: "var(--space-7)",
          borderTop: "1px solid var(--border-hairline)"
        }
      }, /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        size: "sm",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "file-text",
          size: 15
        })
      }, "Open source document"), /*#__PURE__*/React.createElement(Button, {
        variant: "ghost",
        size: "sm",
        onClick: () => setDialogOpen(true)
      }, "Raise a change request")));
    })(), /*#__PURE__*/React.createElement(Dialog, {
      open: dialogOpen,
      onClose: () => setDialogOpen(false),
      size: "md",
      eyebrow: /*#__PURE__*/React.createElement(Eyebrow, {
        rule: false
      }, "Northwind Foods \xB7 Programme"),
      title: "Raise a change request",
      description: "This creates a numbered request for the steering group and adds it to the change register.",
      footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        onClick: () => setDialogOpen(false)
      }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
        variant: "primary",
        onClick: () => {
          setDialogOpen(false);
          setSent(true);
        }
      }, "Submit request"))
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-7)"
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Title",
      required: true,
      htmlFor: "crt"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "crt",
      placeholder: "Short description of the change"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Workstream",
      htmlFor: "crw"
    }, /*#__PURE__*/React.createElement(Select, {
      id: "crw",
      options: ["Order-to-cash redesign", "ERP data migration", "Supplier portal", "Master data ownership"]
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Impact",
      htmlFor: "cri"
    }, /*#__PURE__*/React.createElement(Select, {
      id: "cri",
      options: ["Scope", "Schedule", "Investment", "All three"]
    }))), /*#__PURE__*/React.createElement(Field, {
      label: "What changed, and why now?",
      hint: "The steering group reads this first",
      htmlFor: "crb"
    }, /*#__PURE__*/React.createElement(Textarea, {
      id: "crb",
      rows: 4,
      placeholder: "Describe the change and its trigger."
    })))), sent && /*#__PURE__*/React.createElement(ToastStack, {
      position: "bottom-right"
    }, /*#__PURE__*/React.createElement(Toast, {
      tone: "success",
      title: "Change request CR-0143 submitted",
      description: "Steering group review on 14 August",
      onDismiss: () => setSent(false)
    })));
  }
  Object.assign(window, {
    PortalDecisions
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/PortalDecisions.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/PortalOverview.jsx
try { (() => {
/* Wrapped in an IIFE: each <script type="text/babel"> shares one global scope,
   so top-level names would collide across kit files. Shared pieces are
   published on window at the bottom. */
(function () {
  const DS = window.SonderenceDesignSystem_3123e6;
  const {
    Stat,
    Badge,
    ProgressMeter,
    DataTable,
    Button,
    Icon,
    Tabs,
    Card,
    Tooltip,
    IconButton
  } = DS;
  const WORKSTREAMS = [{
    id: 1,
    name: "Order-to-cash redesign",
    owner: "A. Reyes",
    phase: "Implement",
    status: "In flight",
    tone: "brand",
    progress: 62,
    variance: "+2d"
  }, {
    id: 2,
    name: "ERP data migration",
    owner: "J. Okafor",
    phase: "Implement",
    status: "At risk",
    tone: "warning",
    progress: 41,
    variance: "+11d"
  }, {
    id: 3,
    name: "Supplier portal",
    owner: "M. Lindqvist",
    phase: "Adopt",
    status: "Live",
    tone: "success",
    progress: 100,
    variance: "−1d"
  }, {
    id: 4,
    name: "Master data ownership",
    owner: "S. Bhatt",
    phase: "Design",
    status: "In flight",
    tone: "brand",
    progress: 78,
    variance: "0d"
  }, {
    id: 5,
    name: "Demand planning",
    owner: "A. Reyes",
    phase: "Design",
    status: "Not started",
    tone: "neutral",
    progress: 0,
    variance: "—"
  }, {
    id: 6,
    name: "Finance close automation",
    owner: "T. Whelan",
    phase: "Diagnose",
    status: "In flight",
    tone: "brand",
    progress: 24,
    variance: "−3d"
  }];
  const ACTIVITY = [{
    t: "Change request CR-0142 approved",
    who: "Steering group",
    when: "2h ago",
    icon: "check",
    tone: "var(--moss-500)"
  }, {
    t: "Integration NAV→Snowflake failed validation",
    who: "Automated",
    when: "5h ago",
    icon: "alert-triangle",
    tone: "var(--amber-500)"
  }, {
    t: "Decision D-031 recorded — single customer master",
    who: "H. Voss",
    when: "Yesterday",
    icon: "gavel",
    tone: "var(--navy-500)"
  }, {
    t: "Adoption baseline published for Wave 2",
    who: "M. Lindqvist",
    when: "2 days ago",
    icon: "file-text",
    tone: "var(--navy-500)"
  }];
  function PortalOverview({
    go
  }) {
    const [range, setRange] = React.useState("month");
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-8)",
        padding: "var(--space-9) var(--space-10) var(--space-12)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "var(--space-6)"
      }
    }, [["Programme health", "On track", null, null], ["Cycle time", "16.4", "days", "−28%"], ["Systems retired", "6", "of 9", "+2"], ["Adoption", "71", "%", "+6pt"]].map(([l, v, u, d], i) => /*#__PURE__*/React.createElement(Card, {
      key: l,
      padding: "md"
    }, i === 0 ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-2xs)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: "var(--text-tertiary)"
      }
    }, l), /*#__PURE__*/React.createElement(Badge, {
      tone: "success",
      dot: true,
      variant: "soft",
      style: {
        alignSelf: "flex-start",
        height: 24
      }
    }, v), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-xs)",
        color: "var(--text-secondary)"
      }
    }, "Month 9 of 15 \xB7 next gate 14 Aug")) : /*#__PURE__*/React.createElement(Stat, {
      label: l,
      value: v,
      unit: u,
      delta: d,
      direction: i === 1 ? "down" : "up",
      size: "sm"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.6fr 1fr",
        gap: "var(--space-8)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      eyebrow: "Programme",
      title: "Workstreams",
      padding: "0",
      action: /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: "var(--space-5)",
          alignItems: "center"
        }
      }, /*#__PURE__*/React.createElement(Tabs, {
        variant: "enclosed",
        size: "sm",
        value: range,
        onChange: setRange,
        items: [{
          value: "week",
          label: "Week"
        }, {
          value: "month",
          label: "Month"
        }, {
          value: "quarter",
          label: "Quarter"
        }]
      }), /*#__PURE__*/React.createElement(Tooltip, {
        content: "Export register"
      }, /*#__PURE__*/React.createElement(IconButton, {
        variant: "ghost",
        size: "sm",
        label: "Export"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "download",
        size: 16
      }))))
    }, /*#__PURE__*/React.createElement(DataTable, {
      density: "compact",
      onRowClick: () => go("workstream"),
      columns: [{
        key: "name",
        header: "Workstream"
      }, {
        key: "owner",
        header: "Owner",
        muted: true
      }, {
        key: "phase",
        header: "Phase",
        muted: true
      }, {
        key: "status",
        header: "Status",
        render: r => /*#__PURE__*/React.createElement(Badge, {
          tone: r.tone,
          dot: true
        }, r.status)
      }, {
        key: "progress",
        header: "Progress",
        width: 130,
        render: r => /*#__PURE__*/React.createElement(ProgressMeter, {
          size: "sm",
          value: r.progress
        })
      }, {
        key: "variance",
        header: "Variance",
        numeric: true,
        align: "right"
      }],
      rows: WORKSTREAMS
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      eyebrow: "Phase",
      title: "Where the programme is"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-7)"
      }
    }, /*#__PURE__*/React.createElement(ProgressMeter, {
      valueLabel: "Implement",
      segments: [{
        label: "Diagnose",
        done: true
      }, {
        label: "Design",
        done: true
      }, {
        label: "Implement",
        done: true
      }, {
        label: "Adopt"
      }, {
        label: "Run"
      }],
      size: "lg"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-2xs)",
        letterSpacing: ".06em",
        textTransform: "uppercase",
        color: "var(--text-tertiary)"
      }
    }, ["Diag", "Des", "Impl", "Adopt", "Run"].map(s => /*#__PURE__*/React.createElement("span", {
      key: s
    }, s))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-5)",
        paddingTop: "var(--space-6)",
        borderTop: "1px solid var(--border-hairline)"
      }
    }, [["Next gate", "14 August 2026"], ["Gate owner", "Steering group"], ["Open risks", "2 · both amber"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "var(--text-sm)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-secondary)"
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: "var(--weight-medium)"
      }
    }, v)))))), /*#__PURE__*/React.createElement(Panel, {
      eyebrow: "Recent",
      title: "Activity",
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "link",
        size: "sm"
      }, "All activity")
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, ACTIVITY.map((a, i) => /*#__PURE__*/React.createElement("div", {
      key: a.t,
      style: {
        display: "flex",
        gap: "var(--space-5)",
        padding: "var(--space-5) 0",
        borderTop: i ? "1px solid var(--border-hairline)" : "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: a.tone,
        marginTop: 1,
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: a.icon,
      size: 15
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 2,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-sm)",
        lineHeight: 1.4
      }
    }, a.t), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-xs)",
        color: "var(--text-tertiary)"
      }
    }, a.who, " \xB7 ", a.when)))))))));
  }
  Object.assign(window, {
    PortalOverview,
    WORKSTREAMS
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/PortalOverview.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/PortalShell.jsx
try { (() => {
/* Wrapped in an IIFE: each <script type="text/babel"> shares one global scope,
   so top-level names would collide across kit files. Shared pieces are
   published on window at the bottom. */
(function () {
  const DS = window.SonderenceDesignSystem_3123e6;
  const {
    Logo,
    Icon,
    IconButton,
    Tooltip,
    Badge,
    Input,
    Breadcrumbs,
    Button
  } = DS;
  const NAV = [{
    group: "Programme",
    items: [{
      id: "overview",
      label: "Overview",
      icon: "layout-grid"
    }, {
      id: "workstream",
      label: "Workstreams",
      icon: "git-branch",
      count: 6
    }, {
      id: "systems",
      label: "Systems register",
      icon: "database"
    }, {
      id: "decisions",
      label: "Decision log",
      icon: "gavel",
      count: 3
    }]
  }, {
    group: "Reference",
    items: [{
      id: "model",
      label: "Operating model",
      icon: "workflow"
    }, {
      id: "documents",
      label: "Documents",
      icon: "folder"
    }]
  }];
  function PortalNav({
    route,
    go
  }) {
    const [hover, setHover] = React.useState(null);
    return /*#__PURE__*/React.createElement("aside", {
      style: {
        width: "var(--sidenav-width)",
        flex: "none",
        background: "var(--surface-inverse-deep)",
        display: "flex",
        flexDirection: "column",
        height: "100%"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "var(--header-height)",
        display: "flex",
        alignItems: "center",
        padding: "0 var(--space-7)",
        borderBottom: "1px solid var(--border-inverse)"
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      size: 22,
      tone: "white",
      src: "../../assets/logo-mark-white.png"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "var(--space-7) var(--space-5)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-8)",
        flex: 1,
        overflow: "auto"
      }
    }, NAV.map(g => /*#__PURE__*/React.createElement("div", {
      key: g.group,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        padding: "0 var(--space-5) var(--space-3)",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-2xs)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: "var(--text-inverse-tertiary)"
      }
    }, g.group), g.items.map(it => {
      const active = route === it.id;
      return /*#__PURE__*/React.createElement("button", {
        key: it.id,
        type: "button",
        onClick: () => go(it.id),
        onMouseEnter: () => setHover(it.id),
        onMouseLeave: () => setHover(null),
        style: {
          all: "unset",
          boxSizing: "border-box",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "var(--space-5)",
          height: 34,
          padding: "0 var(--space-5)",
          borderRadius: "var(--radius-md)",
          fontSize: "var(--type-control-md)",
          fontWeight: "var(--weight-medium)",
          letterSpacing: "var(--tracking-snug)",
          color: active ? "var(--white)" : "var(--text-inverse-secondary)",
          background: active ? "rgba(255,255,255,.10)" : hover === it.id ? "rgba(255,255,255,.05)" : "transparent",
          transition: "var(--transition-control)"
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: it.icon,
        size: 16
      }), /*#__PURE__*/React.createElement("span", null, it.label), it.count != null && /*#__PURE__*/React.createElement("span", {
        style: {
          marginLeft: "auto",
          fontFamily: "var(--font-mono)",
          fontSize: "var(--text-2xs)",
          color: "var(--text-inverse-tertiary)"
        }
      }, it.count));
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "var(--space-6)",
        borderTop: "1px solid var(--border-inverse)",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        height: 28,
        borderRadius: "var(--radius-full)",
        background: "var(--navy-600)",
        color: "#fff",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 11,
        fontWeight: 600,
        flex: "none"
      }
    }, "HV"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-xs)",
        color: "var(--white)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, "Helena Voss"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 10,
        color: "var(--text-inverse-tertiary)"
      }
    }, "Northwind Foods")), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto",
        color: "var(--text-inverse-tertiary)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevrons-up-down",
      size: 14
    }))));
  }
  function PortalTopBar({
    crumbs,
    title,
    actions,
    onNew
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        borderBottom: "1px solid var(--border-hairline)",
        background: "rgba(251,250,248,.9)",
        backdropFilter: "blur(var(--blur-chrome))",
        position: "sticky",
        top: 0,
        zIndex: "var(--z-sticky)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: "var(--header-height)",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-6)",
        padding: "0 var(--space-10)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 3,
        flex: "1 1 auto",
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(Breadcrumbs, {
      items: crumbs,
      style: {
        flexWrap: "nowrap",
        whiteSpace: "nowrap",
        overflow: "hidden"
      }
    }), /*#__PURE__*/React.createElement("h4", {
      style: {
        fontSize: "var(--text-lg)",
        letterSpacing: "var(--tracking-tight)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, title)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: "auto",
        flex: "none",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement(Input, {
      size: "sm",
      placeholder: "Search",
      prefix: /*#__PURE__*/React.createElement(Icon, {
        name: "search",
        size: 15
      }),
      style: {
        width: 190
      }
    }), /*#__PURE__*/React.createElement(Tooltip, {
      content: "Notifications"
    }, /*#__PURE__*/React.createElement(IconButton, {
      variant: "ghost",
      size: "sm",
      label: "Notifications"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "bell",
      size: 16
    }))), actions, onNew && /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: onNew,
      icon: /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 15
      })
    }, "Change request"))));
  }
  function Panel({
    title,
    eyebrow,
    action,
    children,
    padding = "var(--space-8)",
    style
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-card)",
        display: "flex",
        flexDirection: "column",
        ...style
      }
    }, (title || eyebrow || action) && /*#__PURE__*/React.createElement("header", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-6)",
        padding: "var(--space-7) var(--space-8)",
        borderBottom: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 4
      }
    }, eyebrow && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-2xs)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: "var(--text-tertiary)"
      }
    }, eyebrow), title && /*#__PURE__*/React.createElement("h5", {
      style: {
        fontSize: "var(--text-md)"
      }
    }, title)), action), /*#__PURE__*/React.createElement("div", {
      style: {
        padding,
        flex: 1,
        minHeight: 0
      }
    }, children));
  }
  Object.assign(window, {
    PortalNav,
    PortalTopBar,
    Panel
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/PortalShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/PortalSystems.jsx
try { (() => {
/* Wrapped in an IIFE: each <script type="text/babel"> shares one global scope,
   so top-level names would collide across kit files. Shared pieces are
   published on window at the bottom. */
(function () {
  const DS = window.SonderenceDesignSystem_3123e6;
  const {
    Badge,
    Button,
    DataTable,
    Icon,
    Input,
    Select,
    Tag,
    Tooltip,
    IconButton,
    Switch
  } = DS;
  const SYSTEMS = [{
    id: 1,
    s: "Microsoft Dynamics NAV",
    d: "ERP",
    owner: "J. Okafor",
    disp: "Retain",
    tone: "success",
    users: 412,
    integ: 9
  }, {
    id: 2,
    s: "Sage 200 (Fenwick)",
    d: "ERP",
    owner: "J. Okafor",
    disp: "Retire",
    tone: "danger",
    users: 63,
    integ: 2
  }, {
    id: 3,
    s: "Snowflake",
    d: "Data platform",
    owner: "S. Bhatt",
    disp: "Retain",
    tone: "success",
    users: 28,
    integ: 14
  }, {
    id: 4,
    s: "Salesforce",
    d: "CRM",
    owner: "A. Reyes",
    disp: "Retain",
    tone: "success",
    users: 190,
    integ: 6
  }, {
    id: 5,
    s: "Bespoke order desk",
    d: "Custom",
    owner: "T. Whelan",
    disp: "Retire",
    tone: "danger",
    users: 41,
    integ: 4
  }, {
    id: 6,
    s: "Coupa",
    d: "Procurement",
    owner: "S. Bhatt",
    disp: "Under review",
    tone: "warning",
    users: 77,
    integ: 3
  }, {
    id: 7,
    s: "Power BI",
    d: "Reporting",
    owner: "S. Bhatt",
    disp: "Replace",
    tone: "warning",
    users: 233,
    integ: 5
  }];
  function PortalSystems() {
    const [q, setQ] = React.useState("");
    const [disp, setDisp] = React.useState("All");
    const [onlyIntegrated, setOnly] = React.useState(false);
    const rows = SYSTEMS.filter(r => (disp === "All" || r.disp === disp) && (!onlyIntegrated || r.integ >= 5) && (r.s.toLowerCase().includes(q.toLowerCase()) || r.d.toLowerCase().includes(q.toLowerCase())));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-8)",
        padding: "var(--space-9) var(--space-10) var(--space-12)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-5)",
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Input, {
      size: "sm",
      placeholder: "Filter systems",
      value: q,
      onChange: e => setQ(e.target.value),
      prefix: /*#__PURE__*/React.createElement(Icon, {
        name: "search",
        size: 15
      }),
      style: {
        width: 240
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 180
      }
    }, /*#__PURE__*/React.createElement(Select, {
      size: "sm",
      value: disp,
      onChange: e => setDisp(e.target.value),
      options: ["All", "Retain", "Retire", "Replace", "Under review"]
    })), /*#__PURE__*/React.createElement(Switch, {
      size: "sm",
      checked: onlyIntegrated,
      onChange: e => setOnly(e.target.checked),
      label: "Highly integrated only"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-2xs)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: "var(--text-tertiary)"
      }
    }, rows.length, " of ", SYSTEMS.length, " systems"), /*#__PURE__*/React.createElement(Tooltip, {
      content: "Export register"
    }, /*#__PURE__*/React.createElement(IconButton, {
      variant: "secondary",
      size: "sm",
      label: "Export"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 15
    })))), /*#__PURE__*/React.createElement(Panel, {
      eyebrow: "Architecture",
      title: "Systems and disposition",
      padding: "0",
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        size: "sm",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "plus",
          size: 15
        })
      }, "Add system")
    }, /*#__PURE__*/React.createElement(DataTable, {
      rows: rows,
      onRowClick: () => {},
      empty: "No systems match those filters",
      columns: [{
        key: "s",
        header: "System"
      }, {
        key: "d",
        header: "Domain",
        muted: true
      }, {
        key: "owner",
        header: "Owner",
        muted: true
      }, {
        key: "users",
        header: "Users",
        numeric: true,
        align: "right"
      }, {
        key: "integ",
        header: "Integrations",
        numeric: true,
        align: "right"
      }, {
        key: "disp",
        header: "Disposition",
        align: "right",
        render: r => /*#__PURE__*/React.createElement(Badge, {
          tone: r.tone,
          dot: true
        }, r.disp)
      }]
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: "var(--space-6)"
      }
    }, [["Retain", 4, "var(--moss-500)"], ["Retire", 2, "var(--clay-500)"], ["Replace", 1, "var(--amber-500)"], ["Under review", 1, "var(--stone-400)"]].map(([l, n, c]) => /*#__PURE__*/React.createElement("div", {
      key: l,
      style: {
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-card)",
        padding: "var(--space-7)",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: "var(--radius-full)",
        background: c,
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-sm)",
        color: "var(--text-secondary)"
      }
    }, l), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto",
        fontFamily: "var(--font-display)",
        fontSize: "var(--text-xl)",
        fontWeight: 600,
        fontVariantNumeric: "tabular-nums"
      }
    }, n)))));
  }
  Object.assign(window, {
    PortalSystems
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/PortalSystems.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portal/PortalWorkstream.jsx
try { (() => {
/* Wrapped in an IIFE: each <script type="text/babel"> shares one global scope,
   so top-level names would collide across kit files. Shared pieces are
   published on window at the bottom. */
(function () {
  const DS = window.SonderenceDesignSystem_3123e6;
  const {
    Badge,
    Button,
    Card,
    DataTable,
    Icon,
    ProgressMeter,
    Stat,
    Tabs,
    Tag,
    Tooltip,
    IconButton,
    Checkbox
  } = DS;
  const MILESTONES = [{
    m: "Value stream baseline signed off",
    due: "12 Mar",
    owner: "A. Reyes",
    state: "Complete",
    tone: "success"
  }, {
    m: "Target flow configured in NAV",
    due: "28 May",
    owner: "J. Okafor",
    state: "Complete",
    tone: "success"
  }, {
    m: "Pilot at Peterborough site",
    due: "18 Jul",
    owner: "A. Reyes",
    state: "In flight",
    tone: "brand"
  }, {
    m: "Wave 2 rollout — 3 sites",
    due: "22 Sep",
    owner: "M. Lindqvist",
    state: "Planned",
    tone: "neutral"
  }, {
    m: "Legacy order desk retired",
    due: "14 Nov",
    owner: "T. Whelan",
    state: "Planned",
    tone: "neutral"
  }];
  const RISKS = [{
    r: "Peterborough master data quality below threshold",
    sev: "Medium",
    tone: "warning",
    owner: "S. Bhatt",
    age: "11d"
  }, {
    r: "Order desk headcount plan not agreed with works council",
    sev: "Medium",
    tone: "warning",
    owner: "H. Voss",
    age: "4d"
  }];
  function PortalWorkstream({
    go
  }) {
    const [tab, setTab] = React.useState("plan");
    const [done, setDone] = React.useState({
      0: true,
      1: true
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-8)",
        padding: "var(--space-9) var(--space-10) var(--space-12)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-5)",
        maxWidth: 620
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-4)",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "brand",
      dot: true
    }, "In flight"), /*#__PURE__*/React.createElement(Tag, null, "Order-to-cash"), /*#__PURE__*/React.createElement(Tag, null, "6 sites")), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-md)",
        lineHeight: "var(--leading-relaxed)",
        color: "var(--text-secondary)"
      }
    }, "Remove the three reconciliation loops between order entry and invoicing, and move all six sites onto one flow with four gates.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      size: "sm",
      label: "Progress",
      value: "62",
      unit: "%"
    }), /*#__PURE__*/React.createElement(Stat, {
      size: "sm",
      label: "Variance",
      value: "+2",
      unit: "days",
      delta: "on plan",
      direction: "flat"
    }), /*#__PURE__*/React.createElement(Stat, {
      size: "sm",
      label: "Open risks",
      value: "2"
    }))), /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: setTab,
      items: [{
        value: "plan",
        label: "Plan",
        count: 5
      }, {
        value: "risks",
        label: "Risks",
        count: 2
      }, {
        value: "scope",
        label: "Scope"
      }]
    }), tab === "plan" && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.55fr 1fr",
        gap: "var(--space-8)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      eyebrow: "Milestones",
      title: "Delivery plan",
      padding: "0",
      action: /*#__PURE__*/React.createElement(Tooltip, {
        content: "Add milestone"
      }, /*#__PURE__*/React.createElement(IconButton, {
        variant: "ghost",
        size: "sm",
        label: "Add"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "plus",
        size: 16
      })))
    }, /*#__PURE__*/React.createElement(DataTable, {
      columns: [{
        key: "m",
        header: "Milestone",
        wrap: true
      }, {
        key: "due",
        header: "Due",
        muted: true,
        numeric: true
      }, {
        key: "owner",
        header: "Owner",
        muted: true
      }, {
        key: "state",
        header: "State",
        align: "right",
        render: r => /*#__PURE__*/React.createElement(Badge, {
          tone: r.tone,
          dot: r.tone !== "neutral"
        }, r.state)
      }],
      rows: MILESTONES
    })), /*#__PURE__*/React.createElement(Panel, {
      eyebrow: "This week",
      title: "Gate checklist"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)"
      }
    }, ["Pilot site data validated", "Exception playbook drafted", "Order desk training booked", "Cutover runbook reviewed"].map((c, i) => /*#__PURE__*/React.createElement(Checkbox, {
      key: c,
      label: c,
      checked: !!done[i],
      onChange: e => setDone({
        ...done,
        [i]: e.target.checked
      })
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        paddingTop: "var(--space-6)",
        borderTop: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement(ProgressMeter, {
      label: "Gate readiness",
      valueLabel: `${Object.values(done).filter(Boolean).length} of 4`,
      value: Object.values(done).filter(Boolean).length,
      max: 4
    }))))), tab === "risks" && /*#__PURE__*/React.createElement(Panel, {
      eyebrow: "Register",
      title: "Open risks",
      padding: "0",
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "secondary",
        size: "sm",
        icon: /*#__PURE__*/React.createElement(Icon, {
          name: "plus",
          size: 15
        })
      }, "Log risk")
    }, /*#__PURE__*/React.createElement(DataTable, {
      columns: [{
        key: "r",
        header: "Risk",
        wrap: true
      }, {
        key: "sev",
        header: "Severity",
        render: r => /*#__PURE__*/React.createElement(Badge, {
          tone: r.tone,
          dot: true
        }, r.sev)
      }, {
        key: "owner",
        header: "Owner",
        muted: true
      }, {
        key: "age",
        header: "Age",
        numeric: true,
        align: "right"
      }],
      rows: RISKS
    })), tab === "scope" && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      eyebrow: "In scope",
      title: "What this workstream covers"
    }, /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        padding: 0,
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-5)"
      }
    }, ["Order entry through to invoice release", "All six manufacturing sites", "Customer master consolidation", "Credit-hold exception handling"].map(s => /*#__PURE__*/React.createElement("li", {
      key: s,
      style: {
        display: "flex",
        gap: "var(--space-5)",
        fontSize: "var(--text-sm)",
        lineHeight: 1.5,
        color: "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--moss-500)",
        flex: "none",
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 15
    })), s)))), /*#__PURE__*/React.createElement(Panel, {
      eyebrow: "Out of scope",
      title: "Explicitly excluded"
    }, /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        padding: 0,
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-5)"
      }
    }, ["Procure-to-pay (separate workstream)", "Warehouse management system", "Netherlands VAT reporting", "Customer pricing policy"].map(s => /*#__PURE__*/React.createElement("li", {
      key: s,
      style: {
        display: "flex",
        gap: "var(--space-5)",
        fontSize: "var(--text-sm)",
        lineHeight: 1.5,
        color: "var(--text-tertiary)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-tertiary)",
        flex: "none",
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "minus",
      size: 15
    })), s))))));
  }
  Object.assign(window, {
    PortalWorkstream
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portal/PortalWorkstream.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteChrome.jsx
try { (() => {
/* Wrapped in an IIFE: each <script type="text/babel"> shares one global scope,
   so top-level names would collide across kit files. Shared pieces are
   published on window at the bottom. */
(function () {
  const DS = window.SonderenceDesignSystem_3123e6;
  const {
    Button,
    Logo,
    Eyebrow,
    Icon
  } = DS;
  const NAV = [{
    id: "home",
    label: "Home"
  }, {
    id: "approach",
    label: "Approach"
  }, {
    id: "work",
    label: "Work"
  }, {
    id: "contact",
    label: "Contact"
  }];
  function SiteHeader({
    route,
    go
  }) {
    return /*#__PURE__*/React.createElement("header", {
      style: {
        position: "sticky",
        top: 0,
        zIndex: "var(--z-header)",
        height: "var(--header-height)",
        display: "flex",
        alignItems: "center",
        background: "rgba(251,250,248,.88)",
        backdropFilter: "blur(var(--blur-chrome))",
        WebkitBackdropFilter: "blur(var(--blur-chrome))",
        borderBottom: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--gutter-lg)",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-11)"
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: e => {
        e.preventDefault();
        go("home");
      },
      style: {
        borderBottom: "none",
        display: "inline-flex"
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      size: 26,
      src: "../../assets/logo-mark-navy.png"
    })), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: "flex",
        gap: "var(--space-9)",
        marginLeft: "auto"
      }
    }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
      key: n.id,
      href: "#",
      onClick: e => {
        e.preventDefault();
        go(n.id);
      },
      style: {
        borderBottom: "none",
        fontSize: "var(--type-control-md)",
        fontWeight: "var(--weight-medium)",
        letterSpacing: "var(--tracking-snug)",
        color: route === n.id ? "var(--text-primary)" : "var(--text-secondary)"
      }
    }, n.label))), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => go("contact"),
      iconAfter: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 15
      })
    }, "Start a conversation")));
  }
  function Section({
    tone = "paper",
    children,
    style
  }) {
    const bg = tone === "navy" ? "var(--surface-inverse)" : tone === "sunken" ? "var(--surface-sunken)" : "var(--surface-page)";
    return /*#__PURE__*/React.createElement("section", {
      style: {
        background: bg,
        padding: "var(--space-14) 0",
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--gutter-lg)"
      }
    }, children));
  }
  function SectionHead({
    eyebrow,
    title,
    lead,
    tone = "default",
    index,
    action
  }) {
    const inv = tone === "inverse";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: "var(--space-11)",
        marginBottom: "var(--space-11)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)",
        maxWidth: 660
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: inv ? "inverse" : "default",
      index: index
    }, eyebrow), /*#__PURE__*/React.createElement("h2", {
      style: {
        color: inv ? "var(--text-inverse)" : "var(--text-primary)",
        fontSize: "var(--text-3xl)"
      }
    }, title), lead && /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-md)",
        lineHeight: "var(--leading-relaxed)",
        color: inv ? "var(--text-inverse-secondary)" : "var(--text-secondary)",
        maxWidth: 580
      }
    }, lead)), action);
  }
  function Placeholder({
    label,
    height = 260,
    tone = "paper"
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height,
        borderRadius: "var(--radius-card)",
        background: tone === "navy" ? "rgba(255,255,255,.05)" : "var(--stone-100)",
        border: `1px dashed ${tone === "navy" ? "var(--border-inverse)" : "var(--border-default)"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-2xs)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: tone === "navy" ? "var(--text-inverse-tertiary)" : "var(--text-tertiary)"
      }
    }, label));
  }
  function SiteFooter({
    go
  }) {
    const cols = [{
      h: "Services",
      items: ["Operating model design", "Systems architecture", "Data foundations", "AI implementation"]
    }, {
      h: "Company",
      items: ["Approach", "Work", "Perspectives", "Careers"]
    }, {
      h: "Contact",
      items: ["hello@sonderence.com", "+44 20 7946 0812", "London · Amsterdam"]
    }];
    return /*#__PURE__*/React.createElement("footer", {
      style: {
        background: "var(--surface-inverse-deep)",
        padding: "var(--space-13) 0 var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "0 var(--gutter-lg)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.6fr repeat(3,1fr)",
        gap: "var(--space-11)",
        paddingBottom: "var(--space-11)",
        borderBottom: "1px solid var(--border-inverse)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement(Logo, {
      size: 26,
      tone: "white",
      src: "../../assets/logo-mark-white.png"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-sm)",
        lineHeight: "var(--leading-relaxed)",
        color: "var(--text-inverse-secondary)",
        maxWidth: 280
      }
    }, "Digital operating systems for businesses that have outgrown the way they work.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
      key: c.h,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "inverse",
      rule: false
    }, c.h), c.items.map(i => /*#__PURE__*/React.createElement("a", {
      key: i,
      href: "#",
      onClick: e => e.preventDefault(),
      style: {
        borderBottom: "none",
        fontSize: "var(--text-sm)",
        color: "var(--text-inverse-secondary)"
      }
    }, i))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        paddingTop: "var(--space-7)",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-2xs)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: "var(--text-inverse-tertiary)"
      }
    }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Sonderence Ltd"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: "var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement("span", null, "Privacy"), /*#__PURE__*/React.createElement("span", null, "Terms"), /*#__PURE__*/React.createElement("span", null, "Security")))));
  }
  Object.assign(window, {
    SiteHeader,
    SiteFooter,
    Section,
    SectionHead,
    Placeholder
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteChrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebsiteApproach.jsx
try { (() => {
/* Wrapped in an IIFE: each <script type="text/babel"> shares one global scope,
   so top-level names would collide across kit files. Shared pieces are
   published on window at the bottom. */
(function () {
  const DS = window.SonderenceDesignSystem_3123e6;
  const {
    Button,
    Card,
    Eyebrow,
    Icon,
    DataTable,
    Badge,
    Tabs,
    ProgressMeter
  } = DS;
  const PHASES = {
    diagnose: {
      n: "01",
      t: "Diagnose",
      weeks: "Weeks 1–6",
      body: "We follow the work, not the org chart. Interviews, system walkthroughs and a live trace of three real transactions end to end.",
      outputs: [{
        d: "Value stream map",
        w: "Week 3",
        o: "Sonderence",
        s: "Fixed"
      }, {
        d: "Systems and data inventory",
        w: "Week 4",
        o: "Joint",
        s: "Fixed"
      }, {
        d: "Constraint analysis",
        w: "Week 5",
        o: "Sonderence",
        s: "Fixed"
      }, {
        d: "Diagnosis readout",
        w: "Week 6",
        o: "Sonderence",
        s: "Fixed"
      }]
    },
    design: {
      n: "02",
      t: "Design",
      weeks: "Weeks 7–14",
      body: "A target operating model with the systems, data model and roles it depends on — costed, sequenced and agreed before anyone configures anything.",
      outputs: [{
        d: "Target operating model",
        w: "Week 9",
        o: "Joint",
        s: "Fixed"
      }, {
        d: "Systems architecture",
        w: "Week 11",
        o: "Sonderence",
        s: "Fixed"
      }, {
        d: "Data model and ownership",
        w: "Week 12",
        o: "Joint",
        s: "Fixed"
      }, {
        d: "Implementation sequence",
        w: "Week 14",
        o: "Joint",
        s: "Fixed"
      }]
    },
    implement: {
      n: "03",
      t: "Implement",
      weeks: "Months 4–12",
      body: "We build alongside your team, in your tools. Configuration, integration, migration and the training that goes with them.",
      outputs: [{
        d: "Platform configuration",
        w: "Rolling",
        o: "Joint",
        s: "Milestone"
      }, {
        d: "Integration build",
        w: "Rolling",
        o: "Sonderence",
        s: "Milestone"
      }, {
        d: "Data migration",
        w: "Month 8",
        o: "Joint",
        s: "Milestone"
      }, {
        d: "Role-based training",
        w: "Month 10",
        o: "Sonderence",
        s: "Milestone"
      }]
    },
    adopt: {
      n: "04",
      t: "Adopt",
      weeks: "Months 10–15",
      body: "Adoption is measured weekly against the behaviours the model depends on. We do not close a phase on a go-live date.",
      outputs: [{
        d: "Adoption baseline",
        w: "Month 10",
        o: "Sonderence",
        s: "Fixed"
      }, {
        d: "Weekly adoption review",
        w: "Rolling",
        o: "Joint",
        s: "Retainer"
      }, {
        d: "Exception playbooks",
        w: "Month 13",
        o: "Joint",
        s: "Fixed"
      }]
    },
    run: {
      n: "05",
      t: "Run",
      weeks: "Quarterly",
      body: "A standing quarterly cadence to keep the operating system fitting the business as it changes. Optional, and cancellable each quarter.",
      outputs: [{
        d: "Quarterly system review",
        w: "Quarterly",
        o: "Joint",
        s: "Retainer"
      }, {
        d: "Architecture change log",
        w: "Rolling",
        o: "Sonderence",
        s: "Retainer"
      }]
    }
  };
  const PRINCIPLES = [{
    icon: "compass",
    t: "Outcomes are named before tools are",
    d: "Every workstream carries a number it is accountable for. If we cannot name it, we do not start it."
  }, {
    icon: "users",
    t: "Your team builds it with us",
    d: "We work in your tools, in your repos, in your meetings. Nothing is handed over at the end because nothing was held back."
  }, {
    icon: "layers",
    t: "One system, not four projects",
    d: "People, process, data and technology move together. Sequencing them apart is what creates the mess we get called in to fix."
  }, {
    icon: "file-check",
    t: "Everything is written down",
    d: "Decisions, trade-offs and the reasons behind them live in a register you keep. It is the difference between a system and a habit."
  }];
  function WebsiteApproach({
    go
  }) {
    const [tab, setTab] = React.useState("diagnose");
    const p = PHASES[tab];
    const keys = Object.keys(PHASES);
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page)",
        borderBottom: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "var(--space-13) var(--gutter-lg) var(--space-12)",
        display: "grid",
        gridTemplateColumns: "1fr .8fr",
        gap: "var(--space-13)",
        alignItems: "end"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-7)"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Approach"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: "var(--text-4xl)"
      }
    }, "The same spine, every engagement."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-lg)",
        lineHeight: "var(--leading-relaxed)",
        color: "var(--text-secondary)",
        maxWidth: 560
      }
    }, "Five phases, fixed deliverables, and a gate at the end of each one where you can stop. What varies is depth, not structure.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement(ProgressMeter, {
      label: "Typical engagement",
      valueLabel: "15 months",
      segments: [{
        label: "Diagnose",
        done: true,
        weight: 1.5
      }, {
        label: "Design",
        done: true,
        weight: 2
      }, {
        label: "Implement",
        done: true,
        weight: 4
      }, {
        label: "Adopt",
        done: true,
        weight: 2
      }, {
        label: "Run",
        weight: 2
      }]
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-2xs)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: "var(--text-tertiary)"
      }
    }, /*#__PURE__*/React.createElement("span", null, "Month 0"), /*#__PURE__*/React.createElement("span", null, "Month 15"))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHead, {
      index: 1,
      eyebrow: "Phases",
      title: "What happens, and what you receive"
    }), /*#__PURE__*/React.createElement(Tabs, {
      value: tab,
      onChange: setTab,
      items: keys.map(k => ({
        value: k,
        label: `${PHASES[k].n}  ${PHASES[k].t}`
      })),
      style: {
        marginBottom: "var(--space-9)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: ".8fr 1.2fr",
        gap: "var(--space-11)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "brand"
    }, p.weeks), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: "var(--text-2xl)"
      }
    }, p.t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-md)",
        lineHeight: "var(--leading-relaxed)",
        color: "var(--text-secondary)"
      }
    }, p.body)), /*#__PURE__*/React.createElement(Card, {
      padding: "none",
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement(DataTable, {
      columns: [{
        key: "d",
        header: "Deliverable"
      }, {
        key: "w",
        header: "Due",
        muted: true
      }, {
        key: "o",
        header: "Owner",
        muted: true
      }, {
        key: "s",
        header: "Basis",
        align: "right",
        render: r => /*#__PURE__*/React.createElement(Badge, {
          tone: r.s === "Retainer" ? "accent" : "neutral"
        }, r.s)
      }],
      rows: p.outputs
    })))), /*#__PURE__*/React.createElement(Section, {
      tone: "navy"
    }, /*#__PURE__*/React.createElement(SectionHead, {
      index: 2,
      tone: "inverse",
      eyebrow: "Principles",
      title: "Four rules we do not trade away"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "var(--space-9) var(--space-13)"
      }
    }, PRINCIPLES.map(x => /*#__PURE__*/React.createElement("div", {
      key: x.t,
      style: {
        display: "flex",
        gap: "var(--space-6)",
        paddingTop: "var(--space-7)",
        borderTop: "1px solid var(--border-inverse)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--brass-300)",
        flex: "none",
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: x.icon,
      size: 20
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("h5", {
      style: {
        color: "var(--text-inverse)",
        fontSize: "var(--text-md)"
      }
    }, x.t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-sm)",
        lineHeight: "var(--leading-relaxed)",
        color: "var(--text-inverse-secondary)"
      }
    }, x.d)))))), /*#__PURE__*/React.createElement(Section, {
      tone: "sunken"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-11)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-5)",
        maxWidth: 560
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: "var(--text-2xl)"
      }
    }, "Want the diagnosis without the engagement?"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-md)",
        color: "var(--text-secondary)",
        lineHeight: "var(--leading-relaxed)"
      }
    }, "That is a normal way to start. Two weeks, fixed investment, and the map is yours.")), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: () => go("contact"),
      iconAfter: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      })
    }, "Talk to us"))));
  }
  Object.assign(window, {
    WebsiteApproach
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebsiteApproach.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebsiteCase.jsx
try { (() => {
/* Wrapped in an IIFE: each <script type="text/babel"> shares one global scope,
   so top-level names would collide across kit files. Shared pieces are
   published on window at the bottom. */
(function () {
  const DS = window.SonderenceDesignSystem_3123e6;
  const {
    Button,
    Card,
    Eyebrow,
    Icon,
    Stat,
    Badge,
    Tag,
    DataTable
  } = DS;
  function WebsiteCase({
    go
  }) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-inverse)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "var(--space-12) var(--gutter-lg)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "brand",
      variant: "outline",
      style: {
        borderColor: "var(--border-inverse-strong)",
        color: "var(--text-inverse-secondary)"
      }
    }, "Manufacturing"), /*#__PURE__*/React.createElement(Badge, {
      tone: "brand",
      variant: "outline",
      style: {
        borderColor: "var(--border-inverse-strong)",
        color: "var(--text-inverse-secondary)"
      }
    }, "ERP consolidation"), /*#__PURE__*/React.createElement(Badge, {
      tone: "brand",
      variant: "outline",
      style: {
        borderColor: "var(--border-inverse-strong)",
        color: "var(--text-inverse-secondary)"
      }
    }, "14 months")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1.1fr .9fr",
        gap: "var(--space-13)",
        alignItems: "end"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-7)"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      tone: "inverse"
    }, "Northwind Foods"), /*#__PURE__*/React.createElement("h1", {
      style: {
        color: "var(--text-inverse)",
        fontSize: "var(--text-4xl)"
      }
    }, "Nine systems retired. One way of working."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-lg)",
        lineHeight: "var(--leading-relaxed)",
        color: "var(--text-inverse-secondary)",
        maxWidth: 540
      }
    }, "A \xA3180m food manufacturer running four ERPs after three acquisitions \u2014 and a finance team closing the month in eleven days.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(2,1fr)",
        gap: "var(--space-9)"
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      tone: "inverse",
      label: "Cycle time",
      value: "14",
      unit: "days",
      delta: "38%",
      direction: "down"
    }), /*#__PURE__*/React.createElement(Stat, {
      tone: "inverse",
      label: "Month-end close",
      value: "4",
      unit: "days",
      delta: "7d",
      direction: "down"
    }), /*#__PURE__*/React.createElement(Stat, {
      tone: "inverse",
      label: "Systems retired",
      value: "9"
    }), /*#__PURE__*/React.createElement(Stat, {
      tone: "inverse",
      label: "Adoption at 90d",
      value: "86",
      unit: "%"
    }))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "220px 1fr",
        gap: "var(--space-13)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-7)",
        position: "sticky",
        top: 96
      }
    }, [["Sector", "Food manufacturing"], ["Revenue", "£180m"], ["Sites", "6 across UK & NL"], ["Engagement", "Diagnose → Run"], ["Duration", "14 months"], ["Team", "5 Sonderence, 11 client"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 4,
        paddingBottom: "var(--space-6)",
        borderBottom: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-2xs)",
        letterSpacing: "var(--tracking-label)",
        textTransform: "uppercase",
        color: "var(--text-tertiary)"
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-sm)",
        color: "var(--text-primary)"
      }
    }, v)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-11)",
        maxWidth: 680
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      index: 1
    }, "The situation"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: "var(--text-2xl)"
      }
    }, "Three acquisitions, four ways of doing everything"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-md)",
        lineHeight: "var(--leading-relaxed)",
        color: "var(--text-secondary)"
      }
    }, "Northwind had grown by acquisition and integrated almost nothing. Each site kept its own ERP, its own product codes and its own definition of an order. Group reporting was assembled by hand every month, and nobody trusted the result enough to act on it quickly."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-md)",
        lineHeight: "var(--leading-relaxed)",
        color: "var(--text-secondary)"
      }
    }, "The board had approved a platform migration twice and cancelled it twice. Both attempts started with software selection.")), /*#__PURE__*/React.createElement(Placeholder, {
      label: "Diagram or site photography \u2014 supply asset",
      height: 280
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      index: 2
    }, "What we did"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: "var(--text-2xl)"
      }
    }, "We traced three real orders before we opened a vendor list"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-md)",
        lineHeight: "var(--leading-relaxed)",
        color: "var(--text-secondary)"
      }
    }, "Six weeks of diagnosis produced a single value stream map of order-to-cash across all six sites. It showed 31 handoffs, 12 of them purely to reconcile data between systems. The target operating model removed 19 of those handoffs before any platform decision was made."), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        paddingLeft: 0,
        listStyle: "none",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-5)"
      }
    }, ["A single product and customer master, owned by one named team", "Order-to-cash rebuilt as one flow with four gates instead of nine", "Site-level ERPs retired in three waves over eight months", "A change register kept by Northwind, not by us"].map(li => /*#__PURE__*/React.createElement("li", {
      key: li,
      style: {
        display: "flex",
        gap: "var(--space-5)",
        fontSize: "var(--text-md)",
        lineHeight: "var(--leading-relaxed)",
        color: "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--brass-500)",
        marginTop: 3,
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 16
    })), li)))), /*#__PURE__*/React.createElement(Card, {
      variant: "accent",
      padding: "md"
    }, /*#__PURE__*/React.createElement("blockquote", {
      style: {
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "var(--text-xl)",
        lineHeight: "var(--leading-snug)"
      }
    }, "\u201CThe first thing they gave us was a map of our own business. It was uncomfortable, and it was correct.\u201D"), /*#__PURE__*/React.createElement("footer", {
      style: {
        fontSize: "var(--text-sm)",
        color: "var(--text-secondary)"
      }
    }, "Helena Voss, Chief Operating Officer"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      index: 3
    }, "Where it landed"), /*#__PURE__*/React.createElement(Card, {
      padding: "none"
    }, /*#__PURE__*/React.createElement(DataTable, {
      columns: [{
        key: "m",
        header: "Measure"
      }, {
        key: "b",
        header: "Before",
        numeric: true,
        align: "right"
      }, {
        key: "a",
        header: "After",
        numeric: true,
        align: "right"
      }, {
        key: "c",
        header: "Change",
        numeric: true,
        align: "right"
      }],
      rows: [{
        m: "Order-to-cash cycle",
        b: "22.6d",
        a: "14.0d",
        c: "−38%"
      }, {
        m: "Month-end close",
        b: "11d",
        a: "4d",
        c: "−64%"
      }, {
        m: "Systems in scope",
        b: "13",
        a: "4",
        c: "−9"
      }, {
        m: "Manual reconciliations / month",
        b: "1,240",
        a: "96",
        c: "−92%"
      }]
    })))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-sunken)",
        borderTop: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "var(--space-12) var(--gutter-lg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-11)"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: "var(--text-2xl)",
        maxWidth: 520
      }
    }, "If any of this sounds like your business, the diagnosis is two weeks."), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: () => go("contact"),
      iconAfter: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      })
    }, "Start a conversation"))));
  }
  Object.assign(window, {
    WebsiteCase
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebsiteCase.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebsiteContact.jsx
try { (() => {
/* Wrapped in an IIFE: each <script type="text/babel"> shares one global scope,
   so top-level names would collide across kit files. Shared pieces are
   published on window at the bottom. */
(function () {
  const DS = window.SonderenceDesignSystem_3123e6;
  const {
    Button,
    Card,
    Eyebrow,
    Icon,
    Field,
    Input,
    Textarea,
    Select,
    Checkbox,
    RadioGroup,
    Radio,
    Toast,
    ToastStack,
    Badge
  } = DS;
  function WebsiteContact() {
    const [shape, setShape] = React.useState("diagnosis");
    const [consent, setConsent] = React.useState(false);
    const [sent, setSent] = React.useState(false);
    const [email, setEmail] = React.useState("");
    const [touched, setTouched] = React.useState(false);
    const emailBad = touched && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
    const submit = e => {
      e.preventDefault();
      setTouched(true);
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || !consent) return;
      setSent(true);
    };
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: ".85fr 1.15fr",
        gap: "var(--space-13)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-8)",
        position: "sticky",
        top: 104
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Contact"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: "var(--text-4xl)"
      }
    }, "Start with a conversation."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-md)",
        lineHeight: "var(--leading-relaxed)",
        color: "var(--text-secondary)"
      }
    }, "Tell us what is not working. We will tell you whether we are the right people, and what we would look at first."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)",
        paddingTop: "var(--space-7)",
        borderTop: "1px solid var(--border-hairline)"
      }
    }, [["clock", "One business day", "Every enquiry gets a reply from a partner, not a form response."], ["phone", "45 minutes", "The first call is a conversation, not a pitch."], ["file-text", "No proposal until week two", "We would rather diagnose first."]].map(([ic, t, d]) => /*#__PURE__*/React.createElement("div", {
      key: t,
      style: {
        display: "flex",
        gap: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-tertiary)",
        marginTop: 2,
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 17
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-sm)",
        fontWeight: "var(--weight-medium)"
      }
    }, t), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-xs)",
        lineHeight: 1.5,
        color: "var(--text-secondary)"
      }
    }, d)))))), /*#__PURE__*/React.createElement(Card, {
      padding: "lg",
      variant: "raised"
    }, /*#__PURE__*/React.createElement("form", {
      onSubmit: submit,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Full name",
      required: true,
      htmlFor: "n"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "n",
      placeholder: "Helena Voss"
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Company",
      required: true,
      htmlFor: "c"
    }, /*#__PURE__*/React.createElement(Input, {
      id: "c",
      placeholder: "Northwind Foods"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement(Field, {
      label: "Work email",
      required: true,
      htmlFor: "e",
      error: emailBad ? "Enter a valid work email" : undefined
    }, /*#__PURE__*/React.createElement(Input, {
      id: "e",
      type: "email",
      placeholder: "name@company.com",
      value: email,
      invalid: emailBad,
      onChange: ev => setEmail(ev.target.value),
      onBlur: () => setTouched(true),
      prefix: /*#__PURE__*/React.createElement(Icon, {
        name: "mail",
        size: 16
      })
    })), /*#__PURE__*/React.createElement(Field, {
      label: "Annual revenue",
      htmlFor: "r"
    }, /*#__PURE__*/React.createElement(Select, {
      id: "r",
      options: ["Under £5m", "£5m – £25m", "£25m – £100m", "£100m – £500m", "Over £500m"],
      defaultValue: "\xA325m \u2013 \xA3100m"
    }))), /*#__PURE__*/React.createElement(RadioGroup, {
      legend: "What are you looking for?"
    }, /*#__PURE__*/React.createElement(Radio, {
      name: "shape",
      label: "A diagnosis",
      description: "Two weeks, fixed investment, you keep the map",
      checked: shape === "diagnosis",
      onChange: () => setShape("diagnosis")
    }), /*#__PURE__*/React.createElement(Radio, {
      name: "shape",
      label: "A full engagement",
      description: "Diagnose through to run",
      checked: shape === "full",
      onChange: () => setShape("full")
    }), /*#__PURE__*/React.createElement(Radio, {
      name: "shape",
      label: "Not sure yet",
      description: "Happy to talk it through",
      checked: shape === "unsure",
      onChange: () => setShape("unsure")
    })), /*#__PURE__*/React.createElement(Field, {
      label: "What is not working?",
      hint: "A few sentences is plenty",
      htmlFor: "b"
    }, /*#__PURE__*/React.createElement(Textarea, {
      id: "b",
      rows: 5,
      placeholder: "Where does the work get stuck today?"
    })), /*#__PURE__*/React.createElement(Checkbox, {
      label: "I am happy for Sonderence to contact me about this enquiry",
      checked: consent,
      onChange: e => setConsent(e.target.checked)
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-6)",
        paddingTop: "var(--space-6)",
        borderTop: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      size: "lg",
      disabled: !consent,
      iconAfter: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      })
    }, "Send enquiry"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-xs)",
        color: "var(--text-tertiary)"
      }
    }, "We reply within one business day.")))))), sent && /*#__PURE__*/React.createElement(ToastStack, {
      position: "bottom-right"
    }, /*#__PURE__*/React.createElement(Toast, {
      tone: "success",
      title: "Enquiry sent",
      description: "A partner will reply within one business day.",
      onDismiss: () => setSent(false)
    })));
  }
  Object.assign(window, {
    WebsiteContact
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebsiteContact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/WebsiteHome.jsx
try { (() => {
/* Wrapped in an IIFE: each <script type="text/babel"> shares one global scope,
   so top-level names would collide across kit files. Shared pieces are
   published on window at the bottom. */
(function () {
  const DS = window.SonderenceDesignSystem_3123e6;
  const {
    Button,
    Card,
    CardHeader,
    Eyebrow,
    Icon,
    Stat,
    Badge,
    Tag
  } = DS;
  const CAPABILITIES = [{
    icon: "workflow",
    title: "Operating model design",
    body: "Decision rights, handoffs and accountability, mapped and rebuilt so work moves without escalation."
  }, {
    icon: "database",
    title: "Data & systems architecture",
    body: "One coherent system of record. Integrations that hold, and reporting people actually trust."
  }, {
    icon: "cpu",
    title: "AI implementation",
    body: "Applied where it removes real work — not bolted on. Governed, measured, and owned by your team."
  }];
  const PHASES = [{
    n: "01",
    t: "Diagnose",
    d: "Six weeks mapping how work actually moves — not how the org chart says it does."
  }, {
    n: "02",
    t: "Design",
    d: "A target operating model with the systems, data and roles it depends on."
  }, {
    n: "03",
    t: "Implement",
    d: "We build alongside your team. Configuration, integration, migration, training."
  }, {
    n: "04",
    t: "Adopt",
    d: "Change management that ends with people using the thing, measured weekly."
  }, {
    n: "05",
    t: "Run",
    d: "A quarterly cadence to keep the system fitting the business as it grows."
  }];
  const PERSPECTIVES = [{
    tag: "Operating model",
    title: "The three approval loops most mid-market firms can delete",
    read: "8 min"
  }, {
    tag: "Data",
    title: "Why your reporting is slow, and why it is not a tooling problem",
    read: "6 min"
  }, {
    tag: "AI",
    title: "A governance model for AI that survives contact with an audit",
    read: "11 min"
  }];
  function WebsiteHome({
    go
  }) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-page)",
        borderBottom: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "var(--space-14) var(--gutter-lg) var(--space-13)",
        display: "grid",
        gridTemplateColumns: "1.05fr .95fr",
        gap: "var(--space-13)",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Digital operating systems"), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: "var(--text-5xl)",
        lineHeight: "var(--leading-tight)",
        letterSpacing: "var(--tracking-tighter)"
      }
    }, "We build the system your business runs on."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-lg)",
        lineHeight: "var(--leading-relaxed)",
        color: "var(--text-secondary)",
        maxWidth: 500
      }
    }, "People, process, data and technology designed as one thing \u2014 then implemented, adopted and maintained. Not a strategy deck. An operating system."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-5)",
        marginTop: "var(--space-2)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      onClick: () => go("contact"),
      iconAfter: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      })
    }, "Start a conversation"), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "secondary",
      onClick: () => go("approach")
    }, "See how we work"))), /*#__PURE__*/React.createElement(SystemDiagram, null))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-page)",
        borderBottom: "1px solid var(--border-hairline)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "var(--space-8) var(--gutter-lg)",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-11)"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Operators we work with"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-11)",
        marginLeft: "auto"
      }
    }, ["Northwind Foods", "Calder & Rowe", "Meridian Health", "Alto Logistics", "Fenwick Industrial"].map(c => /*#__PURE__*/React.createElement("span", {
      key: c,
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--weight-medium)",
        letterSpacing: "var(--tracking-wide)",
        textTransform: "uppercase",
        color: "var(--text-tertiary)"
      }
    }, c))))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement(SectionHead, {
      index: 1,
      eyebrow: "What we build",
      title: "Three disciplines, one system",
      lead: "Most firms sell you one of these. The value is in the seam between them."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "var(--space-8)"
      }
    }, CAPABILITIES.map(c => /*#__PURE__*/React.createElement(Card, {
      key: c.title,
      interactive: true,
      padding: "md",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        borderRadius: "var(--radius-md)",
        background: "var(--navy-50)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--navy-700)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: c.icon,
      size: 18
    })), /*#__PURE__*/React.createElement("h4", {
      style: {
        fontSize: "var(--text-lg)"
      }
    }, c.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-base)",
        lineHeight: "var(--leading-relaxed)",
        color: "var(--text-secondary)"
      }
    }, c.body), /*#__PURE__*/React.createElement("span", {
      style: {
        marginTop: "auto",
        paddingTop: "var(--space-6)",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: "var(--text-sm)",
        fontWeight: "var(--weight-medium)",
        color: "var(--text-link)"
      }
    }, "Read the method ", /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    })))))), /*#__PURE__*/React.createElement(Section, {
      tone: "navy"
    }, /*#__PURE__*/React.createElement(SectionHead, {
      index: 2,
      tone: "inverse",
      eyebrow: "The method",
      title: "Five phases, one continuous line",
      lead: "Every engagement follows the same spine. What changes is the depth of each phase."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        gap: 2,
        marginBottom: "var(--space-9)"
      }
    }, PHASES.map((p, i) => /*#__PURE__*/React.createElement("span", {
      key: p.n,
      style: {
        height: 5,
        borderRadius: "var(--radius-xs)",
        background: i < 3 ? "var(--white)" : "rgba(255,255,255,.22)"
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        gap: "var(--space-8)"
      }
    }, PHASES.map(p => /*#__PURE__*/React.createElement("div", {
      key: p.n,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-2xs)",
        letterSpacing: "var(--tracking-label)",
        color: "var(--text-inverse-tertiary)"
      }
    }, p.n), /*#__PURE__*/React.createElement("h5", {
      style: {
        color: "var(--text-inverse)",
        fontSize: "var(--text-md)"
      }
    }, p.t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-sm)",
        lineHeight: "var(--leading-relaxed)",
        color: "var(--text-inverse-secondary)"
      }
    }, p.d))))), /*#__PURE__*/React.createElement(Section, {
      tone: "sunken"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: ".9fr 1.1fr",
        gap: "var(--space-13)",
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement(Placeholder, {
      label: "Client photography \u2014 supply asset",
      height: 340
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Northwind Foods \xB7 14 months"), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: "var(--text-3xl)"
      }
    }, "Nine systems retired. One way of working."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-md)",
        lineHeight: "var(--leading-relaxed)",
        color: "var(--text-secondary)"
      }
    }, "A \xA3180m food manufacturer running four ERPs after three acquisitions. We mapped order-to-cash end to end, redesigned the operating model around it, and consolidated onto one platform without pausing trade."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "var(--space-8)",
        padding: "var(--space-8) 0",
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)"
      }
    }, /*#__PURE__*/React.createElement(Stat, {
      label: "Cycle time",
      value: "14",
      unit: "days",
      delta: "38%",
      direction: "down"
    }), /*#__PURE__*/React.createElement(Stat, {
      label: "Systems retired",
      value: "9"
    }), /*#__PURE__*/React.createElement(Stat, {
      label: "Adoption at 90d",
      value: "86",
      unit: "%"
    })), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => go("work"),
      iconAfter: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      }),
      style: {
        alignSelf: "flex-start"
      }
    }, "Read the case study")))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("blockquote", {
      style: {
        margin: 0,
        maxWidth: 860,
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: "var(--font-serif)",
        fontSize: "var(--text-3xl)",
        lineHeight: "var(--leading-snug)",
        fontWeight: 400
      }
    }, "\u201CThey brought order to something we had stopped being able to explain to ourselves.\u201D"), /*#__PURE__*/React.createElement("footer", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 32,
        height: 1,
        background: "var(--border-strong)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-sm)",
        color: "var(--text-secondary)"
      }
    }, "Helena Voss, Chief Operating Officer, Northwind Foods")))), /*#__PURE__*/React.createElement(Section, {
      tone: "sunken"
    }, /*#__PURE__*/React.createElement(SectionHead, {
      index: 3,
      eyebrow: "Perspectives",
      title: "What we have learned building these",
      action: /*#__PURE__*/React.createElement(Button, {
        variant: "link"
      }, "All perspectives")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,1fr)",
        gap: "var(--space-8)"
      }
    }, PERSPECTIVES.map(p => /*#__PURE__*/React.createElement(Card, {
      key: p.title,
      interactive: true,
      padding: "md",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)",
        minHeight: 200
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement(Tag, null, p.tag), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-2xs)",
        color: "var(--text-tertiary)"
      }
    }, p.read)), /*#__PURE__*/React.createElement("h4", {
      style: {
        fontSize: "var(--text-lg)",
        marginTop: "auto"
      }
    }, p.title))))), /*#__PURE__*/React.createElement("section", {
      style: {
        background: "var(--surface-inverse)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: "var(--space-13) var(--gutter-lg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-11)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)",
        maxWidth: 560
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        color: "var(--text-inverse)",
        fontSize: "var(--text-3xl)"
      }
    }, "Start with a diagnosis, not a proposal."), /*#__PURE__*/React.createElement("p", {
      style: {
        fontSize: "var(--text-md)",
        lineHeight: "var(--leading-relaxed)",
        color: "var(--text-inverse-secondary)"
      }
    }, "A two-week read of how your business actually operates. You keep the map either way.")), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      variant: "inverse",
      onClick: () => go("contact"),
      iconAfter: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 16
      })
    }, "Book a discovery call"))));
  }
  function SystemDiagram() {
    const nodes = [["People", 12, 14], ["Process", 62, 8], ["Data", 20, 56], ["Technology", 68, 62]];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: 380,
        borderRadius: "var(--radius-surface)",
        background: "var(--surface-inverse)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        backgroundImage: "linear-gradient(rgba(255,255,255,.055) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.055) 1px,transparent 1px)",
        backgroundSize: "34px 34px"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "22%",
        top: "24%",
        width: "48%",
        height: 1,
        background: "rgba(255,255,255,.22)",
        transform: "rotate(6deg)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "26%",
        top: "60%",
        width: "46%",
        height: 1,
        background: "rgba(255,255,255,.22)",
        transform: "rotate(-4deg)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "24%",
        top: "26%",
        width: 1,
        height: "40%",
        background: "rgba(255,255,255,.22)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "72%",
        top: "18%",
        width: 1,
        height: "46%",
        background: "rgba(255,255,255,.22)"
      }
    })), nodes.map(([label, x, y], i) => /*#__PURE__*/React.createElement("div", {
      key: label,
      style: {
        position: "absolute",
        left: x + "%",
        top: y + "%",
        display: "flex",
        alignItems: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: "var(--radius-full)",
        background: i === 3 ? "var(--brass-400)" : "var(--white)",
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: ".1em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,.86)"
      }
    }, label))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: 24,
        bottom: 22,
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-mono)",
        fontSize: 10,
        letterSpacing: ".14em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,.46)"
      }
    }, "One ecosystem"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontSize: 22,
        fontWeight: 600,
        letterSpacing: "-.018em",
        color: "#fff"
      }
    }, "Not four projects")));
  }
  Object.assign(window, {
    WebsiteHome
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/WebsiteHome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.ProgressMeter = __ds_scope.ProgressMeter;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastStack = __ds_scope.ToastStack;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
