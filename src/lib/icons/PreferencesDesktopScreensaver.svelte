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
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="9.710111" x2="16.78154" y1="7.142858" y2="14.214287"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="8" x2="8" y1="13" y2="5"><stop offset="0" stop-color="#eff0f1"/><stop offset="1" stop-color="#fcfcfc"/></linearGradient><linearGradient id="c" gradientTransform="matrix(.39062485 0 0 .34374986 -148.59816 -170.55548)" gradientUnits="userSpaceOnUse" x1="418.16971" x2="384.57144" y1="503.07938" y2="531.45813"><stop offset="0" stop-color="#1abc9c"/><stop offset="1" stop-color="#2980b9"/></linearGradient><linearGradient id="d" gradientTransform="matrix(.39062485 0 0 .34374986 -148.59816 -170.55548)" gradientUnits="userSpaceOnUse" x1="404.0452" x2="430.73611" y1="521.63281" y2="528.35034"><stop offset="0" stop-color="#cc4a5e"/><stop offset="1" stop-color="#aa478a"/></linearGradient><linearGradient id="e" gradientTransform="matrix(.39062485 0 0 .34374986 -148.59816 -170.55548)" gradientUnits="userSpaceOnUse" x1="398.09201" x2="394.00299" xlink:href="#f" y1="542.22382" y2="524.89966"/><linearGradient id="f"><stop offset="0" stop-color="#334545"/><stop offset="1" stop-color="#536161"/></linearGradient><linearGradient id="g" gradientTransform="matrix(-.39062483 0 0 .34374984 179.19187 -184.30547)" gradientUnits="userSpaceOnUse" x1="431.57141" x2="439.57141" xlink:href="#f" y1="568.79803" y2="562.79803"/><linearGradient id="h" gradientTransform="matrix(-.39062485 0 0 .34374986 179.19189 -184.30548)" gradientUnits="userSpaceOnUse" x1="406.53735" x2="423.31955" xlink:href="#f" y1="581.87024" y2="572.67786"/><linearGradient id="i" gradientTransform="matrix(-.39062485 0 0 .34374986 179.19189 -184.30548)" gradientUnits="userSpaceOnUse" x1="423.05438" x2="431.22452" xlink:href="#f" y1="572.33411" y2="566.76562"/><linearGradient id="j" gradientTransform="matrix(-.39062485 0 0 .34374986 179.19189 -184.30548)" gradientUnits="userSpaceOnUse" x1="431.3129" x2="440.63208" xlink:href="#f" y1="577.10217" y2="571.44531"/><linearGradient id="k" gradientTransform="matrix(-.39062485 0 0 .34374986 179.19189 -184.30548)" gradientUnits="userSpaceOnUse" x1="430.56738" x2="423.74994" xlink:href="#f" y1="577.36243" y2="591.32782"/><linearGradient id="l" gradientTransform="matrix(.62500129 0 0 .78947505 -241.2327 -408.36755)" gradientUnits="userSpaceOnUse" x2="0" y1="538.79797" y2="519.79797"><stop offset="0" stop-color="#2a2c2f"/><stop offset="1" stop-color="#424649"/></linearGradient><linearGradient id="m" gradientTransform="matrix(.66666658 0 0 .50000001 -256.04766 -252.39899)" gradientUnits="userSpaceOnUse" x2="0" y1="542.79797" y2="538.79797"><stop offset="0" stop-color="#c6cdd1"/><stop offset="1" stop-color="#e0e5e7"/></linearGradient><linearGradient id="n" gradientUnits="userSpaceOnUse" x1="6.78569" x2="17.714262" y1="3.285716" y2="14.214288"><stop offset="0"/><stop offset="1" stop-opacity="0"/></linearGradient><path d="m.999997 2.000005h19.999996v15.000016h-19.999996z" fill="url(#l)" stroke-width=".638443"/><path d="m9.000006 16.99999h4v2h-4z" fill="url(#m)" stroke-width=".577351"/><path d="m7.000003 19.000013h8v1h-8z" fill="#99a1a7" stroke-width=".816499"/><path d="m1.9999982 13.999998 3.0000021 3.000002h16.0000007v-12.9999986l-1.000003-1.0000029z" fill="url(#n)" fill-rule="evenodd" opacity=".2" stroke-width=".642857"/><g transform="matrix(.95999999 0 0 1.0666667 .440004 .199995)"><path d="m1.6249958 2.625005v11.25h18.7500002v-11.25z" fill="url(#c)" stroke-width=".625"/><g stroke-linecap="round" stroke-width="1.25"><path d="m20.374996 2.625005-12.9039416 6.5559375 9.2393356 4.6940625h3.664606z" fill="url(#d)"/><path d="m7.4843712 9.156005-5.8593754 2.977312v1.741688h15.1727852z" fill="url(#e)"/><path d="m10.710349 10.795255-3.2259828-1.639v3.278063z" fill="url(#g)"/><path d="m13.936342 12.43363v1.441375h2.83647z" fill="url(#h)"/><path d="m10.710358 10.795193v3.079812h.390347l2.835638-1.440687z" fill="url(#i)"/><path d="m7.4843712 12.434318v1.440687h2.8356378z" fill="url(#j)"/><path d="m13.936342 12.43363-2.83647 1.441375h2.83647z" fill="url(#k)"/><path d="m7.4710612 9.1810675 12.9039318-6.5560625-.000007 3.20275z" fill="#aa478a"/></g></g><g transform="translate(0 -1)"><path d="m12 6.1992188-3 1.8007812 2 2h-3v4l1.566406 2h10.433594v-1.800781z" fill="url(#a)" opacity=".2" stroke-width=".642857"/><path d="m11 5a2 2 0 0 0 -2 2h1a1 1 0 0 1 1-1 1 1 0 0 1 1 1v2h-1-1-1-1v4h6v-4h-1v-2a2 2 0 0 0 -2-2zm-2 5h4v2h-4z" fill="url(#b)" transform="translate(0 1)"/></g>
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
     id="defs5455">
    <linearGradient
       xlink:href="#linearGradient4303"
       id="linearGradient4346"
       y1="542.79797"
       y2="538.79797"
       x2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(-7e-5,2)" />
    <linearGradient
       id="linearGradient4303">
      <stop
         style="stop-color:#c6cdd1"
         id="stop4305" />
      <stop
         offset="1"
         style="stop-color:#e0e5e7"
         id="stop4307" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient4293"
       id="linearGradient4173"
       y1="519.79797"
       x1="393.57144"
       y2="536.79797"
       x2="410.57144"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       id="linearGradient4293">
      <stop
         id="stop4295" />
      <stop
         offset="1"
         style="stop-opacity:0"
         id="stop4297" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient4159"
       id="linearGradient4338"
       y1="538.79797"
       y2="519.79797"
       x2="0"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(1,0,0,1.2105271,-3.00004,-111.43158)" />
    <linearGradient
       id="linearGradient4159">
      <stop
         style="stop-color:#2a2c2f"
         id="stop4161" />
      <stop
         offset="1"
         style="stop-color:#424649"
         id="stop4163" />
    </linearGradient>
    <linearGradient
       id="linearGradient4219">
      <stop
         style="stop-color:#eff0f1"
         id="stop4221" />
      <stop
         offset="1"
         style="stop-color:#fcfcfc"
         id="stop4223" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient4219"
       id="linearGradient4479"
       y1="533.79797"
       y2="521.79797"
       x2="0"
       gradientUnits="userSpaceOnUse" />
    <linearGradient
       xlink:href="#linearGradient4293"
       id="linearGradient4279"
       y1="4.999974"
       x1="9"
       y2="19"
       x2="23.00003"
       gradientUnits="userSpaceOnUse"
       gradientTransform="translate(384.57143,515.798)" />
    <linearGradient
       xlink:href="#linearGradient4697"
       id="linearGradient4703"
       y1="503.07938"
       x1="418.16971"
       y2="531.45813"
       x2="384.57144"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.62499976,0,0,0.54999977,145.21437,241.70922)" />
    <linearGradient
       id="linearGradient4697">
      <stop
         style="stop-color:#1abc9c"
         id="stop4699" />
      <stop
         offset="1"
         style="stop-color:#2980b9"
         id="stop4701" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient4526"
       id="linearGradient4532"
       y1="521.63281"
       x1="404.0452"
       y2="528.35034"
       x2="430.73611"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.62499976,0,0,0.54999977,145.21437,241.70922)" />
    <linearGradient
       id="linearGradient4526">
      <stop
         style="stop-color:#cc4a5e"
         id="stop4528" />
      <stop
         offset="1"
         style="stop-color:#aa478a"
         id="stop4530" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient4468"
       id="linearGradient4474"
       y1="542.22382"
       x1="398.09201"
       y2="524.89966"
       x2="394.00299"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(0.62499976,0,0,0.54999977,145.21437,241.70922)" />
    <linearGradient
       id="linearGradient4468">
      <stop
         style="stop-color:#334545"
         id="stop4470" />
      <stop
         offset="1"
         style="stop-color:#536161"
         id="stop4472" />
    </linearGradient>
    <linearGradient
       xlink:href="#linearGradient4468"
       id="linearGradient4500"
       y1="568.79803"
       x1="431.57141"
       y2="562.79803"
       x2="439.57141"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.62499973,0,0,0.54999974,669.67843,219.70923)" />
    <linearGradient
       xlink:href="#linearGradient4468"
       id="linearGradient4498"
       y1="581.87024"
       x1="406.53735"
       y2="572.67786"
       x2="423.31955"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.62499976,0,0,0.54999977,669.67845,219.70922)" />
    <linearGradient
       xlink:href="#linearGradient4468"
       id="linearGradient4496"
       y1="572.33411"
       x1="423.05438"
       y2="566.76562"
       x2="431.22452"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.62499976,0,0,0.54999977,669.67845,219.70922)" />
    <linearGradient
       xlink:href="#linearGradient4468"
       id="linearGradient4492"
       y1="577.10217"
       x1="431.3129"
       y2="571.44531"
       x2="440.63208"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.62499976,0,0,0.54999977,669.67845,219.70922)" />
    <linearGradient
       xlink:href="#linearGradient4468"
       id="linearGradient4490"
       y1="577.36243"
       x1="430.56738"
       y2="591.32782"
       x2="423.74994"
       gradientUnits="userSpaceOnUse"
       gradientTransform="matrix(-0.62499976,0,0,0.54999977,669.67845,219.70922)" />
  </defs>
  
  <g
     id="layer1"
     transform="matrix(1 0 0 1 -384.57143 -515.798)">
    <flowRoot
       line-height="125%"
       style="font-size:10;font-family:sans-serif"
       id="flowRoot4170"
       transform="matrix(1 0 0 1 389.57142 520.79806)">
      <flowRegion
         id="flowRegion4172">
        <rect
           width="27"
           x="22"
           y="3"
           height="15"
           id="rect4174" />
      </flowRegion>
      <flowPara
         id="flowPara4176">Plasm</flowPara>
    </flowRoot>
    <path
       d="m 385.57142,518.798 0,18 30,0 0,-18 -30,0 z"
       id="path4589"
       style="fill:url(#linearGradient4703)" />
    <path
       d="m 415.57142,518.798 -20.64631,10.48945 14.78294,7.51055 5.86337,0 0,-18 z"
       id="path4284"
       style="fill:url(#linearGradient4532);stroke-width:2;stroke-linecap:round" />
    <path
       d="m 394.94642,529.24761 -9.375,4.76367 0,2.78672 24.27646,0 -14.90146,-7.55039 z"
       id="path4284-5-6"
       style="fill:url(#linearGradient4474);stroke-width:2;stroke-linecap:round" />
    <path
       d="m 400.10799,531.87043 -5.16157,-2.62244 0,5.24486 z"
       id="path4284-5-6-2-2"
       style="fill:url(#linearGradient4500);stroke-width:2;stroke-linecap:round" />
    <path
       d="m 405.26957,534.49175 0,2.30625 4.53836,0 -4.53836,-2.30625 z"
       id="path4284-5-6-2-0"
       style="fill:url(#linearGradient4498);stroke-width:2;stroke-linecap:round" />
    <path
       d="m 400.108,531.87027 0,4.92773 0.62456,0 4.53702,-2.30508 -5.16158,-2.62265 z"
       id="path4284-5-6-2-6"
       style="fill:url(#linearGradient4496);stroke-width:2;stroke-linecap:round" />
    <path
       d="m 394.94642,534.49292 0,2.30508 4.53702,0 -4.53702,-2.30508 z"
       id="path4284-5-6-2-6-50"
       style="fill:url(#linearGradient4492);stroke-width:2;stroke-linecap:round" />
    <path
       d="m 405.26957,534.49175 -4.53835,2.30625 4.53835,0 0,-2.30625 z"
       id="path4284-5-6-2-0-6"
       style="fill:url(#linearGradient4490);stroke-width:2;stroke-linecap:round" />
    <path
       d="m 394.92513,529.28773 20.64629,-10.48973 -10e-6,5.12442 z"
       id="path4284-1"
       style="fill:#aa478a;stroke-width:2;stroke-linecap:round" />
    <rect
       width="6"
       x="397.57144"
       y="540.79797"
       height="4"
       style="fill:url(#linearGradient4346)"
       id="rect4321" />
    <rect
       width="12"
       x="394.57144"
       y="544.79797"
       height="1"
       style="fill:#99a1a7"
       id="rect4323" />
    <path
       style="opacity:0.2;fill:url(#linearGradient4173);fill-rule:evenodd"
       id="path4165"
       d="m 385.57143,536.79801 4,4 27,0 0,-21 -1,-1 0,18 z" />
    <path
       style="fill:url(#linearGradient4338)"
       id="rect4319"
       d="m 384.57143,517.79801 0,23 32,0 0,-23 -32,0 z m 1,1 30,0 0,18 -30,0 0,-18 z" />
    <path
       style="opacity:0.2;fill:url(#linearGradient4279);fill-rule:evenodd"
       id="path4268"
       d="m 400.57143,520.798 0,1 -1,0 -1,1 -1,1 0,1 3,3 -3,0 -1,0 -1,0 0,7 6,6 10,0 5,0 0,-5 -14,-14 -2,-1 z" />
    <path
       style="fill:url(#linearGradient4479)"
       id="rect4136-1"
       d="m 400.57143,520.798 c -1.662,0 -3,1.338 -3,3 l 0,1 1,0 0,-1 c 0,-1.4542 0.75351,-2 2,-2 1.2465,0 2,0.5458 2,2 l 0,4 -2,0 -2,0 -1,0 -1,0 -1,0 0,0.75 0,6.25 10,0 0,-7 -2,0 0,-4 c 0,-1.662 -1.338,-3 -3,-3 z m -4,8 8,0 0,5 -8,0 0,-5 z" />
  </g>
		</svg>
	{/if}
