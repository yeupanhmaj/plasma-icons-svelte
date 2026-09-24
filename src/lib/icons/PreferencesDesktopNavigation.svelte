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
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="15.5" x2="15.5" y1="12.285714" y2="6.5"><stop offset="0" stop-color="#c61423"/><stop offset="1" stop-color="#dc2b41"/></linearGradient><linearGradient id="b" gradientTransform="matrix(.50000045 0 0 .50000039 -189.28589 -254.89919)" gradientUnits="userSpaceOnUse" x1="400.57141" x2="400.57141" y1="545.79797" y2="517.79797"><stop offset="0" stop-color="#eff0f1"/><stop offset="1" stop-color="#fcfcfc"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="6.5" x2="12.285714" y1="9.714286" y2="15.5"><stop offset="0" stop-color="#4d4d4d"/><stop offset="1" stop-color="#232629"/></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="10.999999" x2="10.999999" y1="19.999999" y2="2"><stop offset="0" stop-color="#788085"/><stop offset="1" stop-color="#9ba1a6"/></linearGradient><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="5" x2="16" y1="8" y2="19"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><path d="m11 3.9999999c3.877999 0 6.999999 3.1219995 6.999999 7.0000001 0 3.877999-3.122 6.999999-6.999999 6.999999-3.8780006 0-7.0000001-3.122-7.0000001-6.999999 0-3.8780006 3.1219995-7.0000001 7.0000001-7.0000001z" fill="url(#b)" stroke-width=".5"/><path d="m12.285714 12.285714-5.7857142 3.214285 3.2142855-5.7857137z" fill="url(#c)" stroke-width=".3388"/><path d="m9.7142853 9.7142853 5.7857137-3.2142855-3.214285 5.7857142z" fill="url(#a)" stroke-width=".3388"/><path d="m12 11a1.0000002 1.0000002 0 0 1 -1 .999999 1.0000002 1.0000002 0 0 1 -1.0000001-.999999 1.0000002 1.0000002 0 0 1 1.0000001-1.0000007 1.0000002 1.0000002 0 0 1 1 1.0000007z" fill="#bdc3c7" stroke-width=".999996"/><path d="m11.5 11a.49999998.49999998 0 0 1 -.5.5.49999998.49999998 0 0 1 -.500001-.5.49999998.49999998 0 0 1 .500001-.500001.49999998.49999998 0 0 1 .5.500001z" fill="#9fa5a8"/><path d="m11 4v2zm-7 7h2.0000002zm12 0h2zm-5 4.999999v2.000001z" fill="none" stroke="#4d4d4d"/><path d="m15.5 6.5-4.5 4.5-4.5 4.5 2.03125 2.03125a7.0000004 7.0000004 0 0 0 2.46875.46875 7.0000004 7.0000004 0 0 0 7-7 7.0000004 7.0000004 0 0 0 -.46875-2.46875z" fill="url(#e)" opacity=".2"/><g fill-rule="evenodd"><path d="m11 2a8.9999995 8.9999995 0 0 0 -9 9 8.9999995 8.9999995 0 0 0 9 9 8.9999995 8.9999995 0 0 0 9-9 8.9999995 8.9999995 0 0 0 -9-9zm0 1.9999999a7.0000004 7.0000004 0 0 1 7 7.0000001 7.0000004 7.0000004 0 0 1 -7 7 7.0000004 7.0000004 0 0 1 -7.0000002-7 7.0000004 7.0000004 0 0 1 7.0000002-7.0000001z" fill="url(#d)"/><path d="m19.972655 10.322266c-.173179 4.833692-4.135876 8.66614-8.972656 8.677733-4.7650768-.01539-8.6923275-3.742255-8.9570304-8.499999-.018971.166235-.0333.332966-.042969.5 0 4.970563 4.0294367 9 9.0000004 9 4.970562 0 8.999999-4.029437 8.999999-9-.000595-.226175-.0097-.452247-.02734-.677734z" fill-opacity=".2"/><path d="m10.999999 3c-3.8659929.0000004-6.9999998 3.1340069-6.9999998 6.9999999.0102922.1671971.0265822.3339711.0488315.5000001.2613998-3.65075 3.2911101-6.4838142 6.9511693-6.5 3.660061.016185 6.689772 2.8492494 6.951172 6.5.02226-.166029.03854-.332803.04883-.5000001-.000005-3.865993-3.134012-6.9999995-7.000004-6.9999999z" fill="#788085"/></g>
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
			<defs>
        <linearGradient id="d" x1="16" x2="16" y1="30" y2="2" gradientTransform="translate(6.5695e-4,-6.32e-4)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#788085" offset="0"/>
            <stop stop-color="#9ba1a6" offset="1"/>
        </linearGradient>
        <linearGradient id="c" x1="23" x2="23" y1="18" y2="9" gradientUnits="userSpaceOnUse">
            <stop stop-color="#c61423" offset="0"/>
            <stop stop-color="#dc2b41" offset="1"/>
        </linearGradient>
        <linearGradient id="f" x1="400.57141" x2="400.57141" y1="545.79797" y2="517.79797" gradientTransform="matrix(.85714369 0 0 .85714361 -327.34726 -439.82723)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#eff0f1" offset="0"/>
            <stop stop-color="#fcfcfc" offset="1"/>
        </linearGradient>
        <linearGradient id="e" x1="9" x2="18" y1="14" y2="23" gradientUnits="userSpaceOnUse">
            <stop stop-color="#4d4d4d" offset="0"/>
            <stop stop-color="#232629" offset="1"/>
        </linearGradient>
        <linearGradient id="g" x1="11" x2="26" y1="8" y2="24" gradientTransform="translate(-1.9999999,1.0000001)" gradientUnits="userSpaceOnUse">
            <stop stop-color="#292c2f" offset="0"/>
            <stop stop-opacity="0" offset="1"/>
        </linearGradient>
    </defs>
    <path d="m16 4c6.648 0 12 5.3519999 12 12 0 6.648-5.352 12-12 12s-12-5.352-12-12c0-6.6480001 5.352-12 12-12z" fill="url(#f)" stroke-width=".8571437"/>
    <path d="m16.5 6h-1v-2h1z" fill="#4d4d4d" stroke-width="1.4142135"/>
    <path d="m18 18-9 5 5-9z" fill="url(#e)" stroke-width=".52702236"/>
    <path d="m14 14 9-5-5 9z" fill="url(#c)" stroke-width=".52702236"/>
    <path d="m17 16a1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1 1 1 0 0 1 1 1z" fill="#bdc3c7"/>
    <path d="m16.5 16a0.5 0.5 0 0 1-0.5 0.5 0.5 0.5 0 0 1-0.5-0.5 0.5 0.5 0 0 1 0.5-0.5 0.5 0.5 0 0 1 0.5 0.5z" fill="#9fa5a8"/>
    <path d="M 23 9 L 9 23 L 13.789062 27.789062 C 14.506393 27.921835 15.243082 28 16 28 C 19.487492 28 22.608246 26.518366 24.796875 24.158203 L 25.40625 23.455078 C 27.026867 21.409686 28 18.824021 28 16 C 28 15.243082 27.921835 14.506393 27.789062 13.789062 L 23 9 z " fill="url(#g)" fill-rule="evenodd" opacity=".2"/>
    <g fill="#4d4d4d" stroke-width="1.4142135">
        <path d="m6 15.5v1h-2v-1z"/>
        <path d="m28 15.5v1h-2v-1z"/>
        <path d="m16.5 28h-1v-2h1z"/>
    </g>
    <path d="m16 2c-7.7319859 0-14 6.2680134-14 14 0 7.731986 6.2680141 14 14 14 7.731986 0 14-6.268014 14-14 0-7.7319868-6.268014-14-14-14zm0 2c6.648 0 12 5.3519999 12 12 0 6.648-5.352 12-12 12s-12-5.352-12-12c0-6.6480001 5.352-12 12-12z" fill="url(#d)"/>
    <path d="m29.979 15.414c-0.223704 7.561697-6.413999 13.577961-13.979 13.586-7.5006716-0.004678-13.665045-5.9199-13.979-13.414-0.0090428 0.137889-0.0160435 0.275904-0.021 0.414 0 7.731986 6.2680135 14 14 14 7.731986 0 14-6.268014 14-14-0.0029-0.195459-0.0099-0.390835-0.021-0.586z" opacity=".2"/>
    <path d="m16 3.0000001c-6.6479996 0-12 5.352-12 12 0 0.168838 0.018553 0.3329 0.025391 0.5 0.262393-6.4124559 5.4954474-11.5 11.974609-11.5 6.479162 0 11.712216 5.087544 11.974609 11.5 0.0068-0.1671 0.02539-0.331162 0.02539-0.5 0-6.6479999-5.352-12-11.999999-12z" fill="#788085" stroke-width=".8571437"/>
		</svg>
	{/if}
