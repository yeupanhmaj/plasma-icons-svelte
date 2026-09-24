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
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="35.339394" x2="35.339394" y1="12.6" y2="7.6"><stop offset="0" stop-color="#6c5548"/><stop offset="1" stop-color="#997657"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="35.339394" x2="35.339394" y1="4.6" y2="-2.4"><stop offset="0" stop-color="#bdc3c7"/><stop offset="1" stop-color="#eff0f1"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="11" x2="11" y1="5.5" y2="2.5"><stop offset="0" stop-color="#909c9c"/><stop offset=".333" stop-color="#cfd5d5"/><stop offset="1" stop-color="#eff1f1"/></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="1" x2="21" y1="8" y2="19"><stop offset="0" stop-color="#232629"/><stop offset="1" stop-color="#232629" stop-opacity="0"/></linearGradient><path d="m15.949219 8.0507812-11.8789065 3.9492188 2.9296875 3-6 4h20l1-5z" fill="url(#d)" opacity=".2"/><path d="m7.5859375 12-2 2h1.4140625l2-2zm5.4140625 0 2 2h1.414062l-2-2z" fill="#464747"/><g stroke-width="2"><path d="m4 14c-.554 0-1 .446-1 1v1h-1c-.554 0-1 .446-1 1v2h20v-2c0-.554-.446-1-1-1h-1v-1c0-.554-.446-1-1-1z" fill="url(#a)"/><path d="m1 17h20v2h-20z" fill="#433a35"/><path d="m3 15h16v1h-16z" opacity=".2"/><path d="m11 6a7 7 0 0 0 -6.9296875 6h13.8574215a7 7 0 0 0 -6.927734-6z" fill="url(#b)"/><path d="m4.6875 10a7 7 0 0 0 -.3808594 1h13.3847654a7 7 0 0 0 -.380859-1z" fill="#eeeff0" opacity=".4"/></g><path d="m11 2.5a1.5 1.5 0 0 0 -1.5 1.5 1.5 1.5 0 0 0 .3847656 1h2.2304684a1.5 1.5 0 0 0 .384766-1 1.5 1.5 0 0 0 -1.5-1.5z" fill="url(#c)" stroke-width="1.5"/><path d="m10 5v1.0839844a7 7 0 0 1 1-.0839844 7 7 0 0 1 1 .0800781v-1.0800781zm-5.703125 6c-.099865.327347-.175589.661576-.2265625 1h13.8574215c-.05097-.338424-.126697-.672653-.226562-1z" fill="#979c9f" stroke-width="2.44949"/>
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
			<linearGradient id="a"><stop offset="0" stop-color="#232629"/><stop offset="1" stop-color="#232629" stop-opacity="0"/></linearGradient><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="16" x2="16" y1="17" y2="9"><stop offset="0" stop-color="#bdc3c7"/><stop offset="1" stop-color="#eff0f1"/></linearGradient><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="16" x2="16" y1="7" y2="9"><stop offset="0" stop-color="#afb0b3"/><stop offset="1" stop-color="#bdc3c7"/></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="10" x2="24" xlink:href="#a" y1="18" y2="25"/><radialGradient id="c" cx="6" cy="8" gradientTransform="matrix(0 2 -2 0 22 6)" gradientUnits="userSpaceOnUse" r="10.5" xlink:href="#a"/><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="16" x2="16" y1="25" y2="19"><stop offset="0" stop-color="#6c5548"/><stop offset="1" stop-color="#997657"/></linearGradient><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="16" x2="16" y1="18" y2="17"><stop offset="0" stop-color="#b0b8b8"/><stop offset="1" stop-color="#cfd5d5"/></linearGradient><linearGradient id="h" gradientUnits="userSpaceOnUse" x1="16" x2="16" y1="8" y2="5"><stop offset="0" stop-color="#909c9c"/><stop offset=".333" stop-color="#cfd5d5"/><stop offset="1" stop-color="#eff1f1"/></linearGradient><path d="M6 19a.972.972 0 0 0-.621.217 1 1 0 0 0-.36.584A1.006 1.006 0 0 0 5 20a1.993 1.993 0 0 1-1.275 1.862 2.001 2.001 0 0 1-.385.108A2.001 2.001 0 0 1 3 22a.507.507 0 0 0-.17.028.609.609 0 0 0-.193.108.916.916 0 0 0-.178.18 1.715 1.715 0 0 0-.225.395 2.48 2.48 0 0 0-.111.33 3.133 3.133 0 0 0-.117.759A4.06 4.06 0 0 0 2 24v1h28v-1a4 4 0 0 0-.123-.959 2.872 2.872 0 0 0-.111-.33 2.097 2.097 0 0 0-.145-.277 1.137 1.137 0 0 0-.258-.297A.609.609 0 0 0 29 22a2 2 0 0 1-.34-.03 2.001 2.001 0 0 1-.566-.187A2 2 0 0 1 27 20a1.005 1.005 0 0 0-.045-.295.997.997 0 0 0-.19-.35 1 1 0 0 0-.312-.246A.997.997 0 0 0 26 19H16z" fill="url(#b)"/><path d="M22 19l-1-1h-1l1 1zm-12 0l1-1h1l-1 1z" fill="#4d4d4d"/><path d="M6 18h20l1 1H7z" fill="url(#c)" opacity=".2"/><path d="M6 18l9 9h15v-3a4 4 0 0 0-.123-.959 2.098 2.098 0 0 0-.256-.607 1.137 1.137 0 0 0-.258-.297A.609.609 0 0 0 29 22a2.003 2.003 0 0 1-2-2 1.005 1.005 0 0 0-.547-.89A.997.997 0 0 0 26 19v-1z" fill="url(#d)" opacity=".2"/><path d="M25.787 17H6.203c-.135.658-.203.328-.203 1h20c-.004-.672-.075-.342-.213-1z" fill="url(#e)" opacity=".998"/><path d="M15 7v3h2V7z" fill="url(#f)"/><path d="M16 9a10 10 0 0 0-9.797 8h19.584A10 10 0 0 0 16 9z" fill="url(#g)" opacity=".998"/><path d="M16 5a2 2 0 0 0-2 2 2 1 0 0 0 1 .865 2 1 0 0 0 2 0A2 1 0 0 0 18 7a2 2 0 0 0-2-2z" fill="url(#h)"/><path d="M2 25h28v2H2z" fill="#433a35"/>
		</svg>
	{/if}
