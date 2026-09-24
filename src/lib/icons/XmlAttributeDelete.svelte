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
     id="layer1"
     transform="translate(-421.71429,-531.79074)">
    <g
       transform="matrix(0.75,0,0,0.74999813,421.46429,-241.22897)"
       id="layer1-0">
      <g
         transform="translate(6.2937501e-7,-2.041003e-4)"
         id="layer1-6">
        <path
           style="fill:currentColor;fill-opacity:1;stroke:none" 
           d="M 8 2 L 2.03125 2.03125 L 2 8 L 8 13.539062 L 8 8 L 13.539062 8 L 8 2 z M 5.5 4 C 6.3284271 4 7 4.6715728 7 5.5 C 7 6.3284272 6.3284271 7 5.5 7 C 4.6715729 7 4 6.3284272 4 5.5 C 4 4.6715728 4.6715729 4 5.5 4 z "
           transform="matrix(1.3333333,0,0,1.3333367,0.3333327,1030.6957)"
           class="ColorScheme-Text"
           id="path7177" />
        <path
           style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NegativeText"
     d="m 12.333333,1043.8067 2.222226,2.2223 -2.222226,2.2222 1.111106,1.1111 2.222227,-2.2221 2.222227,2.2221 1.111106,-1.1111 -2.222213,-2.2222 2.222213,-2.2223 -1.111106,-1.1111 -2.222227,2.2223 -2.222227,-2.2223 -1.111106,1.1111 z"
           id="rect5234" />
      </g>
    </g>
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
     d="M 9 3 L 3 5 L 5 11 L 13 15 L 13 14.875 L 13 13 L 14 13 L 16.5 13 L 19 8 L 9 3 z M 3 5 L 3 11 L 11 19 L 13.705078 16.294922 L 4 11 L 3 5 z M 6.5 5 C 7.331 5 8 5.669 8 6.5 C 8 7.331 7.331 8 6.5 8 C 5.669 8 5 7.331 5 6.5 C 5 5.669 5.669 5 6.5 5 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:#da4453;fill-opacity:1;stroke:none"      
     d="M 14.833984 14 L 14 14.833984 L 15.666016 16.5 L 14 18.166016 L 14.833984 19 L 16.5 17.333984 L 18.166016 19 L 19 18.166016 L 17.333984 16.5 L 19 14.833984 L 18.166016 14 L 16.5 15.666016 L 14.833984 14 z "
     />
		</svg>
	{/if}
