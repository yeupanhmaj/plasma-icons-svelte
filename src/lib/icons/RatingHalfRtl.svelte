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
			<defs
     id="defs9" />
  
  <path
     d="M 8,0.1875 10.472656,5.1972656 16,6 12,9.8984375 12.943359,15.404297 8,12.804688 3.0566406,15.402344 4,9.8984375 0,6 5.5273437,5.1972656 Z M 8,2.4492188 6.1914062,6.1113281 2.1484375,6.6992187 5.0742187,9.5507813 4.3847656,13.576172 8,11.675781 Z"
     class="ColorScheme-Text"
     fill="currentColor"
     id="path3" />
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
			<defs
     id="defs9" />
  
  <path
     d="M 10.998047,0.0078125 14.396484,6.8945312 22,8 16.5,13.361328 17.794922,20.931641 11,17.357422 4.1992187,20.931641 5.5,13.361328 -0.00195313,8 7.5976562,6.8945312 Z m 0,2.2597656 -2.7343751,5.5410156 -6.1132813,0.8886719 4.4238281,4.3144534 -1.0449218,6.091797 5.4687501,-2.876954 z"
     class="ColorScheme-Text"
     fill="currentColor"
     id="path3" />
		</svg>
	{/if}
