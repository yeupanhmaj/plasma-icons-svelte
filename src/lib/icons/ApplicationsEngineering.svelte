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
			<path fill="url(#a)" d="M2 4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
  <path fill="url(#b)" fill-rule="evenodd" d="M4 6H2v1h2v8H2v1h2v3h1v-3h12v3h1v-3h2v-1h-2V7h2V6h-2V3h-1v3H5V3H4zm13 1H5v8h12z" clip-rule="evenodd"/>
  <path fill="url(#c)" d="M20 11.4 11.6 3 9.5 5.5l1 3-2.5 4-1.85.35L8 14.7l-1.37 3.93L7 19h13z" opacity=".4"/>
  <path fill="#1D242E" d="M3 19a1 1 0 0 1-1-1v-1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v1a1 1 0 0 1-1 1z" opacity=".4"/>
  <path fill="#5C6772" d="M6 12.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5"/>
  <path fill="url(#d)" d="M11 2a.6.6 0 0 0-.6.6V4h1.2V2.6A.6.6 0 0 0 11 2"/>
  <path fill="url(#e)" d="M9.746 7.869c.273.183.59.309.93.358L6.63 18.631l-.24-2.15z"/>
  <path fill="url(#f)" d="M12.254 7.869c-.273.183-.59.309-.93.358l4.045 10.404.24-2.15z"/>
  <circle cx="11" cy="6" r="1.75" stroke="url(#g)"/>
  <defs>
    <linearGradient id="a" x1="-229.343" x2="-229.343" y1="19" y2="3" gradientUnits="userSpaceOnUse">
      <stop stop-color="#252D38"/>
      <stop offset="1" stop-color="#3C474D"/>
    </linearGradient>
    <linearGradient id="b" x1="-229.343" x2="-229.343" y1="19" y2="3" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2A3341"/>
      <stop offset="1" stop-color="#475258"/>
    </linearGradient>
    <linearGradient id="c" x1="8.967" x2="18.108" y1="7" y2="16.29" gradientUnits="userSpaceOnUse">
      <stop stop-color="#151D26"/>
      <stop offset="1" stop-color="#151D26" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="d" x1="11" x2="11.049" y1="19.201" y2="2" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C5CDD5"/>
      <stop offset=".55" stop-color="#6A7A84"/>
      <stop offset=".65" stop-color="#5C6B72"/>
      <stop offset=".7" stop-color="#708088"/>
      <stop offset=".85" stop-color="#76868D"/>
      <stop offset=".95" stop-color="#B2BFBF"/>
      <stop offset="1" stop-color="#C5CDD4"/>
    </linearGradient>
    <linearGradient id="e" x1="11" x2="11.049" y1="19.201" y2="2" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C5CDD5"/>
      <stop offset=".55" stop-color="#6A7A84"/>
      <stop offset=".65" stop-color="#5C6B72"/>
      <stop offset=".7" stop-color="#708088"/>
      <stop offset=".85" stop-color="#76868D"/>
      <stop offset=".95" stop-color="#B2BFBF"/>
      <stop offset="1" stop-color="#C5CDD4"/>
    </linearGradient>
    <linearGradient id="f" x1="11" x2="11.049" y1="19.201" y2="2" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C5CDD5"/>
      <stop offset=".55" stop-color="#6A7A84"/>
      <stop offset=".65" stop-color="#5C6B72"/>
      <stop offset=".7" stop-color="#708088"/>
      <stop offset=".85" stop-color="#76868D"/>
      <stop offset=".95" stop-color="#B2BFBF"/>
      <stop offset="1" stop-color="#C5CDD4"/>
    </linearGradient>
    <linearGradient id="g" x1="9" x2="9" y1="8" y2="4" gradientUnits="userSpaceOnUse">
      <stop stop-color="#909DA6"/>
      <stop offset="1" stop-color="#D9E7E8"/>
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
    <path fill="url(#b)" d="M0 4a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z"/>
    <path fill="url(#c)" fill-rule="evenodd" d="M3 2v3H0v1h3v2.79c-.95.427-1.955.747-3 .946v1.028a14.496 14.496 0 0 0 3-.872V25H0v1h3v4h1v-4h18.792a14.495 14.495 0 0 0-1.673 3c-.135.328-.25.661-.36 1h1.056c.121-.34.261-.673.408-1a13.491 13.491 0 0 1 1.848-3H28v4h1v-4h3v-1h-3v-2.788a13.49 13.49 0 0 1 3-.948v-1.028c-1.04.185-2.045.48-3 .874V6h3V5h-3V2h-1v3H9.213a14.493 14.493 0 0 0 1.674-3H9.783a13.493 13.493 0 0 1-1.849 3H4V2zm1 23V9.435A14.51 14.51 0 0 0 8.418 6H28v15.567A14.51 14.51 0 0 0 23.587 25zM4 8.29A13.51 13.51 0 0 0 7.033 6H4zM24.972 25c.896-.9 1.915-1.67 3.028-2.287V25z" clip-rule="evenodd"/>
    <path fill="url(#d)" fill-rule="evenodd" d="m17 2-3.212 5.104.359 4.514L11.5 18l-3.35.85 2.35 2.35-1.909 7.795L9.861 30H32V17z" clip-rule="evenodd" opacity=".4"/>
    <path fill="#1D242E" d="M0 27v1a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2" opacity=".4"/>
    <path fill="#5C6772" d="M8 18.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5"/>
    <path fill="url(#e)" d="M16 1a1 1 0 0 0-1 1v3h2V2a1 1 0 0 0-1-1"/>
    <path fill="url(#f)" d="M13.807 10.88c.46.31.992.52 1.565.603L8.562 29l-.404-3.62z"/>
    <path fill="url(#g)" d="M18.03 10.88a3.77 3.77 0 0 1-1.566.603L23.274 29l.404-3.62z"/>
    <path fill="url(#h)" fill-rule="evenodd" d="M16 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8" clip-rule="evenodd"/>
    <path fill="url(#i)" d="M12.839 18h1.388l-.389 1H12.45z"/>
    <path fill="url(#j)" d="M20.803 18h.61l.39 1h-.61z"/>
  </g>
  <defs>
    <linearGradient id="b" x1="-411.276" x2="-411.276" y1="30" y2="2" gradientUnits="userSpaceOnUse">
      <stop stop-color="#252D38"/>
      <stop offset="1" stop-color="#3C474D"/>
    </linearGradient>
    <linearGradient id="c" x1="-411.276" x2="-411.276" y1="30" y2="2" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2A3341"/>
      <stop offset="1" stop-color="#475258"/>
    </linearGradient>
    <linearGradient id="d" x1="13" x2="29" y1="9" y2="25" gradientUnits="userSpaceOnUse">
      <stop stop-color="#151D26"/>
      <stop offset="1" stop-color="#151D26" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="e" x1="15.918" x2="16" y1="29.96" y2="1" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C5CDD5"/>
      <stop offset=".55" stop-color="#6A7A84"/>
      <stop offset=".65" stop-color="#5C6B72"/>
      <stop offset=".7" stop-color="#708088"/>
      <stop offset=".85" stop-color="#76868D"/>
      <stop offset=".95" stop-color="#B2BFBF"/>
      <stop offset="1" stop-color="#C5CDD4"/>
    </linearGradient>
    <linearGradient id="f" x1="15.918" x2="16" y1="29.96" y2="1" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C5CDD5"/>
      <stop offset=".55" stop-color="#6A7A84"/>
      <stop offset=".65" stop-color="#5C6B72"/>
      <stop offset=".7" stop-color="#708088"/>
      <stop offset=".85" stop-color="#76868D"/>
      <stop offset=".95" stop-color="#B2BFBF"/>
      <stop offset="1" stop-color="#C5CDD4"/>
    </linearGradient>
    <linearGradient id="g" x1="15.918" x2="16" y1="29.96" y2="1" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C5CDD5"/>
      <stop offset=".55" stop-color="#6A7A84"/>
      <stop offset=".65" stop-color="#5C6B72"/>
      <stop offset=".7" stop-color="#708088"/>
      <stop offset=".85" stop-color="#76868D"/>
      <stop offset=".95" stop-color="#B2BFBF"/>
      <stop offset="1" stop-color="#C5CDD4"/>
    </linearGradient>
    <linearGradient id="h" x1="12.444" x2="12.444" y1="11.556" y2="4.444" gradientUnits="userSpaceOnUse">
      <stop stop-color="#909DA6"/>
      <stop offset="1" stop-color="#D9E7E8"/>
    </linearGradient>
    <linearGradient id="i" x1="12.5" x2="14" y1="19" y2="19" gradientUnits="userSpaceOnUse">
      <stop stop-color="#475360"/>
      <stop offset="1" stop-color="#475360" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="j" x1="21" x2="22" y1="19" y2="18.5" gradientUnits="userSpaceOnUse">
      <stop offset=".152" stop-color="#475360"/>
      <stop offset=".65" stop-color="#475360" stop-opacity="0"/>
    </linearGradient>
    <clipPath id="a">
      <path fill="#fff" d="M0 0h32v32H0z"/>
    </clipPath>
  </defs>
		</svg>
	{/if}
