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
     d="M 8 2 L 8 2.0019531 C 6.0003 2.0019531 5 3.4915312 5 5.3007812 C 5 7.2503412 7 11 7 11 L 9 11 C 9 11 11 7.2483881 11 5.2988281 C 11 3.4896081 10.0003 2 8 2 z M 8 3 C 9.33353 3 10 4.1592363 10 5.5664062 C 10 7.0827363 8.6660156 10 8.6660156 10 L 7.3339844 10 C 7.3339844 10 6 7.0827264 6 5.5664062 C 6 4.1592063 6.66687 3.0019531 8 3.0019531 L 8 3 z M 7 12 L 7 13 A 0.99998522 0.99998522 0 0 0 8 14 A 0.99998522 0.99998522 0 0 0 9 13 L 9 12 L 8 12 L 7 12 z "
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
    d="M 11 3 L 11 3.0019531 C 8.00044 3.0019531 6.5 4.9881406 6.5 7.4003906 C 6.5 9.9997541 9.4140625 15 9.4140625 15 L 12.585938 14.996094 C 12.585938 14.996094 15.5 9.999751 15.5 7.4003906 C 15.5 4.9881646 14.00044 3 11 3 z M 11 4.0019531 C 13.33368 4.0019531 14.5 5.6577086 14.5 7.6679688 C 14.5 9.834169 12.234375 13.998047 12.234375 13.998047 L 9.765625 14.001953 C 9.765625 14.001953 7.5 9.8341689 7.5 7.6679688 C 7.5 5.6576788 8.66702 4.0039063 11 4.0039062 L 11 4.0019531 z M 9 16 L 9 17.5 C 9 18.331 9.669 19 10.5 19 L 11.5 19 C 12.331 19 13 18.331 13 17.5 L 13 16 L 11.5 16 L 10.5 16 L 9 16 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
