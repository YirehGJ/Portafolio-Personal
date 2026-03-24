const elementos = [

{num:1,sim:"H",fila:1,col:1,tipo:"noMetales"},
{num:2,sim:"He",fila:1,col:18,tipo:"gases"},

{num:3,sim:"Li",fila:2,col:1,tipo:"alcalinos"},
{num:4,sim:"Be",fila:2,col:2,tipo:"alcalinoterreos"},
{num:5,sim:"B",fila:2,col:13,tipo:"metaloides"},
{num:6,sim:"C",fila:2,col:14,tipo:"noMetales"},
{num:7,sim:"N",fila:2,col:15,tipo:"noMetales"},
{num:8,sim:"O",fila:2,col:16,tipo:"noMetales"},
{num:9,sim:"F",fila:2,col:17,tipo:"noMetales"},
{num:10,sim:"Ne",fila:2,col:18,tipo:"gases"},

{num:11,sim:"Na",fila:3,col:1,tipo:"alcalinos"},
{num:12,sim:"Mg",fila:3,col:2,tipo:"alcalinoterreos"},
{num:13,sim:"Al",fila:3,col:13,tipo:"postransicion"},
{num:14,sim:"Si",fila:3,col:14,tipo:"metaloides"},
{num:15,sim:"P",fila:3,col:15,tipo:"noMetales"},
{num:16,sim:"S",fila:3,col:16,tipo:"noMetales"},
{num:17,sim:"Cl",fila:3,col:17,tipo:"noMetales"},
{num:18,sim:"Ar",fila:3,col:18,tipo:"gases"},

{num:19,sim:"K",fila:4,col:1,tipo:"alcalinos"},
{num:20,sim:"Ca",fila:4,col:2,tipo:"alcalinoterreos"},

{num:21,sim:"Sc",fila:4,col:3,tipo:"transicion"},
{num:22,sim:"Ti",fila:4,col:4,tipo:"transicion"},
{num:23,sim:"V",fila:4,col:5,tipo:"transicion"},
{num:24,sim:"Cr",fila:4,col:6,tipo:"transicion"},
{num:25,sim:"Mn",fila:4,col:7,tipo:"transicion"},
{num:26,sim:"Fe",fila:4,col:8,tipo:"transicion"},
{num:27,sim:"Co",fila:4,col:9,tipo:"transicion"},
{num:28,sim:"Ni",fila:4,col:10,tipo:"transicion"},
{num:29,sim:"Cu",fila:4,col:11,tipo:"transicion"},
{num:30,sim:"Zn",fila:4,col:12,tipo:"transicion"},

{num:31,sim:"Ga",fila:4,col:13,tipo:"postransicion"},
{num:32,sim:"Ge",fila:4,col:14,tipo:"metaloides"},
{num:33,sim:"As",fila:4,col:15,tipo:"metaloides"},
{num:34,sim:"Se",fila:4,col:16,tipo:"noMetales"},
{num:35,sim:"Br",fila:4,col:17,tipo:"noMetales"},
{num:36,sim:"Kr",fila:4,col:18,tipo:"gases"},

{num:37,sim:"Rb",fila:5,col:1,tipo:"alcalinos"},
{num:38,sim:"Sr",fila:5,col:2,tipo:"alcalinoterreos"},

{num:39,sim:"Y",fila:5,col:3,tipo:"transicion"},
{num:40,sim:"Zr",fila:5,col:4,tipo:"transicion"},
{num:41,sim:"Nb",fila:5,col:5,tipo:"transicion"},
{num:42,sim:"Mo",fila:5,col:6,tipo:"transicion"},
{num:43,sim:"Tc",fila:5,col:7,tipo:"transicion"},
{num:44,sim:"Ru",fila:5,col:8,tipo:"transicion"},
{num:45,sim:"Rh",fila:5,col:9,tipo:"transicion"},
{num:46,sim:"Pd",fila:5,col:10,tipo:"transicion"},
{num:47,sim:"Ag",fila:5,col:11,tipo:"transicion"},
{num:48,sim:"Cd",fila:5,col:12,tipo:"transicion"},

{num:49,sim:"In",fila:5,col:13,tipo:"postransicion"},
{num:50,sim:"Sn",fila:5,col:14,tipo:"postransicion"},
{num:51,sim:"Sb",fila:5,col:15,tipo:"metaloides"},
{num:52,sim:"Te",fila:5,col:16,tipo:"metaloides"},
{num:53,sim:"I",fila:5,col:17,tipo:"noMetales"},
{num:54,sim:"Xe",fila:5,col:18,tipo:"gases"},

{num:55,sim:"Cs",fila:6,col:1,tipo:"alcalinos"},
{num:56,sim:"Ba",fila:6,col:2,tipo:"alcalinoterreos"},
{num:57,sim:"La",fila:6,col:3,tipo:"lantanidos"},
{num:72,sim:"Hf",fila:6,col:4,tipo:"transicion"},
{num:73,sim:"Ta",fila:6,col:5,tipo:"transicion"},
{num:74,sim:"W",fila:6,col:6,tipo:"transicion"},
{num:75,sim:"Re",fila:6,col:7,tipo:"transicion"},
{num:76,sim:"Os",fila:6,col:8,tipo:"transicion"},
{num:77,sim:"Ir",fila:6,col:9,tipo:"transicion"},
{num:78,sim:"Pt",fila:6,col:10,tipo:"transicion"},
{num:79,sim:"Au",fila:6,col:11,tipo:"transicion"},
{num:80,sim:"Hg",fila:6,col:12,tipo:"transicion"},
{num:81,sim:"Tl",fila:6,col:13,tipo:"postransicion"},
{num:82,sim:"Pb",fila:6,col:14,tipo:"postransicion"},
{num:83,sim:"Bi",fila:6,col:15,tipo:"postransicion"},
{num:84,sim:"Po",fila:6,col:16,tipo:"metaloides"},
{num:85,sim:"At",fila:6,col:17,tipo:"metaloides"},
{num:86,sim:"Rn",fila:6,col:18,tipo:"gases"},

{num:87,sim:"Fr",fila:7,col:1,tipo:"alcalinos"},
{num:88,sim:"Ra",fila:7,col:2,tipo:"alcalinoterreos"},
{num:89,sim:"Ac",fila:7,col:3,tipo:"actinidos"},
{num:104,sim:"Rf",fila:7,col:4,tipo:"transicion"},
{num:105,sim:"Db",fila:7,col:5,tipo:"transicion"},
{num:106,sim:"Sg",fila:7,col:6,tipo:"transicion"},
{num:107,sim:"Bh",fila:7,col:7,tipo:"transicion"},
{num:108,sim:"Hs",fila:7,col:8,tipo:"transicion"},
{num:109,sim:"Mt",fila:7,col:9,tipo:"desconocidos"},
{num:110,sim:"Ds",fila:7,col:10,tipo:"desconocidos"},
{num:111,sim:"Rg",fila:7,col:11,tipo:"desconocidos"},
{num:112,sim:"Cn",fila:7,col:12,tipo:"desconocidos"},
{num:113,sim:"Nh",fila:7,col:13,tipo:"desconocidos"},
{num:114,sim:"Fl",fila:7,col:14,tipo:"desconocidos"},
{num:115,sim:"Mc",fila:7,col:15,tipo:"desconocidos"},
{num:116,sim:"Lv",fila:7,col:16,tipo:"desconocidos"},
{num:117,sim:"Ts",fila:7,col:17,tipo:"desconocidos"},
{num:118,sim:"Og",fila:7,col:18,tipo:"desconocidos"},

/* LANTANIDOS */

{num:58,sim:"Ce",fila:8,col:5,tipo:"lantanidos"},
{num:59,sim:"Pr",fila:8,col:6,tipo:"lantanidos"},
{num:60,sim:"Nd",fila:8,col:7,tipo:"lantanidos"},
{num:61,sim:"Pm",fila:8,col:8,tipo:"lantanidos"},
{num:62,sim:"Sm",fila:8,col:9,tipo:"lantanidos"},
{num:63,sim:"Eu",fila:8,col:10,tipo:"lantanidos"},
{num:64,sim:"Gd",fila:8,col:11,tipo:"lantanidos"},
{num:65,sim:"Tb",fila:8,col:12,tipo:"lantanidos"},
{num:66,sim:"Dy",fila:8,col:13,tipo:"lantanidos"},
{num:67,sim:"Ho",fila:8,col:14,tipo:"lantanidos"},
{num:68,sim:"Er",fila:8,col:15,tipo:"lantanidos"},
{num:69,sim:"Tm",fila:8,col:16,tipo:"lantanidos"},
{num:70,sim:"Yb",fila:8,col:17,tipo:"lantanidos"},
{num:71,sim:"Lu",fila:8,col:18,tipo:"lantanidos"},

/* ACTINIDOS */

{num:90,sim:"Th",fila:9,col:5,tipo:"actinidos"},
{num:91,sim:"Pa",fila:9,col:6,tipo:"actinidos"},
{num:92,sim:"U",fila:9,col:7,tipo:"actinidos"},
{num:93,sim:"Np",fila:9,col:8,tipo:"actinidos"},
{num:94,sim:"Pu",fila:9,col:9,tipo:"actinidos"},
{num:95,sim:"Am",fila:9,col:10,tipo:"actinidos"},
{num:96,sim:"Cm",fila:9,col:11,tipo:"actinidos"},
{num:97,sim:"Bk",fila:9,col:12,tipo:"actinidos"},
{num:98,sim:"Cf",fila:9,col:13,tipo:"actinidos"},
{num:99,sim:"Es",fila:9,col:14,tipo:"actinidos"},
{num:100,sim:"Fm",fila:9,col:15,tipo:"actinidos"},
{num:101,sim:"Md",fila:9,col:16,tipo:"actinidos"},
{num:102,sim:"No",fila:9,col:17,tipo:"actinidos"},
{num:103,sim:"Lr",fila:9,col:18,tipo:"actinidos"},
];

const tabla = document.getElementById("tabla-periodica");

elementos.forEach(e=>{

const div = document.createElement("div");

div.className = `elemento ${e.tipo}`;
div.style.gridRow = e.fila;
div.style.gridColumn = e.col;

div.innerHTML = `
<div class="numero">${e.num}</div>
<div class="simbolo">${e.sim}</div>
`;

div.style.cursor = "pointer";

div.addEventListener("click",()=>{
    window.location.href = `elementos/${e.sim}.html`;
});

tabla.appendChild(div);

});