import {
  client_context_default
} from "/build/_shared/chunk-JP3NGNYN.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch
} from "/build/_shared/chunk-OZL2XMJ4.js";
import {
  newStyled
} from "/build/_shared/chunk-AEYANUH5.js";
import {
  require_jsx_dev_runtime,
  require_react,
  withEmotionCache
} from "/build/_shared/chunk-BLMYZOJW.js";
import {
  __toESM
} from "/build/_shared/chunk-5KL4PAQL.js";

// app/root.tsx
var import_react4 = __toESM(require_react());

// app/styles/server.context.tsx
var import_react = __toESM(require_react());
var ServerStyleContext = (0, import_react.createContext)(null);
var server_context_default = ServerStyleContext;

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Container = newStyled("div")`
  background-color: #ff0000;
  padding: 1em;
`;
var meta = () => ({
  charset: "utf-8",
  title: "About Me",
  viewport: "width=device-width,initial-scale=1"
});
var Body = newStyled("body")`
  color: #5E6E80;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.7;
  min-height: 100vh;
  overflow-x: hidden;
  -ms-overflow-style: scrollbar;
  -webkit-font-smoothing: antialiased;
  margin: 0;
  display: block;
`;
var Document = withEmotionCache(
  ({ children, title }, emotionCache) => {
    const serverStyleData = (0, import_react4.useContext)(server_context_default);
    const clientStyleData = (0, import_react4.useContext)(client_context_default);
    const reinjectStylesRef = (0, import_react4.useRef)(true);
    (0, import_react4.useEffect)(() => {
      if (!reinjectStylesRef.current) {
        return;
      }
      emotionCache.sheet.container = document.head;
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();
      tags.forEach((tag) => {
        emotionCache.sheet._insertTag(tag);
      });
      clientStyleData.reset();
      reinjectStylesRef.current = false;
    }, [clientStyleData, emotionCache.sheet]);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", { lang: "en", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: [
        title ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("title", { children: title }, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 80,
          columnNumber: 26
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 81,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 82,
          columnNumber: 17
        }, this),
        serverStyleData == null ? void 0 : serverStyleData.map(({ key, ids, css }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "style",
          {
            "data-emotion": `${key} ${ids.join(" ")}`,
            dangerouslySetInnerHTML: { __html: css }
          },
          key,
          false,
          {
            fileName: "app/root.tsx",
            lineNumber: 84,
            columnNumber: 21
          },
          this
        ))
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 79,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Body, { children: [
        children,
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 94,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 95,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
          fileName: "app/root.tsx",
          lineNumber: 96,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 92,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 78,
      columnNumber: 13
    }, this);
  }
);
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 106,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 105,
    columnNumber: 9
  }, this);
}
function CatchBoundary() {
  const caught = useCatch();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, { title: `${caught.status} ${caught.statusText}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
    "[CatchBoundary]: ",
    caught.status,
    " ",
    caught.statusText
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 117,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 116,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 115,
    columnNumber: 9
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Document, { title: "Error!", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
    "[ErrorBoundary]: There was an error: ",
    error.message
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 129,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 128,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/root.tsx",
    lineNumber: 127,
    columnNumber: 9
  }, this);
}
export {
  CatchBoundary,
  ErrorBoundary,
  App as default,
  meta
};
//# sourceMappingURL=/build/root-T3QFXNID.js.map
