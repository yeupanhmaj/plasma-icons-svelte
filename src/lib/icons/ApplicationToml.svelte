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
			<g transform="matrix(.03559775 0 0 .03555556 .98190448 .91555555)" fill="#6c7a89">
        <path d="m28.6 30.5 84.27499-0.0031v28.126543l-56.183331 0.0031v281.25292l56.183331-9e-3v28.12054l-84.27499 9e-3z"/>
        <path d="m281.42496 114.87499v28.12499h-70.22915v168.74998h-28.09167v-168.74998h-70.22915v-28.12499z"/>
        <path d="m365.7 368h-84.27504v-28.12504h56.18333v-281.24997h-56.18333v-28.124993h84.27504z"/>
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
			<g transform="matrix(.04746366 0 0 .04740741 1.6425393 1.5540741)" fill="#6c7a89">
        <path d="m28.6 30.5h84.275v42.187495h-42.137499v253.12498h42.137499v42.18752h-84.275z"/>
        <path d="m281.425 93.781244v42.187496h-63.20625v189.84374h-42.1375v-189.84374h-63.20192l-9e-3 -42.187496z"/>
        <path d="m365.7 368h-84.275v-42.18752h43.875v-253.12498h-43.875v-42.187495h84.275z"/>
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
        <linearGradient id="a" x2="0" y1="518.04" y2="524.8" gradientUnits="userSpaceOnUse">
            <stop stop-color="#566472" offset="0"/>
            <stop stop-color="#5e6b78" offset="1"/>
        </linearGradient>
        <linearGradient id="b" x1="404.57" x2="411.57" y1="524.8" y2="531.8" gradientUnits="userSpaceOnUse">
            <stop stop-color="#383e51" offset="0"/>
            <stop stop-color="#655c6f" stop-opacity="0" offset="1"/>
        </linearGradient>
        <linearGradient id="c" x1="7.729" x2="8.271" y1="2.719" y2="61" gradientTransform="matrix(.5 0 0-.48276 384.57 547.25)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#bdc3c7" offset="0"/>
            <stop stop-color="#dadfe1" offset="1"/>
        </linearGradient>
    </defs>
    <g transform="translate(-384.57-515.8)">
        <path d="m389.57 545.8v-28h15l7 7v21h-7z" fill="url(#c)"/>
        <g transform="scale(1-1)">
            <rect x="389.57" y="-518.8" width="15" height="1" fill="#fff" fill-opacity=".412"/>
            <rect x="389.57" y="-545.8" width="22" height="1" fill="#2e3132" fill-opacity=".294"/>
        </g>
    </g>
    <g transform="translate(-384.57,-515.8)" fill-rule="evenodd">
        <path d="m411.57 524.8-7-7v7z" fill="url(#a)"/>
        <path d="m411.57 531.8-7-7h7z" fill="url(#b)" opacity=".2"/>
    </g>
    <g transform="matrix(.03559775 0 0 .03555556 8.9819044 10.915556)" fill="#5e6b78">
        <path d="m28.6 30.5 84.27499-8e-6v28.12498l-56.183328 8e-6v281.24997h56.183328v28.12499l-84.27499 6e-5z"/>
        <path d="m281.42497 114.87497v28.125h-70.22916v168.74998h-28.09166v-168.74998h-70.22916l0.72501-28.125z"/>
        <path d="m365.7 368h-84.27503v-28.12505h56.18332v-281.24997h-56.18332v-28.12498h84.27503z"/>
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
        <linearGradient id="a" x2="0" y1="3" y2="61" gradientTransform="matrix(1 0 0-1 0 64)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#bdc3c7" offset="0"/>
            <stop stop-color="#dadfe1" offset="1"/>
        </linearGradient>
        <linearGradient id="b" x2="0" y1="61" y2="47" gradientTransform="matrix(1 0 0-1 0 64)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#566472" offset="0"/>
            <stop stop-color="#5e6b78" offset="1"/>
        </linearGradient>
        <linearGradient id="c" x1="40" x2="54" y1="17" y2="31" gradientUnits="userSpaceOnUse">
            <stop stop-color="#383e51" offset="0"/>
            <stop stop-color="#655c6f" stop-opacity="0" offset="1"/>
        </linearGradient>
    </defs>
    <path d="m10 61v-58h30l14 14v44h-14z" fill="url(#a)"/>
    <g transform="scale(1-1)">
        <rect x="10" y="-4" width="30" height="1" fill="#fff" fill-opacity=".412"/>
        <rect x="10" y="-61" width="44" height="1" fill="#2e3132" fill-opacity=".294"/>
    </g>
    <g fill-rule="evenodd">
        <path d="m54 17-14-14v14z" fill="url(#b)"/>
        <path d="m40 17 14 14v-14z" fill="url(#c)" opacity=".2"/>
    </g>
    <g transform="matrix(.06526253 0 0 .06518519 19.133492 22.011852)" fill="#5e6b78">
        <path d="m28.6 30.5 76.61363 0.0045v30.677311h-45.968179v276.13634h45.968179v30.68185h-76.61363z"/>
        <path d="m273.76364 91.863627v30.681813h-61.29091v184.0909h-30.64545v-184.0909h-61.29128v-30.681813z"/>
        <path d="m365.7 368h-76.61363v-30.68185h45.96819v-276.13634h-45.96819v-30.681811h76.61363z"/>
    </g>
		</svg>
	{/if}
