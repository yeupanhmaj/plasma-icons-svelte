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
        d="M 6 2 L 6 3 L 2 3 L 2 4 L 3 4 L 3 14 L 4 14 L 13 14 L 13 13 L 13 4 L 14 4 L 14 3 L 10 3 L 10 2 L 6 2 z M 7 3 L 9 3 L 9 4 L 10 4 L 12 4 L 12 13 L 4 13 L 4 4 L 7 4 L 7 3 z M 6 6 L 6 11 L 7 11 L 7 6 L 6 6 z M 9 6 L 9 11 L 10 11 L 10 6 L 9 6 z " 
        class="ColorScheme-Text"/>
		</svg>
	{:else if numericSize <= 27}
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
			<path
       style="fill:currentColor"
       d="M 8 3 L 8 5 L 4 5 L 4 6 L 5 6 L 5 19 L 6 19 L 17 19 L 17 18 L 17 6 L 18 6 L 18 5 L 14 5 L 14 3 L 8 3 z M 9 4 L 13 4 L 13 5 L 9 5 L 9 4 z M 6 6 L 8 6 L 9 6 L 13 6 L 14 6 L 16 6 L 16 18 L 6 18 L 6 6 z M 8 9 L 8 15 L 9 15 L 9 9 L 8 9 z M 13 9 L 13 15 L 14 15 L 14 9 L 13 9 z "
       class="ColorScheme-Text" />
		</svg>
	{:else if numericSize <= 40}
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
        <radialGradient id="d" cx="20.64" cy="8.5" r="4" gradientTransform="matrix(3.75,-6.8e-8,2.7e-8,1.5,-60.95,-4.75)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#4f575f" stop-opacity=".25" offset="0"/>
            <stop stop-color="#8a939a" offset="1"/>
        </radialGradient>
        <linearGradient id="l" x1="390.6" x2="410.6" y1="521.8" y2="545.8" gradientTransform="matrix(1 0 0 .9 -384.6 -471.3)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#bdc3c7" offset="0"/>
            <stop stop-color="#8a9696" offset="1"/>
        </linearGradient>
    </defs>
    <linearGradient id="a">
        <stop stop-color="#4f575f" stop-opacity=".4" offset="0"/>
        <stop stop-color="#4f575f" stop-opacity=".6" offset=".5"/>
        <stop stop-color="#4f575f" stop-opacity=".4" offset="1"/>
    </linearGradient>
    <radialGradient id="t" cx="16" cy="8.5" r="4" gradientTransform="matrix(1.75,0,0,1.5,-12,-6.75)" gradientUnits="userSpaceOnUse">
        <stop stop-color="#4f575f" stop-opacity=".25" offset="0"/>
        <stop stop-color="#9da5ab" offset="1"/>
    </radialGradient>
    <linearGradient id="s" x1="412.6" x2="412.6" y1="522.8" y2="520.8" gradientTransform="translate(-384.6,-514.8)" gradientUnits="userSpaceOnUse">
        <stop stop-color="#9da5ab" offset="0"/>
        <stop stop-color="#bdc3c7" offset="1"/>
    </linearGradient>
    <linearGradient id="r" x1="395.6" x2="395.6" y1="520.8" y2="516.8" gradientTransform="translate(-384.6,-514.8)" gradientUnits="userSpaceOnUse">
        <stop stop-color="#afb0b3" offset="0"/>
        <stop stop-color="#bdc3c7" offset="1"/>
    </linearGradient>
    <linearGradient id="q" x1="390.6" x2="406.6" y1="521.8" y2="537.8" gradientTransform="matrix(1 0 0 .95 -384.6 -490)" gradientUnits="userSpaceOnUse">
        <stop stop-color="#292c2f" offset="0"/>
        <stop stop-opacity="0" offset="1"/>
    </linearGradient>
    <linearGradient id="p" x1="391.6" x2="394.6" y1="534.8" y2="534.8" gradientTransform="matrix(.7 0 0 .9 -249.047 -463.3)" gradientUnits="userSpaceOnUse" xlink:href="#a"/>
    <linearGradient id="o" x1="391.6" x2="394.6" y1="534.8" y2="534.8" gradientTransform="matrix(.7 0 0 .9 -254.048 -463.3)" gradientUnits="userSpaceOnUse" xlink:href="#a"/>
    <linearGradient id="n" x1="391.6" x2="394.6" y1="534.8" y2="534.8" gradientTransform="matrix(.7 0 0 .9 -243.048 -463.3)" gradientUnits="userSpaceOnUse" xlink:href="#a"/>
    <linearGradient id="m" x1="391.6" x2="394.6" y1="534.8" y2="534.8" gradientTransform="matrix(.7 0 0 .9 -238.047 -463.3)" gradientUnits="userSpaceOnUse" xlink:href="#a"/>
    <path d="M 6,7 V 28.083334 C 6,28.591166 6.4,29 7,29 h 18 c 0.554,0 1,-0.408834 1,-0.916666 V 7 Z" fill="url(#l)" stroke-width="1"/>
    <path d="m12 3c-0.554 0-1 0.4-1 1v2h2v-0.75a0.25 0.25 0 0 1 0.233-0.25h5.535a0.25 0.25 0 0 1 0.232 0.25v0.75h2v-2c0-0.554-0.4-1-1-1z" fill="url(#r)"/>
    <path d="m12.5 4c-0.277 0-0.5 0.223-0.5 0.5v1.5h1v-0.75a0.25 0.25 0 0 1 0.233-0.25h5.535a0.25 0.25 0 0 1 0.232 0.25v0.75h1v-1.5c0-0.277-0.223-0.5-0.5-0.5z" fill="url(#t)"/>
    <path d="m5 6c-0.554 0-1 0.4-1 1v1h24v-1c0-0.554-0.4-1-1-1z" fill="url(#s)"/>
    <g stroke-width=".94868326">
        <path d="m13.00001 9c0.554 0 1 0.4014 1 0.9v16.2c0 0.5-0.4 0.9-1 0.9s-1-0.4014-1-0.9v-16.2c0-0.5 0.4-0.9 1-0.9z" fill="url(#p)"/>
        <path d="m8.00001 9c0.554 0 1 0.4014 1 0.9v16.2c0 0.5-0.4 0.9-1 0.9s-1-0.4014-1-0.9v-16.2c0-0.5 0.4-0.9 1-0.9z" fill="url(#o)"/>
        <path d="m19.00001 9c0.554 0 1 0.4014 1 0.9v16.2c0 0.5-0.4 0.9-1 0.9s-1-0.4014-1-0.9v-16.2c0-0.5 0.4-0.9 1-0.9z" fill="url(#n)"/>
        <path d="m24.00001 9c0.554 0 1 0.4014 1 0.9v16.2c0 0.5-0.4 0.9-1 0.9s-1-0.4014-1-0.9v-16.2c0-0.5 0.4-0.9 1-0.9z" fill="url(#m)"/>
    </g>
    <path d="M 6,8 V 10 L 26,29 V 8 Z" fill="url(#q)" opacity=".2" stroke-width="1"/>
    <path d="m4 8h24v-1h-23.947382z" fill="url(#d)" stroke-width="1"/>
    <path d="m6 27v1c0 0.554 0.4 1 1 1h18c0.554 0 1-0.4 1-1v-1c0 0.554-0.4 1-1 1h-18c-0.554 0-1-0.4-1-1z" opacity=".2"/>
		</svg>
	{:else if numericSize <= 56}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 48 48"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path
     style="fill:#a7afb4" 
     d="M 18,4 C 17,4 16,5 16,6 V 9 H 7.5 C 6.7,9 6,10.1 6,11.1 V 12 H 9 V 42.6 C 9,43.4 9.6,44 10.5,44 h 27 C 38.3,44 39,43.4 39,42.6 V 12 h 3 V 11 C 42,10.1 41.4,9 40.5,9 H 32 V 6 C 32,5 31,4 30,4 Z m 1,3 H 29 V 9 H 19 Z"
     id="path4" />
  <path
     style="fill-opacity:0.33"
     d="M 13.5,14 C 12.6,14 12,14.6 12,15.4 V 39.6 C 12,40.4 12.6,41 13.5,41 14.4,41 15,40.4 15,39.6 V 15.4 C 15,14.6 14.331,14 13.5,14 Z m 7,0 C 19.6,14 19,14.6 19,15.4 V 39.6 C 19,40.4 19.6,41 20.5,41 21.4,41 22,40.4 22,39.6 V 15.4 C 22,14.6 21.331,14 20.5,14 Z m 7,0 C 26.6,14 26,14.6 26,15.4 V 39.6 C 26,40.4 26.6,41 27.5,41 28.4,41 29,40.4 29,39.6 V 15.4 C 29,14.6 28.331,14 27.5,14 Z m 7,0 C 33.6,14 33,14.6 33,15.4 V 39.6 C 33,40.4 33.6,41 34.5,41 35.4,41 36,40.4 36,39.6 V 15.4 C 36,14.6 35.331,14 34.5,14 Z"
     id="path6" />
  <path
     style="fill-opacity:0.33"
     d="M 9 41.5 L 9 42.5 C 9 43.3 9.6 44 10.5 44 L 37.5 44 C 38.3 44 39 43.4 39 42.5 L 39 41.5 C 39 42.3 38.4 43 37.5 43 L 10.5 43 C 9.7 43 9 42.4 9 41.5 z "
     id="path8" />
  <path
     style="fill-opacity:0.33"
     d="M 18.75,6 C 18.05,6 18,6.3 18,6.7 V 9 h 1 V 7 h 10 v 2 h 1 V 6.8 C 30,6.4 29.7,6 29.25,6 Z M 6,11 v 1 h 36 v -1 z"
     />
  <path
     style="fill:#ffffff;fill-opacity:0.2"
     d="m 9,12 v 0.5 L 39,13 v -1 z"
     />
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
     style="fill:#a7afb4"
     d="m 24,6 c -1,0 -2,1 -2,2 v 3 H 10 C 9,11 8,12 8,14.1 V 15 h 4 v 41.6 c 0,0.8 0.6,1.4 1.5,1.4 h 37 c 0.8,0 1.481226,-0.60022 1.5,-1.4 V 15 h 4 v -1 c 0,-2 -1,-3 -2,-3 H 42 V 8 C 42,7 41,6 40,6 Z m 1,3 h 14 v 2 H 25 Z"
     />
  <path
     style="fill-opacity:0.33"
     d="M 18.5,19 C 17.6,19 17,19.6 17,20.4 v 33.2 c 0,0.8 0.6,1.4 1.5,1.4 0.9,0 1.5,-0.6 1.5,-1.4 V 20.4 C 20,19.6 19.331,19 18.5,19 Z m 9,0 C 26.6,19 26,19.6 26,20.4 v 33.2 c 0,0.8 0.6,1.4 1.5,1.4 0.9,0 1.5,-0.6 1.5,-1.4 V 20.4 C 29,19.6 28.331,19 27.5,19 Z m 9,0 C 35.6,19 35,19.6 35,20.4 v 33.2 c 0,0.8 0.6,1.4 1.5,1.4 0.9,0 1.5,-0.6 1.5,-1.4 V 20.4 C 38,19.6 37.331,19 36.5,19 Z m 9,0 C 44.6,19 44,19.6 44,20.4 v 33.2 c 0,0.8 0.6,1.4 1.5,1.4 0.9,0 1.5,-0.6 1.5,-1.4 V 20.4 C 47,19.6 46.331,19 45.5,19 Z"
     />
  <path
     style="fill-opacity:0.33"
     d="m 12,55.5 v 1 c 0,0.8 0.6,1.5 1.5,1.5 h 37 c 0.8,0 1.5,-0.6 1.5,-1.5 v -1 c 0,0.8 -0.6,1.5 -1.5,1.5 h -37 C 12.7,57 12,56.4 12,55.5 Z"
     />
  <path
     style="fill-opacity:0.33"
     d="M 24.75,8 C 24.05,8 24.015493,8.3 24,8.7 V 11 h 1 V 9 h 14 v 2 h 1 V 8.8 C 40,8.4 39.7,8 39.25,8 Z M 8,14 v 1 h 48 v -1 z"
     />
  <path
     style="fill:#ffffff;fill-opacity:0.2"
     d="m 12,15 v 0.5 L 52,16 v -1 z"
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
			<defs id="defs12">
        <radialGradient id="l" cx="20.571428" cy="8.5" r="4" gradientTransform="matrix(11.225337,-1.0222482e-7,8.1600553e-8,2.25,-182.84228,4.8750023)" gradientUnits="userSpaceOnUse">
            <stop id="stop2" stop-color="#4f575f" stop-opacity=".25098041" offset="0"/>
            <stop id="stop4" stop-color="#8a939a" offset="1"/>
        </radialGradient>
        <linearGradient id="k" x1="390.57101" x2="410.57101" y1="521.79797" y2="545.79797" gradientTransform="matrix(3,0,0,2.75,-1153.7131,-1413.9445)" gradientUnits="userSpaceOnUse">
            <stop id="stop7" stop-color="#bdc3c7" offset="0"/>
            <stop id="stop9" stop-color="#8a9696" offset="1"/>
        </linearGradient>
        <linearGradient id="linearGradient916" x1="395.57101" x2="395.57101" y1="520.79797" y2="516.79797" gradientTransform="matrix(3,0,0,3,-1153.7131,-1544.394)" gradientUnits="userSpaceOnUse">
            <stop id="stop31" stop-color="#afb0b3" offset="0"/>
            <stop id="stop33" stop-color="#bdc3c7" offset="1"/>
        </linearGradient>
        <radialGradient id="radialGradient1034" cx="48" cy="17.25" r="10" gradientTransform="matrix(2.1,0,0,1.6,-52.8,-9.6)" gradientUnits="userSpaceOnUse">
            <stop id="stop21" stop-color="#4f575f" stop-opacity=".25" offset="0"/>
            <stop id="stop23" stop-color="#9da5ab" offset="1"/>
        </radialGradient>
    </defs>
    <linearGradient id="a">
        <stop id="stop14" stop-color="#4f575f" stop-opacity=".4" offset="0"/>
        <stop id="stop16" stop-color="#4f575f" stop-opacity=".6" offset=".5"/>
        <stop id="stop18" stop-color="#4f575f" stop-opacity=".4" offset="1"/>
    </linearGradient>
    <linearGradient id="c" x1="412.57101" x2="412.57101" y1="522.79797" y2="520.79797" gradientTransform="matrix(3,0,0,3,-1153.7131,-1544.394)" gradientUnits="userSpaceOnUse">
        <stop id="stop26" stop-color="#9da5ab" offset="0"/>
        <stop id="stop28" stop-color="#bdc3c7" offset="1"/>
    </linearGradient>
    <linearGradient id="f" x1="390.57101" x2="406.57101" y1="521.79797" y2="537.79797" gradientTransform="matrix(3,0,0,2.8636364,-1153.7131,-1470.2397)" gradientUnits="userSpaceOnUse">
        <stop id="stop36" stop-color="#292c2f" offset="0"/>
        <stop id="stop38" stop-opacity="0" offset="1"/>
    </linearGradient>
    <linearGradient id="g" x1="391.57101" x2="394.57101" y1="534.79797" y2="534.79797" gradientTransform="matrix(2.00001,0,0,2.7,-747.14101,-1389.9546)" gradientUnits="userSpaceOnUse" xlink:href="#a"/>
    <linearGradient id="h" x1="391.57101" x2="394.57101" y1="534.79797" y2="534.79797" gradientTransform="matrix(2.00001,0,0,2.6999999,-762.14401,-1389.9544)" gradientUnits="userSpaceOnUse" xlink:href="#a"/>
    <linearGradient id="i" x1="391.57101" x2="394.57101" y1="534.79797" y2="534.79797" gradientTransform="matrix(2.00001,0,0,2.7,-729.14401,-1389.9546)" gradientUnits="userSpaceOnUse" xlink:href="#a"/>
    <linearGradient id="j" x1="391.57101" x2="394.57101" y1="534.79797" y2="534.79797" gradientTransform="matrix(2.00001,0,0,2.7,-714.14101,-1389.9546)" gradientUnits="userSpaceOnUse" xlink:href="#a"/>
    <path id="path45" d="M 18,21 V 84.250001 C 18,85.773499 19.338,87 21,87 h 54 c 1.662,0 3,-1.226501 3,-2.749999 V 21 Z" fill="url(#k)" stroke-width="2.87228"/>
    <path id="path51" d="m15 18c-1.662 0-3 1.338-3 3v3h72v-3c0-1.662-1.338-3-3-3z" fill="url(#c)" stroke-width="3"/>
    <path id="path47" d="m36 9c-1.662 0-3 1.338-3 3v6h6v-2.25c-9.15e-4 -0.395088 0.304831-0.723135 0.699-0.75h16.605c0.4 0.02836 0.69702 0.355991 0.696 0.75v2.25h6v-6c0-1.662-1.338-3-3-3z" fill="url(#linearGradient916)" stroke-width="3"/>
    <path id="path987" d="m39 14c-0.554 0-1 0.446-1 1v3h1v-2.25c0-0.4155 0.3345-0.75 0.75-0.75h16.5c0.4155 0 0.75 0.3345 0.75 0.75v2.25h1v-3c0-0.554-0.446-1-1-1z" fill="url(#radialGradient1034)"/>
    <g stroke-width="2.84605">
        <path id="path55" d="m39.000031 27c1.661998 0 3 1.2042 3 2.7v48.6c0 1.4958-1.3 2.7-3 2.7-1.662002 0-3-1.2042-3-2.7v-48.6c0-1.4958 1.337998-2.7 3-2.7z" fill="url(#g)"/>
        <path id="path57" d="m24.000029 27c1.662 0 3 1.2042 3 2.7v48.6c0 1.4958-1.338 2.7-3 2.7s-3-1.2042-3-2.7v-48.6c0-1.4958 1.338-2.7 3-2.7z" fill="url(#h)"/>
        <path id="path59" d="m57.000031 27c1.661998 0 3 1.2042 3 2.7v48.6c0 1.4958-1.3 2.7-3 2.7-1.662 0-3-1.2042-3-2.7v-48.6c0-1.4958 1.338-2.7 3-2.7z" fill="url(#i)"/>
        <path id="path61" d="m72.000031 27c1.661998 0 3 1.2042 3 2.7v48.6c0 1.4958-1.3 2.7-3 2.7-1.662 0-3-1.2042-3-2.7v-48.6c0-1.4958 1.338-2.7 3-2.7z" fill="url(#j)"/>
    </g>
    <path id="path65" d="m18 24v6l60 57v-63z" fill="url(#f)" opacity=".2" stroke-width="2.93103"/>
    <path id="path67" d="m12 24h72v-1h-72z" fill="url(#l)" stroke-width="2.11899"/>
    <path id="path69" d="m78 83.25c0 0.761748-0.334703 1.449959-0.876953 1.947266s-1.292047 0.802734-2.123047 0.802734h-54c-0.831 0-1.580797-0.305427-2.123047-0.802734s-0.876953-1.185518-0.876953-1.947266v1c0 1.523496 1.338 2.75 3 2.75h54c1.662 0 3-1.226504 3-2.75z" opacity=".2"/>
		</svg>
	{/if}
