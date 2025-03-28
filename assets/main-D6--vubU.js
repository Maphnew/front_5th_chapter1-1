(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const c={loggedIn:!!localStorage.getItem("user"),preferences:JSON.parse(localStorage.getItem("user"))||{},get(){return this.preferences},set({username:e,email:o="",bio:n=""}){this.preferences.username=e,this.preferences.email=o,this.preferences.bio=n,this.save()},save(){localStorage.removeItem("user"),localStorage.setItem("user",JSON.stringify(this.preferences))},clear(){localStorage.removeItem("user")}},a={loggedIn:c.loggedIn,username:"",login(e){c.set({username:e}),this.loggedIn=!0},logout(){this.loggedIn=!1,c.clear()},getUser(){return c.get()},setUser(e={username:this.username,email:"",bio:""}){c.set(e)}},f=()=>{const e=()=>location.hash?location.hash===`${i}#/`:location.pathname===`${i}/`,o=()=>location.hash?location.hash===`${i}#/profile`:location.pathname===`${i}/profile`;return`
        <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>

      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          <li><a href="/" class="${e()?"text-blue-600 font-bold":"text-gray-600"}">홈</a></li>
          <li><a href="/profile" class="${o()?"text-blue-600 font-bold":"text-gray-600"}">프로필</a></li>
          ${a.loggedIn?'<li><a href="#" id="logout" class="text-gray-600">로그아웃</a></li>':'<li><a href="/login" class="text-gray-600">로그인</a></li>'}
        </ul>
      </nav>
    `},g=()=>`
        <footer class="bg-gray-200 p-4 text-center">
            <p>&copy; 2024 항해플러스. All rights reserved.</p>
        </footer>
    `,d=e=>{const o=document.createDocumentFragment(),n=document.createElement("div");for(n.innerHTML=e;n.childNodes[0];)o.appendChild(n.childNodes[0]);return o.firstElementChild},u=e=>{const o=document.getElementById("root"),n=o.firstElementChild;n?n.replaceWith(e):o.appendChild(e)},b=()=>{const e=`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${f()}
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

      ${g()}
      </div>
    </div>
  `,o=d(e);o.querySelector("nav").addEventListener("click",n=>{if(n.preventDefault(),n.target.nodeName==="A"){if(n.target.id==="logout"){a.logout(),window.router.navigate("/login");return}const r=n.target.href.replace(location.origin,"");window.router.navigate(r)}}),u(o)},x=()=>{const o=d(`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
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
    </main>
  `);o.addEventListener("click",n=>{n.preventDefault(),n.target.nodeName==="A"&&window.router.navigate("/")}),u(o)},h=()=>{const o=d(`
    <main class="bg-gray-100 flex items-center justify-center min-h-screen">
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
    </main>
  `);o.querySelector("#login-form").addEventListener("submit",n=>{n.preventDefault();const r=o.querySelector("#username").value;if(!r){alert("사용자 이름을 입력해주세요.");return}a.login(r),window.router.navigate("/")}),u(o)},w=()=>{const{username:e="",email:o="",bio:n=""}=a.getUser(),r=`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${f()}

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
                  value="${e}"
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
                  value="${o}"
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

        ${g()}
      </div>
    </div>
  `,t=d(r);t.querySelector("nav").addEventListener("click",s=>{if(s.preventDefault(),s.target.nodeName==="A"){if(s.target.id==="logout"){a.logout(),window.router.navigate("/login");return}const l=s.target.href.replace(location.origin,"");window.router.navigate(l)}}),t.querySelector("#profile-form").addEventListener("submit",s=>{s.preventDefault();const l={username:document.getElementById("username").value,email:document.getElementById("email").value,bio:document.getElementById("bio").value};a.setUser(l),alert("프로필이 업데이트 되었습니다.")}),u(t)},y=e=>{let o=e.find(t=>t.fragment==="*").component;const n={},r=()=>{const t=e.find(s=>s.fragment===window.location.pathname);if(!t){o();return}t.component()};return n.navigate=t=>{history.pushState({},"",t),r()},n.start=()=>{window.addEventListener("popstate",r)},n},I=e=>{let o=e.find(t=>t.fragment==="*").component;const n={},r=()=>{const t=e.find(s=>s.fragment===window.location.hash);if(!t){o();return}t.component()};return n.navigate=t=>{window.location.hash=t,r()},n.start=()=>{window.addEventListener("hashchange",r),window.location.hash||(window.location.hash="#/")},n},m=({path:e,replace:o=!1})=>{o?history.replaceState({},"",e):history.pushState({},"",e)},S=e=>{location.hash=e},p={main:e=>()=>a.loggedIn?(m({path:"/",replace:!0}),b()):e(),auth:e=>()=>a.loggedIn?e():(m({path:"/login",replace:!0}),h())},i="/front_5th_chapter1-1",E=[{fragment:`${i}/`,component:b},{fragment:`${i}/login`,component:p.main(h)},{fragment:`${i}/profile`,component:p.auth(w)},{fragment:"*",component:x}],v=window.router=y(E);v.start();v.navigate(location.pathname);export{x as E,h as L,b as M,w as P,a,S as b,I as h};
