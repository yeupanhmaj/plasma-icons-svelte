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
	<g id="preferences-system-bluetooth-inactive" transform="translate(44,94) translate(-7,-116)">
        <path id="path4428" class="ColorScheme-Text" d="m-21 26v10.998047l-5.998047-5.998047-0.705078 0.705078 6.292969 6.294922-6.292969 6.294922 0.705078 0.705078 5.998047-5.998047v10.998047h1.002l5.998-5.998047v-4e-3l-5.998047-5.997953 5.998047-5.998047v-0.003953l-5.998047-5.998h-1.001953zm1 1.410156 4.587891 4.589844-4.587891 4.589844v-9.179688zm0 12 4.587891 4.589844-4.587891 4.589844v-9.179688z" fill="currentColor" opacity=".5"/>
    </g>
</svg>
