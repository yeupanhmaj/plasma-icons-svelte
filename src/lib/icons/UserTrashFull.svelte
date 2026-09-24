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
        style="fill:currentColor" 
        d="m6 2v1h-4v1h1v10h10v-10h1v-1h-4v-1zm1 1h2v1h-2zm-1 3h1v5h-1zm3 0h1v5h-1z"
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
       d="M 8 3 L 8 5 L 4 5 L 4 6 L 5 6 L 5 19 L 17 19 L 17 6 L 18 6 L 18 5 L 14 5 L 14 3 L 8 3 z M 9 4 L 13 4 L 13 5 L 9 5 L 9 4 z M 8 9 L 9 9 L 9 15 L 8 15 L 8 9 z M 13 9 L 14 9 L 14 15 L 13 15 L 13 9 z "
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
        <linearGradient id="u" x1="394.601" x2="399.601" y1="517.8" y2="522.8" gradientTransform="translate(-384.6,-515.8)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#d4ba94" offset="0"/>
            <stop stop-color="#bb9d71" offset="1"/>
        </linearGradient>
        <linearGradient id="t" x1="390.601" x2="410.601" y1="521.8" y2="545.8" gradientTransform="matrix(1 0 0 .9 -384.6 -471.3)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#bdc3c7" offset="0"/>
            <stop stop-color="#8a9696" offset="1"/>
        </linearGradient>
        <linearGradient id="ab" x1="395.601" x2="395.601" y1="520.8" y2="516.8" gradientTransform="rotate(85.2,488.1,66)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#afb0b3" offset="0"/>
            <stop stop-color="#bdc3c7" offset="1"/>
        </linearGradient>
        <radialGradient id="n" cx="16" cy="8.5" r="4" gradientTransform="matrix(.15 1.74 -1.5 .1 38 -11.96)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#4f575f" stop-opacity=".25" offset="0"/>
            <stop stop-color="#9da5ab" offset="1"/>
        </radialGradient>
        <linearGradient id="ad" x1="412.601" x2="412.601" y1="522.8" y2="520.8" gradientTransform="rotate(85.2,488.1,7)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#9da5ab" offset="0"/>
            <stop stop-color="#bdc3c7" offset="1"/>
        </linearGradient>
        <linearGradient id="z" x1="391.601" x2="394.601" y1="534.8" y2="534.8" gradientTransform="matrix(.7 0 0 .9 -249.047 -463.3)" gradientUnits="userSpaceOnUse" xlink:href="#a"/>
        <linearGradient id="x" x1="391.601" x2="394.601" y1="534.8" y2="534.8" gradientTransform="matrix(.7 0 0 .9 -254.048 -463.3)" gradientUnits="userSpaceOnUse" xlink:href="#a"/>
        <linearGradient id="w" x1="391.601" x2="394.601" y1="534.8" y2="534.8" gradientTransform="matrix(.7 0 0 .9 -243.048 -463.3)" gradientUnits="userSpaceOnUse" xlink:href="#a"/>
        <linearGradient id="v" x1="391.601" x2="394.601" y1="534.8" y2="534.8" gradientTransform="matrix(.7 0 0 .9 -238.047 -463.3)" gradientUnits="userSpaceOnUse" xlink:href="#a"/>
        <radialGradient id="p" cx="20.6428" cy="8.5" r="4" gradientTransform="matrix(.3 3.73 -1.5 .13 31.9 -60.56)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#4f575f" stop-opacity=".25" offset="0"/>
            <stop stop-color="#8a939a" offset="1"/>
        </radialGradient>
    </defs>
    <linearGradient id="o" x1="393.6" x2="396.071" y1="521.8" y2="524.298" gradientTransform="translate(-384.6,-514.8)" gradientUnits="userSpaceOnUse" xlink:href="#m"/>
    <linearGradient id="m">
        <stop stop-color="#fcfcfc" offset="0"/>
        <stop stop-color="#eff0f1" offset="1"/>
    </linearGradient>
    <linearGradient id="ac" x1="399.6" x2="400.6" y1="521.8" y2="523.8" gradientTransform="translate(-384.6,-514.8)" gradientUnits="userSpaceOnUse" xlink:href="#l"/>
    <linearGradient id="l">
        <stop stop-color="#292c2f" offset="0"/>
        <stop stop-color="#292c2f" stop-opacity="0" offset="1"/>
    </linearGradient>
    <linearGradient id="aa" x1="409.6" x2="405.6" y1="521.8" y2="525.8" gradientTransform="matrix(-1,0,0,1,424.572,-514.8)" gradientUnits="userSpaceOnUse" xlink:href="#m"/>
    <linearGradient id="y" x1="407.6" x2="408.6" y1="521.8" y2="523.8" gradientTransform="translate(-384.6,-514.8)" gradientUnits="userSpaceOnUse" xlink:href="#l"/>
    <linearGradient id="a">
        <stop stop-color="#4f575f" stop-opacity=".4" offset="0"/>
        <stop stop-color="#4f575f" stop-opacity=".6" offset=".5"/>
        <stop stop-color="#4f575f" stop-opacity=".4" offset="1"/>
    </linearGradient>
    <path d="m21 4-7 3-3-3-4 3v1l3 8 14-9z" fill="url(#u)"/>
    <path d="M 6,7 V 28.1 C 6,28.6 6.4,29 7,29 h 18 c 0.554,0 1,-0.4 1,-0.9 V 7 Z" fill="url(#t)" stroke-width=".96"/>
    <g stroke-width="1">
        <path d="m13.00001 9c0.554 0 1 0.4014 1 0.9v16.2c0 0.5-0.4 0.9-1 0.9s-1-0.4014-1-0.9v-16.2c0-0.5 0.4-0.9 1-0.9z" fill="url(#z)"/>
        <path d="m8.00001 9c0.554 0 1 0.4014 1 0.9v16.2c0 0.5-0.4 0.9-1 0.9s-1-0.4014-1-0.9v-16.2c0-0.5 0.4-0.9 1-0.9z" fill="url(#x)"/>
        <path d="m19.00001 9c0.554 0 1 0.4014 1 0.9v16.2c0 0.5-0.4 0.9-1 0.9s-1-0.4014-1-0.9v-16.2c0-0.5 0.4-0.9 1-0.9z" fill="url(#w)"/>
        <path d="m24.00001 9c0.554 0 1 0.4014 1 0.9v16.2c0 0.5-0.4 0.9-1 0.9s-1-0.4014-1-0.9v-16.2c0-0.5 0.4-0.9 1-0.9z" fill="url(#v)"/>
    </g>
    <path d="m6 27v1c0 0.554 0.4 1 1 1h18c0.554 0 1-0.4 1-1v-1c0 0.554-0.4 1-1 1h-18c-0.554 0-1-0.4-1-1z" opacity=".2"/>
    <path d="m13 15 6-4-4-4h-6z" fill="url(#ac)" opacity=".2"/>
    <path d="m9 7 2 4 6-2-2-2z" fill="url(#o)"/>
    <path d="m23 7-4 4-4-4z" fill="url(#aa)"/>
    <path d="m19 11 7 7v-11h-3z" fill="url(#y)" opacity=".2"/>
    <path d="m30.316847 12.77612c-0-0.55-0.528486-0.96-1.1-0.9l-2 0.2 0.2 2 0.75-0.0a0.25 0.25 0 0 1 0.27 0.2l0.46 5.5a0.25 0.25 0 0 1-0.229614 0.252195l-0.75 0.0 0.2 2 2-0.2c0.55-0 0.96-0.53 0.9-1.1z" fill="url(#ab)"/>
    <path d="m29.4 13.3c-0-0.3-0.2-0.5-0.54-0.46l-1.5 0.1 0.1 1 0.75-0.0a0.25 0.25 0 0 1 0.27 0.2l0.46 5.5a0.25 0.25 0 0 1-0.2 0.2l-0.75 0.0 0.1 1 1.5-0.1261c0.3-0 0.5-0.3 0.5-0.5z" fill="url(#n)"/>
    <path d="m26.74 6.0c-0-0.551-0.5-0.96-1.1-0.9l-1 0.1 2 23.9 1-0.1c0.55-0 0.96-0.5 0.912394-1.1z" fill="url(#ad)"/>
    <path d="m24.7 5.2 2 23.9 1-0-2-23.9z" fill="url(#p)" stroke-width="1"/>
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
     d="M 5,12 V 42.6 C 5,43.4 5.6,44 6.5,44 h 27 C 34.3,44 35,43.4 35,42.6 V 12 Z"
     />
  <path
     style="fill-opacity:0.33"
     d="M 9.5,14 C 8.6,14 8,14.6 8,15.4 V 39.6 C 8,40.4 8.6,41 9.5,41 10.4,41 11,40.4 11,39.6 V 15.4 C 11,14.6 10.331,14 9.5,14 Z m 7,0 C 15.6,14 15,14.6 15,15.4 v 24.2 c 0,0.8 0.6,1.4 1.5,1.4 0.9,0 1.5,-0.6 1.5,-1.4 V 15.4 C 18,14.6 17.331,14 16.5,14 Z m 7,0 C 22.6,14 22,14.6 22,15.4 v 24.2 c 0,0.8 0.6,1.4 1.5,1.4 0.9,0 1.5,-0.6 1.5,-1.4 V 15.4 C 25,14.6 24.331,14 23.5,14 Z m 7,0 C 29.6,14 29,14.6 29,15.4 v 24.2 c 0,0.8 0.6,1.4 1.5,1.4 0.9,0 1.5,-0.6 1.5,-1.4 V 15.4 C 32,14.6 31.331,14 30.5,14 Z"
     />
  <path
     style="fill-opacity:0.33"
     d="m 5,41.5 v 1 C 5,43.3 5.6,44 6.5,44 h 27 c 0.8,0 1.5,-0.6 1.5,-1.5 v -1 C 35,42.3 34.4,43 33.5,43 H 6.5 C 5.7,43 5,42.4 5,41.5 Z"
     />
  <path
     style="fill:#ffffff;fill-opacity:0.2;"
     d="m 5,12 v 0.5 L 35,13 v -1 z"
     />
  <path
     style="fill:#8b6039"
     d="M 29,7 18,12 13,7 7,12 v 1 l 5,12 22,-13 z"
     />
  <path
     style="fill:#ffffff;fill-opacity:0.9"
     d="m 9,12 3,6 9.6,-2.9 L 26,19 32,12 Z"
     />
  <g
     transform="rotate(85,3.15,47.2)">
    <path
       d="m -22,4 c -1,0 -2,1 -2,2 v 3 h -8.5 c -0.8,0 -1.5,1.1 -1.5,2.1 V 12 H 2 V 11 C 2,10.1 1.4,9 0.5,9 H -8 V 6 C -8,5 -9,4 -10,4 Z m 1,3 h 10 v 2 h -10 z"
       style="fill:#a7afb4"
       />
    <path
       d="M -21.25,6 C -21.95,6 -22,6.3 -22,6.7 V 9 h 1 V 7 h 10 v 2 h 1 V 6.8 C -10,6.4 -10.3,6 -10.75,6 Z M -34,11 v 1 H 2 v -1 z"
       style="fill-opacity:0.33"
       />
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
     style="fill:#a7afb4"
     d="m 9,15 v 41.6 c 0,0.8 0.6,1.4 1.5,1.4 h 37 c 0.8,0 1.5,-0.6 1.5,-1.4 V 15 Z"
     />
  <path
     style="fill-opacity:0.33"
     d="M 15.5,19 C 14.6,19 14,19.6 14,20.4 v 33.2 c 0,0.8 0.6,1.4 1.5,1.4 0.9,0 1.5,-0.6 1.5,-1.4 V 20.4 C 17,19.6 16.3,19 15.5,19 Z m 9,0 C 23.6,19 23,19.6 23,20.4 v 33.2 c 0,0.8 0.6,1.4 1.5,1.4 0.9,0 1.5,-0.6 1.5,-1.4 V 20.4 C 26,19.6 25.3,19 24.5,19 Z m 9,0 C 32.6,19 32,19.6 32,20.4 v 33.2 c 0,0.8 0.6,1.4 1.5,1.4 0.9,0 1.5,-0.6 1.5,-1.4 V 20.4 C 35,19.6 34.3,19 33.5,19 Z m 9,0 C 41.6,19 41,19.6 41,20.4 v 33.2 c 0,0.8 0.6,1.4 1.5,1.4 0.9,0 1.5,-0.6 1.5,-1.4 V 20.4 C 44,19.6 43.3,19 42.5,19 Z"
     />
  <path
     style="fill-opacity:0.33"
     d="m 9,55.5 v 1 c 0,0.8 0.6,1.5 1.5,1.5 h 37 c 0.8,0 1.5,-0.6 1.5,-1.5 v -1 c 0,0.8 -0.6,1.5 -1.5,1.5 h -37 C 9.7,57 9,56.4 9,55.5 Z"
     />
  <path
     style="fill:#a7afb4"
     d="m 59.3,25.343462 c -0.1,-1 -1.2,-1.9 -2.1,-1.8 l -3,0.2 -1,-12 c -0,-1 -1.2,-1.9 -3.2,-1.7 l -0.9,0 c 0,0 4,46.5 4.1,47.8 l 1,-0.1 c 2,-0.2 2.9,-1.2 2.8,-2.2 L 55.9,43.7 58.9,43.4 c 1,-0.1 1.9,-1.2 1.8,-2.2 z m -2.9,1.2 1.2,14 -2,0.2 -1.2,-14 z"
     />
  <path
     style="fill-opacity:0.33"
     d="m 57.4,26.3 c -0,-0.7 -0.4,-0.7 -0.8,-0.7 l -2.3,0.2 0.1,1 2,-0.2 1.2,14 -2,0.2 0,1 2.2,-0.2 c 0.4,-0 0.8,-0.4 0.7,-0.8 z m -7.4,-16.2 -1,0.1 L 53.1,58 l 1,-0 z"
     />
  <path
     style="fill:#8b6039"
     d="m 33,5 -7,10 -9,-6 -6,6 v 1 l 6,11 31,-12 z"
     />
  <path
     style="fill:#ffffff;fill-opacity:0.9"
     d="m 13,15 3,6 9.6,-2.9 L 34,25 46,15 Z"
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
			<defs id="defs36">
        <linearGradient id="r" x1="394.57101" x2="399.57101" y1="517.79797" y2="522.79797" gradientTransform="matrix(3,0,0,3,-1153.713,-1547.394)" gradientUnits="userSpaceOnUse">
            <stop id="stop2" stop-color="#d4ba94" offset="0"/>
            <stop id="stop4" stop-color="#bb9d71" offset="1"/>
        </linearGradient>
        <linearGradient id="s" x1="390.57101" x2="410.57101" y1="521.79797" y2="545.79797" gradientTransform="matrix(3,0,0,2.75,-1153.713,-1413.9445)" gradientUnits="userSpaceOnUse">
            <stop id="stop7" stop-color="#bdc3c7" offset="0"/>
            <stop id="stop9" stop-color="#8a9696" offset="1"/>
        </linearGradient>
        <linearGradient id="h" x1="391.57101" x2="394.57101" y1="534.79797" y2="534.79797" gradientTransform="matrix(2.00001,0,0,2.7,-747.141,-1389.9545)" gradientUnits="userSpaceOnUse" xlink:href="#a"/>
        <linearGradient id="j" x1="391.57101" x2="394.57101" y1="534.79797" y2="534.79797" gradientTransform="matrix(2.00001,0,0,2.6999999,-762.144,-1389.9544)" gradientUnits="userSpaceOnUse" xlink:href="#a"/>
        <linearGradient id="k" x1="391.57101" x2="394.57101" y1="534.79797" y2="534.79797" gradientTransform="matrix(2.00001,0,0,2.7,-729.144,-1389.9545)" gradientUnits="userSpaceOnUse" xlink:href="#a"/>
        <linearGradient id="q" x1="391.57101" x2="394.57101" y1="534.79797" y2="534.79797" gradientTransform="matrix(2.00001,0,0,2.7,-714.141,-1389.9545)" gradientUnits="userSpaceOnUse" xlink:href="#a"/>
        <radialGradient id="l-6" cx="20.571428" cy="8.5" r="4" gradientTransform="matrix(11.225337,-1.0222482e-7,8.1600553e-8,2.25,-155.84228,12.875002)" gradientUnits="userSpaceOnUse">
            <stop id="stop2-7" stop-color="#4f575f" stop-opacity=".25098041" offset="0"/>
            <stop id="stop4-5" stop-color="#8a939a" offset="1"/>
        </radialGradient>
        <linearGradient id="c-3" x1="412.57101" x2="412.57101" y1="522.79797" y2="520.79797" gradientTransform="matrix(3,0,0,3,-1126.7131,-1536.394)" gradientUnits="userSpaceOnUse">
            <stop id="stop26-5" stop-color="#9da5ab" offset="0"/>
            <stop id="stop28-6" stop-color="#bdc3c7" offset="1"/>
        </linearGradient>
        <linearGradient id="linearGradient916" x1="395.57101" x2="395.57101" y1="520.79797" y2="516.79797" gradientTransform="matrix(3,0,0,3,-1126.7131,-1536.394)" gradientUnits="userSpaceOnUse">
            <stop id="stop31-9" stop-color="#afb0b3" offset="0"/>
            <stop id="stop33-1" stop-color="#bdc3c7" offset="1"/>
        </linearGradient>
        <radialGradient id="radialGradient1034" cx="48" cy="17.25" r="10" gradientTransform="matrix(2.1,0,0,1.6,-25.8,-1.6)" gradientUnits="userSpaceOnUse">
            <stop id="stop21-7" stop-color="#4f575f" stop-opacity=".25" offset="0"/>
            <stop id="stop23-0" stop-color="#9da5ab" offset="1"/>
        </radialGradient>
    </defs>
    <linearGradient id="u" x1="393.57101" x2="396.07101" y1="521.79797" y2="524.29797" gradientTransform="matrix(3,0,0,3,-1153.713,-1544.394)" gradientUnits="userSpaceOnUse" xlink:href="#b"/>
    <linearGradient id="b">
        <stop id="stop39" stop-color="#fcfcfc" offset="0"/>
        <stop id="stop41" stop-color="#eff0f1" offset="1"/>
    </linearGradient>
    <linearGradient id="e" x1="399.57101" x2="400.57101" y1="521.79797" y2="523.79797" gradientTransform="matrix(3,0,0,3,-1153.713,-1544.394)" gradientUnits="userSpaceOnUse" xlink:href="#c"/>
    <linearGradient id="c">
        <stop id="stop45" stop-color="#292c2f" offset="0"/>
        <stop id="stop47" stop-color="#292c2f" stop-opacity="0" offset="1"/>
    </linearGradient>
    <linearGradient id="g" x1="409.57101" x2="405.57101" y1="521.79797" y2="525.79797" gradientTransform="matrix(-3,0,0,3,1273.716,-1544.394)" gradientUnits="userSpaceOnUse" xlink:href="#b"/>
    <linearGradient id="i" x1="407.57101" x2="408.57101" y1="521.79797" y2="523.79797" gradientTransform="matrix(3,0,0,3,-1153.713,-1544.394)" gradientUnits="userSpaceOnUse" xlink:href="#c"/>
    <linearGradient id="a">
        <stop id="stop52" stop-color="#4f575f" stop-opacity=".4" offset="0"/>
        <stop id="stop54" stop-color="#4f575f" stop-opacity=".6" offset=".5"/>
        <stop id="stop56" stop-color="#4f575f" stop-opacity=".4" offset="1"/>
    </linearGradient>
    <path id="path59" d="m63 12-21 9-9-9-12 9v3l9 24 42-27z" fill="url(#r)" stroke-width="3"/>
    <path id="path61" d="M 18,21 V 84.250002 C 18,85.773498 19.338,87 21,87 h 54 c 1.662,0 3,-1.226502 3,-2.749998 V 21 Z" fill="url(#s)" stroke-width="2.87227"/>
    <g stroke-width="2.84606">
        <path id="path63" d="m39.00003 27c1.662 0 3 1.2042 3 2.7v48.6c0 1.4958-1.338 2.7-3 2.7s-3-1.2042-3-2.7v-48.6c0-1.4958 1.338-2.7 3-2.7z" fill="url(#h)"/>
        <path id="path65" d="m24.00003 27c1.662 0 3 1.2042 3 2.7v48.6c0 1.4958-1.338 2.7-3 2.7s-3-1.2042-3-2.7v-48.6c0-1.4958 1.338-2.7 3-2.7z" fill="url(#j)"/>
        <path id="path67" d="m57.00003 27c1.662 0 3 1.2042 3 2.7v48.6c0 1.4958-1.338 2.7-3 2.7s-3-1.2042-3-2.7v-48.6c0-1.4958 1.338-2.7 3-2.7z" fill="url(#k)"/>
        <path id="path69" d="m72.00003 27c1.662 0 3 1.2042 3 2.7v48.6c0 1.4958-1.338 2.7-3 2.7s-3-1.2042-3-2.7v-48.6c0-1.4958 1.338-2.7 3-2.7z" fill="url(#q)"/>
    </g>
    <g stroke-width="3">
        <path id="path73" d="m39 45 18-12-12-12h-18z" fill="url(#e)" opacity=".2"/>
        <path id="path75" d="m27 21 6 12 18-6-6-6z" fill="url(#u)"/>
        <path id="path77" d="m69 21-12 12-12-12z" fill="url(#g)"/>
        <path id="path79" d="m57 33 21 21v-33h-9z" fill="url(#i)" opacity=".2"/>
    </g>
    <path id="path69-3" d="m78 83.25c0 0.761748-0.334703 1.449959-0.876953 1.947266s-1.292047 0.802734-2.123047 0.802734h-54c-0.831 0-1.580797-0.305427-2.123047-0.802734s-0.876953-1.185518-0.876953-1.947266v1c0 1.523496 1.338 2.75 3 2.75h54c1.662 0 3-1.226504 3-2.75z" opacity=".2"/>
    <g id="g947" transform="rotate(85.027144,65.288368,42.793569)">
        <path id="path51-9" d="m42 26c-1.662 0-3 1.338-3 3v3h72v-3c0-1.662-1.338-3-3-3z" fill="url(#c-3)" stroke-width="3"/>
        <path id="path47-3" d="m63 17c-1.662 0-3 1.338-3 3v6h6v-2.25c-9.15e-4 -0.395088 0.304831-0.723135 0.699-0.75h16.605c0.392985 0.02836 0.69702 0.355991 0.696 0.75v2.25h6v-6c0-1.662-1.338-3-3-3z" fill="url(#linearGradient916)" stroke-width="3"/>
        <path id="path987" d="m66 22c-0.554 0-1 0.446-1 1v3h1v-2.25c0-0.4155 0.3345-0.75 0.75-0.75h16.5c0.4155 0 0.75 0.3345 0.75 0.75v2.25h1v-3c0-0.554-0.446-1-1-1z" fill="url(#radialGradient1034)"/>
        <path id="path67-6" d="m39 32h72v-1h-72z" fill="url(#l-6)" stroke-width="2.11899"/>
    </g>
		</svg>
	{/if}
