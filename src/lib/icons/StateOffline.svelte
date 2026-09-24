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
        d="M 7.5 2 C 5.0147186 2 3 4.0147186 3 6.5 C 3.0015312 6.7197442 3.0191564 6.939081 3.0527344 7.15625 C 1.8279505 7.563833 1.0011929 8.7091793 1 10 C 1 11.656854 2.3431458 13 4 13 L 11.5 13 C 13.432997 13 15 11.432997 15 9.5 C 14.656395 8.322754 13.437922 6.8177524 11.982422 6.1835938 C 11.952541 6.1705745 12.000846 6.047336 11.970703 6.0351562 C 11.732775 3.7441623 9.803314 2.0026739 7.5 2 z M 7.5 3 C 9.4329966 3 11 4.5670034 11 6.5 C 10.998359 6.6892144 10.981376 6.8779841 10.949219 7.0644531 C 11.129854 7.0226102 11.314584 7.0009929 11.5 7 C 12.880712 7 14 8.1192881 14 9.5 C 14 10.880712 12.880712 12 11.5 12 L 4 12 C 2.8954305 12 2 11.104569 2 10 C 2 8.8954305 2.8954305 8 4 8 C 4.119895 8.000332 4.2395173 8.0114445 4.3574219 8.0332031 C 4.1233957 7.5559094 4.0011632 7.031579 4 6.5 C 4 4.5670034 5.5670034 3 7.5 3 z "
        class="ColorScheme-Text"
        />
  <path
     style="opacity:1;fill:#bdc3c7"
     d="M 11 6 A 4 4 0 0 0 7 10 A 4 4 0 0 0 11 14 A 4 4 0 0 0 15 10 A 4 4 0 0 0 11 6 z " />
  <path
     style="opacity:1;fill:#ffffff"
     d="M 9 9 L 9 11 L 10 11 L 10 9 L 9 9 z M 12 9 L 12 11 L 13 11 L 13 9 L 12 9 z " />
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
       style="opacity:1;fill:#bdc3c7;fill-opacity:1;stroke:none"
       d="m 442.71429,540.29071 a 4.5,4.5 0 0 1 -4.5,4.5 4.5,4.5 0 0 1 -4.5,-4.5 4.5,4.5 0 0 1 4.5,-4.5 4.5,4.5 0 0 1 4.5,4.5 z"
       id="path4306" />
    <path
       style="opacity:1;fill:#ffffff;fill-opacity:1;stroke-linecap:round"
       d="M 14 14 L 14 15 L 15 15 L 15 14 L 14 14 z M 16 14 L 16 15 L 17 15 L 17 14 L 16 14 z M 18 14 L 18 15 L 19 15 L 19 14 L 18 14 z "
       transform="translate(421.71429,525.79074)"
       id="rect4521" />
  </g>
		</svg>
	{/if}
