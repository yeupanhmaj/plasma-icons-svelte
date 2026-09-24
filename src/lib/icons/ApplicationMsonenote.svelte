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
			<path fill="#94408b" d="m3 2c-.554 0-1 .446-1 1v10c0 .554.446 1 1 1h8c.554 0 1-.446 1-1h1c.554 0 1-.446 1-1v-2c0-.186-.064-.351-.152-.5.088-.149.152-.314.152-.5v-2c0-.186-.064-.351-.152-.5.088-.149.152-.314.152-.5v-2c0-.554-.446-1-1-1h-1c0-.554-.446-1-1-1zm0 1h8v10h-8zm1 1v2h6v-2zm8 0h1v2h-1zm-8 3v1h6v-1zm8 0h1v2h-1zm-8 2v1h6v-1zm8 1h1v2h-1zm-8 1v1h6v-1z"/>
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
			<defs id="defs3871"/>
  
  <g id="layer1" transform="matrix(1 0 0 1 -326 -534.3622)">
    <path style="opacity:1;fill:#94408b;fill-opacity:1;stroke:none;stroke-width:10;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 4 3 C 3.4459904 3 3 3.4459904 3 4 L 3 18 C 3 18.55401 3.4459904 19 4 19 L 15 19 C 15.55401 19 16 18.55401 16 18 L 16 17 L 18 17 C 18.55401 17 19 16.55401 19 16 L 19 13 C 19 12.81363 18.935732 12.649055 18.847656 12.5 C 18.935732 12.350945 19 12.18637 19 12 L 19 9 C 19 8.8136299 18.935732 8.6490553 18.847656 8.5 C 18.935732 8.3509447 19 8.1863701 19 8 L 19 5 C 19 4.44599 18.55401 4 18 4 L 16 4 C 16 3.4459904 15.55401 3 15 3 L 4 3 z M 4 4 L 15 4 L 15 18 L 4 18 L 4 4 z M 5 5 L 5 8 L 14 8 L 14 5 L 5 5 z M 16 5 L 18 5 L 18 8 L 16 8 L 16 5 z M 16 9 L 18 9 L 18 12 L 16 12 L 16 9 z M 5 10 L 5 11 L 14 11 L 14 10 L 5 10 z M 5 12 L 5 13 L 14 13 L 14 12 L 5 12 z M 16 13 L 18 13 L 18 16 L 16 16 L 16 13 z M 5 14 L 5 15 L 14 15 L 14 14 L 5 14 z M 5 16 L 5 17 L 14 17 L 14 16 L 5 16 z " transform="translate(326,534.3622)" id="rect4153"/>
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
            <stop offset="0" stop-color="#9b4792" id="stop4" />
            <stop offset="1" stop-color="#913d88" id="stop2" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" x2="0" y2="524.8" y1="518.04" id="b">
            <stop offset="0" stop-color="#e7cbe4" id="stop9" />
            <stop offset="1" stop-color="#d5a5d0" id="stop7" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" x2="411.57" y2="531.8" x1="404.57" y1="524.8" id="c">
            <stop id="stop12" stop-color="#383e51" />
            <stop id="stop14" stop-opacity="0" stop-color="#655c6f" offset="1" />
        </linearGradient>
    </defs>
    <g id="g35" transform="translate(-384.57-515.8)">
        <path id="path19" d="m389.57 545.8v-28h15l7 7v21h-7z" fill="url(#a)" />
        <g id="g25" transform="scale(1-1)">
            <rect id="rect21" fill-opacity=".412" height="1" fill="#ffffff" y="-518.8" x="389.57" width="15" />
            <rect id="rect23" fill-opacity=".294" height="1" fill="#2e3132" y="-545.8" x="389.57" width="22" />
        </g>
        <g id="g31" fill-rule="evenodd">
            <path id="path27" d="m411.57 524.8l-7-7v7z" fill="url(#b)" />
            <path id="path29" d="m411.57 531.8l-7-7h7z" fill="url(#c)" opacity=".2" />
        </g>
        <path id="path33" d="m395.57 526.8c-.554 0-1 .446-1 1v10c0 .554.446 1 1 1h8c.554 0 1-.446 1-1h1c.554 0 1-.446 1-1v-2c0-.186-.064-.351-.152-.5.088-.149.152-.314.152-.5v-2c0-.186-.064-.351-.152-.5.088-.149.152-.314.152-.5v-2c0-.554-.446-1-1-1h-1c0-.554-.446-1-1-1zm0 1h8v10h-8zm1 1v2h6v-2zm8 0h1v2h-1zm-8 3v1h6v-1zm8 0h1v2h-1zm-8 2v1h6v-1zm8 1h1v2h-1zm-8 1v1h6v-1z" fill="#ffffff" opacity=".75" />
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
			<defs
     id="defs4">
    <linearGradient
       id="a"
       y1="61"
       y2="3"
       x2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1 0 0-1 0 64)">
      <stop
         stop-color="#913d88"
         id="stop7" />
      <stop
         offset="1"
         stop-color="#9b4792"
         id="stop9" />
    </linearGradient>
    <linearGradient
       id="b"
       y1="61"
       y2="47"
       x2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1 0 0-1 0 64)">
      <stop
         stop-color="#d5a5d0"
         id="stop12" />
      <stop
         offset="1"
         stop-color="#e7cbe4"
         id="stop14" />
    </linearGradient>
    <linearGradient
       id="c"
       y1="17"
       x1="40"
       y2="31"
       x2="54"
       gradientUnits="userSpaceOnUse">
      <stop
         stop-color="#383e51"
         id="stop17" />
      <stop
         offset="1"
         stop-color="#655c6f"
         stop-opacity="0"
         id="stop19" />
    </linearGradient>
    <linearGradient
       gradientTransform="matrix(1 0 0-1 0 64)"
       gradientUnits="userSpaceOnUse"
       x2="0"
       y2="3"
       y1="61"
       id="a-7">
      <stop
         id="stop7-5"
         stop-color="#3a539b" />
      <stop
         id="stop9-3"
         stop-color="#3f5aa9"
         offset="1" />
    </linearGradient>
    <linearGradient
       gradientTransform="matrix(1 0 0-1 0 64)"
       gradientUnits="userSpaceOnUse"
       x2="0"
       y2="47"
       y1="61"
       id="b-5">
      <stop
         id="stop12-6"
         stop-color="#97aad8" />
      <stop
         id="stop14-2"
         stop-color="#c1cae7"
         offset="1" />
    </linearGradient>
    <path
       d="m40 17l14 14v-14z"
       id="d"
       fill-rule="evenodd"
       fill="url(#c)"
       opacity=".2" />
    <linearGradient
       id="a-3"
       y1="392.36"
       y2="336.36"
       gradientUnits="userSpaceOnUse"
       x2="0"
       gradientTransform="translate(-48,-332.36)">
      <stop
         stop-color="#ffffff"
         stop-opacity="0"
         id="stop4173" />
      <stop
         offset="1"
         stop-color="#ffffff"
         stop-opacity=".2"
         id="stop4175" />
    </linearGradient>
    <linearGradient
       id="b-6"
       y1="17"
       x1="40"
       y2="31"
       gradientUnits="userSpaceOnUse"
       x2="54">
      <stop
         stop-color="#060606"
         id="stop4178" />
      <stop
         offset="1"
         stop-opacity="0"
         id="stop4180" />
    </linearGradient>
    <path
       id="c-7"
       d="m10 61v-58h30l14 14v44h-14z" />
  </defs>
  <g
     id="g4242">
    <use
       height="100%"
       width="100%"
       y="0"
       x="0"
       style="fill:#913d88;fill-opacity:1"
       xlink:href="#c-7"
       id="use4183" />
    <rect
       id="rect4187"
       height="1"
       width="30"
       y="-4"
       x="10"
       style="color:#000000;opacity:0.5;color-interpolation:sRGB;color-interpolation-filters:linearRGB;fill:#ffffff;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto"
       transform="scale(1,-1)" />
    <rect
       id="rect4189"
       height="1"
       width="44"
       y="-61"
       x="10"
       style="color:#000000;opacity:0.25;color-interpolation:sRGB;color-interpolation-filters:linearRGB;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto"
       transform="scale(1,-1)" />
    <path
       id="path4193"
       d="M 54,17 40,3 40,17 Z"
       style="opacity:0.5;fill:#ffffff;fill-rule:evenodd" />
    <path
       style="opacity:0.2;fill:url(#b-6);fill-rule:evenodd"
       id="path4195"
       d="M 40,17 54,31 54,17 Z" />
    <path
       style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.75;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
       id="path35"
       d="m 22,22 c -0.554,0 -1,0.446 -1,1 l 0,20 c 0,0.554 0.446,1 1,1 l 18,0 c 0.554,0 1,-0.446 1,-1 l 0,-1 1,0 c 0.554,0 1,-0.446 1,-1 l 0,-4 C 43,36.814 42.936,36.649 42.848,36.5 42.936,36.351 43,36.186 43,36 l 0,-4 C 43,31.814 42.936,31.649 42.848,31.5 42.936,31.351 43,31.186 43,31 l 0,-4 c 0,-0.554 -0.446,-1 -1,-1 l -1,0 0,-3 c 0,-0.554 -0.446,-1 -1,-1 z m 0,1 18,0 0,20 -18,0 z m 1,2 0,1 7,0 0,-1 z m 9,0 0,1 7,0 0,-1 z m 9,2 1,0 0,4 -1,0 z m -18,1 0,1 7,0 0,-1 z m 9,0 0,1 7,0 0,-1 z m -9,3 0,1 7,0 0,-1 z m 9,0 0,1 7,0 0,-1 z m 9,1 1,0 0,4 -1,0 z m -18,2 0,1 7,0 0,-1 z m 9,0 0,1 7,0 0,-1 z m -9,3 0,1 7,0 0,-1 z m 9,0 0,1 7,0 0,-1 z m 9,0 1,0 0,4 -1,0 z m -18,3 0,1 7,0 0,-1 z m 9,0 0,1 7,0 0,-1 z" />
    <use
       height="100%"
       width="100%"
       y="0"
       x="0"
       xlink:href="#c-7"
       id="use4199"
       style="fill:url(#a-3)" />
  </g>
		</svg>
	{/if}
