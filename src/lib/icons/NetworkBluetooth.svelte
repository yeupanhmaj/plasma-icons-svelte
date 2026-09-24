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
      d="M 8 2 L 8 7.0390625 L 4.7070312 3.7460938 L 4 4.453125 L 7.546875 8 L 4 11.546875 L 4.7070312 12.253906 L 8 8.9609375 L 8 14 L 9 14 L 12 11 L 9 8 L 12 5 L 9 2 L 8 2 z M 9 3.4140625 L 10.585938 5 L 9 6.5859375 L 9 3.4140625 z M 9 9.4140625 L 10.585938 11 L 9 12.585938 L 9 9.4140625 z " 
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
			<g
     transform="translate(0,-1030.3622)">
    <g
       transform="translate(0,39.500035)"
       id="g4644">
      <path
         style="fill:currentColor;fill-opacity:1;stroke:none" 
         d="m 10.999023,993.86403 0,7.03907 -3.2936118,-3.29298 -0.00195,0.002 C 7.3477147,997.25616 6.7071694,996.61603 6.7071694,996.61603 L 6,997.32306 l 4.54581,4.54114 -4.54581,4.541 0.7071694,0.707 c 0,0 0.6405453,-0.6401 0.9962883,-0.9961 l 0.00195,0 3.2936143,-3.293 0,7.0391 1.000197,0 4.000781,-4 -4.000781,-4 L 16,997.86208 l -4.000781,-4 -1.000196,0 z m 1.000196,1.41406 2.586443,2.58594 -2.586443,2.58597 0,-5.17191 z m 0,8.00001 2.586443,2.586 -2.586443,2.5859 0,-5.1719 z"
         class="ColorScheme-Text"
         />
    </g>
  </g>
		</svg>
	{/if}
