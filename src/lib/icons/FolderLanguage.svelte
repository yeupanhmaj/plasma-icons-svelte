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

	{#if numericSize <= 27}
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
       style="fill:currentColor"
       d="M 8 3 L 8 5 L 3 5 L 3 7 L 11.6 7 C 11.1 8.5 10.3 9.4 9.1855469 10.681641 C 8.4665869 9.885369 7.8700275 8.91997 7.3984375 8 L 5.8535156 8 C 6.4178656 9.26012 7.1899 10.542606 8.15625 11.617188 L 4.2207031 15.498047 L 5.3183594 16.595703 L 9.1855469 12.730469 L 11.589844 15.134766 L 12.175781 13.558594 L 10.212891 11.617188 L 10.236328 11.59375 C 11.581488 10.09397 12.43566 8.82447 13 7 L 15 7 L 15 5 L 10 5 L 10 3 L 8 3 z M 14.982422 10 L 11.503906 19 L 13.050781 19 L 13.916016 16.595703 L 17.587891 16.595703 L 18.460938 19 L 20.007812 19 L 16.529297 10 L 14.982422 10 z M 15.755859 11.703125 L 17.007812 15.050781 L 14.503906 15.050781 L 15.755859 11.703125 z "
       class="ColorScheme-Text" />
		</svg>
	{:else if numericSize <= 48}
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
			<path 
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 2 3 L 2 10 L 1 10 L 1 29 L 12 29 L 13 29 L 31 29 L 31 8 L 30 8 L 30 5 L 16 5 L 14 3 L 2 3 z "
     class="ColorScheme-Accent"
     />
 <path 
     style="fill-opacity:0.33;fill-rule:evenodd"
     d="m 2,3 0,7 9,0 L 13,8 30,8 30,5 16,5 14,3 2,3 Z"
     />
 <path 
     style="fill:#ffffff;fill-opacity:0.2;fill-rule:evenodd"
     d="M 14 3 L 15 6 L 30 6 L 30 5 L 16 5 L 14 3 z M 13 8 L 11 10 L 1 10 L 1 11 L 12 11 L 13 8 z "
     />
 <path 
     style="fill-opacity:0.2;fill-rule:evenodd"
     d="M 13 8 L 11 9 L 2 9 L 2 10 L 11 10 L 13 8 z M 1 28 L 1 29 L 31 29 L 31 28 L 1 28 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:0.6;stroke:none" 
     d="m 16.474,19.087 -1.385,-1.38 0.016,-0.016 c 0.949,-1.067 1.625,-2.388 2.024,-3.686 L 19,14 V 12.995 L 15,13 v -1 h -1 v 1 h -4 v 1 h 6.093 c -0.365,1.062 -0.944,2.163 -1.729,3.043 C 13.857,16.476 13.424,15.654 13.091,15 H 12 c 0.398,0.896 0.957,1.945 1.638,2.709 l -2.776,2.761 0.775,0.781 2.727,-2.75 1.696,1.71 z M 19.546,16.4 H 18.455 L 16,23 h 1.231625 L 18,21 h 2 l 0.909,2 H 22 Z M 18.234375,20 19.001,17.869 19.763875,20 Z"
     class="ColorScheme-Text"
     />
		</svg>
	{:else if numericSize <= 80}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 64 64"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path 
     style="fill:currentColor" 
     d="M 4 6 L 4 11 L 4 20 L 3 20 L 3 21 L 3 21 C 3 21 3 21 3 21 L 3 57 L 3 58 L 4 58 L 60 58 L 61 58 L 61 57 L 61 21 L 61 21 L 61 16 L 60 16 L 60 11 C 60 11 60 11 60 11 L 60 11 L 60 10 L 32 10 L 28 6 L 4 6 z "
     class="ColorScheme-Accent"
     />
 <path 
     style="fill-opacity:0.33"
     d="M 4 6 L 4 11 L 4 20 L 22 20 L 26 16 L 60 16 L 60 11 C 60 11 60 11 60 11 L 60 11 L 60 10 L 32 10 L 28 6 L 4 6 z "
     />
 <path 
     style="fill:#ffffff;fill-opacity:0.2"
     d="M 28 6 L 31 11 L 33 11 L 60 11 L 60 10 L 33 10 L 32 10 L 28 6 z M 26 16 L 22 20 L 3 20 L 3 21 L 23 21 L 26 16 z "
     />
 <path 
     style="fill-opacity:0.2;fill-rule:evenodd"
     d="M 26 16 L 20 19 L 4 19 L 4 20 L 22 20 L 26 16 z M 3 57 L 3 58 L 4 58 L 60 58 L 61 58 L 61 57 L 60 57 L 4 57 L 3 57 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:0.6;stroke:none"  
     d="m 32.9,40 -2.5,-2.516 0.03,-0.03 C 32.129,35.6 33.269,33.4 34,31 l 3.04,-0 v -2 h -7.02 v -2 L 28,27 v 2 h -7 v 2 h 11 c -0.7,1.9 -1.5,3.7 -3,5.3 -0.9,-1 -1.7,-2.2 -2.3,-3.4 h -2 c 0.732,1.6 1.734,3.2 3,4.57 l -5.1,5.03 1.4,1.4 5.01,-5.01 3.1,3.1 z m 5.7,-5.1 h -2 L 32.034,47 h 2 l 1.123,-3.01 h 4.8 L 41,47 h 2 z m -2.6,7.02 1.6,-4.34 1.6,4.34 z"
     class="ColorScheme-Text"
     />
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 96 96"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<!-- style definitions -->
  

  <!-- folder bg -->
  <path
    style="fill:currentColor"
    class="ColorScheme-Accent"
    d="m6 9v21h-1v57h86v-63h-1v-9h-42l-6-6z" />

  <!-- folder fg -->
  <path
    d="m6 9v21h27l6-6h51v-9h-42l-6-6z"
    fill-opacity=".33" />

  <!-- folder highlight -->
  <path
    d="m42 9 5 7h43v-1h-42zm-3 15-6 6h-28v1h29z"
    fill="#fff"
    fill-opacity=".2" />

  <!-- folder shadow -->
  <path
    d="m39 24-7 5h-26v1h27zm-34 62v1h86v-1z"
    fill-opacity=".2" />

  <!-- wén, A -->
  <path
    d="m43.740234 42.219-1.439453.417969 1.414063 3.21289h-8.964844v1.300782h13.646484c-.471738 2.365186-2.214924 5.175364-4.484375 7.68164-1.759573-1.945991-3.26136-4.17592-4.412109-6.582031l-1.25 1c1.203122 2.320306 2.880812 4.613737 4.673828 6.621094-2.313807 2.317057-5.012486 4.252055-7.423828 5.128906l.5 1.5c1.601216 0 4.90148-2.428187 7.927734-5.548828 2.441834 2.534973 4.972394 4.472436 6.746094 5.214844l.90625-1.570313c-2.421542-1.130525-4.679061-2.743598-6.660156-4.707031 2.648773-2.929636 4.896759-6.262584 5.304687-8.738281h3.025391v-1.300782h-8.455078zm11.986328 12.03125-6.576171 16.75h1.970703l2.076172-5.142578h6.605468l2.076172 5.142578h1.970703l-6.576171-16.75zm.75 2h.04688l2.835937 8.306641h-5.71875z"
    style="fill:currentColor;fill-opacity:0.6"
    class="ColorScheme-Text" />
		</svg>
	{/if}
