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

	{#if numericSize <= 27}
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
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="3" x2="3" xlink:href="#i" y1="21" y2="1"/><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="19" x2="3" xlink:href="#i" y1="21" y2="21"/><linearGradient id="c" gradientTransform="matrix(.75 0 0 1 2.75 -1)" gradientUnits="userSpaceOnUse" x1="3" x2="3" y1="21" y2="19"><stop offset="0" stop-color="#2f3943"/><stop offset="1" stop-color="#4d5662"/></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="11" x2="11" xlink:href="#i" y1="4" y2="17"/><linearGradient id="e" gradientTransform="matrix(.625 0 0 .71429 137.214 166.657)" gradientUnits="userSpaceOnUse" x1="5" x2="5" y1="5" y2="16"><stop offset="0" stop-color="#2e5d89"/><stop offset="1" stop-color="#1b92f4"/></linearGradient><linearGradient id="f" gradientTransform="matrix(.375 0 0 .66667 -142.2142 357.868)" gradientUnits="userSpaceOnUse" x1="418.17099" x2="418.17099" xlink:href="#h" y1="-521.79797" y2="-518.79797"/><linearGradient id="g" gradientTransform="matrix(.375 0 0 -.66667 -142.2142 -338.868)" gradientUnits="userSpaceOnUse" x1="418.17099" x2="418.17099" xlink:href="#h" y1="-521.79797" y2="-518.79797"/><linearGradient id="h"><stop offset="0" stop-color="#84cbfe"/><stop offset="1" stop-color="#84cbfe" stop-opacity="0"/></linearGradient><linearGradient id="i"><stop offset="0" stop-color="#c6cdd1"/><stop offset="1" stop-color="#e0e5e7"/></linearGradient><linearGradient id="j" gradientTransform="matrix(.69397 0 0 .6777 -268.043 -341.051)" gradientUnits="userSpaceOnUse" x1="390.57101" x2="413.62451" y1="507.67401" y2="531.28375"><stop offset="0"/><stop offset="1" stop-opacity="0"/></linearGradient><g stroke-linejoin="round"><rect fill="url(#a)" height="20" rx="1" stroke-width="2.06559" width="16" x="3" y="1"/><path d="m3 18v2c0 .554.446 1 1 1h14c.554 0 1-.446 1-1v-2z" fill="url(#b)" stroke-width="2"/><path d="m3 19v1c0 .554.446 1 1 1h14c.554 0 1-.446 1-1v-1c0 .554-.446 1-1 1h-14c-.554 0-1-.446-1-1z" fill="#292c2f" opacity=".2" stroke-width="2.06559"/><path d="m4 1c-.554 0-1 .446-1 1v1h1 14 1v-1c0-.554-.446-1-1-1zm1 17v1c0 .554.3345 1 .75 1h10.5c.4155 0 .75-.446.75-1v-1z" fill="url(#c)" stroke-width="1.73205"/><g stroke-width="2"><path d="m15 18h1v1h-1z" fill="#11d116"/><path d="m3 2h16v1h-16z" opacity=".2"/><path d="m4 4h14v13h-14z" fill="url(#d)"/><path d="m5 5h12v11h-12z" fill="url(#e)"/></g></g><g stroke-width=".774597"><path d="m5 9h12v1h-12z" fill="#84cbfe"/><path d="m5 10h12v2h-12z" fill="url(#f)" opacity=".2"/><path d="m5 9h12v-2h-12z" fill="url(#g)" opacity=".2"/></g><path d="m6 7h6v8h-6z" fill="#eff0f1" stroke-linejoin="round" stroke-width="2"/><path d="m3 3 16 16v-16z" fill="url(#j)" opacity=".2"/>
		</svg>
	{:else}
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
			<linearGradient id="b"><stop offset="0" stop-color="#84cbfe"/><stop offset="1" stop-color="#84cbfe" stop-opacity="0"/></linearGradient><linearGradient id="a"><stop offset="0" stop-color="#c6cdd1"/><stop offset="1" stop-color="#e0e5e7"/></linearGradient><linearGradient id="c"><stop offset="0" stop-color="#2f3943"/><stop offset="1" stop-color="#4d5662"/></linearGradient><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="16" x2="16" y1="3.2" y2="6"><stop offset="0" stop-color="#18222a"/><stop offset="1" stop-color="#566069"/></linearGradient><linearGradient id="f" gradientTransform="matrix(.75 0 0 .6 -290.429 -297.279)" gradientUnits="userSpaceOnUse" x1="387.238" x2="387.238" xlink:href="#a" y1="543.798" y2="503.798"/><linearGradient id="g" gradientTransform="matrix(.68906 0 0 .77577 111.067 134.313)" gradientUnits="userSpaceOnUse" x1="425.95" x2="425.95" xlink:href="#a" y1="508.509" y2="536.868"/><linearGradient id="h" gradientTransform="matrix(.625 0 0 .71429 137.214 166.657)" gradientUnits="userSpaceOnUse" x1="434.171" x2="434.171" y1="509.798" y2="534.998"><stop offset="0" stop-color="#2e5d89"/><stop offset="1" stop-color="#1b92f4"/></linearGradient><linearGradient id="j" gradientTransform="matrix(.625 0 0 .66667 137.214 -190.93)" gradientUnits="userSpaceOnUse" x1="418.171" x2="418.171" xlink:href="#b" y1="-521.798" y2="-518.798"/><linearGradient id="i" gradientTransform="matrix(.625 0 0 .66667 137.214 887.666)" gradientUnits="userSpaceOnUse" x1="418.171" x2="418.171" xlink:href="#b" y1="-521.798" y2="-518.798"/><linearGradient id="k" gradientTransform="matrix(.69397 0 0 .6777 -267.043 -339.051)" gradientUnits="userSpaceOnUse" x1="390.571" x2="417.95" y1="507.674" y2="535.71"><stop offset="0"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="l" gradientUnits="userSpaceOnUse" x1="29" x2="5" xlink:href="#a" y1="31" y2="25"/><linearGradient id="d" gradientTransform="matrix(1 0 0 -1 0 -8)" gradientUnits="userSpaceOnUse" x1="22" x2="22" xlink:href="#c" y1="-13" y2="-10"/><linearGradient id="m" gradientUnits="userSpaceOnUse" x1="22" x2="22" xlink:href="#c" y1="29" y2="27"/><path d="M4 5V3c0-.554.446-1 1-1h22c.554 0 1 .446 1 1v2z" fill="url(#d)"/><path d="M4 3h24v2H4z" fill="url(#e)"/><path d="M4 5h24v24H4z" fill="url(#f)"/><g stroke-linecap="round" stroke-linejoin="bevel"><path d="M381.571 529.798h22v20h-22z" fill="url(#g)" transform="translate(-376.571 -523.798)"/><path d="M382.571 530.798h20v18h-20z" fill="url(#h)" transform="translate(-376.571 -523.798)"/><path d="M6 15h20v1H6z" fill="#84cbfe"/><path d="M382.571 539.798h20v2h-20z" fill="url(#i)" opacity=".2" transform="translate(-376.571 -523.798)"/><path d="M382.571-538.798h20v2h-20z" fill="url(#j)" opacity=".2" transform="matrix(1 0 0 -1 -376.571 -523.798)"/><path d="M7 9h11v15H7z" fill="#eff0f1"/></g><path d="M4 5l22 22h2V5z" fill="url(#k)" fill-rule="evenodd" opacity=".2"/><path d="M4 27v2c0 .554.446 1 1 1h22c.554 0 1-.446 1-1v-2z" fill="url(#l)"/><path d="M7 27v1c0 .554.446 1 1 1h16c.554 0 1-.446 1-1v-1z" fill="url(#m)"/><circle cx="-27.5" cy="-23.5" fill="#11d116" r=".5" transform="matrix(0 -1 -1 0 0 0)"/><path d="M4 28v1c0 .554.446 1 1 1h22c.554 0 1-.446 1-1v-1c0 .554-.446 1-1 1H5c-.554 0-1-.446-1-1z" fill="#292c2f" opacity=".2"/>
		</svg>
	{/if}
