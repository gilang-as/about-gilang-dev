var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react2 = require("@emotion/react"), import_create_instance = __toESM(require("@emotion/server/create-instance")), import_react3 = require("@remix-run/react"), import_server = require("react-dom/server");

// app/styles/createEmotionCache.ts
var import_cache = __toESM(require("@emotion/cache"));
function createEmotionCache() {
  return (0, import_cache.default)({ key: "gilang" });
}

// app/styles/server.context.tsx
var import_react = require("react"), ServerStyleContext = (0, import_react.createContext)(null), server_context_default = ServerStyleContext;

// app/entry.server.tsx
var import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  let cache = createEmotionCache(), { extractCriticalToChunks } = (0, import_create_instance.default)(cache), html = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(server_context_default.Provider, { value: null, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, { value: cache, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 23,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 22,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this)
  ), chunks = extractCriticalToChunks(html), markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(server_context_default.Provider, { value: chunks.styles, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react2.CacheProvider, { value: cache, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react3.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 33,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 32,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 31,
      columnNumber: 9
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  meta: () => meta
});
var import_react5 = require("@emotion/react"), import_styled = __toESM(require("@emotion/styled")), import_react6 = require("@remix-run/react"), import_react7 = require("react");

// app/styles/client.context.tsx
var import_react4 = require("react"), ClientStyleContext = (0, import_react4.createContext)({
  reset: () => {
  }
}), client_context_default = ClientStyleContext;

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), Container = (0, import_styled.default)("div")`
  background-color: #ff0000;
  padding: 1em;
`, meta = () => ({
  charset: "utf-8",
  title: "About Me",
  viewport: "width=device-width,initial-scale=1"
}), Body = (0, import_styled.default)("body")`
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
`, Document = (0, import_react5.withEmotionCache)(
  ({ children, title }, emotionCache) => {
    let serverStyleData = (0, import_react7.useContext)(server_context_default), clientStyleData = (0, import_react7.useContext)(client_context_default), reinjectStylesRef = (0, import_react7.useRef)(!0);
    return (0, import_react7.useEffect)(() => {
      if (!reinjectStylesRef.current)
        return;
      emotionCache.sheet.container = document.head;
      let tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush(), tags.forEach((tag) => {
        emotionCache.sheet._insertTag(tag);
      }), clientStyleData.reset(), reinjectStylesRef.current = !1;
    }, [clientStyleData, emotionCache.sheet]), /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
        title ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("title", { children: title }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 80,
          columnNumber: 26
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react6.Meta, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 81,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react6.Links, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 82,
          columnNumber: 17
        }, this),
        serverStyleData == null ? void 0 : serverStyleData.map(({ key, ids, css }) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "style",
          {
            "data-emotion": `${key} ${ids.join(" ")}`,
            dangerouslySetInnerHTML: { __html: css }
          },
          key,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 84,
            columnNumber: 21
          },
          this
        ))
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 79,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Body, { children: [
        children,
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react6.ScrollRestoration, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 94,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react6.Scripts, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 95,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react6.LiveReload, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 96,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 92,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 78,
      columnNumber: 13
    }, this);
  }
);
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react6.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 106,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 105,
    columnNumber: 9
  }, this);
}
function CatchBoundary() {
  let caught = (0, import_react6.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { title: `${caught.status} ${caught.statusText}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Container, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
    "[CatchBoundary]: ",
    caught.status,
    " ",
    caught.statusText
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 117,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 116,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 115,
    columnNumber: 9
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Document, { title: "Error!", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Container, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { children: [
    "[ErrorBoundary]: There was an error: ",
    error.message
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 129,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 128,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 127,
    columnNumber: 9
  }, this);
}

// app/routes/jokes-error.tsx
var jokes_error_exports = {};
__export(jokes_error_exports, {
  default: () => JokesError
});
function JokesError() {
  throw new Error("This route is no joking with us.");
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
var import_styled2 = __toESM(require("@emotion/styled")), import_typewriter_effect = __toESM(require("typewriter-effect")), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), Main = (0, import_styled2.default)("main")`
  height: 100vh;
  background: linear-gradient(145.44deg, #F2F4FA 0%, #FAFBFC 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`, Section = (0, import_styled2.default)("section")`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-top: auto;
  position: absolute;
  left: 0;
  right: 0;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`, Header = (0, import_styled2.default)("header")`
  background: rgba(255, 255, 255, 0.31);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 1.875rem;
  position: relative;
  transition: box-shadow .3s ease-in-out;
  display: flex;
  margin-bottom: 1.875rem;
  @media only screen and (max-width: 991px) {
    flex-direction: column;
  }
`, Profile = (0, import_styled2.default)("div")`
  display: flex;
  align-items: start;
  flex: 0 0 50%;
  padding-right: 1.875rem;
  position: relative;
  &:before {
    content: '';
    background-color: #EBF0F2;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 1px;
  }
  @media only screen and (max-width: 991px){
    align-items: center;
    flex-direction: column;
    padding-right: 0;
    padding-bottom: 1.25rem;
    text-align: center;

    &:before {
      position: absolute;
      top: auto;
      right: 0;
      bottom: 0;
      height: 1px;
      width: 100%;
    }
  }
`, ProfileBox = (0, import_styled2.default)("div")`
  margin-top: -4.125rem;
  height: 10.125rem;
  overflow: hidden;
  width: 10.125rem;
  @media only screen and (max-width: 991px){
    margin-top: -5rem;
    margin-bottom: 1.25rem;
  }
`, ProfileSpace = (0, import_styled2.default)("div")`
  height: 2.255rem;
  background: rgba(255, 255, 255, 0.31);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  @media only screen and (max-width: 991px){
    height: 3.136rem;
  }
`, ImagePeople = (0, import_styled2.default)("img")`
  position: relative;
  z-index: 1;
  margin-top: -2.255rem;
  height: 100%;
  width: 100%;
  border-radius: 20px;
  @media only screen and (max-width: 991px){
    margin-top: -3.136rem;
  }
`, Information = (0, import_styled2.default)("div")`
  margin-left: 1.5rem;
  @media only screen and (max-width: 991px){
    margin-left: 0;
  }
`, InformationName = (0, import_styled2.default)("h4")`
  margin-bottom: 0.125rem;
  color: #3B4B5E;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  line-height: 1.3;
  font-size: 1.5rem;
  margin-top: 0;
`, InformationJob = (0, import_styled2.default)("div")`
  font-size: 0.875rem;
  display: inline-flex;
  align-items: center;
`, InformationLink = (0, import_styled2.default)("span")`
  display: flex;
  align-items: center;
  font-size: 1rem;
  list-style: none;
  margin-top: 0.5rem;
  margin-bottom: 0;
  padding: 0;
  @media only screen and (max-width: 991px){
    justify-content: center;
  }
`, InformationLinkItem = (0, import_styled2.default)("li")`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
`, InformationLinkLink = (0, import_styled2.default)("a")`
  color: #5E6E80;
  text-decoration: none;
`, InformationLinkItemSVG = (0, import_styled2.default)("svg")`
  height: 1.5rem;
  width: 1.5rem;
`, InformationData = (0, import_styled2.default)("div")`
  display: flex;
  align-items: start;
  flex: 0 0 50%;
  padding-left: 1.875rem;
  @media only screen and (max-width: 991px) {
    padding-left: 0;
    padding-top: 1.875rem;
  }
  @media only screen and (max-width: 580px) {
    flex-direction: column;
    padding-top: 1.5rem;
  }
`, InformationDataItem = (0, import_styled2.default)("div")`
  list-style: none;
  margin-bottom: 0;
  width: 100%;
  margin-top: 0;
  @media (max-width: 991px) {
    padding: 0;
    text-align: center;
  }
`, InformationDataDetail = (0, import_styled2.default)("div")`
  margin-bottom: 1rem;
  word-break: break-all;
`, InformationDataDetailTitle = (0, import_styled2.default)("span")`
  color: rgba(94, 110, 128, 0.8);
  font-size: 0.75rem;
  display: block;
  text-transform: uppercase;
`;
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Main, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Header, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Profile, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProfileBox, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ProfileSpace, {}, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 203,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ImagePeople, { src: "/images/main-photo.svg", alt: "Gilang Adi Sasongko" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 204,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 202,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Information, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InformationName, { children: "Gilang Adi Sasongko" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 207,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InformationJob, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_typewriter_effect.default, { options: { strings: ["Software Engineer!", "Golang, PHP, Elixir, NodeJS, Flutter"], autoStart: !0, loop: !0 } }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 208,
          columnNumber: 45
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 208,
          columnNumber: 29
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InformationLink, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InformationLinkItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InformationLinkLink, { href: "https://www.linkedin.com/in/gilangas/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InformationLinkItemSVG, { fill: "#0072b1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 50 50", width: "240px", height: "240px", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 212,
            columnNumber: 164
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 212,
            columnNumber: 41
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 211,
            columnNumber: 37
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 210,
            columnNumber: 33
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InformationLinkItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InformationLinkLink, { href: "https://github.com/gilang-as", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InformationLinkItemSVG, { fill: "#171515", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 30 30", width: "240px", height: "240px", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 217,
            columnNumber: 165
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 217,
            columnNumber: 41
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 216,
            columnNumber: 37
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 215,
            columnNumber: 33
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 209,
          columnNumber: 29
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 206,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 201,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InformationData, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InformationDataItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InformationDataDetail, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InformationDataDetailTitle, { children: "Email" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 225,
          columnNumber: 52
        }, this),
        "me@gilang.dev"
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 225,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 224,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InformationDataItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InformationDataDetail, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(InformationDataDetailTitle, { children: "Location" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 230,
          columnNumber: 52
        }, this),
        "Jakarta, Indonesia"
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 230,
        columnNumber: 29
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 228,
        columnNumber: 25
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 223,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 200,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 199,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 198,
    columnNumber: 9
  }, this);
}

// app/routes/jokes.tsx
var jokes_exports = {};
__export(jokes_exports, {
  default: () => Jokes
});
var import_styled3 = __toESM(require("@emotion/styled")), import_react8 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), Container2 = (0, import_styled3.default)("div")`
  background-color: #d6d6d6;
`;
function Jokes() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Container2, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h1", { children: "Jokes" }, void 0, !1, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 11,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: "This route works fine." }, void 0, !1, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 12,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react8.Link, { to: "/", children: "Back to home" }, void 0, !1, {
      fileName: "app/routes/jokes.tsx",
      lineNumber: 13,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/jokes.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "95d88abf", entry: { module: "/build/entry.client-3N6K2HIY.js", imports: ["/build/_shared/chunk-JP3NGNYN.js", "/build/_shared/chunk-OZL2XMJ4.js", "/build/_shared/chunk-BLMYZOJW.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-T3QFXNID.js", imports: ["/build/_shared/chunk-AEYANUH5.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-TAU5D6AO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes": { id: "routes/jokes", parentId: "root", path: "jokes", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes-IXATDWY6.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/jokes-error": { id: "routes/jokes-error", parentId: "root", path: "jokes-error", index: void 0, caseSensitive: void 0, module: "/build/routes/jokes-error-FR3ALCRU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-95D88ABF.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/jokes-error": {
    id: "routes/jokes-error",
    parentId: "root",
    path: "jokes-error",
    index: void 0,
    caseSensitive: void 0,
    module: jokes_error_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/jokes": {
    id: "routes/jokes",
    parentId: "root",
    path: "jokes",
    index: void 0,
    caseSensitive: void 0,
    module: jokes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
