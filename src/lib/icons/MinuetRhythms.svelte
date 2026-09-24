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
			<metadata id="metadata3704">
  <rdf:RDF>
   <cc:Work rdf:about="">
    <dc:format>image/svg+xml</dc:format>
    <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
    <dc:title/>
   </cc:Work>
  </rdf:RDF>
 </metadata>
 <g id="layer1" transform="translate(0 -1036.4)">
  <path id="path4303" class="ColorScheme-Text" style="fill:currentColor" d="m5 2v2 5h1v-5h7v5h1v-5-2h-9zm-2.9141 7.3008l-0.707 0.7072 1.4141 1.414-1.4141 1.414 0.707 0.707 1.4141-1.414 1.4141 1.414 0.707-0.707-1.4141-1.414 1.4141-1.414-0.707-0.7072-1.4141 1.4142-1.4141-1.4142zm8.0001 0l-0.7071 0.7072 1.4141 1.414-1.4141 1.414 0.7071 0.707 1.414-1.414 1.414 1.414 0.707-0.707-1.414-1.414 1.414-1.414-0.707-0.7072-1.414 1.4142-1.414-1.4142z" transform="translate(0,1036.4)"/>
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
			<g id="layer1" transform="translate(0 -1030.4)">
        <path id="rect4298" class="ColorScheme-Text" transform="translate(0,1030.4)" d="m8 4v10h1v-8h7v8h1v-10h-9zm-2.9141 10.301-0.707 0.707 1.4141 1.414-1.4141 1.414 0.707 0.707 1.4141-1.414 1.4141 1.414 0.707-0.707-1.4141-1.414 1.4141-1.414-0.707-0.707-1.4141 1.414-1.4141-1.414zm8.0001 0-0.707 0.707 1.414 1.414-1.414 1.414 0.707 0.707 1.414-1.414 1.414 1.414 0.707-0.707-1.414-1.414 1.414-1.414-0.707-0.707-1.414 1.414-1.414-1.414z" fill="currentColor"/>
    </g>
		</svg>
	{/if}
