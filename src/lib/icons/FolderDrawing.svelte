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
       style="fill:currentColor"
       d="M 7 2 L 4 2 L 4 5 L 5 5 L 5 6.6 A 1.5 1.5 0 0 0 4 8.1 A 1.5 1.5 0 0 0 5 9.5 L 5 11 L 4 11 L 4 14 L 7 14 L 7 12.2 A 7 6 0 0 0 12 14 L 12 13 A 6 5 0 0 1 6.2 9.4 A 1.5 1.5 0 0 0 7 8.1 A 1.5 1.5 0 0 0 6.2 6.7 A 6 5 0 0 1 12 3 L 12 2 A 7 6 0 0 0 7 3.8 L 7 2 z M 5 3 L 6 3 L 6 4 L 5 4 L 5 3 z M 5 12 L 6 12 L 6 13 L 5 13 L 5 12 z "
       class="ColorScheme-Text" />
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
       style="fill:currentColor"
       d="M 6 3 L 6 6 L 7 6 L 7 9.0566406 C 5.83827 9.2937706 5.00291 10.31432 5 11.5 C 5.002 12.68641 5.83756 13.708033 7 13.945312 L 7 17 L 6 17 L 6 20 L 9 20 L 9 17 L 8 17 L 8 15.179688 A 10 8.5000048 0 0 0 17 20 A 10 8.5000048 0 0 0 18 19.957031 L 18 18.943359 A 9 7.5000057 0 0 1 17 19 A 9 7.5000057 0 0 1 8.4472656 13.804688 C 9.3815656 13.421168 9.99849 12.51481 10 11.5 C 9.99957 10.48259 9.3812494 9.5722531 8.4433594 9.1894531 A 9 7.5000057 0 0 1 17 4 A 9 7.5000057 0 0 1 18 4.0507812 L 18 3.0507812 A 10 8.5000048 0 0 0 17 3 A 10 8.5000048 0 0 0 8 7.8105469 L 8 6 L 9 6 L 9 3 L 6 3 z M 7 4 L 8 4 L 8 5 L 7 5 L 7 4 z M 7.5 10 A 1.5 1.5 0 0 1 8.7636719 10.695312 A 1.5 1.5 0 0 1 8.9355469 11.070312 C 8.935974 11.071724 8.937077 11.072805 8.9375 11.074219 A 1.5 1.5 0 0 1 8.9375 11.078125 A 1.5 1.5 0 0 1 9 11.5 A 1.5 1.5 0 0 1 8.9375 11.927734 A 1.5 1.5 0 0 1 8.765625 12.302734 C 8.7648446 12.303953 8.7644557 12.305425 8.7636719 12.306641 A 1.5 1.5 0 0 1 8.7617188 12.308594 A 1.5 1.5 0 0 1 8.4941406 12.619141 A 1.5 1.5 0 0 1 7.5 13 A 1.5 1.5 0 0 1 6.3300781 12.4375 A 1.5 1.5 0 0 1 6.0917969 12.011719 C 6.0898664 12.006432 6.0878097 12.001408 6.0859375 11.996094 A 1.5 1.5 0 0 1 6 11.5 A 1.5 1.5 0 0 1 6.0839844 11.009766 C 6.0870238 11.001057 6.0905543 10.993009 6.09375 10.984375 A 1.5 1.5 0 0 1 6.3261719 10.570312 C 6.3265254 10.56987 6.3258178 10.568801 6.3261719 10.568359 A 1.5 1.5 0 0 1 7.5 10 z M 7 18 L 8 18 L 8 19 L 7 19 L 7 18 z "
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
     d="m 12,12 v 3 h 1 v 1.65 a 1.5,1.5 0 0 0 -1,1.41211 1.5,1.5 0 0 0 1,1.4 v 1.525 h -1 v 3 h 3 v -1.8 a 7,6 0 0 0 5,1.8 v -1 A 6,5 0 0 1 14.2,19.4 1.5,1.5 0 0 0 15,18.06131 1.5,1.5 0 0 0 14.2,16.7 6,5 0 0 1 20,13 v -1 a 7,6 0 0 0 -5,1.8 v -1.803 z m 1,1 h 1 v 1 h -1 z m 0,9 h 1 v 1 h -1 z"
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
     d="m 24,26 v 3 h 1 v 5.057 a 2.5,2.5 0 0 0 -2,2.4 2.5,2.5 0 0 0 2,2.4 v 5.05 h -1 v 3 h 3 v -3 h -1 v -3.5 a 13,10.5 0 0 0 12,6.5 13,10.5 0 0 0 1,-0.041 V 46 A 12,9.5 0 0 1 38,46 12,9.5 0 0 1 26.4,38.8 2.5,2.5 0 0 0 28,36.5 2.5,2.5 0 0 0 26.4,34.1572 12,9.5 0 0 1 38,27 a 12,9.5 0 0 1 1,0.0391 v -1.01 a 13,10.5 0 0 0 -1,-0 13,10.5 0 0 0 -12,6.5 v -3.512 h 1 v -3 z m 1,1 h 1 v 1 h -1 z m 0.5,8 a 1.5,1.5 0 0 1 1.5,1.5 1.5,1.5 0 0 1 -1.5,1.5 1.5,1.5 0 0 1 -1.5,-1.5 1.5,1.5 0 0 1 1.5,-1.5 m -0.5,10 h 1 v 1 h -1 z"
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
			<path
    style="fill:currentColor"
    class="ColorScheme-Accent"
    d="m6 9v21h-1v57h86v-63h-1v-9h-42l-6-6z" />

  
  <path
    d="m6 9v21h27l6-6h51v-9h-42l-6-6z"
    fill-opacity=".33" />

  
  <path
    d="m42 9 5 7h43v-1h-42zm-3 15-6 6h-28v1h29z"
    fill="#fff"
    fill-opacity=".2" />

  
  <path
    d="m39 24-7 5h-26v1h27zm-34 62v1h86v-1z"
    fill-opacity=".2" />

  
  <path
    d="m39 41c-.5 0-1 .5-1 1v3c0 .5.5 1 1 1h1v7.035156c-1.998567.251795-3.498095 1.950479-3.5 3.964844.0019 2.014365 1.501433 3.713049 3.5 3.964844v7.035156h-1c-.5 0-1 .5-1 1v3c0 .5.5 1 1 1h3c.5 0 1-.5 1-1v-3c0-.5-.5-1-1-1h-1v-6.480469c3.015011 6.403806 9.162675 10.69105 16.115234 11.38086l.41211-.964844c-6.855825-.56062-12.923298-4.800593-15.775391-11.144531 1.637188-.539526 2.744593-2.067224 2.748047-3.791016-.000651-1.725431-1.10763-3.255994-2.746094-3.796875 2.853203-6.34067 8.92016-10.578027 15.773438-11.138672l-.41211-.964844c-6.952557.689809-13.100223 4.977053-16.115234 11.38086v-6.480469h1c.5 0 1-.5 1-1v-3c0-.5-.5-1-1-1zm0 1h3v3h-3zm1.5 12c1.65685 0 3 1.34315 3 3s-1.34315 3-3 3-3-1.34315-3-3 1.34315-3 3-3zm-1.5 15h3v3h-3z"
    style="fill:currentColor;fill-opacity:0.6"
    class="ColorScheme-Text" />
		</svg>
	{/if}
