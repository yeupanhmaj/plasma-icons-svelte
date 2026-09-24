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
			<g transform="translate(-421.71429,-531.79074)">
    <g transform="matrix(0.75,0,0,0.74999813,421.46429,-241.22897)">
      <path 
          d="m 3.0000059,1033.3622 0,16 15.9999941,0 0,-16 z m 2.6666608,2.6667 10.6666663,0 0,10.6667 -10.6666605,-10e-5 z" 
            style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NeutralText"
   
          />
      <path 
          d="m 4.3333333,1034.6955 5.9e-6,13.3334 13.3333278,0 0,-13.3334 z m 1.3333334,1.3334 10.6666663,0 0,10.6667 -10.6666663,0 z" 
          style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text"/>
    </g>
  </g>
		</svg>
	{:else if numericSize <= 27}
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
     d="m 4,1034.3622 0,14 14,0 0,-14 -14,0 z m 1,1 12,0 0,12 -12,0 0,-12 z"
     class="ColorScheme-Text"
     transform="translate(0,-1030.3622)"
     />
 <path 
     style="fill:#ff6600;fill-opacity:1;stroke:none" 
     d="M 3 3 L 3 19 L 19 19 L 19 3 L 3 3 z M 4 4 L 18 4 L 18 18 L 4 18 L 4 4 z "
     />
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
			<path fill="#f60" d="m4 4v24h24v-24zm1 1h22v22h-22z"/>
 <path style="fill:currentColor;fill-opacity:1;stroke:none" 
       d="m5 5v22h22v-22zm1 1h20v20h-20z"
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
