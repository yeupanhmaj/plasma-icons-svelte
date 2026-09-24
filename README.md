# plasma-icons-svelte

Full **KDE Breeze** icon library packaged as native, tree-shakeable **Svelte 5** components.

Over **2,900+ unique icons** across all KDE categories (`actions`, `apps`, `status`, `places`, `devices`, `preferences`, etc.) with built-in multi-size adaptive vector rendering.

---

## Features

- ⚡ **Native Svelte 5**: Built using Svelte 5 snippets and runes, fully tree-shakeable.
- 🎨 **Adaptive Multi-Size**: Icons automatically switch to their dedicated pixel-hinted vector designs (16px, 22px, 32px, etc.) based on the `size` prop.
- 🌈 **Color Inheritance**: Defaults to `currentColor` so icons effortlessly adopt their parent element's text color, buttons, and theme styles.
- 🌓 **KDE / Plasma Semantic Colors**: Optional CSS stylesheet mapping KDE Breeze semantic accent classes (`ColorScheme-NegativeText`, `ColorScheme-PositiveText`, `ColorScheme-Highlight`) to CSS variables.
- 📦 **Zero Runtime Dependencies**: Pure SVG markup compiled directly into typed Svelte components.
- 🔍 **TypeScript Ready**: Full type declarations and autocompletion for all icon names and props.

---

## Installation

```bash
pnpm add plasma-icons-svelte
# or
npm install plasma-icons-svelte
# or
yarn add plasma-icons-svelte
```

---

## Quick Start

### 1. Basic Usage

Import any icon component directly:

```svelte
<script lang="ts">
  import { EditCopy, DocumentSave, Folder, SettingsConfigure } from 'plasma-icons-svelte';
</script>

<!-- Render with default size (22px or 16px) and current text color -->
<EditCopy />

<!-- Customize size (number in px or string) -->
<DocumentSave size={16} />

<!-- Customize color -->
<Folder size={32} color="#3daee9" />

<!-- Add custom class and attributes -->
<SettingsConfigure class="my-icon" aria-label="Settings" onclick={() => console.log('clicked')} />
```

---

### 2. Semantic Theme Colors

To enable KDE Breeze semantic colors (e.g. error reds on `dialog-error`, warning oranges, success greens, or accent blues), import the stylesheet in your root layout:

```svelte
<!-- +layout.svelte or App.svelte -->
<script>
  import 'plasma-icons-svelte/plasma-icons.css';
</script>
```

The stylesheet maps semantic classes to standard CSS variables:

| Class | Variable | Default Fallback |
| :--- | :--- | :--- |
| `.ColorScheme-Text` | `currentColor` | Current text color |
| `.ColorScheme-NegativeText` | `--plasma-color-danger` | `#da4453` |
| `.ColorScheme-PositiveText` | `--plasma-color-success` | `#27ae60` |
| `.ColorScheme-NeutralText` | `--plasma-color-warning` | `#f67400` |
| `.ColorScheme-Highlight` / `.ColorScheme-Accent` | `--plasma-color-primary` | `#3daee9` |

---

### 3. Tree-Shaking & Subpath Imports

Named imports from `'plasma-icons-svelte'` are tree-shakeable:

```svelte
<script>
  import { EditCopy, ViewRefresh } from 'plasma-icons-svelte';
</script>
```

You can also import directly from the `/icons` subpath:

```svelte
<script>
  import EditCopy from 'plasma-icons-svelte/icons/EditCopy';
</script>
```

---

## Component Props

Every icon component accepts the following props (in addition to all standard SVG element attributes):

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `number \| string` | `22` (or `16`) | The rendered width and height of the icon. |
| `color` | `string` | `'currentColor'` | The SVG fill/stroke color. |
| `class` | `string` | `''` | Extra CSS classes applied to `<svg>`. |
| `style` | `string` | `''` | Inline styles applied to `<svg>`. |
| `...restProps` | `SVGAttributes<SVGSVGElement>` | — | Any other standard SVG attributes (`aria-hidden`, `tabindex`, `onclick`, etc.). |

---

## Adaptive Size Example

Breeze icons often provide specialized designs optimized for 16px (menus/toolbars), 22px (desktop actions), and 32px+. `plasma-icons-svelte` automatically selects the pixel-hinted vector version:

```svelte
<!-- Renders the 16x16 pixel-hinted path -->
<DocumentSave size={16} />

<!-- Renders the 22x22 primary action path -->
<DocumentSave size={22} />

<!-- Renders the 32x32 detailed path -->
<DocumentSave size={32} />
```

---

## Icon Re-generation

To re-generate components from the source SVG files in `raw-icons/icons/`:

```bash
pnpm run generate
```

---

## License

- Component library: [LGPL-3.0-or-later](https://www.gnu.org/licenses/lgpl-3.0.html) (matching KDE Breeze Icon Theme).
- Icons: Copyright (C) KDE Community / Breeze Icon Contributors.
