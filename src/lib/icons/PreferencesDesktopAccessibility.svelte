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
			<path fill="url(#a)" d="M20 11a9 9 0 1 0-18 0 9 9 0 1 0 18 0"/>
  <g opacity=".2">
    <path fill="url(#b)" d="m19.942 12.028-5.735-5.735-1.414 1.414 6.586 6.586a8.942 8.942 0 0 0 .563-2.265"/>
    <path fill="url(#c)" d="M19.176 14.768 13.13 8.722 11.367 7.4c-.346-.26-.917-.55-1.917-.55l-.775 1.825 1.38 1.38a3 3 0 0 0-.095 1.255L7.991 9.341a3.5 3.5 0 0 0-.966 5.634l4.948 4.973a9.007 9.007 0 0 0 7.203-5.18"/>
  </g>
  <g fill="#000" opacity=".1">
    <path fill-rule="evenodd" d="m9.35 9.35-.675-.675.288-.679.968-.397 3.199 1.123v.744c-.25.442-.598 1.098-.729 1.52l3.037.416v1.094l-.246 1.965L16 15v1h-2.125v-1l.083-2H13v.5a3.5 3.5 0 0 1-3.995 3.465l-1.98-1.99A3.49 3.49 0 0 1 6 12.5l1.5-2.27h1.38l.002.002v1A2.364 2.364 0 0 0 7.195 13v1.385L9.5 15l3-1.005V13h-2.367c-.137-.367-.202-.648-.202-1l.555-2.93-.555-.301z" clip-rule="evenodd"/>
    <path d="M13.97 8.883A1 1 0 0 0 14.5 8V7l-1.707.707z"/>
  </g>
  <path fill="url(#d)" d="M13.5 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
  <path fill="url(#e)" d="M6 12.5a3.5 3.5 0 0 1 1.991-3.159l.891.891A2.351 2.351 0 1 0 11.797 13h1.168A3.5 3.5 0 0 1 6 12.5"/>
  <path fill="url(#f)" d="M9.931 7.769 8.85 8.85l-.175-.175C8.5 8.5 8.15 8.15 8.8 7.5l.65-.65c1 0 1.57.29 1.917.55l1.763 1.322S12.25 10 12.025 11l2.868-.1a.53.53 0 0 1 .545.596l-.361 2.889L16 15h-2.125L14 12h-3.867l-.063-.2a3 3 0 0 1 .163-2.208l.558-1.15h.383z"/>
  <defs>
    <linearGradient id="a" x1="-246.511" x2="-246.511" y1="20" y2="2" gradientUnits="userSpaceOnUse">
      <stop stop-color="#197CF1"/>
      <stop offset="1" stop-color="#20BCFA"/>
    </linearGradient>
    <linearGradient id="b" x1="6" x2="19.966" y1="6.293" y2="20.802" gradientUnits="userSpaceOnUse">
      <stop/>
      <stop offset=".35" stop-opacity=".5"/>
      <stop offset=".798" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="c" x1="6" x2="19.966" y1="6.293" y2="20.802" gradientUnits="userSpaceOnUse">
      <stop/>
      <stop offset=".35" stop-opacity=".5"/>
      <stop offset=".798" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="d" x1="11.02" x2="11.02" y1="22" y2="6" gradientUnits="userSpaceOnUse">
      <stop stop-color="#7CBAF8"/>
      <stop offset="1" stop-color="#F4FCFF"/>
    </linearGradient>
    <linearGradient id="e" x1="11.02" x2="11.02" y1="22" y2="6" gradientUnits="userSpaceOnUse">
      <stop stop-color="#7CBAF8"/>
      <stop offset="1" stop-color="#F4FCFF"/>
    </linearGradient>
    <linearGradient id="f" x1="11.02" x2="11.02" y1="22" y2="6" gradientUnits="userSpaceOnUse">
      <stop stop-color="#7CBAF8"/>
      <stop offset="1" stop-color="#F4FCFF"/>
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
			<path fill="url(#a)" d="M30 16c0-7.732-6.268-14-14-14S2 8.268 2 16s6.268 14 14 14 14-6.268 14-14"/>
  <g opacity=".2">
    <path fill="url(#b)" d="M29.746 18.667 20.49 9.41l-1.98 1.98L28.8 21.68a13.9 13.9 0 0 0 .946-3.013"/>
    <path fill="url(#c)" d="m28.494 22.324-9.512-9.513-2.469-1.85c-.484-.364-1.283-.77-2.683-.77l-.91.91c-.91.91-.434 1.564-.189 1.81l1.868 1.867c-.111.313-.19.651-.195 1.04l-1.222-1.222s-.695-.446-1.18-1.18a5.001 5.001 0 0 0-1.538 8.12l8.267 8.198a14.022 14.022 0 0 0 9.763-7.41"/>
  </g>
  <path fill="url(#d)" d="M20.9 10.4a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0"/>
  <path fill="url(#e)" d="m13.175 13.137 1.329-1.66 1.739.942h-.268s-.582.647-1.049 1.61C14.459 14.992 14 16 15 18h1.176c.881 0 1.76-.073 2.63-.218L20 17.5l-.5 4.5h3l-1.292-.861.653-3.639a3.42 3.42 0 0 1 .05-.281c.07-.337.134-.649-.185-1.018-.301-.348-.816-.323-1.973-.267a44.51 44.51 0 0 1-2.317.066c.314-1.4 1.546-3.189 1.546-3.189l-2.469-1.851c-.484-.364-1.283-.77-2.683-.77l-.91.91c-.91.91-.434 1.565-.189 1.81.245.245.444.227.444.227"/>
  <path fill="url(#f)" d="M14 21.5c1.6 0 2.948-1.073 3.366-2.538a17.566 17.566 0 0 0 1.57-.164 5.001 5.001 0 1 1-6.935-5.382 4.528 4.528 0 0 0 1.18 1.18A3.501 3.501 0 0 0 14 21.5"/>
  <defs>
    <linearGradient id="a" x1="-384.571" x2="-384.571" y1="30" y2="2" gradientUnits="userSpaceOnUse">
      <stop stop-color="#197CF1"/>
      <stop offset="1" stop-color="#20BCFA"/>
    </linearGradient>
    <linearGradient id="b" x1="9" x2="29.787" y1="9.41" y2="31.001" gradientUnits="userSpaceOnUse">
      <stop/>
      <stop offset=".35" stop-opacity=".5"/>
      <stop offset=".798" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="c" x1="9" x2="29.787" y1="9.41" y2="31.001" gradientUnits="userSpaceOnUse">
      <stop/>
      <stop offset=".35" stop-opacity=".5"/>
      <stop offset=".798" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="d" x1="16.1" x2="16.1" y1="31.636" y2="8.607" gradientUnits="userSpaceOnUse">
      <stop stop-color="#7CBAF8"/>
      <stop offset="1" stop-color="#F4FCFF"/>
    </linearGradient>
    <linearGradient id="e" x1="16.1" x2="16.1" y1="31.636" y2="8.607" gradientUnits="userSpaceOnUse">
      <stop stop-color="#7CBAF8"/>
      <stop offset="1" stop-color="#F4FCFF"/>
    </linearGradient>
    <linearGradient id="f" x1="16.1" x2="16.1" y1="31.636" y2="8.607" gradientUnits="userSpaceOnUse">
      <stop stop-color="#7CBAF8"/>
      <stop offset="1" stop-color="#F4FCFF"/>
    </linearGradient>
  </defs>
		</svg>
	{/if}
