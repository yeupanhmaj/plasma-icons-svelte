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
			<path fill="#2A3A4B" fill-rule="evenodd" d="m13.5 6-6.25 6.25L9 14l6.25-6.25z" clip-rule="evenodd"/>
  <path fill="url(#a)" d="M6.85 11.25h1.4L10 13v1.4l-5 5-3.15-3.15z"/>
  <path fill="#3B546D" fill-rule="evenodd" d="m12.25 7.25-4 4 .875.875z" clip-rule="evenodd"/>
  <path fill="url(#b)" d="M8.2 6.2c.3-2.7 2.25-3.45 3.8-3.45 1.35 0 2.05.3 3.5 1.75L17 6h2l2 2-5 5-2-2V9l-1.75-1.75-.75-1.75c-1.5-.5-3.3.7-3.3.7"/>
  <path fill="url(#c)" d="M12 2.75c-1.55 0-3.5.75-3.8 3.45C9.5 4 10.758 3.75 12 3.75c1.35 0 2.05.3 3.5 1.75L17 7h2l1 1 .5-.5L19 6h-2l-1.5-1.5c-1.45-1.45-2.15-1.75-3.5-1.75" opacity=".4"/>
  <path fill="url(#d)" d="m11.5 5.5 2.901 3L14 11l2.5.5 4-4 .5.5-5 5-2-2V9l-1.75-1.75z"/>
  <path fill="#571B21" d="m1.85 16.25 1-1 2.873 2.874 3.402-5.999L10 13v1.4l-5 5z" opacity=".4"/>
  <defs>
    <linearGradient id="a" x1="3.499" x2="5.797" y1="13.523" y2="19.418" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F25565"/>
      <stop offset=".5" stop-color="#DA4453"/>
      <stop offset="1" stop-color="#832932"/>
    </linearGradient>
    <linearGradient id="b" x1="8.839" x2="13.646" y1="4.992" y2="13.637" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C5CACD"/>
      <stop offset=".538" stop-color="#ACB6BC"/>
      <stop offset=".873" stop-color="#9BA3A8"/>
      <stop offset="1" stop-color="#A0AAB0"/>
    </linearGradient>
    <linearGradient id="c" x1="10.5" x2="17.5" y1="3" y2="10.5" gradientUnits="userSpaceOnUse">
      <stop offset=".435" stop-color="#fff"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="d" x1="21" x2="16" y1="8" y2="13" gradientUnits="userSpaceOnUse">
      <stop offset=".25" stop-color="#2D3B49" stop-opacity=".1"/>
      <stop offset=".654" stop-color="#2D3B49" stop-opacity=".2"/>
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
			<path fill="url(#a)" d="M9 16h2l3 3v2l-8 8-5-5z"/>
  <path fill="#2A3A4B" fill-rule="evenodd" d="m17 10 3 3-6 6-3-3z" clip-rule="evenodd"/>
  <path fill="url(#b)" d="M11 8.5C11.5 4 14.603 3 17 3c1.5 0 3.258.258 5.5 2.5L25 8h3l3 3-8 8-3-3v-3l-3-3-1-2.5c-2.32-.773-5 1-5 1"/>
  <path fill="url(#c)" d="M17 3c-2.397 0-5.5 1-6 5.5C12.5 5 14.816 4 17 4c1.5 0 3.258.258 5.5 2.5L25 9h4l-1-1h-3l-2.5-2.5C20.258 3.258 18.5 3 17 3" opacity=".6"/>
  <path fill="#AE3642" d="m14 21-8 8 6.5-11.5L14 19z" opacity=".5"/>
  <path fill="url(#d)" d="m20 13-3 3v-6z"/>
  <g opacity=".4">
    <path fill="url(#e)" d="M11 8.5c.223-.521.465-.987.721-1.402.954-.47 2.7-1.124 4.279-.598L17 9l3 3v1l-3-3-1-2.5c-2.32-.773-5 1-5 1"/>
    <path fill="url(#f)" d="M20 16v-1l3.5 2.5 7-7 .5.5-8 8z"/>
  </g>
  <path fill="url(#g)" d="M20 16v-1l3.5 2.5L31 11l-8 8z" opacity=".2"/>
  <path fill="#571B21" d="m6 29-5-5 1-1 5 5z" opacity=".4"/>
  <path fill="#34495E" d="M12.5 17.5 11 16l6-6z"/>
  <path fill="url(#h)" d="m31 11-1 1-2.35-3H25l-1-1h4z" opacity=".4"/>
  <defs>
    <linearGradient id="a" x1="3.939" x2="7.495" y1="19.904" y2="29.028" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F25565"/>
      <stop offset=".5" stop-color="#DA4453"/>
      <stop offset="1" stop-color="#832932"/>
    </linearGradient>
    <linearGradient id="b" x1="12" x2="19.5" y1="6.5" y2="20" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C5CACD"/>
      <stop offset=".538" stop-color="#ACB6BC"/>
      <stop offset=".873" stop-color="#9BA3A8"/>
      <stop offset="1" stop-color="#A0AAB0"/>
    </linearGradient>
    <linearGradient id="c" x1="20" x2="20" y1="3" y2="9.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fff"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </linearGradient>
    <linearGradient id="d" x1="18" x2="18.5" y1="11" y2="14.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#1A2530"/>
      <stop offset="1" stop-color="#2A3A4B"/>
    </linearGradient>
    <linearGradient id="e" x1="22" x2="14" y1="20.5" y2="3.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C9D1D9"/>
      <stop offset=".435" stop-color="#2D3B49"/>
      <stop offset=".6" stop-color="#6D7E91"/>
      <stop offset="1" stop-color="#A4A9AF"/>
    </linearGradient>
    <linearGradient id="f" x1="22" x2="14" y1="20.5" y2="3.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C9D1D9"/>
      <stop offset=".435" stop-color="#2D3B49"/>
      <stop offset=".6" stop-color="#6D7E91"/>
      <stop offset="1" stop-color="#A4A9AF"/>
    </linearGradient>
    <linearGradient id="g" x1="20" x2="23" y1="16" y2="19" gradientUnits="userSpaceOnUse">
      <stop offset=".5" stop-color="#222E3C" stop-opacity="0"/>
      <stop offset="1" stop-color="#222E3C"/>
    </linearGradient>
    <radialGradient id="h" cx="0" cy="0" r="1" gradientTransform="matrix(3 3 -2.16397 2.16397 28 8)" gradientUnits="userSpaceOnUse">
      <stop stop-color="#fff"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
  </defs>
		</svg>
	{/if}
