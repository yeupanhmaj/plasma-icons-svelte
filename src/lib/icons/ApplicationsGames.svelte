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
			<path fill="url(#a)" d="M7.5 5h7c4 0 5.5 1.5 5.5 6v4.5c0 2.5-3.202 3.5-4.281 1.207L14.445 14h-6.89l-1.274 2.707C5.202 19 2 18 2 15.5V11c0-4.5 1.5-6 5.5-6"/>
  <path fill="#2C3743" d="M2 14.5v1C2 18 5.202 19 6.281 16.707L7.555 14h6.89l1.274 2.707C16.798 19 20 18 20 15.5v-1c0 2.5-3.202 3.5-4.281 1.207L14.445 13h-6.89l-1.274 2.707C5.202 18 2 17 2 14.5" opacity=".4"/>
  <path fill="url(#b)" d="M18 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
  <path fill="url(#c)" d="M9 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
  <path fill="url(#d)" d="M16.084 10.932a2.504 2.504 0 0 0 1.848-1.848l-2.008-2.008-1.848 1.848z" opacity=".3"/>
  <path fill="url(#e)" d="M14.076 8.076a.6.6 0 1 1 .849.849.6.6 0 0 1-.849-.849"/>
  <path fill="url(#f)" d="M16.076 8.076a.6.6 0 1 1 .849.849.6.6 0 0 1-.849-.849"/>
  <path fill="url(#g)" d="M15.076 9.076a.6.6 0 1 1 .849.849.6.6 0 0 1-.849-.849"/>
  <path fill="url(#h)" d="M15.076 7.076a.6.6 0 1 1 .849.849.6.6 0 0 1-.849-.849"/>
  <path fill="url(#i)" d="M5 7h3v3H5z"/>
  <path fill="url(#j)" d="M10 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
  <path fill="url(#k)" d="M16 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
  <path fill="#0C1014" d="M2 12v3.5c0 .932.445 1.656 1.06 2.078.48-.39.94-1.138.94-2.578 0-3-2-3-2-3m18 3.5V12s-2 0-2 3c0 1.44.46 2.189.94 2.578.615-.422 1.06-1.146 1.06-2.078M14 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 7v1H5v1h1v1h1V9h1V8H7V7z"/>
  <defs>
    <linearGradient id="a" x1="11" x2="11" y1="17.994" y2="5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#3B4249"/>
      <stop offset=".25" stop-color="#6A7784"/>
      <stop offset="1" stop-color="#AFB9C0"/>
    </linearGradient>
    <linearGradient id="b" x1="11" x2="11" y1="6" y2="11" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6C7A86"/>
      <stop offset="1" stop-color="#616E79"/>
    </linearGradient>
    <linearGradient id="c" x1="11" x2="11" y1="6" y2="11" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6C7A86"/>
      <stop offset="1" stop-color="#616E79"/>
    </linearGradient>
    <linearGradient id="d" x1="15" x2="17.5" y1="8" y2="10.5" gradientUnits="userSpaceOnUse">
      <stop/>
      <stop offset="1" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="e" x1="14.5" x2="14.5" y1="9.1" y2="7.9" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0C85DC"/>
      <stop offset="1" stop-color="#43AAF5"/>
    </linearGradient>
    <linearGradient id="f" x1="16.5" x2="16.5" y1="9.1" y2="7.9" gradientUnits="userSpaceOnUse">
      <stop stop-color="#DA4453"/>
      <stop offset="1" stop-color="#E47681"/>
    </linearGradient>
    <linearGradient id="g" x1="15.5" x2="15.5" y1="10.1" y2="8.9" gradientUnits="userSpaceOnUse">
      <stop stop-color="#27AB5F"/>
      <stop offset="1" stop-color="#4BD786"/>
    </linearGradient>
    <linearGradient id="h" x1="15.5" x2="15.5" y1="8.1" y2="6.9" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FDAE23"/>
      <stop offset="1" stop-color="#FDCA73"/>
    </linearGradient>
    <linearGradient id="i" x1="13" x2="13" y1="15" y2="11" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6A7784"/>
      <stop offset="1" stop-color="#AFB9C0"/>
    </linearGradient>
    <linearGradient id="j" x1="13" x2="13" y1="15" y2="11" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6A7784"/>
      <stop offset="1" stop-color="#AFB9C0"/>
    </linearGradient>
    <linearGradient id="k" x1="13" x2="13" y1="15" y2="11" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6A7784"/>
      <stop offset="1" stop-color="#AFB9C0"/>
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
			<path fill="url(#a)" d="M9 6c-4.5 0-7 3-7 8v9.5C2 27 7 27 8.5 24l1.5-3h12l1.5 3c1.5 3 6.5 3 6.5-.5V14c0-5-2.5-8-7-8z"/>
  <path fill="url(#b)" d="M28 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-16 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/>
  <path fill="url(#c)" d="M8 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
  <path fill="url(#d)" d="M8 9a3 3 0 0 0-1 .174V11H5.176A3 3 0 0 0 5 12a3 3 0 0 0 .174 1H7v1.824c.32.115.66.175 1 .176a3 3 0 0 0 1-.174V13h1.824c.115-.32.175-.66.176-1a3 3 0 0 0-.174-1H9V9.176A3 3 0 0 0 8 9"/>
  <path fill="#2C3743" d="M2 22.5v1C2 27 7 27 8.5 24l1.5-3h12l1.5 3c1.5 3 6.5 3 6.5-.5v-1c0 3.5-5 3.5-6.5.5L22 20H10l-1.5 3C7 26 2 26 2 22.5" opacity=".4"/>
  <path fill="url(#e)" d="M23 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-8 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill="url(#f)" d="M22 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"/>
  <path fill="url(#g)" d="M30 14s-2 0-2 6c0 3.362.628 4.84 1.18 5.49.501-.445.82-1.106.82-1.99z"/>
  <path fill="url(#h)" d="M2 14s2 0 2 6c0 3.362-.628 4.84-1.18 5.49-.501-.445-.82-1.106-.82-1.99z"/>
  <g opacity=".2">
    <path fill="url(#i)" d="m24.422 15.978-3.2-3.2 1.556-1.556 3.82 3.82a4 4 0 0 1-2.176.936"/>
    <path fill="url(#j)" d="m27.042 14.598-3.82-3.82 1.556-1.556 3.2 3.2a4 4 0 0 1-.936 2.175"/>
  </g>
  <circle cx="24" cy="10" r="1.1" fill="url(#k)"/>
  <circle cx="22" cy="12" r="1.1" fill="url(#l)"/>
  <circle cx="24" cy="14" r="1.1" fill="url(#m)"/>
  <circle cx="26" cy="12" r="1.1" fill="url(#n)"/>
  <defs>
    <linearGradient id="a" x1="16" x2="16" y1="26.192" y2="6" gradientUnits="userSpaceOnUse">
      <stop stop-color="#3B4249"/>
      <stop offset=".25" stop-color="#6A7784"/>
      <stop offset="1" stop-color="#AFB9C0"/>
    </linearGradient>
    <linearGradient id="b" x1="16" x2="16" y1="8" y2="16" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6C7A86"/>
      <stop offset="1" stop-color="#616E79"/>
    </linearGradient>
    <linearGradient id="c" x1="9.286" x2="9.286" y1="15" y2="9" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6A7784"/>
      <stop offset="1" stop-color="#AFB9C0"/>
    </linearGradient>
    <linearGradient id="d" x1="8" x2="8" y1="15" y2="9" gradientUnits="userSpaceOnUse">
      <stop stop-color="#171E25"/>
      <stop offset="1" stop-color="#333C45"/>
    </linearGradient>
    <linearGradient id="e" x1="19" x2="19" y1="22" y2="16" gradientUnits="userSpaceOnUse">
      <stop stop-color="#6A7784"/>
      <stop offset="1" stop-color="#AFB9C0"/>
    </linearGradient>
    <linearGradient id="f" x1="19" x2="19" y1="21" y2="17" gradientUnits="userSpaceOnUse">
      <stop stop-color="#171E25"/>
      <stop offset="1" stop-color="#333C45"/>
    </linearGradient>
    <linearGradient id="i" x1="23" x2="27" y1="11" y2="15" gradientUnits="userSpaceOnUse">
      <stop/>
      <stop offset=".49" stop-opacity="0"/>
      <stop offset=".5"/>
      <stop offset="1" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="j" x1="23" x2="27" y1="11" y2="15" gradientUnits="userSpaceOnUse">
      <stop/>
      <stop offset=".49" stop-opacity="0"/>
      <stop offset=".5"/>
      <stop offset="1" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="k" x1="24" x2="24" y1="11.1" y2="8.9" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FDAE23"/>
      <stop offset="1" stop-color="#FDCA73"/>
    </linearGradient>
    <linearGradient id="l" x1="22" x2="22" y1="13.1" y2="10.9" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0C85DC"/>
      <stop offset="1" stop-color="#43AAF5"/>
    </linearGradient>
    <linearGradient id="m" x1="24" x2="24" y1="15.1" y2="12.9" gradientUnits="userSpaceOnUse">
      <stop stop-color="#27AB5F"/>
      <stop offset="1" stop-color="#4BD786"/>
    </linearGradient>
    <linearGradient id="n" x1="26" x2="26" y1="13.1" y2="10.9" gradientUnits="userSpaceOnUse">
      <stop stop-color="#DA4453"/>
      <stop offset="1" stop-color="#E47681"/>
    </linearGradient>
    <radialGradient id="g" cx="0" cy="0" r="1" gradientTransform="matrix(1.998 0 0 12.0001 28.002 26.001)" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0F1419"/>
      <stop offset="1" stop-color="#22282E"/>
    </radialGradient>
    <radialGradient id="h" cx="0" cy="0" r="1" gradientTransform="matrix(-1.998 0 0 -12.0001 3.998 26.001)" gradientUnits="userSpaceOnUse">
      <stop stop-color="#0F1419"/>
      <stop offset="1" stop-color="#22282E"/>
    </radialGradient>
  </defs>
		</svg>
	{/if}
