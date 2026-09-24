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

	{#if numericSize <= 27}
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
			<linearGradient id="a" gradientTransform="matrix(.57142913 0 0 .57142913 -217.89818 -292.88488)" gradientUnits="userSpaceOnUse" x2="0" y1="545.79797" y2="517.79797"><stop offset="0" stop-color="#2a2c2f"/><stop offset="1" stop-color="#424649"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="6.500007" x2="15.500007" y1="6.499981" y2="15.49998"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="c" gradientTransform="matrix(.64285714 0 0 .64285714 .714286 .714286)" gradientUnits="userSpaceOnUse" x2="0" y1="18" y2="7"><stop offset="0" stop-color="#197cf1"/><stop offset="1" stop-color="#20bcfa"/></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="10.999994" x2="10.999994" y1="19.999996" y2="2.000014"><stop offset="0" stop-color="#788085"/><stop offset="1" stop-color="#9ba1a6"/></linearGradient><path d="m11 2c-4.9859949 0-9 4.0140064-9 9 0 4.985994 4.0140051 9 9 9 4.985995 0 9-4.014006 9-9 0-4.9859936-4.014005-9-9-9z" fill="url(#d)" stroke-width=".642857"/><rect fill="url(#a)" height="16" rx="9.333294" stroke-width=".571428" width="16" x="3" y="3"/><g stroke-width=".642857"><path d="m10 5v7l8 8h2v-6l-9.031056-9z" fill="url(#b)" fill-rule="evenodd" opacity=".2"/><path d="m10 5v7h5v-1h-4v-6z" fill="url(#c)"/></g>
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
			<linearGradient id="a" gradientTransform="matrix(.85714646 0 0 .85714646 57.223047 75.969225)" gradientUnits="userSpaceOnUse" x2="0" y1="545.79797" y2="517.79797"><stop offset="0" stop-color="#2a2c2f"/><stop offset="1" stop-color="#424649"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="9.00001" x2="23.00001" y1="8.99997" y2="22.99997"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x2="0" y1="18" y2="7"><stop offset="0" stop-color="#197cf1"/><stop offset="1" stop-color="#20bcfa"/></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="15.99999068569" x2="15.99999068569" y1="29.99999495756" y2="2.00002135764"><stop offset="0" stop-color="#788085"/><stop offset="1" stop-color="#9ba1a6"/></linearGradient><g transform="translate(-384.57143 -515.798)"><path d="m16 2c-7.7559921 0-14 6.2440079-14 14 0 7.755992 6.2440079 14 14 14 7.755992 0 14-6.244008 14-14 0-7.7559921-6.244008-14-14-14z" fill="url(#d)" stroke-width="1.000001" transform="translate(384.57143 515.798)"/><rect fill="url(#a)" height="24.000078" rx="13.999987" stroke-width=".857146" width="24.000078" x="388.57138" y="519.79797"/><path d="m15 7v10.691406l9.283203 9.283203c2.276572-1.670912 4.019245-4.011244 4.951172-6.740234l-13.234375-13.234375z" fill="url(#b)" fill-rule="evenodd" opacity=".2" transform="translate(384.57143 515.798)"/><path d="m15 7v10 1h8v-1h-7v-10z" fill="url(#c)" transform="translate(384.57143 515.798)"/></g>
		</svg>
	{/if}
