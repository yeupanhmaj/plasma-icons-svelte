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
          d="m9.0000002 9v3h1.9999998v-1h-1v-2zm0.9999998-1c-1.6619998 0-2.9999998 1.338-2.9999998 3s1.338 3 2.9999998 3c1.662 0 3-1.338 3-3s-1.338-3-3-3zm0 1a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-1.9999998-2 2 2 0 0 1 1.9999998-2zm-7-7v12h4v-1h-3v-10h5v3h3v2h1v-3l-3-3h-1z"
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
          d="m14 11c-2.215995 0-4 1.784005-4 4s1.784005 4 4 4 4-1.784005 4-4-1.784005-4-4-4m0 1c1.661995 0 3 1.338005 3 3s-1.338005 3-3 3-3-1.338005-3-3 1.338005-3 3-3m-1 1v3h2v-1h-1v-2h-1m-9-10v16h6v-1h-5v-14h8v4h4v3h1v-4.0078125l-3.992188-3.9921875-0.007812 0.0097656v-0.0097656h-9z"
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
			<g transform="translate(27,27) translate(-22,-22)" id="document-open-recent">
    <path id="path14" d="m 0,-3 0,28 10,0 0,-1 -9,0 0,-26 20,0 0,15 1,0 0,-16 -22,0 z m 16,16 a 6,6 0 0 0 -6,6 6,6 0 0 0 6,6 6,6 0 0 0 6,-6 6,6 0 0 0 -6,-6 z m 0,1 a 5,5 0 0 1 5,5 5,5 0 0 1 -5,5 5,5 0 0 1 -5,-5 5,5 0 0 1 5,-5 z m -1,1 0,5 1,0 3,0 0,-1 -3,0 0,-4 -1,0 z" style="opacity:1;fill:currentColor" class="ColorScheme-Text"/>
    <rect id="rect23" width="32" height="32" x="-5" y="-5" style="opacity:1;fill:none"/>
  </g>
		</svg>
	{/if}
