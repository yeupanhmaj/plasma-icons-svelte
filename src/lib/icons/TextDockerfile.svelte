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
			<defs
     id="defs16" />
  
  <path
     style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#22a7f0;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.01634563;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
     d="M 5,3 V 5 H 7 V 3 Z m 3,0 v 2 h 2 V 3 Z M 3,6 V 8 H 5 V 6 Z M 6,6 V 8 H 8 V 6 Z m 3,0 v 2 h 2 V 6 Z"
     id="rect40" />
  <path
     style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#22a7f0;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.01365246;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
     d="M 12.429031,6.2332798 C 11.89767,6.5974512 11.770714,7.25677 11.936375,7.87928 12.103873,8.5013305 12.527397,8.9500111 13.169652,9 c 0.21463,0.6070664 0.788404,1.013776 1.432304,1.014678 C 15.245848,10.013843 15.819622,9.6070664 16.034253,9 15.819622,8.3929252 15.245848,7.9878523 14.601956,7.9869503 14.294773,7.9877855 13.995032,8.0815825 13.742248,8.2561135 13.844965,7.966203 13.857619,7.6511185 13.778163,7.3539999 13.610907,6.7326008 13.070559,6.2840622 12.429056,6.2332798 Z M 13.169652,9 H 1 c 0,3.360657 2.7241649,5.071772 6.0848299,5.071772 3.3606571,0 6.0848221,-1.711115 6.0848221,-5.071772 z M 3.5213338,9.674779 c 0.4612882,0 0.8352363,0.373948 0.8352363,0.835236 0,0.461288 -0.373948,0.835237 -0.8352363,0.835237 -0.4612882,0 -0.8352362,-0.373949 -0.8352362,-0.835237 0,-0.461288 0.373948,-0.835236 0.8352362,-0.835236 z"
     id="rect40-3" />
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
    <path
       style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#22a7f0;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.01634563;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
       d="m 335,539.3622 v 2 h 2 v -2 z m 3,0 v 2 h 2 v -2 z m 4.68359,2.67383 c -0.63618,0.43601 -0.78818,1.22539 -0.58984,1.9707 0.20054,0.74476 0.70761,1.28195 1.47656,1.3418 0.25697,0.72682 0.94393,1.21376 1.71485,1.21484 0.77091,-10e-4 1.45787,-0.48802 1.71484,-1.21484 -0.25697,-0.72683 -0.94393,-1.21181 -1.71484,-1.21289 -0.36778,0.001 -0.72665,0.1133 -1.0293,0.32226 0.12298,-0.3471 0.13813,-0.72434 0.043,-1.08007 -0.20025,-0.74398 -0.84719,-1.281 -1.61524,-1.3418 z m 0.88672,3.3125 H 329 c 0,4.0236 3.26155,6.07226 7.28516,6.07226 4.0236,0 7.28515,-2.04866 7.28515,-6.07226 z M 331,542.3622 v 2 h 2 v -2 z m 3,0 v 2 h 2 v -2 z m 3,0 v 2 h 2 v -2 z m 3,0 v 2 h 2 v -2 z m -8,4 a 1,1 0 0 1 1,1 1,1 0 0 1 -1,1 1,1 0 0 1 -1,-1 1,1 0 0 1 1,-1 z"
       id="rect40" />
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
			<defs
     id="defs4">
    <linearGradient
       id="a"
       y1="61"
       y2="3"
       x2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.5,0,0,-0.48276,0,31.45)">
      <stop
         stop-color="#22a7f0"
         id="stop7" />
      <stop
         offset="1"
         stop-color="#19b5fe"
         id="stop9" />
    </linearGradient>
    <linearGradient
       id="b"
       y1="518.04"
       y2="524.8"
       x2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-384.57,-515.8)">
      <stop
         stop-color="#c8e3fe"
         id="stop12" />
      <stop
         offset="1"
         stop-color="#ffffff"
         id="stop14" />
    </linearGradient>
    <linearGradient
       id="c"
       y1="524.8"
       x1="404.57"
       y2="531.8"
       x2="411.57"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-384.57,-515.8)">
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
       id="linearGradient6251">
      <stop
         style="stop-color:#ffffff;stop-opacity:0"
         offset="0"
         id="stop6253" />
      <stop
         style="stop-color:#ffffff;stop-opacity:0.2"
         offset="1"
         id="stop6255" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient6251"
       id="linearGradient4232"
       x1="15.033898"
       y1="30.101694"
       x2="14.932203"
       y2="2.0338984"
       gradientUnits="userSpaceOnUse" />
  </defs>
  <path
     style="fill:#47cffb;fill-opacity:1"
     id="path23"
     d="m 5,30 0,-28 15,0 7,7 0,21 -7,0 z" />
  <rect
     width="15"
     x="5.0000072"
     y="-2.9999878"
     height="1"
     id="rect27"
     style="fill:#ffffff;fill-opacity:0.41199999"
     transform="scale(1,-1)" />
  <rect
     width="22"
     x="5.0000072"
     y="-29.999989"
     height="1"
     id="rect29"
     style="fill:#2e3132;fill-opacity:0.294"
     transform="scale(1,-1)" />
  <path
     d="M 27,9 20,2 20,9 Z"
     id="path33"
     style="fill:#000000;fill-rule:evenodd;fill-opacity:1;opacity:0.4" />
  <path
     d="M 27,16 20,9 27,9 Z"
     id="path35"
     style="opacity:0.2;fill:url(#c);fill-rule:evenodd" />
  <path
     style="fill:url(#linearGradient4232);fill-opacity:1"
     id="path23-3"
     d="m 5,30 0,-28 15,0 7,7 0,21 -7,0 z" />
  <g
     id="layer2"
     transform="matrix(3.7795276,0,0,3.7795276,8,8.4453125)"
     style="opacity:0.4;vector-effect:none;fill:#000000;fill-opacity:1;stroke-width:0.13229166;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1">
    <path
       id="rect40"
       transform="scale(0.26458333)"
       d="M 6.0097656,3.9882812 V 5.546875 H 7.5683594 V 3.9882812 Z m 2,0 V 5.546875 H 9.5683594 V 3.9882812 Z M 12.269531,5.2714844 C 11.745595,5.6305661 11.504625,6.2807178 11.667969,6.8945312 11.833126,7.5078877 12.366712,7.950717 13,8 c 0.211634,0.5985921 0.777207,0.999109 1.412109,1 0.634902,-8.906e-4 1.200476,-0.4014075 1.41211,-1 -0.211634,-0.5985925 -0.777208,-0.9991094 -1.41211,-1 -0.30289,9.283e-4 -0.598403,0.093532 -0.847656,0.265625 0.101286,-0.2858588 0.113539,-0.5957052 0.03516,-0.8886719 C 13.43469,5.7642304 12.90208,5.321559 12.269531,5.2714844 Z M 13,8 H 1 c -4.2e-7,3.313709 2.6862912,5 6,5 3.313709,0 6,-1.686291 6,-5 z M 3.4414062,5.9960938 V 7.5546875 H 5 V 5.9960938 Z m 2,0 V 7.5546875 H 7 V 5.9960938 Z m 2,0 V 7.5546875 H 9 V 5.9960938 Z m 2,0 V 7.5546875 H 11 V 5.9960938 Z M 3.5,9 A 0.49999997,0.49999997 0 0 1 4,9.5 0.49999997,0.49999997 0 0 1 3.5,10 0.49999997,0.49999997 0 0 1 3,9.5 0.49999997,0.49999997 0 0 1 3.5,9 Z"
       style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
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
       y1="3"
       y2="61"
       x2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1 0 0-1 0 64)">
      <stop
         stop-color="#22a7f0"
         id="stop7" />
      <stop
         offset="1"
         stop-color="#19b5fe"
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
         stop-color="#c8e3fe"
         id="stop12" />
      <stop
         offset="1"
         stop-color="#ffffff"
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
       gradientTransform="translate(46 296.36)"
       x2="54"
       gradientUnits="userSpaceOnUse"
       y2="31"
       x1="40"
       y1="17"
       id="a-3">
      <stop
         id="stop4180"
         stop-color="#060606" />
      <stop
         id="stop4182"
         stop-opacity="0"
         offset="1" />
    </linearGradient>
    <linearGradient
       gradientTransform="translate(-2-36)"
       x2="0"
       gradientUnits="userSpaceOnUse"
       y2="336.36"
       y1="392.36"
       id="b-6">
      <stop
         id="stop4185"
         stop-opacity="0"
         stop-color="#ffffff" />
      <stop
         id="stop4187"
         stop-opacity=".2"
         stop-color="#ffffff"
         offset="1" />
    </linearGradient>
    <path
       d="m56 357.36v-58h30l14 14v44h-14z"
       id="c-7" />
    <linearGradient
       xlink:href="#linearGradient6251"
       id="linearGradient7022"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-48,-332.3622)"
       x1="58"
       y1="392.36221"
       x2="58"
       y2="336.36221" />
    <linearGradient
       id="linearGradient6251">
      <stop
         style="stop-color:#ffffff;stop-opacity:0"
         offset="0"
         id="stop6253" />
      <stop
         style="stop-color:#ffffff;stop-opacity:0.2"
         offset="1"
         id="stop6255" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient9654"
       id="linearGradient7020"
       gradientUnits="userSpaceOnUse"
       x1="40"
       y1="17"
       x2="54"
       y2="31" />
    <linearGradient
       id="linearGradient9654">
      <stop
         style="stop-color:#060606;stop-opacity:1"
         offset="0"
         id="stop9656" />
      <stop
         style="stop-color:#000000;stop-opacity:0"
         offset="1"
         id="stop9658" />
    </linearGradient>
  </defs>
  <path
     d="M 10,61 V 3.0000007 H 40 L 54,17 V 47 61 H 40 Z"
     id="path6938"
     style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#47cffb;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
  <rect
     transform="scale(1,-1)"
     id="rect6940"
     style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.5;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
     height="1"
     y="-3.9999731"
     x="10"
     width="30" />
  <rect
     transform="scale(1,-1)"
     id="rect6942"
     style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:0.25;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"
     height="1"
     y="-60.999969"
     x="10"
     width="44" />
  <path
     d="M 54,17 40,3.0000007 V 17 Z"
     id="path6944"
     style="opacity:0.4;fill:#000000;fill-opacity:1;fill-rule:evenodd" />
  <path
     style="opacity:0.2;fill:url(#linearGradient7020);fill-rule:evenodd"
     id="path6972"
     d="M 40,17 54,30.99999 V 17 Z" />
  <g
     id="layer2"
     transform="matrix(7.5590552,0,0,7.5590552,16,17)"
     style="opacity:0.4;vector-effect:none;fill:#000000;fill-opacity:1;stroke-width:0.13229166;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1">
    <path
       id="rect40"
       transform="scale(0.26458333)"
       d="M 6.0097656,3.9882812 V 5.546875 H 7.5683594 V 3.9882812 Z m 2,0 V 5.546875 H 9.5683594 V 3.9882812 Z M 12.269531,5.2714844 C 11.745595,5.6305661 11.504625,6.2807178 11.667969,6.8945312 11.833126,7.5078877 12.366712,7.950717 13,8 c 0.211634,0.5985921 0.777207,0.999109 1.412109,1 0.634902,-8.906e-4 1.200476,-0.4014075 1.41211,-1 -0.211634,-0.5985925 -0.777208,-0.9991094 -1.41211,-1 -0.30289,9.283e-4 -0.598403,0.093532 -0.847656,0.265625 0.101286,-0.2858588 0.113539,-0.5957052 0.03516,-0.8886719 C 13.43469,5.7642304 12.90208,5.321559 12.269531,5.2714844 Z M 13,8 H 1 c -4.2e-7,3.313709 2.6862912,5 6,5 3.313709,0 6,-1.686291 6,-5 z M 3.4414062,5.9960938 V 7.5546875 H 5 V 5.9960938 Z m 2,0 V 7.5546875 H 7 V 5.9960938 Z m 2,0 V 7.5546875 H 9 V 5.9960938 Z m 2,0 V 7.5546875 H 11 V 5.9960938 Z M 3.5,9 A 0.49999997,0.49999997 0 0 1 4,9.5 0.49999997,0.49999997 0 0 1 3.5,10 0.49999997,0.49999997 0 0 1 3,9.5 0.49999997,0.49999997 0 0 1 3.5,9 Z"
       style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;vector-effect:none;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.5;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" />
  </g>
  <path
     d="M 10,61 V 3.0000007 H 40 L 54,17 V 47 61 H 40 Z"
     id="path6974"
     style="fill:url(#linearGradient7022);fill-opacity:1" />
		</svg>
	{/if}
