var Aa=Object.defineProperty;var Ia=(i,A,I)=>A in i?Aa(i,A,{enumerable:!0,configurable:!0,writable:!0,value:I}):i[A]=I;var PA=(i,A,I)=>(Ia(i,typeof A!="symbol"?A+"":A,I),I);/* empty css              */(function(){const A=document.createElement("link").relList;if(A&&A.supports&&A.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))g(C);new MutationObserver(C=>{for(const B of C)if(B.type==="childList")for(const Q of B.addedNodes)Q.tagName==="LINK"&&Q.rel==="modulepreload"&&g(Q)}).observe(document,{childList:!0,subtree:!0});function I(C){const B={};return C.integrity&&(B.integrity=C.integrity),C.referrerPolicy&&(B.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?B.credentials="include":C.crossOrigin==="anonymous"?B.credentials="omit":B.credentials="same-origin",B}function g(C){if(C.ep)return;C.ep=!0;const B=I(C);fetch(C.href,B)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bi="150",ga=0,Oi=1,Ca=2,pt=1,dt=2,SB=3,Yg=0,WI=1,Rg=2,Wg=0,xC=1,Zi=2,Wi=3,vi=4,Ba=5,uC=100,Qa=101,Ea=102,Pi=103,ji=104,ia=200,oa=201,ta=202,ea=203,Yt=204,Lt=205,aa=206,Da=207,sa=208,ha=209,na=210,Ga=0,wa=1,ra=2,dE=3,Sa=4,ca=5,ka=6,ya=7,ft=0,Ma=1,la=2,dg=0,Ua=1,Ka=2,Na=3,Ja=4,Fa=5,Ht=300,WC=301,vC=302,YE=303,LE=304,dQ=306,Pg=1e3,XI=1001,yQ=1002,yI=1003,fE=1004,nQ=1005,mI=1006,ut=1007,hC=1008,nC=1009,Ra=1010,qa=1011,mt=1012,pa=1013,eC=1014,Og=1015,lB=1016,da=1017,Ya=1018,bC=1020,La=1021,_I=1023,fa=1024,Ha=1025,sC=1026,PC=1027,ua=1028,ma=1029,Ta=1030,xa=1031,ba=1033,XQ=33776,_Q=33777,zQ=33778,$Q=33779,Vi=35840,Xi=35841,_i=35842,zi=35843,Oa=36196,$i=37492,Ao=37496,Io=37808,go=37809,Co=37810,Bo=37811,Qo=37812,Eo=37813,io=37814,oo=37815,to=37816,eo=37817,ao=37818,Do=37819,so=37820,ho=37821,AE=36492,Za=36283,no=36284,Go=36285,wo=36286,UB=2300,jC=2301,IE=2302,ro=2400,So=2401,co=2402,Wa=2500,va=0,Tt=1,HE=2,GC=3e3,vA=3001,Pa=3200,ja=3201,xt=0,Va=1,hg="srgb",KB="srgb-linear",bt="display-p3",gE=7680,Xa=519,uE=35044,ko="300 es",mE=1035;class cC{addEventListener(A,I){this._listeners===void 0&&(this._listeners={});const g=this._listeners;g[A]===void 0&&(g[A]=[]),g[A].indexOf(I)===-1&&g[A].push(I)}hasEventListener(A,I){if(this._listeners===void 0)return!1;const g=this._listeners;return g[A]!==void 0&&g[A].indexOf(I)!==-1}removeEventListener(A,I){if(this._listeners===void 0)return;const C=this._listeners[A];if(C!==void 0){const B=C.indexOf(I);B!==-1&&C.splice(B,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const C=g.slice(0);for(let B=0,Q=C.length;B<Q;B++)C[B].call(this,A);A.target=null}}}const lI=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yo=1234567;const kB=Math.PI/180,NB=180/Math.PI;function ig(){const i=Math.random()*4294967295|0,A=Math.random()*4294967295|0,I=Math.random()*4294967295|0,g=Math.random()*4294967295|0;return(lI[i&255]+lI[i>>8&255]+lI[i>>16&255]+lI[i>>24&255]+"-"+lI[A&255]+lI[A>>8&255]+"-"+lI[A>>16&15|64]+lI[A>>24&255]+"-"+lI[I&63|128]+lI[I>>8&255]+"-"+lI[I>>16&255]+lI[I>>24&255]+lI[g&255]+lI[g>>8&255]+lI[g>>16&255]+lI[g>>24&255]).toLowerCase()}function YI(i,A,I){return Math.max(A,Math.min(I,i))}function Qi(i,A){return(i%A+A)%A}function _a(i,A,I,g,C){return g+(i-A)*(C-g)/(I-A)}function za(i,A,I){return i!==A?(I-i)/(A-i):0}function yB(i,A,I){return(1-I)*i+I*A}function $a(i,A,I,g){return yB(i,A,1-Math.exp(-I*g))}function AD(i,A=1){return A-Math.abs(Qi(i,A*2)-A)}function ID(i,A,I){return i<=A?0:i>=I?1:(i=(i-A)/(I-A),i*i*(3-2*i))}function gD(i,A,I){return i<=A?0:i>=I?1:(i=(i-A)/(I-A),i*i*i*(i*(i*6-15)+10))}function CD(i,A){return i+Math.floor(Math.random()*(A-i+1))}function BD(i,A){return i+Math.random()*(A-i)}function QD(i){return i*(.5-Math.random())}function ED(i){i!==void 0&&(yo=i);let A=yo+=1831565813;return A=Math.imul(A^A>>>15,A|1),A^=A+Math.imul(A^A>>>7,A|61),((A^A>>>14)>>>0)/4294967296}function iD(i){return i*kB}function oD(i){return i*NB}function TE(i){return(i&i-1)===0&&i!==0}function Ot(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Zt(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function tD(i,A,I,g,C){const B=Math.cos,Q=Math.sin,E=B(I/2),o=Q(I/2),t=B((A+g)/2),e=Q((A+g)/2),a=B((A-g)/2),D=Q((A-g)/2),s=B((g-A)/2),w=Q((g-A)/2);switch(C){case"XYX":i.set(E*e,o*a,o*D,E*t);break;case"YZY":i.set(o*D,E*e,o*a,E*t);break;case"ZXZ":i.set(o*a,o*D,E*e,E*t);break;case"XZX":i.set(E*e,o*w,o*s,E*t);break;case"YXY":i.set(o*s,E*e,o*w,E*t);break;case"ZYZ":i.set(o*w,o*s,E*e,E*t);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+C)}}function qg(i,A){switch(A.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _A(i,A){switch(A.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const eD={DEG2RAD:kB,RAD2DEG:NB,generateUUID:ig,clamp:YI,euclideanModulo:Qi,mapLinear:_a,inverseLerp:za,lerp:yB,damp:$a,pingpong:AD,smoothstep:ID,smootherstep:gD,randInt:CD,randFloat:BD,randFloatSpread:QD,seededRandom:ED,degToRad:iD,radToDeg:oD,isPowerOfTwo:TE,ceilPowerOfTwo:Ot,floorPowerOfTwo:Zt,setQuaternionFromProperEuler:tD,normalize:_A,denormalize:qg};class bA{constructor(A=0,I=0){bA.prototype.isVector2=!0,this.x=A,this.y=I}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,I){return this.x=A,this.y=I,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const I=this.x,g=this.y,C=A.elements;return this.x=C[0]*I+C[3]*g+C[6],this.y=C[1]*I+C[4]*g+C[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y;return I*I+g*g}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this}rotateAround(A,I){const g=Math.cos(I),C=Math.sin(I),B=this.x-A.x,Q=this.y-A.y;return this.x=B*g-Q*C+A.x,this.y=B*C+Q*g+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fI{constructor(){fI.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(A,I,g,C,B,Q,E,o,t){const e=this.elements;return e[0]=A,e[1]=C,e[2]=E,e[3]=I,e[4]=B,e[5]=o,e[6]=g,e[7]=Q,e[8]=t,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],this}extractBasis(A,I,g){return A.setFromMatrix3Column(this,0),I.setFromMatrix3Column(this,1),g.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const I=A.elements;return this.set(I[0],I[4],I[8],I[1],I[5],I[9],I[2],I[6],I[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,Q=g[0],E=g[3],o=g[6],t=g[1],e=g[4],a=g[7],D=g[2],s=g[5],w=g[8],n=C[0],h=C[3],r=C[6],M=C[1],S=C[4],l=C[7],N=C[2],F=C[5],d=C[8];return B[0]=Q*n+E*M+o*N,B[3]=Q*h+E*S+o*F,B[6]=Q*r+E*l+o*d,B[1]=t*n+e*M+a*N,B[4]=t*h+e*S+a*F,B[7]=t*r+e*l+a*d,B[2]=D*n+s*M+w*N,B[5]=D*h+s*S+w*F,B[8]=D*r+s*l+w*d,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[3]*=A,I[6]*=A,I[1]*=A,I[4]*=A,I[7]*=A,I[2]*=A,I[5]*=A,I[8]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],Q=A[4],E=A[5],o=A[6],t=A[7],e=A[8];return I*Q*e-I*E*t-g*B*e+g*E*o+C*B*t-C*Q*o}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],Q=A[4],E=A[5],o=A[6],t=A[7],e=A[8],a=e*Q-E*t,D=E*o-e*B,s=t*B-Q*o,w=I*a+g*D+C*s;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const n=1/w;return A[0]=a*n,A[1]=(C*t-e*g)*n,A[2]=(E*g-C*Q)*n,A[3]=D*n,A[4]=(e*I-C*o)*n,A[5]=(C*B-E*I)*n,A[6]=s*n,A[7]=(g*o-t*I)*n,A[8]=(Q*I-g*B)*n,this}transpose(){let A;const I=this.elements;return A=I[1],I[1]=I[3],I[3]=A,A=I[2],I[2]=I[6],I[6]=A,A=I[5],I[5]=I[7],I[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const I=this.elements;return A[0]=I[0],A[1]=I[3],A[2]=I[6],A[3]=I[1],A[4]=I[4],A[5]=I[7],A[6]=I[2],A[7]=I[5],A[8]=I[8],this}setUvTransform(A,I,g,C,B,Q,E){const o=Math.cos(B),t=Math.sin(B);return this.set(g*o,g*t,-g*(o*Q+t*E)+Q+A,-C*t,C*o,-C*(-t*Q+o*E)+E+I,0,0,1),this}scale(A,I){return this.premultiply(CE.makeScale(A,I)),this}rotate(A){return this.premultiply(CE.makeRotation(-A)),this}translate(A,I){return this.premultiply(CE.makeTranslation(A,I)),this}makeTranslation(A,I){return this.set(1,0,A,0,1,I,0,0,1),this}makeRotation(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,g,I,0,0,0,1),this}makeScale(A,I){return this.set(A,0,0,0,I,0,0,0,1),this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<9;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<9;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const CE=new fI;function Wt(i){for(let A=i.length-1;A>=0;--A)if(i[A]>=65535)return!0;return!1}function JB(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}class $g{constructor(A=0,I=0,g=0,C=1){this.isQuaternion=!0,this._x=A,this._y=I,this._z=g,this._w=C}static slerpFlat(A,I,g,C,B,Q,E){let o=g[C+0],t=g[C+1],e=g[C+2],a=g[C+3];const D=B[Q+0],s=B[Q+1],w=B[Q+2],n=B[Q+3];if(E===0){A[I+0]=o,A[I+1]=t,A[I+2]=e,A[I+3]=a;return}if(E===1){A[I+0]=D,A[I+1]=s,A[I+2]=w,A[I+3]=n;return}if(a!==n||o!==D||t!==s||e!==w){let h=1-E;const r=o*D+t*s+e*w+a*n,M=r>=0?1:-1,S=1-r*r;if(S>Number.EPSILON){const N=Math.sqrt(S),F=Math.atan2(N,r*M);h=Math.sin(h*F)/N,E=Math.sin(E*F)/N}const l=E*M;if(o=o*h+D*l,t=t*h+s*l,e=e*h+w*l,a=a*h+n*l,h===1-E){const N=1/Math.sqrt(o*o+t*t+e*e+a*a);o*=N,t*=N,e*=N,a*=N}}A[I]=o,A[I+1]=t,A[I+2]=e,A[I+3]=a}static multiplyQuaternionsFlat(A,I,g,C,B,Q){const E=g[C],o=g[C+1],t=g[C+2],e=g[C+3],a=B[Q],D=B[Q+1],s=B[Q+2],w=B[Q+3];return A[I]=E*w+e*a+o*s-t*D,A[I+1]=o*w+e*D+t*a-E*s,A[I+2]=t*w+e*s+E*D-o*a,A[I+3]=e*w-E*a-o*D-t*s,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,I,g,C){return this._x=A,this._y=I,this._z=g,this._w=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,I){const g=A._x,C=A._y,B=A._z,Q=A._order,E=Math.cos,o=Math.sin,t=E(g/2),e=E(C/2),a=E(B/2),D=o(g/2),s=o(C/2),w=o(B/2);switch(Q){case"XYZ":this._x=D*e*a+t*s*w,this._y=t*s*a-D*e*w,this._z=t*e*w+D*s*a,this._w=t*e*a-D*s*w;break;case"YXZ":this._x=D*e*a+t*s*w,this._y=t*s*a-D*e*w,this._z=t*e*w-D*s*a,this._w=t*e*a+D*s*w;break;case"ZXY":this._x=D*e*a-t*s*w,this._y=t*s*a+D*e*w,this._z=t*e*w+D*s*a,this._w=t*e*a-D*s*w;break;case"ZYX":this._x=D*e*a-t*s*w,this._y=t*s*a+D*e*w,this._z=t*e*w-D*s*a,this._w=t*e*a+D*s*w;break;case"YZX":this._x=D*e*a+t*s*w,this._y=t*s*a+D*e*w,this._z=t*e*w-D*s*a,this._w=t*e*a-D*s*w;break;case"XZY":this._x=D*e*a-t*s*w,this._y=t*s*a-D*e*w,this._z=t*e*w+D*s*a,this._w=t*e*a+D*s*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+Q)}return I!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,I){const g=I/2,C=Math.sin(g);return this._x=A.x*C,this._y=A.y*C,this._z=A.z*C,this._w=Math.cos(g),this._onChangeCallback(),this}setFromRotationMatrix(A){const I=A.elements,g=I[0],C=I[4],B=I[8],Q=I[1],E=I[5],o=I[9],t=I[2],e=I[6],a=I[10],D=g+E+a;if(D>0){const s=.5/Math.sqrt(D+1);this._w=.25/s,this._x=(e-o)*s,this._y=(B-t)*s,this._z=(Q-C)*s}else if(g>E&&g>a){const s=2*Math.sqrt(1+g-E-a);this._w=(e-o)/s,this._x=.25*s,this._y=(C+Q)/s,this._z=(B+t)/s}else if(E>a){const s=2*Math.sqrt(1+E-g-a);this._w=(B-t)/s,this._x=(C+Q)/s,this._y=.25*s,this._z=(o+e)/s}else{const s=2*Math.sqrt(1+a-g-E);this._w=(Q-C)/s,this._x=(B+t)/s,this._y=(o+e)/s,this._z=.25*s}return this._onChangeCallback(),this}setFromUnitVectors(A,I){let g=A.dot(I)+1;return g<Number.EPSILON?(g=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=g):(this._x=0,this._y=-A.z,this._z=A.y,this._w=g)):(this._x=A.y*I.z-A.z*I.y,this._y=A.z*I.x-A.x*I.z,this._z=A.x*I.y-A.y*I.x,this._w=g),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(YI(this.dot(A),-1,1)))}rotateTowards(A,I){const g=this.angleTo(A);if(g===0)return this;const C=Math.min(1,I/g);return this.slerp(A,C),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,I){const g=A._x,C=A._y,B=A._z,Q=A._w,E=I._x,o=I._y,t=I._z,e=I._w;return this._x=g*e+Q*E+C*t-B*o,this._y=C*e+Q*o+B*E-g*t,this._z=B*e+Q*t+g*o-C*E,this._w=Q*e-g*E-C*o-B*t,this._onChangeCallback(),this}slerp(A,I){if(I===0)return this;if(I===1)return this.copy(A);const g=this._x,C=this._y,B=this._z,Q=this._w;let E=Q*A._w+g*A._x+C*A._y+B*A._z;if(E<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,E=-E):this.copy(A),E>=1)return this._w=Q,this._x=g,this._y=C,this._z=B,this;const o=1-E*E;if(o<=Number.EPSILON){const s=1-I;return this._w=s*Q+I*this._w,this._x=s*g+I*this._x,this._y=s*C+I*this._y,this._z=s*B+I*this._z,this.normalize(),this._onChangeCallback(),this}const t=Math.sqrt(o),e=Math.atan2(t,E),a=Math.sin((1-I)*e)/t,D=Math.sin(I*e)/t;return this._w=Q*a+this._w*D,this._x=g*a+this._x*D,this._y=C*a+this._y*D,this._z=B*a+this._z*D,this._onChangeCallback(),this}slerpQuaternions(A,I,g){return this.copy(A).slerp(I,g)}random(){const A=Math.random(),I=Math.sqrt(1-A),g=Math.sqrt(A),C=2*Math.PI*Math.random(),B=2*Math.PI*Math.random();return this.set(I*Math.cos(C),g*Math.sin(B),g*Math.cos(B),I*Math.sin(C))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,I=0){return this._x=A[I],this._y=A[I+1],this._z=A[I+2],this._w=A[I+3],this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._w,A}fromBufferAttribute(A,I){return this._x=A.getX(I),this._y=A.getY(I),this._z=A.getZ(I),this._w=A.getW(I),this}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(A=0,I=0,g=0){q.prototype.isVector3=!0,this.x=A,this.y=I,this.z=g}set(A,I,g){return g===void 0&&(g=this.z),this.x=A,this.y=I,this.z=g,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,I){return this.x=A.x*I.x,this.y=A.y*I.y,this.z=A.z*I.z,this}applyEuler(A){return this.applyQuaternion(Mo.setFromEuler(A))}applyAxisAngle(A,I){return this.applyQuaternion(Mo.setFromAxisAngle(A,I))}applyMatrix3(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[3]*g+B[6]*C,this.y=B[1]*I+B[4]*g+B[7]*C,this.z=B[2]*I+B[5]*g+B[8]*C,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=A.elements,Q=1/(B[3]*I+B[7]*g+B[11]*C+B[15]);return this.x=(B[0]*I+B[4]*g+B[8]*C+B[12])*Q,this.y=(B[1]*I+B[5]*g+B[9]*C+B[13])*Q,this.z=(B[2]*I+B[6]*g+B[10]*C+B[14])*Q,this}applyQuaternion(A){const I=this.x,g=this.y,C=this.z,B=A.x,Q=A.y,E=A.z,o=A.w,t=o*I+Q*C-E*g,e=o*g+E*I-B*C,a=o*C+B*g-Q*I,D=-B*I-Q*g-E*C;return this.x=t*o+D*-B+e*-E-a*-Q,this.y=e*o+D*-Q+a*-B-t*-E,this.z=a*o+D*-E+t*-Q-e*-B,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const I=this.x,g=this.y,C=this.z,B=A.elements;return this.x=B[0]*I+B[4]*g+B[8]*C,this.y=B[1]*I+B[5]*g+B[9]*C,this.z=B[2]*I+B[6]*g+B[10]*C,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,I){const g=A.x,C=A.y,B=A.z,Q=I.x,E=I.y,o=I.z;return this.x=C*o-B*E,this.y=B*Q-g*o,this.z=g*E-C*Q,this}projectOnVector(A){const I=A.lengthSq();if(I===0)return this.set(0,0,0);const g=A.dot(this)/I;return this.copy(A).multiplyScalar(g)}projectOnPlane(A){return BE.copy(this).projectOnVector(A),this.sub(BE)}reflect(A){return this.sub(BE.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const I=Math.sqrt(this.lengthSq()*A.lengthSq());if(I===0)return Math.PI/2;const g=this.dot(A)/I;return Math.acos(YI(g,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const I=this.x-A.x,g=this.y-A.y,C=this.z-A.z;return I*I+g*g+C*C}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,I,g){const C=Math.sin(I)*A;return this.x=C*Math.sin(g),this.y=Math.cos(I)*A,this.z=C*Math.cos(g),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,I,g){return this.x=A*Math.sin(I),this.y=g,this.z=A*Math.cos(I),this}setFromMatrixPosition(A){const I=A.elements;return this.x=I[12],this.y=I[13],this.z=I[14],this}setFromMatrixScale(A){const I=this.setFromMatrixColumn(A,0).length(),g=this.setFromMatrixColumn(A,1).length(),C=this.setFromMatrixColumn(A,2).length();return this.x=I,this.y=g,this.z=C,this}setFromMatrixColumn(A,I){return this.fromArray(A.elements,I*4)}setFromMatrix3Column(A,I){return this.fromArray(A.elements,I*3)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=(Math.random()-.5)*2,I=Math.random()*Math.PI*2,g=Math.sqrt(1-A**2);return this.x=g*Math.cos(I),this.y=g*Math.sin(I),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const BE=new q,Mo=new $g;function OC(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function QE(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const aD=new fI().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),DD=new fI().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Zg=new q;function sD(i){return i.convertSRGBToLinear(),Zg.set(i.r,i.g,i.b).applyMatrix3(DD),i.setRGB(Zg.x,Zg.y,Zg.z)}function hD(i){return Zg.set(i.r,i.g,i.b).applyMatrix3(aD),i.setRGB(Zg.x,Zg.y,Zg.z).convertLinearToSRGB()}const nD={[KB]:i=>i,[hg]:i=>i.convertSRGBToLinear(),[bt]:sD},GD={[KB]:i=>i,[hg]:i=>i.convertLinearToSRGB(),[bt]:hD},qI={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return KB},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,A,I){if(this.enabled===!1||A===I||!A||!I)return i;const g=nD[A],C=GD[I];if(g===void 0||C===void 0)throw new Error(`Unsupported color space conversion, "${A}" to "${I}".`);return C(g(i))},fromWorkingColorSpace:function(i,A){return this.convert(i,this.workingColorSpace,A)},toWorkingColorSpace:function(i,A){return this.convert(i,A,this.workingColorSpace)}};let yC;class vt{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let I;if(A instanceof HTMLCanvasElement)I=A;else{yC===void 0&&(yC=JB("canvas")),yC.width=A.width,yC.height=A.height;const g=yC.getContext("2d");A instanceof ImageData?g.putImageData(A,0,0):g.drawImage(A,0,0,A.width,A.height),I=yC}return I.width>2048||I.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),I.toDataURL("image/jpeg",.6)):I.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const I=JB("canvas");I.width=A.width,I.height=A.height;const g=I.getContext("2d");g.drawImage(A,0,0,A.width,A.height);const C=g.getImageData(0,0,A.width,A.height),B=C.data;for(let Q=0;Q<B.length;Q++)B[Q]=OC(B[Q]/255)*255;return g.putImageData(C,0,0),I}else if(A.data){const I=A.data.slice(0);for(let g=0;g<I.length;g++)I instanceof Uint8Array||I instanceof Uint8ClampedArray?I[g]=Math.floor(OC(I[g]/255)*255):I[g]=OC(I[g]);return{data:I,width:A.width,height:A.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}class Pt{constructor(A=null){this.isSource=!0,this.uuid=ig(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const g={uuid:this.uuid,url:""},C=this.data;if(C!==null){let B;if(Array.isArray(C)){B=[];for(let Q=0,E=C.length;Q<E;Q++)C[Q].isDataTexture?B.push(EE(C[Q].image)):B.push(EE(C[Q]))}else B=EE(C);g.url=B}return I||(A.images[this.uuid]=g),g}}function EE(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vt.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let wD=0;class MI extends cC{constructor(A=MI.DEFAULT_IMAGE,I=MI.DEFAULT_MAPPING,g=XI,C=XI,B=mI,Q=hC,E=_I,o=nC,t=MI.DEFAULT_ANISOTROPY,e=GC){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wD++}),this.uuid=ig(),this.name="",this.source=new Pt(A),this.mipmaps=[],this.mapping=I,this.wrapS=g,this.wrapT=C,this.magFilter=B,this.minFilter=Q,this.anisotropy=t,this.format=E,this.internalFormat=null,this.type=o,this.offset=new bA(0,0),this.repeat=new bA(1,1),this.center=new bA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fI,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=e,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.encoding=A.encoding,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const I=A===void 0||typeof A=="string";if(!I&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const g={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(g.userData=this.userData),I||(A.textures[this.uuid]=g),g}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==Ht)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case Pg:A.x=A.x-Math.floor(A.x);break;case XI:A.x=A.x<0?0:1;break;case yQ:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x);break}if(A.y<0||A.y>1)switch(this.wrapT){case Pg:A.y=A.y-Math.floor(A.y);break;case XI:A.y=A.y<0?0:1;break;case yQ:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y);break}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}}MI.DEFAULT_IMAGE=null;MI.DEFAULT_MAPPING=Ht;MI.DEFAULT_ANISOTROPY=1;class zA{constructor(A=0,I=0,g=0,C=1){zA.prototype.isVector4=!0,this.x=A,this.y=I,this.z=g,this.w=C}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,I,g,C){return this.x=A,this.y=I,this.z=g,this.w=C,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,I){switch(A){case 0:this.x=I;break;case 1:this.y=I;break;case 2:this.z=I;break;case 3:this.w=I;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,I){return this.x=A.x+I.x,this.y=A.y+I.y,this.z=A.z+I.z,this.w=A.w+I.w,this}addScaledVector(A,I){return this.x+=A.x*I,this.y+=A.y*I,this.z+=A.z*I,this.w+=A.w*I,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,I){return this.x=A.x-I.x,this.y=A.y-I.y,this.z=A.z-I.z,this.w=A.w-I.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const I=this.x,g=this.y,C=this.z,B=this.w,Q=A.elements;return this.x=Q[0]*I+Q[4]*g+Q[8]*C+Q[12]*B,this.y=Q[1]*I+Q[5]*g+Q[9]*C+Q[13]*B,this.z=Q[2]*I+Q[6]*g+Q[10]*C+Q[14]*B,this.w=Q[3]*I+Q[7]*g+Q[11]*C+Q[15]*B,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const I=Math.sqrt(1-A.w*A.w);return I<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/I,this.y=A.y/I,this.z=A.z/I),this}setAxisAngleFromRotationMatrix(A){let I,g,C,B;const o=A.elements,t=o[0],e=o[4],a=o[8],D=o[1],s=o[5],w=o[9],n=o[2],h=o[6],r=o[10];if(Math.abs(e-D)<.01&&Math.abs(a-n)<.01&&Math.abs(w-h)<.01){if(Math.abs(e+D)<.1&&Math.abs(a+n)<.1&&Math.abs(w+h)<.1&&Math.abs(t+s+r-3)<.1)return this.set(1,0,0,0),this;I=Math.PI;const S=(t+1)/2,l=(s+1)/2,N=(r+1)/2,F=(e+D)/4,d=(a+n)/4,c=(w+h)/4;return S>l&&S>N?S<.01?(g=0,C=.707106781,B=.707106781):(g=Math.sqrt(S),C=F/g,B=d/g):l>N?l<.01?(g=.707106781,C=0,B=.707106781):(C=Math.sqrt(l),g=F/C,B=c/C):N<.01?(g=.707106781,C=.707106781,B=0):(B=Math.sqrt(N),g=d/B,C=c/B),this.set(g,C,B,I),this}let M=Math.sqrt((h-w)*(h-w)+(a-n)*(a-n)+(D-e)*(D-e));return Math.abs(M)<.001&&(M=1),this.x=(h-w)/M,this.y=(a-n)/M,this.z=(D-e)/M,this.w=Math.acos((t+s+r-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,I){return this.x=Math.max(A.x,Math.min(I.x,this.x)),this.y=Math.max(A.y,Math.min(I.y,this.y)),this.z=Math.max(A.z,Math.min(I.z,this.z)),this.w=Math.max(A.w,Math.min(I.w,this.w)),this}clampScalar(A,I){return this.x=Math.max(A,Math.min(I,this.x)),this.y=Math.max(A,Math.min(I,this.y)),this.z=Math.max(A,Math.min(I,this.z)),this.w=Math.max(A,Math.min(I,this.w)),this}clampLength(A,I){const g=this.length();return this.divideScalar(g||1).multiplyScalar(Math.max(A,Math.min(I,g)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,I){return this.x+=(A.x-this.x)*I,this.y+=(A.y-this.y)*I,this.z+=(A.z-this.z)*I,this.w+=(A.w-this.w)*I,this}lerpVectors(A,I,g){return this.x=A.x+(I.x-A.x)*g,this.y=A.y+(I.y-A.y)*g,this.z=A.z+(I.z-A.z)*g,this.w=A.w+(I.w-A.w)*g,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,I=0){return this.x=A[I],this.y=A[I+1],this.z=A[I+2],this.w=A[I+3],this}toArray(A=[],I=0){return A[I]=this.x,A[I+1]=this.y,A[I+2]=this.z,A[I+3]=this.w,A}fromBufferAttribute(A,I){return this.x=A.getX(I),this.y=A.getY(I),this.z=A.getZ(I),this.w=A.getW(I),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wC extends cC{constructor(A=1,I=1,g={}){super(),this.isWebGLRenderTarget=!0,this.width=A,this.height=I,this.depth=1,this.scissor=new zA(0,0,A,I),this.scissorTest=!1,this.viewport=new zA(0,0,A,I);const C={width:A,height:I,depth:1};this.texture=new MI(C,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=g.generateMipmaps!==void 0?g.generateMipmaps:!1,this.texture.internalFormat=g.internalFormat!==void 0?g.internalFormat:null,this.texture.minFilter=g.minFilter!==void 0?g.minFilter:mI,this.depthBuffer=g.depthBuffer!==void 0?g.depthBuffer:!0,this.stencilBuffer=g.stencilBuffer!==void 0?g.stencilBuffer:!1,this.depthTexture=g.depthTexture!==void 0?g.depthTexture:null,this.samples=g.samples!==void 0?g.samples:0}setSize(A,I,g=1){(this.width!==A||this.height!==I||this.depth!==g)&&(this.width=A,this.height=I,this.depth=g,this.texture.image.width=A,this.texture.image.height=I,this.texture.image.depth=g,this.dispose()),this.viewport.set(0,0,A,I),this.scissor.set(0,0,A,I)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const I=Object.assign({},A.texture.image);return this.texture.source=new Pt(I),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jt extends MI{constructor(A=null,I=1,g=1,C=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=yI,this.minFilter=yI,this.wrapR=XI,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rD extends MI{constructor(A=null,I=1,g=1,C=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:I,height:g,depth:C},this.magFilter=yI,this.minFilter=yI,this.wrapR=XI,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class AB{constructor(A=new q(1/0,1/0,1/0),I=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=I}set(A,I){return this.min.copy(A),this.max.copy(I),this}setFromArray(A){let I=1/0,g=1/0,C=1/0,B=-1/0,Q=-1/0,E=-1/0;for(let o=0,t=A.length;o<t;o+=3){const e=A[o],a=A[o+1],D=A[o+2];e<I&&(I=e),a<g&&(g=a),D<C&&(C=D),e>B&&(B=e),a>Q&&(Q=a),D>E&&(E=D)}return this.min.set(I,g,C),this.max.set(B,Q,E),this}setFromBufferAttribute(A){let I=1/0,g=1/0,C=1/0,B=-1/0,Q=-1/0,E=-1/0;for(let o=0,t=A.count;o<t;o++){const e=A.getX(o),a=A.getY(o),D=A.getZ(o);e<I&&(I=e),a<g&&(g=a),D<C&&(C=D),e>B&&(B=e),a>Q&&(Q=a),D>E&&(E=D)}return this.min.set(I,g,C),this.max.set(B,Q,E),this}setFromPoints(A){this.makeEmpty();for(let I=0,g=A.length;I<g;I++)this.expandByPoint(A[I]);return this}setFromCenterAndSize(A,I){const g=CC.copy(I).multiplyScalar(.5);return this.min.copy(A).sub(g),this.max.copy(A).add(g),this}setFromObject(A,I=!1){return this.makeEmpty(),this.expandByObject(A,I)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,I=!1){A.updateWorldMatrix(!1,!1);const g=A.geometry;if(g!==void 0)if(I&&g.attributes!=null&&g.attributes.position!==void 0){const B=g.attributes.position;for(let Q=0,E=B.count;Q<E;Q++)CC.fromBufferAttribute(B,Q).applyMatrix4(A.matrixWorld),this.expandByPoint(CC)}else g.boundingBox===null&&g.computeBoundingBox(),iE.copy(g.boundingBox),iE.applyMatrix4(A.matrixWorld),this.union(iE);const C=A.children;for(let B=0,Q=C.length;B<Q;B++)this.expandByObject(C[B],I);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,I){return I.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,CC),CC.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let I,g;return A.normal.x>0?(I=A.normal.x*this.min.x,g=A.normal.x*this.max.x):(I=A.normal.x*this.max.x,g=A.normal.x*this.min.x),A.normal.y>0?(I+=A.normal.y*this.min.y,g+=A.normal.y*this.max.y):(I+=A.normal.y*this.max.y,g+=A.normal.y*this.min.y),A.normal.z>0?(I+=A.normal.z*this.min.z,g+=A.normal.z*this.max.z):(I+=A.normal.z*this.max.z,g+=A.normal.z*this.min.z),I<=-A.constant&&g>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(oB),WB.subVectors(this.max,oB),MC.subVectors(A.a,oB),lC.subVectors(A.b,oB),UC.subVectors(A.c,oB),fg.subVectors(lC,MC),Hg.subVectors(UC,lC),BC.subVectors(MC,UC);let I=[0,-fg.z,fg.y,0,-Hg.z,Hg.y,0,-BC.z,BC.y,fg.z,0,-fg.x,Hg.z,0,-Hg.x,BC.z,0,-BC.x,-fg.y,fg.x,0,-Hg.y,Hg.x,0,-BC.y,BC.x,0];return!oE(I,MC,lC,UC,WB)||(I=[1,0,0,0,1,0,0,0,1],!oE(I,MC,lC,UC,WB))?!1:(vB.crossVectors(fg,Hg),I=[vB.x,vB.y,vB.z],oE(I,MC,lC,UC,WB))}clampPoint(A,I){return I.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,CC).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=this.getSize(CC).length()*.5),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()?this:(Mg[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),Mg[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),Mg[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),Mg[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),Mg[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),Mg[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),Mg[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),Mg[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(Mg),this)}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const Mg=[new q,new q,new q,new q,new q,new q,new q,new q],CC=new q,iE=new AB,MC=new q,lC=new q,UC=new q,fg=new q,Hg=new q,BC=new q,oB=new q,WB=new q,vB=new q,QC=new q;function oE(i,A,I,g,C){for(let B=0,Q=i.length-3;B<=Q;B+=3){QC.fromArray(i,B);const E=C.x*Math.abs(QC.x)+C.y*Math.abs(QC.y)+C.z*Math.abs(QC.z),o=A.dot(QC),t=I.dot(QC),e=g.dot(QC);if(Math.max(-Math.max(o,t,e),Math.min(o,t,e))>E)return!1}return!0}const SD=new AB,tB=new q,tE=new q;class IB{constructor(A=new q,I=-1){this.center=A,this.radius=I}set(A,I){return this.center.copy(A),this.radius=I,this}setFromPoints(A,I){const g=this.center;I!==void 0?g.copy(I):SD.setFromPoints(A).getCenter(g);let C=0;for(let B=0,Q=A.length;B<Q;B++)C=Math.max(C,g.distanceToSquared(A[B]));return this.radius=Math.sqrt(C),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const I=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=I*I}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,I){const g=this.center.distanceToSquared(A);return I.copy(A),g>this.radius*this.radius&&(I.sub(this.center).normalize(),I.multiplyScalar(this.radius).add(this.center)),I}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;tB.subVectors(A,this.center);const I=tB.lengthSq();if(I>this.radius*this.radius){const g=Math.sqrt(I),C=(g-this.radius)*.5;this.center.addScaledVector(tB,C/g),this.radius+=C}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(tE.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint(tB.copy(A.center).add(tE)),this.expandByPoint(tB.copy(A.center).sub(tE))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const lg=new q,eE=new q,PB=new q,ug=new q,aE=new q,jB=new q,DE=new q;class YQ{constructor(A=new q,I=new q(0,0,-1)){this.origin=A,this.direction=I}set(A,I){return this.origin.copy(A),this.direction.copy(I),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,I){return I.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,lg)),this}closestPointToPoint(A,I){I.subVectors(A,this.origin);const g=I.dot(this.direction);return g<0?I.copy(this.origin):I.copy(this.origin).addScaledVector(this.direction,g)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const I=lg.subVectors(A,this.origin).dot(this.direction);return I<0?this.origin.distanceToSquared(A):(lg.copy(this.origin).addScaledVector(this.direction,I),lg.distanceToSquared(A))}distanceSqToSegment(A,I,g,C){eE.copy(A).add(I).multiplyScalar(.5),PB.copy(I).sub(A).normalize(),ug.copy(this.origin).sub(eE);const B=A.distanceTo(I)*.5,Q=-this.direction.dot(PB),E=ug.dot(this.direction),o=-ug.dot(PB),t=ug.lengthSq(),e=Math.abs(1-Q*Q);let a,D,s,w;if(e>0)if(a=Q*o-E,D=Q*E-o,w=B*e,a>=0)if(D>=-w)if(D<=w){const n=1/e;a*=n,D*=n,s=a*(a+Q*D+2*E)+D*(Q*a+D+2*o)+t}else D=B,a=Math.max(0,-(Q*D+E)),s=-a*a+D*(D+2*o)+t;else D=-B,a=Math.max(0,-(Q*D+E)),s=-a*a+D*(D+2*o)+t;else D<=-w?(a=Math.max(0,-(-Q*B+E)),D=a>0?-B:Math.min(Math.max(-B,-o),B),s=-a*a+D*(D+2*o)+t):D<=w?(a=0,D=Math.min(Math.max(-B,-o),B),s=D*(D+2*o)+t):(a=Math.max(0,-(Q*B+E)),D=a>0?B:Math.min(Math.max(-B,-o),B),s=-a*a+D*(D+2*o)+t);else D=Q>0?-B:B,a=Math.max(0,-(Q*D+E)),s=-a*a+D*(D+2*o)+t;return g&&g.copy(this.origin).addScaledVector(this.direction,a),C&&C.copy(eE).addScaledVector(PB,D),s}intersectSphere(A,I){lg.subVectors(A.center,this.origin);const g=lg.dot(this.direction),C=lg.dot(lg)-g*g,B=A.radius*A.radius;if(C>B)return null;const Q=Math.sqrt(B-C),E=g-Q,o=g+Q;return o<0?null:E<0?this.at(o,I):this.at(E,I)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const I=A.normal.dot(this.direction);if(I===0)return A.distanceToPoint(this.origin)===0?0:null;const g=-(this.origin.dot(A.normal)+A.constant)/I;return g>=0?g:null}intersectPlane(A,I){const g=this.distanceToPlane(A);return g===null?null:this.at(g,I)}intersectsPlane(A){const I=A.distanceToPoint(this.origin);return I===0||A.normal.dot(this.direction)*I<0}intersectBox(A,I){let g,C,B,Q,E,o;const t=1/this.direction.x,e=1/this.direction.y,a=1/this.direction.z,D=this.origin;return t>=0?(g=(A.min.x-D.x)*t,C=(A.max.x-D.x)*t):(g=(A.max.x-D.x)*t,C=(A.min.x-D.x)*t),e>=0?(B=(A.min.y-D.y)*e,Q=(A.max.y-D.y)*e):(B=(A.max.y-D.y)*e,Q=(A.min.y-D.y)*e),g>Q||B>C||((B>g||isNaN(g))&&(g=B),(Q<C||isNaN(C))&&(C=Q),a>=0?(E=(A.min.z-D.z)*a,o=(A.max.z-D.z)*a):(E=(A.max.z-D.z)*a,o=(A.min.z-D.z)*a),g>o||E>C)||((E>g||g!==g)&&(g=E),(o<C||C!==C)&&(C=o),C<0)?null:this.at(g>=0?g:C,I)}intersectsBox(A){return this.intersectBox(A,lg)!==null}intersectTriangle(A,I,g,C,B){aE.subVectors(I,A),jB.subVectors(g,A),DE.crossVectors(aE,jB);let Q=this.direction.dot(DE),E;if(Q>0){if(C)return null;E=1}else if(Q<0)E=-1,Q=-Q;else return null;ug.subVectors(this.origin,A);const o=E*this.direction.dot(jB.crossVectors(ug,jB));if(o<0)return null;const t=E*this.direction.dot(aE.cross(ug));if(t<0||o+t>Q)return null;const e=-E*ug.dot(DE);return e<0?null:this.at(e/Q,B)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class LA{constructor(){LA.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(A,I,g,C,B,Q,E,o,t,e,a,D,s,w,n,h){const r=this.elements;return r[0]=A,r[4]=I,r[8]=g,r[12]=C,r[1]=B,r[5]=Q,r[9]=E,r[13]=o,r[2]=t,r[6]=e,r[10]=a,r[14]=D,r[3]=s,r[7]=w,r[11]=n,r[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new LA().fromArray(this.elements)}copy(A){const I=this.elements,g=A.elements;return I[0]=g[0],I[1]=g[1],I[2]=g[2],I[3]=g[3],I[4]=g[4],I[5]=g[5],I[6]=g[6],I[7]=g[7],I[8]=g[8],I[9]=g[9],I[10]=g[10],I[11]=g[11],I[12]=g[12],I[13]=g[13],I[14]=g[14],I[15]=g[15],this}copyPosition(A){const I=this.elements,g=A.elements;return I[12]=g[12],I[13]=g[13],I[14]=g[14],this}setFromMatrix3(A){const I=A.elements;return this.set(I[0],I[3],I[6],0,I[1],I[4],I[7],0,I[2],I[5],I[8],0,0,0,0,1),this}extractBasis(A,I,g){return A.setFromMatrixColumn(this,0),I.setFromMatrixColumn(this,1),g.setFromMatrixColumn(this,2),this}makeBasis(A,I,g){return this.set(A.x,I.x,g.x,0,A.y,I.y,g.y,0,A.z,I.z,g.z,0,0,0,0,1),this}extractRotation(A){const I=this.elements,g=A.elements,C=1/KC.setFromMatrixColumn(A,0).length(),B=1/KC.setFromMatrixColumn(A,1).length(),Q=1/KC.setFromMatrixColumn(A,2).length();return I[0]=g[0]*C,I[1]=g[1]*C,I[2]=g[2]*C,I[3]=0,I[4]=g[4]*B,I[5]=g[5]*B,I[6]=g[6]*B,I[7]=0,I[8]=g[8]*Q,I[9]=g[9]*Q,I[10]=g[10]*Q,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromEuler(A){const I=this.elements,g=A.x,C=A.y,B=A.z,Q=Math.cos(g),E=Math.sin(g),o=Math.cos(C),t=Math.sin(C),e=Math.cos(B),a=Math.sin(B);if(A.order==="XYZ"){const D=Q*e,s=Q*a,w=E*e,n=E*a;I[0]=o*e,I[4]=-o*a,I[8]=t,I[1]=s+w*t,I[5]=D-n*t,I[9]=-E*o,I[2]=n-D*t,I[6]=w+s*t,I[10]=Q*o}else if(A.order==="YXZ"){const D=o*e,s=o*a,w=t*e,n=t*a;I[0]=D+n*E,I[4]=w*E-s,I[8]=Q*t,I[1]=Q*a,I[5]=Q*e,I[9]=-E,I[2]=s*E-w,I[6]=n+D*E,I[10]=Q*o}else if(A.order==="ZXY"){const D=o*e,s=o*a,w=t*e,n=t*a;I[0]=D-n*E,I[4]=-Q*a,I[8]=w+s*E,I[1]=s+w*E,I[5]=Q*e,I[9]=n-D*E,I[2]=-Q*t,I[6]=E,I[10]=Q*o}else if(A.order==="ZYX"){const D=Q*e,s=Q*a,w=E*e,n=E*a;I[0]=o*e,I[4]=w*t-s,I[8]=D*t+n,I[1]=o*a,I[5]=n*t+D,I[9]=s*t-w,I[2]=-t,I[6]=E*o,I[10]=Q*o}else if(A.order==="YZX"){const D=Q*o,s=Q*t,w=E*o,n=E*t;I[0]=o*e,I[4]=n-D*a,I[8]=w*a+s,I[1]=a,I[5]=Q*e,I[9]=-E*e,I[2]=-t*e,I[6]=s*a+w,I[10]=D-n*a}else if(A.order==="XZY"){const D=Q*o,s=Q*t,w=E*o,n=E*t;I[0]=o*e,I[4]=-a,I[8]=t*e,I[1]=D*a+n,I[5]=Q*e,I[9]=s*a-w,I[2]=w*a-s,I[6]=E*e,I[10]=n*a+D}return I[3]=0,I[7]=0,I[11]=0,I[12]=0,I[13]=0,I[14]=0,I[15]=1,this}makeRotationFromQuaternion(A){return this.compose(cD,A,kD)}lookAt(A,I,g){const C=this.elements;return bI.subVectors(A,I),bI.lengthSq()===0&&(bI.z=1),bI.normalize(),mg.crossVectors(g,bI),mg.lengthSq()===0&&(Math.abs(g.z)===1?bI.x+=1e-4:bI.z+=1e-4,bI.normalize(),mg.crossVectors(g,bI)),mg.normalize(),VB.crossVectors(bI,mg),C[0]=mg.x,C[4]=VB.x,C[8]=bI.x,C[1]=mg.y,C[5]=VB.y,C[9]=bI.y,C[2]=mg.z,C[6]=VB.z,C[10]=bI.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,I){const g=A.elements,C=I.elements,B=this.elements,Q=g[0],E=g[4],o=g[8],t=g[12],e=g[1],a=g[5],D=g[9],s=g[13],w=g[2],n=g[6],h=g[10],r=g[14],M=g[3],S=g[7],l=g[11],N=g[15],F=C[0],d=C[4],c=C[8],K=C[12],H=C[1],P=C[5],X=C[9],T=C[13],L=C[2],x=C[6],z=C[10],IA=C[14],j=C[3],_=C[7],gA=C[11],eA=C[15];return B[0]=Q*F+E*H+o*L+t*j,B[4]=Q*d+E*P+o*x+t*_,B[8]=Q*c+E*X+o*z+t*gA,B[12]=Q*K+E*T+o*IA+t*eA,B[1]=e*F+a*H+D*L+s*j,B[5]=e*d+a*P+D*x+s*_,B[9]=e*c+a*X+D*z+s*gA,B[13]=e*K+a*T+D*IA+s*eA,B[2]=w*F+n*H+h*L+r*j,B[6]=w*d+n*P+h*x+r*_,B[10]=w*c+n*X+h*z+r*gA,B[14]=w*K+n*T+h*IA+r*eA,B[3]=M*F+S*H+l*L+N*j,B[7]=M*d+S*P+l*x+N*_,B[11]=M*c+S*X+l*z+N*gA,B[15]=M*K+S*T+l*IA+N*eA,this}multiplyScalar(A){const I=this.elements;return I[0]*=A,I[4]*=A,I[8]*=A,I[12]*=A,I[1]*=A,I[5]*=A,I[9]*=A,I[13]*=A,I[2]*=A,I[6]*=A,I[10]*=A,I[14]*=A,I[3]*=A,I[7]*=A,I[11]*=A,I[15]*=A,this}determinant(){const A=this.elements,I=A[0],g=A[4],C=A[8],B=A[12],Q=A[1],E=A[5],o=A[9],t=A[13],e=A[2],a=A[6],D=A[10],s=A[14],w=A[3],n=A[7],h=A[11],r=A[15];return w*(+B*o*a-C*t*a-B*E*D+g*t*D+C*E*s-g*o*s)+n*(+I*o*s-I*t*D+B*Q*D-C*Q*s+C*t*e-B*o*e)+h*(+I*t*a-I*E*s-B*Q*a+g*Q*s+B*E*e-g*t*e)+r*(-C*E*e-I*o*a+I*E*D+C*Q*a-g*Q*D+g*o*e)}transpose(){const A=this.elements;let I;return I=A[1],A[1]=A[4],A[4]=I,I=A[2],A[2]=A[8],A[8]=I,I=A[6],A[6]=A[9],A[9]=I,I=A[3],A[3]=A[12],A[12]=I,I=A[7],A[7]=A[13],A[13]=I,I=A[11],A[11]=A[14],A[14]=I,this}setPosition(A,I,g){const C=this.elements;return A.isVector3?(C[12]=A.x,C[13]=A.y,C[14]=A.z):(C[12]=A,C[13]=I,C[14]=g),this}invert(){const A=this.elements,I=A[0],g=A[1],C=A[2],B=A[3],Q=A[4],E=A[5],o=A[6],t=A[7],e=A[8],a=A[9],D=A[10],s=A[11],w=A[12],n=A[13],h=A[14],r=A[15],M=a*h*t-n*D*t+n*o*s-E*h*s-a*o*r+E*D*r,S=w*D*t-e*h*t-w*o*s+Q*h*s+e*o*r-Q*D*r,l=e*n*t-w*a*t+w*E*s-Q*n*s-e*E*r+Q*a*r,N=w*a*o-e*n*o-w*E*D+Q*n*D+e*E*h-Q*a*h,F=I*M+g*S+C*l+B*N;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const d=1/F;return A[0]=M*d,A[1]=(n*D*B-a*h*B-n*C*s+g*h*s+a*C*r-g*D*r)*d,A[2]=(E*h*B-n*o*B+n*C*t-g*h*t-E*C*r+g*o*r)*d,A[3]=(a*o*B-E*D*B-a*C*t+g*D*t+E*C*s-g*o*s)*d,A[4]=S*d,A[5]=(e*h*B-w*D*B+w*C*s-I*h*s-e*C*r+I*D*r)*d,A[6]=(w*o*B-Q*h*B-w*C*t+I*h*t+Q*C*r-I*o*r)*d,A[7]=(Q*D*B-e*o*B+e*C*t-I*D*t-Q*C*s+I*o*s)*d,A[8]=l*d,A[9]=(w*a*B-e*n*B-w*g*s+I*n*s+e*g*r-I*a*r)*d,A[10]=(Q*n*B-w*E*B+w*g*t-I*n*t-Q*g*r+I*E*r)*d,A[11]=(e*E*B-Q*a*B-e*g*t+I*a*t+Q*g*s-I*E*s)*d,A[12]=N*d,A[13]=(e*n*C-w*a*C+w*g*D-I*n*D-e*g*h+I*a*h)*d,A[14]=(w*E*C-Q*n*C-w*g*o+I*n*o+Q*g*h-I*E*h)*d,A[15]=(Q*a*C-e*E*C+e*g*o-I*a*o-Q*g*D+I*E*D)*d,this}scale(A){const I=this.elements,g=A.x,C=A.y,B=A.z;return I[0]*=g,I[4]*=C,I[8]*=B,I[1]*=g,I[5]*=C,I[9]*=B,I[2]*=g,I[6]*=C,I[10]*=B,I[3]*=g,I[7]*=C,I[11]*=B,this}getMaxScaleOnAxis(){const A=this.elements,I=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],g=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],C=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(I,g,C))}makeTranslation(A,I,g){return this.set(1,0,0,A,0,1,0,I,0,0,1,g,0,0,0,1),this}makeRotationX(A){const I=Math.cos(A),g=Math.sin(A);return this.set(1,0,0,0,0,I,-g,0,0,g,I,0,0,0,0,1),this}makeRotationY(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,0,g,0,0,1,0,0,-g,0,I,0,0,0,0,1),this}makeRotationZ(A){const I=Math.cos(A),g=Math.sin(A);return this.set(I,-g,0,0,g,I,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,I){const g=Math.cos(I),C=Math.sin(I),B=1-g,Q=A.x,E=A.y,o=A.z,t=B*Q,e=B*E;return this.set(t*Q+g,t*E-C*o,t*o+C*E,0,t*E+C*o,e*E+g,e*o-C*Q,0,t*o-C*E,e*o+C*Q,B*o*o+g,0,0,0,0,1),this}makeScale(A,I,g){return this.set(A,0,0,0,0,I,0,0,0,0,g,0,0,0,0,1),this}makeShear(A,I,g,C,B,Q){return this.set(1,g,B,0,A,1,Q,0,I,C,1,0,0,0,0,1),this}compose(A,I,g){const C=this.elements,B=I._x,Q=I._y,E=I._z,o=I._w,t=B+B,e=Q+Q,a=E+E,D=B*t,s=B*e,w=B*a,n=Q*e,h=Q*a,r=E*a,M=o*t,S=o*e,l=o*a,N=g.x,F=g.y,d=g.z;return C[0]=(1-(n+r))*N,C[1]=(s+l)*N,C[2]=(w-S)*N,C[3]=0,C[4]=(s-l)*F,C[5]=(1-(D+r))*F,C[6]=(h+M)*F,C[7]=0,C[8]=(w+S)*d,C[9]=(h-M)*d,C[10]=(1-(D+n))*d,C[11]=0,C[12]=A.x,C[13]=A.y,C[14]=A.z,C[15]=1,this}decompose(A,I,g){const C=this.elements;let B=KC.set(C[0],C[1],C[2]).length();const Q=KC.set(C[4],C[5],C[6]).length(),E=KC.set(C[8],C[9],C[10]).length();this.determinant()<0&&(B=-B),A.x=C[12],A.y=C[13],A.z=C[14],gg.copy(this);const t=1/B,e=1/Q,a=1/E;return gg.elements[0]*=t,gg.elements[1]*=t,gg.elements[2]*=t,gg.elements[4]*=e,gg.elements[5]*=e,gg.elements[6]*=e,gg.elements[8]*=a,gg.elements[9]*=a,gg.elements[10]*=a,I.setFromRotationMatrix(gg),g.x=B,g.y=Q,g.z=E,this}makePerspective(A,I,g,C,B,Q){const E=this.elements,o=2*B/(I-A),t=2*B/(g-C),e=(I+A)/(I-A),a=(g+C)/(g-C),D=-(Q+B)/(Q-B),s=-2*Q*B/(Q-B);return E[0]=o,E[4]=0,E[8]=e,E[12]=0,E[1]=0,E[5]=t,E[9]=a,E[13]=0,E[2]=0,E[6]=0,E[10]=D,E[14]=s,E[3]=0,E[7]=0,E[11]=-1,E[15]=0,this}makeOrthographic(A,I,g,C,B,Q){const E=this.elements,o=1/(I-A),t=1/(g-C),e=1/(Q-B),a=(I+A)*o,D=(g+C)*t,s=(Q+B)*e;return E[0]=2*o,E[4]=0,E[8]=0,E[12]=-a,E[1]=0,E[5]=2*t,E[9]=0,E[13]=-D,E[2]=0,E[6]=0,E[10]=-2*e,E[14]=-s,E[3]=0,E[7]=0,E[11]=0,E[15]=1,this}equals(A){const I=this.elements,g=A.elements;for(let C=0;C<16;C++)if(I[C]!==g[C])return!1;return!0}fromArray(A,I=0){for(let g=0;g<16;g++)this.elements[g]=A[g+I];return this}toArray(A=[],I=0){const g=this.elements;return A[I]=g[0],A[I+1]=g[1],A[I+2]=g[2],A[I+3]=g[3],A[I+4]=g[4],A[I+5]=g[5],A[I+6]=g[6],A[I+7]=g[7],A[I+8]=g[8],A[I+9]=g[9],A[I+10]=g[10],A[I+11]=g[11],A[I+12]=g[12],A[I+13]=g[13],A[I+14]=g[14],A[I+15]=g[15],A}}const KC=new q,gg=new LA,cD=new q(0,0,0),kD=new q(1,1,1),mg=new q,VB=new q,bI=new q,lo=new LA,Uo=new $g;class TB{constructor(A=0,I=0,g=0,C=TB.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=I,this._z=g,this._order=C}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,I,g,C=this._order){return this._x=A,this._y=I,this._z=g,this._order=C,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,I=this._order,g=!0){const C=A.elements,B=C[0],Q=C[4],E=C[8],o=C[1],t=C[5],e=C[9],a=C[2],D=C[6],s=C[10];switch(I){case"XYZ":this._y=Math.asin(YI(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(-e,s),this._z=Math.atan2(-Q,B)):(this._x=Math.atan2(D,t),this._z=0);break;case"YXZ":this._x=Math.asin(-YI(e,-1,1)),Math.abs(e)<.9999999?(this._y=Math.atan2(E,s),this._z=Math.atan2(o,t)):(this._y=Math.atan2(-a,B),this._z=0);break;case"ZXY":this._x=Math.asin(YI(D,-1,1)),Math.abs(D)<.9999999?(this._y=Math.atan2(-a,s),this._z=Math.atan2(-Q,t)):(this._y=0,this._z=Math.atan2(o,B));break;case"ZYX":this._y=Math.asin(-YI(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(D,s),this._z=Math.atan2(o,B)):(this._x=0,this._z=Math.atan2(-Q,t));break;case"YZX":this._z=Math.asin(YI(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-e,t),this._y=Math.atan2(-a,B)):(this._x=0,this._y=Math.atan2(E,s));break;case"XZY":this._z=Math.asin(-YI(Q,-1,1)),Math.abs(Q)<.9999999?(this._x=Math.atan2(D,t),this._y=Math.atan2(E,B)):(this._x=Math.atan2(-e,s),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+I)}return this._order=I,g===!0&&this._onChangeCallback(),this}setFromQuaternion(A,I,g){return lo.makeRotationFromQuaternion(A),this.setFromRotationMatrix(lo,I,g)}setFromVector3(A,I=this._order){return this.set(A.x,A.y,A.z,I)}reorder(A){return Uo.setFromEuler(this),this.setFromQuaternion(Uo,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],I=0){return A[I]=this._x,A[I+1]=this._y,A[I+2]=this._z,A[I+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}TB.DEFAULT_ORDER="XYZ";class Ei{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!==0}isEnabled(A){return(this.mask&(1<<A|0))!==0}}let yD=0;const Ko=new q,NC=new $g,Ug=new LA,XB=new q,eB=new q,MD=new q,lD=new $g,No=new q(1,0,0),Jo=new q(0,1,0),Fo=new q(0,0,1),UD={type:"added"},Ro={type:"removed"};class QI extends cC{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yD++}),this.uuid=ig(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=QI.DEFAULT_UP.clone();const A=new q,I=new TB,g=new $g,C=new q(1,1,1);function B(){g.setFromEuler(I,!1)}function Q(){I.setFromQuaternion(g,void 0,!1)}I._onChange(B),g._onChange(Q),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:I},quaternion:{configurable:!0,enumerable:!0,value:g},scale:{configurable:!0,enumerable:!0,value:C},modelViewMatrix:{value:new LA},normalMatrix:{value:new fI}}),this.matrix=new LA,this.matrixWorld=new LA,this.matrixAutoUpdate=QI.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=QI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ei,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,I){this.quaternion.setFromAxisAngle(A,I)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,I){return NC.setFromAxisAngle(A,I),this.quaternion.multiply(NC),this}rotateOnWorldAxis(A,I){return NC.setFromAxisAngle(A,I),this.quaternion.premultiply(NC),this}rotateX(A){return this.rotateOnAxis(No,A)}rotateY(A){return this.rotateOnAxis(Jo,A)}rotateZ(A){return this.rotateOnAxis(Fo,A)}translateOnAxis(A,I){return Ko.copy(A).applyQuaternion(this.quaternion),this.position.add(Ko.multiplyScalar(I)),this}translateX(A){return this.translateOnAxis(No,A)}translateY(A){return this.translateOnAxis(Jo,A)}translateZ(A){return this.translateOnAxis(Fo,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(Ug.copy(this.matrixWorld).invert())}lookAt(A,I,g){A.isVector3?XB.copy(A):XB.set(A,I,g);const C=this.parent;this.updateWorldMatrix(!0,!1),eB.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ug.lookAt(eB,XB,this.up):Ug.lookAt(XB,eB,this.up),this.quaternion.setFromRotationMatrix(Ug),C&&(Ug.extractRotation(C.matrixWorld),NC.setFromRotationMatrix(Ug),this.quaternion.premultiply(NC.invert()))}add(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.add(arguments[I]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(UD)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.remove(arguments[g]);return this}const I=this.children.indexOf(A);return I!==-1&&(A.parent=null,this.children.splice(I,1),A.dispatchEvent(Ro)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){const I=this.children[A];I.parent=null,I.dispatchEvent(Ro)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),Ug.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),Ug.multiply(A.parent.matrixWorld)),A.applyMatrix4(Ug),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,I){if(this[A]===I)return this;for(let g=0,C=this.children.length;g<C;g++){const Q=this.children[g].getObjectByProperty(A,I);if(Q!==void 0)return Q}}getObjectsByProperty(A,I){let g=[];this[A]===I&&g.push(this);for(let C=0,B=this.children.length;C<B;C++){const Q=this.children[C].getObjectsByProperty(A,I);Q.length>0&&(g=g.concat(Q))}return g}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eB,A,MD),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eB,lD,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(I[8],I[9],I[10]).normalize()}raycast(){}traverse(A){A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const I=this.children;for(let g=0,C=I.length;g<C;g++)I[g].traverseVisible(A)}traverseAncestors(A){const I=this.parent;I!==null&&(A(I),I.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const I=this.children;for(let g=0,C=I.length;g<C;g++){const B=I[g];(B.matrixWorldAutoUpdate===!0||A===!0)&&B.updateMatrixWorld(A)}}updateWorldMatrix(A,I){const g=this.parent;if(A===!0&&g!==null&&g.matrixWorldAutoUpdate===!0&&g.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),I===!0){const C=this.children;for(let B=0,Q=C.length;B<Q;B++){const E=C[B];E.matrixWorldAutoUpdate===!0&&E.updateWorldMatrix(!1,!0)}}}toJSON(A){const I=A===void 0||typeof A=="string",g={};I&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},g.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const C={};C.uuid=this.uuid,C.type=this.type,this.name!==""&&(C.name=this.name),this.castShadow===!0&&(C.castShadow=!0),this.receiveShadow===!0&&(C.receiveShadow=!0),this.visible===!1&&(C.visible=!1),this.frustumCulled===!1&&(C.frustumCulled=!1),this.renderOrder!==0&&(C.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(C.userData=this.userData),C.layers=this.layers.mask,C.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(C.matrixAutoUpdate=!1),this.isInstancedMesh&&(C.type="InstancedMesh",C.count=this.count,C.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(C.instanceColor=this.instanceColor.toJSON()));function B(E,o){return E[o.uuid]===void 0&&(E[o.uuid]=o.toJSON(A)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?C.background=this.background.toJSON():this.background.isTexture&&(C.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(C.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){C.geometry=B(A.geometries,this.geometry);const E=this.geometry.parameters;if(E!==void 0&&E.shapes!==void 0){const o=E.shapes;if(Array.isArray(o))for(let t=0,e=o.length;t<e;t++){const a=o[t];B(A.shapes,a)}else B(A.shapes,o)}}if(this.isSkinnedMesh&&(C.bindMode=this.bindMode,C.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(B(A.skeletons,this.skeleton),C.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const E=[];for(let o=0,t=this.material.length;o<t;o++)E.push(B(A.materials,this.material[o]));C.material=E}else C.material=B(A.materials,this.material);if(this.children.length>0){C.children=[];for(let E=0;E<this.children.length;E++)C.children.push(this.children[E].toJSON(A).object)}if(this.animations.length>0){C.animations=[];for(let E=0;E<this.animations.length;E++){const o=this.animations[E];C.animations.push(B(A.animations,o))}}if(I){const E=Q(A.geometries),o=Q(A.materials),t=Q(A.textures),e=Q(A.images),a=Q(A.shapes),D=Q(A.skeletons),s=Q(A.animations),w=Q(A.nodes);E.length>0&&(g.geometries=E),o.length>0&&(g.materials=o),t.length>0&&(g.textures=t),e.length>0&&(g.images=e),a.length>0&&(g.shapes=a),D.length>0&&(g.skeletons=D),s.length>0&&(g.animations=s),w.length>0&&(g.nodes=w)}return g.object=C,g;function Q(E){const o=[];for(const t in E){const e=E[t];delete e.metadata,o.push(e)}return o}}clone(A){return new this.constructor().copy(this,A)}copy(A,I=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.userData=JSON.parse(JSON.stringify(A.userData)),I===!0)for(let g=0;g<A.children.length;g++){const C=A.children[g];this.add(C.clone())}return this}}QI.DEFAULT_UP=new q(0,1,0);QI.DEFAULT_MATRIX_AUTO_UPDATE=!0;QI.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cg=new q,Kg=new q,sE=new q,Ng=new q,JC=new q,FC=new q,qo=new q,hE=new q,nE=new q,GE=new q;class Fg{constructor(A=new q,I=new q,g=new q){this.a=A,this.b=I,this.c=g}static getNormal(A,I,g,C){C.subVectors(g,I),Cg.subVectors(A,I),C.cross(Cg);const B=C.lengthSq();return B>0?C.multiplyScalar(1/Math.sqrt(B)):C.set(0,0,0)}static getBarycoord(A,I,g,C,B){Cg.subVectors(C,I),Kg.subVectors(g,I),sE.subVectors(A,I);const Q=Cg.dot(Cg),E=Cg.dot(Kg),o=Cg.dot(sE),t=Kg.dot(Kg),e=Kg.dot(sE),a=Q*t-E*E;if(a===0)return B.set(-2,-1,-1);const D=1/a,s=(t*o-E*e)*D,w=(Q*e-E*o)*D;return B.set(1-s-w,w,s)}static containsPoint(A,I,g,C){return this.getBarycoord(A,I,g,C,Ng),Ng.x>=0&&Ng.y>=0&&Ng.x+Ng.y<=1}static getUV(A,I,g,C,B,Q,E,o){return this.getBarycoord(A,I,g,C,Ng),o.set(0,0),o.addScaledVector(B,Ng.x),o.addScaledVector(Q,Ng.y),o.addScaledVector(E,Ng.z),o}static isFrontFacing(A,I,g,C){return Cg.subVectors(g,I),Kg.subVectors(A,I),Cg.cross(Kg).dot(C)<0}set(A,I,g){return this.a.copy(A),this.b.copy(I),this.c.copy(g),this}setFromPointsAndIndices(A,I,g,C){return this.a.copy(A[I]),this.b.copy(A[g]),this.c.copy(A[C]),this}setFromAttributeAndIndices(A,I,g,C){return this.a.fromBufferAttribute(A,I),this.b.fromBufferAttribute(A,g),this.c.fromBufferAttribute(A,C),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return Cg.subVectors(this.c,this.b),Kg.subVectors(this.a,this.b),Cg.cross(Kg).length()*.5}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return Fg.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,I){return Fg.getBarycoord(A,this.a,this.b,this.c,I)}getUV(A,I,g,C,B){return Fg.getUV(A,this.a,this.b,this.c,I,g,C,B)}containsPoint(A){return Fg.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return Fg.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,I){const g=this.a,C=this.b,B=this.c;let Q,E;JC.subVectors(C,g),FC.subVectors(B,g),hE.subVectors(A,g);const o=JC.dot(hE),t=FC.dot(hE);if(o<=0&&t<=0)return I.copy(g);nE.subVectors(A,C);const e=JC.dot(nE),a=FC.dot(nE);if(e>=0&&a<=e)return I.copy(C);const D=o*a-e*t;if(D<=0&&o>=0&&e<=0)return Q=o/(o-e),I.copy(g).addScaledVector(JC,Q);GE.subVectors(A,B);const s=JC.dot(GE),w=FC.dot(GE);if(w>=0&&s<=w)return I.copy(B);const n=s*t-o*w;if(n<=0&&t>=0&&w<=0)return E=t/(t-w),I.copy(g).addScaledVector(FC,E);const h=e*w-s*a;if(h<=0&&a-e>=0&&s-w>=0)return qo.subVectors(B,C),E=(a-e)/(a-e+(s-w)),I.copy(C).addScaledVector(qo,E);const r=1/(h+n+D);return Q=n*r,E=D*r,I.copy(g).addScaledVector(JC,Q).addScaledVector(FC,E)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}let KD=0;class wg extends cC{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KD++}),this.uuid=ig(),this.name="",this.type="Material",this.blending=xC,this.side=Yg,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Yt,this.blendDst=Lt,this.blendEquation=uC,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=dE,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gE,this.stencilZFail=gE,this.stencilZPass=gE,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const I in A){const g=A[I];if(g===void 0){console.warn("THREE.Material: '"+I+"' parameter is undefined.");continue}const C=this[I];if(C===void 0){console.warn("THREE."+this.type+": '"+I+"' is not a property of this material.");continue}C&&C.isColor?C.set(g):C&&C.isVector3&&g&&g.isVector3?C.copy(g):this[I]=g}}toJSON(A){const I=A===void 0||typeof A=="string";I&&(A={textures:{},images:{}});const g={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};g.uuid=this.uuid,g.type=this.type,this.name!==""&&(g.name=this.name),this.color&&this.color.isColor&&(g.color=this.color.getHex()),this.roughness!==void 0&&(g.roughness=this.roughness),this.metalness!==void 0&&(g.metalness=this.metalness),this.sheen!==void 0&&(g.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(g.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(g.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(g.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(g.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(g.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(g.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(g.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(g.shininess=this.shininess),this.clearcoat!==void 0&&(g.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(g.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(g.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(g.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(g.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,g.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(g.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(g.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(g.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(g.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(g.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(g.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(g.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(g.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(g.lightMap=this.lightMap.toJSON(A).uuid,g.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(g.aoMap=this.aoMap.toJSON(A).uuid,g.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(g.bumpMap=this.bumpMap.toJSON(A).uuid,g.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(g.normalMap=this.normalMap.toJSON(A).uuid,g.normalMapType=this.normalMapType,g.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(g.displacementMap=this.displacementMap.toJSON(A).uuid,g.displacementScale=this.displacementScale,g.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(g.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(g.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(g.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(g.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(g.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(g.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(g.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(g.combine=this.combine)),this.envMapIntensity!==void 0&&(g.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(g.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(g.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(g.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(g.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(g.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(g.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(g.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(g.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(g.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(g.size=this.size),this.shadowSide!==null&&(g.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(g.sizeAttenuation=this.sizeAttenuation),this.blending!==xC&&(g.blending=this.blending),this.side!==Yg&&(g.side=this.side),this.vertexColors&&(g.vertexColors=!0),this.opacity<1&&(g.opacity=this.opacity),this.transparent===!0&&(g.transparent=this.transparent),g.depthFunc=this.depthFunc,g.depthTest=this.depthTest,g.depthWrite=this.depthWrite,g.colorWrite=this.colorWrite,g.stencilWrite=this.stencilWrite,g.stencilWriteMask=this.stencilWriteMask,g.stencilFunc=this.stencilFunc,g.stencilRef=this.stencilRef,g.stencilFuncMask=this.stencilFuncMask,g.stencilFail=this.stencilFail,g.stencilZFail=this.stencilZFail,g.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(g.rotation=this.rotation),this.polygonOffset===!0&&(g.polygonOffset=!0),this.polygonOffsetFactor!==0&&(g.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(g.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(g.linewidth=this.linewidth),this.dashSize!==void 0&&(g.dashSize=this.dashSize),this.gapSize!==void 0&&(g.gapSize=this.gapSize),this.scale!==void 0&&(g.scale=this.scale),this.dithering===!0&&(g.dithering=!0),this.alphaTest>0&&(g.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(g.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(g.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(g.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(g.wireframe=this.wireframe),this.wireframeLinewidth>1&&(g.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(g.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(g.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(g.flatShading=this.flatShading),this.visible===!1&&(g.visible=!1),this.toneMapped===!1&&(g.toneMapped=!1),this.fog===!1&&(g.fog=!1),Object.keys(this.userData).length>0&&(g.userData=this.userData);function C(B){const Q=[];for(const E in B){const o=B[E];delete o.metadata,Q.push(o)}return Q}if(I){const B=C(A.textures),Q=C(A.images);B.length>0&&(g.textures=B),Q.length>0&&(g.images=Q)}return g}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const I=A.clippingPlanes;let g=null;if(I!==null){const C=I.length;g=new Array(C);for(let B=0;B!==C;++B)g[B]=I[B].clone()}return this.clippingPlanes=g,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}const Vt={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bg={h:0,s:0,l:0},_B={h:0,s:0,l:0};function wE(i,A,I){return I<0&&(I+=1),I>1&&(I-=1),I<1/6?i+(A-i)*6*I:I<1/2?A:I<2/3?i+(A-i)*6*(2/3-I):i}class FA{constructor(A,I,g){return this.isColor=!0,this.r=1,this.g=1,this.b=1,I===void 0&&g===void 0?this.set(A):this.setRGB(A,I,g)}set(A){return A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A),this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,I=hg){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(A&255)/255,qI.toWorkingColorSpace(this,I),this}setRGB(A,I,g,C=qI.workingColorSpace){return this.r=A,this.g=I,this.b=g,qI.toWorkingColorSpace(this,C),this}setHSL(A,I,g,C=qI.workingColorSpace){if(A=Qi(A,1),I=YI(I,0,1),g=YI(g,0,1),I===0)this.r=this.g=this.b=g;else{const B=g<=.5?g*(1+I):g+I-g*I,Q=2*g-B;this.r=wE(Q,B,A+1/3),this.g=wE(Q,B,A),this.b=wE(Q,B,A-1/3)}return qI.toWorkingColorSpace(this,C),this}setStyle(A,I=hg){function g(B){B!==void 0&&parseFloat(B)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let C;if(C=/^(\w+)\(([^\)]*)\)/.exec(A)){let B;const Q=C[1],E=C[2];switch(Q){case"rgb":case"rgba":if(B=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return this.r=Math.min(255,parseInt(B[1],10))/255,this.g=Math.min(255,parseInt(B[2],10))/255,this.b=Math.min(255,parseInt(B[3],10))/255,qI.toWorkingColorSpace(this,I),g(B[4]),this;if(B=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E))return this.r=Math.min(100,parseInt(B[1],10))/100,this.g=Math.min(100,parseInt(B[2],10))/100,this.b=Math.min(100,parseInt(B[3],10))/100,qI.toWorkingColorSpace(this,I),g(B[4]),this;break;case"hsl":case"hsla":if(B=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(E)){const o=parseFloat(B[1])/360,t=parseFloat(B[2])/100,e=parseFloat(B[3])/100;return g(B[4]),this.setHSL(o,t,e,I)}break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(C=/^\#([A-Fa-f\d]+)$/.exec(A)){const B=C[1],Q=B.length;if(Q===3)return this.r=parseInt(B.charAt(0)+B.charAt(0),16)/255,this.g=parseInt(B.charAt(1)+B.charAt(1),16)/255,this.b=parseInt(B.charAt(2)+B.charAt(2),16)/255,qI.toWorkingColorSpace(this,I),this;if(Q===6)return this.r=parseInt(B.charAt(0)+B.charAt(1),16)/255,this.g=parseInt(B.charAt(2)+B.charAt(3),16)/255,this.b=parseInt(B.charAt(4)+B.charAt(5),16)/255,qI.toWorkingColorSpace(this,I),this;console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,I);return this}setColorName(A,I=hg){const g=Vt[A.toLowerCase()];return g!==void 0?this.setHex(g,I):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=OC(A.r),this.g=OC(A.g),this.b=OC(A.b),this}copyLinearToSRGB(A){return this.r=QE(A.r),this.g=QE(A.g),this.b=QE(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=hg){return qI.fromWorkingColorSpace(UI.copy(this),A),YI(UI.r*255,0,255)<<16^YI(UI.g*255,0,255)<<8^YI(UI.b*255,0,255)<<0}getHexString(A=hg){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,I=qI.workingColorSpace){qI.fromWorkingColorSpace(UI.copy(this),I);const g=UI.r,C=UI.g,B=UI.b,Q=Math.max(g,C,B),E=Math.min(g,C,B);let o,t;const e=(E+Q)/2;if(E===Q)o=0,t=0;else{const a=Q-E;switch(t=e<=.5?a/(Q+E):a/(2-Q-E),Q){case g:o=(C-B)/a+(C<B?6:0);break;case C:o=(B-g)/a+2;break;case B:o=(g-C)/a+4;break}o/=6}return A.h=o,A.s=t,A.l=e,A}getRGB(A,I=qI.workingColorSpace){return qI.fromWorkingColorSpace(UI.copy(this),I),A.r=UI.r,A.g=UI.g,A.b=UI.b,A}getStyle(A=hg){qI.fromWorkingColorSpace(UI.copy(this),A);const I=UI.r,g=UI.g,C=UI.b;return A!==hg?`color(${A} ${I.toFixed(3)} ${g.toFixed(3)} ${C.toFixed(3)})`:`rgb(${I*255|0},${g*255|0},${C*255|0})`}offsetHSL(A,I,g){return this.getHSL(Bg),Bg.h+=A,Bg.s+=I,Bg.l+=g,this.setHSL(Bg.h,Bg.s,Bg.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,I){return this.r=A.r+I.r,this.g=A.g+I.g,this.b=A.b+I.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,I){return this.r+=(A.r-this.r)*I,this.g+=(A.g-this.g)*I,this.b+=(A.b-this.b)*I,this}lerpColors(A,I,g){return this.r=A.r+(I.r-A.r)*g,this.g=A.g+(I.g-A.g)*g,this.b=A.b+(I.b-A.b)*g,this}lerpHSL(A,I){this.getHSL(Bg),A.getHSL(_B);const g=yB(Bg.h,_B.h,I),C=yB(Bg.s,_B.s,I),B=yB(Bg.l,_B.l,I);return this.setHSL(g,C,B),this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,I=0){return this.r=A[I],this.g=A[I+1],this.b=A[I+2],this}toArray(A=[],I=0){return A[I]=this.r,A[I+1]=this.g,A[I+2]=this.b,A}fromBufferAttribute(A,I){return this.r=A.getX(I),this.g=A.getY(I),this.b=A.getZ(I),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const UI=new FA;FA.NAMES=Vt;class pg extends wg{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new FA(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ft,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const aI=new q,zB=new bA;class HI{constructor(A,I,g=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=I,this.count=A!==void 0?A.length/I:0,this.normalized=g,this.usage=uE,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this}copyAt(A,I,g){A*=this.itemSize,g*=I.itemSize;for(let C=0,B=this.itemSize;C<B;C++)this.array[A+C]=I.array[g+C];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let I=0,g=this.count;I<g;I++)zB.fromBufferAttribute(this,I),zB.applyMatrix3(A),this.setXY(I,zB.x,zB.y);else if(this.itemSize===3)for(let I=0,g=this.count;I<g;I++)aI.fromBufferAttribute(this,I),aI.applyMatrix3(A),this.setXYZ(I,aI.x,aI.y,aI.z);return this}applyMatrix4(A){for(let I=0,g=this.count;I<g;I++)aI.fromBufferAttribute(this,I),aI.applyMatrix4(A),this.setXYZ(I,aI.x,aI.y,aI.z);return this}applyNormalMatrix(A){for(let I=0,g=this.count;I<g;I++)aI.fromBufferAttribute(this,I),aI.applyNormalMatrix(A),this.setXYZ(I,aI.x,aI.y,aI.z);return this}transformDirection(A){for(let I=0,g=this.count;I<g;I++)aI.fromBufferAttribute(this,I),aI.transformDirection(A),this.setXYZ(I,aI.x,aI.y,aI.z);return this}set(A,I=0){return this.array.set(A,I),this}getX(A){let I=this.array[A*this.itemSize];return this.normalized&&(I=qg(I,this.array)),I}setX(A,I){return this.normalized&&(I=_A(I,this.array)),this.array[A*this.itemSize]=I,this}getY(A){let I=this.array[A*this.itemSize+1];return this.normalized&&(I=qg(I,this.array)),I}setY(A,I){return this.normalized&&(I=_A(I,this.array)),this.array[A*this.itemSize+1]=I,this}getZ(A){let I=this.array[A*this.itemSize+2];return this.normalized&&(I=qg(I,this.array)),I}setZ(A,I){return this.normalized&&(I=_A(I,this.array)),this.array[A*this.itemSize+2]=I,this}getW(A){let I=this.array[A*this.itemSize+3];return this.normalized&&(I=qg(I,this.array)),I}setW(A,I){return this.normalized&&(I=_A(I,this.array)),this.array[A*this.itemSize+3]=I,this}setXY(A,I,g){return A*=this.itemSize,this.normalized&&(I=_A(I,this.array),g=_A(g,this.array)),this.array[A+0]=I,this.array[A+1]=g,this}setXYZ(A,I,g,C){return A*=this.itemSize,this.normalized&&(I=_A(I,this.array),g=_A(g,this.array),C=_A(C,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this}setXYZW(A,I,g,C,B){return A*=this.itemSize,this.normalized&&(I=_A(I,this.array),g=_A(g,this.array),C=_A(C,this.array),B=_A(B,this.array)),this.array[A+0]=I,this.array[A+1]=g,this.array[A+2]=C,this.array[A+3]=B,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==uE&&(A.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(A.updateRange=this.updateRange),A}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Xt extends HI{constructor(A,I,g){super(new Uint16Array(A),I,g)}}class _t extends HI{constructor(A,I,g){super(new Uint32Array(A),I,g)}}class $I extends HI{constructor(A,I,g){super(new Float32Array(A),I,g)}}let ND=0;const PI=new LA,rE=new QI,RC=new q,OI=new AB,aB=new AB,kI=new q;class og extends cC{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ND++}),this.uuid=ig(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(Wt(A)?_t:Xt)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,I){return this.attributes[A]=I,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,I,g=0){this.groups.push({start:A,count:I,materialIndex:g})}clearGroups(){this.groups=[]}setDrawRange(A,I){this.drawRange.start=A,this.drawRange.count=I}applyMatrix4(A){const I=this.attributes.position;I!==void 0&&(I.applyMatrix4(A),I.needsUpdate=!0);const g=this.attributes.normal;if(g!==void 0){const B=new fI().getNormalMatrix(A);g.applyNormalMatrix(B),g.needsUpdate=!0}const C=this.attributes.tangent;return C!==void 0&&(C.transformDirection(A),C.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return PI.makeRotationFromQuaternion(A),this.applyMatrix4(PI),this}rotateX(A){return PI.makeRotationX(A),this.applyMatrix4(PI),this}rotateY(A){return PI.makeRotationY(A),this.applyMatrix4(PI),this}rotateZ(A){return PI.makeRotationZ(A),this.applyMatrix4(PI),this}translate(A,I,g){return PI.makeTranslation(A,I,g),this.applyMatrix4(PI),this}scale(A,I,g){return PI.makeScale(A,I,g),this.applyMatrix4(PI),this}lookAt(A){return rE.lookAt(A),rE.updateMatrix(),this.applyMatrix4(rE.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(RC).negate(),this.translate(RC.x,RC.y,RC.z),this}setFromPoints(A){const I=[];for(let g=0,C=A.length;g<C;g++){const B=A[g];I.push(B.x,B.y,B.z||0)}return this.setAttribute("position",new $I(I,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new AB);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),I)for(let g=0,C=I.length;g<C;g++){const B=I[g];OI.setFromBufferAttribute(B),this.morphTargetsRelative?(kI.addVectors(this.boundingBox.min,OI.min),this.boundingBox.expandByPoint(kI),kI.addVectors(this.boundingBox.max,OI.max),this.boundingBox.expandByPoint(kI)):(this.boundingBox.expandByPoint(OI.min),this.boundingBox.expandByPoint(OI.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new IB);const A=this.attributes.position,I=this.morphAttributes.position;if(A&&A.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new q,1/0);return}if(A){const g=this.boundingSphere.center;if(OI.setFromBufferAttribute(A),I)for(let B=0,Q=I.length;B<Q;B++){const E=I[B];aB.setFromBufferAttribute(E),this.morphTargetsRelative?(kI.addVectors(OI.min,aB.min),OI.expandByPoint(kI),kI.addVectors(OI.max,aB.max),OI.expandByPoint(kI)):(OI.expandByPoint(aB.min),OI.expandByPoint(aB.max))}OI.getCenter(g);let C=0;for(let B=0,Q=A.count;B<Q;B++)kI.fromBufferAttribute(A,B),C=Math.max(C,g.distanceToSquared(kI));if(I)for(let B=0,Q=I.length;B<Q;B++){const E=I[B],o=this.morphTargetsRelative;for(let t=0,e=E.count;t<e;t++)kI.fromBufferAttribute(E,t),o&&(RC.fromBufferAttribute(A,t),kI.add(RC)),C=Math.max(C,g.distanceToSquared(kI))}this.boundingSphere.radius=Math.sqrt(C),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,I=this.attributes;if(A===null||I.position===void 0||I.normal===void 0||I.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const g=A.array,C=I.position.array,B=I.normal.array,Q=I.uv.array,E=C.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new HI(new Float32Array(4*E),4));const o=this.getAttribute("tangent").array,t=[],e=[];for(let H=0;H<E;H++)t[H]=new q,e[H]=new q;const a=new q,D=new q,s=new q,w=new bA,n=new bA,h=new bA,r=new q,M=new q;function S(H,P,X){a.fromArray(C,H*3),D.fromArray(C,P*3),s.fromArray(C,X*3),w.fromArray(Q,H*2),n.fromArray(Q,P*2),h.fromArray(Q,X*2),D.sub(a),s.sub(a),n.sub(w),h.sub(w);const T=1/(n.x*h.y-h.x*n.y);isFinite(T)&&(r.copy(D).multiplyScalar(h.y).addScaledVector(s,-n.y).multiplyScalar(T),M.copy(s).multiplyScalar(n.x).addScaledVector(D,-h.x).multiplyScalar(T),t[H].add(r),t[P].add(r),t[X].add(r),e[H].add(M),e[P].add(M),e[X].add(M))}let l=this.groups;l.length===0&&(l=[{start:0,count:g.length}]);for(let H=0,P=l.length;H<P;++H){const X=l[H],T=X.start,L=X.count;for(let x=T,z=T+L;x<z;x+=3)S(g[x+0],g[x+1],g[x+2])}const N=new q,F=new q,d=new q,c=new q;function K(H){d.fromArray(B,H*3),c.copy(d);const P=t[H];N.copy(P),N.sub(d.multiplyScalar(d.dot(P))).normalize(),F.crossVectors(c,P);const T=F.dot(e[H])<0?-1:1;o[H*4]=N.x,o[H*4+1]=N.y,o[H*4+2]=N.z,o[H*4+3]=T}for(let H=0,P=l.length;H<P;++H){const X=l[H],T=X.start,L=X.count;for(let x=T,z=T+L;x<z;x+=3)K(g[x+0]),K(g[x+1]),K(g[x+2])}}computeVertexNormals(){const A=this.index,I=this.getAttribute("position");if(I!==void 0){let g=this.getAttribute("normal");if(g===void 0)g=new HI(new Float32Array(I.count*3),3),this.setAttribute("normal",g);else for(let D=0,s=g.count;D<s;D++)g.setXYZ(D,0,0,0);const C=new q,B=new q,Q=new q,E=new q,o=new q,t=new q,e=new q,a=new q;if(A)for(let D=0,s=A.count;D<s;D+=3){const w=A.getX(D+0),n=A.getX(D+1),h=A.getX(D+2);C.fromBufferAttribute(I,w),B.fromBufferAttribute(I,n),Q.fromBufferAttribute(I,h),e.subVectors(Q,B),a.subVectors(C,B),e.cross(a),E.fromBufferAttribute(g,w),o.fromBufferAttribute(g,n),t.fromBufferAttribute(g,h),E.add(e),o.add(e),t.add(e),g.setXYZ(w,E.x,E.y,E.z),g.setXYZ(n,o.x,o.y,o.z),g.setXYZ(h,t.x,t.y,t.z)}else for(let D=0,s=I.count;D<s;D+=3)C.fromBufferAttribute(I,D+0),B.fromBufferAttribute(I,D+1),Q.fromBufferAttribute(I,D+2),e.subVectors(Q,B),a.subVectors(C,B),e.cross(a),g.setXYZ(D+0,e.x,e.y,e.z),g.setXYZ(D+1,e.x,e.y,e.z),g.setXYZ(D+2,e.x,e.y,e.z);this.normalizeNormals(),g.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const A=this.attributes.normal;for(let I=0,g=A.count;I<g;I++)kI.fromBufferAttribute(A,I),kI.normalize(),A.setXYZ(I,kI.x,kI.y,kI.z)}toNonIndexed(){function A(E,o){const t=E.array,e=E.itemSize,a=E.normalized,D=new t.constructor(o.length*e);let s=0,w=0;for(let n=0,h=o.length;n<h;n++){E.isInterleavedBufferAttribute?s=o[n]*E.data.stride+E.offset:s=o[n]*e;for(let r=0;r<e;r++)D[w++]=t[s++]}return new HI(D,e,a)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const I=new og,g=this.index.array,C=this.attributes;for(const E in C){const o=C[E],t=A(o,g);I.setAttribute(E,t)}const B=this.morphAttributes;for(const E in B){const o=[],t=B[E];for(let e=0,a=t.length;e<a;e++){const D=t[e],s=A(D,g);o.push(s)}I.morphAttributes[E]=o}I.morphTargetsRelative=this.morphTargetsRelative;const Q=this.groups;for(let E=0,o=Q.length;E<o;E++){const t=Q[E];I.addGroup(t.start,t.count,t.materialIndex)}return I}toJSON(){const A={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const t in o)o[t]!==void 0&&(A[t]=o[t]);return A}A.data={attributes:{}};const I=this.index;I!==null&&(A.data.index={type:I.array.constructor.name,array:Array.prototype.slice.call(I.array)});const g=this.attributes;for(const o in g){const t=g[o];A.data.attributes[o]=t.toJSON(A.data)}const C={};let B=!1;for(const o in this.morphAttributes){const t=this.morphAttributes[o],e=[];for(let a=0,D=t.length;a<D;a++){const s=t[a];e.push(s.toJSON(A.data))}e.length>0&&(C[o]=e,B=!0)}B&&(A.data.morphAttributes=C,A.data.morphTargetsRelative=this.morphTargetsRelative);const Q=this.groups;Q.length>0&&(A.data.groups=JSON.parse(JSON.stringify(Q)));const E=this.boundingSphere;return E!==null&&(A.data.boundingSphere={center:E.center.toArray(),radius:E.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const I={};this.name=A.name;const g=A.index;g!==null&&this.setIndex(g.clone(I));const C=A.attributes;for(const t in C){const e=C[t];this.setAttribute(t,e.clone(I))}const B=A.morphAttributes;for(const t in B){const e=[],a=B[t];for(let D=0,s=a.length;D<s;D++)e.push(a[D].clone(I));this.morphAttributes[t]=e}this.morphTargetsRelative=A.morphTargetsRelative;const Q=A.groups;for(let t=0,e=Q.length;t<e;t++){const a=Q[t];this.addGroup(a.start,a.count,a.materialIndex)}const E=A.boundingBox;E!==null&&(this.boundingBox=E.clone());const o=A.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const po=new LA,Dg=new YQ,$B=new IB,Yo=new q,DB=new q,sB=new q,hB=new q,SE=new q,AQ=new q,IQ=new bA,gQ=new bA,CQ=new bA,cE=new q,BQ=new q;class KI extends QI{constructor(A=new og,I=new pg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=I,this.updateMorphTargets()}copy(A,I){return super.copy(A,I),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){const I=this.geometry.morphAttributes,g=Object.keys(I);if(g.length>0){const C=I[g[0]];if(C!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let B=0,Q=C.length;B<Q;B++){const E=C[B].name||String(B);this.morphTargetInfluences.push(0),this.morphTargetDictionary[E]=B}}}}getVertexPosition(A,I){const g=this.geometry,C=g.attributes.position,B=g.morphAttributes.position,Q=g.morphTargetsRelative;I.fromBufferAttribute(C,A);const E=this.morphTargetInfluences;if(B&&E){AQ.set(0,0,0);for(let o=0,t=B.length;o<t;o++){const e=E[o],a=B[o];e!==0&&(SE.fromBufferAttribute(a,A),Q?AQ.addScaledVector(SE,e):AQ.addScaledVector(SE.sub(I),e))}I.add(AQ)}return this.isSkinnedMesh&&this.boneTransform(A,I),I}raycast(A,I){const g=this.geometry,C=this.material,B=this.matrixWorld;if(C===void 0||(g.boundingSphere===null&&g.computeBoundingSphere(),$B.copy(g.boundingSphere),$B.applyMatrix4(B),Dg.copy(A.ray).recast(A.near),$B.containsPoint(Dg.origin)===!1&&(Dg.intersectSphere($B,Yo)===null||Dg.origin.distanceToSquared(Yo)>(A.far-A.near)**2))||(po.copy(B).invert(),Dg.copy(A.ray).applyMatrix4(po),g.boundingBox!==null&&Dg.intersectsBox(g.boundingBox)===!1))return;let Q;const E=g.index,o=g.attributes.position,t=g.attributes.uv,e=g.attributes.uv2,a=g.groups,D=g.drawRange;if(E!==null)if(Array.isArray(C))for(let s=0,w=a.length;s<w;s++){const n=a[s],h=C[n.materialIndex],r=Math.max(n.start,D.start),M=Math.min(E.count,Math.min(n.start+n.count,D.start+D.count));for(let S=r,l=M;S<l;S+=3){const N=E.getX(S),F=E.getX(S+1),d=E.getX(S+2);Q=QQ(this,h,A,Dg,t,e,N,F,d),Q&&(Q.faceIndex=Math.floor(S/3),Q.face.materialIndex=n.materialIndex,I.push(Q))}}else{const s=Math.max(0,D.start),w=Math.min(E.count,D.start+D.count);for(let n=s,h=w;n<h;n+=3){const r=E.getX(n),M=E.getX(n+1),S=E.getX(n+2);Q=QQ(this,C,A,Dg,t,e,r,M,S),Q&&(Q.faceIndex=Math.floor(n/3),I.push(Q))}}else if(o!==void 0)if(Array.isArray(C))for(let s=0,w=a.length;s<w;s++){const n=a[s],h=C[n.materialIndex],r=Math.max(n.start,D.start),M=Math.min(o.count,Math.min(n.start+n.count,D.start+D.count));for(let S=r,l=M;S<l;S+=3){const N=S,F=S+1,d=S+2;Q=QQ(this,h,A,Dg,t,e,N,F,d),Q&&(Q.faceIndex=Math.floor(S/3),Q.face.materialIndex=n.materialIndex,I.push(Q))}}else{const s=Math.max(0,D.start),w=Math.min(o.count,D.start+D.count);for(let n=s,h=w;n<h;n+=3){const r=n,M=n+1,S=n+2;Q=QQ(this,C,A,Dg,t,e,r,M,S),Q&&(Q.faceIndex=Math.floor(n/3),I.push(Q))}}}}function JD(i,A,I,g,C,B,Q,E){let o;if(A.side===WI?o=g.intersectTriangle(Q,B,C,!0,E):o=g.intersectTriangle(C,B,Q,A.side===Yg,E),o===null)return null;BQ.copy(E),BQ.applyMatrix4(i.matrixWorld);const t=I.ray.origin.distanceTo(BQ);return t<I.near||t>I.far?null:{distance:t,point:BQ.clone(),object:i}}function QQ(i,A,I,g,C,B,Q,E,o){i.getVertexPosition(Q,DB),i.getVertexPosition(E,sB),i.getVertexPosition(o,hB);const t=JD(i,A,I,g,DB,sB,hB,cE);if(t){C&&(IQ.fromBufferAttribute(C,Q),gQ.fromBufferAttribute(C,E),CQ.fromBufferAttribute(C,o),t.uv=Fg.getUV(cE,DB,sB,hB,IQ,gQ,CQ,new bA)),B&&(IQ.fromBufferAttribute(B,Q),gQ.fromBufferAttribute(B,E),CQ.fromBufferAttribute(B,o),t.uv2=Fg.getUV(cE,DB,sB,hB,IQ,gQ,CQ,new bA));const e={a:Q,b:E,c:o,normal:new q,materialIndex:0};Fg.getNormal(DB,sB,hB,e.normal),t.face=e}return t}class jg extends og{constructor(A=1,I=1,g=1,C=1,B=1,Q=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:I,depth:g,widthSegments:C,heightSegments:B,depthSegments:Q};const E=this;C=Math.floor(C),B=Math.floor(B),Q=Math.floor(Q);const o=[],t=[],e=[],a=[];let D=0,s=0;w("z","y","x",-1,-1,g,I,A,Q,B,0),w("z","y","x",1,-1,g,I,-A,Q,B,1),w("x","z","y",1,1,A,g,I,C,Q,2),w("x","z","y",1,-1,A,g,-I,C,Q,3),w("x","y","z",1,-1,A,I,g,C,B,4),w("x","y","z",-1,-1,A,I,-g,C,B,5),this.setIndex(o),this.setAttribute("position",new $I(t,3)),this.setAttribute("normal",new $I(e,3)),this.setAttribute("uv",new $I(a,2));function w(n,h,r,M,S,l,N,F,d,c,K){const H=l/d,P=N/c,X=l/2,T=N/2,L=F/2,x=d+1,z=c+1;let IA=0,j=0;const _=new q;for(let gA=0;gA<z;gA++){const eA=gA*P-T;for(let b=0;b<x;b++){const AA=b*H-X;_[n]=AA*M,_[h]=eA*S,_[r]=L,t.push(_.x,_.y,_.z),_[n]=0,_[h]=0,_[r]=F>0?1:-1,e.push(_.x,_.y,_.z),a.push(b/d),a.push(1-gA/c),IA+=1}}for(let gA=0;gA<c;gA++)for(let eA=0;eA<d;eA++){const b=D+eA+x*gA,AA=D+eA+x*(gA+1),EA=D+(eA+1)+x*(gA+1),m=D+(eA+1)+x*gA;o.push(b,AA,m),o.push(AA,EA,m),j+=6}E.addGroup(s,j,K),s+=j,D+=IA}}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new jg(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function VC(i){const A={};for(const I in i){A[I]={};for(const g in i[I]){const C=i[I][g];C&&(C.isColor||C.isMatrix3||C.isMatrix4||C.isVector2||C.isVector3||C.isVector4||C.isTexture||C.isQuaternion)?A[I][g]=C.clone():Array.isArray(C)?A[I][g]=C.slice():A[I][g]=C}}return A}function dI(i){const A={};for(let I=0;I<i.length;I++){const g=VC(i[I]);for(const C in g)A[C]=g[C]}return A}function FD(i){const A=[];for(let I=0;I<i.length;I++)A.push(i[I].clone());return A}function zt(i){return i.getRenderTarget()===null&&i.outputEncoding===vA?hg:KB}const RD={clone:VC,merge:dI};var qD=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rC extends wg{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qD,this.fragmentShader=pD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=VC(A.uniforms),this.uniformsGroups=FD(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const I=super.toJSON(A);I.glslVersion=this.glslVersion,I.uniforms={};for(const C in this.uniforms){const Q=this.uniforms[C].value;Q&&Q.isTexture?I.uniforms[C]={type:"t",value:Q.toJSON(A).uuid}:Q&&Q.isColor?I.uniforms[C]={type:"c",value:Q.getHex()}:Q&&Q.isVector2?I.uniforms[C]={type:"v2",value:Q.toArray()}:Q&&Q.isVector3?I.uniforms[C]={type:"v3",value:Q.toArray()}:Q&&Q.isVector4?I.uniforms[C]={type:"v4",value:Q.toArray()}:Q&&Q.isMatrix3?I.uniforms[C]={type:"m3",value:Q.toArray()}:Q&&Q.isMatrix4?I.uniforms[C]={type:"m4",value:Q.toArray()}:I.uniforms[C]={value:Q}}Object.keys(this.defines).length>0&&(I.defines=this.defines),I.vertexShader=this.vertexShader,I.fragmentShader=this.fragmentShader;const g={};for(const C in this.extensions)this.extensions[C]===!0&&(g[C]=!0);return Object.keys(g).length>0&&(I.extensions=g),I}}class $t extends QI{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new LA,this.projectionMatrix=new LA,this.projectionMatrixInverse=new LA}copy(A,I){return super.copy(A,I),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const I=this.matrixWorld.elements;return A.set(-I[8],-I[9],-I[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,I){super.updateWorldMatrix(A,I),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class LI extends $t{constructor(A=50,I=1,g=.1,C=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=g,this.far=C,this.focus=10,this.aspect=I,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const I=.5*this.getFilmHeight()/A;this.fov=NB*2*Math.atan(I),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(kB*.5*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return NB*2*Math.atan(Math.tan(kB*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,I,g,C,B,Q){this.aspect=A/I,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=Q,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let I=A*Math.tan(kB*.5*this.fov)/this.zoom,g=2*I,C=this.aspect*g,B=-.5*C;const Q=this.view;if(this.view!==null&&this.view.enabled){const o=Q.fullWidth,t=Q.fullHeight;B+=Q.offsetX*C/o,I-=Q.offsetY*g/t,C*=Q.width/o,g*=Q.height/t}const E=this.filmOffset;E!==0&&(B+=A*E/this.getFilmWidth()),this.projectionMatrix.makePerspective(B,B+C,I,I-g,A,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.fov=this.fov,I.object.zoom=this.zoom,I.object.near=this.near,I.object.far=this.far,I.object.focus=this.focus,I.object.aspect=this.aspect,this.view!==null&&(I.object.view=Object.assign({},this.view)),I.object.filmGauge=this.filmGauge,I.object.filmOffset=this.filmOffset,I}}const qC=-90,pC=1;class dD extends QI{constructor(A,I,g){super(),this.type="CubeCamera",this.renderTarget=g;const C=new LI(qC,pC,A,I);C.layers=this.layers,C.up.set(0,1,0),C.lookAt(1,0,0),this.add(C);const B=new LI(qC,pC,A,I);B.layers=this.layers,B.up.set(0,1,0),B.lookAt(-1,0,0),this.add(B);const Q=new LI(qC,pC,A,I);Q.layers=this.layers,Q.up.set(0,0,-1),Q.lookAt(0,1,0),this.add(Q);const E=new LI(qC,pC,A,I);E.layers=this.layers,E.up.set(0,0,1),E.lookAt(0,-1,0),this.add(E);const o=new LI(qC,pC,A,I);o.layers=this.layers,o.up.set(0,1,0),o.lookAt(0,0,1),this.add(o);const t=new LI(qC,pC,A,I);t.layers=this.layers,t.up.set(0,1,0),t.lookAt(0,0,-1),this.add(t)}update(A,I){this.parent===null&&this.updateMatrixWorld();const g=this.renderTarget,[C,B,Q,E,o,t]=this.children,e=A.getRenderTarget(),a=A.toneMapping,D=A.xr.enabled;A.toneMapping=dg,A.xr.enabled=!1;const s=g.texture.generateMipmaps;g.texture.generateMipmaps=!1,A.setRenderTarget(g,0),A.render(I,C),A.setRenderTarget(g,1),A.render(I,B),A.setRenderTarget(g,2),A.render(I,Q),A.setRenderTarget(g,3),A.render(I,E),A.setRenderTarget(g,4),A.render(I,o),g.texture.generateMipmaps=s,A.setRenderTarget(g,5),A.render(I,t),A.setRenderTarget(e),A.toneMapping=a,A.xr.enabled=D,g.texture.needsPMREMUpdate=!0}}class ii extends MI{constructor(A,I,g,C,B,Q,E,o,t,e){A=A!==void 0?A:[],I=I!==void 0?I:WC,super(A,I,g,C,B,Q,E,o,t,e),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class YD extends wC{constructor(A=1,I={}){super(A,A,I),this.isWebGLCubeRenderTarget=!0;const g={width:A,height:A,depth:1},C=[g,g,g,g,g,g];this.texture=new ii(C,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=I.generateMipmaps!==void 0?I.generateMipmaps:!1,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:mI}fromEquirectangularTexture(A,I){this.texture.type=I.type,this.texture.encoding=I.encoding,this.texture.generateMipmaps=I.generateMipmaps,this.texture.minFilter=I.minFilter,this.texture.magFilter=I.magFilter;const g={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},C=new jg(5,5,5),B=new rC({name:"CubemapFromEquirect",uniforms:VC(g.uniforms),vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,side:WI,blending:Wg});B.uniforms.tEquirect.value=I;const Q=new KI(C,B),E=I.minFilter;return I.minFilter===hC&&(I.minFilter=mI),new dD(1,10,this).update(A,Q),I.minFilter=E,Q.geometry.dispose(),Q.material.dispose(),this}clear(A,I,g,C){const B=A.getRenderTarget();for(let Q=0;Q<6;Q++)A.setRenderTarget(this,Q),A.clear(I,g,C);A.setRenderTarget(B)}}const kE=new q,LD=new q,fD=new fI;class iC{constructor(A=new q(1,0,0),I=0){this.isPlane=!0,this.normal=A,this.constant=I}set(A,I){return this.normal.copy(A),this.constant=I,this}setComponents(A,I,g,C){return this.normal.set(A,I,g),this.constant=C,this}setFromNormalAndCoplanarPoint(A,I){return this.normal.copy(A),this.constant=-I.dot(this.normal),this}setFromCoplanarPoints(A,I,g){const C=kE.subVectors(g,I).cross(LD.subVectors(A,I)).normalize();return this.setFromNormalAndCoplanarPoint(C,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,I){return I.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,I){const g=A.delta(kE),C=this.normal.dot(g);if(C===0)return this.distanceToPoint(A.start)===0?I.copy(A.start):null;const B=-(A.start.dot(this.normal)+this.constant)/C;return B<0||B>1?null:I.copy(A.start).addScaledVector(g,B)}intersectsLine(A){const I=this.distanceToPoint(A.start),g=this.distanceToPoint(A.end);return I<0&&g>0||g<0&&I>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,I){const g=I||fD.getNormalMatrix(A),C=this.coplanarPoint(kE).applyMatrix4(A),B=this.normal.applyMatrix3(g).normalize();return this.constant=-C.dot(B),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dC=new IB,EQ=new q;class oi{constructor(A=new iC,I=new iC,g=new iC,C=new iC,B=new iC,Q=new iC){this.planes=[A,I,g,C,B,Q]}set(A,I,g,C,B,Q){const E=this.planes;return E[0].copy(A),E[1].copy(I),E[2].copy(g),E[3].copy(C),E[4].copy(B),E[5].copy(Q),this}copy(A){const I=this.planes;for(let g=0;g<6;g++)I[g].copy(A.planes[g]);return this}setFromProjectionMatrix(A){const I=this.planes,g=A.elements,C=g[0],B=g[1],Q=g[2],E=g[3],o=g[4],t=g[5],e=g[6],a=g[7],D=g[8],s=g[9],w=g[10],n=g[11],h=g[12],r=g[13],M=g[14],S=g[15];return I[0].setComponents(E-C,a-o,n-D,S-h).normalize(),I[1].setComponents(E+C,a+o,n+D,S+h).normalize(),I[2].setComponents(E+B,a+t,n+s,S+r).normalize(),I[3].setComponents(E-B,a-t,n-s,S-r).normalize(),I[4].setComponents(E-Q,a-e,n-w,S-M).normalize(),I[5].setComponents(E+Q,a+e,n+w,S+M).normalize(),this}intersectsObject(A){const I=A.geometry;return I.boundingSphere===null&&I.computeBoundingSphere(),dC.copy(I.boundingSphere).applyMatrix4(A.matrixWorld),this.intersectsSphere(dC)}intersectsSprite(A){return dC.center.set(0,0,0),dC.radius=.7071067811865476,dC.applyMatrix4(A.matrixWorld),this.intersectsSphere(dC)}intersectsSphere(A){const I=this.planes,g=A.center,C=-A.radius;for(let B=0;B<6;B++)if(I[B].distanceToPoint(g)<C)return!1;return!0}intersectsBox(A){const I=this.planes;for(let g=0;g<6;g++){const C=I[g];if(EQ.x=C.normal.x>0?A.max.x:A.min.x,EQ.y=C.normal.y>0?A.max.y:A.min.y,EQ.z=C.normal.z>0?A.max.z:A.min.z,C.distanceToPoint(EQ)<0)return!1}return!0}containsPoint(A){const I=this.planes;for(let g=0;g<6;g++)if(I[g].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ae(){let i=null,A=!1,I=null,g=null;function C(B,Q){I(B,Q),g=i.requestAnimationFrame(C)}return{start:function(){A!==!0&&I!==null&&(g=i.requestAnimationFrame(C),A=!0)},stop:function(){i.cancelAnimationFrame(g),A=!1},setAnimationLoop:function(B){I=B},setContext:function(B){i=B}}}function HD(i,A){const I=A.isWebGL2,g=new WeakMap;function C(t,e){const a=t.array,D=t.usage,s=i.createBuffer();i.bindBuffer(e,s),i.bufferData(e,a,D),t.onUploadCallback();let w;if(a instanceof Float32Array)w=5126;else if(a instanceof Uint16Array)if(t.isFloat16BufferAttribute)if(I)w=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else w=5123;else if(a instanceof Int16Array)w=5122;else if(a instanceof Uint32Array)w=5125;else if(a instanceof Int32Array)w=5124;else if(a instanceof Int8Array)w=5120;else if(a instanceof Uint8Array)w=5121;else if(a instanceof Uint8ClampedArray)w=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+a);return{buffer:s,type:w,bytesPerElement:a.BYTES_PER_ELEMENT,version:t.version}}function B(t,e,a){const D=e.array,s=e.updateRange;i.bindBuffer(a,t),s.count===-1?i.bufferSubData(a,0,D):(I?i.bufferSubData(a,s.offset*D.BYTES_PER_ELEMENT,D,s.offset,s.count):i.bufferSubData(a,s.offset*D.BYTES_PER_ELEMENT,D.subarray(s.offset,s.offset+s.count)),s.count=-1),e.onUploadCallback()}function Q(t){return t.isInterleavedBufferAttribute&&(t=t.data),g.get(t)}function E(t){t.isInterleavedBufferAttribute&&(t=t.data);const e=g.get(t);e&&(i.deleteBuffer(e.buffer),g.delete(t))}function o(t,e){if(t.isGLBufferAttribute){const D=g.get(t);(!D||D.version<t.version)&&g.set(t,{buffer:t.buffer,type:t.type,bytesPerElement:t.elementSize,version:t.version});return}t.isInterleavedBufferAttribute&&(t=t.data);const a=g.get(t);a===void 0?g.set(t,C(t,e)):a.version<t.version&&(B(a.buffer,t,e),a.version=t.version)}return{get:Q,remove:E,update:o}}class ti extends og{constructor(A=1,I=1,g=1,C=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:I,widthSegments:g,heightSegments:C};const B=A/2,Q=I/2,E=Math.floor(g),o=Math.floor(C),t=E+1,e=o+1,a=A/E,D=I/o,s=[],w=[],n=[],h=[];for(let r=0;r<e;r++){const M=r*D-Q;for(let S=0;S<t;S++){const l=S*a-B;w.push(l,-M,0),n.push(0,0,1),h.push(S/E),h.push(1-r/o)}}for(let r=0;r<o;r++)for(let M=0;M<E;M++){const S=M+t*r,l=M+t*(r+1),N=M+1+t*(r+1),F=M+1+t*r;s.push(S,l,F),s.push(l,N,F)}this.setIndex(s),this.setAttribute("position",new $I(w,3)),this.setAttribute("normal",new $I(n,3)),this.setAttribute("uv",new $I(h,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new ti(A.width,A.height,A.widthSegments,A.heightSegments)}}var uD=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,mD=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,TD=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,xD=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bD=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,OD=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZD="vec3 transformed = vec3( position );",WD=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vD=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,PD=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jD=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,VD=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,XD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_D=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zD=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$D=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,As=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Is=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gs=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Cs=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Bs=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Qs=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Es=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,is=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,os=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ts=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,es="gl_FragColor = linearToOutputTexel( gl_FragColor );",as=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ds=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ss=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hs=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ns=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gs=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ws=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rs=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ss=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cs=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ks=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ys=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ms=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ls=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Us=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ks=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ns=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Js=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fs=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rs=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qs=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ps=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,ds=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ys=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ls=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,fs=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Hs=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,us=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ms=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ts=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,xs=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bs=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Os=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zs=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ws=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vs=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ps=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,js=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Vs=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Xs=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,_s=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,zs=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$s=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ah=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ih=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Ch=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Bh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Qh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Eh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ih=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,th=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ah=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Gh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ch=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,kh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Mh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Jh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Fh=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Rh=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,qh=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,ph=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,dh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Yh=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Lh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hh=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,uh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mh=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Th=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xh=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bh=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Oh=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Zh=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Wh=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vh=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ph=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jh=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xh=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,_h=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zh=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$h=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,An=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,In=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gn=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Cn=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bn=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qn=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,En=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,on=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tn=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,en=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,an=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Dn=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sn=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hn=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,nn=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gn=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,JA={alphamap_fragment:uD,alphamap_pars_fragment:mD,alphatest_fragment:TD,alphatest_pars_fragment:xD,aomap_fragment:bD,aomap_pars_fragment:OD,begin_vertex:ZD,beginnormal_vertex:WD,bsdfs:vD,iridescence_fragment:PD,bumpmap_pars_fragment:jD,clipping_planes_fragment:VD,clipping_planes_pars_fragment:XD,clipping_planes_pars_vertex:_D,clipping_planes_vertex:zD,color_fragment:$D,color_pars_fragment:As,color_pars_vertex:Is,color_vertex:gs,common:Cs,cube_uv_reflection_fragment:Bs,defaultnormal_vertex:Qs,displacementmap_pars_vertex:Es,displacementmap_vertex:is,emissivemap_fragment:os,emissivemap_pars_fragment:ts,encodings_fragment:es,encodings_pars_fragment:as,envmap_fragment:Ds,envmap_common_pars_fragment:ss,envmap_pars_fragment:hs,envmap_pars_vertex:ns,envmap_physical_pars_fragment:Ns,envmap_vertex:Gs,fog_vertex:ws,fog_pars_vertex:rs,fog_fragment:Ss,fog_pars_fragment:cs,gradientmap_pars_fragment:ks,lightmap_fragment:ys,lightmap_pars_fragment:Ms,lights_lambert_fragment:ls,lights_lambert_pars_fragment:Us,lights_pars_begin:Ks,lights_toon_fragment:Js,lights_toon_pars_fragment:Fs,lights_phong_fragment:Rs,lights_phong_pars_fragment:qs,lights_physical_fragment:ps,lights_physical_pars_fragment:ds,lights_fragment_begin:Ys,lights_fragment_maps:Ls,lights_fragment_end:fs,logdepthbuf_fragment:Hs,logdepthbuf_pars_fragment:us,logdepthbuf_pars_vertex:ms,logdepthbuf_vertex:Ts,map_fragment:xs,map_pars_fragment:bs,map_particle_fragment:Os,map_particle_pars_fragment:Zs,metalnessmap_fragment:Ws,metalnessmap_pars_fragment:vs,morphcolor_vertex:Ps,morphnormal_vertex:js,morphtarget_pars_vertex:Vs,morphtarget_vertex:Xs,normal_fragment_begin:_s,normal_fragment_maps:zs,normal_pars_fragment:$s,normal_pars_vertex:Ah,normal_vertex:Ih,normalmap_pars_fragment:gh,clearcoat_normal_fragment_begin:Ch,clearcoat_normal_fragment_maps:Bh,clearcoat_pars_fragment:Qh,iridescence_pars_fragment:Eh,output_fragment:ih,packing:oh,premultiplied_alpha_fragment:th,project_vertex:eh,dithering_fragment:ah,dithering_pars_fragment:Dh,roughnessmap_fragment:sh,roughnessmap_pars_fragment:hh,shadowmap_pars_fragment:nh,shadowmap_pars_vertex:Gh,shadowmap_vertex:wh,shadowmask_pars_fragment:rh,skinbase_vertex:Sh,skinning_pars_vertex:ch,skinning_vertex:kh,skinnormal_vertex:yh,specularmap_fragment:Mh,specularmap_pars_fragment:lh,tonemapping_fragment:Uh,tonemapping_pars_fragment:Kh,transmission_fragment:Nh,transmission_pars_fragment:Jh,uv_pars_fragment:Fh,uv_pars_vertex:Rh,uv_vertex:qh,uv2_pars_fragment:ph,uv2_pars_vertex:dh,uv2_vertex:Yh,worldpos_vertex:Lh,background_vert:fh,background_frag:Hh,backgroundCube_vert:uh,backgroundCube_frag:mh,cube_vert:Th,cube_frag:xh,depth_vert:bh,depth_frag:Oh,distanceRGBA_vert:Zh,distanceRGBA_frag:Wh,equirect_vert:vh,equirect_frag:Ph,linedashed_vert:jh,linedashed_frag:Vh,meshbasic_vert:Xh,meshbasic_frag:_h,meshlambert_vert:zh,meshlambert_frag:$h,meshmatcap_vert:An,meshmatcap_frag:In,meshnormal_vert:gn,meshnormal_frag:Cn,meshphong_vert:Bn,meshphong_frag:Qn,meshphysical_vert:En,meshphysical_frag:on,meshtoon_vert:tn,meshtoon_frag:en,points_vert:an,points_frag:Dn,shadow_vert:sn,shadow_frag:hn,sprite_vert:nn,sprite_frag:Gn},QA={common:{diffuse:{value:new FA(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new fI},uv2Transform:{value:new fI},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new bA(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new FA(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new FA(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new fI}},sprite:{diffuse:{value:new FA(16777215)},opacity:{value:1},center:{value:new bA(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new fI}}},ng={basic:{uniforms:dI([QA.common,QA.specularmap,QA.envmap,QA.aomap,QA.lightmap,QA.fog]),vertexShader:JA.meshbasic_vert,fragmentShader:JA.meshbasic_frag},lambert:{uniforms:dI([QA.common,QA.specularmap,QA.envmap,QA.aomap,QA.lightmap,QA.emissivemap,QA.bumpmap,QA.normalmap,QA.displacementmap,QA.fog,QA.lights,{emissive:{value:new FA(0)}}]),vertexShader:JA.meshlambert_vert,fragmentShader:JA.meshlambert_frag},phong:{uniforms:dI([QA.common,QA.specularmap,QA.envmap,QA.aomap,QA.lightmap,QA.emissivemap,QA.bumpmap,QA.normalmap,QA.displacementmap,QA.fog,QA.lights,{emissive:{value:new FA(0)},specular:{value:new FA(1118481)},shininess:{value:30}}]),vertexShader:JA.meshphong_vert,fragmentShader:JA.meshphong_frag},standard:{uniforms:dI([QA.common,QA.envmap,QA.aomap,QA.lightmap,QA.emissivemap,QA.bumpmap,QA.normalmap,QA.displacementmap,QA.roughnessmap,QA.metalnessmap,QA.fog,QA.lights,{emissive:{value:new FA(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:JA.meshphysical_vert,fragmentShader:JA.meshphysical_frag},toon:{uniforms:dI([QA.common,QA.aomap,QA.lightmap,QA.emissivemap,QA.bumpmap,QA.normalmap,QA.displacementmap,QA.gradientmap,QA.fog,QA.lights,{emissive:{value:new FA(0)}}]),vertexShader:JA.meshtoon_vert,fragmentShader:JA.meshtoon_frag},matcap:{uniforms:dI([QA.common,QA.bumpmap,QA.normalmap,QA.displacementmap,QA.fog,{matcap:{value:null}}]),vertexShader:JA.meshmatcap_vert,fragmentShader:JA.meshmatcap_frag},points:{uniforms:dI([QA.points,QA.fog]),vertexShader:JA.points_vert,fragmentShader:JA.points_frag},dashed:{uniforms:dI([QA.common,QA.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:JA.linedashed_vert,fragmentShader:JA.linedashed_frag},depth:{uniforms:dI([QA.common,QA.displacementmap]),vertexShader:JA.depth_vert,fragmentShader:JA.depth_frag},normal:{uniforms:dI([QA.common,QA.bumpmap,QA.normalmap,QA.displacementmap,{opacity:{value:1}}]),vertexShader:JA.meshnormal_vert,fragmentShader:JA.meshnormal_frag},sprite:{uniforms:dI([QA.sprite,QA.fog]),vertexShader:JA.sprite_vert,fragmentShader:JA.sprite_frag},background:{uniforms:{uvTransform:{value:new fI},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:JA.background_vert,fragmentShader:JA.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:JA.backgroundCube_vert,fragmentShader:JA.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:JA.cube_vert,fragmentShader:JA.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:JA.equirect_vert,fragmentShader:JA.equirect_frag},distanceRGBA:{uniforms:dI([QA.common,QA.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:JA.distanceRGBA_vert,fragmentShader:JA.distanceRGBA_frag},shadow:{uniforms:dI([QA.lights,QA.fog,{color:{value:new FA(0)},opacity:{value:1}}]),vertexShader:JA.shadow_vert,fragmentShader:JA.shadow_frag}};ng.physical={uniforms:dI([ng.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new bA(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new FA(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new bA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new FA(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new FA(1,1,1)},specularColorMap:{value:null}}]),vertexShader:JA.meshphysical_vert,fragmentShader:JA.meshphysical_frag};const iQ={r:0,b:0,g:0};function wn(i,A,I,g,C,B,Q){const E=new FA(0);let o=B===!0?0:1,t,e,a=null,D=0,s=null;function w(h,r){let M=!1,S=r.isScene===!0?r.background:null;S&&S.isTexture&&(S=(r.backgroundBlurriness>0?I:A).get(S));const l=i.xr,N=l.getSession&&l.getSession();N&&N.environmentBlendMode==="additive"&&(S=null),S===null?n(E,o):S&&S.isColor&&(n(S,1),M=!0),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),S&&(S.isCubeTexture||S.mapping===dQ)?(e===void 0&&(e=new KI(new jg(1,1,1),new rC({name:"BackgroundCubeMaterial",uniforms:VC(ng.backgroundCube.uniforms),vertexShader:ng.backgroundCube.vertexShader,fragmentShader:ng.backgroundCube.fragmentShader,side:WI,depthTest:!1,depthWrite:!1,fog:!1})),e.geometry.deleteAttribute("normal"),e.geometry.deleteAttribute("uv"),e.onBeforeRender=function(F,d,c){this.matrixWorld.copyPosition(c.matrixWorld)},Object.defineProperty(e.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),C.update(e)),e.material.uniforms.envMap.value=S,e.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,e.material.uniforms.backgroundBlurriness.value=r.backgroundBlurriness,e.material.uniforms.backgroundIntensity.value=r.backgroundIntensity,e.material.toneMapped=S.encoding!==vA,(a!==S||D!==S.version||s!==i.toneMapping)&&(e.material.needsUpdate=!0,a=S,D=S.version,s=i.toneMapping),e.layers.enableAll(),h.unshift(e,e.geometry,e.material,0,0,null)):S&&S.isTexture&&(t===void 0&&(t=new KI(new ti(2,2),new rC({name:"BackgroundMaterial",uniforms:VC(ng.background.uniforms),vertexShader:ng.background.vertexShader,fragmentShader:ng.background.fragmentShader,side:Yg,depthTest:!1,depthWrite:!1,fog:!1})),t.geometry.deleteAttribute("normal"),Object.defineProperty(t.material,"map",{get:function(){return this.uniforms.t2D.value}}),C.update(t)),t.material.uniforms.t2D.value=S,t.material.uniforms.backgroundIntensity.value=r.backgroundIntensity,t.material.toneMapped=S.encoding!==vA,S.matrixAutoUpdate===!0&&S.updateMatrix(),t.material.uniforms.uvTransform.value.copy(S.matrix),(a!==S||D!==S.version||s!==i.toneMapping)&&(t.material.needsUpdate=!0,a=S,D=S.version,s=i.toneMapping),t.layers.enableAll(),h.unshift(t,t.geometry,t.material,0,0,null))}function n(h,r){h.getRGB(iQ,zt(i)),g.buffers.color.setClear(iQ.r,iQ.g,iQ.b,r,Q)}return{getClearColor:function(){return E},setClearColor:function(h,r=1){E.set(h),o=r,n(E,o)},getClearAlpha:function(){return o},setClearAlpha:function(h){o=h,n(E,o)},render:w}}function rn(i,A,I,g){const C=i.getParameter(34921),B=g.isWebGL2?null:A.get("OES_vertex_array_object"),Q=g.isWebGL2||B!==null,E={},o=h(null);let t=o,e=!1;function a(L,x,z,IA,j){let _=!1;if(Q){const gA=n(IA,z,x);t!==gA&&(t=gA,s(t.object)),_=r(L,IA,z,j),_&&M(L,IA,z,j)}else{const gA=x.wireframe===!0;(t.geometry!==IA.id||t.program!==z.id||t.wireframe!==gA)&&(t.geometry=IA.id,t.program=z.id,t.wireframe=gA,_=!0)}j!==null&&I.update(j,34963),(_||e)&&(e=!1,c(L,x,z,IA),j!==null&&i.bindBuffer(34963,I.get(j).buffer))}function D(){return g.isWebGL2?i.createVertexArray():B.createVertexArrayOES()}function s(L){return g.isWebGL2?i.bindVertexArray(L):B.bindVertexArrayOES(L)}function w(L){return g.isWebGL2?i.deleteVertexArray(L):B.deleteVertexArrayOES(L)}function n(L,x,z){const IA=z.wireframe===!0;let j=E[L.id];j===void 0&&(j={},E[L.id]=j);let _=j[x.id];_===void 0&&(_={},j[x.id]=_);let gA=_[IA];return gA===void 0&&(gA=h(D()),_[IA]=gA),gA}function h(L){const x=[],z=[],IA=[];for(let j=0;j<C;j++)x[j]=0,z[j]=0,IA[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:x,enabledAttributes:z,attributeDivisors:IA,object:L,attributes:{},index:null}}function r(L,x,z,IA){const j=t.attributes,_=x.attributes;let gA=0;const eA=z.getAttributes();for(const b in eA)if(eA[b].location>=0){const EA=j[b];let m=_[b];if(m===void 0&&(b==="instanceMatrix"&&L.instanceMatrix&&(m=L.instanceMatrix),b==="instanceColor"&&L.instanceColor&&(m=L.instanceColor)),EA===void 0||EA.attribute!==m||m&&EA.data!==m.data)return!0;gA++}return t.attributesNum!==gA||t.index!==IA}function M(L,x,z,IA){const j={},_=x.attributes;let gA=0;const eA=z.getAttributes();for(const b in eA)if(eA[b].location>=0){let EA=_[b];EA===void 0&&(b==="instanceMatrix"&&L.instanceMatrix&&(EA=L.instanceMatrix),b==="instanceColor"&&L.instanceColor&&(EA=L.instanceColor));const m={};m.attribute=EA,EA&&EA.data&&(m.data=EA.data),j[b]=m,gA++}t.attributes=j,t.attributesNum=gA,t.index=IA}function S(){const L=t.newAttributes;for(let x=0,z=L.length;x<z;x++)L[x]=0}function l(L){N(L,0)}function N(L,x){const z=t.newAttributes,IA=t.enabledAttributes,j=t.attributeDivisors;z[L]=1,IA[L]===0&&(i.enableVertexAttribArray(L),IA[L]=1),j[L]!==x&&((g.isWebGL2?i:A.get("ANGLE_instanced_arrays"))[g.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,x),j[L]=x)}function F(){const L=t.newAttributes,x=t.enabledAttributes;for(let z=0,IA=x.length;z<IA;z++)x[z]!==L[z]&&(i.disableVertexAttribArray(z),x[z]=0)}function d(L,x,z,IA,j,_){g.isWebGL2===!0&&(z===5124||z===5125)?i.vertexAttribIPointer(L,x,z,j,_):i.vertexAttribPointer(L,x,z,IA,j,_)}function c(L,x,z,IA){if(g.isWebGL2===!1&&(L.isInstancedMesh||IA.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;S();const j=IA.attributes,_=z.getAttributes(),gA=x.defaultAttributeValues;for(const eA in _){const b=_[eA];if(b.location>=0){let AA=j[eA];if(AA===void 0&&(eA==="instanceMatrix"&&L.instanceMatrix&&(AA=L.instanceMatrix),eA==="instanceColor"&&L.instanceColor&&(AA=L.instanceColor)),AA!==void 0){const EA=AA.normalized,m=AA.itemSize,hA=I.get(AA);if(hA===void 0)continue;const aA=hA.buffer,nA=hA.type,GA=hA.bytesPerElement;if(AA.isInterleavedBufferAttribute){const MA=AA.data,pA=MA.stride,fA=AA.offset;if(MA.isInstancedInterleavedBuffer){for(let WA=0;WA<b.locationSize;WA++)N(b.location+WA,MA.meshPerAttribute);L.isInstancedMesh!==!0&&IA._maxInstanceCount===void 0&&(IA._maxInstanceCount=MA.meshPerAttribute*MA.count)}else for(let WA=0;WA<b.locationSize;WA++)l(b.location+WA);i.bindBuffer(34962,aA);for(let WA=0;WA<b.locationSize;WA++)d(b.location+WA,m/b.locationSize,nA,EA,pA*GA,(fA+m/b.locationSize*WA)*GA)}else{if(AA.isInstancedBufferAttribute){for(let MA=0;MA<b.locationSize;MA++)N(b.location+MA,AA.meshPerAttribute);L.isInstancedMesh!==!0&&IA._maxInstanceCount===void 0&&(IA._maxInstanceCount=AA.meshPerAttribute*AA.count)}else for(let MA=0;MA<b.locationSize;MA++)l(b.location+MA);i.bindBuffer(34962,aA);for(let MA=0;MA<b.locationSize;MA++)d(b.location+MA,m/b.locationSize,nA,EA,m*GA,m/b.locationSize*MA*GA)}}else if(gA!==void 0){const EA=gA[eA];if(EA!==void 0)switch(EA.length){case 2:i.vertexAttrib2fv(b.location,EA);break;case 3:i.vertexAttrib3fv(b.location,EA);break;case 4:i.vertexAttrib4fv(b.location,EA);break;default:i.vertexAttrib1fv(b.location,EA)}}}}F()}function K(){X();for(const L in E){const x=E[L];for(const z in x){const IA=x[z];for(const j in IA)w(IA[j].object),delete IA[j];delete x[z]}delete E[L]}}function H(L){if(E[L.id]===void 0)return;const x=E[L.id];for(const z in x){const IA=x[z];for(const j in IA)w(IA[j].object),delete IA[j];delete x[z]}delete E[L.id]}function P(L){for(const x in E){const z=E[x];if(z[L.id]===void 0)continue;const IA=z[L.id];for(const j in IA)w(IA[j].object),delete IA[j];delete z[L.id]}}function X(){T(),e=!0,t!==o&&(t=o,s(t.object))}function T(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:a,reset:X,resetDefaultState:T,dispose:K,releaseStatesOfGeometry:H,releaseStatesOfProgram:P,initAttributes:S,enableAttribute:l,disableUnusedAttributes:F}}function Sn(i,A,I,g){const C=g.isWebGL2;let B;function Q(t){B=t}function E(t,e){i.drawArrays(B,t,e),I.update(e,B,1)}function o(t,e,a){if(a===0)return;let D,s;if(C)D=i,s="drawArraysInstanced";else if(D=A.get("ANGLE_instanced_arrays"),s="drawArraysInstancedANGLE",D===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}D[s](B,t,e,a),I.update(e,B,a)}this.setMode=Q,this.render=E,this.renderInstances=o}function cn(i,A,I){let g;function C(){if(g!==void 0)return g;if(A.has("EXT_texture_filter_anisotropic")===!0){const d=A.get("EXT_texture_filter_anisotropic");g=i.getParameter(d.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else g=0;return g}function B(d){if(d==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";d="mediump"}return d==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const Q=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext;let E=I.precision!==void 0?I.precision:"highp";const o=B(E);o!==E&&(console.warn("THREE.WebGLRenderer:",E,"not supported, using",o,"instead."),E=o);const t=Q||A.has("WEBGL_draw_buffers"),e=I.logarithmicDepthBuffer===!0,a=i.getParameter(34930),D=i.getParameter(35660),s=i.getParameter(3379),w=i.getParameter(34076),n=i.getParameter(34921),h=i.getParameter(36347),r=i.getParameter(36348),M=i.getParameter(36349),S=D>0,l=Q||A.has("OES_texture_float"),N=S&&l,F=Q?i.getParameter(36183):0;return{isWebGL2:Q,drawBuffers:t,getMaxAnisotropy:C,getMaxPrecision:B,precision:E,logarithmicDepthBuffer:e,maxTextures:a,maxVertexTextures:D,maxTextureSize:s,maxCubemapSize:w,maxAttributes:n,maxVertexUniforms:h,maxVaryings:r,maxFragmentUniforms:M,vertexTextures:S,floatFragmentTextures:l,floatVertexTextures:N,maxSamples:F}}function kn(i){const A=this;let I=null,g=0,C=!1,B=!1;const Q=new iC,E=new fI,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(a,D){const s=a.length!==0||D||g!==0||C;return C=D,g=a.length,s},this.beginShadows=function(){B=!0,e(null)},this.endShadows=function(){B=!1},this.setGlobalState=function(a,D){I=e(a,D,0)},this.setState=function(a,D,s){const w=a.clippingPlanes,n=a.clipIntersection,h=a.clipShadows,r=i.get(a);if(!C||w===null||w.length===0||B&&!h)B?e(null):t();else{const M=B?0:g,S=M*4;let l=r.clippingState||null;o.value=l,l=e(w,D,S,s);for(let N=0;N!==S;++N)l[N]=I[N];r.clippingState=l,this.numIntersection=n?this.numPlanes:0,this.numPlanes+=M}};function t(){o.value!==I&&(o.value=I,o.needsUpdate=g>0),A.numPlanes=g,A.numIntersection=0}function e(a,D,s,w){const n=a!==null?a.length:0;let h=null;if(n!==0){if(h=o.value,w!==!0||h===null){const r=s+n*4,M=D.matrixWorldInverse;E.getNormalMatrix(M),(h===null||h.length<r)&&(h=new Float32Array(r));for(let S=0,l=s;S!==n;++S,l+=4)Q.copy(a[S]).applyMatrix4(M,E),Q.normal.toArray(h,l),h[l+3]=Q.constant}o.value=h,o.needsUpdate=!0}return A.numPlanes=n,A.numIntersection=0,h}}function yn(i){let A=new WeakMap;function I(Q,E){return E===YE?Q.mapping=WC:E===LE&&(Q.mapping=vC),Q}function g(Q){if(Q&&Q.isTexture&&Q.isRenderTargetTexture===!1){const E=Q.mapping;if(E===YE||E===LE)if(A.has(Q)){const o=A.get(Q).texture;return I(o,Q.mapping)}else{const o=Q.image;if(o&&o.height>0){const t=new YD(o.height/2);return t.fromEquirectangularTexture(i,Q),A.set(Q,t),Q.addEventListener("dispose",C),I(t.texture,Q.mapping)}else return null}}return Q}function C(Q){const E=Q.target;E.removeEventListener("dispose",C);const o=A.get(E);o!==void 0&&(A.delete(E),o.dispose())}function B(){A=new WeakMap}return{get:g,dispose:B}}class ei extends $t{constructor(A=-1,I=1,g=1,C=-1,B=.1,Q=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=I,this.top=g,this.bottom=C,this.near=B,this.far=Q,this.updateProjectionMatrix()}copy(A,I){return super.copy(A,I),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,I,g,C,B,Q){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=I,this.view.offsetX=g,this.view.offsetY=C,this.view.width=B,this.view.height=Q,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),I=(this.top-this.bottom)/(2*this.zoom),g=(this.right+this.left)/2,C=(this.top+this.bottom)/2;let B=g-A,Q=g+A,E=C+I,o=C-I;if(this.view!==null&&this.view.enabled){const t=(this.right-this.left)/this.view.fullWidth/this.zoom,e=(this.top-this.bottom)/this.view.fullHeight/this.zoom;B+=t*this.view.offsetX,Q=B+t*this.view.width,E-=e*this.view.offsetY,o=E-e*this.view.height}this.projectionMatrix.makeOrthographic(B,Q,E,o,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const I=super.toJSON(A);return I.object.zoom=this.zoom,I.object.left=this.left,I.object.right=this.right,I.object.top=this.top,I.object.bottom=this.bottom,I.object.near=this.near,I.object.far=this.far,this.view!==null&&(I.object.view=Object.assign({},this.view)),I}}const mC=4,Lo=[.125,.215,.35,.446,.526,.582],tC=20,yE=new ei,fo=new FA;let ME=null;const oC=(1+Math.sqrt(5))/2,YC=1/oC,Ho=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,oC,YC),new q(0,oC,-YC),new q(YC,0,oC),new q(-YC,0,oC),new q(oC,YC,0),new q(-oC,YC,0)];class uo{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,I=0,g=.1,C=100){ME=this._renderer.getRenderTarget(),this._setSize(256);const B=this._allocateTargets();return B.depthBuffer=!0,this._sceneToCubeUV(A,g,C,B),I>0&&this._blur(B,0,0,I),this._applyPMREM(B),this._cleanup(B),B}fromEquirectangular(A,I=null){return this._fromTexture(A,I)}fromCubemap(A,I=null){return this._fromTexture(A,I)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=To(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(ME),A.scissorTest=!1,oQ(A,0,0,A.width,A.height)}_fromTexture(A,I){A.mapping===WC||A.mapping===vC?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),ME=this._renderer.getRenderTarget();const g=I||this._allocateTargets();return this._textureToCubeUV(A,g),this._applyPMREM(g),this._cleanup(g),g}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),I=4*this._cubeSize,g={magFilter:mI,minFilter:mI,generateMipmaps:!1,type:lB,format:_I,encoding:GC,depthBuffer:!1},C=mo(A,I,g);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==I){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=mo(A,I,g);const{_lodMax:B}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Mn(B)),this._blurMaterial=ln(B,A,I)}return C}_compileMaterial(A){const I=new KI(this._lodPlanes[0],A);this._renderer.compile(I,yE)}_sceneToCubeUV(A,I,g,C){const E=new LI(90,1,I,g),o=[1,-1,1,1,1,1],t=[1,1,1,-1,-1,-1],e=this._renderer,a=e.autoClear,D=e.toneMapping;e.getClearColor(fo),e.toneMapping=dg,e.autoClear=!1;const s=new pg({name:"PMREM.Background",side:WI,depthWrite:!1,depthTest:!1}),w=new KI(new jg,s);let n=!1;const h=A.background;h?h.isColor&&(s.color.copy(h),A.background=null,n=!0):(s.color.copy(fo),n=!0);for(let r=0;r<6;r++){const M=r%3;M===0?(E.up.set(0,o[r],0),E.lookAt(t[r],0,0)):M===1?(E.up.set(0,0,o[r]),E.lookAt(0,t[r],0)):(E.up.set(0,o[r],0),E.lookAt(0,0,t[r]));const S=this._cubeSize;oQ(C,M*S,r>2?S:0,S,S),e.setRenderTarget(C),n&&e.render(w,E),e.render(A,E)}w.geometry.dispose(),w.material.dispose(),e.toneMapping=D,e.autoClear=a,A.background=h}_textureToCubeUV(A,I){const g=this._renderer,C=A.mapping===WC||A.mapping===vC;C?(this._cubemapMaterial===null&&(this._cubemapMaterial=xo()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=To());const B=C?this._cubemapMaterial:this._equirectMaterial,Q=new KI(this._lodPlanes[0],B),E=B.uniforms;E.envMap.value=A;const o=this._cubeSize;oQ(I,0,0,3*o,2*o),g.setRenderTarget(I),g.render(Q,yE)}_applyPMREM(A){const I=this._renderer,g=I.autoClear;I.autoClear=!1;for(let C=1;C<this._lodPlanes.length;C++){const B=Math.sqrt(this._sigmas[C]*this._sigmas[C]-this._sigmas[C-1]*this._sigmas[C-1]),Q=Ho[(C-1)%Ho.length];this._blur(A,C-1,C,B,Q)}I.autoClear=g}_blur(A,I,g,C,B){const Q=this._pingPongRenderTarget;this._halfBlur(A,Q,I,g,C,"latitudinal",B),this._halfBlur(Q,A,g,g,C,"longitudinal",B)}_halfBlur(A,I,g,C,B,Q,E){const o=this._renderer,t=this._blurMaterial;Q!=="latitudinal"&&Q!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const e=3,a=new KI(this._lodPlanes[C],t),D=t.uniforms,s=this._sizeLods[g]-1,w=isFinite(B)?Math.PI/(2*s):2*Math.PI/(2*tC-1),n=B/w,h=isFinite(B)?1+Math.floor(e*n):tC;h>tC&&console.warn(`sigmaRadians, ${B}, is too large and will clip, as it requested ${h} samples when the maximum is set to ${tC}`);const r=[];let M=0;for(let d=0;d<tC;++d){const c=d/n,K=Math.exp(-c*c/2);r.push(K),d===0?M+=K:d<h&&(M+=2*K)}for(let d=0;d<r.length;d++)r[d]=r[d]/M;D.envMap.value=A.texture,D.samples.value=h,D.weights.value=r,D.latitudinal.value=Q==="latitudinal",E&&(D.poleAxis.value=E);const{_lodMax:S}=this;D.dTheta.value=w,D.mipInt.value=S-g;const l=this._sizeLods[C],N=3*l*(C>S-mC?C-S+mC:0),F=4*(this._cubeSize-l);oQ(I,N,F,3*l,2*l),o.setRenderTarget(I),o.render(a,yE)}}function Mn(i){const A=[],I=[],g=[];let C=i;const B=i-mC+1+Lo.length;for(let Q=0;Q<B;Q++){const E=Math.pow(2,C);I.push(E);let o=1/E;Q>i-mC?o=Lo[Q-i+mC-1]:Q===0&&(o=0),g.push(o);const t=1/(E-2),e=-t,a=1+t,D=[e,e,a,e,a,a,e,e,a,a,e,a],s=6,w=6,n=3,h=2,r=1,M=new Float32Array(n*w*s),S=new Float32Array(h*w*s),l=new Float32Array(r*w*s);for(let F=0;F<s;F++){const d=F%3*2/3-1,c=F>2?0:-1,K=[d,c,0,d+2/3,c,0,d+2/3,c+1,0,d,c,0,d+2/3,c+1,0,d,c+1,0];M.set(K,n*w*F),S.set(D,h*w*F);const H=[F,F,F,F,F,F];l.set(H,r*w*F)}const N=new og;N.setAttribute("position",new HI(M,n)),N.setAttribute("uv",new HI(S,h)),N.setAttribute("faceIndex",new HI(l,r)),A.push(N),C>mC&&C--}return{lodPlanes:A,sizeLods:I,sigmas:g}}function mo(i,A,I){const g=new wC(i,A,I);return g.texture.mapping=dQ,g.texture.name="PMREM.cubeUv",g.scissorTest=!0,g}function oQ(i,A,I,g,C){i.viewport.set(A,I,g,C),i.scissor.set(A,I,g,C)}function ln(i,A,I){const g=new Float32Array(tC),C=new q(0,1,0);return new rC({name:"SphericalGaussianBlur",defines:{n:tC,CUBEUV_TEXEL_WIDTH:1/A,CUBEUV_TEXEL_HEIGHT:1/I,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:g},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:C}},vertexShader:ai(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wg,depthTest:!1,depthWrite:!1})}function To(){return new rC({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ai(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wg,depthTest:!1,depthWrite:!1})}function xo(){return new rC({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ai(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wg,depthTest:!1,depthWrite:!1})}function ai(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Un(i){let A=new WeakMap,I=null;function g(E){if(E&&E.isTexture){const o=E.mapping,t=o===YE||o===LE,e=o===WC||o===vC;if(t||e)if(E.isRenderTargetTexture&&E.needsPMREMUpdate===!0){E.needsPMREMUpdate=!1;let a=A.get(E);return I===null&&(I=new uo(i)),a=t?I.fromEquirectangular(E,a):I.fromCubemap(E,a),A.set(E,a),a.texture}else{if(A.has(E))return A.get(E).texture;{const a=E.image;if(t&&a&&a.height>0||e&&a&&C(a)){I===null&&(I=new uo(i));const D=t?I.fromEquirectangular(E):I.fromCubemap(E);return A.set(E,D),E.addEventListener("dispose",B),D.texture}else return null}}}return E}function C(E){let o=0;const t=6;for(let e=0;e<t;e++)E[e]!==void 0&&o++;return o===t}function B(E){const o=E.target;o.removeEventListener("dispose",B);const t=A.get(o);t!==void 0&&(A.delete(o),t.dispose())}function Q(){A=new WeakMap,I!==null&&(I.dispose(),I=null)}return{get:g,dispose:Q}}function Kn(i){const A={};function I(g){if(A[g]!==void 0)return A[g];let C;switch(g){case"WEBGL_depth_texture":C=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":C=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":C=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":C=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:C=i.getExtension(g)}return A[g]=C,C}return{has:function(g){return I(g)!==null},init:function(g){g.isWebGL2?I("EXT_color_buffer_float"):(I("WEBGL_depth_texture"),I("OES_texture_float"),I("OES_texture_half_float"),I("OES_texture_half_float_linear"),I("OES_standard_derivatives"),I("OES_element_index_uint"),I("OES_vertex_array_object"),I("ANGLE_instanced_arrays")),I("OES_texture_float_linear"),I("EXT_color_buffer_half_float"),I("WEBGL_multisampled_render_to_texture")},get:function(g){const C=I(g);return C===null&&console.warn("THREE.WebGLRenderer: "+g+" extension not supported."),C}}}function Nn(i,A,I,g){const C={},B=new WeakMap;function Q(a){const D=a.target;D.index!==null&&A.remove(D.index);for(const w in D.attributes)A.remove(D.attributes[w]);D.removeEventListener("dispose",Q),delete C[D.id];const s=B.get(D);s&&(A.remove(s),B.delete(D)),g.releaseStatesOfGeometry(D),D.isInstancedBufferGeometry===!0&&delete D._maxInstanceCount,I.memory.geometries--}function E(a,D){return C[D.id]===!0||(D.addEventListener("dispose",Q),C[D.id]=!0,I.memory.geometries++),D}function o(a){const D=a.attributes;for(const w in D)A.update(D[w],34962);const s=a.morphAttributes;for(const w in s){const n=s[w];for(let h=0,r=n.length;h<r;h++)A.update(n[h],34962)}}function t(a){const D=[],s=a.index,w=a.attributes.position;let n=0;if(s!==null){const M=s.array;n=s.version;for(let S=0,l=M.length;S<l;S+=3){const N=M[S+0],F=M[S+1],d=M[S+2];D.push(N,F,F,d,d,N)}}else{const M=w.array;n=w.version;for(let S=0,l=M.length/3-1;S<l;S+=3){const N=S+0,F=S+1,d=S+2;D.push(N,F,F,d,d,N)}}const h=new(Wt(D)?_t:Xt)(D,1);h.version=n;const r=B.get(a);r&&A.remove(r),B.set(a,h)}function e(a){const D=B.get(a);if(D){const s=a.index;s!==null&&D.version<s.version&&t(a)}else t(a);return B.get(a)}return{get:E,update:o,getWireframeAttribute:e}}function Jn(i,A,I,g){const C=g.isWebGL2;let B;function Q(D){B=D}let E,o;function t(D){E=D.type,o=D.bytesPerElement}function e(D,s){i.drawElements(B,s,E,D*o),I.update(s,B,1)}function a(D,s,w){if(w===0)return;let n,h;if(C)n=i,h="drawElementsInstanced";else if(n=A.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",n===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}n[h](B,s,E,D*o,w),I.update(s,B,w)}this.setMode=Q,this.setIndex=t,this.render=e,this.renderInstances=a}function Fn(i){const A={geometries:0,textures:0},I={frame:0,calls:0,triangles:0,points:0,lines:0};function g(B,Q,E){switch(I.calls++,Q){case 4:I.triangles+=E*(B/3);break;case 1:I.lines+=E*(B/2);break;case 3:I.lines+=E*(B-1);break;case 2:I.lines+=E*B;break;case 0:I.points+=E*B;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",Q);break}}function C(){I.frame++,I.calls=0,I.triangles=0,I.points=0,I.lines=0}return{memory:A,render:I,programs:null,autoReset:!0,reset:C,update:g}}function Rn(i,A){return i[0]-A[0]}function qn(i,A){return Math.abs(A[1])-Math.abs(i[1])}function pn(i,A,I){const g={},C=new Float32Array(8),B=new WeakMap,Q=new zA,E=[];for(let t=0;t<8;t++)E[t]=[t,0];function o(t,e,a){const D=t.morphTargetInfluences;if(A.isWebGL2===!0){const s=e.morphAttributes.position||e.morphAttributes.normal||e.morphAttributes.color,w=s!==void 0?s.length:0;let n=B.get(e);if(n===void 0||n.count!==w){let L=function(){X.dispose(),B.delete(e),e.removeEventListener("dispose",L)};n!==void 0&&n.texture.dispose();const M=e.morphAttributes.position!==void 0,S=e.morphAttributes.normal!==void 0,l=e.morphAttributes.color!==void 0,N=e.morphAttributes.position||[],F=e.morphAttributes.normal||[],d=e.morphAttributes.color||[];let c=0;M===!0&&(c=1),S===!0&&(c=2),l===!0&&(c=3);let K=e.attributes.position.count*c,H=1;K>A.maxTextureSize&&(H=Math.ceil(K/A.maxTextureSize),K=A.maxTextureSize);const P=new Float32Array(K*H*4*w),X=new jt(P,K,H,w);X.type=Og,X.needsUpdate=!0;const T=c*4;for(let x=0;x<w;x++){const z=N[x],IA=F[x],j=d[x],_=K*H*4*x;for(let gA=0;gA<z.count;gA++){const eA=gA*T;M===!0&&(Q.fromBufferAttribute(z,gA),P[_+eA+0]=Q.x,P[_+eA+1]=Q.y,P[_+eA+2]=Q.z,P[_+eA+3]=0),S===!0&&(Q.fromBufferAttribute(IA,gA),P[_+eA+4]=Q.x,P[_+eA+5]=Q.y,P[_+eA+6]=Q.z,P[_+eA+7]=0),l===!0&&(Q.fromBufferAttribute(j,gA),P[_+eA+8]=Q.x,P[_+eA+9]=Q.y,P[_+eA+10]=Q.z,P[_+eA+11]=j.itemSize===4?Q.w:1)}}n={count:w,texture:X,size:new bA(K,H)},B.set(e,n),e.addEventListener("dispose",L)}let h=0;for(let M=0;M<D.length;M++)h+=D[M];const r=e.morphTargetsRelative?1:1-h;a.getUniforms().setValue(i,"morphTargetBaseInfluence",r),a.getUniforms().setValue(i,"morphTargetInfluences",D),a.getUniforms().setValue(i,"morphTargetsTexture",n.texture,I),a.getUniforms().setValue(i,"morphTargetsTextureSize",n.size)}else{const s=D===void 0?0:D.length;let w=g[e.id];if(w===void 0||w.length!==s){w=[];for(let S=0;S<s;S++)w[S]=[S,0];g[e.id]=w}for(let S=0;S<s;S++){const l=w[S];l[0]=S,l[1]=D[S]}w.sort(qn);for(let S=0;S<8;S++)S<s&&w[S][1]?(E[S][0]=w[S][0],E[S][1]=w[S][1]):(E[S][0]=Number.MAX_SAFE_INTEGER,E[S][1]=0);E.sort(Rn);const n=e.morphAttributes.position,h=e.morphAttributes.normal;let r=0;for(let S=0;S<8;S++){const l=E[S],N=l[0],F=l[1];N!==Number.MAX_SAFE_INTEGER&&F?(n&&e.getAttribute("morphTarget"+S)!==n[N]&&e.setAttribute("morphTarget"+S,n[N]),h&&e.getAttribute("morphNormal"+S)!==h[N]&&e.setAttribute("morphNormal"+S,h[N]),C[S]=F,r+=F):(n&&e.hasAttribute("morphTarget"+S)===!0&&e.deleteAttribute("morphTarget"+S),h&&e.hasAttribute("morphNormal"+S)===!0&&e.deleteAttribute("morphNormal"+S),C[S]=0)}const M=e.morphTargetsRelative?1:1-r;a.getUniforms().setValue(i,"morphTargetBaseInfluence",M),a.getUniforms().setValue(i,"morphTargetInfluences",C)}}return{update:o}}function dn(i,A,I,g){let C=new WeakMap;function B(o){const t=g.render.frame,e=o.geometry,a=A.get(o,e);return C.get(a)!==t&&(A.update(a),C.set(a,t)),o.isInstancedMesh&&(o.hasEventListener("dispose",E)===!1&&o.addEventListener("dispose",E),I.update(o.instanceMatrix,34962),o.instanceColor!==null&&I.update(o.instanceColor,34962)),a}function Q(){C=new WeakMap}function E(o){const t=o.target;t.removeEventListener("dispose",E),I.remove(t.instanceMatrix),t.instanceColor!==null&&I.remove(t.instanceColor)}return{update:B,dispose:Q}}const Ie=new MI,ge=new jt,Ce=new rD,Be=new ii,bo=[],Oo=[],Zo=new Float32Array(16),Wo=new Float32Array(9),vo=new Float32Array(4);function gB(i,A,I){const g=i[0];if(g<=0||g>0)return i;const C=A*I;let B=bo[C];if(B===void 0&&(B=new Float32Array(C),bo[C]=B),A!==0){g.toArray(B,0);for(let Q=1,E=0;Q!==A;++Q)E+=I,i[Q].toArray(B,E)}return B}function nI(i,A){if(i.length!==A.length)return!1;for(let I=0,g=i.length;I<g;I++)if(i[I]!==A[I])return!1;return!0}function GI(i,A){for(let I=0,g=A.length;I<g;I++)i[I]=A[I]}function LQ(i,A){let I=Oo[A];I===void 0&&(I=new Int32Array(A),Oo[A]=I);for(let g=0;g!==A;++g)I[g]=i.allocateTextureUnit();return I}function Yn(i,A){const I=this.cache;I[0]!==A&&(i.uniform1f(this.addr,A),I[0]=A)}function Ln(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(i.uniform2f(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(nI(I,A))return;i.uniform2fv(this.addr,A),GI(I,A)}}function fn(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(i.uniform3f(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else if(A.r!==void 0)(I[0]!==A.r||I[1]!==A.g||I[2]!==A.b)&&(i.uniform3f(this.addr,A.r,A.g,A.b),I[0]=A.r,I[1]=A.g,I[2]=A.b);else{if(nI(I,A))return;i.uniform3fv(this.addr,A),GI(I,A)}}function Hn(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(i.uniform4f(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(nI(I,A))return;i.uniform4fv(this.addr,A),GI(I,A)}}function un(i,A){const I=this.cache,g=A.elements;if(g===void 0){if(nI(I,A))return;i.uniformMatrix2fv(this.addr,!1,A),GI(I,A)}else{if(nI(I,g))return;vo.set(g),i.uniformMatrix2fv(this.addr,!1,vo),GI(I,g)}}function mn(i,A){const I=this.cache,g=A.elements;if(g===void 0){if(nI(I,A))return;i.uniformMatrix3fv(this.addr,!1,A),GI(I,A)}else{if(nI(I,g))return;Wo.set(g),i.uniformMatrix3fv(this.addr,!1,Wo),GI(I,g)}}function Tn(i,A){const I=this.cache,g=A.elements;if(g===void 0){if(nI(I,A))return;i.uniformMatrix4fv(this.addr,!1,A),GI(I,A)}else{if(nI(I,g))return;Zo.set(g),i.uniformMatrix4fv(this.addr,!1,Zo),GI(I,g)}}function xn(i,A){const I=this.cache;I[0]!==A&&(i.uniform1i(this.addr,A),I[0]=A)}function bn(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(i.uniform2i(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(nI(I,A))return;i.uniform2iv(this.addr,A),GI(I,A)}}function On(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(i.uniform3i(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(nI(I,A))return;i.uniform3iv(this.addr,A),GI(I,A)}}function Zn(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(i.uniform4i(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(nI(I,A))return;i.uniform4iv(this.addr,A),GI(I,A)}}function Wn(i,A){const I=this.cache;I[0]!==A&&(i.uniform1ui(this.addr,A),I[0]=A)}function vn(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y)&&(i.uniform2ui(this.addr,A.x,A.y),I[0]=A.x,I[1]=A.y);else{if(nI(I,A))return;i.uniform2uiv(this.addr,A),GI(I,A)}}function Pn(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z)&&(i.uniform3ui(this.addr,A.x,A.y,A.z),I[0]=A.x,I[1]=A.y,I[2]=A.z);else{if(nI(I,A))return;i.uniform3uiv(this.addr,A),GI(I,A)}}function jn(i,A){const I=this.cache;if(A.x!==void 0)(I[0]!==A.x||I[1]!==A.y||I[2]!==A.z||I[3]!==A.w)&&(i.uniform4ui(this.addr,A.x,A.y,A.z,A.w),I[0]=A.x,I[1]=A.y,I[2]=A.z,I[3]=A.w);else{if(nI(I,A))return;i.uniform4uiv(this.addr,A),GI(I,A)}}function Vn(i,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(i.uniform1i(this.addr,C),g[0]=C),I.setTexture2D(A||Ie,C)}function Xn(i,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(i.uniform1i(this.addr,C),g[0]=C),I.setTexture3D(A||Ce,C)}function _n(i,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(i.uniform1i(this.addr,C),g[0]=C),I.setTextureCube(A||Be,C)}function zn(i,A,I){const g=this.cache,C=I.allocateTextureUnit();g[0]!==C&&(i.uniform1i(this.addr,C),g[0]=C),I.setTexture2DArray(A||ge,C)}function $n(i){switch(i){case 5126:return Yn;case 35664:return Ln;case 35665:return fn;case 35666:return Hn;case 35674:return un;case 35675:return mn;case 35676:return Tn;case 5124:case 35670:return xn;case 35667:case 35671:return bn;case 35668:case 35672:return On;case 35669:case 35673:return Zn;case 5125:return Wn;case 36294:return vn;case 36295:return Pn;case 36296:return jn;case 35678:case 36198:case 36298:case 36306:case 35682:return Vn;case 35679:case 36299:case 36307:return Xn;case 35680:case 36300:case 36308:case 36293:return _n;case 36289:case 36303:case 36311:case 36292:return zn}}function AG(i,A){i.uniform1fv(this.addr,A)}function IG(i,A){const I=gB(A,this.size,2);i.uniform2fv(this.addr,I)}function gG(i,A){const I=gB(A,this.size,3);i.uniform3fv(this.addr,I)}function CG(i,A){const I=gB(A,this.size,4);i.uniform4fv(this.addr,I)}function BG(i,A){const I=gB(A,this.size,4);i.uniformMatrix2fv(this.addr,!1,I)}function QG(i,A){const I=gB(A,this.size,9);i.uniformMatrix3fv(this.addr,!1,I)}function EG(i,A){const I=gB(A,this.size,16);i.uniformMatrix4fv(this.addr,!1,I)}function iG(i,A){i.uniform1iv(this.addr,A)}function oG(i,A){i.uniform2iv(this.addr,A)}function tG(i,A){i.uniform3iv(this.addr,A)}function eG(i,A){i.uniform4iv(this.addr,A)}function aG(i,A){i.uniform1uiv(this.addr,A)}function DG(i,A){i.uniform2uiv(this.addr,A)}function sG(i,A){i.uniform3uiv(this.addr,A)}function hG(i,A){i.uniform4uiv(this.addr,A)}function nG(i,A,I){const g=this.cache,C=A.length,B=LQ(I,C);nI(g,B)||(i.uniform1iv(this.addr,B),GI(g,B));for(let Q=0;Q!==C;++Q)I.setTexture2D(A[Q]||Ie,B[Q])}function GG(i,A,I){const g=this.cache,C=A.length,B=LQ(I,C);nI(g,B)||(i.uniform1iv(this.addr,B),GI(g,B));for(let Q=0;Q!==C;++Q)I.setTexture3D(A[Q]||Ce,B[Q])}function wG(i,A,I){const g=this.cache,C=A.length,B=LQ(I,C);nI(g,B)||(i.uniform1iv(this.addr,B),GI(g,B));for(let Q=0;Q!==C;++Q)I.setTextureCube(A[Q]||Be,B[Q])}function rG(i,A,I){const g=this.cache,C=A.length,B=LQ(I,C);nI(g,B)||(i.uniform1iv(this.addr,B),GI(g,B));for(let Q=0;Q!==C;++Q)I.setTexture2DArray(A[Q]||ge,B[Q])}function SG(i){switch(i){case 5126:return AG;case 35664:return IG;case 35665:return gG;case 35666:return CG;case 35674:return BG;case 35675:return QG;case 35676:return EG;case 5124:case 35670:return iG;case 35667:case 35671:return oG;case 35668:case 35672:return tG;case 35669:case 35673:return eG;case 5125:return aG;case 36294:return DG;case 36295:return sG;case 36296:return hG;case 35678:case 36198:case 36298:case 36306:case 35682:return nG;case 35679:case 36299:case 36307:return GG;case 35680:case 36300:case 36308:case 36293:return wG;case 36289:case 36303:case 36311:case 36292:return rG}}class cG{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.setValue=$n(I.type)}}class kG{constructor(A,I,g){this.id=A,this.addr=g,this.cache=[],this.size=I.size,this.setValue=SG(I.type)}}class yG{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,I,g){const C=this.seq;for(let B=0,Q=C.length;B!==Q;++B){const E=C[B];E.setValue(A,I[E.id],g)}}}const lE=/(\w+)(\])?(\[|\.)?/g;function Po(i,A){i.seq.push(A),i.map[A.id]=A}function MG(i,A,I){const g=i.name,C=g.length;for(lE.lastIndex=0;;){const B=lE.exec(g),Q=lE.lastIndex;let E=B[1];const o=B[2]==="]",t=B[3];if(o&&(E=E|0),t===void 0||t==="["&&Q+2===C){Po(I,t===void 0?new cG(E,i,A):new kG(E,i,A));break}else{let a=I.map[E];a===void 0&&(a=new yG(E),Po(I,a)),I=a}}}class GQ{constructor(A,I){this.seq=[],this.map={};const g=A.getProgramParameter(I,35718);for(let C=0;C<g;++C){const B=A.getActiveUniform(I,C),Q=A.getUniformLocation(I,B.name);MG(B,Q,this)}}setValue(A,I,g,C){const B=this.map[I];B!==void 0&&B.setValue(A,g,C)}setOptional(A,I,g){const C=I[g];C!==void 0&&this.setValue(A,g,C)}static upload(A,I,g,C){for(let B=0,Q=I.length;B!==Q;++B){const E=I[B],o=g[E.id];o.needsUpdate!==!1&&E.setValue(A,o.value,C)}}static seqWithValue(A,I){const g=[];for(let C=0,B=A.length;C!==B;++C){const Q=A[C];Q.id in I&&g.push(Q)}return g}}function jo(i,A,I){const g=i.createShader(A);return i.shaderSource(g,I),i.compileShader(g),g}let lG=0;function UG(i,A){const I=i.split(`
`),g=[],C=Math.max(A-6,0),B=Math.min(A+6,I.length);for(let Q=C;Q<B;Q++){const E=Q+1;g.push(`${E===A?">":" "} ${E}: ${I[Q]}`)}return g.join(`
`)}function KG(i){switch(i){case GC:return["Linear","( value )"];case vA:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function Vo(i,A,I){const g=i.getShaderParameter(A,35713),C=i.getShaderInfoLog(A).trim();if(g&&C==="")return"";const B=/ERROR: 0:(\d+)/.exec(C);if(B){const Q=parseInt(B[1]);return I.toUpperCase()+`

`+C+`

`+UG(i.getShaderSource(A),Q)}else return C}function NG(i,A){const I=KG(A);return"vec4 "+i+"( vec4 value ) { return LinearTo"+I[0]+I[1]+"; }"}function JG(i,A){let I;switch(A){case Ua:I="Linear";break;case Ka:I="Reinhard";break;case Na:I="OptimizedCineon";break;case Ja:I="ACESFilmic";break;case Fa:I="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),I="Linear"}return"vec3 "+i+"( vec3 color ) { return "+I+"ToneMapping( color ); }"}function FG(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(cB).join(`
`)}function RG(i){const A=[];for(const I in i){const g=i[I];g!==!1&&A.push("#define "+I+" "+g)}return A.join(`
`)}function qG(i,A){const I={},g=i.getProgramParameter(A,35721);for(let C=0;C<g;C++){const B=i.getActiveAttrib(A,C),Q=B.name;let E=1;B.type===35674&&(E=2),B.type===35675&&(E=3),B.type===35676&&(E=4),I[Q]={type:B.type,location:i.getAttribLocation(A,Q),locationSize:E}}return I}function cB(i){return i!==""}function Xo(i,A){const I=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,I).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function _o(i,A){return i.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const pG=/^[ \t]*#include +<([\w\d./]+)>/gm;function xE(i){return i.replace(pG,dG)}function dG(i,A){const I=JA[A];if(I===void 0)throw new Error("Can not resolve #include <"+A+">");return xE(I)}const YG=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zo(i){return i.replace(YG,LG)}function LG(i,A,I,g){let C="";for(let B=parseInt(A);B<parseInt(I);B++)C+=g.replace(/\[\s*i\s*\]/g,"[ "+B+" ]").replace(/UNROLLED_LOOP_INDEX/g,B);return C}function $o(i){let A="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?A+=`
#define HIGH_PRECISION`:i.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function fG(i){let A="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===pt?A="SHADOWMAP_TYPE_PCF":i.shadowMapType===dt?A="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===SB&&(A="SHADOWMAP_TYPE_VSM"),A}function HG(i){let A="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case WC:case vC:A="ENVMAP_TYPE_CUBE";break;case dQ:A="ENVMAP_TYPE_CUBE_UV";break}return A}function uG(i){let A="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case vC:A="ENVMAP_MODE_REFRACTION";break}return A}function mG(i){let A="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ft:A="ENVMAP_BLENDING_MULTIPLY";break;case Ma:A="ENVMAP_BLENDING_MIX";break;case la:A="ENVMAP_BLENDING_ADD";break}return A}function TG(i){const A=i.envMapCubeUVHeight;if(A===null)return null;const I=Math.log2(A)-2,g=1/A;return{texelWidth:1/(3*Math.max(Math.pow(2,I),7*16)),texelHeight:g,maxMip:I}}function xG(i,A,I,g){const C=i.getContext(),B=I.defines;let Q=I.vertexShader,E=I.fragmentShader;const o=fG(I),t=HG(I),e=uG(I),a=mG(I),D=TG(I),s=I.isWebGL2?"":FG(I),w=RG(B),n=C.createProgram();let h,r,M=I.glslVersion?"#version "+I.glslVersion+`
`:"";I.isRawShaderMaterial?(h=[w].filter(cB).join(`
`),h.length>0&&(h+=`
`),r=[s,w].filter(cB).join(`
`),r.length>0&&(r+=`
`)):(h=[$o(I),"#define SHADER_NAME "+I.shaderName,w,I.instancing?"#define USE_INSTANCING":"",I.instancingColor?"#define USE_INSTANCING_COLOR":"",I.supportsVertexTextures?"#define VERTEX_TEXTURES":"",I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+e:"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMap&&I.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",I.normalMap&&I.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.displacementMap&&I.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",I.specularColorMap?"#define USE_SPECULARCOLORMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.sheenColorMap?"#define USE_SHEENCOLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",I.vertexTangents?"#define USE_TANGENT":"",I.vertexColors?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUvs?"#define USE_UV":"",I.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",I.flatShading?"#define FLAT_SHADED":"",I.skinning?"#define USE_SKINNING":"",I.morphTargets?"#define USE_MORPHTARGETS":"",I.morphNormals&&I.flatShading===!1?"#define USE_MORPHNORMALS":"",I.morphColors&&I.isWebGL2?"#define USE_MORPHCOLORS":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+I.morphTextureStride:"",I.morphTargetsCount>0&&I.isWebGL2?"#define MORPHTARGETS_COUNT "+I.morphTargetsCount:"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.sizeAttenuation?"#define USE_SIZEATTENUATION":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cB).join(`
`),r=[s,$o(I),"#define SHADER_NAME "+I.shaderName,w,I.useFog&&I.fog?"#define USE_FOG":"",I.useFog&&I.fogExp2?"#define FOG_EXP2":"",I.map?"#define USE_MAP":"",I.matcap?"#define USE_MATCAP":"",I.envMap?"#define USE_ENVMAP":"",I.envMap?"#define "+t:"",I.envMap?"#define "+e:"",I.envMap?"#define "+a:"",D?"#define CUBEUV_TEXEL_WIDTH "+D.texelWidth:"",D?"#define CUBEUV_TEXEL_HEIGHT "+D.texelHeight:"",D?"#define CUBEUV_MAX_MIP "+D.maxMip+".0":"",I.lightMap?"#define USE_LIGHTMAP":"",I.aoMap?"#define USE_AOMAP":"",I.emissiveMap?"#define USE_EMISSIVEMAP":"",I.bumpMap?"#define USE_BUMPMAP":"",I.normalMap?"#define USE_NORMALMAP":"",I.normalMap&&I.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",I.normalMap&&I.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",I.clearcoat?"#define USE_CLEARCOAT":"",I.clearcoatMap?"#define USE_CLEARCOATMAP":"",I.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",I.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",I.iridescence?"#define USE_IRIDESCENCE":"",I.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",I.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",I.specularMap?"#define USE_SPECULARMAP":"",I.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",I.specularColorMap?"#define USE_SPECULARCOLORMAP":"",I.roughnessMap?"#define USE_ROUGHNESSMAP":"",I.metalnessMap?"#define USE_METALNESSMAP":"",I.alphaMap?"#define USE_ALPHAMAP":"",I.alphaTest?"#define USE_ALPHATEST":"",I.sheen?"#define USE_SHEEN":"",I.sheenColorMap?"#define USE_SHEENCOLORMAP":"",I.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",I.transmission?"#define USE_TRANSMISSION":"",I.transmissionMap?"#define USE_TRANSMISSIONMAP":"",I.thicknessMap?"#define USE_THICKNESSMAP":"",I.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",I.vertexTangents?"#define USE_TANGENT":"",I.vertexColors||I.instancingColor?"#define USE_COLOR":"",I.vertexAlphas?"#define USE_COLOR_ALPHA":"",I.vertexUvs?"#define USE_UV":"",I.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",I.gradientMap?"#define USE_GRADIENTMAP":"",I.flatShading?"#define FLAT_SHADED":"",I.doubleSided?"#define DOUBLE_SIDED":"",I.flipSided?"#define FLIP_SIDED":"",I.shadowMapEnabled?"#define USE_SHADOWMAP":"",I.shadowMapEnabled?"#define "+o:"",I.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",I.useLegacyLights?"#define LEGACY_LIGHTS":"",I.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",I.logarithmicDepthBuffer&&I.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",I.toneMapping!==dg?"#define TONE_MAPPING":"",I.toneMapping!==dg?JA.tonemapping_pars_fragment:"",I.toneMapping!==dg?JG("toneMapping",I.toneMapping):"",I.dithering?"#define DITHERING":"",I.opaque?"#define OPAQUE":"",JA.encodings_pars_fragment,NG("linearToOutputTexel",I.outputEncoding),I.useDepthPacking?"#define DEPTH_PACKING "+I.depthPacking:"",`
`].filter(cB).join(`
`)),Q=xE(Q),Q=Xo(Q,I),Q=_o(Q,I),E=xE(E),E=Xo(E,I),E=_o(E,I),Q=zo(Q),E=zo(E),I.isWebGL2&&I.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,h=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,r=["#define varying in",I.glslVersion===ko?"":"layout(location = 0) out highp vec4 pc_fragColor;",I.glslVersion===ko?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+r);const S=M+h+Q,l=M+r+E,N=jo(C,35633,S),F=jo(C,35632,l);if(C.attachShader(n,N),C.attachShader(n,F),I.index0AttributeName!==void 0?C.bindAttribLocation(n,0,I.index0AttributeName):I.morphTargets===!0&&C.bindAttribLocation(n,0,"position"),C.linkProgram(n),i.debug.checkShaderErrors){const K=C.getProgramInfoLog(n).trim(),H=C.getShaderInfoLog(N).trim(),P=C.getShaderInfoLog(F).trim();let X=!0,T=!0;if(C.getProgramParameter(n,35714)===!1){X=!1;const L=Vo(C,N,"vertex"),x=Vo(C,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+C.getError()+" - VALIDATE_STATUS "+C.getProgramParameter(n,35715)+`

Program Info Log: `+K+`
`+L+`
`+x)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(H===""||P==="")&&(T=!1);T&&(this.diagnostics={runnable:X,programLog:K,vertexShader:{log:H,prefix:h},fragmentShader:{log:P,prefix:r}})}C.deleteShader(N),C.deleteShader(F);let d;this.getUniforms=function(){return d===void 0&&(d=new GQ(C,n)),d};let c;return this.getAttributes=function(){return c===void 0&&(c=qG(C,n)),c},this.destroy=function(){g.releaseStatesOfProgram(this),C.deleteProgram(n),this.program=void 0},this.name=I.shaderName,this.id=lG++,this.cacheKey=A,this.usedTimes=1,this.program=n,this.vertexShader=N,this.fragmentShader=F,this}let bG=0;class OG{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const I=A.vertexShader,g=A.fragmentShader,C=this._getShaderStage(I),B=this._getShaderStage(g),Q=this._getShaderCacheForMaterial(A);return Q.has(C)===!1&&(Q.add(C),C.usedTimes++),Q.has(B)===!1&&(Q.add(B),B.usedTimes++),this}remove(A){const I=this.materialCache.get(A);for(const g of I)g.usedTimes--,g.usedTimes===0&&this.shaderCache.delete(g.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const I=this.materialCache;let g=I.get(A);return g===void 0&&(g=new Set,I.set(A,g)),g}_getShaderStage(A){const I=this.shaderCache;let g=I.get(A);return g===void 0&&(g=new ZG(A),I.set(A,g)),g}}class ZG{constructor(A){this.id=bG++,this.code=A,this.usedTimes=0}}function WG(i,A,I,g,C,B,Q){const E=new Ei,o=new OG,t=[],e=C.isWebGL2,a=C.logarithmicDepthBuffer,D=C.vertexTextures;let s=C.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function n(c,K,H,P,X){const T=P.fog,L=X.geometry,x=c.isMeshStandardMaterial?P.environment:null,z=(c.isMeshStandardMaterial?I:A).get(c.envMap||x),IA=z&&z.mapping===dQ?z.image.height:null,j=w[c.type];c.precision!==null&&(s=C.getMaxPrecision(c.precision),s!==c.precision&&console.warn("THREE.WebGLProgram.getParameters:",c.precision,"not supported, using",s,"instead."));const _=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,gA=_!==void 0?_.length:0;let eA=0;L.morphAttributes.position!==void 0&&(eA=1),L.morphAttributes.normal!==void 0&&(eA=2),L.morphAttributes.color!==void 0&&(eA=3);let b,AA,EA,m;if(j){const pA=ng[j];b=pA.vertexShader,AA=pA.fragmentShader}else b=c.vertexShader,AA=c.fragmentShader,o.update(c),EA=o.getVertexShaderID(c),m=o.getFragmentShaderID(c);const hA=i.getRenderTarget(),aA=c.alphaTest>0,nA=c.clearcoat>0,GA=c.iridescence>0;return{isWebGL2:e,shaderID:j,shaderName:c.type,vertexShader:b,fragmentShader:AA,defines:c.defines,customVertexShaderID:EA,customFragmentShaderID:m,isRawShaderMaterial:c.isRawShaderMaterial===!0,glslVersion:c.glslVersion,precision:s,instancing:X.isInstancedMesh===!0,instancingColor:X.isInstancedMesh===!0&&X.instanceColor!==null,supportsVertexTextures:D,outputEncoding:hA===null?i.outputEncoding:hA.isXRRenderTarget===!0?hA.texture.encoding:GC,map:!!c.map,matcap:!!c.matcap,envMap:!!z,envMapMode:z&&z.mapping,envMapCubeUVHeight:IA,lightMap:!!c.lightMap,aoMap:!!c.aoMap,emissiveMap:!!c.emissiveMap,bumpMap:!!c.bumpMap,normalMap:!!c.normalMap,objectSpaceNormalMap:c.normalMapType===Va,tangentSpaceNormalMap:c.normalMapType===xt,decodeVideoTexture:!!c.map&&c.map.isVideoTexture===!0&&c.map.encoding===vA,clearcoat:nA,clearcoatMap:nA&&!!c.clearcoatMap,clearcoatRoughnessMap:nA&&!!c.clearcoatRoughnessMap,clearcoatNormalMap:nA&&!!c.clearcoatNormalMap,iridescence:GA,iridescenceMap:GA&&!!c.iridescenceMap,iridescenceThicknessMap:GA&&!!c.iridescenceThicknessMap,displacementMap:!!c.displacementMap,roughnessMap:!!c.roughnessMap,metalnessMap:!!c.metalnessMap,specularMap:!!c.specularMap,specularIntensityMap:!!c.specularIntensityMap,specularColorMap:!!c.specularColorMap,opaque:c.transparent===!1&&c.blending===xC,alphaMap:!!c.alphaMap,alphaTest:aA,gradientMap:!!c.gradientMap,sheen:c.sheen>0,sheenColorMap:!!c.sheenColorMap,sheenRoughnessMap:!!c.sheenRoughnessMap,transmission:c.transmission>0,transmissionMap:!!c.transmissionMap,thicknessMap:!!c.thicknessMap,combine:c.combine,vertexTangents:!!c.normalMap&&!!L.attributes.tangent,vertexColors:c.vertexColors,vertexAlphas:c.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs:!!c.map||!!c.bumpMap||!!c.normalMap||!!c.specularMap||!!c.alphaMap||!!c.emissiveMap||!!c.roughnessMap||!!c.metalnessMap||!!c.clearcoatMap||!!c.clearcoatRoughnessMap||!!c.clearcoatNormalMap||!!c.iridescenceMap||!!c.iridescenceThicknessMap||!!c.displacementMap||!!c.transmissionMap||!!c.thicknessMap||!!c.specularIntensityMap||!!c.specularColorMap||!!c.sheenColorMap||!!c.sheenRoughnessMap,uvsVertexOnly:!(c.map||c.bumpMap||c.normalMap||c.specularMap||c.alphaMap||c.emissiveMap||c.roughnessMap||c.metalnessMap||c.clearcoatNormalMap||c.iridescenceMap||c.iridescenceThicknessMap||c.transmission>0||c.transmissionMap||c.thicknessMap||c.specularIntensityMap||c.specularColorMap||c.sheen>0||c.sheenColorMap||c.sheenRoughnessMap)&&!!c.displacementMap,fog:!!T,useFog:c.fog===!0,fogExp2:T&&T.isFogExp2,flatShading:!!c.flatShading,sizeAttenuation:c.sizeAttenuation,logarithmicDepthBuffer:a,skinning:X.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:gA,morphTextureStride:eA,numDirLights:K.directional.length,numPointLights:K.point.length,numSpotLights:K.spot.length,numSpotLightMaps:K.spotLightMap.length,numRectAreaLights:K.rectArea.length,numHemiLights:K.hemi.length,numDirLightShadows:K.directionalShadowMap.length,numPointLightShadows:K.pointShadowMap.length,numSpotLightShadows:K.spotShadowMap.length,numSpotLightShadowsWithMaps:K.numSpotLightShadowsWithMaps,numClippingPlanes:Q.numPlanes,numClipIntersection:Q.numIntersection,dithering:c.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:c.toneMapped?i.toneMapping:dg,useLegacyLights:i.useLegacyLights,premultipliedAlpha:c.premultipliedAlpha,doubleSided:c.side===Rg,flipSided:c.side===WI,useDepthPacking:!!c.depthPacking,depthPacking:c.depthPacking||0,index0AttributeName:c.index0AttributeName,extensionDerivatives:c.extensions&&c.extensions.derivatives,extensionFragDepth:c.extensions&&c.extensions.fragDepth,extensionDrawBuffers:c.extensions&&c.extensions.drawBuffers,extensionShaderTextureLOD:c.extensions&&c.extensions.shaderTextureLOD,rendererExtensionFragDepth:e||g.has("EXT_frag_depth"),rendererExtensionDrawBuffers:e||g.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:e||g.has("EXT_shader_texture_lod"),customProgramCacheKey:c.customProgramCacheKey()}}function h(c){const K=[];if(c.shaderID?K.push(c.shaderID):(K.push(c.customVertexShaderID),K.push(c.customFragmentShaderID)),c.defines!==void 0)for(const H in c.defines)K.push(H),K.push(c.defines[H]);return c.isRawShaderMaterial===!1&&(r(K,c),M(K,c),K.push(i.outputEncoding)),K.push(c.customProgramCacheKey),K.join()}function r(c,K){c.push(K.precision),c.push(K.outputEncoding),c.push(K.envMapMode),c.push(K.envMapCubeUVHeight),c.push(K.combine),c.push(K.vertexUvs),c.push(K.fogExp2),c.push(K.sizeAttenuation),c.push(K.morphTargetsCount),c.push(K.morphAttributeCount),c.push(K.numDirLights),c.push(K.numPointLights),c.push(K.numSpotLights),c.push(K.numSpotLightMaps),c.push(K.numHemiLights),c.push(K.numRectAreaLights),c.push(K.numDirLightShadows),c.push(K.numPointLightShadows),c.push(K.numSpotLightShadows),c.push(K.numSpotLightShadowsWithMaps),c.push(K.shadowMapType),c.push(K.toneMapping),c.push(K.numClippingPlanes),c.push(K.numClipIntersection),c.push(K.depthPacking)}function M(c,K){E.disableAll(),K.isWebGL2&&E.enable(0),K.supportsVertexTextures&&E.enable(1),K.instancing&&E.enable(2),K.instancingColor&&E.enable(3),K.map&&E.enable(4),K.matcap&&E.enable(5),K.envMap&&E.enable(6),K.lightMap&&E.enable(7),K.aoMap&&E.enable(8),K.emissiveMap&&E.enable(9),K.bumpMap&&E.enable(10),K.normalMap&&E.enable(11),K.objectSpaceNormalMap&&E.enable(12),K.tangentSpaceNormalMap&&E.enable(13),K.clearcoat&&E.enable(14),K.clearcoatMap&&E.enable(15),K.clearcoatRoughnessMap&&E.enable(16),K.clearcoatNormalMap&&E.enable(17),K.iridescence&&E.enable(18),K.iridescenceMap&&E.enable(19),K.iridescenceThicknessMap&&E.enable(20),K.displacementMap&&E.enable(21),K.specularMap&&E.enable(22),K.roughnessMap&&E.enable(23),K.metalnessMap&&E.enable(24),K.gradientMap&&E.enable(25),K.alphaMap&&E.enable(26),K.alphaTest&&E.enable(27),K.vertexColors&&E.enable(28),K.vertexAlphas&&E.enable(29),K.vertexUvs&&E.enable(30),K.vertexTangents&&E.enable(31),K.uvsVertexOnly&&E.enable(32),c.push(E.mask),E.disableAll(),K.fog&&E.enable(0),K.useFog&&E.enable(1),K.flatShading&&E.enable(2),K.logarithmicDepthBuffer&&E.enable(3),K.skinning&&E.enable(4),K.morphTargets&&E.enable(5),K.morphNormals&&E.enable(6),K.morphColors&&E.enable(7),K.premultipliedAlpha&&E.enable(8),K.shadowMapEnabled&&E.enable(9),K.useLegacyLights&&E.enable(10),K.doubleSided&&E.enable(11),K.flipSided&&E.enable(12),K.useDepthPacking&&E.enable(13),K.dithering&&E.enable(14),K.specularIntensityMap&&E.enable(15),K.specularColorMap&&E.enable(16),K.transmission&&E.enable(17),K.transmissionMap&&E.enable(18),K.thicknessMap&&E.enable(19),K.sheen&&E.enable(20),K.sheenColorMap&&E.enable(21),K.sheenRoughnessMap&&E.enable(22),K.decodeVideoTexture&&E.enable(23),K.opaque&&E.enable(24),c.push(E.mask)}function S(c){const K=w[c.type];let H;if(K){const P=ng[K];H=RD.clone(P.uniforms)}else H=c.uniforms;return H}function l(c,K){let H;for(let P=0,X=t.length;P<X;P++){const T=t[P];if(T.cacheKey===K){H=T,++H.usedTimes;break}}return H===void 0&&(H=new xG(i,K,c,B),t.push(H)),H}function N(c){if(--c.usedTimes===0){const K=t.indexOf(c);t[K]=t[t.length-1],t.pop(),c.destroy()}}function F(c){o.remove(c)}function d(){o.dispose()}return{getParameters:n,getProgramCacheKey:h,getUniforms:S,acquireProgram:l,releaseProgram:N,releaseShaderCache:F,programs:t,dispose:d}}function vG(){let i=new WeakMap;function A(B){let Q=i.get(B);return Q===void 0&&(Q={},i.set(B,Q)),Q}function I(B){i.delete(B)}function g(B,Q,E){i.get(B)[Q]=E}function C(){i=new WeakMap}return{get:A,remove:I,update:g,dispose:C}}function PG(i,A){return i.groupOrder!==A.groupOrder?i.groupOrder-A.groupOrder:i.renderOrder!==A.renderOrder?i.renderOrder-A.renderOrder:i.material.id!==A.material.id?i.material.id-A.material.id:i.z!==A.z?i.z-A.z:i.id-A.id}function At(i,A){return i.groupOrder!==A.groupOrder?i.groupOrder-A.groupOrder:i.renderOrder!==A.renderOrder?i.renderOrder-A.renderOrder:i.z!==A.z?A.z-i.z:i.id-A.id}function It(){const i=[];let A=0;const I=[],g=[],C=[];function B(){A=0,I.length=0,g.length=0,C.length=0}function Q(a,D,s,w,n,h){let r=i[A];return r===void 0?(r={id:a.id,object:a,geometry:D,material:s,groupOrder:w,renderOrder:a.renderOrder,z:n,group:h},i[A]=r):(r.id=a.id,r.object=a,r.geometry=D,r.material=s,r.groupOrder=w,r.renderOrder=a.renderOrder,r.z=n,r.group=h),A++,r}function E(a,D,s,w,n,h){const r=Q(a,D,s,w,n,h);s.transmission>0?g.push(r):s.transparent===!0?C.push(r):I.push(r)}function o(a,D,s,w,n,h){const r=Q(a,D,s,w,n,h);s.transmission>0?g.unshift(r):s.transparent===!0?C.unshift(r):I.unshift(r)}function t(a,D){I.length>1&&I.sort(a||PG),g.length>1&&g.sort(D||At),C.length>1&&C.sort(D||At)}function e(){for(let a=A,D=i.length;a<D;a++){const s=i[a];if(s.id===null)break;s.id=null,s.object=null,s.geometry=null,s.material=null,s.group=null}}return{opaque:I,transmissive:g,transparent:C,init:B,push:E,unshift:o,finish:e,sort:t}}function jG(){let i=new WeakMap;function A(g,C){const B=i.get(g);let Q;return B===void 0?(Q=new It,i.set(g,[Q])):C>=B.length?(Q=new It,B.push(Q)):Q=B[C],Q}function I(){i=new WeakMap}return{get:A,dispose:I}}function VG(){const i={};return{get:function(A){if(i[A.id]!==void 0)return i[A.id];let I;switch(A.type){case"DirectionalLight":I={direction:new q,color:new FA};break;case"SpotLight":I={position:new q,direction:new q,color:new FA,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":I={position:new q,color:new FA,distance:0,decay:0};break;case"HemisphereLight":I={direction:new q,skyColor:new FA,groundColor:new FA};break;case"RectAreaLight":I={color:new FA,position:new q,halfWidth:new q,halfHeight:new q};break}return i[A.id]=I,I}}}function XG(){const i={};return{get:function(A){if(i[A.id]!==void 0)return i[A.id];let I;switch(A.type){case"DirectionalLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bA};break;case"SpotLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bA};break;case"PointLight":I={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bA,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[A.id]=I,I}}}let _G=0;function zG(i,A){return(A.castShadow?2:0)-(i.castShadow?2:0)+(A.map?1:0)-(i.map?1:0)}function $G(i,A){const I=new VG,g=XG(),C={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let e=0;e<9;e++)C.probe.push(new q);const B=new q,Q=new LA,E=new LA;function o(e,a){let D=0,s=0,w=0;for(let P=0;P<9;P++)C.probe[P].set(0,0,0);let n=0,h=0,r=0,M=0,S=0,l=0,N=0,F=0,d=0,c=0;e.sort(zG);const K=a===!0?Math.PI:1;for(let P=0,X=e.length;P<X;P++){const T=e[P],L=T.color,x=T.intensity,z=T.distance,IA=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)D+=L.r*x*K,s+=L.g*x*K,w+=L.b*x*K;else if(T.isLightProbe)for(let j=0;j<9;j++)C.probe[j].addScaledVector(T.sh.coefficients[j],x);else if(T.isDirectionalLight){const j=I.get(T);if(j.color.copy(T.color).multiplyScalar(T.intensity*K),T.castShadow){const _=T.shadow,gA=g.get(T);gA.shadowBias=_.bias,gA.shadowNormalBias=_.normalBias,gA.shadowRadius=_.radius,gA.shadowMapSize=_.mapSize,C.directionalShadow[n]=gA,C.directionalShadowMap[n]=IA,C.directionalShadowMatrix[n]=T.shadow.matrix,l++}C.directional[n]=j,n++}else if(T.isSpotLight){const j=I.get(T);j.position.setFromMatrixPosition(T.matrixWorld),j.color.copy(L).multiplyScalar(x*K),j.distance=z,j.coneCos=Math.cos(T.angle),j.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),j.decay=T.decay,C.spot[r]=j;const _=T.shadow;if(T.map&&(C.spotLightMap[d]=T.map,d++,_.updateMatrices(T),T.castShadow&&c++),C.spotLightMatrix[r]=_.matrix,T.castShadow){const gA=g.get(T);gA.shadowBias=_.bias,gA.shadowNormalBias=_.normalBias,gA.shadowRadius=_.radius,gA.shadowMapSize=_.mapSize,C.spotShadow[r]=gA,C.spotShadowMap[r]=IA,F++}r++}else if(T.isRectAreaLight){const j=I.get(T);j.color.copy(L).multiplyScalar(x),j.halfWidth.set(T.width*.5,0,0),j.halfHeight.set(0,T.height*.5,0),C.rectArea[M]=j,M++}else if(T.isPointLight){const j=I.get(T);if(j.color.copy(T.color).multiplyScalar(T.intensity*K),j.distance=T.distance,j.decay=T.decay,T.castShadow){const _=T.shadow,gA=g.get(T);gA.shadowBias=_.bias,gA.shadowNormalBias=_.normalBias,gA.shadowRadius=_.radius,gA.shadowMapSize=_.mapSize,gA.shadowCameraNear=_.camera.near,gA.shadowCameraFar=_.camera.far,C.pointShadow[h]=gA,C.pointShadowMap[h]=IA,C.pointShadowMatrix[h]=T.shadow.matrix,N++}C.point[h]=j,h++}else if(T.isHemisphereLight){const j=I.get(T);j.skyColor.copy(T.color).multiplyScalar(x*K),j.groundColor.copy(T.groundColor).multiplyScalar(x*K),C.hemi[S]=j,S++}}M>0&&(A.isWebGL2||i.has("OES_texture_float_linear")===!0?(C.rectAreaLTC1=QA.LTC_FLOAT_1,C.rectAreaLTC2=QA.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(C.rectAreaLTC1=QA.LTC_HALF_1,C.rectAreaLTC2=QA.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),C.ambient[0]=D,C.ambient[1]=s,C.ambient[2]=w;const H=C.hash;(H.directionalLength!==n||H.pointLength!==h||H.spotLength!==r||H.rectAreaLength!==M||H.hemiLength!==S||H.numDirectionalShadows!==l||H.numPointShadows!==N||H.numSpotShadows!==F||H.numSpotMaps!==d)&&(C.directional.length=n,C.spot.length=r,C.rectArea.length=M,C.point.length=h,C.hemi.length=S,C.directionalShadow.length=l,C.directionalShadowMap.length=l,C.pointShadow.length=N,C.pointShadowMap.length=N,C.spotShadow.length=F,C.spotShadowMap.length=F,C.directionalShadowMatrix.length=l,C.pointShadowMatrix.length=N,C.spotLightMatrix.length=F+d-c,C.spotLightMap.length=d,C.numSpotLightShadowsWithMaps=c,H.directionalLength=n,H.pointLength=h,H.spotLength=r,H.rectAreaLength=M,H.hemiLength=S,H.numDirectionalShadows=l,H.numPointShadows=N,H.numSpotShadows=F,H.numSpotMaps=d,C.version=_G++)}function t(e,a){let D=0,s=0,w=0,n=0,h=0;const r=a.matrixWorldInverse;for(let M=0,S=e.length;M<S;M++){const l=e[M];if(l.isDirectionalLight){const N=C.directional[D];N.direction.setFromMatrixPosition(l.matrixWorld),B.setFromMatrixPosition(l.target.matrixWorld),N.direction.sub(B),N.direction.transformDirection(r),D++}else if(l.isSpotLight){const N=C.spot[w];N.position.setFromMatrixPosition(l.matrixWorld),N.position.applyMatrix4(r),N.direction.setFromMatrixPosition(l.matrixWorld),B.setFromMatrixPosition(l.target.matrixWorld),N.direction.sub(B),N.direction.transformDirection(r),w++}else if(l.isRectAreaLight){const N=C.rectArea[n];N.position.setFromMatrixPosition(l.matrixWorld),N.position.applyMatrix4(r),E.identity(),Q.copy(l.matrixWorld),Q.premultiply(r),E.extractRotation(Q),N.halfWidth.set(l.width*.5,0,0),N.halfHeight.set(0,l.height*.5,0),N.halfWidth.applyMatrix4(E),N.halfHeight.applyMatrix4(E),n++}else if(l.isPointLight){const N=C.point[s];N.position.setFromMatrixPosition(l.matrixWorld),N.position.applyMatrix4(r),s++}else if(l.isHemisphereLight){const N=C.hemi[h];N.direction.setFromMatrixPosition(l.matrixWorld),N.direction.transformDirection(r),h++}}}return{setup:o,setupView:t,state:C}}function gt(i,A){const I=new $G(i,A),g=[],C=[];function B(){g.length=0,C.length=0}function Q(a){g.push(a)}function E(a){C.push(a)}function o(a){I.setup(g,a)}function t(a){I.setupView(g,a)}return{init:B,state:{lightsArray:g,shadowsArray:C,lights:I},setupLights:o,setupLightsView:t,pushLight:Q,pushShadow:E}}function Aw(i,A){let I=new WeakMap;function g(B,Q=0){const E=I.get(B);let o;return E===void 0?(o=new gt(i,A),I.set(B,[o])):Q>=E.length?(o=new gt(i,A),E.push(o)):o=E[Q],o}function C(){I=new WeakMap}return{get:g,dispose:C}}class Iw extends wg{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pa,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class gw extends wg{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new q,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.referencePosition.copy(A.referencePosition),this.nearDistance=A.nearDistance,this.farDistance=A.farDistance,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const Cw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );