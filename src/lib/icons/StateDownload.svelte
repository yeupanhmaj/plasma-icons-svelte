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
     d="M 7.5 2 C 5.0147186 2 3 4.0147186 3 6.5 C 3.0015312 6.7197442 3.0191564 6.939081 3.0527344 7.15625 C 1.8279505 7.563833 1.0011929 8.7091793 1 10 C 1 11.656854 2.3431458 13 4 13 L 11.5 13 C 13.432997 13 14.822266 11.522841 14.822266 9.5898438 C 14.478661 8.4125977 13.437922 6.8177525 11.982422 6.1835938 C 11.952542 6.1705748 12.000843 6.0473359 11.970703 6.0351562 C 11.732774 3.7441624 9.803314 2.0026739 7.5 2 z M 7.5 3 C 9.4329966 3 11 4.5670034 11 6.5 C 10.998359 6.6892144 10.981376 6.8779841 10.949219 7.0644531 C 11.129854 7.0226102 11.314584 7.0009929 11.5 7 C 12.880712 7 14 8.1192881 14 9.5 C 14 10.880712 12.880712 12 11.5 12 L 4 12 C 2.8954305 12 2 11.104569 2 10 C 2 8.8954305 2.8954305 8 4 8 C 4.119895 8.000332 4.2395173 8.0114445 4.3574219 8.0332031 C 4.1233957 7.5559094 4.0011632 7.031579 4 6.5 C 4 4.5670034 5.5670034 3 7.5 3 z "
     class="ColorScheme-Text"
     />
  <path
      style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-PositiveText"
   d="M 7 6 L 7 10 A 4 3.9999852 0 0 0 11 14 A 4 3.9999852 0 0 0 15 10 L 15 6 L 11 6 L 7 6 z "
      />
      <path
         style="opacity:1;fill:#ffffff"
         d="M 10.5 7 L 10.5 11.085938 L 8.7070312 9.2929688 L 8 10 L 11 13 L 14 10 L 13.292969 9.2929688 L 11.5 11.085938 L 11.5 7 L 10.5 7 z "/>
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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 11 4 A 6 6 0 0 0 5 10 A 6 6 0 0 0 5.0039062 10.128906 A 4 4 0 0 0 2 14 A 4 4 0 0 0 6 18 L 15 18 A 5 5 0 0 0 20 13 A 5 5 0 0 0 16.757812 8.3242188 A 6 6 0 0 0 11 4 z M 11 5 A 5 5 0 0 1 15.919922 9.1113281 A 4.0000019 4.0000019 0 0 1 19 13 A 4.0000019 4.0000019 0 0 1 15 17 L 6 17 A 2.9999979 2.9999979 0 0 1 3 14 A 2.9999979 2.9999979 0 0 1 6 11 A 2.9999979 2.9999979 0 0 1 6.1074219 11.005859 A 5 5 0 0 1 6 10 A 5 5 0 0 1 11 5 z "
     class="ColorScheme-Text"
     />
  <path
      style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-PositiveText"
    d="M 12 11 L 12 15 A 4 3.9999852 0 0 0 16 19 A 4 3.9999852 0 0 0 20 15 L 20 11 L 16 11 L 12 11 z "
      />
  <path
     style="opacity:1;fill:#ffffff"
     d="M 15.5 12 L 15.5 16.085938 L 13.707031 14.292969 L 13 15 L 16 18 L 19 15 L 18.292969 14.292969 L 16.5 16.085938 L 16.5 12 L 15.5 12 z "
     id="rect3373" />
		</svg>
	{/if}
