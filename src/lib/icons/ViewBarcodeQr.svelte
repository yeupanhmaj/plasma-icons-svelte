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
			<path class="ColorScheme-Text" fill="currentColor" d="M 2 2 L 2 6 L 6 6 L 6 2 L 2 2 z M 8 2 L 8 3 L 9 3 L 9 2 L 8 2 z M 8 3 L 7 3 L 7 5 L 8 5 L 8 3 z M 8 5 L 8 6 L 9 6 L 9 5 L 8 5 z M 8 6 L 7 6 L 7 7 L 8 7 L 8 6 z M 8 7 L 8 8 L 8 9 L 10 9 L 10 8 L 9 8 L 9 7 L 8 7 z M 10 8 L 11 8 L 11 7 L 10 7 L 10 8 z M 11 8 L 11 9 L 12 9 L 12 8 L 11 8 z M 12 8 L 13 8 L 13 7 L 12 7 L 12 8 z M 13 8 L 13 9 L 12 9 L 12 10 L 13 10 L 14 10 L 14 9 L 14 8 L 13 8 z M 12 10 L 10 10 L 10 12 L 12 12 L 12 11 L 12 10 z M 10 12 L 9 12 L 9 13 L 10 13 L 10 12 z M 10 13 L 10 14 L 11 14 L 11 13 L 10 13 z M 9 13 L 8 13 L 8 14 L 9 14 L 9 13 z M 8 13 L 8 11 L 7 11 L 7 13 L 8 13 z M 8 11 L 9 11 L 9 10 L 8 10 L 8 11 z M 7 7 L 6 7 L 5 7 L 5 8 L 6 8 L 6 9 L 7 9 L 7 7 z M 5 8 L 3 8 L 3 9 L 5 9 L 5 8 z M 3 8 L 3 7 L 2 7 L 2 8 L 3 8 z M 10 2 L 10 6 L 14 6 L 14 2 L 10 2 z M 3 3 L 5 3 L 5 5 L 3 5 L 3 3 z M 11 3 L 13 3 L 13 5 L 11 5 L 11 3 z M 2 10 L 2 14 L 6 14 L 6 10 L 2 10 z M 3 11 L 5 11 L 5 13 L 3 13 L 3 11 z M 13 11 L 13 12 L 13 13 L 14 13 L 14 11 L 13 11 z M 13 13 L 12 13 L 12 14 L 13 14 L 13 13 z"/>
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
			<path class="ColorScheme-Text" fill="currentColor" d="M 3,3 V 9 H 9 V 3 Z m 7,0 v 1 h 1 V 3 Z m 1,1 v 1 h -1 v 1 h 2 V 4 Z m 2,-1 v 6 h 6 V 3 Z M 4,4 H 8 V 8 H 4 Z m 10,0 h 4 V 8 H 14 Z M 5,5 V 7 H 7 V 5 Z m 10,0 v 2 h 2 V 5 Z m -5,2 v 1 h 1 V 7 Z m 1,1 v 1 h 1 V 8 Z m -7,2 v 1 h 1 v -1 z m 1,1 v 1 h 2 v -1 z m 2,0 H 8 9 V 10 H 8 7 Z m 2,0 v 1 h 2 v -2 h -1 v 1 z m 2,1 v 1 h -1 v 1 h 1 v 1 h 1 c 0,-1 0,-2 0,-3 z m 0,3 h -1 v 1 h 1 z M 4,11 H 3 v 1 h 1 z m 8,-1 v 1 h 1 v -1 z m 1,1 v 1 c 1,0 2,0 3,0 v -1 h -1 v -1 h -1 v 1 z m 4,-1 c 0,0.666667 0,1.333333 0,2 h 1 v -1 h 1 V 10 Z M 3,13 v 6 h 6 v -6 z m 10,0 v 4 h 1 v 1 h 1 v -1 h 2 v -1 h 1 v -1 h -1 v -2 z m 5,2 h 1 v -2 h -1 z m 0,1 v 1 h 1 v -1 z m -3,2 v 1 h 2 V 18 Z M 4,14 h 4 v 4 H 4 Z m 10,0 h 2 v 2 h -2 z m -9,1 v 2 h 2 v -2 z m 5,2 v 1 h 1 v -1 z m 2,1 v 1 h 1 v -1 z m 6,0 v 1 h 1 v -1 z"/>
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
			<path d="M16 7V6h1v1zm0 3V9h1v1zm-2 1V9h1v2zm12 12v1h-1v-1zm1-1v1h-1v-1zm-4 3v1h-2v-1zm-1 0v1h-1v-1zm0 2v1h-1v-1zm2-1v2h-1v-2zm4 2h-2v-1h2zm-2-2v2h-1v-2zm1-1v1h-3v-1zm1-2v2h-1v-2zm-9 1h1v1h-1zm1 1h1v1h-1zm-2 2v-1h3v1zm6-7h-1v-1h1zm0-1h-2v-1h2zm-3 0h-1v-1h1zm-3 1h1v2h-1zm0 2h1v1h-1zm10-6h-1v-2h1zm0-1h-1v-1h1zm-1-1h-3v-1h3zm-1 1h-1v-1h1zm1 2h-2v-1h2zm-2 4v-2h1v2zm2-2h-2v-1h2zm1 1h-1v-3h1zm0 2h-2v-1h2zm-8-4h-1v-2h1zm2-4h-1v-1h1zm-1 2h-2v-2h2zm1 2h-1v-1h1zm0-1v-2h1v2zm2-2h-2v-1h2zm1 1h-1v-1h1zm0 2h-2v-1h2zM9 13h1v2H9zm5 4h1v1h-1zm-1-1h1v1h-1zm0 11h3v1h-3zm5 0h1v1h-1zm-5-2h1v1h-1zm1 1h1v1h-1zm2-2v2h-1v-2zm0 2h1v1h-1zm1 0v-4h1v4zm-4-4h4v1h-4zm7 1h3v1h-3zm3 1v-4h1v4zm0-3h-3v-1h3zm-2-1v3h-1v-3zm-5-1v2h-1v-2zm-2 2h2v1h-2zm-4-4h2v1h-2zm3 1h2v1h-2zm5-1v-1h1v1zm-2 2v-2h1v2zm1 1v-4h1v4zM15 5V4h1v1zm0 4V8h1v1zm-8 8h1v1H7zm7-4h2v1h-2zm-3 0h2v1h-2zm1 1h2v1h-2zm-2 1h7v1h-7zm-2 0h2v2H8zm-1-2h1v1H7zm0 1v2H6v-2zm-2 2h2v1H5zm-1-1h1v1H4zm0 3h4v1H4zm0-5h2v1H4zm12-1v-1h1v1zm3 0h-6v1h6zm-6 0V8h1v4zm4-1v-1h1v1zm1 2V8h1v5zm-1-5V7h1v1zm1-1V6h1v1zm-1-1V5h1v1zm0-1V4h2v1zm-4 2V5h1v2zm1 1V4h1v4zM6 26v-4h4v4zm-2 2v-1h8v1zm8 0h-1v-8h1zm0-8v1H4v-1zm-8 0h1v8H4zm18-10V6h4v4zm-2 2v-1h8v1zm8 0h-1V4h1zm0-8v1h-8V4zm-8 0h1v8h-1zM6 10V6h4v4zm-2 2v-1h8v1zm8 0h-1V4h1zm0-8v1H4V4zM4 4h1v8H4z" class="ColorScheme-Text" fill="currentColor"/>
		</svg>
	{/if}
