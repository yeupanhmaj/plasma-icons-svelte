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
       style="fill:currentColor;fill-opacity:0.5;stroke:none" 
       d="M 8 2 C 5.1217226 2 2.4471588 2.8167177 0.16796875 4.2109375 L 0.79882812 4.9980469 C 2.902248 3.7369058 5.3590869 3 8 3 C 10.640918 3 13.097755 3.7369049 15.201172 4.9980469 L 15.832031 4.2109375 C 13.552841 2.8167214 10.878283 2 8 2 z M 8 5 C 5.8435991 5 3.8425681 5.6235825 2.1484375 6.6875 L 2.7792969 7.4726562 C 4.2984285 6.5437457 6.0817927 6 8 6 C 9.9182124 6 11.701572 6.5437532 13.220703 7.4726562 L 13.851562 6.6875 C 12.157435 5.623599 10.156407 5 8 5 z M 8 8 C 6.5661803 8 5.2366865 8.428369 4.1289062 9.1621094 L 4.7597656 9.9492188 C 5.693648 9.3502154 6.8034854 9 8 9 C 9.1965141 9 10.306354 9.3502173 11.240234 9.9492188 L 11.871094 9.1621094 C 10.763314 8.4283753 9.4338257 8 8 8 z M 8 11 A 1.5 1.5 0 0 0 6.5 12.5 A 1.5 1.5 0 0 0 8 14 A 1.5 1.5 0 0 0 9.5 12.5 A 1.5 1.5 0 0 0 8 11 z "
       class="ColorScheme-Text"
       />
    <path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NegativeText"
        d="M 13 8 L 13 12 L 14 12 L 14 8 L 13 8 z M 13 13 L 13 14 L 14 14 L 14 13 L 13 13 z " />
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
       style="opacity:0.5;fill:currentColor;fill-opacity:1;stroke:none"
       d="M 11 15 C 9.892004 15 9 15.892004 9 17 C 9 18.107996 9.892004 19 11 19 C 12.107996 19 13 18.107996 13 17 C 13 15.892004 12.107996 15 11 15 z M 11 16 C 11.554 16 12 16.446 12 17 C 12 17.554 11.554 18 11 18 C 10.446 18 10 17.554 10 17 C 10 16.446 10.446 16 11 16 z "
          class="ColorScheme-Text"/>
    <path
       style="opacity:0.5;fill:currentColor;fill-opacity:1;stroke:none"
       d="M 11 3 C 6.845 3 3.0940625 4.6715625 0.3828125 7.3828125 L 1.0917969 8.0917969 C 3.6222969 5.5612969 7.122 4 11 4 C 14.878 4 18.377703 5.5612969 20.908203 8.0917969 L 21.617188 7.3828125 C 18.905938 4.6715625 15.155 3 11 3 z M 11 7 C 7.953 7 5.2030937 8.2265938 3.2148438 10.214844 L 3.921875 10.921875 C 5.729375 9.114365 8.23 8 11 8 C 13.77 8 16.270615 9.114365 18.078125 10.921875 L 18.785156 10.214844 C 16.796906 8.2265937 14.047 7 11 7 z M 11 11 C 9.061 11 7.3101719 11.779672 6.0449219 13.044922 L 6.7539062 13.753906 C 7.8384062 12.669406 9.338 12 11 12 C 12.662 12 14.161594 12.669406 15.246094 13.753906 L 15.955078 13.044922 C 14.689828 11.779672 12.939 11 11 11 z "
          class="ColorScheme-Text"/>
		</svg>
	{/if}
