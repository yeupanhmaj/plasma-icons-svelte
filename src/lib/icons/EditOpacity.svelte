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
			<g class="ColorScheme-Text" fill="currentColor"><path d="M4.098 11C4.49 12.715 6.086 14 8 14s3.51-1.285 3.902-3z" fill-rule="evenodd" opacity=".66"/><path d="M4.793 8C4.331 8.774 4 9.489 4 10.182c0 .281.037.554.098.818h7.804c.06-.264.098-.537.098-.818 0-.693-.33-1.408-.793-2.182z" fill-rule="evenodd" opacity=".33"/><path d="M8 2c-1.072 3.818-4 6.073-4 8.182C4 12.29 5.79 14 8 14s4-1.71 4-3.818C12 8.072 9.072 5.818 8 2zm0 2.594a26.77 26.77 0 001.568 2.691C10.436 8.592 11 9.59 11 10.182 11 11.724 9.693 13 8 13s-3-1.276-3-2.818c0-.592.564-1.59 1.432-2.897A26.77 26.77 0 008 4.594z"/></g>
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
			<g class="ColorScheme-Text" fill="currentColor"><path d="m6 14c0 2.77 2.23 5 5 5s5-2.23 5-5z" fill-rule="evenodd" opacity=".66"/><path d="m7.482 10c-.34.586-.65 1.148-.886 1.676a4.958 4.958 0 0 0 -.596 2.324h10c0-.845-.228-1.627-.596-2.324a18.518 18.518 0 0 0 -.886-1.676z" fill-rule="evenodd" opacity=".33"/><path d="m11 3c-.973 3.405-3.354 6.332-4.404 8.676a4.958 4.958 0 0 0 -.596 2.324c0 2.77 2.23 5 5 5s5-2.23 5-5c0-.845-.228-1.627-.596-2.324-1.05-2.344-3.431-5.271-4.404-8.676zm0 2.393c1.194 2.668 2.747 5.027 3.492 6.691l.012.03.016.029a3.94 3.94 0 0 1 .48 1.857c0 2.233-1.767 4-4 4a3.97 3.97 0 0 1 -4-4c0-.665.177-1.283.48-1.857l.016-.03.012-.029c.745-1.664 2.298-4.023 3.492-6.691z"/></g>
		</svg>
	{/if}
