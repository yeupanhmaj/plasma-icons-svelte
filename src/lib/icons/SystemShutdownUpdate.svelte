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
			<path class="ColorScheme-Text" d="m7.3730469 2v5h1.2539062v-5h-1.2539062zm1.6269531 0.0859375v1.015625c2.327754 0.4751507 3.999742 2.5226838 4 4.8984375h1c-9.84e-4 -2.9270536-2.113886-5.4262204-5-5.9140625zm-2 0.0039063c-2.8846593 0.4875912-4.9971114 2.9845793-5 5.9101562 0 3.313705 2.6862948 6 6 6 0.3353125-0.0026 0.6698177-0.033307 1-0.091797v-1.023437c-0.3286079 0.071953-0.6636393 0.11056-1 0.115234-2.7614209 0-5-2.238579-5-5 0.0021125-2.374286 1.6736831-4.4196748 4-4.8945312v-1.015625zm4.5 5.9101562-2.5 3h1.5v3h2v-3h1.5l-2.5-3z" fill="currentColor"/>
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
			<path class="ColorScheme-Text" d="m10 3v7h1 1v-7h-2zm-1 0.265625c-3.4555377 0.8845911-6 3.995397-6 7.734375 0 4.431988 3.5680132 8 8 8v-1c-3.8779883 0-7-3.122012-7-7 0-3.1803654 2.1049674-5.8400827 5-6.6972656v-1.0371094zm4 0v1.0371094c2.585453 0.7655205 4.539119 2.9695286 4.927734 5.6972656h1.009766c-0.407458-3.2843099-2.795359-5.930011-5.9375-6.734375zm2 6.734375-4 4h2v5h4v-5h2l-4-4z" fill="currentColor"/>
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
			<path class="ColorScheme-Text" d="m15 4v0.0507812 1.0039063 7.9453125h2v-7.9492188-1.0039062-0.046875h-1-1zm3 0.1699219v1.0214843c4.10348 0.7679032 7.418626 3.7925395 8.558594 7.8085938h1.039062c-1.181016-4.5766708-4.938623-8.0337611-9.597656-8.8300781zm-4 0.0117187c-5.7685916 0.9750656-9.9932711 5.9679444-10 11.818359 0.0158451 6.227999 4.7936414 11.408753 11 11.927734v-1.005859c-5.6516794-0.5159-9.9831909-5.246724-10-10.921875 0.0029434-5.301475 3.7868885-9.846643 9-10.810547v-1.0078125zm8 9.8183594-6 6.222656h3v7.777344h6v-7.777344h3l-6-6.222656z" fill="currentColor"/>
		</svg>
	{/if}
