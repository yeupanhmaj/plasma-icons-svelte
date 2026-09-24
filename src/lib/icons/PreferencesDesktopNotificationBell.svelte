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
			<linearGradient id="a" gradientTransform="matrix(1 0 0 .97607473 37.999999 .598619)" gradientUnits="userSpaceOnUse" x1="11" x2="11" y1="17" y2="2"><stop offset="0" stop-color="#f79f06"/><stop offset=".06666667" stop-color="#eeab32"/><stop offset=".2" stop-color="#e18f00"/><stop offset=".80145305" stop-color="#f8c468"/><stop offset="1" stop-color="#ffc35a"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="11" x2="11" y1="20" y2="14"><stop offset="0" stop-color="#82868d"/><stop offset="1" stop-color="#d9dada"/></linearGradient><circle cx="11" cy="17" fill="url(#b)" r="3" stroke-width="3"/><path d="m11 2a2 2 0 0 0 -2 2 2 2 0 0 0 .0449219.40625 5 5 0 0 0 -3.0449219 4.59375v1a4 6 0 0 1 -4 6v1h6 6 1 5v-1a4 6 0 0 1 -4-6v-1a5 5 0 0 0 -3.044922-4.6015625 2 2 0 0 0 .044922-.3984375 2 2 0 0 0 -2-2z" fill="url(#a)"/><path d="m2 16h18v.999999h-18z" opacity=".15" stroke-width=".801784"/><path d="m12.728516 2.9960938a2 2 0 0 1 -1.728516 1.0039062 5 5 0 0 1 1.955078.3984375 2 2 0 0 0 .044922-.3984375 2 2 0 0 0 -.271484-1.0039062zm-1.728516 1.0039062a2 2 0 0 1 -1.7265625-1 2 2 0 0 0 -.2734375 1 2 2 0 0 0 .046875.40625 5 5 0 0 1 1.953125-.40625z" opacity=".15"/><path d="m12.318359 2.4941406a2 2 0 0 1 -1.318359.5058594 2 2 0 0 1 -1.3183594-.5039062 2 2 0 0 0 -.4101562.5097656 2 2 0 0 0 1.7285156.9941406 2 2 0 0 0 1.732422-.9980469 2 2 0 0 0 -.414063-.5078125z" opacity=".08"/>
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
			<linearGradient id="a" x1="22" x2="22" y1="29.999999" y2="22.999999" gradientTransform="translate(-5.5)" gradientUnits="userSpaceOnUse">
        <stop stop-color="#82868d" offset="0"/>
        <stop stop-color="#d9dada" offset="1"/>
    </linearGradient>
    <linearGradient id="b" x1="16" x2="16" y1="26" y2="1.411719" gradientTransform="matrix(1 0 0 .97607473 -1e-6 .598619)" gradientUnits="userSpaceOnUse">
        <stop stop-color="#f79f06" offset="0"/>
        <stop stop-color="#eeab32" offset=".0427864"/>
        <stop stop-color="#e18f00" offset=".16666667"/>
        <stop stop-color="#f8c468" offset=".80145305"/>
        <stop stop-color="#ffc35a" offset="1"/>
    </linearGradient>
    <circle cx="15.999998" cy="26.5" r="3.5" fill="url(#a)"/>
    <path d="m16 2c-1.984375 0-3.5 1.5468495-3.5 3.4765625-.000217.166748.014159.3590775.042969.5234375-3.6145912 1.227326-4.538666 4.528186-4.542969 8.263672 0 4.880374-4 8.784177-6 10.736328v1h14 14v-1c-2-1.95215-6-5.855954-6-10.736328-.0043-3.735486-.928379-7.036346-4.542969-8.263672.02881-.16436.043189-.3566895.042969-.5234375 0-1.929713-1.515625-3.4765625-3.5-3.4765625z" fill="url(#b)"/>
    <path d="m2 25h28v.999999h-28z" opacity=".15"/>
    <path d="m12.546875 5c-.021126.1573019-.046875.313055-.046875.4765625-.000217.166748.014159.3590775.042969.5234375h6.914062c.02881-.16436.043189-.3566895.042969-.5234375 0-.1635075-.025749-.3192606-.046875-.4765625z" opacity=".15"/>
		</svg>
	{/if}
