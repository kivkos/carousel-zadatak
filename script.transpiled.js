document.querySelector(".prev-btn").addEventListener("click",(function(){const e=document.getElementById("row-first"),t=document.getElementById("row-second");e.style.transition="transform 0.5s ease",t.style.transition="transform 0.5s ease",e.appendChild(e.firstElementChild.cloneNode(!0)),e.removeChild(e.firstElementChild),t.insertBefore(t.lastElementChild,t.firstElementChild)})),document.querySelector(".next-btn").addEventListener("click",(function(){const e=document.getElementById("row-first"),t=document.getElementById("row-second");e.style.transition="transform 0.5s ease",t.style.transition="transform 0.5s ease",e.insertBefore(e.lastElementChild,e.firstElementChild),t.appendChild(t.firstElementChild.cloneNode(!0)),t.removeChild(t.firstElementChild)}));

//# sourceMappingURL=script.transpiled.js.map