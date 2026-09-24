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
			<g fill="currentColor" stroke-linecap="square">
        <g id="g8" class="ColorScheme-Text" fill="currentColor">
            <path id="path2" d="M 3.5,2 A 1.5,1.5 0 0 0 2,3.5 1.5,1.5 0 0 0 3.5,5 1.5,1.5 0 0 0 5,3.5 1.5,1.5 0 0 0 3.5,2 Z M 3.4882812,3 A 0.5,0.5 0 0 1 3.5,3 0.5,0.5 0 0 1 4,3.5 0.5,0.5 0 0 1 3.5,4 0.5,0.5 0 0 1 3,3.5 0.5,0.5 0 0 1 3.4882812,3 Z"/>
            <path id="path4" d="m3 4h1v8h-1z"/>
            <path id="path6" d="m11 4v2a1 1 0 0 1-1 1h-5a2 2 0 0 0-0.0488281 0 2 2 0 0 0-1.9511719 2h1a1 1 0 0 1 1-1h5a2 2 0 0 0 0.048828 0 2 2 0 0 0 1.951172-2v-2z"/>
        </g>
        <path id="path10" class="ColorScheme-NegativeText" d="M 11.5,2 A 1.5,1.5 0 0 0 10,3.5 1.5,1.5 0 0 0 11.5,5 1.5,1.5 0 0 0 13,3.5 1.5,1.5 0 0 0 11.5,2 Z M 11.48828,3 A 0.5,0.5 0 0 1 11.5,3 0.5,0.5 0 0 1 12,3.5 0.5,0.5 0 0 1 11.5,4 0.5,0.5 0 0 1 11,3.5 0.5,0.5 0 0 1 11.48828,3 Z" fill="currentColor"/>
        <path id="path12" class="ColorScheme-Text" fill="currentColor" d="M 3.5,11 A 1.5,1.5 0 0 0 2,12.5 1.5,1.5 0 0 0 3.5,14 1.5,1.5 0 0 0 5,12.5 1.5,1.5 0 0 0 3.5,11 Z M 3.488281,12 A 0.5,0.5 0 0 1 3.5,12 0.5,0.5 0 0 1 4,12.5 0.5,0.5 0 0 1 3.5,13 0.5,0.5 0 0 1 3,12.5 0.5,0.5 0 0 1 3.488281,12 Z"/>
    </g>
    <g id="g18" class="ColorScheme-NegativeText" fill="currentColor" shape-rendering="auto" stroke-linecap="square">
        <path id="path14" d="m8.5 8.7929688-0.7070312 0.7070312 0.3535156 0.3535156 3.9999996 4.0000004 0.353516 0.353515 0.707031-0.707031-0.353515-0.353516-4.0000004-3.9999996-0.3535156-0.3535156z" color="#000000" color-rendering="auto" dominant-baseline="auto" image-rendering="auto" solid-color="#000000" stop-color="#000000"/>
        <path id="path16" d="m12.5 8.7929688-0.353516 0.3535156-3.9999996 3.9999996-0.3535156 0.353516 0.7070312 0.707031 0.3535156-0.353515 4.0000004-4.0000004 0.353515-0.3535156-0.707031-0.7070312z" color="#000000" color-rendering="auto" dominant-baseline="auto" image-rendering="auto" solid-color="#000000" stop-color="#000000"/>
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
			<g stroke-linecap="square">
        <g id="g10" class="ColorScheme-Text" fill="currentColor">
            <path id="path2" d="M 5.5,3 A 2.5,2.5 0 0 0 3,5.5 2.5,2.5 0 0 0 5.5,8 2.5,2.5 0 0 0 8,5.5 2.5,2.5 0 0 0 5.5,3 Z m 0,1 A 1.5,1.5 0 0 1 7,5.5 1.5,1.5 0 0 1 5.5,7 1.5,1.5 0 0 1 4,5.5 1.5,1.5 0 0 1 5.5,4 Z"/>
            <path id="path4" d="m5.5 14a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5zm0 1a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1-1.5 1.5 1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 1 1.5-1.5z"/>
            <path id="path6" d="m5 7h1v8h-1z"/>
            <path id="path8" d="m15 7v2a1 1 0 0 1-1 1h-7a2 2 0 0 0-0.0488281 0 2 2 0 0 0-1.9511719 2h1a1 1 0 0 1 1-1h7a2 2 0 0 0 0.04883 0 2 2 0 0 0 1.95117-2v-2z"/>
        </g>
        <path id="path12" class="ColorScheme-NegativeText" d="m15.5 3a2.5 2.5 0 0 0-2.5 2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0-2.5-2.5zm0 1a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1-1.5 1.5 1.5 1.5 0 0 1-1.5-1.5 1.5 1.5 0 0 1 1.5-1.5z" fill="currentColor"/>
        <g id="g18" shape-rendering="auto">
            <g id="path14">
                <path id="path871" d="m11.500107 12.500107 6 6" color="#da4453" color-rendering="auto" dominant-baseline="auto" image-rendering="auto" solid-color="#000000" stop-color="#da4453"/>
                <path id="path873" class="ColorScheme-NegativeText" d="m11.5 11.792969-0.707031 0.707031 0.353515 0.353516 6 6 0.353516 0.353515 0.707031-0.707031-0.353515-0.353516-6-6-0.353516-0.353515z" color="#da4453" color-rendering="auto" dominant-baseline="auto" fill="currentColor" image-rendering="auto" solid-color="#000000" stop-color="#000000"/>
            </g>
            <g id="path16">
                <path id="path877" d="m17.500107 12.500107-6 6" color="#da4453" color-rendering="auto" dominant-baseline="auto" image-rendering="auto" solid-color="#000000" stop-color="#da4453"/>
                <path id="path879" class="ColorScheme-NegativeText" d="m17.5 11.792969-0.353516 0.353515-6 6-0.353515 0.353516 0.707031 0.707031 0.353516-0.353515 6-6 0.353515-0.353516-0.707031-0.707031z" color="#da4453" color-rendering="auto" dominant-baseline="auto" fill="currentColor" image-rendering="auto" solid-color="#da4453" stop-color="#000000"/>
            </g>
        </g>
    </g>
		</svg>
	{/if}
