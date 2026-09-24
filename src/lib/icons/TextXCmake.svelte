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
			<defs>
  <linearGradient id="a" x1="13.945" x2="1.994" gradientUnits="userSpaceOnUse">
   <stop stop-color="#42a603"/>
   <stop offset="1" stop-color="#78da06"/>
  </linearGradient>
  <linearGradient id="b" y1="1.991" x1="7.97" y2="13.942" x2="1.994" gradientUnits="userSpaceOnUse">
   <stop stop-color="#197cf1"/>
   <stop offset="1" stop-color="#20bcfa"/>
  </linearGradient>
  <linearGradient id="c" y1="13.942" x1="13.945" y2="1.991" x2="7.97" gradientUnits="userSpaceOnUse">
   <stop stop-color="#c61423"/>
   <stop offset="1" stop-color="#dc2b41"/>
  </linearGradient>
 </defs>
 <g fill-rule="evenodd">
  <path fill="url(#c)" d="m7.97 1.991l.878 9.948 5.098 2z"/>
  <path fill="url(#b)" d="m7.97 1.991l-5.975 11.951 6.512-5.876z"/>
  <path fill="url(#a)" d="m5.619 10.671l-3.624 3.27h11.95zm-3.614 3.25l-.022.02h.012z"/>
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
			<defs id="defs3871">
    <linearGradient gradientTransform="matrix(0.39877184,0,0,0.39877184,327.3914,535.74109)" xlink:href="#linearGradient4298" id="linearGradient4333" x1="44" x2="4" gradientUnits="userSpaceOnUse"/>
    <linearGradient id="linearGradient4298">
      <stop style="stop-color:#42a603" id="stop4300"/>
      <stop offset="1" style="stop-color:#78da06" id="stop4302-5"/>
    </linearGradient>
    <linearGradient gradientTransform="matrix(0.39877184,0,0,0.39877184,327.3914,535.74109)" xlink:href="#linearGradient4143" id="linearGradient4315" y1="4" x1="24" y2="44" x2="4.0000401" gradientUnits="userSpaceOnUse"/>
    <linearGradient id="linearGradient4143">
      <stop style="stop-color:#197cf1" id="stop4145"/>
      <stop offset="1" style="stop-color:#20bcfa" id="stop4147"/>
    </linearGradient>
    <linearGradient gradientTransform="matrix(0.39877184,0,0,0.39877184,327.3914,535.74109)" xlink:href="#linearGradient4435" id="linearGradient4325" y1="43.999973" x1="44" y2="4" x2="24" gradientUnits="userSpaceOnUse"/>
    <linearGradient id="linearGradient4435">
      <stop style="stop-color:#c61423" id="stop4437"/>
      <stop offset="1" style="stop-color:#dc2b41" id="stop4439"/>
    </linearGradient>
  </defs>
  
  <g id="layer1" transform="matrix(1 0 0 1 -326 -534.3622)">
    <path style="fill:url(#linearGradient4325);fill-rule:evenodd" id="path4198" d="m 336.96192,537.33619 1.1714,13.27785 6.80404,2.67302 -7.97544,-15.95087 z"/>
    <path style="fill:url(#linearGradient4315);fill-rule:evenodd" id="path4198-8" d="m 336.96192,537.33619 -7.97544,15.95087 8.6912,-7.84303 -0.71576,-8.10784 z"/>
    <path style="fill:url(#linearGradient4333);fill-rule:evenodd" id="path4198-84" d="m 333.82471,548.92161 -4.83667,4.36389 15.94932,0.001 -11.11265,-4.36546 z m -4.82421,4.33742 -0.0287,0.0265 0.0156,0 0.0133,-0.0265 z"/>
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
  <linearGradient id="a" x1="406.84" x2="394.59" gradientUnits="userSpaceOnUse">
   <stop stop-color="#42a603"/>
   <stop offset="1" stop-color="#78da06"/>
  </linearGradient>
  <linearGradient id="b" y1="524.58" x1="400.71" y2="536.83" x2="394.59" gradientUnits="userSpaceOnUse">
   <stop stop-color="#197cf1"/>
   <stop offset="1" stop-color="#20bcfa"/>
  </linearGradient>
  <linearGradient id="c" y1="536.83" x1="406.84" y2="524.58" x2="400.71" gradientUnits="userSpaceOnUse">
   <stop stop-color="#c61423"/>
   <stop offset="1" stop-color="#dc2b41"/>
  </linearGradient>
  <linearGradient id="d" y1="518.04" y2="524.8" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#566472"/>
   <stop offset="1" stop-color="#5e6b78"/>
  </linearGradient>
  <linearGradient id="e" y1="524.8" x1="404.57" y2="531.8" x2="411.57" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="f" y1="2.719" y2="61" x1="7.729" x2="8.271" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.5 0 0-.48276 384.57 547.25)">
   <stop stop-color="#bdc3c7"/>
   <stop offset="1" stop-color="#dadfe1"/>
  </linearGradient>
 </defs>
 <g transform="translate(-384.57-515.8)">
  <path fill="url(#f)" d="m389.57 545.8v-28h15l7 7v21h-7z"/>
  <g transform="scale(1-1)">
   <rect width="15" x="389.57" y="-518.8" fill="#ffffff" height="1" fill-opacity=".412"/>
   <rect width="22" x="389.57" y="-545.8" fill="#2e3132" height="1" fill-opacity=".294"/>
  </g>
  <g fill-rule="evenodd">
   <path fill="url(#d)" d="m411.57 524.8l-7-7v7z"/>
   <path opacity=".2" fill="url(#e)" d="m411.57 531.8l-7-7h7z"/>
   <g transform="matrix(.9788 0 0 .97971 8.36 13.86)">
    <path fill="url(#c)" d="m400.71 524.58l.899 10.196 5.225 2.053z"/>
    <path fill="url(#b)" d="m400.71 524.58l-6.124 12.249 6.674-6.02z"/>
    <path fill="url(#a)" d="m398.3 533.48l-3.714 3.351h12.247zm-3.704 3.331l-.022.02h.012z"/>
   </g>
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
  <linearGradient id="a" y1="17" x1="40" y2="31" gradientUnits="userSpaceOnUse" x2="54" gradientTransform="translate(366 182.36)">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="336.36" gradientUnits="userSpaceOnUse" x2="0" gradientTransform="translate(318-150)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m376 243.36v-58h30l14 14v44h-14z"/>
 </defs>
 <g transform="translate(-366-182.36)">
  <use fill="#cccccc" xlink:href="#c"/>
  <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000" transform="scale(1-1)">
   <rect opacity=".5" x="376" y="-186.36" width="30" fill="#ffffff" height="1"/>
   <rect opacity=".25" x="376" y="-243.36" width="44" height="1"/>
  </g>
  <g fill-rule="evenodd">
   <path opacity=".6" d="m420 199.36l-14-14v14z"/>
   <path opacity=".2" fill="url(#a)" d="m406 199.36l14 14v-14z"/>
   <path opacity=".529" fill="#f20000" d="m398.01 204.36l1.614 18.313 9.376 3.687z"/>
   <path opacity=".529" fill="#37a0ff" d="m398.01 204.36l-10.99 22 11.976-10.817z"/>
   <path opacity=".529" fill="#13d403" d="m393.69 220.34l-6.665 6.02 21.977.002zm-6.648 5.982l-.04.036h.022z"/>
  </g>
  <use fill="url(#b)" xlink:href="#c"/>
 </g>
		</svg>
	{/if}
