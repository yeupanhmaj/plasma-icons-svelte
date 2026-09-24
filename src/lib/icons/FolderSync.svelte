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
			<path style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 2 2 L 2 3 L 2 6 L 2 7 L 2 13 L 2 14 L 9 14 L 9 13 L 3 13 L 3 7 L 13 7 L 13 9 L 14 9 L 14 6 L 14 5 L 14 4 L 9.0078125 4 L 7.0078125 2 L 7 2.0078125 L 7 2 L 3 2 L 2 2 z M 3 3 L 6.5917969 3 L 7.59375 4 L 7 4 L 7 4.0078125 L 6.9921875 4 L 4.9921875 6 L 3 6 L 3 3 z M 11.5 9 A 2.4999997 2.5000003 0 0 0 9 11.5 A 2.4999997 2.5000003 0 0 0 9.4160156 12.876953 L 10.148438 12.144531 A 1.5 1.5 0 0 1 10 11.5 A 1.5 1.5 0 0 1 11.5 10 A 1.5 1.5 0 0 1 12.144531 10.148438 L 12.876953 9.4160156 A 2.4999997 2.5000003 0 0 0 11.5 9 z M 13.583984 10.123047 L 12.851562 10.855469 A 1.5 1.5 0 0 1 13 11.5 A 1.5 1.5 0 0 1 11.5 13 A 1.5 1.5 0 0 1 10.855469 12.851562 L 10.123047 13.583984 A 2.4999997 2.5000003 0 0 0 11.5 14 A 2.4999997 2.5000003 0 0 0 14 11.5 A 2.4999997 2.5000003 0 0 0 13.583984 10.123047 z "
     class="ColorScheme-Text"
     />
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
    style="fill:currentColor;fill-opacity:1;stroke:none" 
	d="m3 3v1 15h1 9v-1h-9v-8h3v-.009766l.007813.009766 2-2h8.992188v5h1v-8h-6.992188l-2-2-.007812.009766v-.009766h-6-1m13.5 11c-1.385 0-2.5 1.115-2.5 2.5 0 .433427.118052.834808.310547 1.189453l.759765-.759765c-.041025-.137094-.070312-.278897-.070312-.429688 0-.831.669-1.5 1.5-1.5.150791 0 .292594.029287.429688.070312l.759765-.759765c-.354645-.192495-.756026-.310547-1.189453-.310547m2.189453 1.310547l-.759765.759765c.041026.137094.070312.278897.070312.429688 0 .831-.669 1.5-1.5 1.5-.150791 0-.292594-.029286-.429688-.070312l-.759765.759765c.354645.192495.756026.310547 1.189453.310547 1.385 0 2.5-1.115 2.5-2.5 0-.433427-.118052-.834808-.310547-1.189453"
    class="ColorScheme-Text"
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
			<path
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 4 4 L 4 28 L 16 28 L 16 27 L 5 27 L 5 14 L 10 14 L 13 11 L 27 11 L 27 16 L 28 16 L 28 7 L 18 7 L 15 4 L 4 4 z M 22 16 A 6 6 0 0 0 16 22 A 6 6 0 0 0 16.835938 25.042969 L 17.568359 24.310547 A 5 5 0 0 1 17 22 A 5 5 0 0 1 22 17 A 5 5 0 0 1 24.308594 17.570312 L 25.039062 16.835938 A 6 6 0 0 0 22 16 z M 27.160156 18.957031 L 26.431641 19.689453 A 5 5 0 0 1 27 22 A 5 5 0 0 1 22 27 A 5 5 0 0 1 19.691406 26.429688 L 18.957031 27.160156 A 6 6 0 0 0 22 28 A 6 6 0 0 0 28 22 A 6 6 0 0 0 27.164062 18.957031 L 27.160156 18.957031 z "
     id="path85" 
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
