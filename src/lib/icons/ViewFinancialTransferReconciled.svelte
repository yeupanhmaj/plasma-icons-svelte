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
    d="m5 2v4h1v-3h8v7h-5v1h5v2h-5v1h6v-12zm2 2v1h4v-1zm5 0v1h1v-1zm-11 3v7h7v-7h-4-1zm1 1h5v.3203125l-2.4804688 2.4082035-.9101562-.8808598-.7265625.7207028 1.6367187 1.59961 2.4804688-2.417969v3.25h-5zm7 0v1h2v-1zm3 0v1h1v-1z"
    style="fill:currentColor;fill-opacity:1;stroke:none"
    class="ColorScheme-Text"
    />
<path
    d="m9 6v1h2v-1zm3 0v1h1v-1z" 
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
    d="m5 3v5h1v-4h12v10h-4v1h4v3h-4v1h5v-16zm2 3v1h8v-1zm-4 3v10h10v-10zm1 1h8v1l-3.63672 3.56055-1.91016-1.88086-0.72656 0.7207 2.63672 2.59961 3.63672-3.56641v5.56641h-8zm10 0v1h1v-1z"
    style="fill:currentColor;fill-opacity:1;stroke:none"
    class="ColorScheme-Text"
    />
<path
    d="m16 6v1h1v-1zm-2 2v1h1v-1zm2 0v1h1v-1zm0 2v1h1v-1z" 
    style="fill:currentColor;fill-opacity:1;stroke:none"
    class="ColorScheme-NegativeText"
    />
		</svg>
	{/if}
