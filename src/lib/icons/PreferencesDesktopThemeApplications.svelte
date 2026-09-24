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
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="6.375003" x2="15.75002" xlink:href="#c" y1="10.000012" y2="19.375009"/><linearGradient id="b" gradientTransform="matrix(.41666692 0 0 .40833269 -159.23827 -203.25094)" gradientUnits="userSpaceOnUse" x2="0" y1="543.79797" y2="502.65509"><stop offset="0" stop-color="#c6cdd1"/><stop offset="1" stop-color="#e0e5e7"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="5.375003" x2="14.75002" y1="7.000012" y2="16.375009"><stop offset="0"/><stop offset="1" stop-opacity="0"/></linearGradient><path d="m1.000006 2h19.999994v18h-19.999994z" fill="url(#b)" stroke-width=".633866"/><path d="m2 18 18-11 1 1v12h-17z" fill="url(#c)" fill-rule="evenodd" opacity=".2" stroke-width=".625"/><path d="m1 2h20.000002v3h-20.000002z" fill="#566069" stroke-width=".684653"/><path d="m1.000027 5h19.999973v1h-19.999973z" fill="#3daee9" stroke-width=".790569"/><path d="m2 7h18v10.999999h-18z" fill="#fff" stroke-width=".574456"/><rect fill="#eff0f1" height="1.5" rx=".75" stroke-width=".75" width="1.5" x="18.75" y="2.75"/><path d="m15.168 8.082-5.3105781 3.951203 5.9667971 5.966797h4.175781v-5.086zm-4.960969 5.210969-3.207031 2.707031 2 2h5.914062z" fill="url(#a)" opacity=".2"/><g fill="#353b3e"><circle cx="-23.555494" cy="-3.933281" r=".044497" stroke="#000"/><circle cx="-23.555494" cy="-3.933281" r=".044497" stroke="#000"/><path d="m14.931641 8c-.670559-.00457-2.261429 1.1011665-3.830079 2.669922-.451336.451494-.873017.914263-1.2441401 1.363281.6815871.123842 1.2505501.591574 1.5039061 1.236328.403374-.341018.815784-.718218 1.21875-1.121093 1.83712-1.837311 2.995942-3.6579079 2.587922-4.066438-.042-.0422-.100319-.0686938-.173859-.0780938-.01968-.00248-.04087-.00376-.0625-.00391zm-5.431641 5c-.8284271 0-1.5.671573-1.5 1.5.0013.170563.031686.339654.089844.5h-.089844l-1 1h1.5c1.0607471 0 1.924433-.817443 1.996094-1.859375-.000997-.01165-.0026-.0236-.0039-.03516.0045-.03499.0071-.0702.0078-.105469 0-.517767-.394181-.942931-.8984375-.994141-.016904-.0016-.033833-.0029-.050781-.0039-.0170326-.000868-.0335166-.001955-.0507755-.001955z" stroke-width=".597503"/></g>
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
			<defs><linearGradient id="f" x2="0" y1="543.8" y2="502.66" gradientTransform="matrix(.66667 0 0 .63518 128.19 198.52)" gradientUnits="userSpaceOnUse"><stop stop-color="#c6cdd1" offset="0"/><stop stop-color="#e0e5e7" offset="1"/></linearGradient><linearGradient id="e" x1="391.57" x2="406.57" y1="525.8" y2="540.8" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop stop-opacity="0" offset="1"/></linearGradient><linearGradient id="g" x1="393.41" x2="407.41" y1="526.65" y2="526.65" gradientTransform="matrix(1 0 0 .99999 .15371 .1567)" gradientUnits="userSpaceOnUse"><stop stop-color="#2e3436" offset="0"/><stop stop-color="#555753" offset="1"/></linearGradient><linearGradient id="h" x1="392.57" x2="407.57" y1="521.8" y2="536.8" gradientTransform="translate(-5.9e-4,4.0005)" gradientUnits="userSpaceOnUse"><stop offset="0"/><stop stop-opacity="0" offset="1"/></linearGradient></defs><g transform="translate(-384.57 -515.8)"><rect x="384.57" y="517.8" width="32" height="28" rx="0" fill="url(#f)"/><path d="m385.57 543.8 30-20 1 1-1e-5 21-29 3e-5z" fill="url(#e)" fill-rule="evenodd" opacity=".2"/><rect x="384.57" y="517.8" width="32" height="4" fill="#566069"/><rect x="384.57" y="521.8" width="32" height="1" fill="#3daee9"/><rect x="385.57" y="523.8" width="30" height="20" fill="#fff"/><rect x="413.57" y="518.8" width="2" height="2" rx="1" fill="#eff0f1"/><path d="m407.43 526.94c0.67976 0.68608-1.259 3.7315-4.332 6.8047-1.1894 1.1888-2.4316 2.2613-3.5449 3.0605l7.0169 6.9948h9l0.9945-7.7258zm-9.8476 7.8496-0.0176 0.0137 4e-3 4e-3 0.0137-0.0176zm0.13672 0.16992 1.7031 1.7148c-0.30575-0.78802-0.91881-1.4023-1.7031-1.7148zm0.69531 1.6191c0.4221 0.38858 0.40039 0.94169 0.40039 1.3047 0 1.1682-1.7472 2.9199-5.25 2.9199l3.0052 2.9968h9z" fill="url(#h)" opacity=".25"/><path d="m407.14 526.81a1.75 7.8749 44.998 0 0-6.5143 4.4605 1.75 7.8749 44.998 0 0-3.1 3.5992c0.9415 0.29981 1.6757 1.034 1.9755 1.9756a1.75 7.8749 44.998 0 0 3.599-3.1002 1.75 7.8749 44.998 0 0 4.3304-6.8053 1.75 7.8749 44.998 0 0-0.29051-0.1299m-10.074 9.3244c-3.4998 0.93784-0.87497 3.1535-3.4998 4.669 3.5028 0 5.2498-1.7508 5.2498-2.919 0-0.58179 0.0591-1.6533-1.7499-1.75z" fill="url(#g)"/></g>
		</svg>
	{/if}
