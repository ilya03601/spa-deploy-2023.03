!function(){function e(e){const t=window.location.href;document.querySelector("#app").textContent=e?t.includes("#")?t.replace(/#.*/,e):t+e:window.location.href}document.querySelectorAll("a").forEach((e=>{e.href="/spa-deploy-2023.03/"+e.pathname})),document.body.addEventListener("click",(t=>{t.target.matches("a")&&(t.preventDefault(),console.log(t),history.pushState({},"",t.target.href),e())})),e()}();