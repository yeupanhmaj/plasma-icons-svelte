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
			<path id="smartphone" class="ColorScheme-Text" d="m6 2c-0.96855 0-2 1.0314-2 2v8c0 0.96855 1.0314 2 2 2h4c0.96855 0 2-1.0314 2-2v-8c0-0.96855-1.0314-2-2-2h-4zm0 1h4c0.56208 0 1 0.43788 1 1v8c0 0.56208-0.43788 1-1 1h-4c-0.56208 0-1-0.43788-1-1v-8c0-0.56208 0.43788-1 1-1zm0.5 1a0.5 0.5 0 0 0-0.5 0.5 0.5 0.5 0 0 0 0.5 0.5 0.5 0.5 0 0 0 0.5-0.5 0.5 0.5 0 0 0-0.5-0.5zm0 7c-0.277 0-0.5 0.223-0.5 0.5s0.223 0.5 0.5 0.5h3c0.277 0 0.5-0.223 0.5-0.5s-0.223-0.5-0.5-0.5h-3z" fill="currentColor"/>
		</svg>
	{:else if numericSize <= 43}
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
			<path id="smartphone" class="ColorScheme-Text" d="m8 3c-1.108 0-2 0.892-2 2v12c0 1.108 0.892 2 2 2h6c1.108 0 2-0.892 2-2v-12c0-1.108-0.892-2-2-2h-6zm0 1h6c0.554 0 1 0.446 1 1v12c0 0.554-0.446 1-1 1h-6c-0.554 0-1-0.446-1-1v-12c0-0.554 0.446-1 1-1zm0.5 1a0.5 0.5 0 0 0-0.5 0.5 0.5 0.5 0 0 0 0.5 0.5 0.5 0.5 0 0 0 0.5-0.5 0.5 0.5 0 0 0-0.5-0.5zm1 11c-0.277 0-0.5 0.223-0.5 0.5s0.223 0.5 0.5 0.5h3c0.277 0 0.5-0.223 0.5-0.5s-0.223-0.5-0.5-0.5h-3z" fill="currentColor"/>
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
			<defs id="defs1043">
        <linearGradient id="linearGradient2554" x1="31.756" x2="30.031" y1="44.109" y2="25.774" gradientTransform="matrix(4.0862992,0,0,4.0000661,-113.09527,-117.74537)" gradientUnits="userSpaceOnUse">
            <stop id="stop1038" stop-color="#242424" offset="0"/>
            <stop id="stop1040" stop-color="#878787" offset="1"/>
        </linearGradient>
    </defs>
    <path id="path1045" d="m21.371142 5.986669h21.257716c1.823338 0 3.291113 1.4369012 3.291113 3.2216602v44.886566c0 1.78486-1.467878 3.221661-3.291113 3.221661h-21.257716c-1.823338 0-3.291113-1.436903-3.291113-3.221661v-44.886566c0-1.784759 1.467878-3.2216602 3.291113-3.2216602z" fill="url(#linearGradient2554)" stroke="#050505"/>
    <path id="path1049" d="m25.481693 49.245736a1.956417 1.956417 0 0 1-1.949942 1.956416 1.956417 1.956417 0 0 1-1.962891-1.943365 1.956417 1.956417 0 0 1 1.936891-1.969365 1.956417 1.956417 0 0 1 1.975736 1.930315" fill="#aa5cf9" style="paint-order:stroke fill markers"/>
    <path id="path1051" d="m31.267294 49.245736a1.956417 1.956417 0 0 1-1.949943 1.956416 1.956417 1.956417 0 0 1-1.962891-1.943365 1.956417 1.956417 0 0 1 1.936893-1.969365 1.956417 1.956417 0 0 1 1.975838 1.930315" fill="#34b9ff" style="paint-order:stroke fill markers"/>
    <path id="path1053" d="m37.042618 49.214906a1.956417 1.956417 0 0 1-1.949941 1.956417 1.956417 1.956417 0 0 1-1.962893-1.943468 1.956417 1.956417 0 0 1 1.936893-1.969365 1.956417 1.956417 0 0 1 1.975736 1.930315" fill="#8ace6c"/>
    <path id="path1055" d="m42.817944 49.389605a1.956417 1.956417 0 0 1-1.949943 1.956417 1.956417 1.956417 0 0 1-1.96289-1.943367 1.956417 1.956417 0 0 1 1.936891-1.969364 1.956417 1.956417 0 0 1 1.975736 1.930315" fill="#ffb446" style="paint-order:stroke fill markers"/>
    <path id="path1057" d="m41 8.9996377a0.88683089 0.88683089 0 0 1-0.883873 0.8868204 0.88683089 0.88683089 0 0 1-0.88976-0.8809213 0.88683089 0.88683089 0 0 1 0.877952-0.8926885 0.88683089 0.88683089 0 0 1 0.895597 0.8749826" fill="#dadada" style="paint-order:stroke fill markers"/>
    <path id="path1061" d="m22.438596 9.9732091a1.0811777 1.0811777 0 0 1-1.077582 1.0811779 1.0811777 1.0811777 0 0 1-1.084774-1.073984 1.0811777 1.0811777 0 0 1 1.070387-1.0882687 1.0811777 1.0811777 0 0 1 1.091866 1.0666878" style="paint-order:stroke fill markers"/>
    <path id="path1194" d="m31.243454 49.666581a2.0200726 2.0200726 0 0 1-2.013388 2.020072 2.0200726 2.0200726 0 0 1-2.026757-2.006597 2.0200726 2.0200726 0 0 1 1.999913-2.033441 2.0200726 2.0200726 0 0 1 2.040126 1.993121" fill="none" stroke-width="1.37939" style="paint-order:stroke fill markers"/>
    <path id="path1190" d="m27.066536 54.41109a0.46243702 0.46243702 0 0 0-0.461635 0.461635 0.46243702 0.46243702 0 0 0 0.461635 0.463642h9.866928a0.46243702 0.46243702 0 0 0 0.463641-0.463642 0.46243702 0.46243702 0 0 0-0.463641-0.461635z" fill="#a5a5a5" stroke-width="0"/>
    <path id="path1" d="m43.458515 8.9996377a0.88683089 0.88683089 0 0 1-0.883873 0.8868204 0.88683089 0.88683089 0 0 1-0.88976-0.8809213 0.88683089 0.88683089 0 0 1 0.877952-0.8926885 0.88683089 0.88683089 0 0 1 0.895597 0.8749826" fill="#dadada" style="paint-order:stroke fill markers"/>
		</svg>
	{/if}
