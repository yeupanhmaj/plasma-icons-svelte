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
        d="m 9.461,3.005 -3.59925,9 -1.8615,0 0,0.99975 2.53875,0 3.59775,-9 0.86325,0 0,-0.99975 -0.99975,0 z"
        class="ColorScheme-Text"
        />
  <path
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="M 11 2 L 11 5 L 14 5 L 14 2 L 11 2 z M 12 3 L 13 3 L 13 4 L 12 4 L 12 3 z M 2 11 L 2 14 L 5 14 L 5 11 L 2 11 z M 3 12 L 4 12 L 4 13 L 3 13 L 3 12 z "
        class="ColorScheme-Accent"
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
			/>
    <path
       style="fill:currentColor;fill-opacity:1;stroke:none" 
       d="M 16 3 L 16 6 L 19 6 L 19 3 L 16 3 z M 17 4 L 18 4 L 18 5 L 17 5 L 17 4 z M 3 16 L 3 19 L 6 19 L 6 16 L 3 16 z M 4 17 L 5 17 L 5 18 L 4 18 L 4 17 z " 
        class="ColorScheme-Accent"
        />
    <path
       style="fill:currentColor;fill-opacity:1;stroke:none" 
       d="M 13.941406 4 L 7.4414062 17 L 6 17 L 6 18 L 6.9414062 18 L 8 18 L 8.0585938 18 L 14.558594 5 L 16 5 L 16 4 L 15.058594 4 L 14 4 L 13.941406 4 z "
        class="ColorScheme-Text"
        />
		</svg>
	{/if}
