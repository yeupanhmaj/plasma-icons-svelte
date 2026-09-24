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
     d="M 2 2 L 2 14 L 5.15625 10.84375 C 4.43239 10.11989 4 9.10457 4 8 C 4 5.79086 5.79086 4 8 4 C 9.10457 4 10.11989 4.43239 10.84375 5.15625 L 14 2 L 2 2 z M 10.84375 5.15625 L 5.15625 10.84375 C 5.88011 11.56761 6.89543 12 8 12 C 10.20914 12 12 10.20914 12 8 C 12 6.89543 11.56761 5.88011 10.84375 5.15625 z "
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
	transform="translate(-1-1)" d="m4 4v16h16v-16h-16m15 1v14h-14l3.46875-3.46875c-.904822-.904822-1.46875-2.150538-1.46875-3.53125 0-2.761424 2.238576-5 5-5 1.380712 0 2.626428.563928 3.53125 1.46875l3.46875-3.46875m-3.46875 3.46875l-7.0625 7.0625c.904822.904822 2.150538 1.46875 3.53125 1.46875 2.761424 0 5-2.238576 5-5 0-1.380712-.563928-2.626428-1.46875-3.53125z"
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
