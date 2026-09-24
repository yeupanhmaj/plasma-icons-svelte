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
			<g fill="#51db51">
  <path d="m10.06 1.988c-2.175 0-3.939 1.762-3.939 3.936 0 .591.134 1.15.367 1.652l-.674.797-.059.748c-.006.005-.734.027-.734.027l-.375.271c0 0 .003.816 0 .805v.002l-.803.014-.338.387-.008.732c0 0-.692-.045-.762.02v.002c-.442.407-.74.697-.74.697l.002 1.918.633-.004h-.26l5.104-5.102c.307.267.662.474 1.041.637.476.205.993.334 1.545.334 2.176 0 3.939-1.763 3.939-3.938 0-2.174-1.763-3.936-3.939-3.936m.752 1.877c.725 0 1.313.587 1.313 1.313 0 .725-.587 1.313-1.313 1.313-.725 0-1.314-.587-1.314-1.313 0-.725.589-1.313 1.314-1.313"/>
  <path opacity=".525" d="m10.814 3.865c-.725 0-1.314.587-1.314 1.313 0 .725.589 1.313 1.314 1.313.725 0 1.313-.587 1.313-1.313 0-.725-.587-1.313-1.313-1.313m0 .75c.311 0 .563.252.563.563 0 .31-.252.563-.563.563-.311 0-.564-.252-.564-.563 0-.311.254-.563.564-.563m-3.338 4.275l-5.104 5.102h1.877l4.453-4.377c-.454-.168-.868-.413-1.227-.725"/>
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
			<defs
     id="defs3871" />
  
  
  <g
     id="layer1"
     transform="translate(-326,-534.3622)">
    <path
       style="fill:#51db51;fill-opacity:1"
       d="M 13.734375 3.0214844 C 10.836845 3.0214844 8.4882812 5.3686019 8.4882812 8.2636719 C 8.4882812 9.0505519 8.6663325 9.7934506 8.9765625 10.462891 L 8.0800781 11.525391 L 8.0019531 12.521484 C 7.9939631 12.528884 7.0234375 12.558594 7.0234375 12.558594 L 6.5253906 12.919922 C 6.5253906 12.919922 6.5274375 14.006787 6.5234375 13.992188 L 5.4550781 14.009766 L 5.0039062 14.525391 L 4.9941406 15.5 C 4.9941406 15.5 4.0719156 15.439491 3.9785156 15.525391 L 3.9804688 15.527344 C 3.3914787 16.069864 2.9941406 16.457031 2.9941406 16.457031 L 2.9980469 19.005859 L 3.4980469 19.003906 L 10.291016 12.210938 C 10.747683 12.608798 11.276835 12.922077 11.851562 13.144531 C 12.437328 13.372465 13.069976 13.505859 13.736328 13.505859 C 16.634368 13.505859 18.982422 11.157309 18.982422 8.2617188 C 18.982422 5.3666387 16.633505 3.0207944 13.734375 3.0214844 z M 14.736328 5.5175781 C 15.701998 5.5175781 16.484375 6.3018881 16.484375 7.2675781 C 16.484375 8.2332581 15.701998 9.015625 14.736328 9.015625 C 13.770138 9.015625 12.986328 8.2332581 12.986328 7.2675781 C 12.986328 6.3018881 13.770138 5.5175781 14.736328 5.5175781 z "
       transform="translate(326,534.3622)"
       id="path5" />
    <path
       style="fill:#51db51;fill-opacity:1;opacity:0.5"
       d="M 14.736328 5.5175781 C 13.770138 5.5175781 12.986328 6.3018881 12.986328 7.2675781 C 12.986328 8.2332581 13.770138 9.015625 14.736328 9.015625 C 15.701998 9.015625 16.484375 8.2332581 16.484375 7.2675781 C 16.484375 6.3018881 15.701998 5.5175781 14.736328 5.5175781 z M 14.736328 6.5175781 C 15.149938 6.5175781 15.484375 6.8534581 15.484375 7.2675781 C 15.484375 7.6811981 15.149988 8.015625 14.736328 8.015625 C 14.322648 8.015625 13.986328 7.6811981 13.986328 7.2675781 C 13.986328 6.8534581 14.322648 6.5175781 14.736328 6.5175781 z M 10.291016 12.210938 L 3.4941406 19.007812 L 5.9921875 19.007812 L 11.925781 13.179688 C 11.320801 12.956357 10.768126 12.626607 10.291016 12.210938 z "
       transform="translate(326,534.3622)"
       id="path7" />
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
  <linearGradient id="a" y1="9" x1="20" y2="16" x2="27" gradientUnits="userSpaceOnUse">
   <stop stop-color="#383e51"/>
   <stop offset="1" stop-color="#655c6f" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="61" y2="3" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.5 0 0-.48276 0 31.448)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m5 30v-28h15l7 7v21h-7z"/>
 </defs>
 <use fill="#51db51" xlink:href="#c"/>
 <g transform="scale(1-1)">
  <rect width="15" x="5" opacity=".5" y="-3" fill="#ffffff" height="1"/>
  <rect width="22" x="5" y="-30" fill="#2e3132" height="1" fill-opacity=".294"/>
 </g>
 <g fill-rule="evenodd">
  <path opacity=".5" fill="#ffffff" d="m27 9l-7-7v7z"/>
  <path opacity=".2" fill="url(#a)" d="m27 16l-7-7h7z"/>
 </g>
 <use fill="url(#b)" xlink:href="#c"/>
 <g fill="#ffffff">
  <path opacity=".75" d="m18.04 11.967c-2.168 0-3.926 1.757-3.926 3.924 0 .589.133 1.146.365 1.646l-.672.795-.059.746c-.006.006-.73.025-.73.025l-.373.271c0 0 .003.812 0 .801l-.002.002-.799.014-.338.385-.008.729c0 0-.688-.043-.758.021-.441.406-.738.695-.738.695l.004 1.908c0 0 .255-.002.373-.002l5.084-5.082c.305.266.658.471 1.035.633.475.205.991.334 1.541.334 2.169 0 3.928-1.755 3.928-3.922 0-2.166-1.758-3.924-3.928-3.924m.75 1.869c.723 0 1.309.586 1.309 1.309 0 .723-.586 1.309-1.309 1.309-.723 0-1.309-.586-1.309-1.309 0-.723.586-1.309 1.309-1.309"/>
  <path opacity=".5" d="m18.793 13.836c-.723 0-1.309.586-1.309 1.309 0 .723.586 1.309 1.309 1.309.723 0 1.309-.586 1.309-1.309 0-.723-.586-1.309-1.309-1.309m0 .748c.31 0 .561.251.561.561 0 .31-.251.561-.561.561-.31 0-.563-.251-.563-.561 0-.31.253-.561.563-.561m-3.326 4.262l-5.086 5.084h1.869l4.439-4.361c-.453-.167-.866-.412-1.223-.723"/>
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
  <linearGradient id="a" y1="17" y2="31" x1="40" x2="54" gradientUnits="userSpaceOnUse">
   <stop stop-color="#060606"/>
   <stop offset="1" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="b" y1="392.36" y2="336.36" x2="0" gradientUnits="userSpaceOnUse" gradientTransform="translate(-48-332.36)">
   <stop stop-color="#ffffff" stop-opacity="0"/>
   <stop offset="1" stop-color="#ffffff" stop-opacity=".2"/>
  </linearGradient>
  <path id="c" d="m10 61v-58h30l14 14v44h-14z"/>
 </defs>
 <use fill="#51db51" xlink:href="#c"/>
 <g color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
  <g transform="scale(1-1)">
   <rect opacity=".5" x="10" y="-4" width="30" fill="#ffffff" height="1"/>
   <rect opacity=".25" x="10" y="-61" width="44" height="1"/>
  </g>
  <path opacity=".5" fill="#ffffff" d="m54 17l-14-14v14z"/>
 </g>
 <path opacity=".2" fill="url(#a)" fill-rule="evenodd" d="m40 17l14 14v-14z"/>
 <g fill="#ffffff" color-rendering="auto" color-interpolation-filters="linearRGB" shape-rendering="auto" image-rendering="auto" text-rendering="auto" color-interpolation="sRGB" color="#000000">
  <path opacity=".75" d="m35.734 22.01c-3.983 0-7.211 3.228-7.211 7.207 0 1.082.245 2.103.672 3.02l-1.234 1.461-.107 1.369c-.011.01-1.344.049-1.344.049l-.686.496c0 0 .006 1.495 0 1.475l-.002.002-1.467.023-.621.709-.014 1.34c0 0-1.266-.083-1.395.035-.81.746-1.355 1.277-1.355 1.277l.006 3.506c0 0 .469-.002.688-.002l9.338-9.336c.495.431 1.049.794 1.648 1.078l.002-.002c.936.444 1.979.701 3.084.701 3.983 0 7.211-3.227 7.211-7.207 0-3.979-3.228-7.206-7.213-7.205m1.377 3.434c1.327 0 2.402 1.077 2.402 2.404 0 1.327-1.075 2.402-2.402 2.402-1.328 0-2.404-1.075-2.404-2.402 0-1.327 1.076-2.404 2.404-2.404"/>
  <path opacity=".5" d="m37.11 25.445c-1.328 0-2.404 1.077-2.404 2.404 0 1.327 1.076 2.402 2.404 2.402 1.327 0 2.402-1.075 2.402-2.402 0-1.327-1.075-2.404-2.402-2.404m0 1.373c.569 0 1.029.462 1.029 1.031 0 .569-.461 1.029-1.029 1.029-.569 0-1.031-.461-1.031-1.029 0-.569.463-1.031 1.031-1.031m-6.109 7.828l-9.342 9.34h3.434l8.154-8.01c-.832-.307-1.59-.757-2.246-1.328"/>
 </g>
 <use fill="url(#b)" xlink:href="#c"/>
		</svg>
	{/if}
