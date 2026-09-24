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
        d="M 3.8261719 5.9980469 L 0.99609375 13.998047 L 2.140625 13.998047 L 3.1132812 11.712891 L 5.8378906 11.712891 L 6.7109375 13.998047 L 7.8535156 13.998047 L 5.2636719 5.9980469 L 3.8261719 5.9980469 z M 8.7109375 6 L 8.7109375 14 L 12.710938 14 A 2.285714 2.285714 0 0 0 14.996094 11.714844 A 2.285714 2.285714 0 0 0 13.462891 9.5605469 A 2.285714 2.285714 0 0 0 13.853516 8.2851562 A 2.285714 2.285714 0 0 0 11.566406 6 L 9.28125 6 L 8.7109375 6 z M 9.8535156 7.1425781 L 11.566406 7.1425781 A 1.142857 1.142857 0 0 1 12.708984 8.2851562 A 1.142857 1.142857 0 0 1 11.566406 9.4277344 L 9.8535156 9.4277344 L 9.8535156 7.1425781 z M 4.5429688 7.2382812 L 5.6152344 10.570312 L 3.359375 10.570312 L 4.5429688 7.2382812 z M 9.8535156 10.572266 L 12.710938 10.572266 A 1.142857 1.142857 0 0 1 13.853516 11.714844 A 1.142857 1.142857 0 0 1 12.710938 12.857422 L 9.8535156 12.857422 L 9.8535156 10.572266 z "
        class="ColorScheme-Text"
        />
  <path 
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="m 8.71,5 5,0 -2.5,-3 z"
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
			<g transform="translate(-421.71429,-525.79074)">
 <path 
    style="fill:currentColor;fill-opacity:1;stroke:none" 
    d="M 4.828125 7 L 0.65429688 19 L 1.6621094 19 L 3.1582031 15 L 8.3652344 15 L 9.8554688 19 L 11 19 L 6.7695312 7 L 4.828125 7 z M 12 7 L 12 19 L 13 19 L 18 19 A 3.5 3.5 0 0 0 21.5 15.5 A 3.5 3.5 0 0 0 19.066406 12.169922 A 3 3 0 0 0 20 10 A 3 3 0 0 0 17 7 L 13 7 L 12 7 z M 13 8 L 17 8 A 2 2 0 0 1 19 10 A 2 2 0 0 1 17 12 L 13 12 L 13 8 z M 5.7675781 8.0292969 L 7.9921875 14 L 3.5332031 14 L 5.7675781 8.0292969 z M 13 13 L 18 13 A 2.5 2.5 0 0 1 20.5 15.5 A 2.5 2.5 0 0 1 18 18 L 13 18 L 13 13 z "
     transform="translate(421.71429,525.79074)"
    class="ColorScheme-Text"
    />  
 <path 
    style="fill:currentColor;fill-opacity:1;stroke:none" 
    d="m 434.71429,531.79074 3,-4 3,4 z"
    class="ColorScheme-Accent"
    />  
 </g>
		</svg>
	{/if}
