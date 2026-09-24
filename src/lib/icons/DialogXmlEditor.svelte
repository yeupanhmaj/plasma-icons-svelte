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
     d="M 9.0898438 2 L 5.9433594 13.740234 L 6.9101562 14 L 10.056641 2.2597656 L 9.0898438 2 z M 5.2851562 4 L 2.3242188 7.1445312 L 2 7.4921875 L 2.3242188 7.8378906 L 5.2675781 11 L 5.9824219 10.304688 L 3.3613281 7.4921875 L 6 4.6953125 L 5.2851562 4 z M 10.714844 4 L 10 4.6953125 L 12.638672 7.4921875 L 10.017578 10.304688 L 10.732422 11 L 13.675781 7.8378906 L 14 7.4921875 L 13.675781 7.1445312 L 10.714844 4 z "
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
			<g transform="translate(-551.28572-607.64791)" style="fill:currentColor;fill-opacity:1;stroke:none" 
    class="ColorScheme-Text"
    >
  <path d="m563.78571 610.64791l-4 15.75384 1 .24616 4-15.75385-1-.24615"/>
  <path d="m566.03107 613.64791l-.74534.70967 3.66459 4.29032-3.66459 4.29033.74534.70968 3.97515-4.64516.27951-.35485-.27951-.35483-3.97515-4.64516"/>
  <path d="m558.54037 613.64791l.74534.70967-3.66459 4.29032 3.66459 4.29033-.74534.70968-3.97515-4.64516-.27951-.35485.27951-.35483 3.97515-4.64516"/>
 </g>
		</svg>
	{/if}
