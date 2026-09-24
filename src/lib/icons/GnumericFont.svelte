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
			<defs>
        <style type="text/css">.ColorScheme-Text {
        color:#232629;
      }</style>
    </defs>
    <path class="ColorScheme-Text" d="m7.3835 3-4.383 11h1.357l1.189-3h4.928l1.152 3h1.373l-4.252-11zm0.68 1.328c0.113 0.376 0.711 2.082 1.797 5.115l0.225 0.557h-4.143z" fill="currentColor"/>
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
			<path id="path4" class="ColorScheme-Text" d="m9.910156 4-3.3144529 9.59375-0.1230469 0.40625-1.4726562 4h1.6582031l1.625-4.4375h5.4335939l1.625 4.4375h1.658203l-1.472656-4-0.123047-0.40625-3.314453-9.59375h-1.964844zm1.105469 1.9375 2.179687 6.34375h-4.3906245z" fill="currentColor"/>
		</svg>
	{/if}
