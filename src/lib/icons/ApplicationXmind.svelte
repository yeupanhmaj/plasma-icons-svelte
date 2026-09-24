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
			<path fill="#cf000f" d="m12.299 1040.82l-2.991.492c.043 1.86-1.94 3.153-3.8-.352l-3.519.493c.548 1.895 2.514 2.128 3.825 3.124-.656.935-3.634.372-3.555 3.289l2.991-.493c-.043-1.86 3.408-3.426 5.269.078l3.519-.493c-.549-1.899-2.638-2.08-3.95-3.083.65-1.358 2.8-.137 2.211-3.057" transform="translate(0-1036.36)"/>
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
  
  
  <g id="layer1" transform="translate(-326,-534.3622)">
    <path id="path4206" d="m 342.62695,540.65876 -3.95483,0.65091 c 0.0571,2.45958 -2.56525,4.16886 -5.02525,-0.46502 l -4.6529,0.65147 c 0.72403,2.50556 3.32446,2.81416 5.05854,4.13185 -0.86713,1.23606 -4.80606,0.49141 -4.70063,4.34881 l 3.95483,-0.65146 c -0.0571,-2.45958 4.50688,-4.53066 6.96688,0.10321 l 4.65291,-0.65146 c -0.72576,-2.5115 -3.48871,-2.75074 -5.2228,-4.07636 0.85937,-1.79537 3.70265,-0.18083 2.92325,-4.04195 z" style="fill:#cf000f;fill-opacity:1;stroke:none"/>
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
			<defs id="defs17">
        <linearGradient gradientTransform="matrix(.5 0 0-.48276 384.57 547.25)" gradientUnits="userSpaceOnUse" x2="0" y2="3" y1="61" id="a">
            <stop offset="0" stop-color="#d91e18" id="stop4" />
            <stop offset="1" stop-color="#cf000f" id="stop2" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" x2="0" y2="524.8" y1="518.04" id="b">
            <stop offset="0" stop-color="#fcbcbe" id="stop9" />
            <stop offset="1" stop-color="#fb7d80" id="stop7" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" x2="411.57" y2="531.8" x1="404.57" y1="524.8" id="c">
            <stop id="stop12" stop-color="#383e51" />
            <stop id="stop14" stop-opacity="0" stop-color="#655c6f" offset="1" />
        </linearGradient>
    </defs>
    <g id="g35" transform="translate(-384.57-515.8)">
        <path id="path19" d="m389.57 545.8v-28h15l7 7v21h-7z" fill="url(#a)" />
        <g id="g25" transform="scale(1-1)">
            <rect id="rect21" fill-opacity=".412" height="1" fill="#ffffff" y="-518.8" x="389.57" width="15" />
            <rect id="rect23" fill-opacity=".294" height="1" fill="#2e3132" y="-545.8" x="389.57" width="22" />
        </g>
        <g id="g31" fill-rule="evenodd">
            <path id="path27" d="m411.57 524.8l-7-7v7z" fill="url(#b)" />
            <path id="path29" d="m411.57 531.8l-7-7h7z" fill="url(#c)" opacity=".2" />
        </g>
        <path id="path33" d="m405.55 529.8l-3.475.629c.05 2.376-2.254 4.03-4.416-.449l-4.089.629c.636 2.42 2.921 2.718 4.445 3.991-.762 1.194-4.223.475-4.13 4.2l3.475-.629c-.05-2.376 3.96-4.376 6.122.1l4.089-.629c-.638-2.426-3.066-2.657-4.589-3.937.755-1.734 3.254-.175 2.569-3.904" fill="#fcbcbe" />
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
			<defs id="defs17">
        <linearGradient gradientTransform="matrix(1 0 0-1 0 64)" gradientUnits="userSpaceOnUse" x2="0" y2="61" y1="3" id="a">
            <stop id="stop2" stop-color="#cf000f" />
            <stop id="stop4" stop-color="#d91e18" offset="1" />
        </linearGradient>
        <linearGradient gradientTransform="matrix(1 0 0-1 0 64)" gradientUnits="userSpaceOnUse" x2="0" y2="47" y1="61" id="b">
            <stop offset="0" stop-color="#fb9fa2" id="stop9" />
            <stop offset="1" stop-color="#fb7d80" id="stop7" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" x2="54" y2="31" x1="40" y1="17" id="c">
            <stop id="stop12" stop-color="#383e51" />
            <stop id="stop14" stop-opacity="0" stop-color="#655c6f" offset="1" />
        </linearGradient>
    </defs>
    <path id="path19" d="m10 61v-58h30l14 14v44h-14z" fill="url(#a)" />
    <g id="g25" transform="scale(1-1)">
        <rect id="rect21" fill-opacity=".412" height="1" fill="#ffffff" y="-4" x="10" width="30" />
        <rect id="rect23" fill-opacity=".294" height="1" fill="#2e3132" y="-61" x="10" width="44" />
    </g>
    <g id="g31" fill-rule="evenodd">
        <path id="path27" d="m54 17l-14-14v14z" fill="url(#b)" />
        <path id="path29" d="m40 17l14 14v-14z" fill="url(#c)" opacity=".2" />
    </g>
    <path id="path33" d="m41.25 26l-6.454 1.118c.093 4.223-4.186 7.158-8.201-.798l-7.593 1.119c1.182 4.302 5.425 4.832 8.255 7.095-1.415 2.122-7.843.844-7.671 7.467l6.454-1.119c-.093-4.223 7.355-7.78 11.369.177l7.593-1.119c-1.184-4.313-5.693-4.723-8.523-7 1.402-3.083 6.04-.31 4.77-6.94" fill="#fcbcbe" />
		</svg>
	{/if}
