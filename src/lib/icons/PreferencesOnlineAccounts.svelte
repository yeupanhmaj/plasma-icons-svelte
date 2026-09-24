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
			<defs><linearGradient id="a" gradientTransform="matrix(.64286 0 0 .64286 -246.51 -330.87)" gradientUnits="userSpaceOnUse" x2="0" y1="545.798" y2="517.798"><stop offset="0" stop-color="#197cf1"/><stop offset="1" stop-color="#20bcfa"/></linearGradient></defs><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="11" x2="11" y1="19" y2="1"><stop offset="0" stop-color="#7cbaf8"/><stop offset="1" stop-color="#f4fcff"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="20" x2="6" y1="19" y2="5"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><rect style="fill:url(#a);stroke-width:.64285803" height="18" rx="9" width="18" x="2" y="2"/><path style="fill:#5edc8b;stroke-width:2;stroke-linejoin:round;fill-opacity:1" d="M11 2a9 9 0 0 0-8.055 5H4l1 1V7h1V6l2-2v1l1-1V3h1v1h1l1-1v-.943A9 9 0 0 0 11 2zm6.361 2.639L17 5v1h1l.283-.283a9 9 0 0 0-.922-1.078zm1.323 1.677L18 7l-2 1-1 3h1v1l2 1 1.918-.959A9 9 0 0 0 20 11a9 9 0 0 0-1.316-4.684zM3 9v1h-.922A9 9 0 0 0 2 11h1l2 2h1v1H5v1l2 2v2.055A9 9 0 0 0 11 20l1-1v-1h1l1-1v-1l1-1-1-1h-2l-1-1h-1l-1-1H7v-1l-1 1H5v-1l-1-1V9z"/><path d="M9 14c-.846.002-1.599.402-1.88 1h3.765c-.283-.6-1.038-1-1.885-1z" fill="#292c2f"/><path d="M9 7a2 2 0 0 0-1.414 3.414l1.598 1.592L9 12c-1.657 0-3 1.12-3 2.5.002.168.025.336.068.5l4.996 4.996a9 9 0 0 0 8.627-6.719l-4.984-4.984-1.414 1.414L14.586 11h-.758l-3.414-3.414z" fill="url(#b)" opacity=".2"/><path d="M9 7a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm5 0a1 1 0 0 0-1 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1zm-1 3v4h2v-4zm-4 1c-1.657 0-3 1.12-3 2.5.002.168.025.336.068.5h5.864c.043-.164.065-.332.068-.5 0-1.38-1.343-2.5-3-2.5zm0 1c.847 0 1.602.4 1.885 1H7.119c.282-.598 1.035-.998 1.881-1z" fill="url(#c)"/><path style="opacity:.3;fill:#292c2f;stroke-width:2;stroke-linejoin:round" d="M19.975 10.36A9 9 0 0 1 11 19a9 9 0 0 1-8.965-8.5A9 9 0 0 0 2 11a9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-.025-.64z"/>
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
			<defs><linearGradient id="a"><stop style="stop-color:#197cf1"/><stop offset="1" style="stop-color:#20bcfa"/></linearGradient><linearGradient xlink:href="#a" id="f" y1="545.798" y2="517.798" x2="0" gradientUnits="userSpaceOnUse"/><linearGradient id="b"><stop style="stop-color:#7cbaf8"/><stop offset="1" style="stop-color:#f4fcff"/></linearGradient><linearGradient xlink:href="#b" id="j" y1="23" y2="9" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="translate(384.571 515.798)"/><linearGradient id="c"><stop style="stop-color:#383e51"/><stop offset="1" style="stop-color:#655c6f;stop-opacity:0"/></linearGradient><linearGradient xlink:href="#c" id="i" y1="524.798" x1="393.571" y2="538.798" x2="407.571" gradientUnits="userSpaceOnUse"/><linearGradient id="d" gradientUnits="userSpaceOnUse" x2="0" y1="30" y2="8"><stop offset="0" stop-color="#cfd2d5"/><stop offset="1" stop-color="#eff0f1"/></linearGradient><linearGradient id="e"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient gradientTransform="translate(384.571 515.798)" id="g" gradientUnits="userSpaceOnUse" x1="23" x2="30" xlink:href="#e" y1="13" y2="20"/><linearGradient gradientTransform="translate(384.571 515.798)" id="h" gradientUnits="userSpaceOnUse" x1="2" x2="2" y1="30" y2="2"><stop offset="0" stop-color="#54d883"/><stop offset="1" stop-color="#abf9c7"/></linearGradient></defs><g transform="translate(-384.571 -515.798)"><rect width="28" x="386.571" y="517.798" rx="14" height="28" style="fill:url(#f)"/><path style="opacity:.2;fill:url(#g);fill-rule:evenodd" d="m414.301 529.068-4.73 4.73 3.758 3.758a13.984 13.984 0 0 0 .972-8.488z"/><path style="fill:url(#h)" d="M400.571 517.798a14 14 0 0 0-13.059 9h.06l3-1 1 1 1 1v-2l2-1v-1l2-1 2-2v1l1-1-1-1h2v1l2-1-1-1v-.95a14 14 0 0 0-1-.05zm10.375 4.625-.375.375v1h1.47a14 14 0 0 0-1.095-1.375zm1.316 1.684-.69.691-2 2-1 1-1 3v1l1 1 1 1 2 1 2.79-.688a14 14 0 0 0 .21-2.312 14 14 0 0 0-2.31-7.691zm-23.69 4.691-1 1h-.839c-.05.34-.088.681-.113 1.023v.002l1.951.975 1 1 2 1 1 1-1 1v2l1 2 2 2v2.629a14 14 0 0 0 6 1.371c.17-.003.34-.009.51-.018l.49-.982v-1l2-1 1-1v-2l1-1v-1l-1-1-3-1-1-1-1-1h-1l-1-1-3-1-2 1h-2v-2h-1v-2z"/><path style="opacity:.2;fill:#292c2f" d="M414.55 531.212a14 14 0 0 1-13.979 13.586 14 14 0 0 1-13.979-13.414 14 14 0 0 0-.02.414 14 14 0 0 0 14 14 14 14 0 0 0 14-14 14 14 0 0 0-.022-.586z"/><path style="opacity:.2;fill:url(#i);fill-rule:evenodd" d="M400.571 524.798c.218 0 .43.022.635.063h.004c.205.037.401.098.592.17l-.23-.233zm0 1a2.493 2.493 0 0 0-2.5 2.5c0 1.385 1.115 2.5 2.5 2.5a2.48 2.48 0 0 0 1.545-.545l-1.545 1.545-1.113 1.113c-.32.062-.632.142-.932.25h-.002c-.221.096-.446.189-.666.287-.068.031-.131.068-.199.1a5.983 5.983 0 0 0-1.511 1.2l-.002.001a6.061 6.061 0 0 0-.918 1.322l-.028.06c-.07.138-.134.28-.193.425-.02.051-.038.104-.057.156-.045.123-.09.245-.129.371-.016.056-.028.112-.043.168a5.908 5.908 0 0 0-.093.387l-.008.055-1.106 1.105 7 7h14v-10l-1 1-9-9-.732-.73c.071.19.132.386.17.591v.004c.037.207.062.418.062.635l-1.545 1.545a2.48 2.48 0 0 0 .545-1.545c0-1.385-1.115-2.5-2.5-2.5z"/><path style="fill:url(#j)" d="M400.571 524.798a3.492 3.492 0 0 0-3.5 3.5c0 1.939 1.561 3.5 3.5 3.5 1.94 0 3.5-1.561 3.5-3.5s-1.56-3.5-3.5-3.5zm0 7c-3.878 0-7 3.122-7 7h10v-1h-8.91a5.98 5.98 0 0 1 5.91-5c1.147 0 2.2.34 3.106.895l.744-.745a6.977 6.977 0 0 0-3.85-1.15zm0-6c1.385 0 2.5 1.115 2.5 2.5s-1.115 2.5-2.5 2.5a2.495 2.495 0 0 1-2.5-2.5c0-1.385 1.115-2.5 2.5-2.5zm6 6c-.554 0-1 .446-1 1s.446 1 1 1 1-.446 1-1-.446-1-1-1zm-1 3v4h2v-4z"/></g>
		</svg>
	{/if}
