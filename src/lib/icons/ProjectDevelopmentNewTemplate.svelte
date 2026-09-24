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
     d="M 2 2 L 2 14 L 8 14 L 8 13 L 3 13 L 3 5 L 13 5 L 13 8 L 14 8 L 14 2 L 3 2 L 2 2 z M 11.001953 8.0019531 L 10.427734 9.6152344 L 8.8808594 8.8789062 L 9.6152344 10.425781 L 8.0019531 11 L 9.6152344 11.574219 L 8.8789062 13.121094 L 10.425781 12.386719 L 11 14 L 11.574219 12.386719 L 13.121094 13.121094 L 12.386719 11.574219 L 14 11 L 12.386719 10.427734 L 13.121094 8.8808594 L 11.574219 9.6152344 L 11.001953 8.0019531 z "
     class="ColorScheme-Text"/>
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
    d="M 3 3 L 3 7 L 3 18 L 3 19 L 4 19 L 13 19 L 13 18 L 4 18 L 4 7 L 18 7 L 18 13 L 19 13 L 19 7 L 19 3 L 3 3 z M 16 13 L 15.425781 14.613281 L 13.878906 13.878906 L 14.613281 15.425781 L 13 16 L 14.613281 16.574219 L 13.878906 18.121094 L 15.425781 17.386719 L 16 19 L 16.574219 17.386719 L 18.121094 18.121094 L 17.386719 16.574219 L 19 16 L 17.386719 15.425781 L 18.121094 13.878906 L 16.574219 14.613281 L 16 13 z "
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
