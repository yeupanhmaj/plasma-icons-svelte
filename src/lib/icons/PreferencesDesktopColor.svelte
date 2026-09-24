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
			<defs>
        <linearGradient id="linearGradient4149" x2="0" y1="545.79797" y2="517.79797" gradientTransform="matrix(.64285714 0 0 .64285714 138.06132 184.92822)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#1d1e1e" offset="0"/>
            <stop stop-color="#44484c" offset="1"/>
        </linearGradient>
        <linearGradient id="linearGradient4274" x1="8" x2="24.00001" y1="23.999973" y2="8" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient4288"/>
        <linearGradient id="linearGradient4288">
            <stop stop-color="#e81877" offset="0"/>
            <stop stop-color="#dd1d8c" offset=".312499"/>
            <stop stop-color="#6d57b1" offset=".562499"/>
            <stop stop-color="#2a78c1" offset=".75"/>
            <stop stop-color="#018dcb" offset="1"/>
        </linearGradient>
        <clipPath id="clipPath4534">
            <rect x="8.0000095" y="8" width="31.999989" height="31.999971" rx="15.999986"/>
        </clipPath>
        <linearGradient id="linearGradient4278" x1="8" x2="24.00001" y1="24.000031" y2="8" gradientTransform="matrix(1,0,0,-1,384.57143,547.798)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient4300"/>
        <linearGradient id="linearGradient4300">
            <stop stop-color="#e51561" offset="0"/>
            <stop stop-color="#e4156c" offset=".312499"/>
            <stop stop-color="#e71e2c" offset=".562499"/>
            <stop stop-color="#e8301e" offset=".75"/>
            <stop stop-color="#e6320e" offset="1"/>
        </linearGradient>
        <clipPath id="clipPath4584">
            <rect x="392.57144" y="507.798" width="31.999989" height="31.999971" rx="15.999986"/>
        </clipPath>
        <linearGradient id="linearGradient4284" x1="8" x2="24.00001" y1="23.999973" y2="8" gradientTransform="matrix(-1,0,0,1,432.57143,499.798)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient4328"/>
        <linearGradient id="linearGradient4328">
            <stop stop-color="#bec900" offset="0"/>
            <stop stop-color="#9ec80a" offset=".312499"/>
            <stop stop-color="#71b93d" offset=".562499"/>
            <stop stop-color="#35a48f" offset=".75"/>
            <stop stop-color="#018fca" offset="1"/>
        </linearGradient>
        <clipPath id="clipPath4550">
            <rect x="392.57144" y="507.798" width="31.999989" height="31.999971" rx="15.999986"/>
        </clipPath>
        <linearGradient id="linearGradient4286" x1="8" x2="24.00001" y1="24" y2="8" gradientTransform="rotate(180 216.28571 273.899)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient4316"/>
        <linearGradient id="linearGradient4316">
            <stop stop-color="#c1cc00" offset="0"/>
            <stop stop-color="#dfcd00" offset=".312499"/>
            <stop stop-color="#f0cc00" offset=".562499"/>
            <stop stop-color="#fd8c08" offset=".75"/>
            <stop stop-color="#f25c13" offset="1"/>
        </linearGradient>
        <clipPath id="clipPath4568">
            <rect x="392.57144" y="507.798" width="31.999989" height="31.999971" rx="15.999986"/>
        </clipPath>
        <clipPath id="clipPath4528">
            <rect x="8.0000095" y="8" width="31.999989" height="31.999971" rx="15.999986"/>
        </clipPath>
        <filter id="filter4390" x="-.060000001" y="-.060000001" width="1.12" height="1.12" color-interpolation-filters="sRGB">
            <feGaussianBlur stdDeviation="0.4"/>
        </filter>
        <clipPath id="clipPath4578">
            <rect x="392.57144" y="507.798" width="31.999989" height="31.999971" rx="15.999986"/>
        </clipPath>
        <clipPath id="clipPath4562">
            <rect x="392.57144" y="507.798" width="31.999989" height="31.999971" rx="15.999986"/>
        </clipPath>
        <clipPath id="clipPath4544">
            <rect x="392.57144" y="507.798" width="31.999989" height="31.999971" rx="15.999986"/>
        </clipPath>
        <clipPath id="clipPath4528-1">
            <rect x="8.0000095" y="8" width="31.999989" height="31.999971" rx="15.999986"/>
        </clipPath>
        <clipPath id="clipPath4578-8">
            <rect x="392.57144" y="507.798" width="31.999989" height="31.999971" rx="15.999986"/>
        </clipPath>
        <clipPath id="clipPath4562-8">
            <rect x="392.57144" y="507.798" width="31.999989" height="31.999971" rx="15.999986"/>
        </clipPath>
        <clipPath id="clipPath4544-1">
            <rect x="392.57144" y="507.798" width="31.999989" height="31.999971" rx="15.999986"/>
        </clipPath>
        <linearGradient id="linearGradient4314" x2="0" y1="543.79797" y2="503.798" gradientTransform="matrix(.12857147 0 0 .12857152 343.04079 -594.14351)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2a2c2f" offset="0"/>
            <stop stop-color="#424649" offset="1"/>
        </linearGradient>
        <linearGradient id="linearGradient4917" x2="0" y1="524.79797" y2="522.79797" gradientTransform="matrix(1.0000033,0,0,1.0000033,-13.001377,2.9982667)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#989a9b" offset="0"/>
            <stop stop-color="#f6f6f7" offset="1"/>
        </linearGradient>
        <linearGradient id="linearGradient4499" x1="393.57144" x2="407.57147" y1="524.79797" y2="538.79797" gradientTransform="matrix(.64285714 0 0 .64285714 138.06123 184.92785)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#292c2f" offset="0"/>
            <stop stop-opacity="0" offset="1"/>
        </linearGradient>
        <linearGradient id="linearGradient923" x1="8" x2="24.00001" y1="24" y2="8" gradientTransform="rotate(180,216.28571,273.899)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient4316"/>
    </defs>
    <g transform="translate(-384.57143,-515.798)">
        <rect x="386.57144" y="517.79797" width="18" height="18" rx="8.9999962" fill="url(#linearGradient4149)" stroke-width=".642857"/>
        <g transform="matrix(.42651708 .11428488 -.11428491 .42651696 281.17094 256.69573)" stroke-opacity=".550265" stroke-width="2.8">
            <path transform="translate(384.57143,499.798)" d="m24 8c-8.863992 0-16 7.136008-16 16h16z" clip-path="url(#clipPath4534)" fill="url(#linearGradient4274)"/>
            <path d="m408.57143 539.798c-8.86399 0-16-7.13601-16-16h16z" clip-path="url(#clipPath4584)" fill="url(#linearGradient4278)"/>
            <path d="m408.57143 507.798c8.86399 0 16 7.13601 16 16h-16z" clip-path="url(#clipPath4550)" fill="url(#linearGradient4284)"/>
            <path d="m408.57143 539.798c8.86399 0 16-7.13601 16-16h-16z" clip-path="url(#clipPath4568)" fill="url(#linearGradient923)"/>
        </g>
        <g transform="matrix(.44156297 0 0 .44156284 215.16141 295.50826)" opacity=".7" stroke-opacity=".550265" stroke-width="2.8">
            <path transform="translate(384.57143,499.798)" d="m24 8c-8.863992 0-16 7.136008-16 16h16z" clip-path="url(#clipPath4528)" fill="url(#linearGradient4274)" filter="url(#filter4390)" opacity="1"/>
            <path d="m408.57143 539.798c-8.86399 0-16-7.13601-16-16h16z" clip-path="url(#clipPath4578)" fill="url(#linearGradient4278)" filter="url(#filter4390)" opacity="1"/>
            <path d="m408.57143 539.798c8.86399 0 16-7.13601 16-16h-16z" clip-path="url(#clipPath4562)" fill="url(#linearGradient923)" filter="url(#filter4390)" opacity="1"/>
            <path d="m408.57143 507.798c8.86399 0 16 7.13601 16 16h-16z" clip-path="url(#clipPath4544)" fill="url(#linearGradient4284)" filter="url(#filter4390)" opacity="1"/>
        </g>
        <g stroke-opacity=".550265" stroke-width="2.8">
            <path transform="matrix(.31223216 .31223208 -.31223216 .31223208 395.57143 511.81086)" d="m24 8c-8.863992 0-16 7.136008-16 16h16z" clip-path="url(#clipPath4528)" fill="url(#linearGradient4274)" opacity=".35"/>
            <path transform="matrix(.31223216 .31223208 -.31223216 .31223208 431.54888 235.68235)" d="m408.57143 539.798c-8.86399 0-16-7.13601-16-16h16z" clip-path="url(#clipPath4578)" fill="url(#linearGradient4278)" opacity=".35"/>
            <path transform="matrix(.31223216 .31223208 -.31223216 .31223208 431.54888 235.68235)" d="m408.57143 539.798c8.86399 0 16-7.13601 16-16h-16z" clip-path="url(#clipPath4562)" fill="url(#linearGradient923)" opacity=".35"/>
            <path transform="matrix(.31223216 .31223208 -.31223216 .31223208 431.54888 235.68235)" d="m408.57143 507.798c8.86399 0 16 7.13601 16 16h-16z" clip-path="url(#clipPath4544)" fill="url(#linearGradient4284)" opacity=".35"/>
        </g>
        <g transform="matrix(.11428491 .42651696 -.42651708 .11428488 572.28667 292.67317)" stroke-opacity=".550265" stroke-width="2.8">
            <path transform="translate(384.57142,499.79801)" d="m24 8c-8.863992 0-16 7.136008-16 16h16z" clip-path="url(#clipPath4528-1)" fill="url(#linearGradient4274)" opacity=".3"/>
            <path transform="translate(-6e-6)" d="m408.57143 539.798c-8.86399 0-16-7.13601-16-16h16z" clip-path="url(#clipPath4578-8)" fill="url(#linearGradient4278)" opacity=".3"/>
            <path transform="translate(-6e-6)" d="m408.57143 539.798c8.86399 0 16-7.13601 16-16h-16z" clip-path="url(#clipPath4562-8)" fill="url(#linearGradient4286)" opacity=".3"/>
            <path transform="translate(-6e-6)" d="m408.57143 507.798c8.86399 0 16 7.13601 16 16h-16z" clip-path="url(#clipPath4544-1)" fill="url(#linearGradient4284)" opacity=".3"/>
        </g>
        <path d="m397.30665 524.86942-3.43904 3.85714 5.99163 5.99163c1.544-0.83455 2.8118-2.10729 3.64244-3.65374z" fill="url(#linearGradient4499)" fill-rule="evenodd" opacity=".2" stroke-width=".642857"/>
        <rect transform="scale(1,-1)" x="393" y="-529.36938" width="5.1428571" height="5.1428571" rx="2.5714285" fill="url(#linearGradient4314)" stroke-opacity=".550265" stroke-width="1.8"/>
        <path d="m394.57142 527.79802 1.00001-2.00002 0.99999 2.00002z" fill="url(#linearGradient4917)" fill-rule="evenodd"/>
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
			<defs id="defs5455">
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4159" id="linearGradient4149" y1="545.79797" y2="517.79797" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 0.000145 0.000574)"/>
  <linearGradient inkscape:collect="always" id="linearGradient4159">
   <stop style="stop-color:#1d1e1e" id="stop4161"/>
   <stop offset="1" style="stop-color:#44484c" id="stop4163"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4288" id="linearGradient4274" y1="23.999973" x1="8" y2="8" x2="24.00001" gradientUnits="userSpaceOnUse"/>
  <linearGradient inkscape:collect="always" id="linearGradient4288">
   <stop style="stop-color:#e81877" id="stop4290"/>
   <stop offset="0.312499" style="stop-color:#dd1d8c" id="stop4294-9"/>
   <stop offset="0.562499" style="stop-color:#6d57b1" id="stop4296"/>
   <stop offset="0.75" style="stop-color:#2a78c1" id="stop4298"/>
   <stop offset="1" style="stop-color:#018dcb" id="stop4292-2"/>
  </linearGradient>
  <clipPath id="clipPath4534">
   <rect width="31.999989" x="8.00001" y="8" rx="15.999986" height="31.999971" id="rect4536"/>
  </clipPath>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4300" id="linearGradient4278" y1="24.00003" x1="8" y2="8" gradientUnits="userSpaceOnUse" x2="24.00001" gradientTransform="matrix(1 0 0 -1 384.57143 547.798)"/>
  <linearGradient inkscape:collect="always" id="linearGradient4300">
   <stop style="stop-color:#e51561" id="stop4302"/>
   <stop offset="0.312499" style="stop-color:#e4156c" id="stop4304"/>
   <stop offset="0.562499" style="stop-color:#e71e2c" id="stop4306"/>
   <stop offset="0.75" style="stop-color:#e8301e" id="stop4308"/>
   <stop offset="1" style="stop-color:#e6320e" id="stop4310"/>
  </linearGradient>
  <clipPath id="clipPath4584">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect4586"/>
  </clipPath>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4328" id="linearGradient4284" y1="23.999973" x1="8" y2="8" gradientUnits="userSpaceOnUse" x2="24.00001" gradientTransform="matrix(-1 0 0 1 432.57143 499.798)"/>
  <linearGradient inkscape:collect="always" id="linearGradient4328">
   <stop style="stop-color:#bec900" id="stop4330"/>
   <stop offset="0.312499" style="stop-color:#9ec80a" id="stop4332"/>
   <stop offset="0.562499" style="stop-color:#71b93d" id="stop4334"/>
   <stop offset="0.75" style="stop-color:#35a48f" id="stop4336"/>
   <stop offset="1" style="stop-color:#018fca" id="stop4338"/>
  </linearGradient>
  <clipPath id="clipPath4550">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect4552"/>
  </clipPath>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4316" id="linearGradient4286" y1="24" x1="8" y2="8" gradientUnits="userSpaceOnUse" x2="24.00001" gradientTransform="matrix(-1 0 0 -1 432.57143 547.798)"/>
  <linearGradient inkscape:collect="always" id="linearGradient4316">
   <stop style="stop-color:#c1cc00" id="stop4318"/>
   <stop offset="0.312499" style="stop-color:#dfcd00" id="stop4320"/>
   <stop offset="0.562499" style="stop-color:#f0cc00" id="stop4322"/>
   <stop offset="0.75" style="stop-color:#fd8c08" id="stop4324"/>
   <stop offset="1" style="stop-color:#f25c13" id="stop4326"/>
  </linearGradient>
  <clipPath id="clipPath4568">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect4570"/>
  </clipPath>
  <clipPath id="clipPath4528">
   <rect width="31.999989" x="8.00001" y="8" rx="15.999986" height="31.999971" id="rect4530"/>
  </clipPath>
  <filter width="1.12" x="-0.06" y="-0.06" inkscape:collect="always" height="1.12" style="color-interpolation-filters:sRGB" id="filter4390">
   <feGaussianBlur inkscape:collect="always" stdDeviation="0.4" id="feGaussianBlur4392"/>
  </filter>
  <clipPath id="clipPath4578">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect4580"/>
  </clipPath>
  <clipPath id="clipPath4562">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect4564"/>
  </clipPath>
  <clipPath id="clipPath4544">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect4546"/>
  </clipPath>
  <clipPath id="clipPath4528-1">
   <rect width="31.999989" x="8.00001" y="8" rx="15.999986" height="31.999971" id="rect4530-7"/>
  </clipPath>
  <clipPath id="clipPath4578-8">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect4580-7"/>
  </clipPath>
  <clipPath id="clipPath4562-8">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect4564-8"/>
  </clipPath>
  <clipPath id="clipPath4544-1">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect4546-1"/>
  </clipPath>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4271" id="linearGradient4314" y1="543.79797" y2="503.798" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(0.20000006 0 0 0.20000014 318.8571 -636.5577)"/>
  <linearGradient inkscape:collect="always" id="linearGradient4271">
   <stop style="stop-color:#2a2c2f" id="stop4273"/>
   <stop offset="1" style="stop-color:#424649" id="stop4275"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4303" id="linearGradient4917" y1="524.79797" y2="522.79797" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 -8 8)"/>
  <linearGradient inkscape:collect="always" id="linearGradient4303">
   <stop style="stop-color:#989a9b" id="stop4305"/>
   <stop offset="1" style="stop-color:#f6f6f7" id="stop4307"/>
  </linearGradient>
  <linearGradient inkscape:collect="always" xlink:href="#linearGradient4227" id="linearGradient4499" y1="524.79797" x1="393.57144" y2="538.79797" x2="407.57147" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 -384.57143 -515.798)"/>
  <linearGradient inkscape:collect="always" id="linearGradient4227">
   <stop style="stop-color:#292c2f" id="stop4229"/>
   <stop offset="1" style="stop-opacity:0" id="stop4231"/>
  </linearGradient>
 </defs>
 <metadata id="metadata5458"/>
 <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
  <rect width="28" x="386.57144" y="517.79797" rx="13.999993" height="28" style="fill:url(#linearGradient4149)" id="rect4130"/>
  <g id="g4612" transform="matrix(0.66347102 0.17777648 -0.17777652 0.66347082 222.61511 111.63893)">
   <path inkscape:connector-curvature="0" style="clip-path:url(#clipPath4534);stroke-opacity:0.550265;fill:url(#linearGradient4274);stroke-width:2.8" id="rect4263" d="M 24,8 C 15.136008,8 8,15.136008 8,24 l 16,0 0,-16 z" transform="matrix(1 0 0 1 384.57143 499.798)"/>
   <path inkscape:connector-curvature="0" style="clip-path:url(#clipPath4584);stroke-opacity:0.550265;fill:url(#linearGradient4278);stroke-width:2.8" id="path4276" d="m 408.57143,539.798 c -8.86399,0 -16,-7.13601 -16,-16 l 16,0 0,16 z"/>
   <path inkscape:connector-curvature="0" style="clip-path:url(#clipPath4550);stroke-opacity:0.550265;fill:url(#linearGradient4284);stroke-width:2.8" id="path4280" d="m 408.57143,507.798 c 8.86399,0 16,7.13601 16,16 l -16,0 0,-16 z"/>
   <path inkscape:connector-curvature="0" style="clip-path:url(#clipPath4568);stroke-opacity:0.550265;fill:url(#linearGradient4286);stroke-width:2.8" id="path4282" d="m 408.57143,539.798 c 8.86399,0 16,-7.13601 16,-16 l -16,0 0,16 z"/>
  </g>
  <g style="opacity:0.7" id="g4590" transform="matrix(0.68687573 0 0 0.68687553 119.93362 172.01397)">
   <path inkscape:connector-curvature="0" style="clip-path:url(#clipPath4528);stroke-opacity:0.550265;fill:url(#linearGradient4274);opacity:1;stroke-width:2.8;filter:url(#filter4390)" id="path4340" d="M 24,8 C 15.136008,8 8,15.136008 8,24 l 16,0 0,-16 z" transform="matrix(1 0 0 1 384.57143 499.798)"/>
   <path inkscape:connector-curvature="0" style="clip-path:url(#clipPath4578);stroke-opacity:0.550265;fill:url(#linearGradient4278);opacity:1;stroke-width:2.8;filter:url(#filter4390)" id="path4394" d="m 408.57143,539.798 c -8.86399,0 -16,-7.13601 -16,-16 l 16,0 0,16 z"/>
   <path inkscape:connector-curvature="0" style="clip-path:url(#clipPath4562);stroke-opacity:0.550265;fill:url(#linearGradient4286);opacity:1;stroke-width:2.8;filter:url(#filter4390)" id="path4416" d="m 408.57143,539.798 c 8.86399,0 16,-7.13601 16,-16 l -16,0 0,16 z"/>
   <path inkscape:connector-curvature="0" style="clip-path:url(#clipPath4544);stroke-opacity:0.550265;fill:url(#linearGradient4284);opacity:1;stroke-width:2.8;filter:url(#filter4390)" id="path4486" d="m 408.57143,507.798 c 8.86399,0 16,7.13601 16,16 l -16,0 0,-16 z"/>
  </g>
  <path inkscape:connector-curvature="0" style="clip-path:url(#clipPath4528);stroke-opacity:0.550265;fill:url(#linearGradient4274);opacity:0.35;stroke-width:2.8" id="path4320" d="M 24,8 C 15.136008,8 8,15.136008 8,24 l 16,0 0,-16 z" transform="matrix(0.48569447 0.48569434 -0.48569447 0.48569434 400.57143 508.48469)"/>
  <path inkscape:connector-curvature="0" style="clip-path:url(#clipPath4578);stroke-opacity:0.550265;fill:url(#linearGradient4278);opacity:0.35;stroke-width:2.8" id="path4322" d="m 408.57143,539.798 c -8.86399,0 -16,-7.13601 -16,-16 l 16,0 0,16 z" transform="matrix(0.48569447 0.48569434 -0.48569447 0.48569434 456.53634 78.951441)"/>
  <path inkscape:connector-curvature="0" style="clip-path:url(#clipPath4562);stroke-opacity:0.550265;fill:url(#linearGradient4286);opacity:0.35;stroke-width:2.8" id="path4324" d="m 408.57143,539.798 c 8.86399,0 16,-7.13601 16,-16 l -16,0 0,16 z" transform="matrix(0.48569447 0.48569434 -0.48569447 0.48569434 456.53634 78.951441)"/>
  <path inkscape:connector-curvature="0" style="clip-path:url(#clipPath4544);stroke-opacity:0.550265;fill:url(#linearGradient4284);opacity:0.35;stroke-width:2.8" id="path4326" d="m 408.57143,507.798 c 8.86399,0 16,7.13601 16,16 l -16,0 0,-16 z" transform="matrix(0.48569447 0.48569434 -0.48569447 0.48569434 456.53634 78.951441)"/>
  <g id="g4594" transform="matrix(0.17777652 0.66347082 -0.66347102 0.17777648 675.4618 167.60383)">
   <path inkscape:connector-curvature="0" style="clip-path:url(#clipPath4528-1);stroke-opacity:0.550265;fill:url(#linearGradient4274);opacity:0.3;stroke-width:2.8" id="path4340-7" d="M 24,8 C 15.136008,8 8,15.136008 8,24 l 16,0 0,-16 z" transform="matrix(1 0 0 1 384.57142 499.79801)"/>
   <path inkscape:connector-curvature="0" style="clip-path:url(#clipPath4578-8);stroke-opacity:0.550265;fill:url(#linearGradient4278);opacity:0.3;stroke-width:2.8" id="path4394-4" d="m 408.57143,539.798 c -8.86399,0 -16,-7.13601 -16,-16 l 16,0 0,16 z" transform="matrix(1 0 0 1 -0.000006 0.00001)"/>
   <path inkscape:connector-curvature="0" style="clip-path:url(#clipPath4562-8);stroke-opacity:0.550265;fill:url(#linearGradient4286);opacity:0.3;stroke-width:2.8" id="path4416-6" d="m 408.57143,539.798 c 8.86399,0 16,-7.13601 16,-16 l -16,0 0,16 z" transform="matrix(1 0 0 1 -0.000006 0.00001)"/>
   <path inkscape:connector-curvature="0" style="clip-path:url(#clipPath4544-1);stroke-opacity:0.550265;fill:url(#linearGradient4284);opacity:0.3;stroke-width:2.8" id="path4486-5" d="m 408.57143,507.798 c 8.86399,0 16,7.13601 16,16 l -16,0 0,-16 z" transform="matrix(1 0 0 1 -0.000006 0.00001)"/>
  </g>
  <path style="fill:url(#linearGradient4499);opacity:0.2;fill-rule:evenodd" id="path4491" d="M 18.699219 13 L 13.349609 19 L 22.669922 28.320312 C 25.071701 27.022118 27.043835 25.042307 28.335938 22.636719 L 18.699219 13 z " transform="matrix(1 0 0 1 384.57143 515.798)"/>
  <rect width="8" x="396.57144" y="-535.79797" rx="4" height="8" style="stroke-opacity:0.550265;fill:url(#linearGradient4314);stroke-width:2.8" id="rect4312" transform="matrix(1 0 0 -1 0 0)"/>
  <path inkscape:connector-curvature="0" style="fill:url(#linearGradient4917);fill-rule:evenodd" id="path4847" d="m 399.57143,532.798 1.00001,-2 0.99999,2 z"/>
 </g>
		</svg>
	{/if}
