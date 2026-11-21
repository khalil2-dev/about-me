const themeBtn=document.getElementById('themeBtn');
themeBtn.addEventListener('click',()=>{document.body.classList.toggle('light');themeBtn.textContent=document.body.classList.contains('light')?'☀':'☾';});
document.getElementById('shareBtn').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(location.href);document.getElementById('shareBtn').textContent='✓ Link copied!';}catch{alert('Copy this page URL from your browser.')}});
document.getElementById('portfolioLink').addEventListener('click',e=>{e.preventDefault();alert('Add your portfolio URL in index.html');});
