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
			<path d="M12 4.293L8.293 8 12 11.707l.354-.353L15.707 8z" fill="#f90"/>
    <path d="M4 2v12h3.5a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5H5V2zm1 4h2v7H5zM1.5 2a.5.5 0 0 0-.5.5V5H0v1h1v8h1V6h1V5H2V3h1V2z" class="ColorScheme-Text" fill="currentColor"/>
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
			<path d="M17 6l-5 5 5 5 5-5z" fill="#f90"/>
    <path d="M2.5 3a.5.5 0 0 0-.5.5V7H1v1h1v11h1V8h2V7H3V4h2V3zM6 3v16h4.5a.5.5 0 0 0 .5-.5v-11a.5.5 0 0 0-.5-.5H7V3zm1 5h3v10H7z" class="ColorScheme-Text" fill="currentColor"/>
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
			<path d="m5 2v28.006h22v-28.006h-7z" fill="#afdde9"/>
    <path d="m5 29h22v1h-22z" opacity=".25"/>
    <path d="m5 2h22v.986h-22z" fill="#fff" opacity=".5"/>
    <path d="m8 2h1v28h-1z" fill-opacity=".057"/>
    <path d="m7 2h1v28h-1z" fill="#fff" fill-opacity=".321"/>
    <path d="m14 21 .000365-9.971033.999635-.028967v2l1.499404.02734c.499917.0091.5.486.5.486l-.000365 6.999033c-.000025.486-.5.486-.5.486z" fill-rule="evenodd"/>
    <path d="m22 12 4 4-4 4-4-4z" fill="#f90"/>
    <path d="m11 21-.000365-6.9995h-.5v-.972h.5l.000365-1.5145s0 .486 0 0c0-.4855.5-.4855.5-.4855h1.5v.9715l-1 .0005-.000365 1.0285 1-.0005v.9715l-1 .0005.000365 6.9995z" fill-rule="evenodd"/>
    <path d="m15.000306 13.685719h.999694v6.314281h-.999694z" fill="#afdde9" opacity=".99"/>
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
			<path d="m10 3v58h44v-58h-14z" fill="#afdde9"/>
    <path d="m10 60h44v1h-44z" opacity=".25"/>
    <path d="m10 3h44v1h-44z" fill="#fff" opacity=".5"/>
    <path d="m17 4h1v56h-1z" fill-opacity=".057"/>
    <path d="m16 4h1v56h-1z" fill="#fff" fill-opacity=".321"/>
    <path d="m26 41.943v-20.4h3v3.886h4c1 0 1 .972 1 .972v14.57c0 .972-1 .972-1 .972z" fill-rule="evenodd"/>
    <path d="m44 23.889 8 8.111-8 8-8-8z" fill="#f90"/>
    <path d="m21 41.943v-14.57h-1v-1.944h1v-2.914s0 .972 0 0c0-.971 1-.971 1-.971h3v1.943h-1v1.942h1v1.943h-1v14.57z" fill-rule="evenodd"/>
    <path d="m29.001341 27.372374h1.999388v12.628562h-1.999388z" fill="#afdde9" opacity=".99"/>
    <path d="m47.35 36.015h-6.422v-1.313c.490667-.344667.981667-.711 1.473-1.099.494-.387333.889333-.721667 1.186-1.003.443333-.416.758333-.779.945-1.089.186667-.309333.28-.615.28-.917 0-.363333-.121-.642667-.363-.838-.238-.199333-.582-.299-1.032-.299-.337333 0-.715914.112003-1.066.203-.348251.09052-.584765.169729-1.024525.34h-.326475v-1.614424c.26-.11.785667-.194576 1.291-.304576.508667-.110667 1.017667-.166 1.527-.166 1.025333 0 1.807.21 2.345.63.538667.416.808 1.006333.808 1.771 0 .502-.13.978667-.39 1.43-.256667.452-.650333.918-1.181 1.398-.333333.298667-.668333.574333-1.005.827-.337333.249333-.577333.423667-.72.523h3.675z"/>
		</svg>
	{/if}
