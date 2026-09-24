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
			<g fill="#6c7a89" transform="translate(0-1036.36)">
  <path d="m2 2v12h12v-12zm1 3h10v8c-3.551-.037-6.45-.077-10 0z" transform="translate(0 1036.36)"/>
  <path stroke-linejoin="round" stroke-width="2" d="m8 1042.36c-.556 0-1.074.17-1.44.49-.365.32-.56.774-.56 1.26h1.143c0-.264.091-.435.225-.553.135-.118.33-.197.632-.197.302 0 .497.08.632.197.135.118.225.289.225.553 0 .229-.052.327-.121.413-.298.263-.658.488-.948.703-.327.215-.646.496-.646.884v.25h1.143v-.25c.406-.364 1.011-.681 1.388-1.015.199-.25.326-.59.326-.985 0-.486-.195-.94-.56-1.26-.365-.32-.884-.49-1.44-.49m-.857 5v1h1.143v-1z"/>
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
			<defs id="defs3871"/>
 <metadata id="metadata3874"/>
 <g inkscape:label="Capa 1" inkscape:groupmode="layer" id="layer1" transform="matrix(1 0 0 1 -326 -534.3622)">
  <path inkscape:connector-curvature="0" style="fill:#6c7a89" id="rect4138" d="m 329,537.3622 0,4 0,11 0,1 10,0 6,0 0,-1 0,-5 0,-6 0,-4 -16,0 z m 1,4 14,0 0,6 0,5 -5,0 -9,0 0,-11 z"/>
  <path inkscape:connector-curvature="0" style="fill:#6c7a89;stroke-linecap:round;stroke-linejoin:round;stroke-width:2" id="rect4169-4" d="m 336.9995,542.3622 c -0.83305,0 -1.61102,0.25574 -2.15908,0.73537 C 334.29225,543.5772 334,544.25818 334,544.98718 l 1.71383,0 c 0,-0.39586 0.13665,-0.6525 0.33838,-0.8289 0.20159,-0.17672 0.49525,-0.2961 0.94729,-0.2961 0.45287,0 0.7457,0.1194 0.94782,0.2961 0.20184,0.1764 0.33785,0.43304 0.33785,0.8289 0,0.3438 -0.076,0.49004 -0.18053,0.61969 -0.4469,0.39461 -0.98704,0.73165 -1.42122,1.05465 -0.49028,0.32186 -0.96904,0.74396 -0.96904,1.32568 l 0,0.37498 1.71403,0 0,-0.37498 c 0.60947,-0.54572 1.51702,-1.02166 2.0825,-1.522 0.29841,-0.37423 0.48909,-0.88402 0.48909,-1.47828 0,-0.729 -0.29241,-1.40972 -0.84025,-1.88935 -0.54823,-0.47963 -1.32672,-0.73537 -2.1599,-0.73537 z m -1.28512,7.50028 0,1.49972 1.71403,0 0,-1.49972 z"/>
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
   <stop stop-color="#5e6b78"/>
   <stop offset="1" stop-color="#768492"/>
  </linearGradient>
  <linearGradient id="b" y1="518.04" y2="524.8" x2="0" gradientUnits="userSpaceOnUse">
   <stop stop-color="#dedede"/>
   <stop offset="1" stop-color="#fbfbfb"/>
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
   <path opacity=".75" fill="url(#b)" d="m411.57 524.8l-7-7v7z"/>
   <path opacity=".2" fill="url(#c)" d="m411.57 531.8l-7-7h7z"/>
  </g>
  <path opacity=".75" fill="#fbfbfb" d="m394.57 526.8v12h12v-12zm1 3h10v8c-3.551-.037-6.45-.077-10 0zm5.199 1c-.486 0-.94.17-1.26.49-.32.32-.49.774-.49 1.26h1c0-.264.079-.435.197-.553.118-.118.289-.197.553-.197.264 0 .435.08.553.197.118.118.197.289.197.553 0 .229-.045.326-.105.412-.261.263-.575.488-.828.703-.286.215-.566.497-.566.885v.25h1v-.25c.355-.364.885-.682 1.215-1.016.174-.25.285-.589.285-.984 0-.486-.17-.94-.49-1.26-.32-.32-.774-.49-1.26-.49m-.75 5v1h1v-1z"/>
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
   <stop stop-color="#5e6b78"/>
   <stop offset="1" stop-color="#768492"/>
  </linearGradient>
  <linearGradient id="b" y1="61" y2="47" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1 0 0-1 0 64)">
   <stop stop-color="#dedede"/>
   <stop offset="1" stop-color="#fbfbfb"/>
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
  <path opacity=".75" fill="url(#b)" d="m54 17l-14-14v14z"/>
  <path opacity=".2" fill="url(#c)" d="m40 17l14 14v-14z"/>
  <path opacity=".75" fill="#fbfbfb" d="m21 22v22h22v-22zm1 5h20v16h-20zm10.5 2c-.972 0-1.88.341-2.52.98-.64.64-.98 1.547-.98 2.52h2c0-.528.159-.87.395-1.105.235-.235.578-.395 1.105-.395.528 0 .87.159 1.105.395.235.235.395.578.395 1.105 0 .458-.09.653-.211.826-.521.526-1.152.976-1.658 1.406-.572.429-1.131.992-1.131 1.768v.5h2v-.5c.711-.728 1.77-1.362 2.43-2.029.348-.499.57-1.179.57-1.971 0-.972-.341-1.88-.98-2.52-.64-.64-1.547-.98-2.52-.98m-1.5 10v2h2v-2z"/>
 </g>
		</svg>
	{/if}
