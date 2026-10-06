## 2024-05-24 - Memoize Mapped Component Lists
**Learning:** Re-creating React elements in inline mappings (like `[...items].map(...)`) during every render forces redundant $O(N)$ operations and unneeded DOM reconciliation overhead, decreasing rendering performance.
**Action:** Wrap array mapping operations in a `useMemo` block that depends on the source data array to prevent redundant element re-creation when the parent component re-renders.
## 2024-05-24 - Memoize Mapped Component Lists and Preserve Referential Equality
**Learning:** Re-creating React elements in inline mappings (like `[...items].map(...)`) during every render forces redundant $O(N)$ operations. However, wrapping it in `useMemo` is useless if the dependency (e.g. `items = ["A"]` default prop) is re-created on every render, as it breaks referential equality.
**Action:** Move static default array props outside the component to preserve referential equality, and wrap array mapping operations in a `useMemo` block that depends on the source data array.
## 2024-05-18 - Extract static arrays to improve render performance
**Learning:** Hardcoded arrays and object literals inside functional components are recreated on every render, breaking memoization or causing unnecessary memory allocations.
**Action:** Extracted static structures (such as arrays containing paths, IDs, or static string statuses) that do not depend on component state or props to the module scope (outside the component) to maintain referential equality.
## 2024-05-24 - Memoize Inline Maps
**Learning:** Hardcoded arrays placed directly inside functional components are recreated on every render, causing React to unnecessarily recreate elements during list mappings.
**Action:** Extract inline constant arrays to module scope and wrap their list mappings with `useMemo` to prevent redundant O(N) operations and minimize DOM reconciliation overhead.
## 2026-10-05 - Avoid React State for High-Frequency Mouse Tracking in Framer Motion Components
**Learning:** Updating React state (`useState`) during `mousemove` events causes full component re-renders on every frame (up to 120Hz/240Hz), causing main thread layout/paint thrashing.
**Action:** Use Framer Motion's `useMotionValue` and `useSpring` to update motion transform values directly (`x.set(...)`, `y.set(...)`) outside React's render lifecycle.
