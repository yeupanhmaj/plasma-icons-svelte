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
			<path fill="#f59e16" color="#4d4d4d" d="m7.5 2v1.125c-.843.078-1.507.291-2 .688-.542.432-.813 1.072-.813 1.906 0 1.165.697 1.921 2.125 2.281l.688.188v3.688c-.887-.079-1.719-.273-2.5-.656l-.344.906c.318.195.752.379 1.281.531.465.129.988.186 1.563.219v1.125h1v-1.125c.85-.068 1.533-.327 2.031-.781.534-.483.812-1.183.813-2.094 0-.737-.2-1.289-.594-1.688-.394-.403-.987-.693-1.75-.875l-.5-.125v-3.25c.386.029.787.083 1.156.188.424.114.742.262 1 .406l.313-.906c-.64-.399-1.461-.637-2.469-.688v-1.063h-.75zm-.219 2.094c.065-.011.149.008.219 0v2.969l-.281-.063c-.47-.114-.825-.284-1.063-.5-.233-.22-.344-.515-.344-.875 0-.856.483-1.366 1.469-1.531m1.219 4.313l.188.063c.576.144.971.34 1.188.594.22.25.312.593.313 1 0 1.133-.563 1.735-1.688 1.844z"/>
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
    <path style="stroke-opacity:0.550265;fill:#f59e16;color:#4d4d4d;stroke-width:2.8;fill-opacity:1" id="rect4144" d="M 4,6 4,6.5 4,7 3,7 3,7.9082031 3,9 3,14 3,14.091797 3,15 3.5,15 4,15 4,16 4.9082031,16 6,16 l 10,0 0.0918,0 1,0 0.9082,0 0,-1 0.5,0 0.5,0 0,-0.908203 L 19,13 19,9 19,7.9082031 19,7 18,7 18,6.5 18,6 l -0.908203,0 -1,0 L 4.9082031,6 4,6 Z m 0.9082031,1 11.1835939,0 1,0 C 17.242137,7.4247 17.5753,7.7578631 18,7.9082031 L 18,9 l 0,4 0,1.091797 C 17.5753,14.242137 17.242137,14.5753 17.091797,15 l -1,0 L 16,15 6,15 4.9082031,15 C 4.7578631,14.5753 4.4247,14.242137 4,14.091797 L 4,13 4,9 4,7.9082031 C 4.4247013,7.7578551 4.7578551,7.4247013 4.9082031,7 Z M 11,8 c -1.662,0 -3,1.338 -3,3 0,1.662 1.338,3 3,3 1.662,0 3,-1.338 3,-3 0,-1.662 -1.338,-3 -3,-3 z m 0,1 c 1.108,0 2,0.892 2,2 0,1.108 -0.892,2 -2,2 C 9.892,13 9,12.108 9,11 9,9.892 9.892,9 11,9 Z" transform="matrix(1 0 0 1 326 534.3622)"/>
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
  <linearGradient id="a" y1="61" y2="3" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.5 0 0-.48276 384.57 547.25)">
   <stop stop-color="#f39c12"/>
   <stop offset="1" stop-color="#f9a11f"/>
  </linearGradient>
  <linearGradient id="b" y1="518.04" y2="524.8" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#fddda3"/>
   <stop offset="1" stop-color="#fde3a7"/>
  </linearGradient>
  <linearGradient id="c" y1="524.8" x1="404.57" y2="531.8" x2="411.57" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <path fill="url(#a)" d="m389.57 545.8v-28h15l7 7v21h-7z"/>
  <g transform="scale(1-1)">
   <rect width="15" x="389.57" y="-518.8" fill="#ffffff" height="1" fill-opacity=".412"/>
   <rect width="22" x="389.57" y="-545.8" fill="#2e3132" height="1" fill-opacity=".294"/>
  </g>
  <g fill-rule="evenodd">
   <path fill="url(#b)" d="m411.57 524.8l-7-7v7z"/>
   <path opacity=".2" fill="url(#c)" d="m411.57 531.8l-7-7h7z"/>
  </g>
  <path fill="#fddda3" color="#4d4d4d" d="m400.07 527.8v1.125c-.843.078-1.507.291-2 .688-.542.432-.813 1.072-.813 1.906 0 1.165.697 1.921 2.125 2.281l.688.188v3.688c-.887-.079-1.719-.273-2.5-.656l-.344.906c.318.195.752.379 1.281.531.465.129.988.186 1.563.219v1.125h1v-1.125c.85-.068 1.533-.327 2.031-.781.534-.483.812-1.183.813-2.094 0-.737-.2-1.289-.594-1.688-.394-.403-.987-.693-1.75-.875l-.5-.125v-3.25c.386.029.787.083 1.156.188.424.114.742.262 1 .406l.313-.906c-.64-.399-1.461-.637-2.469-.688v-1.063h-.75zm-.219 2.094c.065-.011.149.008.219 0v2.969l-.281-.063c-.47-.114-.825-.284-1.063-.5-.233-.22-.344-.515-.344-.875 0-.856.483-1.366 1.469-1.531m1.219 4.313l.188.063c.576.144.971.34 1.188.594.22.25.312.593.313 1 0 1.133-.563 1.735-1.688 1.844z"/>
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
  <linearGradient id="a" y1="3" y2="61" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#f39c12"/>
   <stop offset="1" stop-color="#f89406"/>
  </linearGradient>
  <linearGradient id="b" y1="61" y2="47" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#fddda3"/>
   <stop offset="1" stop-color="#fde3a7"/>
  </linearGradient>
  <linearGradient id="c" y1="17" x1="40" y2="31" x2="54" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
 </defs>
 <path fill="url(#a)" d="m10 61v-58h30l14 14v44h-14z"/>
 <g transform="scale(1-1)">
  <rect width="30" x="10" y="-4" fill="#ffffff" height="1" fill-opacity=".412"/>
  <rect width="44" x="10" y="-61" fill="#2e3132" height="1" fill-opacity=".294"/>
 </g>
 <g fill-rule="evenodd">
  <path fill="url(#b)" d="m54 17l-14-14v14z"/>
  <path opacity=".2" fill="url(#c)" d="m40 17l14 14v-14z"/>
 </g>
 <path fill="#fddda3" stroke-width="2" d="m22 27v1h-1v12h1v1h20v-1h1v-12h-1v-1zm1 1h18a1 1 0 0 0 1 1v10a1 1 0 0 0 -1 1h-18a1 1 0 0 0 -1 -1v-10a1 1 0 0 0 1 -1m9 2a4 4 0 0 0 -4 4 4 4 0 0 0 4 4 4 4 0 0 0 4 -4 4 4 0 0 0 -4 -4m0 1a3 3 0 0 1 3 3 3 3 0 0 1 -3 3 3 3 0 0 1 -3 -3 3 3 0 0 1 3 -3"/>
		</svg>
	{/if}
