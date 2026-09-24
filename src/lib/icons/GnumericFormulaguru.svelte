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
       d="M 7 2 C 5.89543 2 5 2.89543 5 4 L 5 5 L 5 6 L 5 7 L 3 7 L 3 8 L 5 8 L 5 9 L 5 11 L 5 14 L 6 14 L 6 9 L 6 8 L 8 8 L 8 7 L 6 7 L 6 5 L 6 4 C 6 3.44772 6.44772 3 7 3 L 8 3 L 9 3 L 9 2 L 8 2 L 7 2 z M 9.4648438 9.7578125 L 8.7578125 10.464844 L 10.171875 11.878906 L 8.7578125 13.292969 L 9.4648438 14 L 10.878906 12.585938 L 12.292969 14 L 13 13.292969 L 11.585938 11.878906 L 13 10.464844 L 12.292969 9.7578125 L 10.878906 11.171875 L 9.4648438 9.7578125 z "
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
			<path id="path4" class="ColorScheme-Text" d="m9 3c-1.656854 0-3 1.3431-3 3v2h-2v1h2v10h1v-10h2v-1h-2v-2c0-1.1045695 0.8954305-2 2-2h1v-1zm3.742188 10-0.742188 0.732422 2.292969 2.267578-2.292969 2.267578 0.742188 0.732422 2.292968-2.267578 2.222656 2.199219 0.742188-0.732422-2.224609-2.199219 2.224609-2.199219-0.742188-0.732422-2.222656 2.199219z" fill="currentColor"/>
		</svg>
	{/if}
