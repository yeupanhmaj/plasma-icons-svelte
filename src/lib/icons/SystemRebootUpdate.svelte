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
			<path class="ColorScheme-Text" d="m8 2c-2.9248384 0.0038401-5.4207321 2.1160676-5.9082031 5h1.0234375c0.4741154-2.3227308 2.5141501-3.9932589 4.8847656-4 1.9815272 0.00719 3.77185 1.1838826 4.564453 3h-3.564453v1h5v-5h-1v2.6894531c-1.110247-1.6781843-2.9878-2.6881025-5-2.6894531zm3.5 6-2.5 3h1.5v3h2v-3h1.5l-2.5-3zm-9.5 1v5h1v-2.699219c1.1079946 1.681906 2.9859385 2.695701 5 2.699219 0.3354222-0.0039 0.6699283-0.035903 1-0.095703v-1.021485c-0.3285409 0.07261-0.663573 0.111872-1 0.117188-1.9779779-0.011046-3.7635149-1.187112-4.5546875-3h3.5546875v-1h-4.9082031-0.0917969z" fill="currentColor"/>
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
			<path class="ColorScheme-Text" d="m11 3c-4.02799 0.0047934-7.4242381 3.0035994-7.9277344 7h1.0058594c0.4967546-3.441627 3.4445843-5.9968562 6.921875-6 2.702236 0.00164 5.162212 1.5585076 6.320312 4h-3.320312v1h5v-5h-1v3.1679688c-1.3982-2.5623399-4.081014-4.159752-7-4.1679688zm4 7-4 4h2v5h4v-5h2l-4-4zm-12 3v5h1v-3.195312c1.3909801 2.572907 4.0751939 4.181638 7 4.195312v-1c-2.6987065-0.005403-5.1539614-1.561689-6.3105469-4h3.3105469v-1h-5z" fill="currentColor"/>
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
			<path class="ColorScheme-Text" d="m16 4c-6.6274104 0-12 5.3725896-12 12 0.010147 0.334195 0.0342557 0.667819 0.0722656 1h1.0058594c-0.0412337-0.331972-0.0673025-0.665652-0.078125-1 0-6.0751261 4.9248739-11 11-11 3.708298 0.012132 7.160895 1.891896 9.183594 5h-4.183594v1h6v-6h-1v4.3886719c-2.218243-3.3600889-5.973739-5.3838027-10-5.3886719zm6 10-6 6.222656h3v7.777344h6v-7.777344h3l-6-6.222656zm-17 7v6h1v-4.384766c2.0308343 3.052809 5.345933 5.009639 9 5.3125v-1.001953c-3.335609-0.310128-6.3481071-2.12338-8.1835938-4.925781h4.1835938v-1h-5.9082031-0.0917969z" fill="currentColor"/>
		</svg>
	{/if}
