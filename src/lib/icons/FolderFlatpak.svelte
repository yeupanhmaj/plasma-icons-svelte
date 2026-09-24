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
       style="fill:currentColor"
       d="M 8,2 2,4 v 8 l 6,2 6,-2 V 4 Z M 8,3 V 5.836291 L 7.5,6.1 3,4.56 Z m 5,2 v 6.4 L 8,13 V 7 Z"
       class="ColorScheme-Text" />
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
       style="fill:currentColor"
       d="M 11 1.8300781 L 3 5.9296875 L 3 16 L 11 20 L 19 16 L 19 5.9296875 L 11 1.8300781 z M 11 3 L 11 8.2988281 L 10.5 8.6289062 L 4 6.4902344 L 11 3 z M 18 7 L 18 15.400391 L 11 18.800781 L 11 9.5292969 L 18 7 z "
       class="ColorScheme-Text" />
		</svg>
	{:else if numericSize <= 48}
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
			<metadata
     id="metadata18">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <sodipodi:namedview
     pagecolor="#ffffff"
     bordercolor="#666666"
     borderopacity="1"
     objecttolerance="10"
     gridtolerance="10"
     guidetolerance="10"
     inkscape:pageopacity="0"
     inkscape:pageshadow="2"
     inkscape:window-width="2552"
     inkscape:window-height="1387"
     id="namedview16"
     showgrid="true"
     inkscape:zoom="45.254834"
     inkscape:cx="18.203417"
     inkscape:cy="14.567524"
     inkscape:window-x="0"
     inkscape:window-y="22"
     inkscape:window-maximized="1"
     inkscape:current-layer="svg14">
    <inkscape:grid
       type="xygrid"
       id="grid868" />
  </sodipodi:namedview>
  
  <path
     style="fill:currentColor;fill-opacity:1;stroke:none"
     d="M 2 3 L 2 10 L 1 10 L 1 29 L 12 29 L 13 29 L 31 29 L 31 8 L 30 8 L 30 5 L 16 5 L 14 3 L 2 3 z "
     class="ColorScheme-Accent"
     id="path4" />
  <path
     style="fill-opacity:0.33;fill-rule:evenodd"
     d="m 2,3 0,7 9,0 L 13,8 30,8 30,5 16,5 14,3 2,3 Z"
     id="path6" />
  <path
     style="fill:#ffffff;fill-opacity:0.2;fill-rule:evenodd"
     d="M 14 3 L 15 6 L 30 6 L 30 5 L 16 5 L 14 3 z M 13 8 L 11 10 L 1 10 L 1 11 L 12 11 L 13 8 z "
     id="path8" />
  <path
     style="fill-opacity:0.2;fill-rule:evenodd"
     d="M 13 8 L 11 9 L 2 9 L 2 10 L 11 10 L 13 8 z M 1 28 L 1 29 L 31 29 L 31 28 L 1 28 z "
     class="ColorScheme-Text"
     id="path10" />
  <path
     inkscape:connector-curvature="0"
     style="color:#31363b;fill:currentColor;fill-opacity:0.6;stroke:none"
     d="m 16,12 -6,2 v 8 l 6,2 6,-2 v -8 z m 0,1 v 2.836291 L 15.5,16.1 11,14.56 Z m 5,2 v 6.4 L 16,23 v -6 z"
     class="ColorScheme-Text"
     id="path12-5"
     sodipodi:nodetypes="ccccccccccccccccc" />
		</svg>
	{:else if numericSize <= 80}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 64 64"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<path 
     style="fill:currentColor" 
     d="M 4 6 L 4 11 L 4 20 L 3 20 L 3 21 L 3 21 C 3 21 3 21 3 21 L 3 57 L 3 58 L 4 58 L 60 58 L 61 58 L 61 57 L 61 21 L 61 21 L 61 16 L 60 16 L 60 11 C 60 11 60 11 60 11 L 60 11 L 60 10 L 32 10 L 28 6 L 4 6 z "
     class="ColorScheme-Accent"
     />
 <path 
     style="fill-opacity:0.33"
     d="M 4 6 L 4 11 L 4 20 L 22 20 L 26 16 L 60 16 L 60 11 C 60 11 60 11 60 11 L 60 11 L 60 10 L 32 10 L 28 6 L 4 6 z "
     />
 <path 
     style="fill:#ffffff;fill-opacity:0.2"
     d="M 28 6 L 31 11 L 33 11 L 60 11 L 60 10 L 33 10 L 32 10 L 28 6 z M 26 16 L 22 20 L 3 20 L 3 21 L 23 21 L 26 16 z "
     />
 <path 
     style="fill-opacity:0.2;fill-rule:evenodd"
     d="M 26 16 L 20 19 L 4 19 L 4 20 L 22 20 L 26 16 z M 3 57 L 3 58 L 4 58 L 60 58 L 61 58 L 61 57 L 60 57 L 4 57 L 3 57 z "
     class="ColorScheme-Text"
     />
 <path 
     style="fill:currentColor;fill-opacity:0.6;stroke:none"  
     d="M 32,26.9 31.74,27.1 23,31 v 12 l 9,4 9,-4 V 31 Z m 0,1.17 v 5.3 L 31.5,33.7 24,31.56 Z m 8,4 V 42.4 l -8,3.4 V 34.6 Z"
     class="ColorScheme-Text"
     />
		</svg>
	{:else}
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 96 96"
			width={size}
			height={size}
			fill={color}
			class="plasma-icon {className}"
			style="color: {color}; {style}"
			{...restProps}
		>
			<!-- style definitions -->
  

  <!-- folder bg -->
  <path
    style="fill:currentColor"
    class="ColorScheme-Accent"
    d="m6 9v21h-1v57h86v-63h-1v-9h-42l-6-6z" />

  <!-- folder fg -->
  <path
    d="m6 9v21h27l6-6h51v-9h-42l-6-6z"
    fill-opacity=".33" />

  <!-- folder highlight -->
  <path
    d="m42 9 5 7h43v-1h-42zm-3 15-6 6h-28v1h29z"
    fill="#fff"
    fill-opacity=".2" />

  <!-- folder shadow -->
  <path
    d="m39 24-7 5h-26v1h27zm-34 62v1h86v-1z"
    fill-opacity=".2" />

  <!--
    flatpak logo, kinda.
    the smaller sizes are horizontally flipped, so this matches that.
  -->
  <path
    d="m48 41.5c-.346328.000113-.689873.08962-1 .269531l-11.988281 5.560547c-.931058.537182-1.007191 1.260232-1.011719 1.767578v13.452734c0 .499999-.05235 1.356783 1.011719 1.970703l11.988281 5.564454h.0039c.309126.178415.651189.265513.996094.265625.344905-.000112.686968-.08721.996094-.265625h.003912l11.988281-5.564453c1.064066-.613922 1.011719-1.470705 1.011719-1.970704v-12.749609-.5c0-.0625.000647-.130647 0-.203125-.0045-.507345-.08066-1.230397-1.011719-1.767578l-11.988281-5.560547c-.310127-.179908-.653672-.269418-1-.269531zm0 .978515v10.822266l12.066406-4.878906c.933587-.250156.933594.378906.933594.841797v13.685157c-.000141.0082.000408.01721 0 .02539-.01266.253739-.153993.48378-.375.611328l-12.386719 5.75c-.076905.025141-.157372.037674-.238281.03711v-16.071876l-12.597656-5.048828 12.33789-5.728516c.08326-.03019.171204-.0454.259766-.04492z"
    style="fill:currentColor;fill-opacity:0.6"
    class="ColorScheme-Text" />
		</svg>
	{/if}
