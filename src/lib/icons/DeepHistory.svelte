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
     d="m8 2c-3.314 0-6 2.686-6 6 0 3.314 2.686 6 6 6 1.775 0 3.364-.775 4.463-2h-1.5c-.831.618-1.847 1-2.963 1-2.761 0-5-2.239-5-5 0-2.761 2.239-5 5-5 2.761 0 5 2.239 5 5 0 .342-.034.677-.1 1h1.01c.055-.326.09-.658.09-1 0-3.314-2.686-6-6-6m-1 2v5h5v-1h-4v-4z"
     class="ColorScheme-Text"
     />
 <path style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="m10 10v1h2a1 1 0 0 1 1 1 1 1 0 0 1 -1 1v1a2 2 0 0 0 2 -2 2 2 0 0 0 -2 -2z"
     class="ColorScheme-Accent"
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
	d="m11 3c-4.431998 0-8 3.568002-8 8 0 4.431998 3.568002 8 8 8 1.896399 0 3.632791-.656291 5-1.751953v-1.248047h-.09375c-1.261408 1.237774-2.99118 2-4.90625 2-3.877999 0-7-3.122001-7-7 0-3.877999 3.122001-7 7-7 3.877999 0 7 3.122001 7 7 0 .696167-.105435 1.366247-.292969 2h1.033203c.163714-.639651.259766-1.307916.259766-2 0-4.431998-3.568002-8-8-8m-1 2v7h1 5v-1h-5v-6h-1"
	class="ColorScheme-Text"
    />
  <path
    style="fill:currentColor;fill-opacity:1;stroke:none" 
    d="m13.65625 14v1h.845703 1.998047a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1 -1.5 1.5v1a2.5 2.5 0 0 0 2.5 -2.5 2.5 2.5 0 0 0 -2.5 -2.5h-2.84375"
	class="ColorScheme-Accent"
     id="path10" />
		</svg>
	{/if}
