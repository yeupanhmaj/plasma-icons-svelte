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
			viewBox="0 0 4.2333332 4.2333335"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path d="m2.3027566 293.2958-.413745 2.43348-.4181498-.88407-1.20628004.69158a2.1764035 2.1847289 0 0 0 .0327503.0958l1.05104484-.48581.6404549 1.32405.488685-3.03403 1.4912348-.0284a2.1764035 2.1847289 0 0 0 -.075885-.0868z" fill="#1ed4e5" transform="translate(0 -292.76665)"/>
		</svg>
	{:else if numericSize <= 27}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 5.8208332 5.8208335"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path d="m3.1585364 291.9729-.5516596 3.24464-.5575328-1.17875-1.60837217.9221a2.9018696 2.9129701 0 0 0 .0436667.1277l1.40139227-.64776.8539394 1.76541.6515794-4.04538 1.9883119-.038a2.9018696 2.9129701 0 0 0 -.1011797-.11591z" fill="#1ed4e5" transform="translate(0 -291.17915)"/>
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
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="404.57" x2="411.57" y1="524.8" y2="531.8"><stop offset="0" stop-color="#060606"/><stop offset="1" stop-opacity="0"/></linearGradient><g transform="translate(-384.57 -515.8)"><path d="m389.57 545.8v-28h15l7 7v21h-14z" fill="#326197" height="100%" width="100%"/><g transform="scale(1 -1)"><path d="m389.57001-518.79999h15v1h-15z" fill="#fff" opacity=".5"/><path d="m389.57001-545.79999h22v1h-22z" opacity=".25"/></g><g fill-rule="evenodd"><path d="m411.57 524.8-7-7v7z" fill="#fff" opacity=".5"/><path d="m404.57 524.8 7 7v-7z" fill="url(#a)" opacity=".2"/></g></g><path d="m16.689271 12.239914-1.532491 9.013532-1.548822-3.27456-4.468008 2.561577a8.0613221 8.0921589 0 0 0 .121292.354739l3.89304-1.799436 2.37221 4.904234 1.810066-11.237928 5.523492-.105364a8.0613221 8.0921589 0 0 0 -.281077-.321959z" fill="#fff" opacity=".9"/>
		</svg>
	{:else}
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
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="40" x2="54" y1="17" y2="31"><stop offset="0" stop-color="#060606"/><stop offset="1" stop-opacity="0"/></linearGradient><path d="m376 139.36v-58h30l14 14v44h-14z" fill="#326197" height="100%" transform="translate(-366 -78.360001)" width="100%"/><path d="m10-4h30v1h-30z" fill="#fff" opacity=".5" transform="scale(1 -1)"/><path d="m420 95.36-14-14v14z" fill="#fff" fill-rule="evenodd" height="100%" opacity=".5" transform="translate(-366 -78.360001)" width="100%"/><path d="m10-61h44v1h-44z" opacity=".25" transform="scale(1 -1)"/><path d="m40 16.999999 14 14v-14z" fill="url(#a)" fill-rule="evenodd" opacity=".1"/><path d="m33.406667 24.507806-3.127512 18.39483-3.160837-6.682727-9.118318 5.22767a16.451557 16.514489 0 0 0 .247533.723949l7.944924-3.672288 4.841209 10.008566 3.693986-22.934378 11.272348-.215031a16.451557 16.514489 0 0 0 -.573623-.657051z" fill="#fff" opacity=".9"/>
		</svg>
	{/if}
