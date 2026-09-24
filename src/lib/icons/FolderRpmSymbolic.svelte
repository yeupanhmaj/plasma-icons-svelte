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
			<path
       style="fill:currentColor"
       class="ColorScheme-Text"
       d="M 8 2 A 6 6 0 0 0 2 8 A 6 6 0 0 0 8 14 A 6 6 0 0 0 14 8 A 6 6 0 0 0 8 2 z M 8 3 A 5 5 0 0 1 13 8 A 5 5 0 0 1 8 13 A 5 5 0 0 1 3 8 A 5 5 0 0 1 8 3 z M 8 4 A 4 4 0 0 0 5.4414062 4.9277344 L 6.0820312 5.6972656 A 3 3 0 0 1 8 5 A 3 3 0 0 1 11 8 L 12 8 A 4 4 0 0 0 8 4 z M 9 6 L 7.3984375 9.203125 A 1 1 0 0 0 7 10 A 1 1 0 0 0 8 11 A 1 1 0 0 0 9 10 A 1 1 0 0 0 8.7480469 9.3398438 L 9 6 z M 4.53125 6.0175781 A 4 4 0 0 0 4 8 L 5 8 A 3 3 0 0 1 5.3984375 6.5136719 L 4.53125 6.0175781 z "
       />
		</svg>
	{:else}
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
       style="fill:currentColor"
       class="ColorScheme-Text"
       d="M 11 3 A 8 8 0 0 0 3 11 A 8 8 0 0 0 11 19 A 8 8 0 0 0 19 11 A 8 8 0 0 0 11 3 z M 11 4 A 7 7 0 0 1 18 11 A 7 7 0 0 1 11 18 A 7 7 0 0 1 4 11 A 7 7 0 0 1 11 4 z M 11 6 A 5 5 0 0 0 7.6816406 7.2675781 L 8.390625 7.9765625 A 4 4 0 0 1 11 7 A 4 4 0 0 1 15 11 L 16 11 A 5 5 0 0 0 11 6 z M 12.34375 8.1660156 L 10.197266 13.142578 C 10.074466 13.282368 9.9865731 13.452179 9.9394531 13.636719 C 9.9324531 13.666519 9.9249219 13.698216 9.9199219 13.728516 L 9.9140625 13.742188 L 9.9199219 13.742188 C 9.8299219 14.303648 10.140852 14.828938 10.638672 14.955078 C 11.137452 15.080448 11.659373 14.764692 11.845703 14.226562 L 11.853516 14.228516 L 11.853516 14.199219 C 11.861516 14.174519 11.870053 14.1501 11.876953 14.125 C 11.921853 13.94305 11.923313 13.752999 11.882812 13.574219 L 12.34375 8.1660156 z M 6.4746094 8.8886719 A 5 5 0 0 0 6 11 L 7 11 A 4 4 0 0 1 7.2382812 9.6523438 L 6.4746094 8.8886719 z "
       />
		</svg>
	{/if}
