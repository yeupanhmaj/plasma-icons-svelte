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

	{#if numericSize <= 19}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path
    d="m3 2v12h5.3652344c-.1477689-.308604-.2135218-.648735-.265625-1h-4.0996094v-10h8v6.0996094c.351265.052103.691396.1178561 1 .265625v-7.3652344zm2 2v1h4v-1zm0 2v1h4v-1zm0 2v1h4v-1zm6.5 2c-1.385 0-2.5 1.115-2.5 2.5s1.115 2.5 2.5 2.5 2.5-1.115 2.5-2.5-1.115-2.5-2.5-2.5zm0 1c.4155 0 .791375.166375 1.0625.4375s.4375.647.4375 1.0625h-1.5v1.5c-.4155 0-.791375-.166375-1.0625-.4375s-.4375-.647-.4375-1.0625.166375-.791375.4375-1.0625.647-.4375 1.0625-.4375z"
    style="fill:currentColor;fill-opacity:1;stroke:none"
    class="ColorScheme-Text"
    />
<path
    d="m10 4v1h1v-1zm0 2v1h1v-1zm0 2v1h1v-1z"
    style="fill:currentColor;fill-opacity:1;stroke:none"
    class="ColorScheme-NegativeText"
    />
		</svg>
	{:else}
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
			<path
    d="m4 3v16h7v-1h-6v-14h12v8h1v-9zm2 3v1h7v-1zm0 2v1h7v-1zm0 2v1h7v-1zm8.949219 3a3 3 0 0 0-2.949219 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3 3 3 0 0 0-0.050781 0zm0 1a2 2 0 0 1 0.001953 0 2 2 0 0 1 0.048828 0 2 2 0 0 1 2 2h-2v2a2 2 0 0 1-2-2 2 2 0 0 1 1.949219-2z"
    style="fill:currentColor;fill-opacity:1;stroke:none"
    class="ColorScheme-Text"
    />
<path
    d="m14 6v1h2v-1zm0 2v1h2v-1zm0 2v1h2v-1z"
    style="fill:currentColor;fill-opacity:1;stroke:none"
    class="ColorScheme-NegativeText"
    />
		</svg>
	{/if}
