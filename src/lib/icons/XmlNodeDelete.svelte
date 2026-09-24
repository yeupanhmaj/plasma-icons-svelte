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
			<g
     transform="translate(0,-1036.3622)">
    <path
       style="fill:currentColor;fill-opacity:1;stroke:none" 
       d="M 9.0898438 2 L 5.9433594 13.740234 L 6.9101562 14 L 10.056641 2.2597656 L 9.0898438 2 z M 5.2851562 4 L 2.3242188 7.1445312 L 2 7.4921875 L 2.3242188 7.8378906 L 5.2675781 11 L 5.9824219 10.304688 L 3.3613281 7.4921875 L 6 4.6953125 L 5.2851562 4 z M 10.714844 4 L 10 4.6953125 L 12.638672 7.4921875 L 12.166016 8 L 13.525391 8 L 13.675781 7.8378906 L 14 7.4921875 L 13.675781 7.1445312 L 10.714844 4 z "
       transform="translate(0,1036.3622)"
       id="rect3918" 
       class="ColorScheme-Text"
        />
    <path
        style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NegativeText"
    d="m 9,1046.1954 1.66667,1.6667 -1.66667,1.6667 0.83333,0.8333 1.66667,-1.6666 1.66667,1.6666 L 14,1049.5288 12.33334,1047.8621 14,1046.1954 13.16667,1045.3621 11.5,1047.0288 9.83333,1045.3621 9,1046.1954 Z"
       id="rect5234"/>
  </g>
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
     d="M 12.5 3 L 8.5 18.753906 L 9.5 19 L 13.5 3.2460938 L 12.5 3 z M 7.2539062 6 L 3.2792969 10.644531 L 3 11 L 3.2792969 11.355469 L 7.2539062 16 L 8 15.291016 L 4.3359375 11 L 8 6.7089844 L 7.2539062 6 z M 14.746094 6 L 14 6.7089844 L 17.664062 11 L 15.957031 13 L 17.3125 13 L 18.720703 11.355469 L 19 11 L 18.720703 10.644531 L 14.746094 6 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:#da4453;fill-opacity:1;stroke:none"      
     d="M 14.833984 14 L 14 14.833984 L 15.666016 16.5 L 14 18.166016 L 14.833984 19 L 16.5 17.333984 L 18.166016 19 L 19 18.166016 L 17.333984 16.5 L 19 14.833984 L 18.166016 14 L 16.5 15.666016 L 14.833984 14 z "
     />
		</svg>
	{/if}
