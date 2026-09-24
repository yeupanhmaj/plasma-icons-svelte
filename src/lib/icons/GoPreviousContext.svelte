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
       d="M 6 2 L 0.70703125 7.2929688 L 0 8 L 0.70703125 8.7070312 L 6 14 L 15 14 L 16 14 L 16 2 L 15 2 L 6 2 z M 9 4 L 10 4 L 10 5 L 9 5 C 8.44778 5 8 5.44771 8 6 L 8 7 C 8 7.38251 7.86072 7.73504 7.625 8 C 7.86072 8.26497 8 8.6175 8 9 L 8 10 C 8 10.55222 8.44771 11 9 11 L 10 11 L 10 12 L 9 12 C 7.89549 12 7 11.10452 7 10 L 7 9 C 7 8.72385 6.77614 8.5 6.5 8.5 L 6 8.5 L 6 7.5 L 6.5 7.5 C 6.77614 7.5 7 7.27616 7 7 L 7 6 C 7 4.89549 7.89548 4 9 4 z M 11 4 L 12 4 C 13.10452 4 14 4.89549 14 6 L 14 7 C 14 7.27616 14.22386 7.5 14.5 7.5 L 15 7.5 L 15 8.5 L 14.5 8.5 C 14.22386 8.5 14 8.72385 14 9 L 14 10 C 14 11.10452 13.10451 12 12 12 L 11 12 L 11 11 L 12 11 C 12.55229 11 13 10.55222 13 10 L 13 9 C 13 8.6175 13.13928 8.26497 13.375 8 C 13.13928 7.73504 13 7.38251 13 7 L 13 6 C 13 5.44771 12.55222 5 12 5 L 11 5 L 11 4 z "
     class="ColorScheme-Text"
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
	d="m398.85714 543.07647v16h-14l-4-8 4-8h14m-5.42773 4v.5918c.7107 0 .7207.23916.7207 1.10547v1.01757c0 .41547.12362 1.03272.72266 1.28907-.59904.25635-.72266.87555-.72266 1.29101v1.00781c0 .86631-.001 1.10547-.7207 1.10547v.5918c1.06609 0 1.51367-.35225 1.51367-1.25391v-1.22265c0-.55691.0205-1.20117.60937-1.20117h.30469v-.64454h-.30469c-.58887 0-.60937-.64426-.60937-1.20117v-1.22265c0-.90166-.44758-1.25391-1.51367-1.25391m-3.13672 0c-1.0661 0-1.52149.35225-1.52149 1.25391v1.22265c.00001.55691-.0404 1.20117-.61914 1.20117h-.29492v.64454h.29492c.57874 0 .61914.64426.61914 1.20117v1.22265c.00001.90166.45539 1.25391 1.52149 1.25391v-.5918c-.71082 0-.72852-.23916-.72852-1.10547v-1.00781c0-.41546-.12361-1.03466-.72265-1.29101.59904-.25635.72265-.8736.72265-1.28907v-1.01757c0-.86631.0178-1.10547.72852-1.10547v-.5918" transform="translate(-378.85714-540.07647)"
    class="ColorScheme-Text"
    />
		</svg>
	{/if}
