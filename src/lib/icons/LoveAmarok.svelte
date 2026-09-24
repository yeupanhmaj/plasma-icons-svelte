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
     d="M 4 2 C 2.343 2 1 3.343 1 5 C 1 9 6 12 8 14 C 10 12 15 9 15 5 C 15 3.343 13.657 2 12 2 C 9 2 8 4 8 4 C 8 4 7 2 4 2 z M 4 3 C 5.7191685 2.9867647 6.6355364 3.8577363 7.3359375 5 L 8.6269531 5 C 9.4443651 3.7484379 10.628397 3.0161834 12 3 C 13.116666 3 14 3.8833339 14 5 C 14 6.5833333 12.964401 8.1215362 11.542969 9.5429688 C 10.357873 10.728065 9.0760263 11.709469 8 12.669922 C 6.9239737 11.709469 5.6421273 10.728065 4.4570312 9.5429688 C 3.0355987 8.121536 2 6.5833333 2 5 C 2 3.8833339 2.8833339 3 4 3 z "
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
     d="M 7 3 C 4.23858 3 2 5.23858 2 8 C 2 13 9 17 11 19 C 13 17 20 13 20 8 C 20 5.23858 17.76142 3 15 3 C 13.36041 3 11.91181 3.78077 11 5 C 10.08819 3.78077 8.6396 3 7 3 z M 7 4 C 8.3221364 4 9.4690059 4.6232029 10.199219 5.5996094 L 11 6.6699219 L 11.800781 5.5996094 C 12.530992 4.6232057 13.677876 4 15 4 C 17.220978 4 19 5.7790218 19 8 C 19 10.033333 17.487537 12.093471 15.566406 13.894531 C 13.902872 15.454095 12.231348 16.625594 11 17.703125 C 9.7686524 16.625594 8.0971281 15.454095 6.4335938 13.894531 C 4.5124626 12.093471 3 10.033333 3 8 C 3 5.7790218 4.7790218 4 7 4 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
