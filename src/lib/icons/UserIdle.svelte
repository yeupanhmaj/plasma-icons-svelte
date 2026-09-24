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
     style="opacity:1;fill:#9b59b6;fill-opacity:1;stroke:none;stroke-opacity:1"
     d="M 8 2 C 6.3431458 2 5 3.3431458 5 5 C 5 6.6568542 6.3431458 8 8 8 C 9.6568542 8 11 6.6568542 11 5 C 11 3.3431458 9.6568542 2 8 2 z M 8 9 A 5 4.5 0 0 0 3 13.5 A 5 4.5 0 0 0 3.0332031 14 L 4 14 L 4.0449219 14 L 11.955078 14 L 12 14 L 12.962891 14 A 5 4.5 0 0 0 13 13.5 A 5 4.5 0 0 0 8 9 z M 8 10 A 4 3.5 0 0 1 11.955078 13 L 4.0449219 13 A 4 3.5 0 0 1 8 10 z "
     />
    <path
       style="fill:#ffffff"
       d="M 6.5 4.5 A 0.5 0.5 0 0 0 6 5 A 0.5 0.5 0 0 0 6.5 5.5 A 0.5 0.5 0 0 0 7 5 A 0.5 0.5 0 0 0 6.5 4.5 z M 8 4.5 A 0.5 0.5 0 0 0 7.5 5 A 0.5 0.5 0 0 0 8 5.5 A 0.5 0.5 0 0 0 8.5 5 A 0.5 0.5 0 0 0 8 4.5 z M 9.5 4.5 A 0.5 0.5 0 0 0 9 5 A 0.5 0.5 0 0 0 9.5 5.5 A 0.5 0.5 0 0 0 10 5 A 0.5 0.5 0 0 0 9.5 4.5 z "/>
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
			<g
     id="layer1"
     transform="translate(-421.71429,-525.79071)">
    <path
       style="opacity:1;fill:#9b59b6;fill-opacity:1;stroke:none"
       d="M 11 3 A 3.9999902 4.0000296 0 0 0 7 7 A 3.9999902 4.0000296 0 0 0 11 11 A 3.9999902 4.0000296 0 0 0 15 7 A 3.9999902 4.0000296 0 0 0 11 3 z M 11 4 A 3 3.0000296 0 0 1 14 7 A 3 3.0000296 0 0 1 11 10 A 3 3.0000296 0 0 1 8 7 A 3 3.0000296 0 0 1 11 4 z M 11 12 A 7.9999504 8.0000296 0 0 0 3.0722656 19 L 4.0800781 19 A 6.9999604 7.0000296 0 0 1 11 13 A 6.9999604 7.0000296 0 0 1 12 13.080078 L 12 12.070312 A 7.9999504 8.0000296 0 0 0 11 12 z M 15.5 12 A 3.4999852 3.4999852 0 0 0 12 15.5 A 3.4999852 3.4999852 0 0 0 15.5 19 A 3.4999852 3.4999852 0 0 0 19 15.5 A 3.4999852 3.4999852 0 0 0 15.5 12 z "
       transform="translate(421.71429,525.79071)"
       id="path4152" />
    <path
       transform="matrix(0,1,-1,0,0,0)"
       style="opacity:0.7;fill:#ffffff;fill-opacity:1;stroke:none"
       d="m 541.79071,-435.21429 a 0.5,0.5 0 0 1 -0.5,0.5 0.5,0.5 0 0 1 -0.5,-0.5 0.5,0.5 0 0 1 0.5,-0.5 0.5,0.5 0 0 1 0.5,0.5 z"
       id="circle4207" />
    <path
       style="opacity:0.4;fill:#ffffff;fill-opacity:1;stroke:none"
       d="m 437.71429,541.29071 a 0.5,0.5 0 0 1 -0.5,0.5 0.5,0.5 0 0 1 -0.5,-0.5 0.5,0.5 0 0 1 0.5,-0.5 0.5,0.5 0 0 1 0.5,0.5 z"
       id="path4188-7" />
    <path
       style="opacity:0.3;fill:#ffffff;fill-opacity:1;stroke:none"
       d="m 439.71429,541.29071 a 0.5,0.5 0 0 1 -0.5,0.5 0.5,0.5 0 0 1 -0.5,-0.5 0.5,0.5 0 0 1 0.5,-0.5 0.5,0.5 0 0 1 0.5,0.5 z"
       id="path4188-0" />
  </g>
		</svg>
	{/if}
