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
       d="M 10 2.5 C 9.0680195 2.5 8.2844627 3.1373007 8.0625 4 L 2 4 L 2 5 L 8.0625 5 C 8.2844627 5.8626993 9.0680195 6.5 10 6.5 C 10.931981 6.5 11.715537 5.8626993 11.9375 5 L 14 5 L 14 4 L 11.9375 4 C 11.715537 3.1373007 10.931981 2.5 10 2.5 z M 5 9.5 C 4.0680191 9.5 3.2844626 10.137301 3.0625 11 L 2 11 L 2 12 L 3.0625 12 C 3.2844626 12.862699 4.0680191 13.5 5 13.5 C 5.9319809 13.5 6.7155374 12.862699 6.9375 12 L 7 12 L 9 12 L 14 12 L 14 11 L 9 11 L 7 11 L 6.9375 11 C 6.7155374 10.137301 5.9319809 9.5 5 9.5 z M 5 10.5 C 5.55228 10.5 6 10.94772 6 11.5 C 6 12.05228 5.55228 12.5 5 12.5 C 4.44772 12.5 4 12.05228 4 11.5 C 4 10.94772 4.44772 10.5 5 10.5 z "
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 11.5 3 C 10.286139 3 9.2809778 3.8559279 9.0507812 5 L 3 5 L 3 6 L 9.0507812 6 C 9.2809778 7.1440721 10.286139 8 11.5 8 C 12.713861 8 13.719022 7.1440721 13.949219 6 L 19 6 L 19 5 L 13.949219 5 C 13.719022 3.8559279 12.713861 3 11.5 3 z M 5.5 14 C 4.1149999 14 3 15.115 3 16.5 C 3 17.885 4.1149999 19 5.5 19 C 6.7138604 19 7.7190223 18.144072 7.9492188 17 L 19 17 L 19 16 L 7.9492188 16 C 7.7190223 14.855928 6.7138604 14 5.5 14 z M 5.5 15 C 6.3310001 15 7 15.669 7 16.5 C 7 17.331 6.3310001 18 5.5 18 C 4.6689999 18 4 17.331 4 16.5 C 4 15.669 4.6689999 15 5.5 15 z "
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
			<path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M18.5 6A3.5 3.5 0 0 0 15.04102 9H4V10H15.04A3.5 3.5 0 0 0 18.5 13 3.5 3.5 0 0 0 21.958984 10H28V9H21.961A3.5 3.5 0 0 0 18.5 6M7.5 19A3.5 3.5 0 0 0 4 22.5 3.5 3.5 0 0 0 7.5 26 3.5 3.5 0 0 0 10.960938 23H28V22H10.959A3.5 3.5 0 0 0 7.5 19m0 1A2.5 2.5 0 0 1 10 22.5 2.5 2.5 0 0 1 7.5 25 2.5 2.5 0 0 1 5 22.5 2.5 2.5 0 0 1 7.5 20"
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
