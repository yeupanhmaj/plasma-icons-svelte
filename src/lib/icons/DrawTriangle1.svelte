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
			<path class="ColorScheme-Text" d="m2 8 12 6v-12zm2.237-1e-3 8.764-4.383v8.766z" fill="currentColor"/>
    <path d="m8.5817761 10.484171-4.8773492-2.4993198 4.8736171-2.4974076c2.680489-1.3735742 4.878343-2.4925634 4.884121-2.4866426 0.0058 0.00592 0.0075 2.2544484 0.0037 4.9967281l-0.0068 4.9859639z" class="ColorScheme-Text" fill="currentColor" fill-opacity=".50196078"/>
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
			<path class="ColorScheme-Text" transform="translate(-.99999-.99999)" d="M 19,4 18,4.5722656 5,12 18,19.427734 19,20 19,18.84375 19,5 19,4 Z M 18,5.5839844 18,18.271484 7.0234375,12 18,5.5839844 Z" fill="currentColor"/>
    <path d="m11.473669 14.373623-5.938988-3.38007 0.1989929-0.114978c0.1094461-0.063238 2.7819904-1.6190076 5.9389871-3.457265l5.739995-3.3422866 0.0064 3.4172364c0.0036 1.87948 0.0036 4.9562802 0 6.8373342l-0.0064 3.420099z" class="ColorScheme-Text" fill="currentColor" fill-opacity=".50196078"/>
		</svg>
	{/if}
