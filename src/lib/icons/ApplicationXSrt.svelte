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
			<path fill="#6c7a89" d="m2 1038.36v8h3v-7h3v2h3v-3h-8zm1 1h1v1h-1zm6 0h1v1h-1zm-6 2h1v2h-1zm3 1v6l2 2v-2h6v-6zm1 1h6v4h-6zm-4 1h1v1h-1z" transform="translate(0-1036.36)"/>
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
 <g id="layer1-43" transform="matrix(1 0 0 1 -326 -534.3622)">
  <path style="fill:#6c7a89" id="rect4156-9" d="M 8 8 L 8 15 L 12 19 L 12 15 L 19 15 L 19 8 L 8 8 z M 9 9 L 18 9 L 18 14 L 14 14 L 9 14 L 9 9 z " transform="matrix(1 0 0 1 326 534.3622)"/>
  <path style="fill:#6c7a89" id="rect5636" d="M 3 3 L 3 14 L 4 14 L 7 14 L 7 13 L 7 11 L 7 10 L 7 7 L 11 7 L 12 7 L 14 7 L 15 7 L 15 4 L 15 3 L 4 3 L 3 3 z M 4 4 L 6 4 L 6 6 L 4 6 L 4 4 z M 7 4 L 11 4 L 11 6 L 7 6 L 7 4 z M 12 4 L 14 4 L 14 6 L 12 6 L 12 4 z M 4 7 L 6 7 L 6 10 L 4 10 L 4 7 z M 4 11 L 6 11 L 6 13 L 4 13 L 4 11 z " transform="matrix(1 0 0 1 326 534.3622)"/>
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
            <stop offset="0" stop-color="#768492" id="stop4" />
            <stop offset="1" stop-color="#5e6b78" id="stop2" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" x2="0" y2="524.8" y1="518.04" id="b">
            <stop offset="0" stop-color="#fbfbfb" id="stop9" />
            <stop offset="1" stop-color="#dedede" id="stop7" />
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
        <path id="path33" d="m394.57 527.8v8h3v-7h3v2h3v-3h-8zm1 1h1v1h-1zm6 0h1v1h-1zm-6 2h1v2h-1zm3 1v6l2 2v-2h6v-6zm1 1h6v4h-6zm-4 1h1v1h-1z" fill="#fbfbfb" />
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
            <stop id="stop2" stop-color="#5e6b78" />
            <stop id="stop4" stop-color="#768492" offset="1" />
        </linearGradient>
        <linearGradient gradientTransform="matrix(1 0 0-1 0 64)" gradientUnits="userSpaceOnUse" x2="0" y2="47" y1="61" id="b">
            <stop offset="0" stop-color="#fbfbfb" id="stop9" />
            <stop offset="1" stop-color="#dedede" id="stop7" />
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
    <path id="path33" d="m21 22v13h7v-1h-4v-4h4v-1h6v-7zm1 1h1v2h-1zm2 0h7v4h-7zm8 0h1v2h-1zm-10 3h1v2h-1zm10 0h1v2h-1zm-10 4h1v2h-1zm7 0v10l4 4v-4h10v-10zm1 1h12v8h-12zm-8 2h1v1h-1z" fill="#fbfbfb" />
		</svg>
	{/if}
