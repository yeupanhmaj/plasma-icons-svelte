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
			<!--
SPDX-FileCopyrightText: 2024 g10 Code GmbH
SPDX-Contributor: Carl Schwan <carlschwan@gnupg.com>
SPDX-License-Identifier: LGPL-2.1-or-later
-->
    
    <path id="path1" class="ColorScheme-Text" d="m2 2v1 3 1 6 1h6v-0.960938l-5-0.039062v-6h10v1h1v-2-1-1h-4.9921875l-2-2-0.0078125 0.0078125v-0.0078125h-4-1zm1 1h3.5917969l1.0019531 1h-0.59375v0.0078125l-0.0078125-0.0078125-2 2h-1.9921875v-3zm8.5 5c-0.828399 0-1.5 0.6715708-1.5 1.5v1.5h-1v3h5v-3h-1v-1.5c0-0.8284292-0.671601-1.5-1.5-1.5zm0 1c0.2761 0 0.5 0.2238603 0.5 0.5v1.5h-1v-1.5c0-0.2761397 0.2239-0.5 0.5-0.5z" fill="currentColor"/>
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
			<!--
SPDX-FileCopyrightText: 2024 g10 Code GmbH
SPDX-Contributor: Carl Schwan <carlschwan@gnupg.com>
SPDX-License-Identifier: LGPL-2.1-or-later
-->
    
    <path id="path1" class="ColorScheme-Text" d="m5 11v2h2v-2zm4 0v2h2v-2zm7.5 1c-0.831 0-1.5 0.669-1.5 1.5v1.5h-1v4h5v-4h-1v-1.5c0-0.831-0.669-1.5-1.5-1.5zm-9.5 2v2h2v-2zm9.5-1c0.277 0 0.5 0.223 0.5 0.5v1.5h-1v-1.5c0-0.277 0.223-0.5 0.5-0.5zm-11.5 4v2h2v-2zm4 0v2h2v-2z" fill="currentColor"/>
    <path id="path1-5" class="ColorScheme-Text" d="m3 3v16h1v-9h3v-0.00781l0.0078125 0.00781 2-2h8.9921875v4h1v-7h-6.992188l-2-2-0.007812 0.0078125v-0.0078125h-6z" fill="currentColor"/>
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
			<!--
SPDX-FileCopyrightText: 2024 g10 Code GmbH
SPDX-Contributor: Carl Schwan <carlschwan@gnupg.com>
SPDX-License-Identifier: LGPL-2.1-or-later
-->
    
    <path id="path1" class="ColorScheme-Text" d="m23 16c-1.657 0-3 1.343-3 3v3h-2v6h10v-6h-2v-3c0-1.657-1.343-3-3-3zm-14 1v2h2v-2zm14 0c1.105 0 2 0.895 2 2v3h-4v-3c0-1.105 0.895-2 2-2zm-17 3v2h2v-2zm6 0v2h2v-2zm-3 3v2h2v-2zm-3 3v2h2v-2zm6 0v2h2v-2z" fill="currentColor"/>
    <path id="path1-6" class="ColorScheme-Text" d="m4 4v24h1v-14h5l3-3h14v5h1v-9h-10l-3-3z" fill="currentColor"/>
		</svg>
	{/if}
