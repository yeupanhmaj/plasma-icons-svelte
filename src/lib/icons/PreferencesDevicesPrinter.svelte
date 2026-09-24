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
			<linearGradient id="a"><stop offset="0"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="b"><stop offset="0" stop-color="#18222a"/><stop offset="1" stop-color="#566069"/></linearGradient><linearGradient id="c"><stop offset="0" stop-color="#2f3943"/><stop offset="1" stop-color="#4d5662"/></linearGradient><linearGradient id="d" gradientTransform="matrix(.37499785 0 0 .37499998 -142.21407 -182.42439)" gradientUnits="userSpaceOnUse" x1="432.57199" x2="432.57199" y1="531.79797" y2="507.798"><stop offset="0" stop-color="#c6cdd1"/><stop offset="1" stop-color="#e0e5e7"/></linearGradient><linearGradient id="e" gradientTransform="matrix(.388892 0 0 .71428751 -147.8888 -358.71251)" gradientUnits="userSpaceOnUse" x1="426.57101" x2="426.57101" xlink:href="#b" y1="514.79797" y2="511.298"/><linearGradient id="f" gradientTransform="matrix(.375 0 0 .58333335 -142.214 -294.21512)" gradientUnits="userSpaceOnUse" x1="403.23801" x2="403.23801" y1="519.79797" y2="507.798"><stop offset="0" stop-color="#eef1f2"/><stop offset="1" stop-color="#f9fafb"/></linearGradient><linearGradient id="g" gradientTransform="matrix(.38888818 0 0 .28571508 -147.88855 -135.51404)" gradientUnits="userSpaceOnUse" x1="426.57101" x2="426.57101" xlink:href="#b" y1="533.79797" y2="539.04797"/><linearGradient id="h" gradientTransform="matrix(.40178334 0 0 .25000007 -153.15778 -116.44904)" gradientUnits="userSpaceOnUse" x1="396.12701" x2="421.01599" y1="539.79797" y2="539.79797"><stop offset="0" stop-color="#e74c3c"/><stop offset=".25" stop-color="#f39c1f"/><stop offset=".5" stop-color="#11d116"/><stop offset=".75" stop-color="#3498db"/><stop offset="1" stop-color="#9b59b6"/></linearGradient><linearGradient id="i" gradientTransform="matrix(.35713295 0 0 .32141709 -135.55623 -154.78662)" gradientUnits="userSpaceOnUse" x1="393.56836" x2="401.9686" xlink:href="#a" y1="534.46637" y2="543.80005"/><linearGradient id="j" gradientTransform="matrix(.59999998 0 0 .88888887 -224.54259 -462.82043)" gradientUnits="userSpaceOnUse" x1="402.57098" x2="382.57101" xlink:href="#c" y1="537.54797" y2="530.79797"/><linearGradient id="k" gradientTransform="matrix(0 -.66666668 .49999999 0 -262.399 250.38067)" gradientUnits="userSpaceOnUse" x1="352.57101" x2="361.57101" xlink:href="#c" y1="528.79797" y2="528.79797"/><linearGradient id="l" gradientUnits="userSpaceOnUse" x1="3.999997" x2="10.000005" xlink:href="#a" y1="9.000018" y2="14.999988"/><g stroke-linejoin="round"><path d="m2 8h18v9h-18z" fill="url(#d)" stroke-width=".621059"/><path d="m2 17h17.999351v1.070848h-17.999351z" fill="#737b81" stroke-width=".829685"/><path d="m4 4h14v5h-14z" fill="url(#e)" stroke-width=".661437"/><path d="m4 17h14v2h-14z" fill="url(#g)" stroke-width=".564076"/></g><path d="m3 15h16v1h-16z" fill="#99a1a7" stroke-width=".816497"/><path d="m5 9v4h12v-4z" fill="url(#j)" stroke-width=".730298"/><path d="m2 8v8h1v-8zm17 0v8h1v-8z" fill="url(#k)" stroke-width=".57735"/><path d="m4 9 6 6h9v-5l-1-1z" fill="url(#l)" fill-rule="evenodd" opacity=".2" stroke-width=".642834"/><path d="m5 2v7h12v-7zm0 15v3h12v-3z" fill="url(#f)" stroke-linejoin="round" stroke-width=".720082"/><path d="m6 17h10v2h-10z" fill="url(#h)" stroke-linejoin="round" stroke-width=".527046"/><path d="m5 17 3 3h9v-3z" fill="url(#i)" opacity=".2" stroke-width=".642834"/>
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
			<linearGradient id="b"><stop offset="0" stop-color="#eef1f2"/><stop offset="1" stop-color="#f9fafb"/></linearGradient><linearGradient id="c"><stop offset="0"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="a"><stop offset="0" stop-color="#18222a"/><stop offset="1" stop-color="#566069"/></linearGradient><linearGradient id="d"><stop offset="0" stop-color="#2f3943"/><stop offset="1" stop-color="#4d5662"/></linearGradient><linearGradient id="e" gradientTransform="matrix(.58333 0 0 .625 154.239 211.424)" gradientUnits="userSpaceOnUse" x1="432.572" x2="432.572" y1="531.798" y2="507.798"><stop offset="0" stop-color="#c6cdd1"/><stop offset="1" stop-color="#e0e5e7"/></linearGradient><linearGradient id="f" gradientTransform="matrix(.55556 0 0 1.14286 165.587 -57.542)" gradientUnits="userSpaceOnUse" x1="426.571" x2="426.571" xlink:href="#a" y1="514.798" y2="511.298"/><linearGradient id="g" gradientUnits="userSpaceOnUse" x1="393.571" x2="393.571" xlink:href="#b" y1="520.798" y2="519.798"/><linearGradient id="h" gradientTransform="matrix(.5625 0 0 .58333 162.75 225.75)" gradientUnits="userSpaceOnUse" x1="410.349" x2="410.349" xlink:href="#b" y1="507.512" y2="505.798"/><linearGradient id="i" gradientTransform="matrix(.5625 0 0 .75 162.75 140.95)" gradientUnits="userSpaceOnUse" x1="403.238" x2="403.238" xlink:href="#b" y1="519.798" y2="507.798"/><linearGradient id="j" gradientTransform="matrix(.61111 0 0 .57143 142.889 237.77)" gradientUnits="userSpaceOnUse" x1="426.571" x2="426.571" xlink:href="#a" y1="533.798" y2="539.048"/><linearGradient id="k" gradientTransform="matrix(.72321 0 0 .5 97.087 275.9)" gradientUnits="userSpaceOnUse" x1="396.127" x2="421.016" y1="539.798" y2="539.798"><stop offset="0" stop-color="#e74c3c"/><stop offset=".25" stop-color="#f39c1f"/><stop offset=".5" stop-color="#11d116"/><stop offset=".75" stop-color="#3498db"/><stop offset="1" stop-color="#9b59b6"/></linearGradient><linearGradient id="l" gradientTransform="matrix(.55556 0 0 .5 164.587 275.899)" gradientUnits="userSpaceOnUse" x1="395.971" x2="406.771" xlink:href="#c" y1="533.798" y2="545.798"/><linearGradient id="m" gradientUnits="userSpaceOnUse" x1="402.571" x2="382.571" xlink:href="#d" y1="537.798" y2="530.798"/><linearGradient id="n" gradientTransform="rotate(-90 371.571 521.798)" gradientUnits="userSpaceOnUse" x1="352.571" x2="361.571" xlink:href="#d" y1="528.798" y2="528.798"/><linearGradient id="o" gradientTransform="matrix(0 -1 -1 0 935.37 893.37)" gradientUnits="userSpaceOnUse" x1="352.571" x2="361.571" xlink:href="#d" y1="528.798" y2="528.798"/><linearGradient id="p" gradientUnits="userSpaceOnUse" x1="383.571" x2="390.571" xlink:href="#c" y1="530.798" y2="537.798"/><g transform="translate(-376.571 -517.798)"><g stroke-linejoin="round"><path d="M378.572 528.798h28v15h-28z" fill="url(#e)"/><path d="M378.571 543.798h28v1h-28z" fill="#737b81"/><path d="M382.571 522.798h20v8h-20z" fill="url(#f)"/><path d="M383.571 519.798h18v9h-18z" fill="url(#g)"/><path d="M383.571 520.798h18v7h-18z" fill="url(#h)"/><path d="M383.571 521.798h18v9h-18z" fill="url(#i)"/><path d="M381.571 542.798h22v4h-22z" fill="url(#j)"/><path d="M382.571 542.798h20v5h-20z" fill="#eff0f1"/><path d="M383.571 542.798h18v4h-18z" fill="url(#k)"/></g><path d="M381.571 542.798l5 5h14v-1h1v-4z" fill="url(#l)" fill-rule="evenodd" opacity=".2"/><path d="M380.571 539.798h24v1h-24z" fill="#99a1a7"/><path d="M382.571 530.798v5c0 .554.446 1 1 1h18c.554 0 1-.446 1-1v-5z" fill="url(#m)"/><path d="M378.571 541.798h1c.554 0 1-.446 1-1v-10c0-.554-.446-1-1-1h-1z" fill="url(#n)"/><path d="M406.571 541.798h-1c-.554 0-1-.446-1-1v-10c0-.554.446-1 1-1h1z" fill="url(#o)"/><path d="M382.571 530.798l8 8h12v-8z" fill="url(#p)" fill-rule="evenodd" opacity=".2"/><path d="M362.321 531.798a.25.25 0 1 0 0 .5.25.25 0 1 0 0-.5zm1.75 0l-.5.5.75.75-.25.25-.25.25-.25.25.5.5.25-.25.25-.25.25-.25.5-.5zm-2.375 1.5a.374.374 0 1 0 0 .75.374.374 0 1 0 0-.75zm1.125 1.5a.499.499 0 1 0 0 1 .499.499 0 1 0 0-1z" fill="#d9d9d9"/><circle cx="406.071" cy="540.298" fill="#11d116" r=".5"/></g>
		</svg>
	{/if}
