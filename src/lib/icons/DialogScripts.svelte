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
     d="M 2 2 L 2 14 L 14 14 L 14 2 L 2 2 z M 3 3 L 13 3 L 13 13 L 3 13 L 3 3 z M 4.71875 4 L 4 4.6875 L 6.625 7.5 L 4.03125 10.3125 L 4.71875 11 L 7.6875 7.84375 L 8 7.5 L 7.6875 7.15625 L 4.71875 4 z M 8 11 L 8 12 L 12 12 L 12 11 L 8 11 z "
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
			<g class="ColorScheme-Text" fill="currentColor" fill-rule="evenodd">
        <path d="m3 3v16h16v-16zm1 1h14v14h-14z"/>
        <path d="m6.5 5.7929688-.7070312.7070312 3.5 3.5c-1.1666667 1.166667-2.3333336 2.333333-3.5 3.5l.7070312.707031c1.4023444-1.402343 2.8046874-2.804687 4.207031-4.207031-1.4023437-1.4023437-2.8046873-2.8046875-4.207031-4.2070312z"/>
        <path d="m10 15h6v1h-6z"/>
    </g>
		</svg>
	{/if}
