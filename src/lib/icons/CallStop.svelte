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
     class="ColorScheme-NegativeText"
    d="m6 6c-1.712 0-3.189.921-4 2.289v1.044c0 0 0 .667.667.667h2c.667 0 .667-.667.667-.667v-.333c0-.554.446-1 1-1h3.333c.554 0 1 .446 1 1v.333c0 0 0 .667.667.667h2c.667 0 .667-.667.667-.667v-1.044c-.811-1.368-2.288-2.289-4-2.289z" />
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-NegativeText"
        d="m386.85714 548.07646c-2.56828 0-4.78334 1.3818-6 3.43361l.00001.56641-.00001.99999c0 0 .00001.99999 1.00003 1h3c1 0 1-1 1-1v-.5c0-.831.66901-1.5 1.5-1.5l4.99997-.00001c.83098 0 1.5.669 1.5 1.50001v.5c0 0 0 .99999 1 .99999h3c1 0 1-.99999 1-.99999v-.99999-.56641c-1.21666-2.05181-3.43208-3.4336-6-3.4336z" transform="translate(-378.85714-540.07647)"
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
			<path
        style="fill:currentColor;fill-opacity:1;stroke:none" 
        class="ColorScheme-NegativeText" d="M12.002 12.002c-3.424 0-6.377 1.842-8 4.578v2.088s0 1.333 1.333 1.333h4c1.334 0 1.334-1.333 1.334-1.333v-.667c0-1.108.892-2 2-2h6.666c1.108 0 2 .892 2 2v.667s0 1.333 1.334 1.333h4c1.333 0 1.333-1.333 1.333-1.333V16.58c-1.623-2.736-4.576-4.578-8-4.578z"/>
		</svg>
	{/if}
