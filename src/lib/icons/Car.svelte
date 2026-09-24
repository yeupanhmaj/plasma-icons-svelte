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
    d="m4.1914062 3-2.1914062 4.3828125v4.6171875h1v2h2v-2h6v2h2v-2h1v-4.6191406l-2.191406-4.3808594zm.6171876 1h6.3828122l1.5 3h-9.3828122zm-1.8085938 4h10v3h-10zm1 1v1h1v-1zm7 0v1h1v-1z"
    style="fill:currentColor;fill-opacity:1;stroke:none"
    class="ColorScheme-Text"
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
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 5 4 L 3 10 L 3 17 L 4 17 L 4 19 L 6 19 L 6 17 L 16 17 L 16 19 L 18 19 L 18 17 L 19 17 L 19 10 L 17 4 L 5 4 z M 5.7207031 5 L 16.279297 5 L 17.945312 10 L 4.0546875 10 L 5.7207031 5 z M 4 11 L 18 11 L 18 16 L 6 16 L 4 16 L 4 11 z M 6.5 12 A 1.5 1 0 0 0 5 13 A 1.5 1 0 0 0 6.5 14 A 1.5 1 0 0 0 8 13 A 1.5 1 0 0 0 6.5 12 z M 15.5 12 A 1.5 1 0 0 0 14 13 A 1.5 1 0 0 0 15.5 14 A 1.5 1 0 0 0 17 13 A 1.5 1 0 0 0 15.5 12 z "
    class="ColorScheme-Text"
      />
		</svg>
	{/if}
