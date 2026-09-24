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
			<path d="m2 2v6 6h12l-6-6 6-6h-6zm1 1h4l-4 4zm5.4140625 0h3.1718755l-8.585938 8.585938v-3.1718755zm-1.0996094 5.6855469 4.3124999 4.3144531h-8.626953z" fill="#656eff"/>
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
			<path d="m3 3v8 8h16l-8-8 8-8h-8zm1 1h6l-6 6zm7.414062 0h5.171876l-12.585938 12.585938v-5.171876zm-1.121093 7.707031 6.292969 6.292969h-12.585938z" fill="#656eff"/>
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
			<defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="20" x2="27" y1="9" y2="16"><stop offset="0" stop-color="#060606"/><stop offset="1" stop-opacity="0"/></linearGradient><path id="b" d="m389.57 545.8v-28h15l7 7v21h-14z"/><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="400.57001" x2="400.57001" y1="517.79999" y2="545.79999"><stop offset="0" stop-color="#347bff"/><stop offset="1" stop-color="#7769ff"/></linearGradient><linearGradient id="d" gradientTransform="translate(309.57 152.44)" gradientUnits="userSpaceOnUse" x2="0" y1="392.36" y2="365.36"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity=".1"/></linearGradient></defs><use fill="url(#c)" height="100%" transform="translate(-384.57 -515.8)" width="100%" xlink:href="#b"/><path d="m5.000007-2.999988h15v1h-15z" fill="#fff" opacity=".36" transform="scale(1 -1)"/><path d="m5.000007-29.999989h22v1h-22z" opacity=".25" transform="scale(1 -1)"/><path d="m27 9-7-7v7z" fill="#2d479a"/><path d="m20 9 7 7v-7z" fill="url(#a)" fill-rule="evenodd" opacity=".1"/><use fill="url(#d)" height="100%" transform="translate(-384.57 -515.8)" width="100%" xlink:href="#b"/><path d="m10 11v6 6h12l-6-6 6-6h-6zm1 1h4l-4 4zm5.414062 0h3.171876l-8.585938 8.585938v-3.171876zm-1.099609 5.685547 4.3125 4.314453h-8.626953z" fill="#2d479a"/>
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
			<linearGradient id="a" gradientTransform="translate(-48 -332.36)" gradientUnits="userSpaceOnUse" x2="0" y1="392.35999" y2="336.35999"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#fff" stop-opacity=".1"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="40" x2="54" y1="17" y2="31"><stop offset="0" stop-color="#060606"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="10" x2="10" y1="61" y2="3"><stop offset="0" stop-color="#7769ff"/><stop offset="1" stop-color="#347bff"/></linearGradient><path d="m10 61v-58h30l14 14v44h-14z" fill="url(#c)" height="100%" width="100%"/><g transform="scale(1 -1)"><path d="m10-4h30v1h-30z" fill="#fff" opacity=".361"/><path d="m10-61h44v1h-44z" opacity=".25"/></g><path d="m54 17-14-14v14z" fill="#2d479a"/><path d="m40 17 14 14v-14z" fill="url(#b)" fill-rule="evenodd" opacity=".2"/><path d="m10 61v-58h30l14 14v44h-14z" fill="url(#a)"/><path d="m21 22v22h22l-11-11 11-11zm1 1h9l-9 9zm10.41406 0h8.17187l-18.58593 18.58594v-8.17188zm-1.1211 10.70703 9.29297 9.29297h-18.58593z" fill="#2d479a"/>
		</svg>
	{/if}
