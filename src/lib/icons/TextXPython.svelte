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
			<path d="m7 2c-1.108 0-2 .892-2 2h3v1h-4c-1.108 0-2 .892-2 2v2c0 1.108.892 2 2 2v-1c0-.889.39-1.676 1-2.225l.002-.002c.132-.119.275-.226.426-.32.001-.001.003-.001.004-.002.149-.093.306-.172.471-.238.03-.012.062-.019.092-.029.14-.051.283-.097.432-.127.186-.036.377-.057.574-.057h4v-3c0-1.108-.892-2-2-2zm0 .5c.277 0 .5.223.5.5s-.223.5-.5.5-.5-.223-.5-.5.223-.5.5-.5m5 2.5v1c0 .889-.392 1.678-1 2.227-.132.119-.275.226-.426.32-.001.001-.003.001-.004.002-.149.093-.306.172-.471.238-.03.012-.062.019-.092.029-.14.051-.283.097-.432.127-.186.036-.377.057-.574.057h-4v3c0 1.108.892 2 2 2h2c1.108 0 2-.892 2-2h-3v-1h4c1.108 0 2-.892 2-2v-2c0-1.108-.892-2-2-2m-3 7.5c.277 0 .5.223.5.5s-.223.5-.5.5-.5-.223-.5-.5.223-.5.5-.5" fill="#f59e16"/>
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
			<path d="m7 2c-1.1080096 0-2 .8919904-2 2h3v1h-3-1c-1.108 0-2 .892-2 2v2c0 1.108.892 2 2 2v-1c0-.888703.3898959-1.6762151 1-2.2246094.0006778-.0006093.00127-.00134.00195-.00195.1321461-.1185721.2745864-.2257373.4257813-.3203125.00123-.0007703.00267-.00118.00391-.00195.1489087-.092856.3059576-.1722233.4707025-.2382875.0296672-.0116393.0616713-.0185816.0917968-.0292968.1399618-.0509218.282569-.0974594.4316406-.1269532.1862079-.0359089.3772179-.0566406.5742188-.0566406h1 3v-3c0-1.1080096-.89199-2-2-2zm0 .5c.2769999 0 .5.2230001.5.5s-.2230001.5-.5.5-.5-.2230001-.5-.5.2230001-.5.5-.5zm5 2.5v1c0 .888703-.391849 1.6781682-1.001953 2.2265625-.132146.118577-.274587.2257355-.425781.3203125-.0012.0007612-.0027.00119-.0039.00195-.148909.092852-.305958.1722172-.470703.2382813-.02967.011639-.06167.018582-.0918.029297-.1399654.0509245-.2825726.0974628-.4316442.1269561-.1862079.0359089-.3772179.0566406-.5742188.0566406h-4v3c0 1.108.89199 2 2 2h2c1.10801 0 2-.892 2-2h-3v-1h4c1.108 0 2-.892 2-2v-2c0-1.108-.892-2-2-2zm-3 7.5c.277 0 .5.223.5.5s-.223.5-.5.5c-.2769999 0-.5-.223-.5-.5s.2230001-.5.5-.5z" fill="#f59e16" transform="matrix(1.3333333 0 0 1.3333333 .33333 .33333)"/>
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
			<linearGradient id="a" gradientTransform="matrix(.5 0 0 -.48276 384.57 547.25)" gradientUnits="userSpaceOnUse" x2="0" y1="61" y2="3"><stop offset="0" stop-color="#f39c12"/><stop offset="1" stop-color="#f9a11f"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x2="0" y1="518.04" y2="524.8"><stop offset="0" stop-color="#fddda3"/><stop offset="1" stop-color="#fde3a7"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="404.57" x2="411.57" y1="524.8" y2="531.8"><stop offset="0" stop-color="#383e51"/><stop offset="1" stop-color="#655c6f" stop-opacity="0"/></linearGradient><g transform="translate(-384.57 -515.8)"><path d="m389.57 545.8v-28h15l7 7v21h-7z" fill="url(#a)"/><g transform="scale(1 -1)"><path d="m389.57-518.8h15v1h-15z" fill="#fff" fill-opacity=".412"/><path d="m389.57-545.8h22v1h-22z" fill="#2e3132" fill-opacity=".294"/></g><g fill-rule="evenodd"><path d="m411.57 524.8-7-7v7z" fill="url(#b)"/><path d="m411.57 531.8-7-7h7z" fill="url(#c)" opacity=".2"/></g><path d="m399.57 527.8c-1.108 0-2 .892-2 2h3v1h-4c-1.108 0-2 .892-2 2v2c0 1.108.892 2 2 2v-1c0-.889.39-1.676 1-2.225l.002-.002c.132-.119.275-.226.426-.32.001-.001.003-.001.004-.002.149-.093.306-.172.471-.238.03-.012.062-.019.092-.029.14-.051.283-.097.432-.127.186-.036.377-.057.574-.057h4v-3c0-1.108-.892-2-2-2zm0 .5c.277 0 .5.223.5.5s-.223.5-.5.5-.5-.223-.5-.5.223-.5.5-.5m5 2.5v1c0 .889-.392 1.678-1 2.227-.132.119-.275.226-.426.32-.001.001-.003.001-.004.002-.149.093-.306.172-.471.238-.03.012-.062.019-.092.029-.14.051-.283.097-.432.127-.186.036-.377.057-.574.057h-4v3c0 1.108.892 2 2 2h2c1.108 0 2-.892 2-2h-3v-1h4c1.108 0 2-.892 2-2v-2c0-1.108-.892-2-2-2m-3 7.5c.277 0 .5.223.5.5s-.223.5-.5.5-.5-.223-.5-.5.223-.5.5-.5" fill="#fddda3"/></g>
		</svg>
	{:else}
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
			<linearGradient id="a" gradientTransform="matrix(1 0 0 -1 0 64)" gradientUnits="userSpaceOnUse" x2="0" y1="3" y2="61"><stop offset="0" stop-color="#f39c12"/><stop offset="1" stop-color="#f89406"/></linearGradient><linearGradient id="b" gradientTransform="matrix(1 0 0 -1 0 64)" gradientUnits="userSpaceOnUse" x2="0" y1="61" y2="47"><stop offset="0" stop-color="#fddda3"/><stop offset="1" stop-color="#fde3a7"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="40" x2="54" y1="17" y2="31"><stop offset="0" stop-color="#383e51"/><stop offset="1" stop-color="#655c6f" stop-opacity="0"/></linearGradient><path d="m10 61v-58h30l14 14v44h-14z" fill="url(#a)"/><g transform="scale(1 -1)"><path d="m10-4h30v1h-30z" fill="#fff" fill-opacity=".412"/><path d="m10-61h44v1h-44z" fill="#2e3132" fill-opacity=".294"/></g><g fill-rule="evenodd"><path d="m54 17-14-14v14z" fill="url(#b)"/><path d="m40 17 14 14v-14z" fill="url(#c)" opacity=".2"/></g><path d="m30 22c-1.662 0-3 1.338-3 3v2h5v1h-7c-2.216 0-4 1.784-4 4v2c0 2.216 1.784 4 4 4v-2c0-1.841 1.238-3.369 2.926-3.838.147-.041.297-.072.449-.1.205-.032.411-.062.625-.062h7.225c.477-.531.775-1.227.775-2v-5c0-1.662-1.338-3-3-3zm-1 2c.554 0 1 .446 1 1s-.446 1-1 1-1-.446-1-1 .446-1 1-1m10 4v2c0 1.841-1.238 3.369-2.926 3.838-.147.041-.297.072-.449.1-.205.032-.411.062-.625.062h-7.225c-.477.531-.775 1.227-.775 2v5c0 1.662 1.338 3 3 3h4c1.662 0 3-1.338 3-3v-2h-5v-1h7c2.216 0 4-1.784 4-4v-2c0-2.216-1.784-4-4-4m-4 12c.554 0 1 .446 1 1s-.446 1-1 1-1-.446-1-1 .446-1 1-1" fill="#fde3a7"/>
		</svg>
	{/if}
