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
			<g id="22-22-input-keyboard-virtual-on" transform="translate(16,42.000007) translate(-16,-42)">
        <path class="ColorScheme-Text" transform="translate(0,-1030.3622)" d="m2 1038.3622v11h18v-11zm1 1h16v1h-16zm0 2h16v7h-16zm1 1v1h2v-1zm3 0v1h2v-1zm3 0v1h2v-1zm3 0v1h2v-1zm3 0v1h2v-1zm-12 2v1h2v-1zm3 0v1h2v-1zm3 0v1h2v-1zm3 0v1h2v-1zm3 0v1h2v-1zm-12 2v1h2v-1zm3 0v1h8v-1zm9 0v1h2v-1z" fill="currentColor"/>
        <path d="M 4.5,2 A 2.4999997,2.4999855 0 0 0 2,4.5 2.4999997,2.4999855 0 0 0 4.5,7 2.4999997,2.4999855 0 0 0 7,4.5 2.4999997,2.4999855 0 0 0 4.5,2 Z" fill="#11d116"/>
        <rect width="22" height="22" fill="none"/>
    </g>
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
			<defs
     id="defs14" />
  
  
  <g
     id="input-keyboard-virtual-on"
     transform="scale(1.4545455)">
    <rect
       width="22"
       height="22"
       fill="none"
       id="rect3"
       x="0"
       y="0" />
    <path
       class="ColorScheme-Text"
       transform="matrix(0.68749998,0,0,0.68749998,-15.124999,22.000003)"
       d="m 25,-21 v 17 h 26 v -17 z m 1,1 h 24 v 2 H 26 Z m 0,3 H 50 V -5 H 26 Z m 1,2 v 2 h 1 v -2 z m 2,0 v 2 h 2 v -2 z m 3,0 v 2 h 2 v -2 z m 3,0 v 2 h 2 v -2 z m 3,0 v 2 h 2 v -2 z m 3,0 v 2 h 2 v -2 z m 3,0 v 2 h 2 v -2 z m 3,0 v 2 h 2 v -2 z m -20,3 v 2 h 3 v -2 z m 4,0 v 2 h 2 v -2 z m 3,0 v 2 h 2 v -2 z m 3,0 v 2 h 2 v -2 z m 3,0 v 2 h 2 v -2 z m 3,0 v 2 h 2 v -2 z m 3,0 v 2 h 3 v -2 z m -19,3 v 2 h 2 v -2 z m 3,0 v 2 h 2 v -2 z m 3,0 v 2 h 10 v -2 z m 11,0 v 2 h 2 v -2 z m 3,0 v 2 h 2 v -2 z"
       fill="currentColor"
       id="path5" />
    <path
       d="m 3.7812499,2.7500013 a 1.7187497,1.71874 0 0 0 -1.71875,1.7187499 1.7187497,1.71874 0 0 0 1.71875,1.71875 1.7187497,1.71874 0 0 0 1.71875,-1.71875 1.7187497,1.71874 0 0 0 -1.71875,-1.7187499 z"
       fill="#11d116"
       id="path7" />
  </g>
		</svg>
	{/if}
