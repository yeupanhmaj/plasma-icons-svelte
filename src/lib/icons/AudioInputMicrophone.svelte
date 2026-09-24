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

	{#if numericSize <= 19}
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
			<path 
        style="fill:currentColor;fill-opacity:1;stroke:none" 
        d="M 8,2 C 6.892,2 6,2.892 6,4 l 0,4 c 0,1.108 0.892,2 2,2 1.108,0 2,-0.892 2,-2 L 10,4 C 10,2.892 9.108,2 8,2 Z M 4,7 4,8 c 0,1.847 1.286,3.405469 3,3.855469 L 7,13 l -1,0 0,1 4,0 0,-1 -1,0 0,-1.144531 C 10.714,11.404469 12,9.845 12,8 l 0,-1 -1,0 0,1 C 11,9.645 9.645,11 8,11 6.355,11 5,9.645 5,8 L 5,7 4,7 Z"
        class="ColorScheme-Text"/>
		</svg>
	{:else if numericSize <= 43}
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
			<path fill="currentColor" class="ColorScheme-Text" d="m5.9801315 9v2c0 2.419003 1.717696 4.43717 4.0000034 4.900391v2.099609h-2.0000034v1h6.0000035v-1h-2v-2.099609c2.282304-0.463221 4-2.481388 4-4.900391v-2h-1v2c0 2.209139-1.790861 4-4 4-2.2091425 0-4.0000035-1.790861-4.0000035-4v-2zm5.0000035-6c-1.6568564 0-3.0000035 1.343146-3.0000035 3v5c0 1.656854 1.3431471 3 3.0000035 3 1.656854 0 3-1.343146 3-3v-5c0-1.656854-1.343146-3-3-3z"/>
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
			<path fill="url(#a)" d="M42 30.972C42 37.5 37.523 41 32 41s-10-3.5-10-10.028V13.028C22 6.5 26.477 3 32 3s10 3.5 10 10.028z"/>
  <path fill="#778485" d="M42 30.972C42 37.5 37.523 41 32 41s-10-3.5-10-10.028V30c0 6.528 4.477 10.028 10 10.028S42 36.528 42 30z" opacity=".8"/>
  <path fill="#FCFCFC" d="M42 13.028C42 6.5 37.523 3 32 3S22 6.5 22 13.028V14c0-6.528 4.477-10.028 10-10.028S42 7.472 42 14z" opacity=".4"/>
  <path fill="#292C2E" d="M30 29a1 1 0 1 1 0 2h-7.999L22 30.972V29zm12 1.972-.001.028H34a1 1 0 1 1 0-2h8zM29.65 25a1 1 0 0 1 0 2H22v-2zM42 27h-7.65a1 1 0 0 1 0-2H42zm-10-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4m-4.25 1a1 1 0 1 1 0 2H22v-2zM42 23h-5.75a1 1 0 1 1 0-2H42zm-12.35-6a1 1 0 0 1 0 2H22v-2zM42 19h-7.65a1 1 0 0 1 0-2H42zm-12-6a1 1 0 1 1 0 2h-8v-1.972l.001-.028zm12 .02V15h-8a1 1 0 1 1 0-2h7.999z"/>
  <path fill="#FCFCFC" d="M33 22a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
  <path fill="url(#b)" d="M29 45h6v14h-6z"/>
  <path fill="url(#c)" d="M21 59a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v2H21z"/>
  <path fill="#000" fill-opacity=".1" d="M43 60v1H21v-1z"/>
  <path fill="url(#d)" d="M21 23h-1c-.6 0-1 .4-1 1v7.25c0 7 5 12.75 13 12.75s13-5.75 13-12.75V24c0-.6-.4-1-1-1h-1v-2h1c1.657 0 3 1 3 3.25V31c0 9.5-7 15-15 15s-15-5.5-15-15v-6.75C17 22 18.343 21 20 21h1z"/>
  <path fill="url(#e)" d="M22 20c-1.105 0-2 0-2 2s.895 2 2 2z"/>
  <path fill="url(#f)" d="M42 20c1.105 0 2 0 2 2s-.895 2-2 2z"/>
  <path fill="#FCFCFC" d="M22 21c-1.003 0-1.832 0-1.976 1.5A5.231 5.231 0 0 1 20 22c0-2 .895-2 2-2z" opacity=".4"/>
  <path fill="#000" d="m32.478 45.991-2.07-2.071c.516.052 1.047.08 1.592.08 8 0 13-5.75 13-12.75V24c0-.6-.4-1-1-1h-.111c-.27 1-1.013 1-1.889 1v-4c.877 0 1.618 0 1.889 1H44c1.657 0 3 1 3 3.25V31c0 8.288-5.328 13.53-12 14.733v9.001l-6-6v-3a16.907 16.907 0 0 0 3.478.257" opacity=".1"/>
  <defs>
    <linearGradient id="a" x1="37.556" x2="24.242" y1="46.971" y2="2.826" gradientUnits="userSpaceOnUse">
      <stop stop-color="#7F8C8D"/>
      <stop offset=".7" stop-color="#AFB0B3"/>
      <stop offset="1" stop-color="#EFF0F1"/>
    </linearGradient>
    <linearGradient id="b" x1="32" x2="32" y1="25.182" y2="58.364" gradientUnits="userSpaceOnUse">
      <stop stop-color="#34495E"/>
      <stop offset="1" stop-color="#979C9F"/>
    </linearGradient>
    <linearGradient id="c" x1="19.35" x2="43" y1="59.5" y2="59.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#979C9F"/>
      <stop offset=".251" stop-color="#BDC3C7"/>
      <stop offset="1" stop-color="#979C9F"/>
    </linearGradient>
    <linearGradient id="d" x1="46" x2="15.257" y1="36.866" y2="50.933" gradientUnits="userSpaceOnUse">
      <stop stop-color="#778485"/>
      <stop offset="1" stop-color="#BDC3C7"/>
    </linearGradient>
    <linearGradient id="e" x1="20.5" x2="22" y1="22" y2="23.5" gradientUnits="userSpaceOnUse">
      <stop stop-color="#BDC3C7"/>
      <stop offset="1" stop-color="#979C9F"/>
    </linearGradient>
    <linearGradient id="f" x1="42" x2="47.5" y1="22" y2="22" gradientUnits="userSpaceOnUse">
      <stop stop-color="#7F8C8D"/>
      <stop offset="1" stop-color="#BFC0C1"/>
    </linearGradient>
  </defs>
		</svg>
	{/if}
