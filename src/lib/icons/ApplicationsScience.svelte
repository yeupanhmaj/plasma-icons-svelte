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
			<path fill="url(#a)" d="M8 3v1h1v6l-5 7v2h14v-2l-5-7V4h1V3z"/>
  <path fill="url(#b)" fill-rule="evenodd" d="M18 18v-1l-2.857-4H6.857L4 17v1z" clip-rule="evenodd"/>
  <path fill="url(#c)" d="M4 18h14v1H4z"/>
  <path fill="url(#d)" d="M6.857 13 4 17v1h14v-1l-2.857-4h-.857L16 17l-6 1 .714-5z"/>
  <g opacity=".4">
    <path fill="url(#e)" d="M6.857 13 9 10V4.5l2 1V11l-.286 2z"/>
    <path fill="url(#f)" d="M14.286 13 13 10l2.143 3z"/>
  </g>
  <defs>
    <linearGradient id="a" x1="4" x2="4" y1="19" y2="3" gradientUnits="userSpaceOnUse">
      <stop stop-color="#AEBAC1"/>
      <stop offset=".383" stop-color="#B2BCC3"/>
      <stop offset="1" stop-color="#BDC3C7"/>
    </linearGradient>
    <linearGradient id="b" x1="5" x2="4" y1="19" y2="13" gradientUnits="userSpaceOnUse">
      <stop stop-color="#27AE60"/>
      <stop offset="1" stop-color="#78DA06"/>
    </linearGradient>
    <linearGradient id="c" x1="4.5" x2="18" y1="18" y2="19" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0EA712"/>
      <stop offset="1" stop-color="#1F8B4D"/>
    </linearGradient>
    <linearGradient id="d" x1="11" x2="11" y1="13" y2="18" gradientUnits="userSpaceOnUse">
      <stop stop-color="#78E22E"/>
      <stop offset="1" stop-color="#78E22E" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="e" x1="4" x2="4" y1="4" y2="19" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fff"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="f" x1="4" x2="4" y1="4" y2="19" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fff"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
  </defs>
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
			<path fill="url(#a)" d="M6.889 29H25.11c1.445 0 1.445-1.444 1.445-1.926 0-.481-.19-1.227-.545-1.72L19 13V4h1V3h-8v1h1v9L5.989 25.355c-.354.492-.545 1.238-.545 1.72 0 .48 0 1.925 1.445 1.925"/>
  <path fill="url(#b)" d="M5.548 28h20.904c.104-.36.104-.726.104-.926 0-.481-.19-1.227-.545-1.72L22.405 19H9.595L5.99 25.355c-.354.492-.545 1.238-.545 1.72 0 .2 0 .565.104.925"/>
  <path fill="url(#c)" d="M13.5 28H5.548c-.104-.36-.104-.726-.104-.926 0-.333.092-.794.266-1.209L9.6 19H15z"/>
  <path fill="url(#d)" d="m20.65 19 2.853 7.25L13.5 28h12.952c.104-.36.104-.726.104-.926 0-.354-.104-.852-.3-1.287L22.406 19z"/>
  <path fill="url(#e)" d="M25.111 28H6.89c-1.027 0-1.324-.73-1.41-1.326a2.59 2.59 0 0 0-.035.4c0 .482 0 1.926 1.445 1.926h18.22c1.445 0 1.445-1.444 1.445-1.926 0-.12-.012-.255-.035-.4-.086.596-.383 1.326-1.41 1.326"/>
  <g opacity=".4">
    <path fill="url(#f)" d="m16 13-1 6H9.6l3.4-6V5l3 1z"/>
    <path fill="url(#g)" d="m19 13 3.405 6H20.65C19.5 16 19 14 19 13"/>
  </g>
  <path fill="url(#h)" d="M12 3h8v1h-8z" opacity=".4"/>
  <defs>
    <linearGradient id="a" x1="16" x2="16" y1="29" y2="17" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C9CE3B"/>
      <stop offset="1" stop-color="#BDC3C7"/>
    </linearGradient>
    <linearGradient id="c" x1="16" x2="16" y1="19" y2="28" gradientUnits="userSpaceOnUse">
      <stop stop-color="#78E22E"/>
      <stop offset="1" stop-color="#78E22E" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="d" x1="16" x2="16" y1="19" y2="28" gradientUnits="userSpaceOnUse">
      <stop stop-color="#78E22E"/>
      <stop offset="1" stop-color="#78E22E" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="e" x1="6.324" x2="25.671" y1="28.03" y2="27.945" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0EA712"/>
      <stop offset=".659" stop-color="#1F8B64"/>
      <stop offset="1" stop-color="#0EA74B"/>
    </linearGradient>
    <linearGradient id="f" x1="13.279" x2="13.279" y1="4.125" y2="26.875" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fff"/>
      <stop offset="1" stop-color="#fff" stop-opacity=".3"/>
    </linearGradient>
    <linearGradient id="g" x1="13.279" x2="13.279" y1="4.125" y2="26.875" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fff"/>
      <stop offset="1" stop-color="#fff" stop-opacity=".3"/>
    </linearGradient>
    <linearGradient id="h" x1="20" x2="12" y1="3.5" y2="3.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fff" stop-opacity=".5"/>
      <stop offset=".667" stop-color="#fff"/>
      <stop offset="1" stop-color="#fff" stop-opacity=".5"/>
    </linearGradient>
    <radialGradient id="b" cx="0" cy="0" r="1" gradientTransform="matrix(5 9.99996 -32.21385 16.10696 9.5 19)" gradientUnits="userSpaceOnUse">
      <stop stop-color="#78DA06"/>
      <stop offset=".749" stop-color="#27AE60"/>
      <stop offset="1" stop-color="#1AAD66"/>
    </radialGradient>
  </defs>
		</svg>
	{/if}
