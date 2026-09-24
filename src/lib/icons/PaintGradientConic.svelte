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
			<g fill="currentColor" class="ColorScheme-Text">
    <path d="m8 2v6l1.6074-6z" opacity=".2"/>
    <path d="m9.6074 2-1.6074 6 3.4648-6z" opacity=".22"/>
    <path d="m11.465 2-3.4648 6 6-6z" opacity=".24"/>
    <path d="m14 4.5352-6 3.4648 6-6z" opacity=".26"/>
    <path d="m14 6.3926-6 1.6074 6-3.4648z" opacity=".28"/>
    <path d="m14 6.3926-6 1.6074h6z" opacity=".3"/>
    <path d="m14 8h-6l6 1.6074z" opacity=".33"/>
    <path d="m14 9.6074-6-1.6074 6 3.4648z" opacity=".35"/>
    <path d="m14 11.465-6-3.4648 6 6z" opacity=".38"/>
    <path d="m11.465 14-3.4648-6 6 6z" opacity=".41"/>
    <path d="m9.6074 14-1.6074-6 3.4648 6z" opacity=".44"/>
    <path d="m8 14v-6l1.6074 6z" opacity=".46"/>
    <path d="m6.3926 14 1.6074-6v6z" opacity=".48"/>
    <path d="m6.3926 14 1.6074-6-3.4648 6z" opacity=".5"/>
    <path d="m4.5352 14 3.4648-6-6 6z" opacity=".52"/>
    <path d="m2 11.465 6-3.4648-6 6z" opacity=".54"/>
    <path d="m2 9.6074 6-1.6074-6 3.4648z" opacity=".56"/>
    <path d="m2 8h6l-6 1.6074z" opacity=".58"/>
    <path d="m2 6.3926 6 1.6074h-6z" opacity=".6"/>
    <path d="m2 6.3926 6 1.6074-6-3.4648z" opacity=".62"/>
    <path d="m2 4.5352 6 3.4648-6-6z" opacity=".64"/>
    <path d="m4.5352 2 3.4648 6-6-6z" opacity=".66"/>
    <path d="m6.3926 2 1.6074 6-3.4648-6z" opacity=".68"/>
    <path d="m6.3926 2 1.6074 6v-6z" opacity=".7"/>
  </g>
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
			<g class="ColorScheme-Text" fill="currentColor">
    <path d="m11 3-0.0018 7.9991 2.145-7.9991z" opacity=".2"/>
    <path d="m13.143 3-2.145 7.9991 4.6217-7.9991z" opacity=".22"/>
    <path d="m15.62 3-4.6217 7.9991 8.0019-7.9991z" opacity=".24"/>
    <path d="m19 6.3803-8.0019 4.6189 8.0019-7.9991z" opacity=".26"/>
    <path d="m19 8.8568-8.0019 2.1424 8.0019-4.6189z" opacity=".28"/>
    <path d="m19 8.8568-8.0019 2.1424h8.0019z" opacity=".3"/>
    <path d="m19 10.999h-8.0019l8.0019 2.1441z" opacity=".33"/>
    <path d="m19 13.143-8.0019-2.1441 8.0019 4.6207z" opacity=".35"/>
    <path d="m19 15.62-8.0019-4.6207 8.0019 8.001z" opacity=".38"/>
    <path d="m15.62 19-4.6217-8.001 8.0019 8.001z" opacity=".41"/>
    <path d="m13.143 19-2.145-8.001 4.6217 8.001z" opacity=".44"/>
    <path d="m11 19-0.001746-8.001 2.145 8.001z" opacity=".46"/>
    <path d="m8.8568 19 2.1415-8.001 0.001746 8.001z" opacity=".48"/>
    <path d="m8.8568 19 2.1415-8.001-4.618 8.001z" opacity=".5"/>
    <path d="m6.3803 19 4.618-8.001-7.9983 8.001z" opacity=".52"/>
    <path d="m3 15.62 7.9983-4.6207-7.9983 8.001z" opacity=".54"/>
    <path d="m3 13.143 7.9983-2.1441-7.9983 4.6207z" opacity=".56"/>
    <path d="m3 10.999h7.9983l-7.9983 2.1441z" opacity=".58"/>
    <path d="m3 8.8568 7.9983 2.1424h-7.9983z" opacity=".6"/>
    <path d="m3 8.8568 7.9983 2.1424-7.9983-4.6189z" opacity=".62"/>
    <path d="m3 6.3803 7.9983 4.6189-7.9983-7.9991z" opacity=".64"/>
    <path d="m6.3803 3 4.618 7.9991-7.9983-7.9991z" opacity=".66"/>
    <path d="m8.8568 3 2.1415 7.9991-4.618-7.9991z" opacity=".68"/>
    <path d="m8.8568 3 2.1415 7.9991 0.001746-7.9991z" opacity=".7"/>
  </g>
		</svg>
	{/if}
