<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 22,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();
</script>

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
	<path id="path986" d="m11 3a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 4.892578-1.693359l3.400391 3.40039a1 1 0 0 0 1.414062 0 1 1 0 0 0 0-1.414062l-3.40039-3.400391a8 8 0 0 0 1.693359-4.892578 8 8 0 0 0-8-8zm0 1a7 7 0 0 1 7 7 7 7 0 0 1-7 7 7 7 0 0 1-7-7 7 7 0 0 1 7-7z" class="ColorScheme-Text" fill="currentColor" stroke-linecap="round" style="-inkscape-stroke:none;paint-order:markers stroke fill"/>
    <g id="text364" transform="matrix(1.0514754,0,0,1.0126385,5.5902313,1.6893987)" class="ColorScheme-Accent" fill="currentColor" stroke-linecap="square" stroke-width="2.4" style="paint-order:markers stroke fill;white-space:pre" aria-label="1">
        <path id="path363" d="m6.0959759 13.144475h-0.9510446v-4.9335435q0-0.6592468 0.043229-1.950722-0.2107425 0.2323574-0.6538428 0.6106138l-0.7943383 0.6538431-0.5241552-0.6646504 2.0696026-1.615695h0.8105493z"/>
    </g>
</svg>
