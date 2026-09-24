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
	<g id="22-22-preferences-system-bluetooth-inactive" transform="translate(-44,94) translate(-22,-94)">
        <path id="path4164" class="ColorScheme-Text" d="m76.998047 3v7.041013l-3.292969-3.2929692-2e-3 0.00195c-0.355749-0.3559538-0.996047-0.9960876-0.996047-0.9960876l-0.707031 0.7070313 4.544922 4.5410155-4.544922 4.541016 0.707031 0.707031s0.640351-0.640094 0.996094-0.996094h2e-3l3.294875-3.292968v7.039062h1l4-4-4-4 4-4-4-4zm1.001953 1.4160156 2.585938 2.5859375-2.585938 2.5859375zm0 8.0000004 2.585938 2.585937-2.585938 2.585938z" fill="currentColor" opacity=".5"/>
    </g>
</svg>
