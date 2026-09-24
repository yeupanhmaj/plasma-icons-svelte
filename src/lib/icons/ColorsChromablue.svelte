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
			<path fill="#1d99f3" color="#000" d="m8 2c-1.072 3.818-4 6.073-4 8.182 0 2.109 1.791 3.818 4 3.818 2.209 0 4-1.71 4-3.818 0-2.109-2.928-4.364-4-8.182m2.75 6.233c.439.563.677 1.246.679 1.948 0 1.807-1.535 3.273-3.429 3.273-.734-.001-1.449-.228-2.038-.646.293.065.594.099.895.1 2.209 0 4-1.709 4-3.818-.002-.289-.038-.577-.107-.858"/>
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
			<path 
    style="fill:#1d99f3;fill-opacity:1;stroke:none"
       d="m 555.57141,745.93359 c -0.97291,3.405 -3.35445,6.3323 -4.4043,8.6758 -0.3674,0.6968 -0.5957,1.4788 -0.5957,2.3242 0,2.77 2.23,5 5,5 2.77,0 5,-2.23 5,-5 0,-0.8454 -0.2283,-1.6274 -0.5957,-2.3242 -1.04985,-2.3435 -3.4314,-5.2708 -4.4043,-8.6758 z m 2.2832,7.7168 c 1.0377,0.7212 1.7168,1.9183 1.7168,3.2832 0,2.216 -1.784,4 -4,4 -1.36496,0 -2.562,-0.679 -3.2832,-1.7168 0.64704,0.4497 1.43212,0.7168 2.2832,0.7168 2.216,0 4,-1.784 4,-4 0,-0.8511 -0.26709,-1.6362 -0.7168,-2.2832 z"
     transform="translate(-544.57141,-742.93359)"
    />
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
			<path fill="#1d99f3" d="m16 4c-1.459 5.107-5.03 9.498-6.606 13.01-.551 1.045-.894 2.218-.894 3.486 0 4.155 3.345 7.5 7.5 7.5 4.155 0 7.5-3.345 7.5-7.5 0-1.268-.342-2.441-.894-3.486-1.575-3.515-5.147-7.906-6.606-13.01m3.425 11.575c1.557 1.082 2.575 2.877 2.575 4.925 0 3.324-2.676 6-6 6-2.047 0-3.843-1.019-4.925-2.575.971.675 2.148 1.075 3.425 1.075 3.324 0 6-2.676 6-6 0-1.277-.401-2.454-1.075-3.425"/>
		</svg>
	{/if}
