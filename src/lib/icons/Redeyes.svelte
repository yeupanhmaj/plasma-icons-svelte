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
     d="M 8 3 A 8.999992 9 0 0 0 0.12304688 7.6679688 C 0.25199987 8.0299997 0.48029687 8.3451719 0.77929688 8.5761719 A 7.999993 8 0 0 1 8 4 A 4 4 0 0 0 4 8 A 4 4 0 0 0 8 12 A 4 4 0 0 0 12 8 A 4 4 0 0 0 8.3496094 4.0175781 A 7.999993 8 0 0 1 15.220703 8.5761719 C 15.522 8.3419999 15.752859 8.0302031 15.880859 7.6582031 A 8.999992 9 0 0 0 8 3 z M 8 5 A 3 3 0 0 1 11 8 A 3 3 0 0 1 8 11 A 3 3 0 0 1 5 8 A 3 3 0 0 1 8 5 z "
     class="ColorScheme-Text"/>
  <path
     d="M8 6A2 2 0 0 0 6 8 2 2 0 0 0 8 10 2 2 0 0 0 10 8 2 2 0 0 0 9.910156 7.412109 1 1 0 0 1 9 8 1 1 0 0 1 8 7 1 1 0 0 1 8.589844 6.089844 2 2 0 0 0 8 6"
     style="fill:#da4453"/>
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
     d="M 11 6 A 10 9.9999752 0 0 0 2.3144531 11.070312 C 2.4995619 11.36174 2.7600799 11.597238 3.0664062 11.759766 A 9 8.9999781 0 0 1 11 7 A 4 4 0 0 0 7 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 11 A 4 4 0 0 0 11.34375 7.0175781 A 9 8.9999781 0 0 1 18.931641 11.761719 C 19.241063 11.598077 19.503624 11.359295 19.689453 11.064453 A 10 9.9999752 0 0 0 11 6 z M 11 8 A 3 3 0 0 1 14 11 A 3 3 0 0 1 11 14 A 3 3 0 0 1 8 11 A 3 3 0 0 1 11 8 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:#da4453;fill-opacity:1;stroke:none" 
     d="M 11 9 A 1.9999999 2.0000005 0 0 0 9 11 A 1.9999999 2.0000005 0 0 0 11 13 A 1.9999999 2.0000005 0 0 0 13 11 A 1.9999999 2.0000005 0 0 0 12.910156 10.412109 A 0.99999984 1 0 0 1 12 11 A 0.99999984 1 0 0 1 11 10 A 0.99999984 1 0 0 1 11.589844 9.0898438 A 1.9999999 2.0000005 0 0 0 11 9 z "
     />
		</svg>
	{/if}
