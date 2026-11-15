const fileSamples = {
  "index.html": {
    language: "HTML",
    lines: 24,
    code: `<span class="token-muted">&lt;!DOCTYPE html&gt;</span>
<span class="token-tag">&lt;html</span> <span class="token-attr">lang</span>=<span class="token-string">"en"</span><span class="token-tag">&gt;</span>
<span class="token-tag">&lt;head&gt;</span>
  <span class="token-tag">&lt;meta</span> <span class="token-attr">charset</span>=<span class="token-string">"UTF-8"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;meta</span> <span class="token-attr">name</span>=<span class="token-string">"viewport"</span> <span class="token-attr">content</span>=<span class="token-string">"width=device-width, initial-scale=1"</span><span class="token-tag">&gt;</span>
  <span class="token-tag">&lt;title&gt;</span>Creative Studio<span class="token-tag">&lt;/title&gt;</span>
  <span class="token-tag">&lt;link</span> <span class="token-attr">rel</span>=<span class="token-string">"stylesheet"</span> <span class="token-attr">href</span>=<span class="token-string">"style.css"</span><span class="token-tag">&gt;</span>
<span class="token-tag">&lt;/head&gt;</span>
<span class="token-tag">&lt;body&gt;</span>
  <span class="token-tag">&lt;main</span> <span class="token-attr">class</span>=<span class="token-string">"hero"</span><span class="token-tag">&gt;</span>
    <span class="token-tag">&lt;nav</span> <span class="token-attr">class</span>=<span class="token-string">"navigation"</span><span class="token-tag">&gt;</span>
      <span class="token-tag">&lt;a</span> <span class="token-attr">class</span>=<span class="token-string">"logo"</span><span class="token-tag">&gt;</span>northstar<span class="token-tag">&lt;/a&gt;</span>
      <span class="token-tag">&lt;div</span> <span class="token-attr">class</span>=<span class="token-string">"nav-links"</span><span class="token-tag">&gt;</span>
        <span class="token-tag">&lt;a&gt;</span>Work<span class="token-tag">&lt;/a&gt;</span>
        <span class="token-tag">&lt;a&gt;</span>Studio<span class="token-tag">&lt;/a&gt;</span>
        <span class="token-tag">&lt;a&gt;</span>Contact<span class="token-tag">&lt;/a&gt;</span>
      <span class="token-tag">&lt;/div&gt;</span>
    <span class="token-tag">&lt;/nav&gt;</span>
    <span class="token-tag">&lt;section</span> <span class="token-attr">class</span>=<span class="token-string">"hero-content"</span><span class="token-tag">&gt;</span>
      <span class="token-tag">&lt;p&gt;</span>INDEPENDENT CREATIVE STUDIO<span class="token-tag">&lt;/p&gt;</span>
      <span class="token-tag">&lt;h1&gt;</span>Make room for
        <span class="token-highlight">what's next.</span><span class="token-tag">&lt;/h1&gt;</span>
      <span class="token-tag">&lt;button&gt;</span>Explore our work ↗<span class="token-tag">&lt;/button&gt;</span>
    <span class="token-tag">&lt;/section&gt;</span>
  <span class="token-tag">&lt;/main&gt;</span>
<span class="token-tag">&lt;/body&gt;</span>
<span class="token-tag">&lt;/html&gt;</span>`
  },
  "style.css": {
    language: "CSS",
    lines: 18,
    code: `<span class="token-attr">:root</span> {
  <span class="token-string">--color-bg</span>: <span style="color:#b9a4ed">#0b1115</span>;
  <span class="token-string">--color-surface</span>: <span style="color:#b9a4ed">#111b21</span>;
  <span class="token-string">--color-accent</span>: <span style="color:#b9a4ed">#35e0cf</span>;
  <span class="token-string">--color-text</span>: <span style="color:#b9a4ed">#e6f0f2</span>;
}

<span class="token-tag">body</span> {
  <span class="token-attr">margin</span>: <span class="token-string">0</span>;
  <span class="token-attr">font-family</span>: <span class="token-string">"Inter", sans-serif</span>;
  <span class="token-attr">background</span>: <span class="token-string">var(--color-bg)</span>;
  <span class="token-attr">color</span>: <span class="token-string">var(--color-text)</span>;
}

<span class="token-attr">.hero</span> {
  <span class="token-attr">min-height</span>: <span class="token-string">100vh</span>;
  <span class="token-attr">display</span>: <span class="token-string">grid</span>;
  <span class="token-attr">place-items</span>: <span class="token-string">center</span>;
}`
  },
  "script.js": {
    language: "JavaScript",
    lines: 13,
    code: `<span class="token-muted">// A little interaction goes a long way.</span>
<span class="token-tag">const</span> navigation = document
  .<span class="token-attr">querySelector</span>(<span class="token-string">".navigation"</span>);

<span class="token-tag">const</span> menuItems = document
  .<span class="token-attr">querySelectorAll</span>(<span class="token-string">".nav-links a"</span>);

menuItems.<span class="token-attr">forEach</span>((item) => {
  item.<span class="token-attr">addEventListener</span>(<span class="token-string">"click"</span>, () => {
    menuItems.<span class="token-attr">forEach</span>((link) =>
      link.<span class="token-attr">classList</span>.<span class="token-attr">remove</span>(<span class="token-string">"active"</span>)
    );
    item.<span class="token-attr">classList</span>.<span class="token-attr">add</span>(<span class="token-string">"active"</span>);
  });
});`
  }
};

