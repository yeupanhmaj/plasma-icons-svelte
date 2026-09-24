<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 16,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();

	const numericSize = $derived(
		typeof size === 'number' ? size : parseInt(String(size), 10) || 16
	);
</script>

	{#if numericSize <= 24}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path fill="#6c7a89" color-rendering="auto" shape-rendering="auto" color-interpolation-filters="linearRGB" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#4d4d4d" d="m5 1038.3622a3 3 0 0 0 -3 3 3 3 0 0 0 3 3 3 3 0 0 0 3 -3 3 3 0 0 0 -3 -3m3 3a3 3 0 0 0 3 3 3 3 0 0 0 3 -3 3 3 0 0 0 -3 -3 3 3 0 0 0 -3 3m-3-2a2 2 0 0 1 2 2 2 2 0 0 1 -2 2 2 2 0 0 1 -1.371094 -.5488 1.5 1.5 0 0 0 .371094 .049 1.5 1.5 0 0 0 1.5 -1.5 1.5 1.5 0 0 0 -1.5 -1.5 1.5 1.5 0 0 0 -.375 .049 2 2 0 0 1 1.375 -.5488m6-.0004a2 2 0 0 1 2 2 2 2 0 0 1 -2 2 2 2 0 0 1 -1.371094 -.5488 1.5 1.5 0 0 0 .371094 .049 1.5 1.5 0 0 0 1.5 -1.5 1.5 1.5 0 0 0 -1.5 -1.5 1.5 1.5 0 0 0 -.375 .049A2 2 0 0 1 11 1039.3626m1.08 6.152c-.935.531-2.457.847-4.08.848-1.394-.001-2.725-.234-3.67-.645l-.629.734c.384.198.83.354 1.299.49v1.42a2 2 0 0 0 2 2 2 2 0 0 0 1.5 -.6797 2 2 0 0 0 1.5 .6797 2 2 0 0 0 2 -2v-1.773c.272-.122.528-.253.754-.4zM11 1046.94v1.424a1 1 0 0 1 -1 1 1 1 0 0 1 -1 -1v-1.059c.712-.061 1.382-.185 2-.365m-5 .238c.638.114 1.309.185 2 .186v1a1 1 0 0 1 -1 1 1 1 0 0 1 -1 -1z" transform="translate(0-1036.36)"/>
		</svg>
	{:else if numericSize <= 48}
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
			<defs>
  <linearGradient id="a" y1="61" y2="3" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.5 0 0-.48276 0 31.448)">
   <stop stop-color="#5e6b78"/>
   <stop offset="1" stop-color="#768492"/>
  </linearGradient>
  <linearGradient id="b" y1="2.241" y2="9" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#dedede"/>
   <stop offset="1" stop-color="#fbfbfb"/>
  </linearGradient>
  <linearGradient id="c" y1="9" x1="20" y2="16" x2="27" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
 </defs>
 <path fill="url(#a)" d="m5 30v-28h15l7 7v21h-7z"/>
 <g transform="scale(1-1)">
  <rect width="15" x="5" y="-3" fill="#ffffff" height="1" fill-opacity=".412"/>
  <rect width="22" x="5" y="-30" fill="#2e3132" height="1" fill-opacity=".294"/>
 </g>
 <g fill-rule="evenodd">
  <path fill="url(#b)" d="m27 9l-7-7v7z"/>
  <path opacity=".2" fill="url(#c)" d="m27 16l-7-7h7z"/>
 </g>
 <path fill="#fbfbfb" color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#4d4d4d" d="m13 12a3 3 0 0 0 -3 3 3 3 0 0 0 3 3 3 3 0 0 0 3 -3 3 3 0 0 0 -3 -3m3 3a3 3 0 0 0 3 3 3 3 0 0 0 3 -3 3 3 0 0 0 -3 -3 3 3 0 0 0 -3 3m-3-2a2 2 0 0 1 2 2 2 2 0 0 1 -2 2A2 2 0 0 1 11.628906 16.451172 1.5 1.5 0 0 0 12 16.5 1.5 1.5 0 0 0 13.5 15 1.5 1.5 0 0 0 12 13.5 1.5 1.5 0 0 0 11.625 13.548828 2 2 0 0 1 13 13m6 0a2 2 0 0 1 2 2 2 2 0 0 1 -2 2A2 2 0 0 1 17.628906 16.451172 1.5 1.5 0 0 0 18 16.5 1.5 1.5 0 0 0 19.5 15 1.5 1.5 0 0 0 18 13.5 1.5 1.5 0 0 0 17.625 13.548828 2 2 0 0 1 19 13m1.08 6.15C19.14 19.683 17.623 19.999 16 20 14.606 19.999 13.275 19.766 12.33 19.355l-.629.735c.389.198.831.354 1.299.49V22a2 2 0 0 0 2 2 2 2 0 0 0 1.5 -.679688A2 2 0 0 0 18 24 2 2 0 0 0 20 22v-1.773c.272-.127.528-.253.754-.401zM19 20.576V22a1 1 0 0 1 -1 1 1 1 0 0 1 -1 -1v-1.059c.712-.061 1.382-.185 2-.365m-5 .238C14.638 20.928 15.309 21 16 21v1a1 1 0 0 1 -1 1 1 1 0 0 1 -1 -1z"/>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 64 64"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<defs>
  <linearGradient id="a" y1="3" y2="61" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#5e6b78"/>
   <stop offset="1" stop-color="#768492"/>
  </linearGradient>
  <linearGradient id="b" y1="61" y2="47" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#dedede"/>
   <stop offset="1" stop-color="#fbfbfb"/>
  </linearGradient>
  <linearGradient id="c" y1="17" x1="40" y2="31" x2="54" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
 </defs>
 <path fill="url(#a)" d="m10 61v-58h30l14 14v44h-14z"/>
 <g transform="scale(1-1)">
  <rect width="30" x="10" y="-4" fill="#ffffff" height="1" fill-opacity=".412"/>
  <rect width="44" x="10" y="-61" fill="#2e3132" height="1" fill-opacity=".294"/>
 </g>
 <g fill-rule="evenodd">
  <path fill="url(#b)" d="m54 17l-14-14v14z"/>
  <path opacity=".2" fill="url(#c)" d="m40 17l14 14v-14z"/>
 </g>
 <path fill="#fbfbfb" color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#4d4d4d" d="M26.5 21A5.5 5.5 0 0 0 21 26.5 5.5 5.5 0 0 0 21.01367 26.755859 3 3 0 0 0 21 27 3 3 0 0 0 21.341797 28.386719 5.5 5.5 0 0 0 26.5 32 5.5 5.5 0 0 0 32 26.5 5.5 5.5 0 0 0 26.5 21M32 26.5A5.5 5.5 0 0 0 32.01367 26.755859 3 3 0 0 0 32 27 3 3 0 0 0 32.3418 28.386719 5.5 5.5 0 0 0 37.5 32 5.5 5.5 0 0 0 43 26.5 5.5 5.5 0 0 0 37.5 21 5.5 5.5 0 0 0 32 26.5M26.5 22A4.5 4.5 0 0 1 31 26.5 4.5 4.5 0 0 1 26.5 31 4.5 4.5 0 0 1 23.646484 29.976562 3 3 0 0 0 24 30 3 3 0 0 0 27 27 3 3 0 0 0 24 24 3 3 0 0 0 22.527344 24.390625 4.5 4.5 0 0 1 26.5 22M37.5 22A4.5 4.5 0 0 1 42 26.5 4.5 4.5 0 0 1 37.5 31 4.5 4.5 0 0 1 34.646484 29.976562 3 3 0 0 0 35 30 3 3 0 0 0 38 27 3 3 0 0 0 35 24 3 3 0 0 0 33.527344 24.390625 4.5 4.5 0 0 1 37.5 22M40.586 34.871C38.501 35.584 35.34 35.999 32 36 29.24 35.999 26.574 35.714 24.545 35.2L23.875 35.938C24.803 36.22 25.872 36.443 27 36.617V40A3 3 0 0 0 30 43 3 3 0 0 0 32.5 41.654297 3 3 0 0 0 35 43 3 3 0 0 0 38 40V36.457C39.24 36.22 40.37 35.906 41.3 35.525zM37 36.631V40A2 2 0 0 1 35 42 2 2 0 0 1 33 40V36.98C34.395 36.941 35.747 36.823 37 36.631M28 36.76C29.28 36.911 30.622 36.999 32 37V40A2 2 0 0 1 30 42 2 2 0 0 1 28 40z"/>
		</svg>
	{/if}
