
const themeBtn = document.getElementById('themeBtn');

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    themeBtn.textContent = document.body.classList.contains('light') ? '☀' : '☾';
  });
}

const shareBtn = document.getElementById('shareBtn');

if (shareBtn) {
  shareBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(location.href);
      shareBtn.textContent = '✓ Link copied!';
    } catch {
      alert('Copy this page URL from your browser.');
    }
  });
}

const portfolioLink = document.getElementById('portfolioLink');

if (portfolioLink) {
  portfolioLink.addEventListener('click', e => {
    e.preventDefault();
    alert('Add your portfolio URL in index.html');
  });
}

document.getElementById('year')?.textContent = new Date().getFullYear();

