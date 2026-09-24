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
     d="M 3.5 2 L 2.96875 2.96875 L 2 3.5 L 2.96875 4.03125 L 3.5 5 L 4.03125 4.03125 L 5 3.5 L 4.03125 2.96875 L 3.5 2 z M 11.125 2 L 7.625 5.5 L 7.125 6 L 5.125 8 L 3.625 9.5 L 3.125 10 L 2 11.125 L 4.875 14 L 6 12.875 L 6.5 12.375 L 10 8.875 L 10.5 8.375 L 14 4.875 L 11.125 2 z M 11.125 3.4375 L 12.5625 4.875 L 9.78125 7.65625 L 8.34375 6.21875 L 11.125 3.4375 z "
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
	 d="M 4.5,3 3.96875,3.96875 3,4.5 3.96875,5.03125 4.5,6 5.03125,5.03125 6,4.5 5.03125,3.96875 4.5,3 Z M 9.5,3 8.96875,3.96875 8,4.5 8.96875,5.03125 9.5,6 10.03125,5.03125 11,4.5 10.03125,3.96875 9.5,3 Z M 16.171875,3 3,16.171875 5.828125,19 19,5.828125 16.171875,3 Z m -0.06836,1.4824219 1.414062,1.4140625 -3.097656,3.0996094 -1.416016,-1.4160157 3.09961,-3.0976562 z M 6.5,7 5.96875,7.96875 5,8.5 5.96875,9.03125 6.5,10 7.03125,9.03125 8,8.5 7.03125,7.96875 6.5,7 Z"
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
     d="M 23.779297 3.9804688 L 3.9804688 23.779297 L 8.2226562 28.023438 L 28.021484 8.2246094 L 23.779297 3.9804688 z M 6.25 4 L 5.453125 5.453125 L 4 6.25 L 5.453125 7.046875 L 6.25 8.5 L 7.046875 7.046875 L 8.5 6.25 L 7.046875 5.453125 L 6.25 4 z M 13.75 4 L 12.953125 5.453125 L 11.5 6.25 L 12.953125 7.046875 L 13.75 8.5 L 14.546875 7.046875 L 16 6.25 L 14.546875 5.453125 L 13.75 4 z M 23.777344 5.3945312 L 26.605469 8.2226562 L 20.947266 13.880859 L 18.119141 11.052734 L 23.777344 5.3945312 z M 9.25 10 L 8.453125 11.453125 L 7 12.25 L 8.453125 13.046875 L 9.25 14.5 L 10.046875 13.046875 L 11.5 12.25 L 10.046875 11.453125 L 9.25 10 z "
     id="path74" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
