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

	{#if numericSize <= 27}
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
			<linearGradient id="a" gradientTransform="matrix(.64285776 0 0 .64285776 -246.51045 -330.87044)" gradientUnits="userSpaceOnUse" x2="0" y1="545.79797" y2="517.79797"><stop offset="0" stop-color="#2a2c2f"/><stop offset="1" stop-color="#424649"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="6.499998" x2="15.500006" y1="6.500027" y2="15.500035"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="5" x2="5" y1="20" y2="7"><stop offset="0" stop-color="#999a9c"/><stop offset="1" stop-color="#f4f5f5"/></linearGradient><rect fill="url(#a)" height="18" rx="9" stroke-width=".642858" width="18" x="2.000001" y="2.000005"/><path d="m9.2522327 7.1240508-3.9287147 7.6264022 5.228241 5.226986c.149485.0073.296882.0226.448243.0226 4.294741 0 7.86065-2.981364 8.768982-6.993589l-3.440294-3.4402933-2.13951-.1845702-1.222937.6993585.05148.0339-.04143-.0075 1.686246 1.686246-.345285.396764z" fill="url(#b)" fill-rule="evenodd" opacity=".2" stroke-width=".642858"/><path d="m7.4257812 6.8378906-2.5214843 7.1699214h1.6308593l.5195313-1.701171h2.5996094l.5214841 1.701171h1.628907l-2.5292974-7.1699214zm.9296876 1.109375c.033333.1333334.075573.2907032.1289062.4707032.053333.1799999.1068229.3559635.1601562.5292968.053333.1733334.097526.3163542.1308594.4296875l.5195313 1.6601559h-1.859375l.5097656-1.6601559c.026667-.073333.062708-.1958073.109375-.3691406.053333-.18.1068229-.3672135.1601563-.5605469.06-.2.1072916-.3666666.140625-.5zm6.4687092.048827c-.386667 0-.759141.047292-1.119141.140625-.36.086667-.684036.2029427-.970703.3496094l.490234 1.0097656c.253334-.1133333.506433-.2059635.759766-.2792969.253333-.08.514583-.1210937.78125-.1210937s.472474.067839.619141.2011718c.153333.1333334.230451.3422398.230468.6289068l.000041.6816419-.951172.0293c-.813333.03333-1.421458.187604-1.828124.460937-.406667.273334-.611329.699297-.611329 1.279297 0 .593333.160469 1.030547.480469 1.310547s.722318.419922 1.208984.419922c.453334 0 .810313-.06589 1.070313-.199219.26-.133333.506901-.347292.740234-.640625h.04102l.289063.740234h1.041015l-.000041-4.0820319c-.000007-.653334-.19651-1.1358859-.589844-1.4492192-.38667-.3200031-.948311-.4804718-1.681644-.4804718zm.791056 3.4804699v.451172c0 .346667-.110078.617214-.330078.810547-.22.186667-.490547.279297-.810547.279297-.213333 0-.386198-.04729-.519531-.140625-.133333-.1-.199219-.263568-.199219-.490234 0-.26.09263-.468906.279297-.628907.186667-.16.52-.246432 1-.259765z" fill="url(#c)"/>
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
			<defs id="defs5455">
  <linearGradient id="linearGradient4159">
   <stop style="stop-color:#2a2c2f" id="stop4161"/>
   <stop offset="1" style="stop-color:#424649" id="stop4163"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4159" id="linearGradient4274" y1="545.79797" y2="517.79797" x2="0" gradientUnits="userSpaceOnUse"/>
  <linearGradient id="linearGradient4219">
   <stop style="stop-color:#999a9c" id="stop4221"/>
   <stop offset="1" style="stop-color:#f4f5f5" id="stop4223"/>
  </linearGradient>
  <linearGradient xlink:href="#linearGradient4219" id="linearGradient4309" y1="537.79797" y2="525.79797" x2="0" gradientUnits="userSpaceOnUse"/>
  <linearGradient xlink:href="#linearGradient4227" id="linearGradient4387" y1="9" x1="9" y2="23" x2="23" gradientUnits="userSpaceOnUse"/>
  <linearGradient id="linearGradient4227">
   <stop style="stop-color:#292c2f" id="stop4229"/>
   <stop offset="1" style="stop-opacity:0" id="stop4231"/>
  </linearGradient>
 </defs>
 <metadata id="metadata5458"/>
 <g id="layer1" transform="matrix(1 0 0 1 -384.57143 -515.798)">
  <rect width="27.999973" x="386.57144" y="517.79797" rx="13.999987" height="27.999973" style="fill:url(#linearGradient4274)" id="rect4179"/>
  <path style="fill:url(#linearGradient4387);opacity:0.2;fill-rule:evenodd" id="path4361" d="M 13.28125 9.9707031 L 7.1699219 21.833984 L 15.302734 29.964844 C 15.535266 29.97622 15.764549 30 16 30 C 22.680701 30 28.227665 25.362327 29.640625 19.121094 L 24.289062 13.769531 L 20.960938 13.482422 L 19.058594 14.570312 L 19.138672 14.623047 L 19.074219 14.611328 L 21.697266 17.234375 L 21.160156 17.851562 L 13.28125 9.9707031 z " transform="matrix(1 0 0 1 384.57143 515.798)"/>
  <g id="text4228">
   <path style="fill:url(#linearGradient4309)" id="path4233" d="m 395.02473,532.78927 1.99875,-5.655 1.80375,5.655 -3.8025,0 z m 5.57375,4.8425 1.43,0 -4.17625,-11.8625 -1.69,0 -4.42,11.8625 1.43,0 1.41375,-3.75375 4.7125,0 1.3,3.75375 z"/>
   <path style="fill:url(#linearGradient4309)" id="path4235" d="m 405.53315,536.78677 c -0.82875,0 -1.44625,-0.40625 -1.44625,-1.38125 0,-1.21875 0.73125,-1.60875 3.20125,-1.93375 0.0163,0 0.79625,-0.11375 0.79625,-0.11375 l 0,2.145 c -0.56875,0.78 -1.7225,1.28375 -2.55125,1.28375 z m 2.58375,-0.11375 0.195,0.95875 1.08875,0 0,-6.4025 c 0,-1.95 -1.34875,-2.51875 -3.07125,-2.51875 -1.235,0 -2.38875,0.30875 -3.055,0.66625 l 0.37375,1.04 c 0.715,-0.34125 1.755,-0.585 2.71375,-0.585 1.2025,0 1.7225,0.5525 1.7225,1.60875 l 0,0.99125 -0.8775,0.0975 c -2.2425,0.325 -4.4525,0.63375 -4.4525,2.925 0,1.625 1.21875,2.3725 2.64875,2.3725 0.91,0 1.95,-0.2925 2.71375,-1.15375 z"/>
  </g>
 </g>
		</svg>
	{/if}
