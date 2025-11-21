// Build Table of Contents from H2 headings
document.addEventListener('DOMContentLoaded', function(){
  const tocList = document.getElementById('tocList');
  const tocToggle = document.getElementById('tocToggle');
  const headings = Array.from(document.querySelectorAll('.content h2'));
  headings.forEach((h, idx)=>{
    const id = h.parentElement.id || ('section-' + (idx+1));
    h.parentElement.id = id;
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = '#' + id;
    a.textContent = h.textContent;
    li.appendChild(a);
    tocList.appendChild(li);
  });

  // toggle behavior
  tocToggle.addEventListener('click', ()=>{
    tocList.classList.toggle('open');
    if(tocList.classList.contains('open')){
      tocToggle.textContent = 'Table of Contents ▴';
    } else {
      tocToggle.textContent = 'Table of Contents ▾';
    }
  });

  // smooth scroll for TOC links
  tocList.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        window.scrollTo({top: target.offsetTop - 20, behavior: 'smooth'});
      }
    });
  });

  // Collapse TOC on load
  // (keeps it accessible on small screens)
  tocList.classList.remove('open');

});
