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
			<path fill="#3a539b" d="m5 2c-1.662 0-3 1.338-3 3v1l5 8v-6h4c1.662 0 3-1.338 3-3 0-1.662-1.338-3-3-3zm6 1c1.105 0 2 .895 2 2 0 1.105-.895 2-2 2-1.105 0-2-.895-2-2 0-1.105.895-2 2-2"/>
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
 <metadata id="metadata3874"/>
 <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -326 -534.3622)">
  <path style="fill:#3a539b;stroke-width:6" id="path4831" d="M 7 3 C 4.7908611 3.0000003 3.0000003 4.7908611 3 7 L 3 8 L 3.3144531 8.4941406 L 4.1113281 9.7480469 C 4.1119596 9.7487175 4.1126494 9.7493298 4.1132812 9.75 L 10 19 L 10 11 L 15 11 C 17.209139 11 19 9.2091389 19 7 C 19 4.7908611 17.209139 3.0000003 15 3 L 7 3 z M 15 4 A 3 3 0 0 1 15.576172 4.0585938 A 3 3 0 0 1 15.595703 4.0605469 C 15.613785 4.0641866 15.630474 4.0702555 15.648438 4.0742188 A 3 3 0 0 1 16.167969 4.2363281 A 3 3 0 0 1 16.646484 4.4941406 C 16.659939 4.5029989 16.674198 4.5104634 16.6875 4.5195312 A 3 3 0 0 1 16.693359 4.5234375 A 3 3 0 0 1 17.103516 4.8632812 C 17.111714 4.8713527 17.120801 4.8785542 17.128906 4.8867188 A 3 3 0 0 1 17.451172 5.2773438 C 17.468741 5.3022899 17.487086 5.3260646 17.503906 5.3515625 A 3 3 0 0 1 17.746094 5.8007812 C 17.753865 5.8185508 17.762096 5.8355684 17.769531 5.8535156 A 3 3 0 0 1 17.923828 6.3457031 C 17.929966 6.3732473 17.937984 6.3999104 17.943359 6.4277344 A 3 3 0 0 1 18 7 A 3 3 0 0 1 17.941406 7.5761719 A 3 3 0 0 1 17.939453 7.5957031 C 17.935813 7.6137845 17.929745 7.6304754 17.925781 7.6484375 A 3 3 0 0 1 17.763672 8.1679688 A 3 3 0 0 1 17.505859 8.6464844 C 17.497001 8.6599387 17.489537 8.6741979 17.480469 8.6875 A 3 3 0 0 1 17.476562 8.6933594 A 3 3 0 0 1 17.136719 9.1035156 C 17.128647 9.1117138 17.121446 9.120801 17.113281 9.1289062 A 3 3 0 0 1 16.722656 9.4511719 C 16.69771 9.4687411 16.673935 9.4870866 16.648438 9.5039062 A 3 3 0 0 1 16.199219 9.7460938 C 16.181449 9.7538646 16.164432 9.7620965 16.146484 9.7695312 A 3 3 0 0 1 15.654297 9.9238281 C 15.626753 9.9299663 15.60009 9.9379844 15.572266 9.9433594 A 3 3 0 0 1 15 10 A 3 3 0 0 1 12 7 A 3 3 0 0 1 15 4 z " transform="matrix(1 0 0 1 326 534.3622)"/>
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
			<defs>
  <linearGradient id="a" y1="61" y2="3" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.63636 0 0 .48276 380.21 516.35)">
   <stop stop-color="#3a539b"/>
   <stop offset="1" stop-color="#3f5aa9"/>
  </linearGradient>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <path fill="url(#a)" d="m386.57 517.8v28h28v-28h-8.909z"/>
  <rect width="28" x="386.57" y="544.8" fill="#2e3132" height="1" fill-opacity=".294"/>
  <rect width="28" x="386.57" y="517.8" fill="#ffffff" height="1" fill-opacity=".412"/>
  <path fill="#c1cae7" d="m397.57 526.8c-1.662 0-3 1.338-3 3v1l5 8v-6h4c1.662 0 3-1.338 3-3 0-1.662-1.338-3-3-3zm6 1c1.105 0 2 .895 2 2 0 1.105-.895 2-2 2-1.105 0-2-.895-2-2 0-1.105.895-2 2-2"/>
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
			<defs>
  <linearGradient id="a" y1="57" y2="7" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#3a539b"/>
   <stop offset="1" stop-color="#3f5aa9"/>
  </linearGradient>
 </defs>
 <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
  <path fill="url(#a)" d="m4 57v-50h56v50z"/>
  <rect opacity=".25" x="4" y="56" width="56" height="1"/>
  <rect opacity=".5" x="4" y="7" width="56" fill="#ffffff" height="1"/>
  <path opacity=".75" fill="#c1cae7" stroke-width="2" d="m8 11v42h48v-42h-1zm1 1h46v40h-46z"/>
 </g>
 <path fill="#c1cae7" d="m27 21c-3.324 0-6 2.676-6 6 0 1.096.295 2.119.805 3l-.004-.002.082.131c.058.094.113.189.176.279l7.942 12.59v-10h7c3.324 0 6-2.676 6-6 0-3.324-2.676-6-6-6zm10 2a4 4 0 0 1 4 4 4 4 0 0 1 -4 4 4 4 0 0 1 -4 -4 4 4 0 0 1 4 -4"/>
		</svg>
	{/if}
