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
        style="fill:currentColor;fill-opacity:1;stroke:none"
        d="m2 2v12h7v-1h-6v-6h10v2h1v-5h-4.992l-2-2-.008.008v-.008h-4zm1 1h3.592l1 1h-.594v.008l-.008-.008-2 2h-1.992z"
        class="ColorScheme-Text"
        />
 <path d="M11.5 9A2.5 2.5 0 0 0 9 11.5 2.5 2.5 0 0 0 9.416016 12.876953L10.148 12.145A1.5 1.5 0 0 1 10 11.5 1.5 1.5 0 0 1 11.5 10 1.5 1.5 0 0 1 12.144531 10.148438L12.877 9.416A2.5 2.5 0 0 0 11.5 9M13.584 10.123L12.852 10.855A1.5 1.5 0 0 1 13 11.5 1.5 1.5 0 0 1 11.5 13 1.5 1.5 0 0 1 10.855469 12.851562L10.123 13.584A2.5 2.5 0 0 0 11.5 14 2.5 2.5 0 0 0 14 11.5 2.5 2.5 0 0 0 13.583984 10.123047"  style="fill:currentColor;fill-opacity:1;stroke:none" 
     class="ColorScheme-NegativeText"
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
     style="fill:currentColor;fill-opacity:1;stroke:none" 
     d="M 3 3 L 3 4 L 3 19 L 4 19 L 13 19 L 13 18 L 4 18 L 4 10 L 7 10 L 7 9.9902344 L 7.0078125 10 L 9.0078125 8 L 18 8 L 18 13 L 19 13 L 19 5 L 12.007812 5 L 10.007812 3 L 10 3.0097656 L 10 3 L 4 3 L 3 3 z "
     class="ColorScheme-Text"
     />
    <path
     style="fill:#da4453;fill-opacity:1;stroke:none"
     d="M 16.5 14 C 15.115 14 14 15.115 14 16.5 C 14 16.9334 14.118052 17.334753 14.310547 17.689453 L 15.070312 16.929688 C 15.029288 16.792588 15 16.6508 15 16.5 C 15 15.669 15.669 15 16.5 15 C 16.650791 15 16.792594 15.029313 16.929688 15.070312 L 17.689453 14.310547 C 17.334808 14.118147 16.933427 14 16.5 14 z M 18.689453 15.310547 L 17.929688 16.070312 C 17.970717 16.207412 18 16.3492 18 16.5 C 18 17.331 17.331 18 16.5 18 C 16.349209 18 16.207406 17.970687 16.070312 17.929688 L 15.310547 18.689453 C 15.665192 18.881853 16.066573 19 16.5 19 C 17.885 19 19 17.885 19 16.5 C 19 16.0666 18.881948 15.665247 18.689453 15.310547 z "
     />
		</svg>
	{/if}
