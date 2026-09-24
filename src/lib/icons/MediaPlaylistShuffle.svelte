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
     d="m11 3.5v1.5h-2c-1.662 0-3 1.338-3 3 0 1.108-.892 2-2 2h-2v1h2c1.662 0 3-1.338 3-3 0-1.108.892-2 2-2h2v1.5l3-2zm-9 1.5v1h2c.401 0 .772.119 1.084.32.077-.333.21-.642.387-.922-.436-.246-.933-.398-1.471-.398zm9 3.5v1.5h-2c-.401 0-.772-.119-1.084-.32-.077.333-.21.642-.387.922.436.246.933.398 1.471.398h2v1.5l3-2z"
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
    d="M 16 5 L 16 7 L 13 7 C 10.784 7 9 8.784 9 11 C 9 12.662 7.662 14 6 14 L 3 14 L 3 15 L 6 15 C 8.216 15 10 13.216 10 11 C 10 9.338 11.338 8 13 8 L 16 8 L 16 10 L 19 7.5 L 16 5 z M 3 7 L 3 8 L 6 8 C 6.8536128 8 7.6168144 8.3572581 8.1621094 8.9257812 C 8.2578781 8.5814037 8.3956215 8.2568349 8.5742188 7.9570312 C 7.8779048 7.3680394 6.9875937 7 6 7 L 3 7 z M 16 12 L 16 14 L 13 14 C 12.146387 14 11.383186 13.642742 10.837891 13.074219 C 10.742121 13.418597 10.604379 13.743165 10.425781 14.042969 C 11.122095 14.631961 12.012406 15 13 15 L 16 15 L 16 17 L 19 14.5 L 16 12 z "
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
     d="M 23.5,6.9999993 V 9.9999998 H 19 c -3.324,0 -5.5,2.6760002 -5.5,6.0000002 0,2.493 -2.474309,5 -5.0000002,5 H 4 v 1 H 8.4999998 C 11.824,22 14.5,19.324 14.5,16 c 0,-2.493 2.007,-5 4.5,-5 h 4.5 v 3 L 28,10.5 Z M 4,9.9999998 V 11 h 4.4999998 c 1.280419,0 2.5930102,0.632095 3.4109532,1.484879 0.143655,-0.516567 0.18248,-0.599627 0.450376,-1.049333 C 11.316857,10.552058 9.9813908,9.9999998 8.4999998,9.9999998 Z M 23.5,18 v 3 H 19 c -1.280419,0 -2.586238,-0.620961 -3.40418,-1.473746 -0.143655,0.516567 -0.189251,0.588493 -0.457148,1.038199 C 16.183143,21.447941 17.518609,22 19,22 h 4.5 v 3 L 28,21.5 Z"
     class="ColorScheme-Text"
     />
		</svg>
	{/if}
