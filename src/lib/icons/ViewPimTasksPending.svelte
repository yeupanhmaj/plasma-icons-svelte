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
     transform="translate(-421.71429,-531.79074)">
    <path
       style="fill:currentColor;fill-opacity:1;stroke:none" 
       d="M 2 2 L 2 14 L 11 14 L 11 13 L 3 13 L 3 5 L 13 5 L 13 8 L 14 8 L 14 2 L 12 2 L 12 4 L 10 4 L 10 2 L 6 2 L 6 4 L 4 4 L 4 2 L 2 2 z M 10.335938 6.5 L 7.1875 10.109375 L 5.6621094 8.5566406 L 5 9.2324219 L 7.2265625 11.5 L 11 7.1777344 L 10.335938 6.5 z "
       transform="translate(421.71429,531.79074)"
     class="ColorScheme-Text"
       id="rect4449" />
    <path
       style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NegativeText"
     d="M 12 9 L 12 12 L 13 12 L 13 9 L 12 9 z M 12 13 L 12 14 L 13 14 L 13 13 L 12 13 z "
       transform="translate(421.71429,531.79074)"
       id="rect4177" />
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
     d="M 3 3 L 3 19 L 13 19 L 14 19 L 14 18 L 13 18 L 4 18 L 4 7 L 18 7 L 18 13 L 18 14 L 19 14 L 19 13 L 19 3 L 17 3 L 17 6 L 15 6 L 15 3 L 7 3 L 7 6 L 5 6 L 5 3 L 3 3 z M 14.292969 9 L 9.7011719 13.591797 L 8.5546875 12.445312 L 7.8476562 13.152344 L 9.6933594 15 L 9.6992188 14.992188 L 9.7070312 15 L 15 9.7070312 L 14.292969 9 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:#f47750;fill-opacity:1;stroke:none" 
     d="M 16 14 L 16 17 L 17 17 L 17 14 L 16 14 z M 16 18 L 16 19 L 17 19 L 17 18 L 16 18 z "
     />
		</svg>
	{/if}
