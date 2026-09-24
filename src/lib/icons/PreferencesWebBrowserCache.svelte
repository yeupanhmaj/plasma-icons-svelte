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
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="24.018" x2="24.018" y1="18.383" y2=".383"><stop offset="0" stop-color="#a5a5a5"/><stop offset="1" stop-color="#f5f2f5"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="5" x2="18" y1="5" y2="18"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="6" x2="6" y1="16" y2="6"><stop offset="0" stop-color="#ffd42a"/><stop offset="1" stop-color="#ffdf62"/></linearGradient><circle cx="11" cy="11" fill="#484f56" r="9" stroke-linejoin="round" stroke-width="2"/><path d="m11 2a9 9 0 0 0 -8.0546875 5h1.0546875l1 1v-1h1v-1l2-2v1l1-1v-1h1v1h1l1-1v-.9433594a9 9 0 0 0 -1-.0566406zm6.361328 2.6386719-.361328.3613281v1h1l.283203-.2832031a9 9 0 0 0 -.921875-1.078125zm1.322266 1.6777343-.683594.6835938-2 1-1 3h1v1l2 1 1.917969-.958984a9 9 0 0 0 .082031-1.041016 9 9 0 0 0 -1.316406-4.6835938zm-15.683594 2.6835938v1h-.921875a9 9 0 0 0 -.078125 1h1l2 2h1v1h-1v1l2 2v2.054688a9 9 0 0 0 4 .945312l1-1v-1h1l1-1v-1l1-1-1-1h-2l-1-1h-1l-1-1h-2v-1l-1 1h-1v-1l-1-1v-1z" fill="url(#a)" stroke-linejoin="round" stroke-width="2"/><path d="m14 5 1 1h2l3 3v11h-11l-3-3v-7l-1-1z" fill="url(#b)" opacity=".2"/><g stroke-width="2"><path d="m8 6h-3v3h1v8h10v-8h1v-3h-3v-1h-6z" fill="#484f56"/><path d="m19.974609 10.359375a9 9 0 0 1 -8.974609 8.640625 9 9 0 0 1 -8.9648438-8.5 9 9 0 0 0 -.0351562.5 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0 -.025391-.640625z" fill="#292c2f" opacity=".3" stroke-linejoin="round"/><path d="m9 6v1h-3v1h1v8h8v-8h1v-1h-3v-1zm1 1h2v1h-2zm-1 2h1v5h-1zm3 0h1v5h-1z" fill="url(#c)"/></g>
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
			<linearGradient id="b" gradientUnits="userSpaceOnUse" x1="6" x2="26" xlink:href="#a" y1="6" y2="26"/><linearGradient id="a"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="23" x2="30" xlink:href="#a" y1="13" y2="20"/><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="2" x2="2" y1="30" y2="2"><stop offset="0" stop-color="#a5a5a5"/><stop offset="1" stop-color="#f5f2f5"/></linearGradient><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="11" x2="25" xlink:href="#a" y1="11" y2="25"/><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="15" x2="15" y1="22" y2="10"><stop offset="0" stop-color="#ffd42a"/><stop offset="1" stop-color="#ffdf62"/></linearGradient><rect fill="#4f575f" height="28" rx="14" width="28" x="2" y="2"/><path d="M18.594 2.248l-2.975.38-4.135 2.388-1.502 2.601s-1.973 1.39-2.271 1.31c-2.517-.029-3.869.665-4.58 1.548-.301.703-.537 1.44-.72 2.197-.006.76.161 1.351.161 1.351 7.06 6.357 14.121 9.097 21.182 13.643a13.9 13.9 0 0 0 1.275-.959l.069-.06c.36-.308.703-.636 1.029-.979.072-.076.14-.155.21-.232a13.928 13.928 0 0 0 1.749-2.375l.055-.09a13.991 13.991 0 0 0 1.824-6.282l.002-.02v-.001L28.143 9.03a13.95 13.95 0 0 0-9.55-6.783z" fill="url(#b)" fill-rule="evenodd" opacity=".2"/><path d="M29.012 10.842l-4.307 6.66 4.12 4.12a13.997 13.997 0 0 0 .187-10.78z" fill="url(#c)" fill-rule="evenodd" opacity=".2"/><path d="M16 2a14 14 0 0 0-13.059 9H3l3-1 1 1 1 1v-2l2-1V8l2-1 2-2v1l1-1-1-1h2v1l2-1-1-1v-.95A14 14 0 0 0 16 2zm10.375 4.625L26 7v1h1.469a14 14 0 0 0-1.094-1.375zm1.316 1.684L27 9l-2 2-1 1-1 3v1l1 1 1 1 2 1 2.791-.688A14 14 0 0 0 30 16a14 14 0 0 0-2.309-7.691zM4 13l-1 1h-.838c-.05.34-.088.681-.113 1.023v.002L4 16l1 1 2 1 1 1-1 1v2l1 2 2 2v2.629A14 14 0 0 0 16 30c.17-.003.34-.009.51-.018L17 29v-1l2-1 1-1v-2l1-1v-1l-1-1-3-1-1-1-1-1h-1l-1-1-3-1-2 1H6v-2H5v-2z" fill="url(#d)"/><path d="M22 11v1h-1l-1 9-9 1c2 2 2.415 2.66 8 8 2.74-1.056 9.41-8.584 11-11z" fill="url(#e)" fill-rule="evenodd" opacity=".2"/><path d="M14 10v1h-4v1h1v10h10V12h1v-1h-4v-1zm1 1h2v1h-2zm-1 3h1v5h-1zm3 0h1v5h-1z" fill="url(#f)"/><path d="M29.979 15.414A14 14 0 0 1 16 29 14 14 0 0 1 2.021 15.586 14 14 0 0 0 2 16a14 14 0 0 0 14 14 14 14 0 0 0 14-14 14 14 0 0 0-.021-.586z" fill="#292c2f" opacity=".3"/>
		</svg>
	{/if}
