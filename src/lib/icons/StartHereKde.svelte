<script lang="ts">
	import type { IconProps } from '../types.js';

	let {
		size = 32,
		color = 'currentColor',
		class: className = '',
		style = '',
		...restProps
	}: IconProps = $props();

	const numericSize = $derived(
		typeof size === 'number' ? size : parseInt(String(size), 10) || 32
	);
</script>

	{#if numericSize <= 48}
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
			<g transform="translate(-46,-1) translate(-22,0)" id="start-here-kde">
    <rect style="fill:none;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" id="rect3343" width="32" height="32" x="68" y="1"/>
    <path id="path20" style="fill:currentColor" transform="translate(46,1)" d="M 32 4 A 1.5 1.5 0 0 0 30.5 5.5 A 1.5 1.5 0 0 0 32 7 A 1.5 1.5 0 0 0 33.5 5.5 A 1.5 1.5 0 0 0 32 4 z M 42.5 4 L 39.5 7 L 44 11.5 L 39.5 16 L 42.5 19 L 50 11.5 L 42.5 4 z M 28.5 13 A 2.5 2.5 0 0 0 26 15.5 A 2.5 2.5 0 0 0 28.5 18 A 2.5 2.5 0 0 0 31 15.5 A 2.5 2.5 0 0 0 28.5 13 z M 35 22 A 3 3 0 0 0 32 25 A 3 3 0 0 0 35 28 A 3 3 0 0 0 38 25 A 3 3 0 0 0 35 22 z " class="ColorScheme-Text"/>
  </g>
		</svg>
	{:else if numericSize <= 80}
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
			<path
     style="fill:currentColor; fill-rule:evenodd"
     d="M 41 5 L 35 11 L 46 22 L 35 33 L 41 39 L 58 22 L 41 5 z "
     class="ColorScheme-Text"
     />
  <path
     style="fill:#fa8865"
     d="M 18.9 6 C 17.1 6 15.75 7.4 15.75 9.125 C 15.75 10.8 17.1 12.25 18.9 12.25 C 20.6 12.25 22 10.8 22 9.125 C 22 7.4 20.6 6 18.9 6 z "
     />
  <path
     style="fill:#63c605"
     d="M 10.5 25.5 C 8 25.5 6 27.5 6 30 C 6 32.5 8 34.5 10.5 34.5 C 13 34.5 15 32.5 15 30 C 15 27.5 13 25.5 10.5 25.5 z "
     />
  <path
     style="fill:#1b89f3"
     d="M 25.5 45 C 21.9 45 19 47.9 19 51.5 C 19 55.1 21.9 58 25.5 58 C 29.1 58 32 55.1 32 51.5 C 32 47.9 29.1 45 25.5 45 z "
     />
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 96 96"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<defs id="defs5455">
        
        <linearGradient id="linearGradient4434" x1="439.57144" x2="429.57144" y1="502.798" y2="512.79803" gradientTransform="translate(-1.3269125e-7 .6666664)" gradientUnits="userSpaceOnUse">
            <stop id="stop4328" offset="0"/>
            <stop id="stop4330" stop-opacity="0" offset="1"/>
        </linearGradient>
    </defs>
    <g id="layer1" transform="translate(-384.57144,-483.798)">
        <g id="g855" transform="matrix(1.5000005,0,0,1.5000005,-192.28588,-241.89921)">
            <path id="path4422" style="fill:currentColor" d="m425.23807 489.13134-6 6 11.33336 11.33336-11.33337 11.33326 6 6 17.33337-17.33326z" fill-rule="evenodd"
            class="ColorScheme-Text" />
            <rect id="rect4119" x="399.90475" y="489.79797" width="6.6666646" height="6.6666646" rx="3.3333328" fill="#fa8865" stroke-width="1.06666"/>
            <rect id="rect4308" x="390.57138" y="509.13129" width="9.3333302" height="9.3333302" rx="4.6666498" fill="#63c605" stroke-width="1.03704"/>
            <rect id="rect4312" x="403.90472" y="528.46466" width="13.333329" height="13.333329" rx="6.6666651" fill="#1b89f3" stroke-width="1.02564"/>
            <path id="path4426" d="m423.57143 513.4647 6 6 7-7-6-6z" fill="url(#linearGradient4434)" fill-rule="evenodd" opacity=".9"/>
        </g>
    </g>
		</svg>
	{/if}
