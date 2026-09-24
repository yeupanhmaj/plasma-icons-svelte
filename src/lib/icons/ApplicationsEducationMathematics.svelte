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
			<path fill="url(#a)" d="M2 3h18v16H2z"/>
  <path stroke="#000" d="M2.5 3.5h17v15h-17z"/>
  <path stroke="url(#b)" d="M2.5 3.5h17v15h-17z"/>
  <path stroke="#AA7F41" d="M3.5 4.5h15v13h-15z" opacity=".5"/>
  <path fill="#fff" d="M16.5 7h-5.83L9 11l-1.125 3L8 12.5V10H5.5v1H7v4h1.55l2.78-7h5.17z"/>
  <path fill="#fff" d="M16 14v-.9h-2l-1 .1s3-.85 3-2.7C16 9.4 15 9 14 9s-2 .5-2 1.5h1c0-.5.5-.6 1-.6s1 .1 1 .6c0 .732-.804 1.196-1.823 1.785-.373.215-.775.447-1.177.715v1z"/>
  <defs>
    <linearGradient id="a" x1="20.75" x2="1.07" y1="19" y2="4.24" gradientUnits="userSpaceOnUse">
      <stop stop-color="#343B40"/>
      <stop offset="1" stop-color="#555E63"/>
    </linearGradient>
    <linearGradient id="b" x1="11" x2="11" y1="19" y2="3" gradientUnits="userSpaceOnUse">
      <stop stop-color="#BD8D48"/>
      <stop offset="1" stop-color="#E8B971"/>
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
			<g clip-path="url(#a)">
    <path fill="url(#b)" d="M32 2H0v28h32z"/>
    <path fill="url(#c)" d="M0 2v28h32V2H1.333zm2 2h28v24H2z"/>
    <path fill="#AA7F41" d="M32 29H0v1h32z"/>
    <path fill="#AA7F41" fill-opacity=".498" d="M2 3.955V28h28V3.955zM3 5h26v22H3z"/>
    <path fill="#007AD9" d="M23 26h-4v1h4z"/>
    <path fill="#D6D6D6" d="M28 26h-4v1h4z"/>
    <path fill="#fff" d="M25 10h-6.469c-1.216 0-1.847 0-2.287.29-.475.316-.724.97-1.244 2.335L12 20.5V19l-.713-3.5c-.16-.838-.231-1.208-.437-1.312-.162-.082-.409.001-.85.151l-3 1.017V16.5l2.85-1 .863 4.875C11 22 11.7 22 11.893 22c.354 0 1.107 0 1.607-1.375l3-8.25c.286-.785.408-1.122.647-1.267C17.327 11 17.57 11 18 11h7z"/>
    <path fill="#fff" d="M22.6 15.4c0 2.1-4.6 4.6-4.6 4.6v1h6v-1h-4s3.85-2 3.85-4.6c0-1.76-1.35-2.4-2.85-2.4s-2.85.8-2.85 2.4c.35.1.85.1 1.25 0 0-.8.6-1.4 1.6-1.4 1.2 0 1.6.6 1.6 1.4"/>
  </g>
  <defs>
    <linearGradient id="b" x1="33.333" x2="-1.255" y1="30" y2="3.647" gradientUnits="userSpaceOnUse">
      <stop stop-color="#343B40"/>
      <stop offset="1" stop-color="#555E63"/>
    </linearGradient>
    <linearGradient id="c" x1="16" x2="16" y1="30" y2="2" gradientUnits="userSpaceOnUse">
      <stop stop-color="#BD8D48"/>
      <stop offset="1" stop-color="#E8B971"/>
    </linearGradient>
    <clipPath id="a">
      <path fill="#fff" d="M0 0h32v32H0z"/>
    </clipPath>
  </defs>
		</svg>
	{/if}
