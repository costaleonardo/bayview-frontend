module.exports = {

"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}}),
"[externals]/react [external] (react, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react", () => require("react"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/react/jsx-runtime [external] (react/jsx-runtime, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react/jsx-runtime", () => require("react/jsx-runtime"));

module.exports = mod;
}}),
"[externals]/react-dom [external] (react-dom, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/pages.runtime.dev.js [external] (next/dist/compiled/next-server/pages.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages.runtime.dev.js", () => require("next/dist/compiled/next-server/pages.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/@faustwp/core [external] (@faustwp/core, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@faustwp/core", () => require("@faustwp/core"));

module.exports = mod;
}}),
"[externals]/@apollo/client [external] (@apollo/client, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@apollo/client", () => require("@apollo/client"));

module.exports = mod;
}}),
"[project]/src/wp-templates/single.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>SingleTemplate)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client__$5b$external$5d$__$2840$apollo$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@apollo/client [external] (@apollo/client, cjs)");
;
;
function SingleTemplate(props) {
    const post = props.data?.post;
    if (!post) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "py-12 bg-gray-50 text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "max-w-[1440px] mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-gray-800 mb-6",
                        children: "Post Not Found"
                    }, void 0, false, {
                        fileName: "[project]/src/wp-templates/single.js",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "The post you’re looking for doesn’t exist or has been removed."
                    }, void 0, false, {
                        fileName: "[project]/src/wp-templates/single.js",
                        lineNumber: 11,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("article", {
        className: "py-12 bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "max-w-[1440px] mx-auto px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-bold text-gray-800 mb-6 text-center",
                    children: title
                }, void 0, false, {
                    fileName: "[project]/src/wp-templates/single.js",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
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
SingleTemplate.query = __TURBOPACK__imported__module__$5b$externals$5d2f40$apollo$2f$client__$5b$external$5d$__$2840$apollo$2f$client$2c$__cjs$29$__["gql"]`
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
}}),
"[project]/src/wp-templates/index.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$wp$2d$templates$2f$single$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/wp-templates/single.js [ssr] (ecmascript)");
;
const templates = {
    single: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$wp$2d$templates$2f$single$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
};
const __TURBOPACK__default__export__ = templates;
}}),
"[project]/possibleTypes.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"CategoryConnection\":[\"RootQueryToCategoryConnection\",\"CategoryToAncestorsCategoryConnection\",\"CategoryToCategoryConnection\",\"PostToCategoryConnection\"],\"Connection\":[\"RootQueryToCategoryConnection\",\"TermNodeToEnqueuedScriptConnection\",\"TermNodeToEnqueuedStylesheetConnection\",\"CategoryToAncestorsCategoryConnection\",\"CategoryToCategoryConnection\",\"CategoryToContentNodeConnection\",\"ContentTypeToTaxonomyConnection\",\"TaxonomyToContentTypeConnection\",\"TaxonomyToTermNodeConnection\",\"ContentTypeToContentNodeConnection\",\"UserToCommentConnection\",\"CommentToCommentConnection\",\"UserToEnqueuedScriptConnection\",\"UserToEnqueuedStylesheetConnection\",\"UserToMediaItemConnection\",\"HierarchicalContentNodeToContentNodeAncestorsConnection\",\"HierarchicalContentNodeToContentNodeChildrenConnection\",\"ContentNodeToEnqueuedScriptConnection\",\"ContentNodeToEnqueuedStylesheetConnection\",\"MediaItemToCommentConnection\",\"UserToPageConnection\",\"PageToCommentConnection\",\"PageToRevisionConnection\",\"UserToPostConnection\",\"PostToPostConnection\",\"PostToCategoryConnection\",\"PostToCommentConnection\",\"PostToPostFormatConnection\",\"PostFormatToContentNodeConnection\",\"PostFormatToPostConnection\",\"PostToRevisionConnection\",\"PostToTagConnection\",\"TagToContentNodeConnection\",\"TagToPostConnection\",\"PostToTermNodeConnection\",\"UserToRevisionsConnection\",\"UserToUserRoleConnection\",\"CategoryToPostConnection\",\"RootQueryToCommentConnection\",\"RootQueryToContentNodeConnection\",\"RootQueryToContentTypeConnection\",\"RootQueryToMediaItemConnection\",\"MenuToMenuItemConnection\",\"MenuItemToMenuItemConnection\",\"RootQueryToMenuItemConnection\",\"RootQueryToMenuConnection\",\"RootQueryToPageConnection\",\"RootQueryToPluginConnection\",\"RootQueryToPostFormatConnection\",\"RootQueryToPostConnection\",\"RootQueryToEnqueuedScriptConnection\",\"RootQueryToEnqueuedStylesheetConnection\",\"RootQueryToRevisionsConnection\",\"RootQueryToTagConnection\",\"RootQueryToTaxonomyConnection\",\"RootQueryToTermNodeConnection\",\"RootQueryToThemeConnection\",\"RootQueryToUserRoleConnection\",\"RootQueryToUserConnection\"],\"Edge\":[\"TermNodeToEnqueuedScriptConnectionEdge\",\"TermNodeToEnqueuedStylesheetConnectionEdge\",\"CategoryToAncestorsCategoryConnectionEdge\",\"CategoryToCategoryConnectionEdge\",\"ContentNodeToContentTypeConnectionEdge\",\"TaxonomyToContentTypeConnectionEdge\",\"TaxonomyToTermNodeConnectionEdge\",\"ContentTypeToTaxonomyConnectionEdge\",\"ContentTypeToContentNodeConnectionEdge\",\"ContentNodeToEditLockConnectionEdge\",\"CommentToCommenterConnectionEdge\",\"CommentToContentNodeConnectionEdge\",\"CommentToParentCommentConnectionEdge\",\"CommentToCommentConnectionEdge\",\"UserToCommentConnectionEdge\",\"UserToEnqueuedScriptConnectionEdge\",\"UserToEnqueuedStylesheetConnectionEdge\",\"NodeWithAuthorToUserConnectionEdge\",\"HierarchicalContentNodeToContentNodeAncestorsConnectionEdge\",\"HierarchicalContentNodeToContentNodeChildrenConnectionEdge\",\"ContentNodeToEnqueuedScriptConnectionEdge\",\"ContentNodeToEnqueuedStylesheetConnectionEdge\",\"ContentNodeToEditLastConnectionEdge\",\"HierarchicalContentNodeToParentContentNodeConnectionEdge\",\"MediaItemToCommentConnectionEdge\",\"UserToMediaItemConnectionEdge\",\"NodeWithFeaturedImageToMediaItemConnectionEdge\",\"NodeWithRevisionsToContentNodeConnectionEdge\",\"PageToCommentConnectionEdge\",\"PageToPreviewConnectionEdge\",\"PageToRevisionConnectionEdge\",\"UserToPageConnectionEdge\",\"PostToPostConnectionEdge\",\"PostToCategoryConnectionEdge\",\"PostToCommentConnectionEdge\",\"PostToParentConnectionEdge\",\"PostFormatToContentNodeConnectionEdge\",\"PostFormatToPostConnectionEdge\",\"PostFormatToTaxonomyConnectionEdge\",\"PostToPostFormatConnectionEdge\",\"PostToPreviewConnectionEdge\",\"PostToRevisionConnectionEdge\",\"TagToContentNodeConnectionEdge\",\"TagToPostConnectionEdge\",\"TagToTaxonomyConnectionEdge\",\"PostToTagConnectionEdge\",\"PostToTermNodeConnectionEdge\",\"UserToPostConnectionEdge\",\"UserToRevisionsConnectionEdge\",\"UserToUserRoleConnectionEdge\",\"CategoryToContentNodeConnectionEdge\",\"CategoryToParentCategoryConnectionEdge\",\"CategoryToPostConnectionEdge\",\"CategoryToTaxonomyConnectionEdge\",\"RootQueryToCategoryConnectionEdge\",\"RootQueryToCommentConnectionEdge\",\"RootQueryToContentNodeConnectionEdge\",\"RootQueryToContentTypeConnectionEdge\",\"RootQueryToMediaItemConnectionEdge\",\"MenuItemToMenuItemConnectionEdge\",\"MenuItemToMenuItemLinkableConnectionEdge\",\"MenuItemToMenuConnectionEdge\",\"MenuToMenuItemConnectionEdge\",\"RootQueryToMenuItemConnectionEdge\",\"RootQueryToMenuConnectionEdge\",\"RootQueryToPageConnectionEdge\",\"RootQueryToPluginConnectionEdge\",\"RootQueryToPostFormatConnectionEdge\",\"RootQueryToPostConnectionEdge\",\"RootQueryToEnqueuedScriptConnectionEdge\",\"RootQueryToEnqueuedStylesheetConnectionEdge\",\"RootQueryToRevisionsConnectionEdge\",\"RootQueryToTagConnectionEdge\",\"RootQueryToTaxonomyConnectionEdge\",\"RootQueryToTermNodeConnectionEdge\",\"RootQueryToThemeConnectionEdge\",\"RootQueryToUserRoleConnectionEdge\",\"RootQueryToUserConnectionEdge\"],\"Node\":[\"Category\",\"EnqueuedScript\",\"EnqueuedStylesheet\",\"ContentType\",\"Taxonomy\",\"User\",\"Comment\",\"MediaItem\",\"Page\",\"Post\",\"PostFormat\",\"Tag\",\"UserRole\",\"Menu\",\"MenuItem\",\"Plugin\",\"Theme\",\"CommentAuthor\"],\"PageInfo\":[\"TermNodeToEnqueuedScriptConnectionPageInfo\",\"TermNodeToEnqueuedStylesheetConnectionPageInfo\",\"CategoryToAncestorsCategoryConnectionPageInfo\",\"CategoryToCategoryConnectionPageInfo\",\"TaxonomyToContentTypeConnectionPageInfo\",\"TaxonomyToTermNodeConnectionPageInfo\",\"ContentTypeToTaxonomyConnectionPageInfo\",\"ContentTypeToContentNodeConnectionPageInfo\",\"CommentToCommentConnectionPageInfo\",\"UserToCommentConnectionPageInfo\",\"UserToEnqueuedScriptConnectionPageInfo\",\"UserToEnqueuedStylesheetConnectionPageInfo\",\"HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo\",\"HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo\",\"ContentNodeToEnqueuedScriptConnectionPageInfo\",\"ContentNodeToEnqueuedStylesheetConnectionPageInfo\",\"MediaItemToCommentConnectionPageInfo\",\"UserToMediaItemConnectionPageInfo\",\"PageToCommentConnectionPageInfo\",\"PageToRevisionConnectionPageInfo\",\"UserToPageConnectionPageInfo\",\"PostToPostConnectionPageInfo\",\"PostToCategoryConnectionPageInfo\",\"PostToCommentConnectionPageInfo\",\"PostFormatToContentNodeConnectionPageInfo\",\"PostFormatToPostConnectionPageInfo\",\"PostToPostFormatConnectionPageInfo\",\"PostToRevisionConnectionPageInfo\",\"TagToContentNodeConnectionPageInfo\",\"TagToPostConnectionPageInfo\",\"PostToTagConnectionPageInfo\",\"PostToTermNodeConnectionPageInfo\",\"UserToPostConnectionPageInfo\",\"UserToRevisionsConnectionPageInfo\",\"UserToUserRoleConnectionPageInfo\",\"CategoryToContentNodeConnectionPageInfo\",\"CategoryToPostConnectionPageInfo\",\"RootQueryToCategoryConnectionPageInfo\",\"RootQueryToCommentConnectionPageInfo\",\"RootQueryToContentNodeConnectionPageInfo\",\"RootQueryToContentTypeConnectionPageInfo\",\"RootQueryToMediaItemConnectionPageInfo\",\"MenuItemToMenuItemConnectionPageInfo\",\"MenuToMenuItemConnectionPageInfo\",\"RootQueryToMenuItemConnectionPageInfo\",\"RootQueryToMenuConnectionPageInfo\",\"RootQueryToPageConnectionPageInfo\",\"RootQueryToPluginConnectionPageInfo\",\"RootQueryToPostFormatConnectionPageInfo\",\"RootQueryToPostConnectionPageInfo\",\"RootQueryToEnqueuedScriptConnectionPageInfo\",\"RootQueryToEnqueuedStylesheetConnectionPageInfo\",\"RootQueryToRevisionsConnectionPageInfo\",\"RootQueryToTagConnectionPageInfo\",\"RootQueryToTaxonomyConnectionPageInfo\",\"RootQueryToTermNodeConnectionPageInfo\",\"RootQueryToThemeConnectionPageInfo\",\"RootQueryToUserRoleConnectionPageInfo\",\"RootQueryToUserConnectionPageInfo\"],\"CategoryConnectionEdge\":[\"CategoryToAncestorsCategoryConnectionEdge\",\"CategoryToCategoryConnectionEdge\",\"PostToCategoryConnectionEdge\",\"CategoryToParentCategoryConnectionEdge\",\"RootQueryToCategoryConnectionEdge\"],\"TermNode\":[\"Category\",\"PostFormat\",\"Tag\"],\"UniformResourceIdentifiable\":[\"Category\",\"ContentType\",\"User\",\"Comment\",\"MediaItem\",\"Page\",\"Post\",\"PostFormat\",\"Tag\"],\"EnqueuedScriptConnection\":[\"TermNodeToEnqueuedScriptConnection\",\"UserToEnqueuedScriptConnection\",\"ContentNodeToEnqueuedScriptConnection\",\"RootQueryToEnqueuedScriptConnection\"],\"EnqueuedScriptConnectionEdge\":[\"TermNodeToEnqueuedScriptConnectionEdge\",\"UserToEnqueuedScriptConnectionEdge\",\"ContentNodeToEnqueuedScriptConnectionEdge\",\"RootQueryToEnqueuedScriptConnectionEdge\"],\"EnqueuedAsset\":[\"EnqueuedScript\",\"EnqueuedStylesheet\"],\"EnqueuedScriptConnectionPageInfo\":[\"TermNodeToEnqueuedScriptConnectionPageInfo\",\"UserToEnqueuedScriptConnectionPageInfo\",\"ContentNodeToEnqueuedScriptConnectionPageInfo\",\"RootQueryToEnqueuedScriptConnectionPageInfo\"],\"WPPageInfo\":[\"TermNodeToEnqueuedScriptConnectionPageInfo\",\"TermNodeToEnqueuedStylesheetConnectionPageInfo\",\"CategoryToAncestorsCategoryConnectionPageInfo\",\"CategoryToCategoryConnectionPageInfo\",\"TaxonomyToContentTypeConnectionPageInfo\",\"TaxonomyToTermNodeConnectionPageInfo\",\"ContentTypeToTaxonomyConnectionPageInfo\",\"ContentTypeToContentNodeConnectionPageInfo\",\"CommentToCommentConnectionPageInfo\",\"UserToCommentConnectionPageInfo\",\"UserToEnqueuedScriptConnectionPageInfo\",\"UserToEnqueuedStylesheetConnectionPageInfo\",\"HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo\",\"HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo\",\"ContentNodeToEnqueuedScriptConnectionPageInfo\",\"ContentNodeToEnqueuedStylesheetConnectionPageInfo\",\"MediaItemToCommentConnectionPageInfo\",\"UserToMediaItemConnectionPageInfo\",\"PageToCommentConnectionPageInfo\",\"PageToRevisionConnectionPageInfo\",\"UserToPageConnectionPageInfo\",\"PostToPostConnectionPageInfo\",\"PostToCategoryConnectionPageInfo\",\"PostToCommentConnectionPageInfo\",\"PostFormatToContentNodeConnectionPageInfo\",\"PostFormatToPostConnectionPageInfo\",\"PostToPostFormatConnectionPageInfo\",\"PostToRevisionConnectionPageInfo\",\"TagToContentNodeConnectionPageInfo\",\"TagToPostConnectionPageInfo\",\"PostToTagConnectionPageInfo\",\"PostToTermNodeConnectionPageInfo\",\"UserToPostConnectionPageInfo\",\"UserToRevisionsConnectionPageInfo\",\"UserToUserRoleConnectionPageInfo\",\"CategoryToContentNodeConnectionPageInfo\",\"CategoryToPostConnectionPageInfo\",\"RootQueryToCategoryConnectionPageInfo\",\"RootQueryToCommentConnectionPageInfo\",\"RootQueryToContentNodeConnectionPageInfo\",\"RootQueryToContentTypeConnectionPageInfo\",\"RootQueryToMediaItemConnectionPageInfo\",\"MenuItemToMenuItemConnectionPageInfo\",\"MenuToMenuItemConnectionPageInfo\",\"RootQueryToMenuItemConnectionPageInfo\",\"RootQueryToMenuConnectionPageInfo\",\"RootQueryToPageConnectionPageInfo\",\"RootQueryToPluginConnectionPageInfo\",\"RootQueryToPostFormatConnectionPageInfo\",\"RootQueryToPostConnectionPageInfo\",\"RootQueryToEnqueuedScriptConnectionPageInfo\",\"RootQueryToEnqueuedStylesheetConnectionPageInfo\",\"RootQueryToRevisionsConnectionPageInfo\",\"RootQueryToTagConnectionPageInfo\",\"RootQueryToTaxonomyConnectionPageInfo\",\"RootQueryToTermNodeConnectionPageInfo\",\"RootQueryToThemeConnectionPageInfo\",\"RootQueryToUserRoleConnectionPageInfo\",\"RootQueryToUserConnectionPageInfo\"],\"EnqueuedStylesheetConnection\":[\"TermNodeToEnqueuedStylesheetConnection\",\"UserToEnqueuedStylesheetConnection\",\"ContentNodeToEnqueuedStylesheetConnection\",\"RootQueryToEnqueuedStylesheetConnection\"],\"EnqueuedStylesheetConnectionEdge\":[\"TermNodeToEnqueuedStylesheetConnectionEdge\",\"UserToEnqueuedStylesheetConnectionEdge\",\"ContentNodeToEnqueuedStylesheetConnectionEdge\",\"RootQueryToEnqueuedStylesheetConnectionEdge\"],\"EnqueuedStylesheetConnectionPageInfo\":[\"TermNodeToEnqueuedStylesheetConnectionPageInfo\",\"UserToEnqueuedStylesheetConnectionPageInfo\",\"ContentNodeToEnqueuedStylesheetConnectionPageInfo\",\"RootQueryToEnqueuedStylesheetConnectionPageInfo\"],\"DatabaseIdentifier\":[\"Category\",\"User\",\"Comment\",\"MediaItem\",\"Page\",\"Post\",\"PostFormat\",\"Tag\",\"Menu\",\"MenuItem\",\"CommentAuthor\"],\"HierarchicalTermNode\":[\"Category\"],\"HierarchicalNode\":[\"Category\",\"MediaItem\",\"Page\"],\"MenuItemLinkable\":[\"Category\",\"Page\",\"Post\",\"Tag\"],\"CategoryConnectionPageInfo\":[\"CategoryToAncestorsCategoryConnectionPageInfo\",\"CategoryToCategoryConnectionPageInfo\",\"PostToCategoryConnectionPageInfo\",\"RootQueryToCategoryConnectionPageInfo\"],\"ContentNodeConnection\":[\"CategoryToContentNodeConnection\",\"ContentTypeToContentNodeConnection\",\"HierarchicalContentNodeToContentNodeAncestorsConnection\",\"HierarchicalContentNodeToContentNodeChildrenConnection\",\"PostFormatToContentNodeConnection\",\"TagToContentNodeConnection\",\"UserToRevisionsConnection\",\"RootQueryToContentNodeConnection\",\"RootQueryToRevisionsConnection\"],\"ContentNodeConnectionEdge\":[\"ContentTypeToContentNodeConnectionEdge\",\"CommentToContentNodeConnectionEdge\",\"HierarchicalContentNodeToContentNodeAncestorsConnectionEdge\",\"HierarchicalContentNodeToContentNodeChildrenConnectionEdge\",\"HierarchicalContentNodeToParentContentNodeConnectionEdge\",\"NodeWithRevisionsToContentNodeConnectionEdge\",\"PostFormatToContentNodeConnectionEdge\",\"TagToContentNodeConnectionEdge\",\"UserToRevisionsConnectionEdge\",\"CategoryToContentNodeConnectionEdge\",\"RootQueryToContentNodeConnectionEdge\",\"RootQueryToRevisionsConnectionEdge\"],\"ContentNode\":[\"MediaItem\",\"Page\",\"Post\"],\"OneToOneConnection\":[\"ContentNodeToContentTypeConnectionEdge\",\"ContentNodeToEditLockConnectionEdge\",\"CommentToCommenterConnectionEdge\",\"CommentToContentNodeConnectionEdge\",\"CommentToParentCommentConnectionEdge\",\"NodeWithAuthorToUserConnectionEdge\",\"ContentNodeToEditLastConnectionEdge\",\"HierarchicalContentNodeToParentContentNodeConnectionEdge\",\"NodeWithFeaturedImageToMediaItemConnectionEdge\",\"NodeWithRevisionsToContentNodeConnectionEdge\",\"PageToPreviewConnectionEdge\",\"PostToParentConnectionEdge\",\"PostFormatToTaxonomyConnectionEdge\",\"PostToPreviewConnectionEdge\",\"TagToTaxonomyConnectionEdge\",\"CategoryToParentCategoryConnectionEdge\",\"CategoryToTaxonomyConnectionEdge\",\"MenuItemToMenuItemLinkableConnectionEdge\",\"MenuItemToMenuConnectionEdge\"],\"ContentTypeConnectionEdge\":[\"ContentNodeToContentTypeConnectionEdge\",\"TaxonomyToContentTypeConnectionEdge\",\"RootQueryToContentTypeConnectionEdge\"],\"TaxonomyConnection\":[\"ContentTypeToTaxonomyConnection\",\"RootQueryToTaxonomyConnection\"],\"TaxonomyConnectionEdge\":[\"ContentTypeToTaxonomyConnectionEdge\",\"PostFormatToTaxonomyConnectionEdge\",\"TagToTaxonomyConnectionEdge\",\"CategoryToTaxonomyConnectionEdge\",\"RootQueryToTaxonomyConnectionEdge\"],\"ContentTypeConnection\":[\"TaxonomyToContentTypeConnection\",\"RootQueryToContentTypeConnection\"],\"ContentTypeConnectionPageInfo\":[\"TaxonomyToContentTypeConnectionPageInfo\",\"RootQueryToContentTypeConnectionPageInfo\"],\"TermNodeConnection\":[\"TaxonomyToTermNodeConnection\",\"PostToTermNodeConnection\",\"RootQueryToTermNodeConnection\"],\"TermNodeConnectionEdge\":[\"TaxonomyToTermNodeConnectionEdge\",\"PostToTermNodeConnectionEdge\",\"RootQueryToTermNodeConnectionEdge\"],\"TermNodeConnectionPageInfo\":[\"TaxonomyToTermNodeConnectionPageInfo\",\"PostToTermNodeConnectionPageInfo\",\"RootQueryToTermNodeConnectionPageInfo\"],\"TaxonomyConnectionPageInfo\":[\"ContentTypeToTaxonomyConnectionPageInfo\",\"RootQueryToTaxonomyConnectionPageInfo\"],\"ContentNodeConnectionPageInfo\":[\"ContentTypeToContentNodeConnectionPageInfo\",\"HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo\",\"HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo\",\"PostFormatToContentNodeConnectionPageInfo\",\"TagToContentNodeConnectionPageInfo\",\"UserToRevisionsConnectionPageInfo\",\"CategoryToContentNodeConnectionPageInfo\",\"RootQueryToContentNodeConnectionPageInfo\",\"RootQueryToRevisionsConnectionPageInfo\"],\"UserConnectionEdge\":[\"ContentNodeToEditLockConnectionEdge\",\"NodeWithAuthorToUserConnectionEdge\",\"ContentNodeToEditLastConnectionEdge\",\"RootQueryToUserConnectionEdge\"],\"Commenter\":[\"User\",\"CommentAuthor\"],\"CommentConnection\":[\"UserToCommentConnection\",\"CommentToCommentConnection\",\"MediaItemToCommentConnection\",\"PageToCommentConnection\",\"PostToCommentConnection\",\"RootQueryToCommentConnection\"],\"CommentConnectionEdge\":[\"CommentToParentCommentConnectionEdge\",\"CommentToCommentConnectionEdge\",\"UserToCommentConnectionEdge\",\"MediaItemToCommentConnectionEdge\",\"PageToCommentConnectionEdge\",\"PostToCommentConnectionEdge\",\"RootQueryToCommentConnectionEdge\"],\"CommenterConnectionEdge\":[\"CommentToCommenterConnectionEdge\"],\"CommentConnectionPageInfo\":[\"CommentToCommentConnectionPageInfo\",\"UserToCommentConnectionPageInfo\",\"MediaItemToCommentConnectionPageInfo\",\"PageToCommentConnectionPageInfo\",\"PostToCommentConnectionPageInfo\",\"RootQueryToCommentConnectionPageInfo\"],\"MediaItemConnection\":[\"UserToMediaItemConnection\",\"RootQueryToMediaItemConnection\"],\"MediaItemConnectionEdge\":[\"UserToMediaItemConnectionEdge\",\"NodeWithFeaturedImageToMediaItemConnectionEdge\",\"RootQueryToMediaItemConnectionEdge\"],\"NodeWithTemplate\":[\"MediaItem\",\"Page\",\"Post\"],\"ContentTemplate\":[\"DefaultTemplate\",\"Template_FullWidth\"],\"NodeWithTitle\":[\"MediaItem\",\"Page\",\"Post\"],\"NodeWithAuthor\":[\"MediaItem\",\"Page\",\"Post\"],\"NodeWithComments\":[\"MediaItem\",\"Page\",\"Post\"],\"HierarchicalContentNode\":[\"MediaItem\",\"Page\"],\"MediaItemConnectionPageInfo\":[\"UserToMediaItemConnectionPageInfo\",\"RootQueryToMediaItemConnectionPageInfo\"],\"PageConnection\":[\"UserToPageConnection\",\"PageToRevisionConnection\",\"RootQueryToPageConnection\"],\"PageConnectionEdge\":[\"PageToPreviewConnectionEdge\",\"PageToRevisionConnectionEdge\",\"UserToPageConnectionEdge\",\"RootQueryToPageConnectionEdge\"],\"Previewable\":[\"Page\",\"Post\"],\"NodeWithContentEditor\":[\"Page\",\"Post\"],\"NodeWithFeaturedImage\":[\"Page\",\"Post\"],\"NodeWithExcerpt\":[\"Page\",\"Post\"],\"NodeWithRevisions\":[\"Page\",\"Post\"],\"NodeWithPageAttributes\":[\"Page\"],\"PageConnectionPageInfo\":[\"PageToRevisionConnectionPageInfo\",\"UserToPageConnectionPageInfo\",\"RootQueryToPageConnectionPageInfo\"],\"PostConnection\":[\"UserToPostConnection\",\"PostToPostConnection\",\"PostFormatToPostConnection\",\"PostToRevisionConnection\",\"TagToPostConnection\",\"CategoryToPostConnection\",\"RootQueryToPostConnection\"],\"PostConnectionEdge\":[\"PostToPostConnectionEdge\",\"PostToParentConnectionEdge\",\"PostFormatToPostConnectionEdge\",\"PostToPreviewConnectionEdge\",\"PostToRevisionConnectionEdge\",\"TagToPostConnectionEdge\",\"UserToPostConnectionEdge\",\"CategoryToPostConnectionEdge\",\"RootQueryToPostConnectionEdge\"],\"NodeWithTrackbacks\":[\"Post\"],\"PostConnectionPageInfo\":[\"PostToPostConnectionPageInfo\",\"PostFormatToPostConnectionPageInfo\",\"PostToRevisionConnectionPageInfo\",\"TagToPostConnectionPageInfo\",\"UserToPostConnectionPageInfo\",\"CategoryToPostConnectionPageInfo\",\"RootQueryToPostConnectionPageInfo\"],\"PostFormatConnection\":[\"PostToPostFormatConnection\",\"RootQueryToPostFormatConnection\"],\"PostFormatConnectionEdge\":[\"PostToPostFormatConnectionEdge\",\"RootQueryToPostFormatConnectionEdge\"],\"PostFormatConnectionPageInfo\":[\"PostToPostFormatConnectionPageInfo\",\"RootQueryToPostFormatConnectionPageInfo\"],\"TagConnection\":[\"PostToTagConnection\",\"RootQueryToTagConnection\"],\"TagConnectionEdge\":[\"PostToTagConnectionEdge\",\"RootQueryToTagConnectionEdge\"],\"TagConnectionPageInfo\":[\"PostToTagConnectionPageInfo\",\"RootQueryToTagConnectionPageInfo\"],\"UserRoleConnection\":[\"UserToUserRoleConnection\",\"RootQueryToUserRoleConnection\"],\"UserRoleConnectionEdge\":[\"UserToUserRoleConnectionEdge\",\"RootQueryToUserRoleConnectionEdge\"],\"UserRoleConnectionPageInfo\":[\"UserToUserRoleConnectionPageInfo\",\"RootQueryToUserRoleConnectionPageInfo\"],\"MenuItemConnection\":[\"MenuToMenuItemConnection\",\"MenuItemToMenuItemConnection\",\"RootQueryToMenuItemConnection\"],\"MenuItemConnectionEdge\":[\"MenuItemToMenuItemConnectionEdge\",\"MenuToMenuItemConnectionEdge\",\"RootQueryToMenuItemConnectionEdge\"],\"MenuItemConnectionPageInfo\":[\"MenuItemToMenuItemConnectionPageInfo\",\"MenuToMenuItemConnectionPageInfo\",\"RootQueryToMenuItemConnectionPageInfo\"],\"MenuItemLinkableConnectionEdge\":[\"MenuItemToMenuItemLinkableConnectionEdge\"],\"MenuItemObjectUnion\":[\"Post\",\"Page\",\"Category\",\"Tag\"],\"MenuConnectionEdge\":[\"MenuItemToMenuConnectionEdge\",\"RootQueryToMenuConnectionEdge\"],\"MenuConnection\":[\"RootQueryToMenuConnection\"],\"MenuConnectionPageInfo\":[\"RootQueryToMenuConnectionPageInfo\"],\"PluginConnection\":[\"RootQueryToPluginConnection\"],\"PluginConnectionEdge\":[\"RootQueryToPluginConnectionEdge\"],\"PluginConnectionPageInfo\":[\"RootQueryToPluginConnectionPageInfo\"],\"ThemeConnection\":[\"RootQueryToThemeConnection\"],\"ThemeConnectionEdge\":[\"RootQueryToThemeConnectionEdge\"],\"ThemeConnectionPageInfo\":[\"RootQueryToThemeConnectionPageInfo\"],\"UserConnection\":[\"RootQueryToUserConnection\"],\"UserConnectionPageInfo\":[\"RootQueryToUserConnectionPageInfo\"]}"));}}),
"[project]/faust.config.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$wp$2d$templates$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/wp-templates/index.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$possibleTypes$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/possibleTypes.json (json)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$faustwp$2f$core__$5b$external$5d$__$2840$faustwp$2f$core$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@faustwp/core [external] (@faustwp/core, cjs)");
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$externals$5d2f40$faustwp$2f$core__$5b$external$5d$__$2840$faustwp$2f$core$2c$__cjs$29$__["setConfig"])({
    templates: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$wp$2d$templates$2f$index$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
    possibleTypes: __TURBOPACK__imported__module__$5b$project$5d2f$possibleTypes$2e$json__$28$json$29$__["default"]
});
}}),
"[project]/src/pages/_app.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>App)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f40$faustwp$2f$core__$5b$external$5d$__$2840$faustwp$2f$core$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@faustwp/core [external] (@faustwp/core, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$faust$2e$config$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/faust.config.js [ssr] (ecmascript)");
;
;
;
;
;
;
function App({ Component, pageProps }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f40$faustwp$2f$core__$5b$external$5d$__$2840$faustwp$2f$core$2c$__cjs$29$__["FaustProvider"], {
        pageProps: pageProps,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createElement"])(Component, {
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
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__367c59d2._.js.map