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

	{#if numericSize <= 27}
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
			<g transform="matrix(1.0000029,0,0,1.000001,-420.71555,-516.79125) translate(-2.6353e-15,-10)" id="22-22-applications-other">
    <rect style="opacity:0.01000001;fill:#000000;fill-opacity:0.00392157;stroke:none" id="rect3028" width="22" height="22" x="-7.1556997e-08" y="2.0000052" transform="matrix(0.99999706,0,0,0.99999899,420.71433,524.79072)"/>
    <path style="fill:currentColor;fill-opacity:1;stroke:none" d="m 423.71432,529.79072 0,6.99999 6.99998,0 0,-6.99999 -6.99998,0 z m 8.99998,0 0,6.99999 6.99998,0 0,-6.99999 -6.99998,0 z m -7.99998,1 4.99999,0 0,4.99999 -4.99999,0 0,-4.99999 z m 8.99997,0 4.99999,0 0,4.99999 -4.99999,0 0,-4.99999 z m -9.99997,7.99999 0,6.99999 6.99998,0 0,-6.99999 -6.99998,0 z m 8.99998,0 0,6.99999 0.99999,0 4.99999,0 1,0 0,-1 0,-4.99999 0,-1 -1,0 -4.99999,0 -0.99999,0 z m -7.99998,1 4.99999,0 0,4.99999 -4.99999,0 0,-4.99999 z m 8.99997,0 4.99999,0 0,4.99999 -4.99999,0 0,-4.99999 z" id="rect4298" class="ColorScheme-Text"/>
  </g>
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
			<g transform="matrix(1.0000028,0,0,1.0000009,-398.71551,-516.79118) translate(-22,-1.83917e-05)" id="applications-other">
    <rect style="opacity:0.01000001;fill:#000000;fill-opacity:0.00392157;stroke:none" id="rect2994" width="32" height="32" x="-7.1557004e-08" y="-7.9999948" transform="matrix(0.99999706,0,0,0.99999899,420.71433,524.79072)"/>
    <path style="fill:currentColor;fill-opacity:1;stroke:none" d="m 424.71433,520.79075 0,9.99995 9.99995,10e-6 0,-9.99994 z m 13.99994,2e-5 0,9.99994 9.99998,-10e-6 0,-9.99995 z m -12.99995,0.99994 7.99998,0 0,7.99999 -7.99998,0 z m 13.99996,0 7.99998,0 0,7.99999 -7.99998,0 z m -14.99995,13 0,9.99998 9.99995,2e-5 0,-9.99998 z m 13.99994,2e-5 0,9.99998 1.99999,-2e-5 5.99999,0 2,0 0,-1.99998 0,-5.99999 0,-2.00001 -2,0 -5.99999,0 z m -12.99995,0.99997 7.99998,0 0,7.99999 -7.99998,0 z m 13.99996,0 7.99998,0 0,7.99999 -7.99998,0 z" id="path2996" class="ColorScheme-Text"/>
  </g>
		</svg>
	{/if}
