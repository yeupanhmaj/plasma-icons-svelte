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
			<linearGradient id="a" gradientUnits="userSpaceOnUse" x1="24.018" x2="24.018" y1="18.383" y2=".383"><stop offset="0" stop-color="#a5a5a5"/><stop offset="1" stop-color="#f5f2f5"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="6" x2="6" y1="11" y2="6"><stop offset="0" stop-color="#ffd42a"/><stop offset="1" stop-color="#ffdf62"/></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="4" x2="18" y1="6" y2="20"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><circle cx="11" cy="11" fill="#484f56" r="9"/><path d="m11 2a9 9 0 0 0 -8.0546875 5h1.0546875l1 1v-1h1v-1l2-2v1l1-1v-1h1v1h1l1-1v-.9433594a9 9 0 0 0 -1-.0566406zm6.361328 2.6386719-.361328.3613281v1h1l.283203-.2832031a9 9 0 0 0 -.921875-1.078125zm1.322266 1.6777343-.683594.6835938-2 1-1 3h1v1l2 1 1.917969-.958984a9 9 0 0 0 .082031-1.041016 9 9 0 0 0 -1.316406-4.6835938zm-15.683594 2.6835938v1h-.921875a9 9 0 0 0 -.078125 1h1l2 2h1v1h-1v1l2 2v2.054688a9 9 0 0 0 4 .945312l1-1v-1h1l1-1v-1l1-1-1-1h-2l-1-1h-1l-1-1h-2v-1l-1 1h-1v-1l-1-1v-1z" fill="url(#a)" stroke-linejoin="round" stroke-width="2"/><path d="m19.974609 10.359375a9 9 0 0 1 -8.974609 8.640625 9 9 0 0 1 -8.9648438-8.5 9 9 0 0 0 -.0351562.5 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0 -.025391-.640625z" fill="#292c2f" opacity=".3" stroke-linejoin="round" stroke-width="2"/><path d="m4.1347656 11 2.8652344 2.865234.7363281 2.398438 3.7382809 3.736328h8.525391v-8.525391l-5.736328-5.7382809z" fill="url(#c)" opacity=".2"/><path d="m9.5 5c-1.3688651 0-2.5 1.1311331-2.5 2.5v1.6816406l-2.8652344 1.8183594 2.8652344 1.818359v1.681641c0 1.368865 1.1311329 2.5 2.5 2.5h3c1.368867 0 2.5-1.131135 2.5-2.5v-1.681641l2.865234-1.818359-2.865234-1.8183594v-1.6816406c0-1.3688669-1.131135-2.5-2.5-2.5z" fill="#484f56"/><path d="m9.5 6c-.828426 0-1.5.6715724-1.5 1.5v2.2304688l-2 1.2695312 2 1.269531v2.230469c0 .828426.671572 1.5 1.5 1.5h.5v-1h-.5253906c-.2556626-.01296-.4616498-.218947-.4746094-.474609v-2.794922l-1-.730469 1-.730469v-2.7949216c.0129596-.2556629.2189465-.4616498.4746094-.4746094h.5253906v-1zm2.5 0v1h.525391c.255663.0129596.461649.2189465.474609.4746094v2.7949216l1 .730469-1 .730469v2.794922c-.01296.255662-.218947.461649-.474609.474609h-.525391v1h.5c.828428 0 1.5-.671574 1.5-1.5v-2.230469l2-1.269531-2-1.2695312v-2.2304688c0-.8284276-.671574-1.5-1.5-1.5z" fill="url(#b)"/>
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
			<linearGradient id="a"><stop offset="0" stop-color="#292c2f"/><stop offset="1" stop-opacity="0"/></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="-27.898" x2="-7.898" xlink:href="#a" y1="3.831" y2="23.831"/><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="-10.898" x2="-3.898" xlink:href="#a" y1="10.831" y2="17.831"/><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="-31.898" x2="-31.898" y1="27.831" y2="-.169"><stop offset="0" stop-color="#a5a5a5"/><stop offset="1" stop-color="#f5f2f5"/></linearGradient><linearGradient id="e" gradientUnits="userSpaceOnUse" x1="13" x2="27" xlink:href="#a" y1="10" y2="24"/><linearGradient id="f" gradientUnits="userSpaceOnUse" x1="16" x2="16" y1="23" y2="9"><stop offset="0" stop-color="#ffd42a"/><stop offset="1" stop-color="#ffdf62"/></linearGradient><g transform="translate(33.898 2.17)"><rect fill="#4f575f" height="28" rx="14" width="28" x="-31.898" y="-.169"/><path d="M-15.304.079l-2.975.38-4.135 2.388-1.502 2.6s-1.973 1.39-2.271 1.31c-2.517-.028-3.87.666-4.58 1.549-.301.703-.537 1.44-.72 2.197-.006.76.16 1.35.16 1.35 7.06 6.358 14.122 9.098 21.183 13.644a13.9 13.9 0 0 0 1.275-.96l.069-.06c.36-.307.703-.635 1.029-.978.072-.076.14-.155.21-.232a13.928 13.928 0 0 0 1.749-2.375l.055-.09a13.991 13.991 0 0 0 1.824-6.282l.002-.02v-.001L-5.755 6.86a13.95 13.95 0 0 0-9.55-6.783z" fill="url(#b)" fill-rule="evenodd" opacity=".2"/><path d="M-4.886 8.673l-4.307 6.66 4.12 4.12a13.997 13.997 0 0 0 .187-10.78z" fill="url(#c)" fill-rule="evenodd" opacity=".2"/><path d="M-17.898-.17a14 14 0 0 0-13.06 9h.06l3-1 1 1 1 1v-2l2-1v-1l2-1 2-2v1l1-1-1-1h2v1l2-1-1-1v-.95a14 14 0 0 0-1-.05zm10.375 4.626l-.375.375v1h1.469a14 14 0 0 0-1.094-1.375zm1.316 1.684l-.691.69-2 2-1 1-1 3v1l1 1 1 1 2 1 2.79-.687a14 14 0 0 0 .21-2.312 14 14 0 0 0-2.31-7.691zm-23.691 4.69l-1 1h-.838c-.05.34-.088.682-.113 1.024v.002l1.95.975 1 1 2 1 1 1-1 1v2l1 2 2 2v2.629a14 14 0 0 0 6 1.37c.17-.002.34-.008.51-.017l.49-.982v-1l2-1 1-1v-2l1-1v-1l-1-1-3-1-1-1-1-1h-1l-1-1-3-1-2 1h-2v-2h-1v-2z" fill="url(#d)"/></g><path d="M15 9l-1 1-1 1v4l-1 1 1 1v5l7.318 7.318a13.965 13.965 0 0 0 8.116-6.884zm2 0v1l11.758 11.758c.215-.477.41-.965.572-1.469L19.2 10z" fill="url(#e)" fill-rule="evenodd" opacity=".2"/><path d="M15.045 9c-1.777 0-2.522.706-2.522 2.51v1.441c0 1.114-.034 2.404-1.015 2.404H11v1.29h.508c.981 0 1.015 1.29 1.015 2.404v1.441c0 1.804.745 2.51 2.522 2.51v-1.184c-1.185 0-1.201-.478-1.201-2.21V18.59c0-.831-.205-2.068-1.203-2.58.998-.513 1.203-1.751 1.203-2.582v-1.034c0-1.732.016-2.21 1.2-2.21zm1.894 0v1.184c1.185 0 1.217.478 1.217 2.21v1.034c0 .83.205 2.07 1.203 2.582-.998.512-1.203 1.749-1.203 2.58v1.016c0 1.732-.032 2.21-1.217 2.21V23c1.777 0 2.538-.706 2.538-2.51v-1.44c0-1.114.068-2.404 1.033-2.404H21v-1.29h-.49c-.965 0-1.033-1.29-1.033-2.404V11.51c0-1.804-.76-2.51-2.538-2.51z" fill="url(#f)"/><path d="M29.979 15.414A14 14 0 0 1 16 29 14 14 0 0 1 2.021 15.586 14 14 0 0 0 2 16a14 14 0 0 0 14 14 14 14 0 0 0 14-14 14 14 0 0 0-.021-.586z" fill="#292c2f" opacity=".3"/>
		</svg>
	{/if}
