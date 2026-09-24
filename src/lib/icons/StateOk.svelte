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
			<g
     transform="translate(0,-1036.3622)">
    <path
       style="fill:currentColor;fill-opacity:1;stroke:none" 
       d="M 7.5,2 C 5.0147186,2 3,4.0147186 3,6.5 3.0015312,6.7197442 3.0191564,6.939081 3.0527344,7.15625 1.8279505,7.563833 1.0011929,8.7091793 1,10 c 0,1.656854 1.3431458,3 3,3 l 7.5,0 c 1.932997,0 3.321429,-1.477717 3.321429,-3.4107143 -0.343605,-1.177246 -1.384105,-2.7716808 -2.839605,-3.4058395 -0.02988,-0.013019 0.01902,-0.1361103 -0.01112,-0.14829 C 11.732775,3.7441623 9.803314,2.0026739 7.5,2 Z m 0,1 C 9.4329966,3 11,4.5670034 11,6.5 10.998359,6.6892144 10.981376,6.8779841 10.949219,7.0644531 11.129854,7.0226102 11.314584,7.0009929 11.5,7 12.880712,7 14,8.1192881 14,9.5 14,10.880712 12.880712,12 11.5,12 L 4,12 C 2.8954305,12 2,11.104569 2,10 2,8.8954305 2.8954305,8 4,8 4.119895,8.000332 4.2395173,8.0114445 4.3574219,8.0332031 4.1233957,7.5559094 4.0011632,7.031579 4,6.5 4,4.5670034 5.5670034,3 7.5,3 Z"
       transform="translate(0,1036.3622)"
       class="ColorScheme-Text" />
    <path
       d="m 11,1042.3622 c 2.216,0 4,1.784 4,4 0,2.216 -1.784,4 -4,4 -2.216,0 -4,-1.784 -4,-4 0,-2.216 1.784,-4 4,-4 z"
      style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-PositiveText" />
    <path
       d="m 13,1044.3622 -3,3 -1,-1 -1,1 1,1 1,1 4,-4 -1,-1 z"
       style="fill:#ffffff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" />
  </g>
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
			<path 
        style="fill:currentColor;fill-opacity:1;stroke:none" 
        d="M 11 4 A 6 6 0 0 0 5 10 A 6 6 0 0 0 5.0039062 10.128906 A 4 4 0 0 0 2 14 A 4 4 0 0 0 6 18 L 15 18 A 5 5 0 0 0 20 13 A 5 5 0 0 0 16.757812 8.3242188 A 6 6 0 0 0 11 4 z M 11 5 A 5 5 0 0 1 15.919922 9.1113281 A 4.0000019 4.0000019 0 0 1 19 13 A 4.0000019 4.0000019 0 0 1 15 17 L 6 17 A 2.9999979 2.9999979 0 0 1 3 14 A 2.9999979 2.9999979 0 0 1 6 11 A 2.9999979 2.9999979 0 0 1 6.1074219 11.005859 A 5 5 0 0 1 6 10 A 5 5 0 0 1 11 5 z " 
        class="ColorScheme-Text"/>
  <path
     style="color:#27ae60;fill:currentColor;fill-opacity:1;stroke:none"
     d="M 16 12 C 13.784 12 12 13.784 12 16 C 12 18.216 13.784 20 16 20 C 18.216 20 20 18.216 20 16 C 20 13.784 18.216 12 16 12 z "
     id="path8" />
  <path
     style="opacity:1;fill:#ffffff"
     d="M 18 14 L 15 17 L 14 16 L 13 17 L 14 18 L 15 19 L 19 15 L 18 14 z "
     id="path10" />
		</svg>
	{/if}
