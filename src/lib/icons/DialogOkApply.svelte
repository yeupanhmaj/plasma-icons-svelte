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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 13.273438 3.5 L 5.6367188 11.060547 L 2.7265625 8.1796875 L 2 8.9003906 L 4.9082031 11.779297 L 5.6367188 12.5 L 6.7265625 11.419922 L 14 4.2207031 L 13.273438 3.5 z "
     class="ColorScheme-Text"
     />
		</svg>
	{:else if numericSize <= 27}
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
	d="m382.8643 530.79077l-10.43876 10.56644-4.14699-4.19772-.70712.71578 4.14699 4.1977-.002.002.70713.71577.002-.002.002.002.70711-.71577-.002-.002 10.43877-10.56645-.70712-.71576z" transform="translate(-364.57143-525.79075)" 
	class="ColorScheme-Text"
    />
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
			<path d="m30 6.5961948-19.303301 19.3032992-8.696699-8.696697.7071076-.707106 7.9895914 7.989592 18.596195-18.5961947z" style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"/>
		</svg>
	{/if}
