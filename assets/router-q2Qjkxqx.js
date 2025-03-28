(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const c={loggedIn:!!localStorage.getItem("user"),preferences:JSON.parse(localStorage.getItem("user"))||{},get(){return this.preferences},set({username:o,email:t="",bio:n=""}){this.preferences.username=o,this.preferences.email=t,this.preferences.bio=n,this.save()},save(){localStorage.removeItem("user"),localStorage.setItem("user",JSON.stringify(this.preferences))},clear(){localStorage.removeItem("user")}},i={loggedIn:c.loggedIn,username:"",login(o){c.set({username:o}),this.loggedIn=!0},logout(){this.loggedIn=!1,c.clear()},getUser(){return c.get()},setUser(o={username:this.username,email:"",bio:""}){c.set(o)}},u="/front_5th_chapter1-1",g=()=>{const o=()=>location.hash?location.hash==="#/":location.pathname===`${u}/`,t=()=>location.hash?location.hash==="#/profile":location.pathname===`${u}/profile`;return`
        <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>

      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          <li><a href="/" class="${o()?"text-blue-600 font-bold":"text-gray-600"}">홈</a></li>
          <li><a href="/profile" class="${t()?"text-blue-600 font-bold":"text-gray-600"}">프로필</a></li>
          ${i.loggedIn?'<li><a href="#" id="logout" class="text-gray-600">로그아웃</a></li>':'<li><a href="/login" class="text-gray-600">로그인</a></li>'}
        </ul>
      </nav>
    `},v=()=>`
        <footer class="bg-gray-200 p-4 text-center">
            <p>&copy; 2024 항해플러스. All rights reserved.</p>
        </footer>
    `,p=o=>{const t=document.createElement("div");return t.classList.add("bg-gray-100","min-h-screen","flex","justify-center"),t.innerHTML=`
      <div class="max-w-md w-full">
        ${g()}
            ${o}
        ${v()}
        </div>
    `,t};let d=()=>{};const m=(o,t)=>{const n=document.getElementById("root"),r=n.firstElementChild;r?(d==null||d(),d=t,r.replaceWith(o)):n.appendChild(o)},x=()=>{const t=p(`
        <main class="p-4">
          <div class="mb-4 bg-white rounded-lg shadow p-4">
            <textarea class="w-full p-2 border rounded" placeholder="무슨 생각을 하고 계신가요?"></textarea>
            <button class="mt-2 bg-blue-600 text-white px-4 py-2 rounded">게시</button>
          </div>

          <div class="space-y-4">

            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                  <p class="font-bold">홍길동</p>
                  <p class="text-sm text-gray-500">5분 전</p>
                </div>
              </div>
              <p>오늘 날씨가 정말 좋네요. 다들 좋은 하루 보내세요!</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                  <p class="font-bold">김철수</p>
                  <p class="text-sm text-gray-500">15분 전</p>
                </div>
              </div>
              <p>새로운 프로젝트를 시작했어요. 열심히 코딩 중입니다!</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                  <p class="font-bold">이영희</p>
                  <p class="text-sm text-gray-500">30분 전</p>
                </div>
              </div>
              <p>오늘 점심 메뉴 추천 받습니다. 뭐가 좋을까요?</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                  <p class="font-bold">박민수</p>
                  <p class="text-sm text-gray-500">1시간 전</p>
                </div>
              </div>
              <p>주말에 등산 가실 분 계신가요? 함께 가요!</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow p-4">
              <div class="flex items-center mb-2">
                <img src="https://placehold.co/40" alt="프로필" class="rounded-full mr-2">
                <div>
                  <p class="font-bold">정수연</p>
                  <p class="text-sm text-gray-500">2시간 전</p>
                </div>
              </div>
              <p>새로 나온 영화 재미있대요. 같이 보러 갈 사람?</p>
              <div class="mt-2 flex justify-between text-gray-500">
                <button>좋아요</button>
                <button>댓글</button>
                <button>공유</button>
              </div>
            </div>
          </div>
        </main>
  `),n=e=>{if(e.preventDefault(),e.target.nodeName==="A"){if(e.target.id==="logout"){i.logout(),window.router.navigate("/login");return}const s=e.target.href.replace(location.origin,"");window.router.navigate(s)}};t.querySelector("nav").addEventListener("click",n),m(t,()=>{t.querySelector("nav").removeEventListener("click",n)})},f=o=>{let t=document.createElement("main");return t.classList.add("bg-gray-100","flex","items-center","justify-center","min-h-screen"),t.innerHTML=o,t},w=()=>{const t=f(`
      <div class="bg-white p-8 rounded-lg shadow-md w-full text-center" style="max-width: 480px">
        <h1 class="text-2xl font-bold text-blue-600 mb-4">항해플러스</h1>
        <p class="text-4xl font-bold text-gray-800 mb-4">404</p>
        <p class="text-xl text-gray-600 mb-8">페이지를 찾을 수 없습니다</p>
        <p class="text-gray-600 mb-8">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
        </p>
        <a href="/" class="bg-blue-600 text-white px-4 py-2 rounded font-bold">
          홈으로 돌아가기
        </a>
      </div>
  `),n=e=>{e.preventDefault(),e.target.nodeName==="A"&&window.router.navigate("/")};t.addEventListener("click",n),m(t,()=>{t.removeEventListener("click",n)})},y=()=>{const t=f(`
      <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 class="text-2xl font-bold text-center text-blue-600 mb-8">항해플러스</h1>
        <form id="login-form">
          <div class="mb-4">
            <input type="text" id="username" placeholder="사용자 이름" class="w-full p-2 border rounded">
          </div>
          <div class="mb-6">
            <input type="password" placeholder="비밀번호" class="w-full p-2 border rounded">
          </div>
          <button type="submit" class="w-full bg-blue-600 text-white p-2 rounded font-bold">로그인</button>
        </form>
        <div class="mt-4 text-center">
          <a href="#" class="text-blue-600 text-sm">비밀번호를 잊으셨나요?</a>
        </div>
        <hr class="my-6">
        <div class="text-center">
          <button class="bg-green-500 text-white px-4 py-2 rounded font-bold">새 계정 만들기</button>
        </div>
      </div>
  `),n=e=>{e.preventDefault();const s=t.querySelector("#username").value;if(!s){alert("사용자 이름을 입력해주세요.");return}i.login(s),window.router.navigate("/")};t.querySelector("#login-form").addEventListener("submit",n),m(t,()=>{t.querySelector("#login-form").removeEventListener("submit",n)})},E=()=>{const{username:o="",email:t="",bio:n=""}=i.getUser(),r=`
        <main class="p-4">
          <div class="bg-white p-8 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-center text-blue-600 mb-8">
              내 프로필
            </h2>
            <form id="profile-form">
              <div class="mb-4">
                <label
                  for="username"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >사용자 이름</label
                >
                <input
                  type="text"
                  id="username"
                  name="username"
                  value="${o}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-4">
                <label
                  for="email"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >이메일</label
                >
                <input
                  type="email"
                  id="email"
                  name="email"
                  value="${t}"
                  class="w-full p-2 border rounded"
                />
              </div>
              <div class="mb-6">
                <label
                  for="bio"
                  class="block text-gray-700 text-sm font-bold mb-2"
                  >자기소개</label
                >
                <textarea
                  id="bio"
                  name="bio"
                  rows="4"
                  class="w-full p-2 border rounded"
                >${n}</textarea>
              </div>
              <button
                type="submit"
                class="w-full bg-blue-600 text-white p-2 rounded font-bold"
              >
                프로필 업데이트
              </button>
            </form>
          </div>
        </main>
  `,e=a=>{if(a.preventDefault(),a.target.nodeName==="A"){if(a.target.id==="logout"){i.logout(),window.router.navigate("/login");return}const b=a.target.href.replace(location.origin,"");window.router.navigate(b)}},s=a=>{a.preventDefault();const b={username:document.getElementById("username").value,email:document.getElementById("email").value,bio:document.getElementById("bio").value};i.setUser(b),alert("프로필이 업데이트 되었습니다.")},l=p(r);l.querySelector("nav").addEventListener("click",e),l.querySelector("#profile-form").addEventListener("submit",s),m(l,()=>{l.querySelector("nav").removeEventListener("click",e),l.querySelector("#profile-form").removeEventListener("submit",s)})},L=o=>{let t=o.find(e=>e.fragment==="*").component;const n={},r=()=>{const e=o.find(s=>s.fragment===window.location.pathname);if(!e){t();return}e.component()};return n.navigate=e=>{history.pushState({},"",e.includes(u)?e:u+e),r()},n.start=()=>{window.addEventListener("popstate",r)},n},S=o=>{let t=o.find(e=>e.fragment==="*").component;const n={},r=()=>{const e=o.find(s=>s.fragment===window.location.hash);if(!e){t();return}e.component()};return n.navigate=e=>{window.location.hash=window.location.hash.includes("#")?e:"#"+e,r()},n.start=()=>{window.addEventListener("hashchange",r),window.location.hash||(window.location.hash="#/")},n},k=({path:o,replace:t=!1})=>{t?history.replaceState({},"",o):history.pushState({},"",o)},I=o=>{location.hash=o};export{u as B,w as E,y as L,x as M,E as P,i as a,S as b,I as c,L as h,k as n};
