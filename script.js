//VELOCIDADE ESCALAR
function variacaoTempo(t1,t2) {
    let t;
    t = t2 - t1;
    return t;    
}

function variacaoEspaco(s1,s2) {
    let s;
    s = s2 - s1;
    return s;    
}

function velocidadeMedia(vm,s,t) {
    let num;
    
    if (vm==0) {
        num = s/t;              
    } else if (s==0){
        num = vm*t;
    } else {
        num = s/vm;
    }        
    return num;
}

//MOVIMENTO UNIFORME
function funcaoHorariaMU(s,s0,v,t) {
    let num;

    if (s==0) {
        num = s0+v*t;
        
    } else if(s0==0){
        num = s-(v*t)

    }else if(v==0){
        num = (s-s0)/t;

    } else if(t==0) {
        num = (s-s0)/v;
    }

    /*
    18  10   2   4
    S = 10 + 2 * 4
    S = 10 + 8
    S = 18
    */
    
    return num;    
}

//MOVIMENTO UNIFORME VARIADO  1.25 5 4
function aceleracaoMedia(am,v,t) {
    let num;
    
    if (am==0) {
        num = v/t;              
    } else if (v==0){
        num = am*t;
    } else if (t==0){
        num = v/am;
    }        
    return num;
    
  
}

function funcaoHorariaMUV(v,v0,a,t) {
    let num;
    if (v==0) {
        num = v0 + a*t;
    } else if (v0==0){
        num = v-a*t;
    } else if (a==0){
        num = (v-v0)/t;
    }else if (t==0) {
        num = (v-v0)/a;
    }
    v = v0 + a*t;
    return num;
}

//EQUAÇÃO DE TORICELLI
/* function torricelli(v,v0,a,s) {
    v= math.pow(v0,2) + 2 * a * s;
    return v;
} */

//DINÂMICA
function forca(f,m,a) {
    let num;
    
    if (f==0) {
        num = m*a;              
    } else if (m==0){
        num = f/a;
    } else {
        num = f/m;
    }        
    return num;

    f = m * a;
}

function atrito(f,w,n) {
    let num;

    if (f==0) {
        num = w*n;
    } else if(w==0){
        num = f/n
    }else if(n==0){
        num = f/w;
    }

    return num;
}

function elastica(f,k,d) {
    let num;

    if (f==0) {
        num =  k * d;
    } else if(k==0){
        num = f/d
    }else if(d==0){
        num = f/k;
    }

    return num;
}

function trabalho(t,f,s) {
    let num;

    if (f==0) {
        num = f * s;
    } else if(f==0){
        num = t/s
    }else if(s==0){
        num = t/f;
    }

    return num;
}

function potencia(p,t,vt) {
    let num;

    if (p==0) {
        num = t/vt;
    } else if(t==0){
        num = p*vt
    }else if(vt==0){
        num = t/p;
    }

    return num;
}

function energiaCinetica(e,m,c) {
    let num;

    if (e==0) {
        num = (m * a * a)/2;
    } else if(m==0){
        num = f/n
    } else if(c==0){
        num = f/w;
    }

    return num;
}

function kepler(k,t1,r1,t2,r2) {
 //***   
}

function gravitacaoUniversal(f,g,m,M,d) {
    f = g * ((m*M)/d*d)
    return f;
}

//MECANICA DOS FLÚIDOS
/* function pressao(p,f,s) {
    p = f/s;
    return p;
}

function massaEspecifica(c,m,v) {
    c = m / v;
    return c;
}

function pressaoLiquidos(p,d,g,h) {
    p =  d*g*h;
    return p;
}

function teoremaStevin(pt,pa,d,g,h) {
    pt = pa + (d*g*h)
    return pt;
}

function empuxo(e,d,g,) {
    e = d*g*v;
    return e;
} */