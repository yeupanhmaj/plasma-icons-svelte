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
			<path fill="#6c7a89" fill-rule="evenodd" d="m2 2l3 6-3 6h2l3-6-3-6zm3 0l3 6-3 6h2l2-4 2 4h2l-6-12zm6 4l1 2h2v-2zm1.5 3l1 2h.5v-2z"/>
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
 <path style="shape-rendering:auto;color-interpolation-filters:linearRGB;fill:#6c7a89;image-rendering:auto;text-rendering:auto;color:#000000;fill-rule:evenodd;stroke-width:4;color-rendering:auto;color-interpolation:sRGB" id="path5706" d="M 3 3 L 7 11 L 3 19 L 5.2363281 19 L 9.2363281 11 L 5.2363281 3 L 3 3 z M 7 3 L 11 11 L 10.990234 11 L 10.996094 11.009766 L 7 19 L 9.2363281 19 L 12.113281 13.246094 L 14.990234 19 L 17.226562 19 L 13.230469 11.009766 L 13.236328 11 L 9.2363281 3 L 7 3 z M 14.472656 9 L 15.472656 11 L 19 11 L 19 9 L 14.472656 9 z M 16.472656 13 L 17.472656 15 L 19 15 L 19 13 L 16.472656 13 z "/>
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
  <linearGradient id="a" y1="518.04" y2="524.8" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#566472"/>
   <stop offset="1" stop-color="#5e6b78"/>
  </linearGradient>
  <linearGradient id="b" y1="524.8" x1="404.57" y2="531.8" x2="411.57" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="c" y1="2.719" y2="61" x1="7.729" x2="8.271" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.5 0 0-.48276 384.57 547.25)">
   <stop stop-color="#bdc3c7"/>
   <stop offset="1" stop-color="#dadfe1"/>
  </linearGradient>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <path fill="url(#c)" d="m389.57 545.8v-28h15l7 7v21h-7z"/>
  <g transform="scale(1-1)">
   <rect width="15" x="389.57" y="-518.8" fill="#ffffff" height="1" fill-opacity=".412"/>
   <rect width="22" x="389.57" y="-545.8" fill="#2e3132" height="1" fill-opacity=".294"/>
  </g>
  <g fill-rule="evenodd">
   <path fill="url(#a)" d="m411.57 524.8l-7-7v7z"/>
   <path opacity=".2" fill="url(#b)" d="m411.57 531.8l-7-7h7z"/>
   <path fill="#5e6b78" d="m394.57 527.8l3 6-3 6h2l3-6-3-6zm3 0l3 6-3 6h2l2-4 2 4h2l-6-12zm6 4l1 2h2v-2zm1.5 3l1 2h.5v-2z"/>
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
			<defs>
  <linearGradient id="a" y1="3" y2="61" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#bdc3c7"/>
   <stop offset="1" stop-color="#dadfe1"/>
  </linearGradient>
  <linearGradient id="b" y1="61" y2="47" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#566472"/>
   <stop offset="1" stop-color="#5e6b78"/>
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
  <path fill="#5e6b78" d="m21 22l6 11-6 11h3l6-11-6-11zm6 0l6 11-6 11h3l4.5-8.25 4.5 8.25h3l-12-22zm10.363 8l1.092 2h4.545v-2zm2.182 4l1.092 2h2.363v-2z"/>
 </g>
		</svg>
	{/if}
