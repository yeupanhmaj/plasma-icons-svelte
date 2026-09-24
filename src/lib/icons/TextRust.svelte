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
			<path d="m0 3v1.9999999h2v6.0000001h-2v2h7v-2h-2.001953l.002-2h2.499953c.276142 0 .5.2238579.5.5v.5a4 4 0 0 0 1.361328 3h5.277344c.86363-.758036 1.359537-1.850882 1.361328-3v-1h-3v1c0 .552285-.447715 1-1 1s-1-.447715-1-1v-.5078131a1.5 1.5 0 0 0 -1.5-1.492187c1.380712 0 2.5-1.119288 2.5-2.5s-1.119288-2.4999999-2.5-2.4999999zm5 1.9999999h3c.552285 0 1 .447715 1 1s-.447715 1-1 1h-3.001953z" fill="#924ab0"/>
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
			<path d="m1 5v3h3v6h-3v3h9v-3h-2v-2h2.5c.276142 0 .5.223858.5.5v1.5c.0018 1.14912.497698 2.24196 1.361328 3h7.277344c.86363-.75804 1.359538-1.85088 1.361328-3v-1.986328l-4-.013672v1c0 .552285-.447715 1-1 1s-1-.447715-1-1l.002-.498047c-.000159-.669991-.443825-1.258943-1.087938-1.443359 1.212313-.42977 2.085938-1.5739695 2.085938-2.933594 0-1.72591-1.39907-3.125-3.125-3.125zm7 3h3c.5252-.0002741.961119.405787.998047.9296875.001475.0234073.002127.0468593.001953.0703125v.015625c-.008535.5461732-.45376.984442-1 .984375h-3z" fill="#924ab0" stroke-width=".238098"/>
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
			<linearGradient id="a" x2="0" y1="61" y2="3" gradientTransform="matrix(.5 0 0 -.48276 0 31.448)" gradientUnits="userSpaceOnUse">
        <stop stop-color="#8e44ad" offset="0"/>
        <stop stop-color="#9b59b6" offset="1"/>
    </linearGradient>
    <linearGradient id="b" x2="0" y1="2.241" y2="9" gradientUnits="userSpaceOnUse">
        <stop stop-color="#d3bdd7" offset="0"/>
        <stop stop-color="#e8d9eb" offset="1"/>
    </linearGradient>
    <linearGradient id="c" x1="20" x2="27" y1="9" y2="16" gradientUnits="userSpaceOnUse">
        <stop stop-color="#383e51" offset="0"/>
        <stop stop-color="#655c6f" stop-opacity="0" offset="1"/>
    </linearGradient>
    <path d="m5 30v-28h15l7 7v21h-7z" fill="url(#a)"/>
    <g transform="scale(1 -1)">
        <path d="m5-3h15v1h-15z" fill="#fff" fill-opacity=".412"/>
        <path d="m5-30h22v1h-22z" fill="#2e3132" fill-opacity=".294"/>
    </g>
    <g fill-rule="evenodd">
        <path d="m27 9-7-7v7z" fill="url(#b)"/>
        <path d="m27 16-7-7h7z" fill="url(#c)" opacity=".2"/>
    </g>
    <path d="m10 14v2h2v6h-2v2h6v-2h-2l.002-2h2.998v1.5c.000071.94068.378795 1.841734 1.050781 2.5h3.898438c.671986-.658266 1.05071-1.55932 1.050781-2.5v-1.5h-2v1c0 .552285-.447715 1-1 1s-1-.447715-1-1v-1a1 1 0 0 0 -1-1h-.5c1.380712 0 2.5-1.119288 2.5-2.5s-1.119288-2.5-2.5-2.5zm4.001953 2h2.998047c.552285 0 1 .447715 1 1 0 .552284-.447715 1-1 1h-3z" fill="#e8d9eb" stroke-width=".190476"/>
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
			<linearGradient id="a" x2="0" y1="3" y2="61" gradientTransform="matrix(1 0 0 -1 0 64)" gradientUnits="userSpaceOnUse">
        <stop stop-color="#8e44ad" offset="0"/>
        <stop stop-color="#9b59b6" offset="1"/>
    </linearGradient>
    <linearGradient id="b" x2="0" y1="61" y2="47" gradientTransform="matrix(1 0 0 -1 0 64)" gradientUnits="userSpaceOnUse">
        <stop stop-color="#d3bdd7" offset="0"/>
        <stop stop-color="#e8d9eb" offset="1"/>
    </linearGradient>
    <linearGradient id="c" x1="40" x2="54" y1="17" y2="31" gradientUnits="userSpaceOnUse">
        <stop stop-color="#383e51" offset="0"/>
        <stop stop-color="#655c6f" stop-opacity="0" offset="1"/>
    </linearGradient>
    <path d="m10 61v-58h30l14 14v44h-14z" fill="url(#a)"/>
    <g transform="scale(1 -1)">
        <path d="m10-4h30v1h-30z" fill="#fff" fill-opacity=".412"/>
        <path d="m10-61h44v1h-44z" fill="#2e3132" fill-opacity=".294"/>
    </g>
    <g fill-rule="evenodd">
        <path d="m54 17-14-14v14z" fill="url(#b)"/>
        <path d="m40 17 14 14v-14z" fill="url(#c)" opacity=".2"/>
    </g>
    <path d="m22 28v3h3v7h-3v3h10v-3h-3v-2h3.5c.828427 0 1.5.671573 1.5 1.5v.5c.0018 1.149118.497698 2.241964 1.361328 3h7.277344c.86363-.758036 1.359537-1.850882 1.361328-3v-2h-4v1c0 .552285-.447715 1-1 1s-1-.447715-1-1v-.5c0-.828427-.671573-1.5-1.5-1.5h-1c1.932997 0 3.5-1.567003 3.5-3.5s-1.567003-3.5-3.5-3.5zm7 3h3.5c.828427 0 1.5.671573 1.5 1.5s-.671573 1.5-1.5 1.5h-3.5z" fill="#e8d9eb" stroke-width=".261905"/>
		</svg>
	{/if}
