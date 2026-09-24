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
     d="m2 3v10h12v-10zm6 1c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4"
     class="ColorScheme-Text"/>
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
			a
  <defs
     id="defs3762">
    
    <linearGradient
       gradientUnits="userSpaceOnUse"
       y2="535.79071"
       x2="433.71429"
       y1="543.79071"
       x1="425.71429"
       id="linearGradient4154"
       xlink:href="#linearGradient4172-7"
       inkscape:collect="always"
       gradientTransform="matrix(1.5,0,0,1.5,-79.84891,-215.56677)" />
    <linearGradient
       inkscape:collect="always"
       id="linearGradient4172-7">
      <stop
         style="stop-color:#1d99f3;stop-opacity:1"
         offset="0"
         id="stop4174-2" />
      <stop
         style="stop-color:#cae7fc;stop-opacity:1"
         offset="1"
         id="stop4176-0" />
    </linearGradient>
  </defs>
  <g
     transform="translate(-553.72253,-583.11926)">
    <path
       style="fill:currentColor;fill-opacity:1;stroke:none" 
       d="M 3 4 L 3 18 L 19 18 L 19 4 L 3 4 z M 10.941406 5 A 6 6 0 0 1 17 10.921875 L 17 11 A 6 6 0 0 1 11.019531 17 A 6 6 0 0 1 5 11.039062 A 6 6 0 0 1 10.941406 5 z "
       transform="translate(553.72253,583.11926)"
       class="ColorScheme-Text" />
    <path
       style="opacity:1;fill:url(#linearGradient4154);fill-opacity:1;stroke:none;stroke-width:2;stroke-linecap:square;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
       d="m 570.72253,594.11926 a 6,6 0 0 1 -5.98036,5.99997 6,6 0 0 1 -6.01951,-5.9607 6,6 0 0 1 5.94097,-6.03898 6,6 0 0 1 6.05839,5.92118"/>
  </g>
		</svg>
	{/if}
