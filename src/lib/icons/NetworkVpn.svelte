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
        style="fill:currentColor;fill-opacity:1;stroke:none" 
        d="M 8 2 C 8 2 6.5 3.9941406 2 4.4941406 C 2 4.4941406 2 11.4936 8 14 C 14 11.4936 14 4.4941406 14 4.4941406 C 9.5 3.9941406 8 2 8 2 z M 8 5 C 9.1045659 5 10 5.8066813 10 6.8007812 C 10 7.5463812 9.4893166 8.1760187 8.7714844 8.4492188 L 9.3339844 11 L 6.6660156 11 L 7.2285156 8.4492188 C 6.5106834 8.1760187 6 7.5463812 6 6.8007812 C 6 5.8066813 6.8954341 5 8 5 z " 
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
			<path transform="translate(0,-1030.3622)"
          d="m 11,1033.3622 c 0,0 -2,2.6581 -8,3.3248 0,0 0,9.3333 8,12.6752 8,-3.3419 8,-12.6752 8,-12.6752 -6,-0.6667 -8,-3.3248 -8,-3.3248 z m 0,4.6667 c 1.104566,0 2,0.8954 2,2 0,0.8284 -0.511334,1.5297 -1.229166,1.8333 l 0.5625,2.8333 -2.666668,0 0.5625,-2.8333 C 9.511334,1041.5586 9,1040.8573 9,1040.0289 c 0,-1.1046 0.895434,-2 2,-2 z" 
          style="fill:currentColor;fill-opacity:1;stroke:none" 
          class="ColorScheme-Text"
          />
		</svg>
	{/if}
