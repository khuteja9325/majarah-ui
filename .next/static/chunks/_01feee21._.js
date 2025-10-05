(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/sanity/env.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "apiVersion": (()=>apiVersion),
    "dataset": (()=>dataset),
    "projectId": (()=>projectId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const apiVersion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-07-20';
const dataset = assertValue(("TURBOPACK compile-time value", "production"), 'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET');
const projectId = assertValue(("TURBOPACK compile-time value", "o4eknloj"), 'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID');
function assertValue(v, errorMessage) {
    if (v === undefined) {
        throw new Error(errorMessage);
    }
    return v;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/schemaTypes/contactForm.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const contactFormSchema = {
    name: 'organizationContact',
    title: 'Organization Contact Submissions',
    type: 'document',
    fields: [
        {
            name: 'contactType',
            title: 'Contact Type',
            type: 'string',
            initialValue: ()=>'organization',
            readOnly: true
        },
        {
            name: 'businessName',
            title: 'Business Name',
            type: 'string',
            validation: (Rule)=>Rule.required()
        },
        {
            name: 'businessType',
            title: 'Business Type',
            type: 'string',
            validation: (Rule)=>Rule.required()
        },
        {
            name: 'fullName',
            title: 'Full Name',
            type: 'string',
            validation: (Rule)=>Rule.required()
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule)=>Rule.required().email()
        },
        {
            name: 'countryCode',
            title: 'Country Code',
            type: 'string'
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
            validation: (Rule)=>Rule.required()
        },
        {
            name: 'selectedDate',
            title: 'Date of Submission',
            type: 'datetime'
        },
        {
            name: 'primaryInterest',
            title: 'Primary Interest',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ],
            validation: (Rule)=>Rule.required().min(1)
        },
        {
            name: 'otherInterests',
            title: 'Other Interests',
            type: 'text',
            validation: (Rule)=>Rule.max(500)
        },
        {
            name: 'inquiry',
            title: 'Inquiry Details',
            type: 'text',
            validation: (Rule)=>Rule.required().max(2000)
        },
        {
            name: 'budget',
            title: 'Budget (Monthly)',
            type: 'string',
            validation: (Rule)=>Rule.min(0)
        },
        {
            name: 'businessSize',
            title: 'Business Size',
            type: 'string'
        },
        {
            name: 'yearsInBusiness',
            title: 'Years in Business',
            type: 'string'
        },
        {
            name: 'preferredCallTime',
            title: 'Preferred Call Time',
            type: 'string'
        },
        {
            name: 'referralSource',
            title: 'Referral Source',
            type: 'string'
        },
        {
            name: 'submittedAt',
            title: 'Submitted At',
            type: 'datetime',
            initialValue: ()=>new Date().toISOString(),
            readOnly: true
        }
    ]
};
const __TURBOPACK__default__export__ = contactFormSchema;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/schemaTypes/contactFormIndividual.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const contactFormSchemaIndividual = {
    name: 'individualContact',
    title: 'Individual Contact Submissions',
    type: 'document',
    fields: [
        {
            name: 'contactType',
            title: 'Contact Type',
            type: 'string',
            initialValue: ()=>'individual',
            readOnly: true
        },
        {
            name: 'fullName',
            title: 'Full Name',
            type: 'string',
            validation: (Rule)=>Rule.required()
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule)=>Rule.required().email()
        },
        {
            name: 'countryCode',
            title: 'Country Code',
            type: 'string'
        },
        {
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
            validation: (Rule)=>Rule.required()
        },
        {
            name: 'selectedDate',
            title: 'Date of Submission',
            type: 'datetime'
        },
        {
            name: 'primaryInterest',
            title: 'Primary Interest',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ],
            validation: (Rule)=>Rule.required().min(1)
        },
        {
            name: 'otherInterests',
            title: 'Other Interests',
            type: 'text',
            validation: (Rule)=>Rule.max(500)
        },
        {
            name: 'inquiry',
            title: 'Inquiry Details',
            type: 'text',
            validation: (Rule)=>Rule.required().max(2000)
        },
        {
            name: 'budget',
            title: 'Budget (Monthly)',
            type: 'string',
            validation: (Rule)=>Rule.min(0)
        },
        {
            name: 'preferredCallTime',
            title: 'Preferred Call Time',
            type: 'string'
        },
        {
            name: 'referralSource',
            title: 'Referral Source',
            type: 'string',
            validation: (Rule)=>Rule.required()
        },
        {
            name: 'submittedAt',
            title: 'Submitted At',
            type: 'datetime',
            initialValue: ()=>new Date().toISOString(),
            readOnly: true
        }
    ]
};
const __TURBOPACK__default__export__ = contactFormSchemaIndividual;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/schemaTypes/index.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "schema": (()=>schema)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$contactForm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/contactForm.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$contactFormIndividual$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/contactFormIndividual.ts [app-client] (ecmascript)");
;
;
const schema = {
    types: [
        __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$contactForm$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$contactFormIndividual$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/structure.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "structure": (()=>structure)
});
const structure = (S)=>S.list().title('Content').items(S.documentTypeListItems());
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity.config.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/sanity/[[...tool]]/page.tsx` route
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sanity/vision/lib/_chunks-es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sanity/lib/_chunks-es/pane.mjs [app-client] (ecmascript)");
// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/env.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/schemaTypes/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$structure$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/structure.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["defineConfig"])({
    basePath: '/sanity',
    projectId: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectId"],
    dataset: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dataset"],
    // Add and edit the content schema in the './sanity/schemaTypes' folder
    schema: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$schemaTypes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["schema"],
    plugins: [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sanity$2f$lib$2f$_chunks$2d$es$2f$pane$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structureTool"])({
            structure: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$structure$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["structure"]
        }),
        // Vision is for querying with GROQ from inside the Studio
        // https://www.sanity.io/docs/the-vision-plugin
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$vision$2f$lib$2f$_chunks$2d$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["visionTool"])({
            defaultApiVersion: __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiVersion"]
        })
    ]
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_01feee21._.js.map