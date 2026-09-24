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
			<g class="ColorScheme-Text" fill="currentColor">
    <path d="m2 2v12h12v-12zm1 1h10v10h-10z"/>
    <path d="m8 2a6 6 0 0 1-6 6v-6z"/>
    <path d="m7.3548 6.6473-0.70954 0.70544 2.4602 2.4404 0.70955-0.70544z"/>
    <path d="m5.0827 8.385-0.93055 0.36766 1.2957 3.2139 0.93056-0.36766z"/>
    <path d="m8.3809 5.0844 0.36766-0.93055 3.2139 1.2957-0.36766 0.93056z"/>
  </g>
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
			<g fill="currentColor" class="ColorScheme-Text">
    <path d="m3 3v16h16v-16h-16zm1 1h14v14h-14v-14z"/>
    <path d="m11 3a8 8 0 0 1-8 8v-8z"/>
    <path d="m10.354 9.6465-0.70703 0.70703 3 3 0.70703-0.70703z"/>
    <path d="m7.4844 11.879-0.96875 0.24219 1 4 0.96875-0.24219z"/>
    <path d="m12.121 6.5156-0.24219 0.96875 4 1 0.24219-0.96875z"/>
  </g>
		</svg>
	{/if}
