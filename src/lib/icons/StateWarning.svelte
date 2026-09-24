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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 7.5 2 A 4.5 4.5 0 0 0 3 6.5 A 4.5 4.5 0 0 0 3.0527344 7.15625 A 3 3 0 0 0 1 10 A 3 3 0 0 0 4 13 L 11.5 13 A 3.5 3.5 0 0 0 15 9.5 A 3.5 3.5 0 0 0 11.970703 6.0351562 A 4.5 4.5 0 0 0 7.5 2 z M 7.5 3 A 3.5 3.5 0 0 1 11 6.5 A 3.5 3.5 0 0 1 10.949219 7.0644531 A 2.5 2.5 0 0 1 11.5 7 A 2.5 2.5 0 0 1 14 9.5 A 2.5 2.5 0 0 1 11.5 12 L 4 12 A 2 2 0 0 1 2 10 A 2 2 0 0 1 4 8 A 2 2 0 0 1 4.3574219 8.0332031 A 3.5 3.5 0 0 1 4 6.5 A 3.5 3.5 0 0 1 7.5 3 z "
     class="ColorScheme-Text"
     /> 
 <path
      d="M 10.5 6 A 0.5 0.5002376 0 0 0 10.056641 6.2714844 A 0.5 0.5002376 0 0 1 10.054688 6.2714844 L 10.052734 6.2714844 L 6.0664062 13.248047 L 6.0683594 13.248047 A 0.5 0.5002376 0 0 0 6 13.5 A 0.5 0.5002376 0 0 0 6.5 14 L 14.5 14 A 0.5 0.5002376 0 0 0 15 13.5 A 0.5 0.5002376 0 0 0 14.931641 13.248047 L 14.933594 13.248047 L 10.947266 6.2695312 L 10.943359 6.2695312 A 0.5 0.5002376 0 0 0 10.503906 6 L 10.5 6 z "
        style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NeutralText"
    />
    <path
       style="opacity:1;fill:#ffffff"
       d="M 10 8.0039062 L 10 11.003906 L 11 11.003906 L 11 8.0039062 L 10 8.0039062 z M 10 12.003906 L 10 12.005859 L 10 13.005859 L 11 13.005859 L 11 12.005859 L 11 12.003906 L 10 12.003906 z "
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
			<g
     transform="translate(-421.71429,-525.79074)">
    <path
       style="opacity:1;fill:currentColor;fill-opacity:1;stroke:none"
       d="M 11 4 A 6 6 0 0 0 5 10 A 6 6 0 0 0 5.0039062 10.128906 A 4 4 0 0 0 2 14 A 4 4 0 0 0 6 18 L 15 18 A 5 5 0 0 0 20 13 A 5 5 0 0 0 16.757812 8.3242188 A 6 6 0 0 0 11 4 z M 11 5 A 5 5 0 0 1 15.919922 9.1113281 A 4.0000019 4.0000019 0 0 1 19 13 A 4.0000019 4.0000019 0 0 1 15 17 L 6 17 A 2.9999979 2.9999979 0 0 1 3 14 A 2.9999979 2.9999979 0 0 1 6 11 A 2.9999979 2.9999979 0 0 1 6.1074219 11.005859 A 5 5 0 0 1 6 10 A 5 5 0 0 1 11 5 z "
       transform="translate(421.71429,525.79074)"
       class="ColorScheme-Text"
       id="path4196" />
    <path
       
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NeutralText"
       d="m 437.21429,536.78874 0.004,0 a 0.5,0.5 0 0 1 0.43945,0.2695 l 0.004,0 3.98633,6.9746 -0.002,0 a 0.5,0.5 0 0 1 0.0684,0.252 0.5,0.5 0 0 1 -0.5,0.5 l -8,0 a 0.5,0.5 0 0 1 -0.5,-0.5 0.5,0.5 0 0 1 0.0684,-0.252 l -0.002,0 3.98633,-6.9727 0.002,0 a 0.5,0.5 0 0 1 0.002,0 0.5,0.5 0 0 1 0.44336,-0.2715 l 0,0 z"
       id="path4250" />
    <path
       style="opacity:1;fill:#ffffff"
       d="M 15 13 L 15 16 L 16 16 L 16 13 L 15 13 z M 15 17 L 15 18 L 16 18 L 16 17 L 15 17 z "
       transform="translate(421.71429,525.79074)"
       id="rect4241" />
  </g>
		</svg>
	{/if}
