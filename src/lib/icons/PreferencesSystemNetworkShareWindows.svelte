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
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="7.785715" x2="7.785715" y1="12.285715" y2="3.285715"><stop offset="0" stop-color="#eff0f1"/><stop offset="1" stop-color="#fcfcfc"/></linearGradient><linearGradient id="b"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="11" x2="11" y1="20" y2="2"><stop offset="0" stop-color="#2a2c2f"/><stop offset="1" stop-color="#424649"/></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="11" x2="11" y1="18.714286" y2="3.285715"><stop offset="0" stop-color="#1d99f3"/><stop offset="1" stop-color="#3daee9"/></linearGradient><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="2.642857" x2="11.642857" xlink:href="#b" y1="2.642857" y2="11.642857"/><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="11.642857" x2="20.642857" xlink:href="#b" y1="2.642857" y2="11.642857"/><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="11.642857" x2="20.642857" xlink:href="#b" y1="11.642857" y2="20.642857"/><linearGradient id="h" gradientUnits="userSpaceOnUse" x1="2.642857" x2="11.642857" xlink:href="#b" y1="11.642857" y2="20.642857"/><linearGradient id="i" gradientUnits="userSpaceOnUse" x1="11" x2="17.428572" xlink:href="#b" y1="6.5" y2="12.928572"/><linearGradient id="j" gradientUnits="userSpaceOnUse" x1="11" x2="15.5" xlink:href="#b" y1="15.5" y2="20"/><linearGradient id="k" gradientUnits="userSpaceOnUse" x1="6.5" x2="10.357143" xlink:href="#b" y1="11" y2="14.857143"/><g stroke-width=".642857"><rect fill="url(#c)" height="18" rx="1" width="18" x="2" y="2"/><path d="m10.357143 2.6428571 1.285714 1.2857143v7.7142856h-7.7142856l-1.2857143-1.285714v-7.7142859z" fill="url(#e)" opacity=".2"/><path d="m19.357143 2.6428571.642857.6428572v8.3571427h-7.071429l-1.285714-1.285714v-7.7142859z" fill="url(#f)" opacity=".2"/><path d="m11.642857 11.642857v7.714286l.642857.642857h6.428572c.712285 0 1.285714-.573429 1.285714-1.285714v-6.428572l-.642857-.642857z" fill="url(#g)" opacity=".2"/><path d="m10.357143 11.642857 1.285714 1.285714v7.071429h-8.3571427l-.6428572-.642857v-7.714286z" fill="url(#h)" opacity=".2"/><path d="m3 12h7v7h-7zm9 0h7v7h-7zm0-9h7v7l-7-.0000001zm-9 .0000001h7v6.9999999h-7z" fill="url(#d)"/><path d="m18 7 2 2v5.967714l-4.233857-4.233857-.266143.266143-7.5-1v-2z" fill="url(#i)" opacity=".2"/><path d="m6.2338571 11.266143 4.2338569 4.233857h5.032286v-4.5h-9z" fill="url(#k)" opacity=".2"/><path d="m7.7857143 14.857143-.6428572-.642857-3.1428571.785714 5.7142857 5h10.2857143v-5.032286l-4.233857-4.233857-.266143.266143v4.5h-7.0714286z" fill="url(#j)" opacity=".2"/></g><g stroke-width="1.1547"><path d="m15 6.400391v1.5996094h-7c-1.1045695 0-2 .8954305-2 1.9999996v2c0 1.104569.8954305 2 2 2h6v2h-7v-1.599609l-3 .599609v2l3 2.599609v-1.599609h7c1.104569 0 2-.895431 2-2v-2c0-1.104569-.895431-2-2-2h-6v-2h7v1.59961l3-2.5996096v-2.0000004z" opacity=".2"/><path d="m15 5.4v1.5996094h-7c-1.1045695 0-2 .8954305-2 2v1.9999996c0 1.104569.8954305 2 2 2h6v2h-7v-1.599609l-3 1.6v.999609l3 2.599609v-1.599609h7c1.104569 0 2-.895431 2-2v-2c0-1.104569-.895431-2-2-2h-6v-1.9999996h7v1.5996096l3-2.5996096v-.9996094z" opacity=".4"/><path d="m15 4.4003906v1.5996094h-7a2 2 0 0 0 -2 2v2a2 2 0 0 0 2 2h6v2h-7v-1.599609l-3 2.599609 3 2.599609v-1.599609h7a2 2 0 0 0 2-2v-2a2 2 0 0 0 -2-2h-6v-2h7v1.5996094l3-2.5996094z" fill="url(#a)"/></g><path d="m2 18v1c0 .554.446 1 1 1h16c.554 0 1-.446 1-1v-1c0 .554-.446 1-1 1h-16c-.554 0-1-.446-1-1z" fill="#17181b" stroke-width=".642857"/>
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
			<linearGradient id="a"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="16" x2="16" y1="30" y2="2"><stop offset="0" stop-color="#2a2c2f"/><stop offset="1" stop-color="#424649"/></linearGradient><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="16" x2="16" y1="28" y2="4"><stop offset="0" stop-color="#1d99f3"/><stop offset="1" stop-color="#3daee9"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="3" x2="17" xlink:href="#a" y1="3" y2="17"/><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="17" x2="31" xlink:href="#a" y1="3" y2="17"/><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="17" x2="31" xlink:href="#a" y1="17" y2="31"/><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="3" x2="17" xlink:href="#a" y1="17" y2="31"/><linearGradient id="k" gradientUnits="userSpaceOnUse" x1="16" x2="16" y1="28" y2="4"><stop offset="0" stop-color="#eff0f1"/><stop offset="1" stop-color="#fcfcfc"/></linearGradient><linearGradient id="h" gradientUnits="userSpaceOnUse" x1="16" x2="26" xlink:href="#a" y1="9" y2="19"/><linearGradient id="j" gradientUnits="userSpaceOnUse" x1="16" x2="23" xlink:href="#a" y1="23" y2="30"/><linearGradient id="i" gradientUnits="userSpaceOnUse" x1="9" x2="15" xlink:href="#a" y1="16" y2="22"/><rect fill="url(#b)" height="28" rx="1" width="28" x="2" y="2"/><path d="M15 3l2 2v12H5l-2-2V3z" fill="url(#c)" opacity=".2"/><path d="M29 3l1 1v13H19l-2-2V3z" fill="url(#d)" opacity=".2"/><path d="M17 17v12l1 1h10c1.108 0 2-.892 2-2V18l-1-1z" fill="url(#e)" opacity=".2"/><path d="M15 17l2 2v11H4l-1-1V17z" fill="url(#f)" opacity=".2"/><path d="M3 17h12v12H3zm14 0h12v12H17zm0-14h12v12H17zM3 3h12v12H3z" fill="url(#g)"/><path d="M25 9l5 5v8.172l-6.586-6.586L23 16H9V9z" fill="url(#h)" opacity=".2"/><path d="M8.586 16.414L15.172 23H23v-7H9z" fill="url(#i)" opacity=".2"/><path d="M11 22l-1-1-3 2 7 7h16v-7.828l-6.586-6.586L23 16v7H12z" fill="url(#j)" opacity=".2"/><path d="M22 7v1H10a1.99 1.99 0 0 0-1.566.756A1.998 1.998 0 0 0 8 10v5a2.002 2.002 0 0 0 .03.34 2.001 2.001 0 0 0 .187.566A2 2 0 0 0 10 17h11a1.003 1.003 0 0 1 .49.13 1.002 1.002 0 0 1 .194.142A.996.996 0 0 1 22 18v3a1 1 0 0 1-1 1H10v-1l-3 2 3 2v-1h12a1.99 1.99 0 0 0 1.436-.607 2.002 2.002 0 0 0 .492-.858A2.001 2.001 0 0 0 24 22v-5a2.002 2.002 0 0 0-.03-.34 2.001 2.001 0 0 0-.187-.566A2 2 0 0 0 22 15H11a1.003 1.003 0 0 1-.49-.13 1.002 1.002 0 0 1-.194-.142A.996.996 0 0 1 10 14v-3a1 1 0 0 1 1-1h11v1l3-2z" fill="url(#k)"/><path d="M2 28v1c0 .554.446 1 1 1h26c.554 0 1-.446 1-1v-1c0 .554-.446 1-1 1H3c-.554 0-1-.446-1-1z" fill="#17181b"/>
		</svg>
	{/if}
