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
     style="fill:#b3b3b3" 
     d="M 14 4 C 8.4771525 4 4 8.4771525 4 14 L 14 14 L 14 4 z "
     />
 <path style="fill:currentColor;fill-opacity:1;stroke:none" 
       d="M 3.5 2 C 2.6715729 2 2 2.6715729 2 3.5 C 2 4.3284271 2.6715729 5 3.5 5 C 4.1558381 5 4.7024102 4.586412 4.90625 4 L 9.4375 4 C 5.6410671 5.7341551 3 9.5535887 3 14 L 4 14 C 4 8.4771532 8.4771523 4 14 4 L 14 3 L 4.90625 3 C 4.7024102 2.413588 4.1558381 2 3.5 2 z M 3.5 3 C 3.7761424 3 4 3.2238576 4 3.5 C 4 3.7761424 3.7761424 4 3.5 4 C 3.2238576 4 3 3.7761424 3 3.5 C 3 3.2238576 3.2238576 3 3.5 3 z "
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
			<path id="path4" class="ColorScheme-Text" d="m6 3c-1.6568542 0-3 1.3431-3 3s1.3431458 3 3 3c1.3013207 0 2.3969895-0.8416 2.8125-2h2.40625c-4.3329447 2.4608-7.21875 6.9142-7.21875 12h2c0-6.3703 5.301188-11.5852 12-12h1v-2h-10.1875c-0.4155105-1.1584-1.5111793-2-2.8125-2zm0 2c0.552285 0 1 0.4477 1 1s-0.447715 1-1 1c-0.5522847 0-1-0.4477-1-1s0.4477153-1 1-1z" fill="currentColor"/>
    <path id="path6" d="M 17.5,7 C 17.197314,7.014 17.1016,7.02725 17.03125,7.03125 10.897043,7.27685 6,12.3055 6,18.5 6,18.6672 6.024183,18.8345 6.03125,19 h 11 H 18 19 V 7 Z" fill="#b3b3b3"/>
		</svg>
	{/if}
