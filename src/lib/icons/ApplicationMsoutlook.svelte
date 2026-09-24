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
			<path fill="#3c56a0" d="m2 3c-.554 0-1 .446-1 1v8c0 .554.446 1 1 1h12c.554 0 1-.446 1-1v-8c0-.554-.446-1-1-1zm0 1h.293l3.641 3.641-3.736 4.359h-.197zm1.707 0h8.586l-4.293 4.293zm10 0h.293v8h-.197l-3.736-4.359zm-7.06 4.35l1.357 1.357 1.357-1.357 3.127 3.65h-8.971z"/>
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
    <g transform="matrix(0.18204292,0,0,0.18204292,269.77536,537.6271)" id="outlook">
      <path style="color:#000000;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#3c56a0;fill-opacity:1;fill-rule:nonzero;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" d="M 2,3 C 1.446,3 1,3.446 1,4 L 1,4.3339844 1,17.666016 1,18 c 0,0.554 0.446,1 1,1 l 18,0 c 0.554,0 1,-0.446 1,-1 L 21,17.666016 21,4.3339844 21,4 C 21,3.446 20.554,3 20,3 Z M 2.9999997,4.0000001 19,4.0000001 11,11.567366 Z M 2,4.4550781 8.1425781,10.318359 2,16.183594 Z m 18,0 0,11.7265629 -6.142578,-5.863282 z M 8.9176037,11.049438 11,13.044922 13.038458,11.113885 20,17.51098 20,18 1.9999997,18 l 0,-0.548596 z" transform="matrix(5.4932101,0,0,5.4932101,308.85376,-17.934782)" id="path36"/>
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
			<defs>
  <linearGradient id="a" y1="61" y2="3" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.5 0 0-.48276 384.57 547.25)">
   <stop stop-color="#3a539b"/>
   <stop offset="1" stop-color="#3f5aa9"/>
  </linearGradient>
  <linearGradient id="b" y1="518.04" y2="524.8" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#97aad8"/>
   <stop offset="1" stop-color="#c1cae7"/>
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
  <path opacity=".75" fill="#ffffff" d="m394.57 527.8c-.554 0-1 .446-1 1v8c0 .554.446 1 1 1h12c.554 0 1-.446 1-1v-8c0-.554-.446-1-1-1zm0 1h.293l3.641 3.641-3.736 4.359h-.197zm1.707 0h8.586l-4.293 4.293zm10 0h.293v8h-.197l-3.736-4.359zm-7.06 4.35l1.357 1.357 1.357-1.357 3.127 3.65h-8.971z"/>
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
  <linearGradient id="a" y1="61" y2="3" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#3a539b"/>
   <stop offset="1" stop-color="#3f5aa9"/>
  </linearGradient>
  <linearGradient id="b" y1="61" y2="47" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#97aad8"/>
   <stop offset="1" stop-color="#c1cae7"/>
  </linearGradient>
  <linearGradient id="c" y1="17" x1="40" y2="31" x2="54" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
  <path opacity=".2" fill="url(#c)" fill-rule="evenodd" id="d" d="m40 17l14 14v-14z"/>
 </defs>
 <path fill="url(#a)" d="m10 61v-58h30l14 14v44h-14z"/>
 <g transform="scale(1-1)">
  <rect width="30" x="10" y="-4" fill="#ffffff" height="1" fill-opacity=".412"/>
  <rect width="44" x="10" y="-61" fill="#2e3132" height="1" fill-opacity=".294"/>
 </g>
 <path fill="url(#b)" fill-rule="evenodd" d="m54 17l-14-14v14z"/>
 <use xlink:href="#d"/>
 <use xlink:href="#d"/>
 <path opacity=".75" fill="#ffffff" color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000" d="m21 24c-.554 0-1 .446-1 1v16c0 .554.446 1 1 1h22c.554 0 1-.446 1-1v-16c0-.554-.446-1-1-1zm0 1h.047l7.525 7.182-7.572 7.227zm1.258 0h19.484l-9.742 9.297zm20.695 0h.047v14.408l-7.572-7.227zm-13.775 7.76l2.822 2.695 2.822-2.695 8.178 7.807v.434h-22v-.434z"/>
		</svg>
	{/if}
