(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const i={loggedIn:!!localStorage.getItem("user"),preferences:JSON.parse(localStorage.getItem("user"))||{},get(){return this.preferences},set({username:o,email:t="",bio:s=""}){this.preferences.username=o,this.preferences.email=t,this.preferences.bio=s,this.save()},save(){localStorage.removeItem("user"),localStorage.setItem("user",JSON.stringify(this.preferences))},clear(){localStorage.removeItem("user")}},l={loggedIn:i.loggedIn,username:"",login(o){i.set({username:o}),this.loggedIn=!0},logout(){this.loggedIn=!1,i.clear()},getUser(){return i.get()},setUser(o={username:this.username,email:"",bio:""}){i.set(o)}},u="/front_5th_chapter1-1",m=location.hash?"#":"",f={main:`${u+m}/`,login:`${u+m}/login`,profile:`${u+m}/profile`,error:"*"},p=()=>{const o=()=>location.hash?location.hash==="#/":location.pathname===f.main,t=()=>location.hash?location.hash==="#/profile":location.pathname===f.profile;return`
        <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>

      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          <li><a href="/" class="${o()?"text-blue-600 font-bold":"text-gray-600"}">홈</a></li>
          <li><a href="/profile" class="${t()?"text-blue-600 font-bold":"text-gray-600"}">프로필</a></li>
          ${l.loggedIn?'<li><a href="#" id="logout" class="text-gray-600">로그아웃</a></li>':'<li><a href="/login" class="text-gray-600">로그인</a></li>'}
        </ul>
      </nav>
    `},g=()=>`
        <footer class="bg-gray-200 p-4 text-center">
            <p>&copy; 2024 항해플러스. All rights reserved.</p>
        </footer>
    `,d=o=>{const t=document.createDocumentFragment(),s=document.createElement("div");for(s.innerHTML=o;s.childNodes[0];)t.appendChild(s.childNodes[0]);return t.firstElementChild},c=o=>{const t=document.getElementById("root"),s=t.firstElementChild;s?s.replaceWith(o):t.appendChild(o)},b=()=>{const o=`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${p()}
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
  `,t=d(o);t.querySelector("nav").addEventListener("click",s=>{if(s.preventDefault(),s.target.nodeName==="A"){if(s.target.id==="logout"){l.logout(),window.router.navigate("/login");return}const r=s.target.href.replace(location.origin,"");window.router.navigate(r)}}),c(t)},h=()=>{const t=d(`
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
  `);t.addEventListener("click",s=>{s.preventDefault(),s.target.nodeName==="A"&&window.router.navigate("/")}),c(t)},v=()=>{const t=d(`
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
  `);t.querySelector("#login-form").addEventListener("submit",s=>{s.preventDefault();const r=t.querySelector("#username").value;if(!r){alert("사용자 이름을 입력해주세요.");return}l.login(r),window.router.navigate("/")}),c(t)},x=()=>{const{username:o="",email:t="",bio:s=""}=l.getUser(),r=`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${p()}

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
                >${s}</textarea>
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
  `,e=d(r);e.querySelector("nav").addEventListener("click",n=>{if(n.preventDefault(),n.target.nodeName==="A"){if(n.target.id==="logout"){l.logout(),window.router.navigate("/login");return}const a=n.target.href.replace(location.origin,"");window.router.navigate(a)}}),e.querySelector("#profile-form").addEventListener("submit",n=>{n.preventDefault();const a={username:document.getElementById("username").value,email:document.getElementById("email").value,bio:document.getElementById("bio").value};l.setUser(a),alert("프로필이 업데이트 되었습니다.")}),c(e)},w=o=>{let t=o.find(e=>e.fragment==="*").component;const s={},r=()=>{const e=o.find(n=>n.fragment===window.location.pathname);if(!e){t();return}e.component()};return s.navigate=e=>{history.pushState({},"",e),r()},s.start=()=>{window.addEventListener("popstate",r)},s},y=o=>{let t=o.find(e=>e.fragment==="*").component;const s={},r=()=>{const e=o.find(n=>n.fragment===window.location.hash);if(!e){t();return}e.component()};return s.navigate=e=>{window.location.hash=e,r()},s.start=()=>{window.addEventListener("hashchange",r),window.location.hash||(window.location.hash="#/")},s},E=({path:o,replace:t=!1})=>{t?history.replaceState({},"",o):history.pushState({},"",o)},S=o=>{location.hash=o};export{h as E,v as L,b as M,x as P,l as a,y as b,S as c,w as h,E as n,f as p};
