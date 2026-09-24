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
     d="M 8 2 A 6.0000019 6.0000148 0 0 0 2 8 A 6.0000019 6.0000148 0 0 0 8 14 A 6.0000019 6.0000148 0 0 0 14 8 A 6.0000019 6.0000148 0 0 0 8 2 z M 8 3 L 8 8 L 13 8 A 5 5 0 0 1 8 13 A 5 5 0 0 1 3 8 A 5 5 0 0 1 8 3 z "
     class="ColorScheme-Text"
     />
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
     d="M 11 3 C 6.6 3 3 6.6 3 11 C 3 15.4 6.6 19 11 19 C 15.4 19 19 15.4 19 11 C 19 6.6 15.4 3 11 3 z M 11 4 L 11 11 L 18 11 L 18 11 C 18 14.9 14.9 18 11 18 C 7.122 18 4 14.9 4 11 C 4 7.122 7.122 4 11 4 z "
	 class="ColorScheme-Text"
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
			<radialGradient id="a" cx="9.875001" cy="15.125" gradientTransform="matrix(0 2.1428571 -2.1428571 0 42.410717 -11.160717)" gradientUnits="userSpaceOnUse" r="14"><stop offset="0" stop-color="#fc9"/><stop offset="1" stop-color="#feb01b"/></radialGradient><radialGradient id="b" cx="9.875001" cy="15.125" gradientTransform="matrix(0 2.1428571 -2.1428571 0 42.410717 -11.160717)" gradientUnits="userSpaceOnUse" r="14"><stop offset="0" stop-color="#f9917f"/><stop offset="1" stop-color="#fa3033"/></radialGradient><radialGradient id="c" cx="9.875001" cy="15.125" gradientTransform="matrix(0 2.1428571 -2.1428571 0 42.410717 -11.160717)" gradientUnits="userSpaceOnUse" r="14"><stop offset="0" stop-color="#7dd89b"/><stop offset="1" stop-color="#0ddb6e"/></radialGradient><radialGradient id="d" cx="9.875001" cy="15.125" gradientTransform="matrix(0 2.1428571 -2.1428571 0 42.410716 -10.160716)" gradientUnits="userSpaceOnUse" r="14"><stop offset="0" stop-color="#81c6d6"/><stop offset="1" stop-color="#279dd8"/></radialGradient><g stroke-linejoin="round" transform="matrix(1 0 0 .97753584 0 .35179)"><path d="m16 2c-7.7319865 0-14 6.2680135-14 14 .0004675 5.001251 2.6687898 9.622422 7 12.123047l7.00025-11.123495 7-12.123047-.00025-.999552c-2.128142-1.229214-4.542368-1.8765552-7-1.876953z" fill="url(#c)"/><path d="m3.8769531 9c-1.229214 2.128142-1.8765552 4.542368-1.8769531 7 0 7.731986 6.2680135 14 14 14 4.727485-.000442 9.115362-2.384659 11.693622-6.303849.0184-.03629-.02708-.959977-.02708-.959977z" fill="url(#b)"/><path d="m12.376953 2.4785156a14 14 0 0 0 -10.376953 13.5214844 14 14 0 0 0 14 14 14 14 0 0 0 3.623047-.478516z" fill="url(#a)"/><path d="m24.660156 5-5.929687 10.269531v1l10.267578 5.927735c.661413-1.652954 1.001473-3.416895 1.001953-5.197266v-1c-.000024-4.291269-1.968109-8.345496-5.339844-11z" fill="url(#d)"/><path d="m23 3.8769531-7 12.1230469.433594.25 6.566406-11.3730469zm-4.269531 11.3925779v1l10.267578 5.927735c.661413-1.652954 1.001473-3.416895 1.001953-5.197266-.000001-.153617-.02037-.304075-.02539-.457031-.06249 1.594793-.382645 3.170022-.976562 4.654297zm-16.710938.261719c-.00605.16139-.0093.322872-.00977.484375 0 7.731986 6.2680128 14 14.000001 14 5.187498 0 9.531554-2.900934 11.70226-6.355763l-.0184.03629-.02708-.959977c-2.521952 3.714717-6.847794 6.278974-11.656776 6.27945-7.5312342-.000144-13.712857-5.958252-13.990235-13.484375z" fill-opacity=".14902"/></g>
		</svg>
	{/if}
