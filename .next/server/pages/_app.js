const CHUNK_PUBLIC_PATH = "server/pages/_app.js";
const runtime = require("../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_9c024f66._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__4f801237._.js");
runtime.getOrInstantiateRuntimeModule("[project]/src/pages/_app.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/src/pages/_app.js [ssr] (ecmascript)", CHUNK_PUBLIC_PATH).exports;
