import{h as i,M as o,E as s,L as e,P as u,a as n,b as r}from"./main-D6--vubU.js";const t={main:a=>()=>n.loggedIn?(r("/"),o()):a(),auth:a=>()=>n.loggedIn?a():(r("/login"),e())},m=[{fragment:"#/",component:o},{fragment:"#/login",component:t.main(e)},{fragment:"#/profile",component:t.auth(u)},{fragment:"*",component:s}],g=window.router=i(m);g.start();g.navigate(location.hash);
