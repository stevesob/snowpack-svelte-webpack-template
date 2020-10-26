// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "body{margin:0;font-family:Arial, Helvetica, sans-serif}.App.svelte-1jnae98{text-align:center}.App-header.svelte-1jnae98{background-color:#f9f6f6;color:#333;min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:calc(10px + 2vmin)}.App-link.svelte-1jnae98{color:#ff3e00}.App-logo.svelte-1jnae98{height:40vmin;pointer-events:none;margin-bottom:1rem;animation:svelte-1jnae98-App-logo-spin infinite 1.6s ease-in-out alternate}@keyframes svelte-1jnae98-App-logo-spin{from{transform:scale(1)}to{transform:scale(1.06)}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';

  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}