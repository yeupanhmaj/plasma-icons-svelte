<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 22,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();

	const numericSize = $derived(
		typeof size === 'number' ? size : parseInt(String(size), 10) || 22
	);
</script>

	{#if numericSize <= 27}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 22 22"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<linearGradient id="a" gradientTransform="matrix(.41666692 0 0 .40833269 -159.23827 -203.25094)" gradientUnits="userSpaceOnUse" x2="0" y1="543.79797" y2="502.65509"><stop offset="0" stop-color="#c6cdd1"/><stop offset="1" stop-color="#e0e5e7"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="5.375003" x2="14.75002" y1="7.000012" y2="16.375009"><stop offset="0"/><stop offset="1" stop-opacity="0"/></linearGradient><path d="m1.000006 2h19.999994v18h-19.999994z" fill="url(#a)" stroke-width=".633866"/><path d="m2 18 18-11 1 1v11.500012l-17 .499988z" fill="url(#b)" fill-rule="evenodd" opacity=".2" stroke-width=".625"/><path d="m11 2h10.000002v3h-10.000002z" fill="#566069" stroke-width=".484123"/><path d="m1 2h10.000002v3h-10.000002z" fill="#eff0f1" stroke-width=".484123"/><path d="m1.000027 5h19.999973v1h-19.999973z" fill="#3daee9" stroke-width=".790569"/><path d="m2 7h18v10.999999h-18z" fill="#fff" stroke-width=".574456"/><g stroke-width=".75"><rect fill="#eff0f1" height="1.5" rx=".75" width="1.5" x="18.75" y="2.75"/><rect fill="#566069" height="1.5" rx=".75" width="1.5" x="1.75" y="2.75"/></g>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<defs><linearGradient id="a" x2="0" y1="543.8" y2="502.66" gradientTransform="matrix(.66666 0 0 .63518 -256.38 -317.28)" gradientUnits="userSpaceOnUse"><stop stop-color="#c6cdd1" offset="0"/><stop stop-color="#e0e5e7" offset="1"/></linearGradient></defs><linearGradient id="b" x1="7" x2="22" y1="10" y2="25" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop stop-opacity="0" offset="1"/></linearGradient><g stroke-width=".70711"><path d="m1e-5 2h32v28h-32z" fill="url(#a)" stroke-width="1"/></g><path d="m16 2h16v4h-16z" fill="#566069"/><path d="m-2e-5 6h32v1h-32z" fill="#3daee9"/><path d="m0.99999 28 30-20 1 1-1e-5 21-29 3e-5z" fill="url(#b)" fill-rule="evenodd" opacity=".2"/><path d="m0.99998 8h30v20h-30z" fill="#fff"/><rect x="29" y="3" width="2" height="2" rx="1" fill="#eff0f1"/><path d="m-2e-5 2h16v4h-16z" fill="#eff0f1"/><rect x=".99998" y="3" width="2" height="2" rx="1" fill="#566069"/>
		</svg>
	{/if}