const codeContent = document.getElementById("codeContent");
const lineNumbers = document.getElementById("lineNumbers");
const breadcrumbFile = document.getElementById("breadcrumbFile");
const editorTabs = [...document.querySelectorAll(".editor-tab")];
const fileRows = [...document.querySelectorAll(".file-row")];

function selectFile(file) {
  const sample = fileSamples[file];
  if (!sample) return;
  editorTabs.forEach(tab => tab.classList.toggle("active", tab.dataset.file === file));
  fileRows.forEach(row => row.classList.toggle("selected", row.dataset.file === file));
  codeContent.innerHTML = sample.code;
  lineNumbers.innerHTML = Array.from({length: sample.lines}, (_, i) => i + 1).join("<br>");
  breadcrumbFile.textContent = file;
  document.querySelector(".editor-tools > span").textContent = sample.language;
  document.querySelector(".editor-status span:last-child").textContent = sample.language;
}
editorTabs.forEach(tab => tab.addEventListener("click", () => selectFile(tab.dataset.file)));
fileRows.forEach(row => row.addEventListener("click", () => selectFile(row.dataset.file)));

document.querySelectorAll(".panel-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".panel-tab").forEach(item => item.classList.toggle("active", item === tab));
    const content = document.getElementById("panelContent");
    content.dataset.panel = tab.dataset.panel;
    const messages = {
      console: [["10:42:08", "i", "console-info", "Editor workspace initialized."], ["10:42:08", "✓", "console-success", "Interface ready for your next idea."]],
      problems: [["", "✓", "console-success", "No problems have been detected."], ["", "i", "console-info", "Your workspace looks clean."]],
      terminal: [["", "›", "console-info", "Terminal panel — visual preview only."], ["", "›", "console-info", "No shell session is connected."]],
      output: [["", "↳", "console-info", "Build output will appear here."]]
    };
    content.innerHTML = messages[tab.dataset.panel].map(([time, icon, cls, text]) =>
      '<div class="console-line"><span class="console-time">' + time + '</span><span class="' + cls + '">' + icon + '</span><span>' + text + '</span></div>'
    ).join("");
  });
});

const bottomPanel = document.getElementById("bottomPanel");
const panelCollapse = document.getElementById("panelCollapse");
panelCollapse.addEventListener("click", () => {
  bottomPanel.classList.toggle("is-collapsed");
  panelCollapse.textContent = bottomPanel.classList.contains("is-collapsed") ? "⌃" : "⌄";
});

document.querySelectorAll(".rail-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".rail-button").forEach(item => item.classList.toggle("active", item === button));
    if (button.title === "Explorer") document.getElementById("fileSidebar").classList.remove("is-hidden");
    else if (button.title === "Search" || button.title === "Extensions") document.getElementById("fileSidebar").classList.add("is-hidden");
  });
});

document.querySelectorAll(".preview-device").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".preview-device").forEach(item => item.classList.toggle("active", item === button));
    const canvas = document.querySelector(".preview-canvas");
    canvas.dataset.viewport = button.title.toLowerCase();
    canvas.style.maxWidth = button.title === "Mobile" ? "390px" : button.title === "Tablet" ? "768px" : "none";
    canvas.style.marginLeft = "auto";
    canvas.style.marginRight = "auto";
  });
});

const editorPane = document.querySelector(".editor-pane");
const previewPane = document.querySelector(".preview-pane");
document.querySelector(".vertical-handle").addEventListener("pointerdown", event => {
  event.preventDefault();
  const row = document.getElementById("editorPreviewRow");
  const move = moveEvent => {
    const bounds = row.getBoundingClientRect();
    const ratio = (moveEvent.clientX - bounds.left) / bounds.width;
    if (ratio > .25 && ratio < .72) editorPane.style.flexBasis = (ratio * 100) + "%";
  };
  const stop = () => {
    window.removeEventListener("pointermove", move);
    window.removeEventListener("pointerup", stop);
  };
  window.addEventListener("pointermove", move);
  window.addEventListener("pointerup", stop, {once:true});
});

document.querySelector(".expand-preview").addEventListener("click", () => {
  const note = document.querySelector(".preview-footer span:first-child");
  note.innerHTML = '<i class="status-dot"></i> Preview window action is a visual placeholder';
  window.setTimeout(() => note.innerHTML = '<i class="status-dot"></i> Preview is up to date', 2200);
});

document.querySelectorAll(".site-nav-links span").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".site-nav-links span").forEach(item => item.style.color = item === link ? "#35e0cf" : "#a5b8b4");
  });
});
