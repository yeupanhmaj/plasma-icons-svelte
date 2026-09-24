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
        <linearGradient id="linearGradient4338" x2="0" y1="538.79797" y2="519.79797" gradientTransform="matrix(.62500129 0 0 .78947505 -241.2327 -408.36755)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2a2c2f" offset="0"/>
            <stop stop-color="#424649" offset="1"/>
        </linearGradient>
        <linearGradient id="linearGradient4346" x2="0" y1="542.79797" y2="538.79797" gradientTransform="matrix(.66666658 0 0 .50000001 -256.04766 -252.39899)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#c6cdd1" offset="0"/>
            <stop stop-color="#e0e5e7" offset="1"/>
        </linearGradient>
        <linearGradient id="linearGradient4173" x1="393.57144" x2="410.57144" y1="519.79797" y2="536.79797" gradientTransform="matrix(.64285714 0 0 .64285714 -246.22452 -330.87012)" gradientUnits="userSpaceOnUse">
            <stop offset="0"/>
            <stop stop-opacity="0" offset="1"/>
        </linearGradient>
        <linearGradient id="linearGradient4442" x1="8.2728176" x2="24.14893" y1="24.301785" y2="8.376668" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient4288"/>
        <linearGradient id="linearGradient4288">
            <stop stop-color="#e81877" offset="0"/>
            <stop stop-color="#dd1d8c" offset=".312499"/>
            <stop stop-color="#6d57b1" offset=".562499"/>
            <stop stop-color="#2a78c1" offset=".75"/>
            <stop stop-color="#018dcb" offset="1"/>
        </linearGradient>
        <clipPath id="clipPath4534-6">
            <rect x="8.0000095" y="8" width="31.999989" height="31.999971" rx="15.999986"/>
        </clipPath>
        <linearGradient id="linearGradient4444" x1="8.3852386" x2="24.00001" y1="24.353193" y2="8" gradientTransform="matrix(1,0,0,-1,384.57143,547.798)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient4300"/>
        <linearGradient id="linearGradient4300">
            <stop stop-color="#e51561" offset="0"/>
            <stop stop-color="#e4156c" offset=".312499"/>
            <stop stop-color="#e71e2c" offset=".562499"/>
            <stop stop-color="#e8301e" offset=".75"/>
            <stop stop-color="#e6320e" offset="1"/>
        </linearGradient>
        <clipPath id="clipPath4584-3">
            <rect x="392.57144" y="507.798" width="31.999989" height="31.999971" rx="15.999986"/>
        </clipPath>
        <linearGradient id="linearGradient4446" x1="8.1254606" x2="23.775082" y1="24.15856" y2="8.4812708" gradientTransform="matrix(-1,0,0,1,432.57143,499.798)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient4328"/>
        <linearGradient id="linearGradient4328">
            <stop stop-color="#bec900" offset="0"/>
            <stop stop-color="#9ec80a" offset=".312499"/>
            <stop stop-color="#71b93d" offset=".562499"/>
            <stop stop-color="#35a48f" offset=".75"/>
            <stop stop-color="#018fca" offset="1"/>
        </linearGradient>
        <clipPath id="clipPath4550-1">
            <rect x="392.57144" y="507.798" width="31.999989" height="31.999971" rx="15.999986"/>
        </clipPath>
        <linearGradient id="linearGradient4448" x1="8.2327194" x2="24.00001" y1="24.062611" y2="8" gradientTransform="rotate(180,216.28572,273.899)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient4316"/>
        <linearGradient id="linearGradient4316">
            <stop stop-color="#c1cc00" offset="0"/>
            <stop stop-color="#dfcd00" offset=".312499"/>
            <stop stop-color="#f0cc00" offset=".562499"/>
            <stop stop-color="#fd8c08" offset=".75"/>
            <stop stop-color="#f25c13" offset="1"/>
        </linearGradient>
        <clipPath id="clipPath4568-1">
            <rect x="392.57144" y="507.798" width="31.999989" height="31.999971" rx="15.999986"/>
        </clipPath>
        <linearGradient id="linearGradient4430" x1="8.2549353" x2="24.09271" y1="24.160919" y2="8.4023752" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient4288"/>
        <clipPath id="clipPath4528-10">
            <rect x="8.0000095" y="8" width="31.999989" height="31.999971" rx="15.999986"/>
        </clipPath>
        <filter id="filter4390-0" x="-.083412667" y="-.076804118" width="1.1668253" height="1.1536082" color-interpolation-filters="sRGB">
            <feGaussianBlur stdDeviation="0.4"/>
        </filter>
        <linearGradient id="linearGradient4432" x1="7.4901299" x2="24.00001" y1="23.597652" y2="8" gradientTransform="matrix(1,0,0,-1,384.57143,547.798)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient4300"/>
        <clipPath id="clipPath4578-4">
            <rect x="392.57144" y="507.798" width="31.999989" height="31.999971" rx="15.999986"/>
        </clipPath>
        <linearGradient id="linearGradient4434" x1="8.3708143" x2="24.00001" y1="24.12071" y2="8" gradientTransform="rotate(180,216.28571,273.899)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient4316"/>
        <clipPath id="clipPath4562-1">
            <rect x="392.57144" y="507.798" width="31.999989" height="31.999971" rx="15.999986"/>
        </clipPath>
        <linearGradient id="linearGradient4436" x1="8.3939915" x2="24.139071" y1="24.08045" y2="8.3621378" gradientTransform="matrix(-1,0,0,1,432.57143,499.798)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient4328"/>
        <clipPath id="clipPath4544-4">
            <rect x="392.57144" y="507.798" width="31.999989" height="31.999971" rx="15.999986"/>
        </clipPath>
        <linearGradient id="linearGradient4383" x1="8.4570484" x2="24.105169" y1="23.998161" y2="8.2362652" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient4288"/>
        <linearGradient id="linearGradient4278" x1="8" x2="24.00001" y1="24.000031" y2="8" gradientTransform="matrix(1,0,0,-1,384.57143,547.798)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient4300"/>
        <linearGradient id="linearGradient4487" x1="8" x2="24.00001" y1="24" y2="8" gradientTransform="rotate(180,216.28571,273.899)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient4316"/>
        <linearGradient id="linearGradient4389" x1="8.1923304" x2="24.062149" y1="24.135401" y2="8.2328472" gradientTransform="matrix(-1,0,0,1,432.57143,499.798)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient4328"/>
        <linearGradient id="linearGradient4454" x1="8.0588903" x2="23.775442" y1="23.327553" y2="8.3717089" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient4288"/>
        <clipPath id="clipPath4528-1-3">
            <rect x="8.0000095" y="8" width="31.999989" height="31.999971" rx="15.999986"/>
        </clipPath>
        <linearGradient id="linearGradient4420" x1="8.3229284" x2="23.943396" y1="23.961485" y2="8.255105" gradientTransform="matrix(1,0,0,-1,384.57143,547.798)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient4300"/>
        <clipPath id="clipPath4578-8-5">
            <rect x="392.57144" y="507.798" width="31.999989" height="31.999971" rx="15.999986"/>
        </clipPath>
        <linearGradient id="linearGradient4422" x1="8" x2="24.271832" y1="24" y2="8.3847494" gradientTransform="rotate(180 216.28572 273.899)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient4316"/>
        <clipPath id="clipPath4562-8-9">
            <rect x="392.57144" y="507.798" width="31.999989" height="31.999971" rx="15.999986"/>
        </clipPath>
        <linearGradient id="linearGradient4424" x1="8" x2="24.04225" y1="23.999973" y2="8.4685526" gradientTransform="matrix(-1,0,0,1,432.57143,499.798)" gradientUnits="userSpaceOnUse" xlink:href="#linearGradient4328"/>
        <clipPath id="clipPath4544-1-9">
            <rect x="392.57144" y="507.798" width="31.999989" height="31.999971" rx="15.999986"/>
        </clipPath>
    </defs>
    <g transform="matrix(.62631716 0 0 .62631716 -239.73695 -322.22168)">
        <path transform="matrix(1.3024389 .20100866 -.34898744 .75017448 377.68857 504.96961)" d="m 24.158928,10.831747 c -5.837713,1.53486 -13.605442,3.705635 -14.131617,4.661751 -0.1728637,0.31411 1.223972,5.805379 1.849194,8.467563 L 24,24 Z" clip-path="url(#clipPath4534-6)" fill="url(#linearGradient4442)"/>
        <path transform="matrix(1.3024389 .20100866 -.34898744 .75017448 51.231 52.73172)" d="m408.57143 539.798c-3.7341 0-6.8603 1.4262-7.90925-1.5963-1.32126-3.80713-3.05254-10.43306-4.19867-15.27995l12.10792 0.87625z" clip-path="url(#clipPath4584-3)" fill="url(#linearGradient4444)"/>
        <path transform="matrix(1.3024389 .20100866 -.34898744 .75017448 51.231 52.73172)" d="m408.54971 510.76147c3.70873-0.72959 7.3878-2.07765 7.72186-1.76734 0.57403 0.53321 3.20442 10.67753 4.54939 15.85046l-12.24953-1.04659z" clip-path="url(#clipPath4550-1)" fill="url(#linearGradient4446)"/>
        <path transform="matrix(1.3024389 .20100866 -.34898744 .75017448 51.231 52.73172)" d="m408.57143 539.798c6.64535 0 13.34432-4.5952 14.09629-6.91921 0.31127-0.96198-1.84782-6.35682-1.84782-8.57545l-12.24847-0.50534z" clip-path="url(#clipPath4568-1)" fill="url(#linearGradient4448)"/>
        <path transform="matrix(1.3483839 0 0 .77663776 368.21016 509.15868)" d="m 23.930472,11.460429 c -5.762171,0 -10.77965,-0.525717 -11.289049,0.407759 -0.331008,0.606573 -0.261179,8.426428 -0.261179,11.528249 L 24,24 Z" clip-path="url(#clipPath4528-10)" fill="url(#linearGradient4430)" filter="url(#filter4390-0)" opacity=".7"/>
        <path transform="matrix(1.3483839 0 0 .77663776 -150.33976 120.99668)" d="m408.57143 539.798c-5.95583 0-10.94446 2.64808-11.4642-4.12184-0.10411-1.35619 7e-3 -8.68834 7e-3 -11.5965l11.45752-0.28166z" clip-path="url(#clipPath4578-4)" fill="url(#linearGradient4432)" filter="url(#filter4390-0)" opacity=".7"/>
        <path transform="matrix(1.3483839 0 0 .77663776 -150.33976 120.99668)" d="m408.57143 539.798c8.86399 0 11.66611-7.05553 11.66611-15.91952l-11.66611-0.0805z" clip-path="url(#clipPath4562-1)" fill="url(#linearGradient4434)" filter="url(#filter4390-0)" opacity=".7"/>
        <path transform="matrix(1.3483839 0 0 .77663776 -150.33976 120.99668)" d="m408.64096 511.29867c8.86399 0 11.59658 3.47439 11.59658 12.33838l-11.66611 0.16095z" clip-path="url(#clipPath4544-4)" fill="url(#linearGradient4436)" filter="url(#filter4390-0)" opacity=".7"/>
        <path transform="matrix(.9534514 .54916582 -.9534514 .54916582 400.57141 501.43805)" d="M 23.961295,7.4696601 C 17.33869,11.317054 11.667622,19.491919 7.6205681,23.9811 L 24,24 Z" clip-path="url(#clipPath4528-10)" fill="url(#linearGradient4383)" opacity=".35"/>
        <path transform="matrix(.9534514 .54916582 -.9534514 .54916582 510.43435 15.772569)" d="m408.57143 539.798c-7.33708-7.38807-11.38477-11.2391-16-16h16z" clip-path="url(#clipPath4578-4)" fill="url(#linearGradient4278)" opacity=".35"/>
        <path transform="matrix(.9534514 .54916582 -.9534514 .54916582 510.43435 15.772569)" d="m408.57143 539.798c8.86399 0 16-7.13601 16-16h-16z" clip-path="url(#clipPath4562-1)" fill="url(#linearGradient4487)" opacity=".35"/>
        <path transform="matrix(.9534514 .54916582 -.9534514 .54916582 510.43435 15.772569)" d="m408.57143 507.798c6.40862 5.86964 9.83628 9.65784 16 16h-16z" clip-path="url(#clipPath4544-4)" fill="url(#linearGradient4389)" opacity=".35"/>
        <path transform="matrix(.34898744 .75017448 -1.3024389 .20100866 423.45419 504.96961)" d="m23.979056 11.809347c-3.283282-0.916015-8.667038-2.1040181-8.77317-1.710602-0.779697 2.890225-3.997225 8.373606-3.997225 13.897249l12.791339 0.004006z" clip-path="url(#clipPath4528-1-3)" fill="url(#linearGradient4454)" opacity=".3"/>
        <path transform="matrix(.34898744 .75017448 -1.3024389 .20100866 940.19995 116.01022)" d="m409.10676 535.93453c-7.81888-2.05806-14.67041-4.03664-14.90474-4.53859-0.3514-0.7527 1.41061-5.23061 1.41061-7.59883l12.9588 8.9e-4z" clip-path="url(#clipPath4578-8-5)" fill="url(#linearGradient4420)" opacity=".3"/>
        <path transform="matrix(.34898744 .75017448 -1.3024389 .20100866 940.19995 116.01022)" d="m408.74809 535.71846c1.99491 0 6.5348 2.42445 8.27914 2.08346 6.00631-1.17412 7.5442-7.13484 7.5442-14.00392h-16z" clip-path="url(#clipPath4562-8-9)" fill="url(#linearGradient4422)" opacity=".3"/>
        <path transform="matrix(.34898744 .75017448 -1.3024389 .20100866 940.19995 116.01022)" d="m408.54137 511.79685c4.88949 1.31028 14.03815 3.68028 14.79044 4.2446 2.19289 1.64498 1.23962 3.89791 1.23962 7.75655h-16z" clip-path="url(#clipPath4544-1-9)" fill="url(#linearGradient4424)" opacity=".3"/>
    </g>
    <path d="m1 2v15h20v-15zm1 1h18v11h-18z" fill="url(#linearGradient4338)" stroke-width=".638443"/>
    <rect x="9.0000057" y="16.99999" width="3.9999998" height="2" fill="url(#linearGradient4346)" stroke-width=".577351"/>
    <rect x="7.0000033" y="19.000013" width="8" height="1" fill="#99a1a7" stroke-width=".816499"/>
    <path d="M 1.9999982,13.999998 5.0000003,17 H 21.000001 V 4.0000014 L 19.999998,2.9999985 20,14 Z" fill="url(#linearGradient4173)" fill-rule="evenodd" opacity=".2" stroke-width=".642857"/>
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
  <linearGradient id="linearGradient4159">
   <stop style="stop-color:#2a2c2f" id="stop4161"/>
   <stop offset="1" style="stop-color:#424649" id="stop4163"/>
  </linearGradient>
  <linearGradient id="linearGradient4303">
   <stop style="stop-color:#c6cdd1" id="stop4305"/>
   <stop offset="1" style="stop-color:#e0e5e7" id="stop4307"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4159" id="linearGradient4338" y1="538.79797" y2="519.79797" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1.2105271 -3.00004 -111.43158)"/>
  <linearGradient xlink:href="#linearGradient4303" id="linearGradient4346" y1="542.79797" y2="538.79797" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 -0.000073 2)"/>
  <linearGradient id="linearGradient4159-2">
   <stop style="stop-color:#1d1e1e" id="stop4161-3"/>
   <stop offset="1" style="stop-color:#44484c" id="stop4163-3"/>
  </linearGradient>
  <linearGradient id="linearGradient4288">
   <stop style="stop-color:#e81877" id="stop4290"/>
   <stop offset="0.312499" style="stop-color:#dd1d8c" id="stop4294-9"/>
   <stop offset="0.562499" style="stop-color:#6d57b1" id="stop4296"/>
   <stop offset="0.75" style="stop-color:#2a78c1" id="stop4298"/>
   <stop offset="1" style="stop-color:#018dcb" id="stop4292-2"/>
  </linearGradient>
  <clipPath id="clipPath4534">
   <rect width="31.999989" x="8.00001" y="8" rx="15.999986" height="31.999971" id="rect4536"/>
  </clipPath>
  <linearGradient id="linearGradient4300">
   <stop style="stop-color:#e51561" id="stop4302"/>
   <stop offset="0.312499" style="stop-color:#e4156c" id="stop4304"/>
   <stop offset="0.562499" style="stop-color:#e71e2c" id="stop4306"/>
   <stop offset="0.75" style="stop-color:#e8301e" id="stop4308"/>
   <stop offset="1" style="stop-color:#e6320e" id="stop4310"/>
  </linearGradient>
  <clipPath id="clipPath4584">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect4586"/>
  </clipPath>
  <linearGradient id="linearGradient4328">
   <stop style="stop-color:#bec900" id="stop4330"/>
   <stop offset="0.312499" style="stop-color:#9ec80a" id="stop4332"/>
   <stop offset="0.562499" style="stop-color:#71b93d" id="stop4334"/>
   <stop offset="0.75" style="stop-color:#35a48f" id="stop4336"/>
   <stop offset="1" style="stop-color:#018fca" id="stop4338"/>
  </linearGradient>
  <clipPath id="clipPath4550">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect4552"/>
  </clipPath>
  <linearGradient id="linearGradient4316">
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
  <clipPath id="clipPath4578">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect4580"/>
  </clipPath>
  <clipPath id="clipPath4562">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect4564"/>
  </clipPath>
  <clipPath id="clipPath4544">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect4546"/>
  </clipPath>
  <clipPath id="clipPath3240">
   <rect width="31.999989" x="8.00001" y="8" rx="15.999986" height="31.999971" id="rect3242"/>
  </clipPath>
  <clipPath id="clipPath3257">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect3259"/>
  </clipPath>
  <linearGradient xlink:href="#linearGradient4316" id="linearGradient4487" y1="24" x1="8" y2="8" gradientUnits="userSpaceOnUse" x2="24.00001" gradientTransform="matrix(-1 0 0 -1 432.57143 547.798)"/>
  <clipPath id="clipPath3274">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect3276"/>
  </clipPath>
  <linearGradient xlink:href="#linearGradient4328" id="linearGradient4489" y1="23.999973" x1="8" y2="8" gradientUnits="userSpaceOnUse" x2="24.00001" gradientTransform="matrix(-1 0 0 1 432.57143 499.798)"/>
  <clipPath id="clipPath3291">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect3293"/>
  </clipPath>
  <linearGradient xlink:href="#linearGradient4288" id="linearGradient4274" y1="23.999973" x1="8" y2="8" x2="24.00001" gradientUnits="userSpaceOnUse"/>
  <clipPath id="clipPath4528-1">
   <rect width="31.999989" x="8.00001" y="8" rx="15.999986" height="31.999971" id="rect4530-7"/>
  </clipPath>
  <linearGradient xlink:href="#linearGradient4300" id="linearGradient4278" y1="24.00003" x1="8" y2="8" gradientUnits="userSpaceOnUse" x2="24.00001" gradientTransform="matrix(1 0 0 -1 384.57143 547.798)"/>
  <clipPath id="clipPath4578-8">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect4580-7"/>
  </clipPath>
  <clipPath id="clipPath4562-8">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect4564-8"/>
  </clipPath>
  <clipPath id="clipPath4544-1">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect4546-1"/>
  </clipPath>
  <linearGradient id="linearGradient4227">
   <stop style="stop-color:#292c2f" id="stop4229"/>
   <stop offset="1" style="stop-opacity:0" id="stop4231"/>
  </linearGradient>
  <linearGradient id="linearGradient4303-6">
   <stop style="stop-color:#989a9b" id="stop4305-1"/>
   <stop offset="1" style="stop-color:#f6f6f7" id="stop4307-1"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4227" id="linearGradient3878" y1="525.79797" x1="394.57144" y2="539.79797" gradientUnits="userSpaceOnUse" x2="408.57147" gradientTransform="matrix(1 0 0 1 -0.00001 0.00003)"/>
  <linearGradient xlink:href="#linearGradient4159" id="linearGradient3880" y1="543.79797" y2="503.798" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(0.20000006 0 0 0.20000014 318.85709 -636.55773)"/>
  <linearGradient xlink:href="#linearGradient4303-6" id="linearGradient3882" y1="524.79797" y2="522.79797" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(1 0 0 1 -8.00001 8.00003)"/>
  <linearGradient xlink:href="#linearGradient4328" id="linearGradient5138" y1="23.999973" x1="8" y2="8.139421" gradientUnits="userSpaceOnUse" x2="23.895054" gradientTransform="matrix(-1 0 0 1 432.57143 499.798)"/>
  <linearGradient xlink:href="#linearGradient4328" id="linearGradient5141" y1="22.976145" x1="17.508369" y2="8.139421" gradientUnits="userSpaceOnUse" x2="23.895054" gradientTransform="matrix(-1 0 0 1 432.57143 499.798)"/>
  <linearGradient xlink:href="#linearGradient4159-2" id="linearGradient4149-9" y1="545.79797" y2="517.79797" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 0.000145 0.000574)"/>
  <clipPath id="clipPath4534-6">
   <rect width="31.999989" x="8.00001" y="8" rx="15.999986" height="31.999971" id="rect4536-6"/>
  </clipPath>
  <clipPath id="clipPath4584-3">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect4586-5"/>
  </clipPath>
  <clipPath id="clipPath4550-1">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect4552-7"/>
  </clipPath>
  <clipPath id="clipPath4568-1">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect4570-6"/>
  </clipPath>
  <clipPath id="clipPath4528-10">
   <rect width="31.999989" x="8.00001" y="8" rx="15.999986" height="31.999971" id="rect4530-8"/>
  </clipPath>
  <filter width="1.12" x="-0.06" y="-0.06" height="1.12" style="color-interpolation-filters:sRGB" id="filter4390-0">
   <feGaussianBlur stdDeviation="0.4" id="feGaussianBlur4392-3"/>
  </filter>
  <clipPath id="clipPath4578-4">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect4580-9"/>
  </clipPath>
  <clipPath id="clipPath4562-1">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect4564-87"/>
  </clipPath>
  <clipPath id="clipPath4544-4">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect4546-8"/>
  </clipPath>
  <clipPath id="clipPath3240-7">
   <rect width="31.999989" x="8.00001" y="8" rx="15.999986" height="31.999971" id="rect3242-5"/>
  </clipPath>
  <clipPath id="clipPath3257-9">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect3259-8"/>
  </clipPath>
  <clipPath id="clipPath3274-1">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect3276-9"/>
  </clipPath>
  <clipPath id="clipPath3291-1">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect3293-3"/>
  </clipPath>
  <clipPath id="clipPath4528-1-3">
   <rect width="31.999989" x="8.00001" y="8" rx="15.999986" height="31.999971" id="rect4530-7-9"/>
  </clipPath>
  <clipPath id="clipPath4578-8-5">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect4580-7-9"/>
  </clipPath>
  <clipPath id="clipPath4562-8-9">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect4564-8-6"/>
  </clipPath>
  <clipPath id="clipPath4544-1-9">
   <rect width="31.999989" x="392.57144" y="507.798" rx="15.999986" height="31.999971" id="rect4546-1-1"/>
  </clipPath>
  <linearGradient xlink:href="#linearGradient4227" id="linearGradient4499" y1="525.79797" x1="394.57144" y2="539.79797" x2="408.57147" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 38.999998 -0.228885)"/>
  <linearGradient xlink:href="#linearGradient4159" id="linearGradient4314" y1="543.79797" y2="503.798" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="matrix(0.20000006 0 0 0.20000014 357.8571 -636.32881)"/>
  <linearGradient xlink:href="#linearGradient4303-6" id="linearGradient4917" y1="524.79797" y2="522.79797" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 30.999998 7.771115)"/>
  <linearGradient id="linearGradient3390" xlink:href="#linearGradient4159-2" y1="545.79797" y2="517.79797" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0 1 39.00014 -0.228315)"/>
  <linearGradient xlink:href="#linearGradient4288" id="linearGradient4383" y1="23.998161" x1="8.457048" y2="8.236265" gradientUnits="userSpaceOnUse" x2="24.10517"/>
  <linearGradient xlink:href="#linearGradient4328" id="linearGradient4389" y1="24.1354" x1="8.19233" y2="8.232847" gradientUnits="userSpaceOnUse" x2="24.06215" gradientTransform="matrix(-1 0 0 1 432.57143 499.798)"/>
  <linearGradient xlink:href="#linearGradient4300" id="linearGradient4420" y1="23.961485" x1="8.322928" y2="8.255105" gradientUnits="userSpaceOnUse" x2="23.943396" gradientTransform="matrix(1 0 0 -1 384.57143 547.798)"/>
  <linearGradient xlink:href="#linearGradient4316" id="linearGradient4422" y1="24" x1="8" y2="8.384749" gradientUnits="userSpaceOnUse" x2="24.271832" gradientTransform="matrix(-1 0 0 -1 432.57143 547.798)"/>
  <linearGradient xlink:href="#linearGradient4328" id="linearGradient4424" y1="23.999973" x1="8" y2="8.468553" gradientUnits="userSpaceOnUse" x2="24.04225" gradientTransform="matrix(-1 0 0 1 432.57143 499.798)"/>
  <linearGradient xlink:href="#linearGradient4288" id="linearGradient4430" y1="24.16092" x1="8.254935" y2="8.402375" gradientUnits="userSpaceOnUse" x2="24.09271"/>
  <linearGradient xlink:href="#linearGradient4300" id="linearGradient4432" y1="23.597652" x1="7.49013" y2="8" gradientUnits="userSpaceOnUse" x2="24.00001" gradientTransform="matrix(1 0 0 -1 384.57143 547.798)"/>
  <linearGradient xlink:href="#linearGradient4316" id="linearGradient4434" y1="24.12071" x1="8.370814" y2="8" gradientUnits="userSpaceOnUse" x2="24.00001" gradientTransform="matrix(-1 0 0 -1 432.57143 547.798)"/>
  <linearGradient xlink:href="#linearGradient4328" id="linearGradient4436" y1="24.08045" x1="8.393991" y2="8.362138" gradientUnits="userSpaceOnUse" x2="24.13907" gradientTransform="matrix(-1 0 0 1 432.57143 499.798)"/>
  <linearGradient xlink:href="#linearGradient4288" id="linearGradient4442" y1="24.301785" x1="8.272818" y2="8.376668" gradientUnits="userSpaceOnUse" x2="24.14893"/>
  <linearGradient xlink:href="#linearGradient4300" id="linearGradient4444" y1="24.353193" x1="8.385239" y2="8" gradientUnits="userSpaceOnUse" x2="24.00001" gradientTransform="matrix(1 0 0 -1 384.57143 547.798)"/>
  <linearGradient xlink:href="#linearGradient4328" id="linearGradient4446" y1="24.15856" x1="8.125461" y2="8.481271" gradientUnits="userSpaceOnUse" x2="23.775082" gradientTransform="matrix(-1 0 0 1 432.57143 499.798)"/>
  <linearGradient xlink:href="#linearGradient4316" id="linearGradient4448" y1="24.06261" x1="8.232719" y2="8" gradientUnits="userSpaceOnUse" x2="24.00001" gradientTransform="matrix(-1 0 0 -1 432.57143 547.798)"/>
  <linearGradient xlink:href="#linearGradient4288" id="linearGradient4454" y1="23.327553" x1="8.05889" y2="8.371709" gradientUnits="userSpaceOnUse" x2="23.775442"/>
 </defs>
 <metadata id="metadata5458"/>
 <g id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
  <path style="clip-path:url(#clipPath4534-6);fill:url(#linearGradient4442)" id="rect4263" d="m 24.158928,10.831747 c -5.837713,1.53486 -13.605442,3.705635 -14.131617,4.661751 -0.1728637,0.31411 1.223972,5.805379 1.849194,8.467563 L 24,24 z" transform="matrix(1.3024389 0.20100866 -0.34898744 0.75017448 377.68857 504.96961)"/>
  <path style="clip-path:url(#clipPath4584-3);fill:url(#linearGradient4444)" id="path4276" d="m 408.57143,539.798 c -3.7341,0 -6.8603,1.4262 -7.90925,-1.5963 -1.32126,-3.80713 -3.05254,-10.43306 -4.19867,-15.27995 l 12.10792,0.87625 z" transform="matrix(1.3024389 0.20100866 -0.34898744 0.75017448 51.231 52.73172)"/>
  <path style="clip-path:url(#clipPath4550-1);fill:url(#linearGradient4446)" id="path4280" d="m 408.54971,510.76147 c 3.70873,-0.72959 7.3878,-2.07765 7.72186,-1.76734 0.57403,0.53321 3.20442,10.67753 4.54939,15.85046 L 408.57143,523.798 z" transform="matrix(1.3024389 0.20100866 -0.34898744 0.75017448 51.231 52.73172)"/>
  <path style="clip-path:url(#clipPath4568-1);fill:url(#linearGradient4448)" id="path4282" d="m 408.57143,539.798 c 6.64535,0 13.34432,-4.5952 14.09629,-6.91921 0.31127,-0.96198 -1.84782,-6.35682 -1.84782,-8.57545 L 408.57143,523.798 z" transform="matrix(1.3024389 0.20100866 -0.34898744 0.75017448 51.231 52.73172)"/>
  <path style="clip-path:url(#clipPath4528-10);fill:url(#linearGradient4430);opacity:0.7;filter:url(#filter4390-0)" id="path4340" d="m 23.930472,11.460429 c -5.762171,0 -10.77965,-0.525717 -11.289049,0.407759 -0.331008,0.606573 -0.261179,8.426428 -0.261179,11.528249 L 24,24 z" transform="matrix(1.3483839 0 0 0.77663776 368.21016 509.15868)"/>
  <path style="clip-path:url(#clipPath4578-4);fill:url(#linearGradient4432);opacity:0.7;filter:url(#filter4390-0)" id="path4394" d="m 408.57143,539.798 c -5.95583,0 -10.94446,2.64808 -11.4642,-4.12184 -0.10411,-1.35619 0.007,-8.68834 0.007,-11.5965 l 11.45752,-0.28166 z" transform="matrix(1.3483839 0 0 0.77663776 -150.33976 120.99668)"/>
  <path style="clip-path:url(#clipPath4562-1);fill:url(#linearGradient4434);opacity:0.7;filter:url(#filter4390-0)" id="path4416" d="m 408.57143,539.798 c 8.86399,0 11.66611,-7.05553 11.66611,-15.91952 l -11.66611,-0.0805 z" transform="matrix(1.3483839 0 0 0.77663776 -150.33976 120.99668)"/>
  <path style="clip-path:url(#clipPath4544-4);fill:url(#linearGradient4436);opacity:0.7;filter:url(#filter4390-0)" id="path4486" d="m 408.64096,511.29867 c 8.86399,0 11.59658,3.47439 11.59658,12.33838 l -11.66611,0.16095 z" transform="matrix(1.3483839 0 0 0.77663776 -150.33976 120.99668)"/>
  <path style="clip-path:url(#clipPath4528-10);fill:url(#linearGradient4383);opacity:0.35" id="path4320" d="M 23.961295,7.4696601 C 17.33869,11.317054 11.667622,19.491919 7.6205681,23.9811 L 24,24 z" transform="matrix(0.9534514 0.54916582 -0.9534514 0.54916582 400.57141 501.43805)"/>
  <path style="clip-path:url(#clipPath4578-4);fill:url(#linearGradient4278);opacity:0.35" id="path4322" d="m 408.57143,539.798 c -7.33708,-7.38807 -11.38477,-11.2391 -16,-16 l 16,0 z" transform="matrix(0.9534514 0.54916582 -0.9534514 0.54916582 510.43435 15.772569)"/>
  <path style="clip-path:url(#clipPath4562-1);fill:url(#linearGradient4487);opacity:0.35" id="path4324" d="m 408.57143,539.798 c 8.86399,0 16,-7.13601 16,-16 l -16,0 0,16 z" transform="matrix(0.9534514 0.54916582 -0.9534514 0.54916582 510.43435 15.772569)"/>
  <path style="clip-path:url(#clipPath4544-4);fill:url(#linearGradient4389);opacity:0.35" id="path4326" d="m 408.57143,507.798 c 6.40862,5.86964 9.83628,9.65784 16,16 l -16,0 z" transform="matrix(0.9534514 0.54916582 -0.9534514 0.54916582 510.43435 15.772569)"/>
  <path style="clip-path:url(#clipPath4528-1-3);fill:url(#linearGradient4454);opacity:0.3" id="path4340-7" d="m 23.979056,11.809347 c -3.283282,-0.916015 -8.667038,-2.1040181 -8.77317,-1.710602 -0.779697,2.890225 -3.997225,8.373606 -3.997225,13.897249 L 24,24 z" transform="matrix(0.34898744 0.75017448 -1.3024389 0.20100866 423.45419 504.96961)"/>
  <path style="clip-path:url(#clipPath4578-8-5);fill:url(#linearGradient4420);opacity:0.3" id="path4394-4" d="m 409.10676,535.93453 c -7.81888,-2.05806 -14.67041,-4.03664 -14.90474,-4.53859 -0.3514,-0.7527 1.41061,-5.23061 1.41061,-7.59883 l 12.9588,8.9e-4 z" transform="matrix(0.34898744 0.75017448 -1.3024389 0.20100866 940.19995 116.01022)"/>
  <path style="clip-path:url(#clipPath4562-8-9);fill:url(#linearGradient4422);opacity:0.3" id="path4416-6" d="m 408.74809,535.71846 c 1.99491,0 6.5348,2.42445 8.27914,2.08346 6.00631,-1.17412 7.5442,-7.13484 7.5442,-14.00392 l -16,0 z" transform="matrix(0.34898744 0.75017448 -1.3024389 0.20100866 940.19995 116.01022)"/>
  <path style="clip-path:url(#clipPath4544-1-9);fill:url(#linearGradient4424);opacity:0.3" id="path4486-5" d="m 408.54137,511.79685 c 4.88949,1.31028 14.03815,3.68028 14.79044,4.2446 2.19289,1.64498 1.23962,3.89791 1.23962,7.75655 l -16,0 z" transform="matrix(0.34898744 0.75017448 -1.3024389 0.20100866 940.19995 116.01022)"/>
  <rect width="6" x="397.57144" y="540.79797" height="4" style="fill:url(#linearGradient4346)" id="rect4321"/>
  <rect width="12" x="394.57144" y="544.79797" height="1" style="fill:#99a1a7" id="rect4323"/>
  <path style="fill:url(#linearGradient4338)" id="rect4319" d="m 384.57143,517.798 0,23 32,0 0,-23 -32,0 z m 1,1 30,0 0,18 -30,0 0,-18 z"/>
 </g>
		</svg>
	{/if}
