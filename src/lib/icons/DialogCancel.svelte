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
       d="M 8 2 C 4.6862928 2 2 4.6862997 2 8 C 2 11.3137 4.6862928 14 8 14 C 11.313707 14 14 11.3137 14 8 C 14 4.6862997 11.313707 2 8 2 z M 8 3 C 10.761424 3 13 5.2385763 13 8 C 13 9.199635 12.548037 10.263384 11.84375 11.125 L 4.875 4.15625 C 5.7366165 3.4519627 6.8003651 3 8 3 z M 4.15625 4.875 L 11.125 11.84375 C 10.263384 12.548037 9.199635 13 8 13 C 5.2385763 13 3 10.761424 3 8 C 3 6.8003651 3.4519627 5.7366165 4.15625 4.875 z "
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
	transform="translate(-1-1)" d="m12 4c-2.027598 0-3.87132.756694-5.28125 2-.126239.11132-.25603.22478-.375.34375l-.34375.375c-1.243306 1.40993-2 3.253652-2 5.28125 0 4.41828 3.58172 8 8 8 2.027598 0 3.87132-.756694 5.28125-2l.375-.34375c.11897-.11897.23243-.248761.34375-.375 1.243306-1.40993 2-3.253652 2-5.28125 0-4.41828-3.58172-8-8-8m0 1c3.86599 0 7 3.13401 7 7 0 1.75366-.653215 3.334268-1.71875 4.5625l-9.84375-9.84375c1.228231-1.065535 2.80884-1.71875 4.5625-1.71875m-5.28125 2.4375l9.84375 9.84375c-1.228232 1.065535-2.80884 1.71875-4.5625 1.71875-3.86599 0-7-3.13401-7-7 0-1.75366.653215-3.334269 1.71875-4.5625"
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" 
       d="M16 4A12 12 0 0 0 7.886719 7.179688L7.885 7.178A12 12 0 0 0 7.847656 7.214844 12 12 0 0 0 4 16 12 12 0 0 0 16 28 12 12 0 0 0 24.11328 24.820312L24.12 24.822A12 12 0 0 0 24.15234 24.785156 12 12 0 0 0 28 16 12 12 0 0 0 16 4M16 5A11 11 0 0 1 27 16 11 11 0 0 1 24.11523 23.408203L8.592 7.885A11 11 0 0 1 16 5M7.885 8.592L23.408 24.12A11 11 0 0 1 16 27 11 11 0 0 1 5 16 11 11 0 0 1 7.884766 8.591797"
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
