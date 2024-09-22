javascript:
(function() {
    if (!location.hostname.includes('youtube.com') || !location.pathname.startsWith('/watch')) {
        let p = document.createElement('div');
        p.textContent = 'Not on YouTube';
        p.style.cssText = 'position:fixed;top:20px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,0.7);color:white;padding:10px 20px;border-radius:5px;z-index:9999;';
        document.body.appendChild(p);
        setTimeout(() => document.body.removeChild(p), 3000);
    } else {
        let t = `Summarize this YouTube video. For listicles, list each item and briefly describe its unique content. CRUCIAL: Use entirely different phrasing for each item. Avoid repeating words or ideas across summaries. Capture each item's distinct significance without generic terms like "popular" or "well-received". Aim for summaries that read as if written by different people. Include specific examples, quotes, or stats when relevant. The video URL is: ${location.href}`;
        navigator.clipboard.writeText(t).then(() => window.open('https://gemini.google.com', '_blank')).catch(e => console.error('Could not copy text: ', e));
    }
})();
