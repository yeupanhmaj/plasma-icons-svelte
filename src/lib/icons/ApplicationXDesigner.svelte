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
			<g fill="#22a7f0" transform="matrix(.01225 0 0 .01225 1.869 1.875)">
  <path d="m530.2 118.2c0 17.3-14.1 31.2-31.4 31.2-17.4 0-31.4-14-31.4-31.2v-76.9c0-17.3 14.1-31.3 31.4-31.3 17.4 0 31.4 14 31.4 31.3z"/>
  <path d="m525.4 662c0 14.2-11.6 25.7-25.9 25.7h-1.4c-14.3 0-25.9-11.5-25.9-25.7v-83.1c0-14.2 11.6-25.8 25.9-25.8h1.4c14.3 0 25.9 11.5 25.9 25.8z"/>
  <path d="m825.5 906.7c10.4-10.7 13.8-27.1 7.1-41.5l-260-551.2c-.2-1.5-.2-3.1-.2-4.7 0-5.4 2-10.4 5.2-14.3 31-23.3 51-60.3 51-101.9 0-70.6-57.5-127.7-128.5-127.8-72.3 0-128.6 57.2-128.6 127.8 0 41.6 19.9 78.6 50.9 101.9 3.3 3.9 5.3 8.8 5.3 14.3 0 1.6 0 3.2-.2 4.7l-260 551.2c-6.7 14.3-3.4 30.8 7.1 41.5l-41 83.3 64.8-70.2c17.2 4.5 35.6-3.7 43.4-20.2l247.9-525.4c2.3-2.9 5.8-4.7 9.8-4.7.2 0 .6 0 .6 0 .2 0 .4 0 .6 0 4 0 7.5 1.9 9.7 4.7l247.9 525.4c7.7 16.6 26.2 24.7 43.3 20.2l64.8 70.2zm-325.4-640.1c-41 0-73.8-32.9-73.8-73.5 0-40.5 32.9-73.4 73.8-73.5 40.8 0 73.8 32.9 73.8 73.5 0 40.6-33 73.5-73.8 73.5"/>
  <path d="m781.7 622.9c0 9.3-7.5 16.8-16.9 16.8h-532.1c-9.3 0-16.9-7.5-16.9-16.8v-.1c0-9.3 7.6-16.8 16.9-16.8h532.1c9.4.1 16.9 7.6 16.9 16.9"/>
 </g>
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
			<defs
     id="defs3871" />
  
  
  <g
     id="layer1"
     transform="translate(-326,-534.3622)">
    <g
       transform="matrix(0.01634563,0,0,0.01634563,328.84734,537.21626)"
       id="g6"
       style="fill:#22a7f0;fill-opacity:1">
      <path
         d="m 530.2,118.2 c 0,17.3 -14.1,31.2 -31.4,31.2 l 0,0 c -17.4,0 -31.4,-14 -31.4,-31.2 l 0,-76.9 C 467.4,24 481.5,10 498.8,10 l 0,0 c 17.4,0 31.4,14 31.4,31.3 l 0,76.9 z"
         id="path8"
         style="fill:#22a7f0;fill-opacity:1" />
      <path
         d="m 525.4,662 c 0,14.2 -11.6,25.7 -25.9,25.7 l -1.4,0 c -14.3,0 -25.9,-11.5 -25.9,-25.7 l 0,-83.1 c 0,-14.2 11.6,-25.8 25.9,-25.8 l 1.4,0 c 14.3,0 25.9,11.5 25.9,25.8 l 0,83.1 z"
         id="path10"
         style="fill:#22a7f0;fill-opacity:1" />
      <path
         d="m 825.5,906.7 c 10.4,-10.7 13.8,-27.1 7.1,-41.5 L 572.6,314 c -0.2,-1.5 -0.2,-3.1 -0.2,-4.7 0,-5.4 2,-10.4 5.2,-14.3 31,-23.3 51,-60.3 51,-101.9 0,-70.6 -57.5,-127.7 -128.5,-127.8 -72.3,0 -128.6,57.2 -128.6,127.8 0,41.6 19.9,78.6 50.9,101.9 3.3,3.9 5.3,8.8 5.3,14.3 0,1.6 0,3.2 -0.2,4.7 l -260,551.2 c -6.7,14.3 -3.4,30.8 7.1,41.5 l -41,83.3 64.8,-70.2 c 17.2,4.5 35.6,-3.7 43.4,-20.2 L 489.7,374.2 c 2.3,-2.9 5.8,-4.7 9.8,-4.7 0.2,0 0.6,0 0.6,0 0.2,0 0.4,0 0.6,0 4,0 7.5,1.9 9.7,4.7 l 247.9,525.4 c 7.7,16.6 26.2,24.7 43.3,20.2 L 866.4,990 825.5,906.7 Z M 500.1,266.6 c -41,0 -73.8,-32.9 -73.8,-73.5 0,-40.5 32.9,-73.4 73.8,-73.5 40.8,0 73.8,32.9 73.8,73.5 0,40.6 -33,73.5 -73.8,73.5 z"
         id="path12"
         style="fill:#22a7f0;fill-opacity:1" />
      <path
         d="m 781.7,622.9 c 0,9.3 -7.5,16.8 -16.9,16.8 l -532.1,0 c -9.3,0 -16.9,-7.5 -16.9,-16.8 l 0,-0.1 c 0,-9.3 7.6,-16.8 16.9,-16.8 l 532.1,0 c 9.4,0.1 16.9,7.6 16.9,16.9 l 0,0 z"
         id="path14"
         style="fill:#22a7f0;fill-opacity:1" />
    </g>
  </g>
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
			<defs id="defs17">
        <linearGradient gradientTransform="matrix(.5 0 0-.48276 384.57 547.25)" gradientUnits="userSpaceOnUse" x2="0" y2="3" y1="61" id="a">
            <stop offset="0" stop-color="#19b5fe" id="stop4" />
            <stop offset="1" stop-color="#22a7f0" id="stop2" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" x2="0" y2="524.8" y1="518.04" id="b">
            <stop offset="0" stop-color="#ffffff" id="stop9" />
            <stop offset="1" stop-color="#c8e3fe" id="stop7" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" x2="411.57" y2="531.8" x1="404.57" y1="524.8" id="c">
            <stop id="stop12" stop-color="#383e51" />
            <stop id="stop14" stop-opacity="0" stop-color="#655c6f" offset="1" />
        </linearGradient>
    </defs>
    <g id="g43" transform="translate(-384.57-515.8)">
        <path id="path19" d="m389.57 545.8v-28h15l7 7v21h-7z" fill="url(#a)" />
        <g id="g25" transform="scale(1-1)">
            <rect id="rect21" fill-opacity=".412" height="1" fill="#ffffff" y="-518.8" x="389.57" width="15" />
            <rect id="rect23" fill-opacity=".294" height="1" fill="#2e3132" y="-545.8" x="389.57" width="22" />
        </g>
        <g id="g31" fill-rule="evenodd">
            <path id="path27" d="m411.57 524.8l-7-7v7z" fill="url(#b)" />
            <path id="path29" d="m411.57 531.8l-7-7h7z" fill="url(#c)" opacity=".2" />
        </g>
        <g id="g41" transform="matrix(.01429 0 0 .01429 393.36 526.04)" fill="#ffffff">
            <path id="path33" d="m530.2 118.2c0 17.3-14.1 31.2-31.4 31.2-17.4 0-31.4-14-31.4-31.2v-76.9c0-17.3 14.1-31.3 31.4-31.3 17.4 0 31.4 14 31.4 31.3z" />
            <path id="path35" d="m525.4 662c0 14.2-11.6 25.7-25.9 25.7h-1.4c-14.3 0-25.9-11.5-25.9-25.7v-83.1c0-14.2 11.6-25.8 25.9-25.8h1.4c14.3 0 25.9 11.5 25.9 25.8z" />
            <path id="path37" d="m825.5 906.7c10.4-10.7 13.8-27.1 7.1-41.5l-260-551.2c-.2-1.5-.2-3.1-.2-4.7 0-5.4 2-10.4 5.2-14.3 31-23.3 51-60.3 51-101.9 0-70.6-57.5-127.7-128.5-127.8-72.3 0-128.6 57.2-128.6 127.8 0 41.6 19.9 78.6 50.9 101.9 3.3 3.9 5.3 8.8 5.3 14.3 0 1.6 0 3.2-.2 4.7l-260 551.2c-6.7 14.3-3.4 30.8 7.1 41.5l-41 83.3 64.8-70.2c17.2 4.5 35.6-3.7 43.4-20.2l247.9-525.4c2.3-2.9 5.8-4.7 9.8-4.7.2 0 .6 0 .6 0 .2 0 .4 0 .6 0 4 0 7.5 1.9 9.7 4.7l247.9 525.4c7.7 16.6 26.2 24.7 43.3 20.2l64.8 70.2zm-325.4-640.1c-41 0-73.8-32.9-73.8-73.5 0-40.5 32.9-73.4 73.8-73.5 40.8 0 73.8 32.9 73.8 73.5 0 40.6-33 73.5-73.8 73.5" />
            <path id="path39" d="m781.7 622.9c0 9.3-7.5 16.8-16.9 16.8h-532.1c-9.3 0-16.9-7.5-16.9-16.8v-.1c0-9.3 7.6-16.8 16.9-16.8h532.1c9.4.1 16.9 7.6 16.9 16.9" />
        </g>
    </g>
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
			<defs id="defs17">
        <linearGradient gradientTransform="matrix(1 0 0-1 0 64)" gradientUnits="userSpaceOnUse" x2="0" y2="61" y1="3" id="a">
            <stop id="stop2" stop-color="#22a7f0" />
            <stop id="stop4" stop-color="#19b5fe" offset="1" />
        </linearGradient>
        <linearGradient gradientTransform="matrix(1 0 0-1 0 64)" gradientUnits="userSpaceOnUse" x2="0" y2="47" y1="61" id="b">
            <stop offset="0" stop-color="#ffffff" id="stop9" />
            <stop offset="1" stop-color="#c8e3fe" id="stop7" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" x2="54" y2="31" x1="40" y1="17" id="c">
            <stop id="stop12" stop-color="#383e51" />
            <stop id="stop14" stop-opacity="0" stop-color="#655c6f" offset="1" />
        </linearGradient>
    </defs>
    <path id="path19" d="m10 61v-58h30l14 14v44h-14z" fill="url(#a)" />
    <g id="g25" transform="scale(1-1)">
        <rect id="rect21" fill-opacity=".412" height="1" fill="#ffffff" y="-4" x="10" width="30" />
        <rect id="rect23" fill-opacity=".294" height="1" fill="#2e3132" y="-61" x="10" width="44" />
    </g>
    <g id="g31" fill-rule="evenodd">
        <path id="path27" d="m54 17l-14-14v14z" fill="url(#b)" />
        <path id="path29" d="m40 17l14 14v-14z" fill="url(#c)" opacity=".2" />
    </g>
    <g id="g41" transform="matrix(.0293 0 0 .0293 17.271 17.677)" fill="#ffffff">
        <path id="path33" d="m530.2 118.2c0 17.3-14.1 31.2-31.4 31.2-17.4 0-31.4-14-31.4-31.2v-76.9c0-17.3 14.1-31.3 31.4-31.3 17.4 0 31.4 14 31.4 31.3z" />
        <path id="path35" d="m525.4 662c0 14.2-11.6 25.7-25.9 25.7h-1.4c-14.3 0-25.9-11.5-25.9-25.7v-83.1c0-14.2 11.6-25.8 25.9-25.8h1.4c14.3 0 25.9 11.5 25.9 25.8z" />
        <path id="path37" d="m825.5 906.7c10.4-10.7 13.8-27.1 7.1-41.5l-260-551.2c-.2-1.5-.2-3.1-.2-4.7 0-5.4 2-10.4 5.2-14.3 31-23.3 51-60.3 51-101.9 0-70.6-57.5-127.7-128.5-127.8-72.3 0-128.6 57.2-128.6 127.8 0 41.6 19.9 78.6 50.9 101.9 3.3 3.9 5.3 8.8 5.3 14.3 0 1.6 0 3.2-.2 4.7l-260 551.2c-6.7 14.3-3.4 30.8 7.1 41.5l-41 83.3 64.8-70.2c17.2 4.5 35.6-3.7 43.4-20.2l247.9-525.4c2.3-2.9 5.8-4.7 9.8-4.7.2 0 .6 0 .6 0 .2 0 .4 0 .6 0 4 0 7.5 1.9 9.7 4.7l247.9 525.4c7.7 16.6 26.2 24.7 43.3 20.2l64.8 70.2zm-325.4-640.1c-41 0-73.8-32.9-73.8-73.5 0-40.5 32.9-73.4 73.8-73.5 40.8 0 73.8 32.9 73.8 73.5 0 40.6-33 73.5-73.8 73.5" />
        <path id="path39" d="m781.7 622.9c0 9.3-7.5 16.8-16.9 16.8h-532.1c-9.3 0-16.9-7.5-16.9-16.8v-.1c0-9.3 7.6-16.8 16.9-16.8h532.1c9.4.1 16.9 7.6 16.9 16.9" />
    </g>
		</svg>
	{/if}
