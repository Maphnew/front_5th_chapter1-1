(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();const i={loggedIn:!!localStorage.getItem("user"),preferences:JSON.parse(localStorage.getItem("user"))||{},get(){return this.preferences},set({username:s,email:o="",bio:t=""}){this.preferences.username=s,this.preferences.email=o,this.preferences.bio=t,this.save()},save(){localStorage.removeItem("user"),localStorage.setItem("user",JSON.stringify(this.preferences))},clear(){localStorage.removeItem("user")}},a={loggedIn:i.loggedIn,username:"",login(s){i.set({username:s}),this.loggedIn=!0},logout(){this.loggedIn=!1,i.clear()},getUser(){return i.get()},setUser(s={username:this.username,email:"",bio:""}){i.set(s)}},u=()=>`
        <header class="bg-blue-600 text-white p-4 sticky top-0">
        <h1 class="text-2xl font-bold">항해플러스</h1>
      </header>

      <nav class="bg-white shadow-md p-2 sticky top-14">
        <ul class="flex justify-around">
          <li><a href="/" class="${location.pathname==="/"?"text-blue-600 font-bold":"text-gray-600"}">홈</a></li>
          <li><a href="/profile" class="${location.pathname==="/profile"?"text-blue-600 font-bold":"text-gray-600"}">프로필</a></li>
          ${a.loggedIn?'<li><a href="#" id="logout" class="text-gray-600">로그아웃</a></li>':'<li><a href="/login" class="text-gray-600">로그인</a></li>'}
        </ul>
      </nav>
    `,m=()=>`
        <footer class="bg-gray-200 p-4 text-center">
            <p>&copy; 2024 항해플러스. All rights reserved.</p>
        </footer>
    `,d=s=>{const o=document.createDocumentFragment(),t=document.createElement("div");for(t.innerHTML=s;t.childNodes[0];)o.appendChild(t.childNodes[0]);return o.firstElementChild},c=s=>{const o=document.getElementById("root"),t=o.firstElementChild;t?t.replaceWith(s):o.appendChild(s)},p=()=>{const s=`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${u()}
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

      ${m()}
      </div>
    </div>
  `,o=d(s);o.querySelector("nav").addEventListener("click",t=>{if(t.preventDefault(),t.target.nodeName==="A"){if(t.target.id==="logout"){a.logout(),window.router.navigate("/login");return}const l=t.target.href.replace(location.origin,"");window.router.navigate(l)}}),c(o)},f=()=>{const o=d(`
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
  `);o.addEventListener("click",t=>{t.preventDefault(),t.target.nodeName==="A"&&window.router.navigate("/")}),c(o)},b=()=>{const o=d(`
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
  `);o.querySelector("#login-form").addEventListener("submit",t=>{t.preventDefault();const l=o.querySelector("#username").value;if(!l){alert("사용자 이름을 입력해주세요.");return}a.login(l),window.router.navigate("/")}),c(o)},g=()=>{const{username:s="",email:o="",bio:t=""}=a.getUser(),l=`
    <div class="bg-gray-100 min-h-screen flex justify-center">
      <div class="max-w-md w-full">
        ${u()}

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
                  value="${s}"
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
                >${t}</textarea>
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

        ${m()}
      </div>
    </div>
  `,e=d(l);e.querySelector("nav").addEventListener("click",n=>{if(n.preventDefault(),n.target.nodeName==="A"){if(n.target.id==="logout"){a.logout(),window.router.navigate("/login");return}const r=n.target.href.replace(location.origin,"");history.pushState({path:r},"",r),window.router.navigate(r)}}),e.querySelector("#profile-form").addEventListener("submit",n=>{n.preventDefault();const r={username:document.getElementById("username").value,email:document.getElementById("email").value,bio:document.getElementById("bio").value};a.setUser(r),alert("프로필이 업데이트 되었습니다.")}),c(e)},h=s=>{let o=s.find(e=>e.fragment==="*").component;const t={},l=()=>{const e=s.find(n=>n.fragment===window.location.pathname);if(!e){o();return}e.component()};return t.navigate=e=>{history.pushState({},"",e),l()},t.start=()=>{window.addEventListener("popstate",l)},t},v=s=>{let o=s.find(e=>e.fragment==="*").component;const t={},l=()=>{const e=s.find(n=>n.fragment===window.location.hash);if(!e){o();return}e.component()};return t.navigate=e=>{window.location.hash="#"+e,l()},t.start=()=>{window.addEventListener("hashchange",l),window.location.hash||(window.location.hash="#/")},t},x=({path:s,replace:o=!1})=>{o?history.replaceState({},"",s):history.pushState({},"",s)},w=s=>{location.hash=s};export{f as E,b as L,p as M,g as P,a,v as b,w as c,h,x as n};
