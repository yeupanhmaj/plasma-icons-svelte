<script lang="ts">
	import {
		EditCopy,
		DocumentSave,
		HelpAbout,
		ViewRefresh,
		SystemSearch,
		MediaPlaybackStart,
		MediaPlaybackPause,
		Folder,
		SettingsConfigure,
		ApplicationExit
	} from '$lib/index.js';
	import '$lib/plasma-icons.css';

	let iconSize = $state(24);
	let iconColor = $state('#3daee9');
</script>

<svelte:head>
	<title>Plasma Icons Svelte</title>
</svelte:head>

<main class="container">
	<header>
		<h1>Plasma Icons Svelte</h1>
		<p class="subtitle">Full KDE Breeze icon library as native, tree-shakeable Svelte 5 components.</p>
	</header>

	<section class="controls">
		<label>
			Size: <strong>{iconSize}px</strong>
			<input type="range" min="16" max="64" bind:value={iconSize} />
		</label>
		<label>
			Color:
			<input type="color" bind:value={iconColor} />
		</label>
	</section>

	<section class="preview-grid">
		<div class="icon-card">
			<EditCopy size={iconSize} color={iconColor} />
			<span>EditCopy</span>
		</div>
		<div class="icon-card">
			<DocumentSave size={iconSize} color={iconColor} />
			<span>DocumentSave</span>
		</div>
		<div class="icon-card">
			<HelpAbout size={iconSize} color={iconColor} />
			<span>HelpAbout</span>
		</div>
		<div class="icon-card">
			<ViewRefresh size={iconSize} color={iconColor} />
			<span>ViewRefresh</span>
		</div>
		<div class="icon-card">
			<SystemSearch size={iconSize} color={iconColor} />
			<span>SystemSearch</span>
		</div>
		<div class="icon-card">
			<MediaPlaybackStart size={iconSize} color={iconColor} />
			<span>MediaPlaybackStart</span>
		</div>
		<div class="icon-card">
			<MediaPlaybackPause size={iconSize} color={iconColor} />
			<span>MediaPlaybackPause</span>
		</div>
		<div class="icon-card">
			<Folder size={iconSize} color={iconColor} />
			<span>Folder</span>
		</div>
		<div class="icon-card">
			<SettingsConfigure size={iconSize} color={iconColor} />
			<span>SettingsConfigure</span>
		</div>
		<div class="icon-card">
			<ApplicationExit size={iconSize} color={iconColor} />
			<span>ApplicationExit</span>
		</div>
	</section>

	<section class="usage">
		<h2>Usage</h2>
		<pre><code>import &#123; EditCopy, DocumentSave &#125; from 'plasma-icons-svelte';
import 'plasma-icons-svelte/plasma-icons.css';

&lt;EditCopy size=&#123;22&#125; /&gt;
&lt;DocumentSave size=&#123;16&#125; color="var(--plasma-color-primary)" /&gt;</code></pre>
	</section>
</main>

<style>
	:global(body) {
		margin: 0;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		background: #232629;
		color: #eff0f1;
		padding: 2rem;
	}

	.container {
		max-width: 900px;
		margin: 0 auto;
	}

	header {
		margin-bottom: 2rem;
	}

	h1 {
		margin: 0 0 0.5rem 0;
		font-size: 2.2rem;
		color: #3daee9;
	}

	.subtitle {
		color: #bdc3c7;
		margin: 0;
	}

	.controls {
		display: flex;
		gap: 2rem;
		align-items: center;
		padding: 1rem 1.5rem;
		background: #31363b;
		border-radius: 8px;
		margin-bottom: 2rem;
	}

	.controls label {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 0.95rem;
	}

	.preview-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
		gap: 1rem;
		margin-bottom: 2.5rem;
	}

	.icon-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 1.25rem 0.5rem;
		background: #2a2e32;
		border: 1px solid #31363b;
		border-radius: 6px;
		transition: all 0.2s ease;
		min-height: 100px;
		gap: 0.75rem;
	}

	.icon-card:hover {
		border-color: #3daee9;
		transform: translateY(-2px);
	}

	.icon-card span {
		font-size: 0.75rem;
		color: #bdc3c7;
		text-align: center;
		word-break: break-all;
	}

	.usage {
		background: #1b1e20;
		border-radius: 8px;
		padding: 1.5rem;
		border: 1px solid #31363b;
	}

	.usage h2 {
		margin-top: 0;
		font-size: 1.2rem;
	}

	pre {
		margin: 0;
		font-family: 'Fira Code', monospace;
		font-size: 0.9rem;
		color: #27ae60;
		overflow-x: auto;
	}
</style>
