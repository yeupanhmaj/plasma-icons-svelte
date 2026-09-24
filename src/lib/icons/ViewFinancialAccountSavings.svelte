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
        d="m8 2a3 3 0 0 0-2.8261719 2h-3.1738281v10h12v-10h-3.175781a3 3 0 0 0-2.824219-2zm0 0.9609375a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2 2 2 0 0 1 2-2zm-5 2.0390625h2a3 3 0 0 0 0.7675781 2h-1.7675781v1h8v-1h-1.769531a3 3 0 0 0 0.769531-2h2v7h-10z"
        class="ColorScheme-Text"
    />
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
        d="m11 2c-1.0071809 0-1.9159199 0.3855812-2.6191406 1h-5.3808594v16h16v-16h-5.380859c-0.703221-0.6144188-1.61196-1-2.619141-1zm0 1c1.656854 0 3 1.3431458 3 3s-1.343146 3-3 3c-1.6568542 0-3-1.3431458-3-3s1.3431458-3 3-3zm-7 1h3.5546875c-0.3435907 0.5903897-0.5546875 1.2676826-0.5546875 2 0 1.2019581 0.5416438 2.2667597 1.3808594 3h-2.3808594v1h10v-1h-2.380859c0.839215-0.7332403 1.380859-1.7980419 1.380859-3 0-0.7323174-0.211097-1.4096103-0.554688-2h3.554688v12h-14v-12z"
        class="ColorScheme-Text"
    />
		</svg>
	{/if}
