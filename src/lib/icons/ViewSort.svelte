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
			viewBox="0 0 4.2333332 4.2333335"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<g style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" transform="translate(0 -292.76665)"><path d="m.52916664 296.20624v-.26458h1.32291666v.26458z"/><path d="m.52916666 293.5604v.26458h1.05833334v-.26458z"/><path d="m.52916668 295.41249v-.26458h1.05833332v.26458z"/><path d="m.52916672 294.61874v-.26458h.52916658v.26458z"/><path d="m2.778125 296.47082-.9260417-.92604.1870687-.18707.6066813.60668v-1.08106h.2645833v1.08106l.6066814-.60668.1870686.18707z"/><path d="m2.2489584 293.56041-.9260417.92604.1870687.18707.6066813-.60668v1.08106h.2645833v-1.08106l.6066814.60668.1870686-.18707z"/></g>
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
			<g id="g19" class="ColorScheme-Text" transform="matrix(3.7795276,0,0,3.7795276,0,-1100.5196)" fill="currentColor">
        <path id="path3" transform="matrix(.26458333 0 0 .26458333 0 291.17915)" d="m 15,10 v 7.085938 L 12.707031,14.792969 12,15.5 15.5,19 19,15.5 18.292969,14.792969 16,17.085938 V 10 Z"/>
        <path id="path5" d="m0.79374999 291.9729v0.26458h1.8520833v-0.26458z"/>
        <path id="path7" d="m0.79374999 292.76665v0.26458h1.3229167v-0.26458z"/>
        <path id="path9" d="m0.79374999 293.5604v0.26458h1.8520833v-0.26458z"/>
        <path id="path11" d="m0.79375004 296.20623v-0.26458h1.8520833v0.26458z"/>
        <path id="path13" d="m0.79375 295.41248v-0.26458h1.8520833v0.26458z"/>
        <path id="path15" d="m0.79374997 294.61873v-0.26458h1.8520833v0.26458z"/>
        <path id="path17" d="m3.175 294.61873v-1.87482l-0.6066814 0.60668-0.1870686-0.18707 0.9260416-0.92604 0.9260417 0.92604-0.1870686 0.18707-0.6066814-0.60668v1.87482z"/>
    </g>
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 8.4666663 8.4666671"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<g style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" transform="translate(0 -288.53332)"><path d="m1.0583334 289.85624v.26458h3.7041666v-.26458z"/><path d="m1.0583333 293.03124v.26458h3.7041667v-.26458z"/><path d="m1.0583333 293.82498v.26458h3.7041667v-.26458z"/><path d="m1.0583333 295.67707v-.26458h3.7041667v.26458z"/><path d="m1.0583333 294.88332v-.26458h3.7041667v.26458z"/><path d="m24 18v8.085938l-2.292969-2.292969-.707031.707031 3.5 3.5 3.5-3.5-.707031-.707031-2.292969 2.292969v-8.085938z" transform="matrix(.26458333 0 0 .26458333 0 288.53332)"/><path d="m1.0583333 292.23749v.26458h3.175v-.26458z"/><path d="m1.0583333 291.44374v.26458h3.7041667v-.26458z"/><path d="m1.0583333 290.64999v.26458h3.7041667v-.26458z"/><path d="m5.5562501 294.08957v-2.1394l-.6066814.60668-.1870686-.18707.9260417-.92604.9260416.92604-.1870686.18707-.6066814-.60668v2.1394z"/></g>
		</svg>
	{/if}
