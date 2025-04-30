(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/[root of the server]__830d39d5._.js", {

"[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/// <reference path="../../../shared/runtime-types.d.ts" />
/// <reference path="../../runtime/base/dev-globals.d.ts" />
/// <reference path="../../runtime/base/dev-protocol.d.ts" />
/// <reference path="../../runtime/base/dev-extensions.ts" />
__turbopack_context__.s({
    "connect": (()=>connect),
    "setHooks": (()=>setHooks),
    "subscribeToUpdate": (()=>subscribeToUpdate)
});
function connect({ addMessageListener, sendMessage, onUpdateError = console.error }) {
    addMessageListener((msg)=>{
        switch(msg.type){
            case "turbopack-connected":
                handleSocketConnected(sendMessage);
                break;
            default:
                try {
                    if (Array.isArray(msg.data)) {
                        for(let i = 0; i < msg.data.length; i++){
                            handleSocketMessage(msg.data[i]);
                        }
                    } else {
                        handleSocketMessage(msg.data);
                    }
                    applyAggregatedUpdates();
                } catch (e) {
                    console.warn("[Fast Refresh] performing full reload\n\n" + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + "You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n" + "Consider migrating the non-React component export to a separate file and importing it into both files.\n\n" + "It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n" + "Fast Refresh requires at least one parent function component in your React tree.");
                    onUpdateError(e);
                    location.reload();
                }
                break;
        }
    });
    const queued = globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS;
    if (queued != null && !Array.isArray(queued)) {
        throw new Error("A separate HMR handler was already registered");
    }
    globalThis.TURBOPACK_CHUNK_UPDATE_LISTENERS = {
        push: ([chunkPath, callback])=>{
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    };
    if (Array.isArray(queued)) {
        for (const [chunkPath, callback] of queued){
            subscribeToChunkUpdate(chunkPath, sendMessage, callback);
        }
    }
}
const updateCallbackSets = new Map();
function sendJSON(sendMessage, message) {
    sendMessage(JSON.stringify(message));
}
function resourceKey(resource) {
    return JSON.stringify({
        path: resource.path,
        headers: resource.headers || null
    });
}
function subscribeToUpdates(sendMessage, resource) {
    sendJSON(sendMessage, {
        type: "turbopack-subscribe",
        ...resource
    });
    return ()=>{
        sendJSON(sendMessage, {
            type: "turbopack-unsubscribe",
            ...resource
        });
    };
}
function handleSocketConnected(sendMessage) {
    for (const key of updateCallbackSets.keys()){
        subscribeToUpdates(sendMessage, JSON.parse(key));
    }
}
// we aggregate all pending updates until the issues are resolved
const chunkListsWithPendingUpdates = new Map();
function aggregateUpdates(msg) {
    const key = resourceKey(msg.resource);
    let aggregated = chunkListsWithPendingUpdates.get(key);
    if (aggregated) {
        aggregated.instruction = mergeChunkListUpdates(aggregated.instruction, msg.instruction);
    } else {
        chunkListsWithPendingUpdates.set(key, msg);
    }
}
function applyAggregatedUpdates() {
    if (chunkListsWithPendingUpdates.size === 0) return;
    hooks.beforeRefresh();
    for (const msg of chunkListsWithPendingUpdates.values()){
        triggerUpdate(msg);
    }
    chunkListsWithPendingUpdates.clear();
    finalizeUpdate();
}
function mergeChunkListUpdates(updateA, updateB) {
    let chunks;
    if (updateA.chunks != null) {
        if (updateB.chunks == null) {
            chunks = updateA.chunks;
        } else {
            chunks = mergeChunkListChunks(updateA.chunks, updateB.chunks);
        }
    } else if (updateB.chunks != null) {
        chunks = updateB.chunks;
    }
    let merged;
    if (updateA.merged != null) {
        if (updateB.merged == null) {
            merged = updateA.merged;
        } else {
            // Since `merged` is an array of updates, we need to merge them all into
            // one, consistent update.
            // Since there can only be `EcmascriptMergeUpdates` in the array, there is
            // no need to key on the `type` field.
            let update = updateA.merged[0];
            for(let i = 1; i < updateA.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateA.merged[i]);
            }
            for(let i = 0; i < updateB.merged.length; i++){
                update = mergeChunkListEcmascriptMergedUpdates(update, updateB.merged[i]);
            }
            merged = [
                update
            ];
        }
    } else if (updateB.merged != null) {
        merged = updateB.merged;
    }
    return {
        type: "ChunkListUpdate",
        chunks,
        merged
    };
}
function mergeChunkListChunks(chunksA, chunksB) {
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    return chunks;
}
function mergeChunkUpdates(updateA, updateB) {
    if (updateA.type === "added" && updateB.type === "deleted" || updateA.type === "deleted" && updateB.type === "added") {
        return undefined;
    }
    if (updateA.type === "partial") {
        invariant(updateA.instruction, "Partial updates are unsupported");
    }
    if (updateB.type === "partial") {
        invariant(updateB.instruction, "Partial updates are unsupported");
    }
    return undefined;
}
function mergeChunkListEcmascriptMergedUpdates(mergedA, mergedB) {
    const entries = mergeEcmascriptChunkEntries(mergedA.entries, mergedB.entries);
    const chunks = mergeEcmascriptChunksUpdates(mergedA.chunks, mergedB.chunks);
    return {
        type: "EcmascriptMergedUpdate",
        entries,
        chunks
    };
}
function mergeEcmascriptChunkEntries(entriesA, entriesB) {
    return {
        ...entriesA,
        ...entriesB
    };
}
function mergeEcmascriptChunksUpdates(chunksA, chunksB) {
    if (chunksA == null) {
        return chunksB;
    }
    if (chunksB == null) {
        return chunksA;
    }
    const chunks = {};
    for (const [chunkPath, chunkUpdateA] of Object.entries(chunksA)){
        const chunkUpdateB = chunksB[chunkPath];
        if (chunkUpdateB != null) {
            const mergedUpdate = mergeEcmascriptChunkUpdates(chunkUpdateA, chunkUpdateB);
            if (mergedUpdate != null) {
                chunks[chunkPath] = mergedUpdate;
            }
        } else {
            chunks[chunkPath] = chunkUpdateA;
        }
    }
    for (const [chunkPath, chunkUpdateB] of Object.entries(chunksB)){
        if (chunks[chunkPath] == null) {
            chunks[chunkPath] = chunkUpdateB;
        }
    }
    if (Object.keys(chunks).length === 0) {
        return undefined;
    }
    return chunks;
}
function mergeEcmascriptChunkUpdates(updateA, updateB) {
    if (updateA.type === "added" && updateB.type === "deleted") {
        // These two completely cancel each other out.
        return undefined;
    }
    if (updateA.type === "deleted" && updateB.type === "added") {
        const added = [];
        const deleted = [];
        const deletedModules = new Set(updateA.modules ?? []);
        const addedModules = new Set(updateB.modules ?? []);
        for (const moduleId of addedModules){
            if (!deletedModules.has(moduleId)) {
                added.push(moduleId);
            }
        }
        for (const moduleId of deletedModules){
            if (!addedModules.has(moduleId)) {
                deleted.push(moduleId);
            }
        }
        if (added.length === 0 && deleted.length === 0) {
            return undefined;
        }
        return {
            type: "partial",
            added,
            deleted
        };
    }
    if (updateA.type === "partial" && updateB.type === "partial") {
        const added = new Set([
            ...updateA.added ?? [],
            ...updateB.added ?? []
        ]);
        const deleted = new Set([
            ...updateA.deleted ?? [],
            ...updateB.deleted ?? []
        ]);
        if (updateB.added != null) {
            for (const moduleId of updateB.added){
                deleted.delete(moduleId);
            }
        }
        if (updateB.deleted != null) {
            for (const moduleId of updateB.deleted){
                added.delete(moduleId);
            }
        }
        return {
            type: "partial",
            added: [
                ...added
            ],
            deleted: [
                ...deleted
            ]
        };
    }
    if (updateA.type === "added" && updateB.type === "partial") {
        const modules = new Set([
            ...updateA.modules ?? [],
            ...updateB.added ?? []
        ]);
        for (const moduleId of updateB.deleted ?? []){
            modules.delete(moduleId);
        }
        return {
            type: "added",
            modules: [
                ...modules
            ]
        };
    }
    if (updateA.type === "partial" && updateB.type === "deleted") {
        // We could eagerly return `updateB` here, but this would potentially be
        // incorrect if `updateA` has added modules.
        const modules = new Set(updateB.modules ?? []);
        if (updateA.added != null) {
            for (const moduleId of updateA.added){
                modules.delete(moduleId);
            }
        }
        return {
            type: "deleted",
            modules: [
                ...modules
            ]
        };
    }
    // Any other update combination is invalid.
    return undefined;
}
function invariant(_, message) {
    throw new Error(`Invariant: ${message}`);
}
const CRITICAL = [
    "bug",
    "error",
    "fatal"
];
function compareByList(list, a, b) {
    const aI = list.indexOf(a) + 1 || list.length;
    const bI = list.indexOf(b) + 1 || list.length;
    return aI - bI;
}
const chunksWithIssues = new Map();
function emitIssues() {
    const issues = [];
    const deduplicationSet = new Set();
    for (const [_, chunkIssues] of chunksWithIssues){
        for (const chunkIssue of chunkIssues){
            if (deduplicationSet.has(chunkIssue.formatted)) continue;
            issues.push(chunkIssue);
            deduplicationSet.add(chunkIssue.formatted);
        }
    }
    sortIssues(issues);
    hooks.issues(issues);
}
function handleIssues(msg) {
    const key = resourceKey(msg.resource);
    let hasCriticalIssues = false;
    for (const issue of msg.issues){
        if (CRITICAL.includes(issue.severity)) {
            hasCriticalIssues = true;
        }
    }
    if (msg.issues.length > 0) {
        chunksWithIssues.set(key, msg.issues);
    } else if (chunksWithIssues.has(key)) {
        chunksWithIssues.delete(key);
    }
    emitIssues();
    return hasCriticalIssues;
}
const SEVERITY_ORDER = [
    "bug",
    "fatal",
    "error",
    "warning",
    "info",
    "log"
];
const CATEGORY_ORDER = [
    "parse",
    "resolve",
    "code generation",
    "rendering",
    "typescript",
    "other"
];
function sortIssues(issues) {
    issues.sort((a, b)=>{
        const first = compareByList(SEVERITY_ORDER, a.severity, b.severity);
        if (first !== 0) return first;
        return compareByList(CATEGORY_ORDER, a.category, b.category);
    });
}
const hooks = {
    beforeRefresh: ()=>{},
    refresh: ()=>{},
    buildOk: ()=>{},
    issues: (_issues)=>{}
};
function setHooks(newHooks) {
    Object.assign(hooks, newHooks);
}
function handleSocketMessage(msg) {
    sortIssues(msg.issues);
    handleIssues(msg);
    switch(msg.type){
        case "issues":
            break;
        case "partial":
            // aggregate updates
            aggregateUpdates(msg);
            break;
        default:
            // run single update
            const runHooks = chunkListsWithPendingUpdates.size === 0;
            if (runHooks) hooks.beforeRefresh();
            triggerUpdate(msg);
            if (runHooks) finalizeUpdate();
            break;
    }
}
function finalizeUpdate() {
    hooks.refresh();
    hooks.buildOk();
    // This is used by the Next.js integration test suite to notify it when HMR
    // updates have been completed.
    // TODO: Only run this in test environments (gate by `process.env.__NEXT_TEST_MODE`)
    if (globalThis.__NEXT_HMR_CB) {
        globalThis.__NEXT_HMR_CB();
        globalThis.__NEXT_HMR_CB = null;
    }
}
function subscribeToChunkUpdate(chunkListPath, sendMessage, callback) {
    return subscribeToUpdate({
        path: chunkListPath
    }, sendMessage, callback);
}
function subscribeToUpdate(resource, sendMessage, callback) {
    const key = resourceKey(resource);
    let callbackSet;
    const existingCallbackSet = updateCallbackSets.get(key);
    if (!existingCallbackSet) {
        callbackSet = {
            callbacks: new Set([
                callback
            ]),
            unsubscribe: subscribeToUpdates(sendMessage, resource)
        };
        updateCallbackSets.set(key, callbackSet);
    } else {
        existingCallbackSet.callbacks.add(callback);
        callbackSet = existingCallbackSet;
    }
    return ()=>{
        callbackSet.callbacks.delete(callback);
        if (callbackSet.callbacks.size === 0) {
            callbackSet.unsubscribe();
            updateCallbackSets.delete(key);
        }
    };
}
function triggerUpdate(msg) {
    const key = resourceKey(msg.resource);
    const callbackSet = updateCallbackSets.get(key);
    if (!callbackSet) {
        return;
    }
    for (const callback of callbackSet.callbacks){
        callback(msg);
    }
    if (msg.type === "notFound") {
        // This indicates that the resource which we subscribed to either does not exist or
        // has been deleted. In either case, we should clear all update callbacks, so if a
        // new subscription is created for the same resource, it will send a new "subscribe"
        // message to the server.
        // No need to send an "unsubscribe" message to the server, it will have already
        // dropped the update stream before sending the "notFound" message.
        updateCallbackSets.delete(key);
    }
}
}}),
"[project]/src/wp-templates/single.js [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SingleTemplate)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/graphql-tag/lib/index.js [client] (ecmascript)");
;
;
function SingleTemplate(props) {
    const post = props.data?.post;
    if (!post) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "py-12 bg-gray-50 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-[1440px] mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-gray-800 mb-6",
                        children: "Post Not Found"
                    }, void 0, false, {
                        fileName: "[project]/src/wp-templates/single.js",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "The post you’re looking for doesn’t exist or has been removed."
                    }, void 0, false, {
                        fileName: "[project]/src/wp-templates/single.js",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/blog",
                        className: "mt-4 inline-block px-6 py-3 bg-dark-blue text-white rounded hover:bg-blue-900 transition-colors",
                        children: "Back to Blog"
                    }, void 0, false, {
                        fileName: "[project]/src/wp-templates/single.js",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/wp-templates/single.js",
                lineNumber: 9,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/wp-templates/single.js",
            lineNumber: 8,
            columnNumber: 7
        }, this);
    }
    const { title, content } = post;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "py-12 bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-[1440px] mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold text-gray-800 mb-6 text-center",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/wp-templates/single.js",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "prose prose-lg prose-dark-blue max-w-none mx-auto",
                    dangerouslySetInnerHTML: {
                        __html: content
                    }
                }, void 0, false, {
                    fileName: "[project]/src/wp-templates/single.js",
                    lineNumber: 29,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/wp-templates/single.js",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/wp-templates/single.js",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_c = SingleTemplate;
SingleTemplate.query = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$graphql$2d$tag$2f$lib$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["gql"]`
  query GetPost($uri: ID!) {
    post(id: $uri, idType: URI) {
      title
      content
    }
  }
`;
SingleTemplate.variables = (seedQuery, ctx)=>{
    return {
        uri: seedQuery?.uri
    };
};
var _c;
__turbopack_context__.k.register(_c, "SingleTemplate");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/wp-templates/index.js [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$wp$2d$templates$2f$single$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/wp-templates/single.js [client] (ecmascript)");
;
const templates = {
    single: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$wp$2d$templates$2f$single$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"]
};
const __TURBOPACK__default__export__ = templates;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/possibleTypes.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"CategoryConnection\":[\"RootQueryToCategoryConnection\",\"CategoryToAncestorsCategoryConnection\",\"CategoryToCategoryConnection\",\"PostToCategoryConnection\"],\"Connection\":[\"RootQueryToCategoryConnection\",\"TermNodeToEnqueuedScriptConnection\",\"TermNodeToEnqueuedStylesheetConnection\",\"CategoryToAncestorsCategoryConnection\",\"CategoryToCategoryConnection\",\"CategoryToContentNodeConnection\",\"ContentTypeToTaxonomyConnection\",\"TaxonomyToContentTypeConnection\",\"TaxonomyToTermNodeConnection\",\"ContentTypeToContentNodeConnection\",\"UserToCommentConnection\",\"CommentToCommentConnection\",\"UserToEnqueuedScriptConnection\",\"UserToEnqueuedStylesheetConnection\",\"UserToMediaItemConnection\",\"HierarchicalContentNodeToContentNodeAncestorsConnection\",\"HierarchicalContentNodeToContentNodeChildrenConnection\",\"ContentNodeToEnqueuedScriptConnection\",\"ContentNodeToEnqueuedStylesheetConnection\",\"MediaItemToCommentConnection\",\"UserToPageConnection\",\"PageToCommentConnection\",\"PageToRevisionConnection\",\"UserToPostConnection\",\"PostToPostConnection\",\"PostToCategoryConnection\",\"PostToCommentConnection\",\"PostToPostFormatConnection\",\"PostFormatToContentNodeConnection\",\"PostFormatToPostConnection\",\"PostToRevisionConnection\",\"PostToTagConnection\",\"TagToContentNodeConnection\",\"TagToPostConnection\",\"PostToTermNodeConnection\",\"UserToRevisionsConnection\",\"UserToUserRoleConnection\",\"CategoryToPostConnection\",\"RootQueryToCommentConnection\",\"RootQueryToContentNodeConnection\",\"RootQueryToContentTypeConnection\",\"RootQueryToMediaItemConnection\",\"MenuToMenuItemConnection\",\"MenuItemToMenuItemConnection\",\"RootQueryToMenuItemConnection\",\"RootQueryToMenuConnection\",\"RootQueryToPageConnection\",\"RootQueryToPluginConnection\",\"RootQueryToPostFormatConnection\",\"RootQueryToPostConnection\",\"RootQueryToEnqueuedScriptConnection\",\"RootQueryToEnqueuedStylesheetConnection\",\"RootQueryToRevisionsConnection\",\"RootQueryToTagConnection\",\"RootQueryToTaxonomyConnection\",\"RootQueryToTermNodeConnection\",\"RootQueryToThemeConnection\",\"RootQueryToUserRoleConnection\",\"RootQueryToUserConnection\"],\"Edge\":[\"TermNodeToEnqueuedScriptConnectionEdge\",\"TermNodeToEnqueuedStylesheetConnectionEdge\",\"CategoryToAncestorsCategoryConnectionEdge\",\"CategoryToCategoryConnectionEdge\",\"ContentNodeToContentTypeConnectionEdge\",\"TaxonomyToContentTypeConnectionEdge\",\"TaxonomyToTermNodeConnectionEdge\",\"ContentTypeToTaxonomyConnectionEdge\",\"ContentTypeToContentNodeConnectionEdge\",\"ContentNodeToEditLockConnectionEdge\",\"CommentToCommenterConnectionEdge\",\"CommentToContentNodeConnectionEdge\",\"CommentToParentCommentConnectionEdge\",\"CommentToCommentConnectionEdge\",\"UserToCommentConnectionEdge\",\"UserToEnqueuedScriptConnectionEdge\",\"UserToEnqueuedStylesheetConnectionEdge\",\"NodeWithAuthorToUserConnectionEdge\",\"HierarchicalContentNodeToContentNodeAncestorsConnectionEdge\",\"HierarchicalContentNodeToContentNodeChildrenConnectionEdge\",\"ContentNodeToEnqueuedScriptConnectionEdge\",\"ContentNodeToEnqueuedStylesheetConnectionEdge\",\"ContentNodeToEditLastConnectionEdge\",\"HierarchicalContentNodeToParentContentNodeConnectionEdge\",\"MediaItemToCommentConnectionEdge\",\"UserToMediaItemConnectionEdge\",\"NodeWithFeaturedImageToMediaItemConnectionEdge\",\"NodeWithRevisionsToContentNodeConnectionEdge\",\"PageToCommentConnectionEdge\",\"PageToPreviewConnectionEdge\",\"PageToRevisionConnectionEdge\",\"UserToPageConnectionEdge\",\"PostToPostConnectionEdge\",\"PostToCategoryConnectionEdge\",\"PostToCommentConnectionEdge\",\"PostToParentConnectionEdge\",\"PostFormatToContentNodeConnectionEdge\",\"PostFormatToPostConnectionEdge\",\"PostFormatToTaxonomyConnectionEdge\",\"PostToPostFormatConnectionEdge\",\"PostToPreviewConnectionEdge\",\"PostToRevisionConnectionEdge\",\"TagToContentNodeConnectionEdge\",\"TagToPostConnectionEdge\",\"TagToTaxonomyConnectionEdge\",\"PostToTagConnectionEdge\",\"PostToTermNodeConnectionEdge\",\"UserToPostConnectionEdge\",\"UserToRevisionsConnectionEdge\",\"UserToUserRoleConnectionEdge\",\"CategoryToContentNodeConnectionEdge\",\"CategoryToParentCategoryConnectionEdge\",\"CategoryToPostConnectionEdge\",\"CategoryToTaxonomyConnectionEdge\",\"RootQueryToCategoryConnectionEdge\",\"RootQueryToCommentConnectionEdge\",\"RootQueryToContentNodeConnectionEdge\",\"RootQueryToContentTypeConnectionEdge\",\"RootQueryToMediaItemConnectionEdge\",\"MenuItemToMenuItemConnectionEdge\",\"MenuItemToMenuItemLinkableConnectionEdge\",\"MenuItemToMenuConnectionEdge\",\"MenuToMenuItemConnectionEdge\",\"RootQueryToMenuItemConnectionEdge\",\"RootQueryToMenuConnectionEdge\",\"RootQueryToPageConnectionEdge\",\"RootQueryToPluginConnectionEdge\",\"RootQueryToPostFormatConnectionEdge\",\"RootQueryToPostConnectionEdge\",\"RootQueryToEnqueuedScriptConnectionEdge\",\"RootQueryToEnqueuedStylesheetConnectionEdge\",\"RootQueryToRevisionsConnectionEdge\",\"RootQueryToTagConnectionEdge\",\"RootQueryToTaxonomyConnectionEdge\",\"RootQueryToTermNodeConnectionEdge\",\"RootQueryToThemeConnectionEdge\",\"RootQueryToUserRoleConnectionEdge\",\"RootQueryToUserConnectionEdge\"],\"Node\":[\"Category\",\"EnqueuedScript\",\"EnqueuedStylesheet\",\"ContentType\",\"Taxonomy\",\"User\",\"Comment\",\"MediaItem\",\"Page\",\"Post\",\"PostFormat\",\"Tag\",\"UserRole\",\"Menu\",\"MenuItem\",\"Plugin\",\"Theme\",\"CommentAuthor\"],\"PageInfo\":[\"TermNodeToEnqueuedScriptConnectionPageInfo\",\"TermNodeToEnqueuedStylesheetConnectionPageInfo\",\"CategoryToAncestorsCategoryConnectionPageInfo\",\"CategoryToCategoryConnectionPageInfo\",\"TaxonomyToContentTypeConnectionPageInfo\",\"TaxonomyToTermNodeConnectionPageInfo\",\"ContentTypeToTaxonomyConnectionPageInfo\",\"ContentTypeToContentNodeConnectionPageInfo\",\"CommentToCommentConnectionPageInfo\",\"UserToCommentConnectionPageInfo\",\"UserToEnqueuedScriptConnectionPageInfo\",\"UserToEnqueuedStylesheetConnectionPageInfo\",\"HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo\",\"HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo\",\"ContentNodeToEnqueuedScriptConnectionPageInfo\",\"ContentNodeToEnqueuedStylesheetConnectionPageInfo\",\"MediaItemToCommentConnectionPageInfo\",\"UserToMediaItemConnectionPageInfo\",\"PageToCommentConnectionPageInfo\",\"PageToRevisionConnectionPageInfo\",\"UserToPageConnectionPageInfo\",\"PostToPostConnectionPageInfo\",\"PostToCategoryConnectionPageInfo\",\"PostToCommentConnectionPageInfo\",\"PostFormatToContentNodeConnectionPageInfo\",\"PostFormatToPostConnectionPageInfo\",\"PostToPostFormatConnectionPageInfo\",\"PostToRevisionConnectionPageInfo\",\"TagToContentNodeConnectionPageInfo\",\"TagToPostConnectionPageInfo\",\"PostToTagConnectionPageInfo\",\"PostToTermNodeConnectionPageInfo\",\"UserToPostConnectionPageInfo\",\"UserToRevisionsConnectionPageInfo\",\"UserToUserRoleConnectionPageInfo\",\"CategoryToContentNodeConnectionPageInfo\",\"CategoryToPostConnectionPageInfo\",\"RootQueryToCategoryConnectionPageInfo\",\"RootQueryToCommentConnectionPageInfo\",\"RootQueryToContentNodeConnectionPageInfo\",\"RootQueryToContentTypeConnectionPageInfo\",\"RootQueryToMediaItemConnectionPageInfo\",\"MenuItemToMenuItemConnectionPageInfo\",\"MenuToMenuItemConnectionPageInfo\",\"RootQueryToMenuItemConnectionPageInfo\",\"RootQueryToMenuConnectionPageInfo\",\"RootQueryToPageConnectionPageInfo\",\"RootQueryToPluginConnectionPageInfo\",\"RootQueryToPostFormatConnectionPageInfo\",\"RootQueryToPostConnectionPageInfo\",\"RootQueryToEnqueuedScriptConnectionPageInfo\",\"RootQueryToEnqueuedStylesheetConnectionPageInfo\",\"RootQueryToRevisionsConnectionPageInfo\",\"RootQueryToTagConnectionPageInfo\",\"RootQueryToTaxonomyConnectionPageInfo\",\"RootQueryToTermNodeConnectionPageInfo\",\"RootQueryToThemeConnectionPageInfo\",\"RootQueryToUserRoleConnectionPageInfo\",\"RootQueryToUserConnectionPageInfo\"],\"CategoryConnectionEdge\":[\"CategoryToAncestorsCategoryConnectionEdge\",\"CategoryToCategoryConnectionEdge\",\"PostToCategoryConnectionEdge\",\"CategoryToParentCategoryConnectionEdge\",\"RootQueryToCategoryConnectionEdge\"],\"TermNode\":[\"Category\",\"PostFormat\",\"Tag\"],\"UniformResourceIdentifiable\":[\"Category\",\"ContentType\",\"User\",\"Comment\",\"MediaItem\",\"Page\",\"Post\",\"PostFormat\",\"Tag\"],\"EnqueuedScriptConnection\":[\"TermNodeToEnqueuedScriptConnection\",\"UserToEnqueuedScriptConnection\",\"ContentNodeToEnqueuedScriptConnection\",\"RootQueryToEnqueuedScriptConnection\"],\"EnqueuedScriptConnectionEdge\":[\"TermNodeToEnqueuedScriptConnectionEdge\",\"UserToEnqueuedScriptConnectionEdge\",\"ContentNodeToEnqueuedScriptConnectionEdge\",\"RootQueryToEnqueuedScriptConnectionEdge\"],\"EnqueuedAsset\":[\"EnqueuedScript\",\"EnqueuedStylesheet\"],\"EnqueuedScriptConnectionPageInfo\":[\"TermNodeToEnqueuedScriptConnectionPageInfo\",\"UserToEnqueuedScriptConnectionPageInfo\",\"ContentNodeToEnqueuedScriptConnectionPageInfo\",\"RootQueryToEnqueuedScriptConnectionPageInfo\"],\"WPPageInfo\":[\"TermNodeToEnqueuedScriptConnectionPageInfo\",\"TermNodeToEnqueuedStylesheetConnectionPageInfo\",\"CategoryToAncestorsCategoryConnectionPageInfo\",\"CategoryToCategoryConnectionPageInfo\",\"TaxonomyToContentTypeConnectionPageInfo\",\"TaxonomyToTermNodeConnectionPageInfo\",\"ContentTypeToTaxonomyConnectionPageInfo\",\"ContentTypeToContentNodeConnectionPageInfo\",\"CommentToCommentConnectionPageInfo\",\"UserToCommentConnectionPageInfo\",\"UserToEnqueuedScriptConnectionPageInfo\",\"UserToEnqueuedStylesheetConnectionPageInfo\",\"HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo\",\"HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo\",\"ContentNodeToEnqueuedScriptConnectionPageInfo\",\"ContentNodeToEnqueuedStylesheetConnectionPageInfo\",\"MediaItemToCommentConnectionPageInfo\",\"UserToMediaItemConnectionPageInfo\",\"PageToCommentConnectionPageInfo\",\"PageToRevisionConnectionPageInfo\",\"UserToPageConnectionPageInfo\",\"PostToPostConnectionPageInfo\",\"PostToCategoryConnectionPageInfo\",\"PostToCommentConnectionPageInfo\",\"PostFormatToContentNodeConnectionPageInfo\",\"PostFormatToPostConnectionPageInfo\",\"PostToPostFormatConnectionPageInfo\",\"PostToRevisionConnectionPageInfo\",\"TagToContentNodeConnectionPageInfo\",\"TagToPostConnectionPageInfo\",\"PostToTagConnectionPageInfo\",\"PostToTermNodeConnectionPageInfo\",\"UserToPostConnectionPageInfo\",\"UserToRevisionsConnectionPageInfo\",\"UserToUserRoleConnectionPageInfo\",\"CategoryToContentNodeConnectionPageInfo\",\"CategoryToPostConnectionPageInfo\",\"RootQueryToCategoryConnectionPageInfo\",\"RootQueryToCommentConnectionPageInfo\",\"RootQueryToContentNodeConnectionPageInfo\",\"RootQueryToContentTypeConnectionPageInfo\",\"RootQueryToMediaItemConnectionPageInfo\",\"MenuItemToMenuItemConnectionPageInfo\",\"MenuToMenuItemConnectionPageInfo\",\"RootQueryToMenuItemConnectionPageInfo\",\"RootQueryToMenuConnectionPageInfo\",\"RootQueryToPageConnectionPageInfo\",\"RootQueryToPluginConnectionPageInfo\",\"RootQueryToPostFormatConnectionPageInfo\",\"RootQueryToPostConnectionPageInfo\",\"RootQueryToEnqueuedScriptConnectionPageInfo\",\"RootQueryToEnqueuedStylesheetConnectionPageInfo\",\"RootQueryToRevisionsConnectionPageInfo\",\"RootQueryToTagConnectionPageInfo\",\"RootQueryToTaxonomyConnectionPageInfo\",\"RootQueryToTermNodeConnectionPageInfo\",\"RootQueryToThemeConnectionPageInfo\",\"RootQueryToUserRoleConnectionPageInfo\",\"RootQueryToUserConnectionPageInfo\"],\"EnqueuedStylesheetConnection\":[\"TermNodeToEnqueuedStylesheetConnection\",\"UserToEnqueuedStylesheetConnection\",\"ContentNodeToEnqueuedStylesheetConnection\",\"RootQueryToEnqueuedStylesheetConnection\"],\"EnqueuedStylesheetConnectionEdge\":[\"TermNodeToEnqueuedStylesheetConnectionEdge\",\"UserToEnqueuedStylesheetConnectionEdge\",\"ContentNodeToEnqueuedStylesheetConnectionEdge\",\"RootQueryToEnqueuedStylesheetConnectionEdge\"],\"EnqueuedStylesheetConnectionPageInfo\":[\"TermNodeToEnqueuedStylesheetConnectionPageInfo\",\"UserToEnqueuedStylesheetConnectionPageInfo\",\"ContentNodeToEnqueuedStylesheetConnectionPageInfo\",\"RootQueryToEnqueuedStylesheetConnectionPageInfo\"],\"DatabaseIdentifier\":[\"Category\",\"User\",\"Comment\",\"MediaItem\",\"Page\",\"Post\",\"PostFormat\",\"Tag\",\"Menu\",\"MenuItem\",\"CommentAuthor\"],\"HierarchicalTermNode\":[\"Category\"],\"HierarchicalNode\":[\"Category\",\"MediaItem\",\"Page\"],\"MenuItemLinkable\":[\"Category\",\"Page\",\"Post\",\"Tag\"],\"CategoryConnectionPageInfo\":[\"CategoryToAncestorsCategoryConnectionPageInfo\",\"CategoryToCategoryConnectionPageInfo\",\"PostToCategoryConnectionPageInfo\",\"RootQueryToCategoryConnectionPageInfo\"],\"ContentNodeConnection\":[\"CategoryToContentNodeConnection\",\"ContentTypeToContentNodeConnection\",\"HierarchicalContentNodeToContentNodeAncestorsConnection\",\"HierarchicalContentNodeToContentNodeChildrenConnection\",\"PostFormatToContentNodeConnection\",\"TagToContentNodeConnection\",\"UserToRevisionsConnection\",\"RootQueryToContentNodeConnection\",\"RootQueryToRevisionsConnection\"],\"ContentNodeConnectionEdge\":[\"ContentTypeToContentNodeConnectionEdge\",\"CommentToContentNodeConnectionEdge\",\"HierarchicalContentNodeToContentNodeAncestorsConnectionEdge\",\"HierarchicalContentNodeToContentNodeChildrenConnectionEdge\",\"HierarchicalContentNodeToParentContentNodeConnectionEdge\",\"NodeWithRevisionsToContentNodeConnectionEdge\",\"PostFormatToContentNodeConnectionEdge\",\"TagToContentNodeConnectionEdge\",\"UserToRevisionsConnectionEdge\",\"CategoryToContentNodeConnectionEdge\",\"RootQueryToContentNodeConnectionEdge\",\"RootQueryToRevisionsConnectionEdge\"],\"ContentNode\":[\"MediaItem\",\"Page\",\"Post\"],\"OneToOneConnection\":[\"ContentNodeToContentTypeConnectionEdge\",\"ContentNodeToEditLockConnectionEdge\",\"CommentToCommenterConnectionEdge\",\"CommentToContentNodeConnectionEdge\",\"CommentToParentCommentConnectionEdge\",\"NodeWithAuthorToUserConnectionEdge\",\"ContentNodeToEditLastConnectionEdge\",\"HierarchicalContentNodeToParentContentNodeConnectionEdge\",\"NodeWithFeaturedImageToMediaItemConnectionEdge\",\"NodeWithRevisionsToContentNodeConnectionEdge\",\"PageToPreviewConnectionEdge\",\"PostToParentConnectionEdge\",\"PostFormatToTaxonomyConnectionEdge\",\"PostToPreviewConnectionEdge\",\"TagToTaxonomyConnectionEdge\",\"CategoryToParentCategoryConnectionEdge\",\"CategoryToTaxonomyConnectionEdge\",\"MenuItemToMenuItemLinkableConnectionEdge\",\"MenuItemToMenuConnectionEdge\"],\"ContentTypeConnectionEdge\":[\"ContentNodeToContentTypeConnectionEdge\",\"TaxonomyToContentTypeConnectionEdge\",\"RootQueryToContentTypeConnectionEdge\"],\"TaxonomyConnection\":[\"ContentTypeToTaxonomyConnection\",\"RootQueryToTaxonomyConnection\"],\"TaxonomyConnectionEdge\":[\"ContentTypeToTaxonomyConnectionEdge\",\"PostFormatToTaxonomyConnectionEdge\",\"TagToTaxonomyConnectionEdge\",\"CategoryToTaxonomyConnectionEdge\",\"RootQueryToTaxonomyConnectionEdge\"],\"ContentTypeConnection\":[\"TaxonomyToContentTypeConnection\",\"RootQueryToContentTypeConnection\"],\"ContentTypeConnectionPageInfo\":[\"TaxonomyToContentTypeConnectionPageInfo\",\"RootQueryToContentTypeConnectionPageInfo\"],\"TermNodeConnection\":[\"TaxonomyToTermNodeConnection\",\"PostToTermNodeConnection\",\"RootQueryToTermNodeConnection\"],\"TermNodeConnectionEdge\":[\"TaxonomyToTermNodeConnectionEdge\",\"PostToTermNodeConnectionEdge\",\"RootQueryToTermNodeConnectionEdge\"],\"TermNodeConnectionPageInfo\":[\"TaxonomyToTermNodeConnectionPageInfo\",\"PostToTermNodeConnectionPageInfo\",\"RootQueryToTermNodeConnectionPageInfo\"],\"TaxonomyConnectionPageInfo\":[\"ContentTypeToTaxonomyConnectionPageInfo\",\"RootQueryToTaxonomyConnectionPageInfo\"],\"ContentNodeConnectionPageInfo\":[\"ContentTypeToContentNodeConnectionPageInfo\",\"HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo\",\"HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo\",\"PostFormatToContentNodeConnectionPageInfo\",\"TagToContentNodeConnectionPageInfo\",\"UserToRevisionsConnectionPageInfo\",\"CategoryToContentNodeConnectionPageInfo\",\"RootQueryToContentNodeConnectionPageInfo\",\"RootQueryToRevisionsConnectionPageInfo\"],\"UserConnectionEdge\":[\"ContentNodeToEditLockConnectionEdge\",\"NodeWithAuthorToUserConnectionEdge\",\"ContentNodeToEditLastConnectionEdge\",\"RootQueryToUserConnectionEdge\"],\"Commenter\":[\"User\",\"CommentAuthor\"],\"CommentConnection\":[\"UserToCommentConnection\",\"CommentToCommentConnection\",\"MediaItemToCommentConnection\",\"PageToCommentConnection\",\"PostToCommentConnection\",\"RootQueryToCommentConnection\"],\"CommentConnectionEdge\":[\"CommentToParentCommentConnectionEdge\",\"CommentToCommentConnectionEdge\",\"UserToCommentConnectionEdge\",\"MediaItemToCommentConnectionEdge\",\"PageToCommentConnectionEdge\",\"PostToCommentConnectionEdge\",\"RootQueryToCommentConnectionEdge\"],\"CommenterConnectionEdge\":[\"CommentToCommenterConnectionEdge\"],\"CommentConnectionPageInfo\":[\"CommentToCommentConnectionPageInfo\",\"UserToCommentConnectionPageInfo\",\"MediaItemToCommentConnectionPageInfo\",\"PageToCommentConnectionPageInfo\",\"PostToCommentConnectionPageInfo\",\"RootQueryToCommentConnectionPageInfo\"],\"MediaItemConnection\":[\"UserToMediaItemConnection\",\"RootQueryToMediaItemConnection\"],\"MediaItemConnectionEdge\":[\"UserToMediaItemConnectionEdge\",\"NodeWithFeaturedImageToMediaItemConnectionEdge\",\"RootQueryToMediaItemConnectionEdge\"],\"NodeWithTemplate\":[\"MediaItem\",\"Page\",\"Post\"],\"ContentTemplate\":[\"DefaultTemplate\",\"Template_FullWidth\"],\"NodeWithTitle\":[\"MediaItem\",\"Page\",\"Post\"],\"NodeWithAuthor\":[\"MediaItem\",\"Page\",\"Post\"],\"NodeWithComments\":[\"MediaItem\",\"Page\",\"Post\"],\"HierarchicalContentNode\":[\"MediaItem\",\"Page\"],\"MediaItemConnectionPageInfo\":[\"UserToMediaItemConnectionPageInfo\",\"RootQueryToMediaItemConnectionPageInfo\"],\"PageConnection\":[\"UserToPageConnection\",\"PageToRevisionConnection\",\"RootQueryToPageConnection\"],\"PageConnectionEdge\":[\"PageToPreviewConnectionEdge\",\"PageToRevisionConnectionEdge\",\"UserToPageConnectionEdge\",\"RootQueryToPageConnectionEdge\"],\"Previewable\":[\"Page\",\"Post\"],\"NodeWithContentEditor\":[\"Page\",\"Post\"],\"NodeWithFeaturedImage\":[\"Page\",\"Post\"],\"NodeWithExcerpt\":[\"Page\",\"Post\"],\"NodeWithRevisions\":[\"Page\",\"Post\"],\"NodeWithPageAttributes\":[\"Page\"],\"PageConnectionPageInfo\":[\"PageToRevisionConnectionPageInfo\",\"UserToPageConnectionPageInfo\",\"RootQueryToPageConnectionPageInfo\"],\"PostConnection\":[\"UserToPostConnection\",\"PostToPostConnection\",\"PostFormatToPostConnection\",\"PostToRevisionConnection\",\"TagToPostConnection\",\"CategoryToPostConnection\",\"RootQueryToPostConnection\"],\"PostConnectionEdge\":[\"PostToPostConnectionEdge\",\"PostToParentConnectionEdge\",\"PostFormatToPostConnectionEdge\",\"PostToPreviewConnectionEdge\",\"PostToRevisionConnectionEdge\",\"TagToPostConnectionEdge\",\"UserToPostConnectionEdge\",\"CategoryToPostConnectionEdge\",\"RootQueryToPostConnectionEdge\"],\"NodeWithTrackbacks\":[\"Post\"],\"PostConnectionPageInfo\":[\"PostToPostConnectionPageInfo\",\"PostFormatToPostConnectionPageInfo\",\"PostToRevisionConnectionPageInfo\",\"TagToPostConnectionPageInfo\",\"UserToPostConnectionPageInfo\",\"CategoryToPostConnectionPageInfo\",\"RootQueryToPostConnectionPageInfo\"],\"PostFormatConnection\":[\"PostToPostFormatConnection\",\"RootQueryToPostFormatConnection\"],\"PostFormatConnectionEdge\":[\"PostToPostFormatConnectionEdge\",\"RootQueryToPostFormatConnectionEdge\"],\"PostFormatConnectionPageInfo\":[\"PostToPostFormatConnectionPageInfo\",\"RootQueryToPostFormatConnectionPageInfo\"],\"TagConnection\":[\"PostToTagConnection\",\"RootQueryToTagConnection\"],\"TagConnectionEdge\":[\"PostToTagConnectionEdge\",\"RootQueryToTagConnectionEdge\"],\"TagConnectionPageInfo\":[\"PostToTagConnectionPageInfo\",\"RootQueryToTagConnectionPageInfo\"],\"UserRoleConnection\":[\"UserToUserRoleConnection\",\"RootQueryToUserRoleConnection\"],\"UserRoleConnectionEdge\":[\"UserToUserRoleConnectionEdge\",\"RootQueryToUserRoleConnectionEdge\"],\"UserRoleConnectionPageInfo\":[\"UserToUserRoleConnectionPageInfo\",\"RootQueryToUserRoleConnectionPageInfo\"],\"MenuItemConnection\":[\"MenuToMenuItemConnection\",\"MenuItemToMenuItemConnection\",\"RootQueryToMenuItemConnection\"],\"MenuItemConnectionEdge\":[\"MenuItemToMenuItemConnectionEdge\",\"MenuToMenuItemConnectionEdge\",\"RootQueryToMenuItemConnectionEdge\"],\"MenuItemConnectionPageInfo\":[\"MenuItemToMenuItemConnectionPageInfo\",\"MenuToMenuItemConnectionPageInfo\",\"RootQueryToMenuItemConnectionPageInfo\"],\"MenuItemLinkableConnectionEdge\":[\"MenuItemToMenuItemLinkableConnectionEdge\"],\"MenuItemObjectUnion\":[\"Post\",\"Page\",\"Category\",\"Tag\"],\"MenuConnectionEdge\":[\"MenuItemToMenuConnectionEdge\",\"RootQueryToMenuConnectionEdge\"],\"MenuConnection\":[\"RootQueryToMenuConnection\"],\"MenuConnectionPageInfo\":[\"RootQueryToMenuConnectionPageInfo\"],\"PluginConnection\":[\"RootQueryToPluginConnection\"],\"PluginConnectionEdge\":[\"RootQueryToPluginConnectionEdge\"],\"PluginConnectionPageInfo\":[\"RootQueryToPluginConnectionPageInfo\"],\"ThemeConnection\":[\"RootQueryToThemeConnection\"],\"ThemeConnectionEdge\":[\"RootQueryToThemeConnectionEdge\"],\"ThemeConnectionPageInfo\":[\"RootQueryToThemeConnectionPageInfo\"],\"UserConnection\":[\"RootQueryToUserConnection\"],\"UserConnectionPageInfo\":[\"RootQueryToUserConnectionPageInfo\"]}"));}}),
"[project]/faust.config.js [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$wp$2d$templates$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/wp-templates/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$possibleTypes$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/possibleTypes.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$faustwp$2f$core$2f$dist$2f$mjs$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@faustwp/core/dist/mjs/index.js [client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$faustwp$2f$core$2f$dist$2f$mjs$2f$config$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@faustwp/core/dist/mjs/config/index.js [client] (ecmascript)");
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$faustwp$2f$core$2f$dist$2f$mjs$2f$config$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["setConfig"])({
    templates: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$wp$2d$templates$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"],
    possibleTypes: __TURBOPACK__imported__module__$5b$project$5d2f$possibleTypes$2e$json__$28$json$29$__["default"]
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/pages/_app.js [client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>App)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/jsx-dev-runtime.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react/index.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$faustwp$2f$core$2f$dist$2f$mjs$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@faustwp/core/dist/mjs/index.js [client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$faustwp$2f$core$2f$dist$2f$mjs$2f$components$2f$FaustProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@faustwp/core/dist/mjs/components/FaustProvider.js [client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$faust$2e$config$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/faust.config.js [client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function App({ Component, pageProps }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$faustwp$2f$core$2f$dist$2f$mjs$2f$components$2f$FaustProvider$2e$js__$5b$client$5d$__$28$ecmascript$29$__["FaustProvider"], {
        pageProps: pageProps,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2f$index$2e$js__$5b$client$5d$__$28$ecmascript$29$__["createElement"])(Component, {
            ...pageProps,
            key: router.asPath,
            __source: {
                fileName: "[project]/src/pages/_app.js",
                lineNumber: 11,
                columnNumber: 7
            },
            __self: this
        })
    }, void 0, false, {
        fileName: "[project]/src/pages/_app.js",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(App, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[next]/entry/page-loader.ts { PAGE => \"[project]/src/pages/_app.js [client] (ecmascript)\" } [client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const PAGE_PATH = "/_app";
(window.__NEXT_P = window.__NEXT_P || []).push([
    PAGE_PATH,
    ()=>{
        return __turbopack_context__.r("[project]/src/pages/_app.js [client] (ecmascript)");
    }
]);
// @ts-expect-error module.hot exists
if (module.hot) {
    // @ts-expect-error module.hot exists
    module.hot.dispose(function() {
        window.__NEXT_P.push([
            PAGE_PATH
        ]);
    });
}
}}),
"[project]/src/pages/_app (hmr-entry)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, m: module } = __turbopack_context__;
{
__turbopack_context__.r("[next]/entry/page-loader.ts { PAGE => \"[project]/src/pages/_app.js [client] (ecmascript)\" } [client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__830d39d5._.js.map