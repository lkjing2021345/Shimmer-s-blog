// Custom TypeScript — 代码块复制按钮 & 语言标签
// 注意：主题自带 copyCodeButton，这里用自定义的按钮覆盖

const highlights = document.querySelectorAll('.article-content div.highlight');
const copyText = '📄 copy';
const copiedText = '✓ copied!';

highlights.forEach(highlight => {
    // 避免重复添加
    if (highlight.querySelector('.copyCodeButton')) return;

    const copyButton = document.createElement('button');
    copyButton.innerHTML = copyText;
    copyButton.classList.add('copyCodeButton');
    highlight.appendChild(copyButton);

    const codeBlock = highlight.querySelector('code[data-lang]');
    if (!codeBlock) return;

    const lang = codeBlock.getAttribute('data-lang');

    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(codeBlock.textContent)
            .then(() => {
                copyButton.textContent = copiedText;
                setTimeout(() => {
                    copyButton.textContent = copyText;
                }, 1000);
            })
            .catch(err => {
                console.log('Copy failed', err);
            });
    });

    // 语言标签
    if (lang && !highlight.querySelector('.languageCodeButton')) {
        const languageButton = document.createElement('button');
        languageButton.innerHTML = lang.toUpperCase() + '&nbsp;&nbsp;';
        languageButton.classList.add('languageCodeButton');
        highlight.appendChild(languageButton);
    }
});
