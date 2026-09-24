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
			<path d="m11.5 2c-1.380712 0-2.5 1.1192881-2.5 2.5s1.119288 2.5 2.5 2.5 2.5-1.1192881 2.5-2.5-1.119288-2.5-2.5-2.5zm-6 2c-1.3807119 0-2.5 1.1192881-2.5 2.5s1.1192881 2.5 2.5 2.5 2.5-1.1192881 2.5-2.5-1.1192881-2.5-2.5-2.5zm5.5 4.0722656c-1.0948337 0.2357507-2.0260589 1.0531108-2.5078125 2.2011724 0.2209212 0.219651 0.4217669 0.463021 0.5996094 0.726562h0.2011719c0.2752131-0.929189 0.9133912-1.636734 1.7070312-1.8925781v-1.0351563zm1 0.9277344v1h1v-1h-1zm-6.5 1c-1.9329963-1.3e-6 -3.5 1.79086-3.5 4h7c0-2.20914-1.5670037-4.0000013-3.5-4zm0 1c1.0581701 0.0018 2.0007929 0.802816 2.3535156 2h-4.7070312c0.3527227-1.197184 1.2953455-1.998218 2.3535156-2zm6.5 0v1h1v-1h-1zm0 2v1h1v-1h-1z" class="ColorScheme-Text" fill="currentColor"/>
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
			<path d="m14 3c-1.662 0-3 1.338-3 3s1.338 3 3 3 3-1.338 3-3-1.338-3-3-3zm-6 3c-1.6619997 0-3 1.3380003-3 3 0 1.662 1.3380003 3 3 3s3-1.338 3-3c0-1.6619997-1.3380003-3-3-3zm6 4c-0.646346 0-1.255994 0.134157-1.818359 0.361328l0.455078 0.914063c0.427816-0.160506 0.877766-0.275391 1.363281-0.275391 1.482985 0 2.758385 0.807292 3.449219 2h1.130859c-0.769461-1.767167-2.523243-3-4.580078-3zm-6 3c-2.7700166 0-5 2.229983-5 5v1h10v-1c0-2.770017-2.229983-5-5-5zm0 1c2.216017 0 4 1.783983 4 4h-8c0-2.216017 1.7839834-4 4-4zm8 0v1h1v-1h-1zm0 2v1h1v-1h-1zm0 2v1h1v-1h-1z" class="ColorScheme-Text" fill="currentColor"/>
		</svg>
	{/if}
