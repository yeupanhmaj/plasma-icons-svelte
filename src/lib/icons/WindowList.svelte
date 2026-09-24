<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 32,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();
</script>

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
	<g id="window-list" transform="translate(-286 -545.36218) translate(0,-16)">
        <path id="rect3004" d="m286 561.36218h32v32h-32z" fill="#333" opacity="0"/>
        <path id="rect3008" d="m290 565.3622v10h10v-10zm1 1h8v8h-8z" class="ColorScheme-Text" fill="currentColor"/>
        <path id="rect3010" d="m304 565.3622v10h10v-10zm1 1h8v8h-8z" class="ColorScheme-Text" fill="currentColor"/>
        <path id="rect3012" d="m290 579.3622v10h10v-10zm1 1h8v8h-8z" class="ColorScheme-Text" fill="currentColor"/>
        <path id="rect3014" d="m304 579.3622v10h10v-10zm1 1h8v8h-8z" class="ColorScheme-Text" fill="currentColor"/>
    </g>
</svg>
