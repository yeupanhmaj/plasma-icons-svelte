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
     d="M 7 3 L 7 4.03125 A 4.5 4.5 0 0 0 3.0332031 8 L 2 8 L 2 9 L 3.03125 9 A 4.5 4.5 0 0 0 7 12.966797 L 7 14 L 8 14 L 8 12.96875 A 4.5 4.5 0 0 0 11.966797 9 L 13 9 L 13 8 L 11.96875 8 A 4.5 4.5 0 0 0 8 4.0332031 L 8 3 L 7 3 z M 7 5.0390625 L 7 8 L 4.0410156 8 A 3.5 3.5 0 0 1 7 5.0390625 z M 8 5.0410156 A 3.5 3.5 0 0 1 10.960938 8 L 8 8 L 8 5.0410156 z M 4.0390625 9 L 7 9 L 7 11.958984 A 3.5 3.5 0 0 1 4.0390625 9 z M 8 9 L 10.958984 9 A 3.5 3.5 0 0 1 8 11.960938 L 8 9 z "
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
	 d="M 10.5 2 L 10.5 4.0253906 A 7 7 0 0 0 4.0175781 10.5 L 2 10.5 L 2 11.5 L 4.0253906 11.5 A 7 7 0 0 0 10.5 17.982422 L 10.5 20 L 11.5 20 L 11.5 17.974609 A 7 7 0 0 0 17.982422 11.5 L 20 11.5 L 20 10.5 L 17.974609 10.5 A 7 7 0 0 0 11.5 4.0175781 L 11.5 2 L 10.5 2 z M 10.5 5.0253906 L 10.5 7.0351562 A 4 4 0 0 0 7.0371094 10.5 L 5.0253906 10.5 A 6 6 0 0 1 10.5 5.0253906 z M 11.5 5.0253906 A 6 6 0 0 1 16.974609 10.5 L 14.964844 10.5 A 4 4 0 0 0 11.5 7.0371094 L 11.5 5.0253906 z M 10.5 8.0410156 L 10.5 10.5 L 8.046875 10.5 A 3 3 0 0 1 10.5 8.0410156 z M 11.5 8.046875 A 3 3 0 0 1 13.958984 10.5 L 11.5 10.5 L 11.5 8.046875 z M 5.0253906 11.5 L 7.0351562 11.5 A 4 4 0 0 0 10.5 14.962891 L 10.5 16.974609 A 6 6 0 0 1 5.0253906 11.5 z M 8.0410156 11.5 L 10.5 11.5 L 10.5 13.953125 A 3 3 0 0 1 8.0410156 11.5 z M 11.5 11.5 L 13.953125 11.5 A 3 3 0 0 1 11.5 13.958984 L 11.5 11.5 z M 14.962891 11.5 L 16.974609 11.5 A 6 6 0 0 1 11.5 16.974609 L 11.5 14.964844 A 4 4 0 0 0 14.962891 11.5 z "
	 class="ColorScheme-Text"
     />
		</svg>
	{/if}
