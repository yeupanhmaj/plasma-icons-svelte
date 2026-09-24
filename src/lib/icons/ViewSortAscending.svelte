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
			<g style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" transform="translate(0 -292.76665)"><path d="m.52916672 293.5604v.26458h.79375008v-.26458z"/><path d="m.52916674 296.20624v-.26458h2.38125006v.26458z"/><path d="m.52916676 294.35415v.26458h1.32291664v-.26458z"/><path d="m.5291668 295.1479v.26458h1.8520833v-.26458z"/><path d="m2.7781251 293.29582-.9260417.92604.1870687.18707.6066813-.60668v1.08106h.2645833v-1.08106l.6066814.60668.1870686-.18707z"/></g>
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
			<g id="g17" class="ColorScheme-Text" transform="matrix(3.7795305,0,0,3.7795305,-2.4855562e-6,-1100.5205)" fill="currentColor">
        <path id="path3" d="m3.96875 294.35415v-1.87482l-0.6066814 0.60668-0.1870686-0.18707 0.9260416-0.92604 0.9260417 0.92604-0.1870686 0.18707-0.6066814-0.60668v1.87482z"/>
        <path id="path5" d="m0.79374999 296.20623v-0.26458h3.7041667v0.26458z"/>
        <path id="path7" d="m0.79374999 295.41248v-0.26458h3.175v0.26458z"/>
        <path id="path9" d="m0.79374999 294.61873v-0.26458h2.6458333v0.26458z"/>
        <path id="path11" d="m0.79375004 291.9729v0.26458h1.0583333v-0.26458z"/>
        <path id="path13" d="m0.79375 292.76665v0.26458h1.5875v-0.26458z"/>
        <path id="path15" d="m0.79375001 293.5604v0.26458h2.1166667v-0.26458z"/>
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
			<g style="fill:currentColor;fill-opacity:1;stroke:none" class="ColorScheme-Text" transform="translate(0 -288.53332)"><path d="m1.0583334 289.85624v.26458h1.3229166v-.26458z"/><path d="m1.0583333 293.03124v.26458h3.4395834v-.26458z"/><path d="m1.0583333 293.82498v.26458h3.9687501v-.26458z"/><path d="m1.0583333 295.67707v-.26458h5.0270834v.26458z"/><path d="m1.0583333 294.88332v-.26458h4.4979167v.26458z"/><path d="m6.35 292.23749v-2.1394l-.6066814.60668-.1870686-.18707.9260417-.92604.9260416.92604-.1870686.18707-.6066814-.60668v2.1394z"/><path d="m1.0583333 292.23749v.26458h2.9104167v-.26458z"/><path d="m1.0583333 291.44374v.26458h2.38125v-.26458z"/><path d="m1.0583333 290.64999v.26458h1.8520834v-.26458z"/></g>
		</svg>
	{/if}
