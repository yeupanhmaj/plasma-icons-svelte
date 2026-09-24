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
     d="M 2 2 L 2 5 L 3 5 L 3 10 L 3 10.111328 L 2 11.125 L 2 12.5 L 2 14 C 2.5669591 14.009969 2.9082961 14.002744 3.5 14 C 4.0300681 13.997542 4.84375 14 4.84375 14 C 4.8476677 14.000164 5.6326634 13.194382 5.8261719 13 L 6 13 L 11 13 L 11 14 L 14 14 L 14 11 L 13 11 L 12 11 L 11 11 L 11 12 L 6.8105469 12 C 9.2200533 9.5566597 13.84375 4.84375 13.84375 4.84375 L 11 2 L 4 9.0976562 L 4 5 L 5 5 L 5 4 L 5 3 L 5 2 L 2 2 z M 3 3 L 4 3 L 4 4 L 3 4 L 3 3 z M 10.28125 4.15625 L 11.6875 5.5625 L 6.2734375 11.123047 L 4.8652344 9.7265625 L 10.28125 4.15625 z M 13.96875 9 C 13.96175 9.00003 13.939141 9.0058594 13.931641 9.0058594 L 14 9.0058594 C 13.9879 9.0038588 13.98115 9.002 13.96875 9 z M 12 12 L 13 12 L 13 13 L 12 13 L 12 12 z "
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
	d="m3 3v3h1v7.996094l-.996094.996094h-.003906v4.00781h1 2 1.00781v-.003906l1-1h7.992188v1.00391h3v-3h-3v1h-6.996094l9.996094-9.996094-.001953-.001953.001953-.001953-4-4-.001953.001953-.001953-.001953-9.996094 9.996094v-6.996094h1v-3h-3m1 1h1v1h-1v-1m10.998047.412109l2.589844 2.589844-2 2-6.792969 6.792969-.794922-.794922-1.794922-1.794922 6.792969-6.792969 2-2m2.00195 12.587891h1v1h-1v-1"
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
