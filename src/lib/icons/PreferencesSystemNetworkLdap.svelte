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
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="6.5" x2="6.5" y1="9.714286" y2="4.571429"><stop offset="0" stop-color="#31363b"/><stop offset="1" stop-color="#4d4d4d"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="10.357143" x2="18.714286" y1="9.071429" y2="17.428572"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="c" gradientTransform="matrix(.66666664 0 0 .64285714 .333334 .714286)" gradientUnits="userSpaceOnUse" x1="28" x2="28" y1="30" y2="2"><stop offset="0" stop-color="#997657"/><stop offset="1" stop-color="#d4ba94"/></linearGradient><linearGradient id="d" gradientTransform="matrix(.50000251 0 0 10.285714 -19.3455 -127.65079)" gradientUnits="userSpaceOnUse" x1="44.691002" x2="44.691002" y1="14.355" y2="12.605"><stop offset="0" stop-color="#433a35"/><stop offset="1" stop-color="#6c5548"/></linearGradient><path d="m3.0000003 2h15.9999997v18h-15.9999997z" fill="url(#c)" stroke-width=".654653"/><path d="m3 19h16v1h-16z" fill="#232629" opacity=".6" stroke-width=".816497"/><path d="m3 2v18h3v-18z" fill="url(#d)" stroke-width=".694365"/><path d="m3 18h16v1h-16z" fill="#c5cfd3" stroke-width=".816497"/><path d="m3 17h16v1h-16z" fill="#232629" opacity=".4" stroke-width=".816496"/><path d="m19 4h1v3h-1z" fill="#2ecc71" stroke-width=".612372"/><path d="m19 8h1v3h-1z" fill="#2980b9" stroke-width=".612373"/><path d="m19 12h1v3h-1z" fill="#da4453" stroke-width=".612372"/><path d="m13.414062 6.5859375-2.414062.4140625-.414062 2.4140625 1.585938 1.5859375-2.171876 1-.9316 2 4 4h5.9316v-5.828125z" fill="url(#b)" opacity=".2" stroke-width=".642857"/><path d="m3 3a2 2 0 0 0 -2 2 2 2 0 0 0 2 2v-1a1 1 0 0 1 -1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1h1a2 2 0 0 0 -2-2zm0 5a2 2 0 0 0 -2 2 2 2 0 0 0 2 2v-1a1 1 0 0 1 -1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1h1a2 2 0 0 0 -2-2zm0 5a2 2 0 0 0 -2 2 2 2 0 0 0 2 2v-1a1 1 0 0 1 -1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1h1a2 2 0 0 0 -2-2z" fill="#7f8c8d" stroke-width="2"/><path d="m4 5v1h1v-1zm0 5v1h1v-1zm0 5v1h1v-1z" fill="#232629" stroke-width="2"/><path d="m12 6c-1.104569 0-2 .895431-2 2s.895431 2 2 2 2-.895431 2-2-.895431-2-2-2zm0 1c.552285 0 1 .447715 1 1s-.447715 1-1 1-1-.447715-1-1 .447715-1 1-1zm0 4c-1.65685 0-3 1.11929-3 2.5.002.16816.0254.33567.0684.5h5.86328c.0429-.16433.0658-.33184.0684-.5 0-1.38071-1.34315-2.5-3-2.5zm0 1c.84725.00027 1.60235.4009 1.88477 1h-3.76563c.28194-.59809 1.03504-.99849 1.88086-1z" fill="url(#a)"/>
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
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="15" x2="28" y1="13" y2="26"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="26" x2="26" y1="20.999999" y2="7"><stop offset="0" stop-color="#31363b"/><stop offset="1" stop-color="#4d4d4d"/></linearGradient><linearGradient id="c" gradientTransform="translate(0 -1)" gradientUnits="userSpaceOnUse" x1="4" x2="8" xlink:href="#i" y1="19" y2="23"/><linearGradient id="d" gradientTransform="translate(0 -8)" gradientUnits="userSpaceOnUse" x1="4" x2="8" xlink:href="#i" y1="19" y2="23"/><linearGradient id="e"><stop offset="0"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="3.999" x2="8" xlink:href="#e" y1="4" y2="8"/><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="28" x2="28" y1="30" y2="2"><stop offset="0" stop-color="#997657"/><stop offset="1" stop-color="#d4ba94"/></linearGradient><linearGradient id="h" gradientTransform="matrix(.66667 0 0 16 -25.794 -199.679)" gradientUnits="userSpaceOnUse" x1="44.691" x2="44.691" y1="14.355" y2="12.605"><stop offset="0" stop-color="#433a35"/><stop offset="1" stop-color="#6c5548"/></linearGradient><linearGradient id="i" gradientTransform="matrix(.70710678 -.70710678 .70710678 .70710678 -664.006239 -60.060868)" gradientUnits="userSpaceOnUse" x1="432.711" x2="432.711" xlink:href="#e" y1="531.791" y2="544.519"/><path d="m4 2h24v28h-24z" fill="url(#g)"/><path d="m4 29h24v1h-24z" fill="#232629" opacity=".6"/><path d="m4 2v28h4v-1h-3v-1h3v-26h-3z" fill="url(#h)"/><path d="m4 28h24v1h-24z" fill="#c5cfd3"/><path d="m4 27h24v1h-24z" fill="#232629" opacity=".4"/><path d="m28 6h2v4h-2z" fill="#2ecc71"/><path d="m28 12h2v4h-2z" fill="#2980b9"/><path d="m28 18h2v4h-2z" fill="#da4453"/><circle cx="6" cy="21" fill="#232629" r="1"/><circle cx="6" cy="14" fill="#232629" r="1"/><path d="m6.333 20h-2.333l4 4 1.333-1z" fill="url(#c)" opacity=".2"/><path d="m4.5 19a2.5 3 0 0 0 -2.5 3 2.5 3 0 0 0 2 2.938v-1.055a1.5 2 0 0 1 -1-1.883 1.5 2 0 0 1 1.5-2 1.5 2 0 0 1 1.5 2 1 1 0 0 0 .938-.654 2.5 3 0 0 0 -2.438-2.346z" fill="#7f8c8d"/><path d="m6.333 13h-2.333l4 4 1.332-1z" fill="url(#d)" opacity=".2"/><path d="m4.5 12a2.5 3 0 0 0 -2.5 3 2.5 3 0 0 0 2 2.938v-1.055a1.5 2 0 0 1 -1-1.883 1.5 2 0 0 1 1.5-2 1.5 2 0 0 1 1.5 2 1 1 0 0 0 .938-.654 2.5 3 0 0 0 -2.438-2.346z" fill="#7f8c8d"/><circle cx="6" cy="7" fill="#232629" r="1"/><path d="m6.333 6h-2.333l4 4 1.332-1z" fill="url(#f)" opacity=".2"/><path d="m4.5 5a2.5 3 0 0 0 -2.5 3 2.5 3 0 0 0 2 2.938v-1.055a1.5 2 0 0 1 -1-1.883 1.5 2 0 0 1 1.5-2 1.5 2 0 0 1 1.5 2 1 1 0 0 0 .938-.654 2.5 3 0 0 0 -2.438-2.346z" fill="#7f8c8d"/><path d="m11 21 6 6h11v-11.2466l-7.8767-7.8767-2.1233-.8767-3 3 .8768 2.1232 2.1232 2.1232-3 .7536-3 3z" fill="url(#a)" opacity=".2"/><path d="m18 7c-1.662 0-3 1.3379999-3 3 0 1.662 1.338 3 3 3s3-1.338 3-3c0-1.6620001-1.338-3-3-3zm0 1c1.108 0 2 .892 2 2s-.892 2-2 2-2-.892-2-2 .892-2 2-2zm0 6c-3.878 0-7 3.122-7 7h7 7c0-3.878-3.122-7-7-7zm-.04883 1a5.98 5.98 0 0 1 .04883 0 5.98 5.98 0 0 1 5.910156 5h-5.910156-5.910156a5.98 5.98 0 0 1 5.861328-5z" fill="url(#b)"/>
		</svg>
	{/if}
