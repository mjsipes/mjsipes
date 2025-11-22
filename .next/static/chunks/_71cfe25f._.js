(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn() {
    for(var _len = arguments.length, inputs = new Array(_len), _key = 0; _key < _len; _key++){
        inputs[_key] = arguments[_key];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9",
            "icon-sm": "size-8",
            "icon-lg": "size-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button(param) {
    let { className, variant, size, asChild = false, ...props } = param;
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ModeToggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ModeToggle",
    ()=>ModeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ModeToggle() {
    _s();
    const { resolvedTheme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false);
    const isDark = resolvedTheme === "dark";
    // Prevent hydration mismatch by only rendering after mount
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "ModeToggle.useEffect": ()=>{
            setMounted(true);
        }
    }["ModeToggle.useEffect"], []);
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            variant: "ghost",
            size: "icon",
            className: "size-7 focus-visible:ring-0 focus-visible:ring-offset-0 relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                    className: "absolute size-4"
                }, void 0, false, {
                    fileName: "[project]/components/ModeToggle.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "sr-only",
                    children: "Toggle theme"
                }, void 0, false, {
                    fileName: "[project]/components/ModeToggle.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ModeToggle.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        variant: "ghost",
        size: "icon",
        className: "size-7 focus-visible:ring-0 focus-visible:ring-offset-0 relative",
        onClick: ()=>setTheme(isDark ? "light" : "dark"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                className: "absolute size-4 transition-all duration-300 ".concat(isDark ? 'scale-0 -rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100')
            }, void 0, false, {
                fileName: "[project]/components/ModeToggle.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                className: "absolute size-4 transition-all duration-300 ".concat(isDark ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-90 opacity-0')
            }, void 0, false, {
                fileName: "[project]/components/ModeToggle.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "Toggle theme"
            }, void 0, false, {
                fileName: "[project]/components/ModeToggle.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ModeToggle.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_s(ModeToggle, "t8+WCtmY6Q/K+YFmVfyga28+HWc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ModeToggle;
var _c;
__turbopack_context__.k.register(_c, "ModeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/kibo-ui/contribution-graph/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContributionGraph",
    ()=>ContributionGraph,
    "ContributionGraphBlock",
    ()=>ContributionGraphBlock,
    "ContributionGraphCalendar",
    ()=>ContributionGraphCalendar,
    "ContributionGraphFooter",
    ()=>ContributionGraphFooter,
    "ContributionGraphLegend",
    ()=>ContributionGraphLegend,
    "ContributionGraphTotalCount",
    ()=>ContributionGraphTotalCount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/differenceInCalendarDays.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$eachDayOfInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/eachDayOfInterval.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$formatISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/formatISO.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$getDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/getDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$getMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/getMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/getYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$nextDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/nextDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/parseISO.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/subWeeks.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
"use client";
;
;
;
const DEFAULT_MONTH_LABELS = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
];
const DEFAULT_LABELS = {
    months: DEFAULT_MONTH_LABELS,
    weekdays: [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ],
    totalCount: "{{count}} activities in {{year}}",
    legend: {
        less: "Less",
        more: "More"
    }
};
const ContributionGraphContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const useContributionGraph = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ContributionGraphContext);
    if (!context) {
        throw new Error("ContributionGraph components must be used within a ContributionGraph");
    }
    return context;
};
_s(useContributionGraph, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const fillHoles = (activities)=>{
    if (activities.length === 0) {
        return [];
    }
    // Sort activities by date to ensure correct date range
    const sortedActivities = [
        ...activities
    ].sort((a, b)=>a.date.localeCompare(b.date));
    const calendar = new Map(activities.map((a)=>[
            a.date,
            a
        ]));
    const firstActivity = sortedActivities[0];
    const lastActivity = sortedActivities.at(-1);
    if (!lastActivity) {
        return [];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$eachDayOfInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eachDayOfInterval"])({
        start: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(firstActivity.date),
        end: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(lastActivity.date)
    }).map((day)=>{
        const date = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$formatISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatISO"])(day, {
            representation: "date"
        });
        if (calendar.has(date)) {
            return calendar.get(date);
        }
        return {
            date,
            count: 0,
            level: 0
        };
    });
};
const groupByWeeks = function(activities) {
    let weekStart = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    if (activities.length === 0) {
        return [];
    }
    const normalizedActivities = fillHoles(activities);
    const firstActivity = normalizedActivities[0];
    const firstDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(firstActivity.date);
    const firstCalendarDate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$getDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDay"])(firstDate) === weekStart ? firstDate : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$subWeeks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["subWeeks"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$nextDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nextDay"])(firstDate, weekStart), 1);
    const paddedActivities = [
        ...new Array((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$differenceInCalendarDays$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["differenceInCalendarDays"])(firstDate, firstCalendarDate)).fill(undefined),
        ...normalizedActivities
    ];
    const numberOfWeeks = Math.ceil(paddedActivities.length / 7);
    return new Array(numberOfWeeks).fill(undefined).map((_, weekIndex)=>paddedActivities.slice(weekIndex * 7, weekIndex * 7 + 7));
};
const getMonthLabels = function(weeks) {
    let monthNames = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : DEFAULT_MONTH_LABELS;
    return weeks.reduce((labels, week, weekIndex)=>{
        const firstActivity = week.find((activity)=>activity !== undefined);
        if (!firstActivity) {
            throw new Error("Unexpected error: Week ".concat(weekIndex + 1, " is empty: [").concat(week, "]."));
        }
        const month = monthNames[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$getMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMonth"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(firstActivity.date))];
        if (!month) {
            const monthName = new Date(firstActivity.date).toLocaleString("en-US", {
                month: "short"
            });
            throw new Error("Unexpected error: undefined month label for ".concat(monthName, "."));
        }
        const prevLabel = labels.at(-1);
        if (weekIndex === 0 || !prevLabel || prevLabel.label !== month) {
            return labels.concat({
                weekIndex,
                label: month
            });
        }
        return labels;
    }, []).filter((param, index, labels)=>{
        let { weekIndex } = param;
        const minWeeks = 3;
        if (index === 0) {
            return labels[1] && labels[1].weekIndex - weekIndex >= minWeeks;
        }
        if (index === labels.length - 1) {
            return weeks.slice(weekIndex).length >= minWeeks;
        }
        return true;
    });
};
const ContributionGraph = (param)=>{
    let { data, blockMargin = 4, blockRadius = 2, blockSize = 12, fontSize = 14, labels: labelsProp = undefined, maxLevel: maxLevelProp = 4, style = {}, totalCount: totalCountProp = undefined, weekStart = 0, className, ...props } = param;
    _s1();
    const maxLevel = Math.max(1, maxLevelProp);
    const weeks = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ContributionGraph.useMemo[weeks]": ()=>groupByWeeks(data, weekStart)
    }["ContributionGraph.useMemo[weeks]"], [
        data,
        weekStart
    ]);
    const LABEL_MARGIN = 8;
    const labels = {
        ...DEFAULT_LABELS,
        ...labelsProp
    };
    const labelHeight = fontSize + LABEL_MARGIN;
    const year = data.length > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$getYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getYear"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$parseISO$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseISO"])(data[0].date)) : new Date().getFullYear();
    const totalCount = typeof totalCountProp === "number" ? totalCountProp : data.reduce((sum, activity)=>sum + activity.count, 0);
    const width = weeks.length * (blockSize + blockMargin) - blockMargin;
    const height = labelHeight + (blockSize + blockMargin) * 7 - blockMargin;
    if (data.length === 0) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContributionGraphContext.Provider, {
        value: {
            data,
            weeks,
            blockMargin,
            blockRadius,
            blockSize,
            fontSize,
            labels,
            labelHeight,
            maxLevel,
            totalCount,
            weekStart,
            year,
            width,
            height
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex w-max max-w-full flex-col gap-2", className),
            style: {
                fontSize,
                ...style
            },
            ...props
        }, void 0, false, {
            fileName: "[project]/components/kibo-ui/contribution-graph/index.tsx",
            lineNumber: 297,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/kibo-ui/contribution-graph/index.tsx",
        lineNumber: 279,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ContributionGraph, "2FkC8avKOYzQQwijnqmNgtnjeGM=");
_c = ContributionGraph;
const ContributionGraphBlock = (param)=>{
    let { activity, dayIndex, weekIndex, className, ...props } = param;
    _s2();
    const { blockSize, blockMargin, blockRadius, labelHeight, maxLevel } = useContributionGraph();
    if (activity.level < 0 || activity.level > maxLevel) {
        throw new RangeError("Provided activity level ".concat(activity.level, " for ").concat(activity.date, " is out of range. It must be between 0 and ").concat(maxLevel, "."));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('data-[level="0"]:fill-muted', 'data-[level="1"]:fill-muted-foreground/20', 'data-[level="2"]:fill-muted-foreground/40', 'data-[level="3"]:fill-muted-foreground/60', 'data-[level="4"]:fill-muted-foreground/80', className),
        "data-count": activity.count,
        "data-date": activity.date,
        "data-level": activity.level,
        height: blockSize,
        rx: blockRadius,
        ry: blockRadius,
        width: blockSize,
        x: (blockSize + blockMargin) * weekIndex,
        y: labelHeight + (blockSize + blockMargin) * dayIndex,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/kibo-ui/contribution-graph/index.tsx",
        lineNumber: 329,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(ContributionGraphBlock, "8cH2GPFmJijPb/+naeUS+LpQrSw=", false, function() {
    return [
        useContributionGraph
    ];
});
_c1 = ContributionGraphBlock;
const ContributionGraphCalendar = (param)=>{
    let { hideMonthLabels = false, className, children, ...props } = param;
    _s3();
    const { weeks, width, height, blockSize, blockMargin, labels } = useContributionGraph();
    const monthLabels = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ContributionGraphCalendar.useMemo[monthLabels]": ()=>getMonthLabels(weeks, labels.months)
    }["ContributionGraphCalendar.useMemo[monthLabels]"], [
        weeks,
        labels.months
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("max-w-full overflow-x-auto overflow-y-hidden", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "block overflow-visible",
            height: height,
            viewBox: "0 0 ".concat(width, " ").concat(height),
            width: width,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                    children: "Contribution Graph"
                }, void 0, false, {
                    fileName: "[project]/components/kibo-ui/contribution-graph/index.tsx",
                    lineNumber: 390,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                !hideMonthLabels && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                    className: "fill-current",
                    children: monthLabels.map((param)=>{
                        let { label, weekIndex } = param;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                            dominantBaseline: "hanging",
                            x: (blockSize + blockMargin) * weekIndex,
                            children: label
                        }, weekIndex, false, {
                            fileName: "[project]/components/kibo-ui/contribution-graph/index.tsx",
                            lineNumber: 394,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    })
                }, void 0, false, {
                    fileName: "[project]/components/kibo-ui/contribution-graph/index.tsx",
                    lineNumber: 392,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                weeks.map((week, weekIndex)=>week.map((activity, dayIndex)=>{
                        if (!activity) {
                            return null;
                        }
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: children({
                                activity,
                                dayIndex,
                                weekIndex
                            })
                        }, "".concat(weekIndex, "-").concat(dayIndex), false, {
                            fileName: "[project]/components/kibo-ui/contribution-graph/index.tsx",
                            lineNumber: 411,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0));
                    }))
            ]
        }, void 0, true, {
            fileName: "[project]/components/kibo-ui/contribution-graph/index.tsx",
            lineNumber: 384,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/components/kibo-ui/contribution-graph/index.tsx",
        lineNumber: 380,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s3(ContributionGraphCalendar, "joiZPTIX8X4i1oLa5zF+XEf39l4=", false, function() {
    return [
        useContributionGraph
    ];
});
_c2 = ContributionGraphCalendar;
const ContributionGraphFooter = (param)=>{
    let { className, ...props } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-wrap gap-1 whitespace-nowrap sm:gap-x-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/kibo-ui/contribution-graph/index.tsx",
        lineNumber: 428,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
};
_c3 = ContributionGraphFooter;
const ContributionGraphTotalCount = (param)=>{
    let { className, children, ...props } = param;
    _s4();
    const { totalCount, year, labels } = useContributionGraph();
    if (children) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children({
                totalCount,
                year
            })
        }, void 0, false);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground", className),
        ...props,
        children: labels.totalCount ? labels.totalCount.replace("{{count}}", String(totalCount)).replace("{{year}}", String(year)) : "".concat(totalCount, " activities in ").concat(year)
    }, void 0, false, {
        fileName: "[project]/components/kibo-ui/contribution-graph/index.tsx",
        lineNumber: 456,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s4(ContributionGraphTotalCount, "f9klfsRcZL44mimu6XZx2Xj9MCY=", false, function() {
    return [
        useContributionGraph
    ];
});
_c4 = ContributionGraphTotalCount;
const ContributionGraphLegend = (param)=>{
    let { className, children, ...props } = param;
    var _labels_legend, _labels_legend1;
    _s5();
    const { labels, maxLevel, blockSize, blockRadius } = useContributionGraph();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("ml-auto flex items-center gap-[3px]", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mr-1 text-muted-foreground",
                children: ((_labels_legend = labels.legend) === null || _labels_legend === void 0 ? void 0 : _labels_legend.less) || "Less"
            }, void 0, false, {
                fileName: "[project]/components/kibo-ui/contribution-graph/index.tsx",
                lineNumber: 485,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            new Array(maxLevel + 1).fill(undefined).map((_, level)=>children ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: children({
                        level
                    })
                }, level, false, {
                    fileName: "[project]/components/kibo-ui/contribution-graph/index.tsx",
                    lineNumber: 490,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    height: blockSize,
                    width: blockSize,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                            children: "".concat(level, " contributions")
                        }, void 0, false, {
                            fileName: "[project]/components/kibo-ui/contribution-graph/index.tsx",
                            lineNumber: 493,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("stroke-[1px] stroke-border", 'data-[level="0"]:fill-muted', 'data-[level="1"]:fill-muted-foreground/20', 'data-[level="2"]:fill-muted-foreground/40', 'data-[level="3"]:fill-muted-foreground/60', 'data-[level="4"]:fill-muted-foreground/80'),
                            "data-level": level,
                            height: blockSize,
                            rx: blockRadius,
                            ry: blockRadius,
                            width: blockSize
                        }, void 0, false, {
                            fileName: "[project]/components/kibo-ui/contribution-graph/index.tsx",
                            lineNumber: 494,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, level, true, {
                    fileName: "[project]/components/kibo-ui/contribution-graph/index.tsx",
                    lineNumber: 492,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "ml-1 text-muted-foreground",
                children: ((_labels_legend1 = labels.legend) === null || _labels_legend1 === void 0 ? void 0 : _labels_legend1.more) || "More"
            }, void 0, false, {
                fileName: "[project]/components/kibo-ui/contribution-graph/index.tsx",
                lineNumber: 512,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/kibo-ui/contribution-graph/index.tsx",
        lineNumber: 481,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s5(ContributionGraphLegend, "GEa+lOgq1hbW+jsaZt54tzqKBSo=", false, function() {
    return [
        useContributionGraph
    ];
});
_c5 = ContributionGraphLegend;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "ContributionGraph");
__turbopack_context__.k.register(_c1, "ContributionGraphBlock");
__turbopack_context__.k.register(_c2, "ContributionGraphCalendar");
__turbopack_context__.k.register(_c3, "ContributionGraphFooter");
__turbopack_context__.k.register(_c4, "ContributionGraphTotalCount");
__turbopack_context__.k.register(_c5, "ContributionGraphLegend");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ContributionGraphClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContributionGraphClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kibo$2d$ui$2f$contribution$2d$graph$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/kibo-ui/contribution-graph/index.tsx [app-client] (ecmascript)");
"use client";
;
;
function ContributionGraphClient(param) {
    let { data } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kibo$2d$ui$2f$contribution$2d$graph$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContributionGraph"], {
        data: data,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kibo$2d$ui$2f$contribution$2d$graph$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContributionGraphCalendar"], {
                children: (param)=>{
                    let { activity, dayIndex, weekIndex } = param;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kibo$2d$ui$2f$contribution$2d$graph$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContributionGraphBlock"], {
                        activity: activity,
                        dayIndex: dayIndex,
                        weekIndex: weekIndex
                    }, void 0, false, {
                        fileName: "[project]/components/ContributionGraphClient.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this);
                }
            }, void 0, false, {
                fileName: "[project]/components/ContributionGraphClient.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kibo$2d$ui$2f$contribution$2d$graph$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContributionGraphFooter"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kibo$2d$ui$2f$contribution$2d$graph$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContributionGraphTotalCount"], {}, void 0, false, {
                        fileName: "[project]/components/ContributionGraphClient.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$kibo$2d$ui$2f$contribution$2d$graph$2f$index$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContributionGraphLegend"], {}, void 0, false, {
                        fileName: "[project]/components/ContributionGraphClient.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContributionGraphClient.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ContributionGraphClient.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = ContributionGraphClient;
var _c;
__turbopack_context__.k.register(_c, "ContributionGraphClient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_71cfe25f._.js.map