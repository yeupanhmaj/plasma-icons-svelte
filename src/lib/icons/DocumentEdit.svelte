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
     d="M 10.398438 2 L 5.2871094 7.1113281 L 2 10.398438 L 2 14 L 5.6015625 14 L 14 5.6015625 L 10.398438 2 z M 8.3496094 5.4902344 L 10.509766 7.6503906 L 7.3359375 10.826172 L 7.3359375 10.150391 L 6.3222656 10.171875 L 5.2871094 10.171875 L 5.2871094 9.1367188 L 5.2871094 8.5507812 L 6.7285156 7.1113281 L 8.3496094 5.4902344 z M 4.2734375 9.5644531 L 4.2734375 11.185547 L 5.3085938 11.185547 L 6.3007812 11.185547 L 6.3222656 11.837891 L 5.2421875 12.919922 L 3.8007812 12.919922 L 3.0800781 12.199219 L 3.0800781 10.757812 L 4.2734375 9.5644531 z "
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
   d="m14.996094 3l-11.992188 11.992188h-.003906v4.00781h1 2 1.00781v-.003906l11.992188-11.992188-.001953-.001953.001953-.001953-4-4-.001953.001953-.001953-.001953m-1.998047 3.412109l2.589844 2.589844-7.587891 7.587891v-1.589844h-1-1v-1-.589844l6.998047-6.998047m-7.998047 7.998047v1.589844h1 1v1 .589844l-.410156.410156h-1.589844l-1-1v-1.589844l1-1" 
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
     d="m22.27 4l-18.27 18.27v5.73h5.73c0 0 18.269-18.269 18.27-18.27zm-2.865 4.299l4.297 4.297-11.701 11.703v-2.299h-4v-2.299zm-12.404 12.402v2.299h4v2.299l-1.701 1.701h-2l-2.297-2.297v-2z"
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
