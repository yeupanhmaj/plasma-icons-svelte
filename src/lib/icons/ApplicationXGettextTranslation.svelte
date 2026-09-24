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
  <path d="m8.338 1046.55l-1.032-1.02.012-.012c.707-.788 1.211-1.694 1.507-2.652h1.19v-.813h-2.843v-.812h-.812v.812h-2.843v.808h4.537c-.272.784-.703 1.527-1.288 2.177-.378-.418-.691-.877-.938-1.361h-.812c.297.662.703 1.288 1.211 1.852l-2.068 2.039.577.577 2.031-2.031 1.263 1.263zm2.287-2.06h-.812l-1.828 4.875h.812l.455-1.219h1.93l.459 1.219h.812zm-1.064 2.843l.658-1.759.658 1.759z"/>
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
  
  <g id="layer1" transform="matrix(1 0 0 1 -326 -534.3622)">
    <path style="fill:#6c7a89" id="rect4138" d="m 329,537.3622 0,4 0,11 0,1 10,0 6,0 0,-1 0,-5 0,-6 0,-4 -16,0 z m 1,4 14,0 0,6 0,5 -5,0 -9,0 0,-11 z"/>
    <path d="m 337.46549,548.52128 -1.42714,-1.41027 0.0168,-0.0168 c 0.97764,-1.09001 1.67435,-2.34296 2.0845,-3.66895 l 1.64626,0 0,-1.12373 -3.93303,0 0,-1.12373 -1.12372,0 0,1.12373 -3.93303,0 0,1.11811 6.27599,0 c -0.37645,1.0844 -0.97202,2.11259 -1.7811,3.01157 -0.52254,-0.57872 -0.95516,-1.21362 -1.2979,-1.88223 l -1.12373,0 c 0.41016,0.91584 0.97203,1.78111 1.67436,2.56208 l -2.85989,2.82055 0.79786,0.79783 2.8093,-2.8093 1.74739,1.74738 0.42701,-1.14618 z m 3.16327,-2.84864 -1.12373,0 -2.52837,6.74234 1.12373,0 0.62929,-1.68559 2.66883,0 0.6349,1.68559 1.12372,0 -2.52837,-6.74234 z m -1.47208,3.93302 0.91021,-2.43284 0.91022,2.43284 -1.82043,0 z" id="path6" style="fill:#6c7a89;fill-opacity:1"/>
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
   <path fill="url(#b)" d="m411.57 524.8l-7-7v7z"/>
   <path opacity=".2" fill="url(#c)" d="m411.57 531.8l-7-7h7z"/>
  </g>
  <path fill="#fbfbfb" d="m394.57 527.8v12h12v-12zm1 3h3.336v.666h-2.848v.809h4.545c-.273.785-.703 1.53-1.289 2.182-.378-.419-.693-.879-.941-1.363h-.814c.297.663.704 1.29 1.213 1.855l-2.07 2.043.578.578 2.035-2.035 1.266 1.266.309-.83-1.033-1.021.012-.012c.708-.79 1.213-1.698 1.51-2.658h1.191v-.813h-2.848v-.666h5.85v8c-.404-.004-.748-.006-1.137-.01h.578l-1.832-4.883h-.814l-1.818 4.85c-1.605-.005-3.21.005-4.977.043zm7.203 4.193l.658 1.762h-1.318zm-.969 2.576h1.934l.459 1.219c-.965-.01-1.922-.02-2.84-.025z"/>
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
  <path fill="url(#b)" d="m54 17l-14-14v14z"/>
  <path opacity=".2" fill="url(#c)" d="m40 17l14 14v-14z"/>
  <path fill="#fbfbfb" d="m21 22v22h22v-22zm1 5h6.826v1.414h-5.695v1.619h9.09c-.545 1.57-1.406 3.06-2.578 4.361-.757-.838-1.383-1.758-1.879-2.727h-1.629c.594 1.326 1.409 2.58 2.426 3.711l-4.143 4.084 1.156 1.156 4.068-4.068 2.529 2.529.619-1.66-2.066-2.041.023-.025c1.416-1.578 2.426-3.392 3.02-5.313h2.385v-1.627h-5.697v-1.414h11.547v16h-.99l-3.641-9.705h-1.627l-3.639 9.705h-10.1zm14.557 8.469l1.318 3.521h-2.637zm-1.938 5.15h3.865l.898 2.381h-5.652z"/>
 </g>
		</svg>
	{/if}
