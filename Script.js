/* ==========================================================================
   ÍNDICE
   --------------------------------------------------------------------------
   01. Configuración (cuentas y Firebase)
   02. Contenido editable (cartas, fotos, razones, historia, cupones)
   03. Estado global
   04. Utilidades
   05. Sesión (login / logout)
   06. Navegación y menú lateral
   07. Corazones del login
   08. Cartas
   09. Fotos
   10. Razones
   11. Historia
   12. Cupones
   13. Inicio de la app
   ========================================================================== */


/* ==========================================================================
   01. CONFIGURACIÓN
   ========================================================================== */

// Cuentas
const USERS = {
  milanyela: { pass: 'Mila.Doc26',  role: 'user',  name: 'Milanyela' },
  andres:    { pass: 'Andy.Mila26', role: 'admin', name: 'Andrés' }
};

// Firebase (OPCIONAL). Si lo dejas con "TU_...", las fotos nuevas se guardan
// solo en el navegador donde las subas. Con Firebase se ven en TODOS los dispositivos.
const FIREBASE_CONFIG = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROYECTO",
  storageBucket: "TU_PROYECTO.appspot.com",
  messagingSenderId: "TU_ID",
  appId: "TU_APP_ID"
};


/* ==========================================================================
   02. CONTENIDO EDITABLE
   ========================================================================== */

// Cartas: cambia el texto aquí.
// IMPORTANTE: el texto va entre comillas invertidas (` `) para poder escribir
// varios párrafos y apóstrofes sin romper el código. Deja una línea en blanco entre párrafos.
const LETTERS = [
  {
    title: 'Para cuando estés feliz',
    text: `Hola, bonita. ❤️

Si estás leyendo esto porque estás feliz, primero que todo quiero pedirte que disfrutes muchísimo ese momento. Que te rías todo lo que puedas, que sonrías hasta que te duelan las mejillas y que no te guardes ni un poquito de esa felicidad.

Hay algo que quizás no te digo tan seguido, pero me gusta mucho saber que estás bien. Me gusta imaginarte sonriendo, emocionada por algo que te pasó o contando alguna de tus historias con esa manera tan tuya de expresarte.

Ojalá pudieras verte por un momento desde mis ojos, porque seguramente entenderías por qué me parece tan bonito tenerte en mi vida. A veces uno no se da cuenta de lo mucho que puede alegrarle los días a otra persona simplemente siendo como es, y tú eres una de esas personas.

Quiero que tengas muchos días así, que la vida te regale motivos para celebrar y que nunca sientas que tienes que apagar tu felicidad para encajar en algún lugar.

Y si algún día te preguntas si alguien se alegra genuinamente por tus logros, recuerda que aquí tienes a alguien que va a celebrar hasta las pequeñas cosas que consigas.

No pierdas esa manera tan bonita de disfrutar la vida. Sigue siendo tú, con tus locuras, tus ocurrencias, tus risas y hasta con ese carácter que a veces me toca soportar. JAJAJA.

Te mereces muchísimas cosas bonitas, y espero que la vida te permita vivirlas todas.

P. D. Si estás sonriendo mientras lees esto, misión cumplida. Aunque admito que me gustaría ser el motivo de alguna de esas sonrisas. ❤️`
  },
  {
    title: 'Para cuando estés triste',
    text: `Hola, pequeña. ❤️

No sé qué habrá pasado para que hayas decidido abrir este sobre, pero quisiera que por un momento dejaras todo a un lado y leyeras esto con tranquilidad.

Primero quiero que sepas que está bien no estar bien. No tienes que levantarte todos los días con una sonrisa, no tienes que fingir que nada te afecta y mucho menos tienes que hacerte la fuerte cuando por dentro sientes que ya no puedes más.

A veces pasan tantas cosas por nuestra cabeza que ni siquiera sabemos cómo explicar lo que sentimos. Hay días en los que uno solamente necesita llorar, quedarse en silencio o recibir un abrazo sin tener que dar explicaciones. Y quiero que sepas que conmigo puedes hacer cualquiera de esas cosas.

Ojalá pudiera estar ahí ahora mismo, sentarme a tu lado, escucharte sin interrumpirte y darte uno de esos abrazos que no necesitan palabras. De esos que te hacen sentir, aunque sea por un ratito, que todo va a estar un poquito mejor.

No quiero que midas tu valor por los días en los que te sientes mal. No eres menos increíble por tener inseguridades, no eres menos fuerte por llorar y no eres una carga por necesitar a alguien.

Quiero que recuerdes que eres mucho más que tus malos momentos. Eres todas esas cosas bonitas que a veces olvidas de ti misma, eres tus sueños, tus ocurrencias, tu manera de hacer reír a los demás y esa esencia que te hace ser tú.

Y si hoy no puedes encontrar algo bonito en ti, no pasa nada. Yo puedo recordártelo las veces que haga falta.

Gracias por existir y por dejarme ser parte de tu vida. De verdad espero que nunca dudes del cariño que te tengo.

No tienes que contestarme este mensaje, ni explicar cómo te sientes. Solo quiero que sepas que aquí tienes un amigo dispuesto a escucharte, acompañarte y recordarte que no tienes que atravesar todo sola.

Te mando el abrazo más grande que puedas imaginar. Y sí, te lo debo en persona.

Te quiero muchísimo, tontica. ❤️`
  },
  {
    title: 'Para cuando me extrañes',
    text: `JAJAJA, sabía que tarde o temprano ibas a terminar abriendo este sobre. ❤️

Bueno, primero quiero decirte que no sé qué tan mucho me estés extrañando, pero espero que al menos sea la mitad de lo que yo disfruto tenerte cerca. Aunque no te voy a dar el gusto de admitir demasiado. JAJAJA.

Ahora sí, hablando en serio...

¿Sabes qué es curioso? Que a veces conocemos personas sin imaginar lo importantes que pueden llegar a ser. Al principio son simplemente alguien con quien hablamos, compartimos alguna risa o contamos cualquier cosa, y poco a poco se convierten en parte de nuestros días.

Y creo que eso es lo bonito de nuestra amistad. Que entre tantas personas que uno conoce durante la vida, hay algunas que terminan ocupando un lugar especial sin necesidad de hacer grandes cosas.

Tú eres una de esas personas para mí.

Extraño nuestras conversaciones, nuestras bobadas, las veces que nos reímos por cualquier tontería y hasta esos momentos en los que no tenemos absolutamente nada interesante que decir, pero igual encontramos la manera de seguir hablando.

Quiero que sepas que no necesitas hacer nada extraordinario para ser importante en mi vida. Tu compañía, tu forma de ser y simplemente saber que estás ahí ya significan mucho.

Ojalá pudiera aparecer ahora mismo, darte un abrazo de esos que duran más de lo normal y molestarte hasta que me digas que ya pare. Porque, sinceramente, sería un plan bastante bueno.

Mientras llega ese momento, guarda este sobre para cuando necesites recordar que hay alguien que agradece haberte conocido.

Y si me extrañas demasiado, escríbeme. Que para algo tienes mi contacto, mujer. JAJAJA.

Te quiero mucho. No cambies esa manera tan bonita de ser. ❤️`
  },
  {
    title: 'Para cuando olvides lo especial que eres',
    text: `No sé en qué momento vas a abrir esta carta, ni qué estarás pensando de ti misma cuando lo hagas, pero quiero pedirte que leas cada palabra con atención.

Ojalá pudieras verte como te vemos las personas que te queremos.

Ojalá pudieras notar lo bonita que es tu manera de ser, lo mucho que vale tu compañía y cómo puedes hacer especial un momento sin siquiera darte cuenta.

Porque quizás tú solamente ves tus defectos, tus inseguridades, las cosas que no te gustan de ti o todo aquello que quisieras cambiar. Pero yo también veo tus cualidades, tus esfuerzos, tu corazón y todas esas pequeñas cosas que te hacen ser alguien irrepetible.

No tienes que ser la más inteligente, la más bonita, la más divertida ni la persona que siempre tiene una respuesta para todo. No tienes que competir con nadie para merecer un lugar bonito en la vida de los demás.

Me gustaría que nunca olvidaras que mereces que te quieran sin tener que esforzarte por ser alguien diferente.

Y quiero agradecerte por algo que quizás nunca te he dicho de esta manera: gracias por llegar a mi vida y convertirte en una persona a la que le tengo tanto cariño. Gracias por confiar en mí, por compartir tus días conmigo y por permitirme conocer esa versión de ti que no todo el mundo tiene la oportunidad de conocer.

No sé si algún día entenderás lo importante que es para mí nuestra amistad, pero espero que estas palabras te den aunque sea una pequeña idea.

Si alguna vez dudas de ti, vuelve a leer esta carta. Si algún día sientes que no eres suficiente, vuelve a leerla. Y si simplemente necesitas recordar que hay alguien que se alegra de que existas, aquí tienes una prueba.

No sé qué tan lejos nos lleve la vida, pero mientras pueda, voy a desearte cosas bonitas, voy a celebrar tus alegrías y voy a querer verte cumplir todos esos sueños que me cuentas.

Y sí, también voy a seguir molestándote, porque tampoco quiero que pienses que te vas a librar de mí tan fácilmente. JAJAJA.

Te quiero muchísimo. Nunca olvides lo valiosa que eres.

Con cariño, tu mejor amigo. ❤️`
  },
  {
    title: 'Para cuando necesites ánimo',
    text: `Oye, tú. Sí, tú, la que seguramente está leyendo esto mientras piensa que no puede con todo.

Quiero que hagamos algo: por un momento deja de exigirte tanto.

Sé que tienes sueños, expectativas, cosas que quieres conseguir y muchas veces sientes que deberías estar haciendo más, avanzando más rápido o siendo mejor en todo. Pero quiero recordarte que no tienes que tener tu vida resuelta para estar haciendo las cosas bien.

A veces avanzar también significa levantarte después de un día difícil. A veces ser valiente significa reconocer que estás cansada y darte un descanso. Y a veces el mayor logro es simplemente no rendirte contigo misma.

No quiero que te compares con las personas que parecen tenerlo todo organizado. Cada quien tiene sus tiempos, sus luchas y sus propias batallas. No estás llegando tarde a tu vida.

Me gustaría que algún día pudieras reconocer todo lo que has superado y sentir orgullo de ti misma. Porque estoy seguro de que has pasado por cosas que no todos conocen y aun así sigues aquí, intentando, aprendiendo y buscando la manera de estar mejor.

Y si alguna vez sientes que no eres capaz, quiero que recuerdes que no necesitas demostrarle nada a nadie para tener valor.

Yo veo muchas cosas bonitas en ti. Veo una persona que merece cumplir sus sueños, que merece tranquilidad, que merece reír sin preocupaciones y que merece recibir el mismo cariño que tantas veces entrega.

Así que, por favor, no te rindas contigo misma. No dejes que un mal día te haga olvidar todos los buenos que todavía te esperan.

Y cuando necesites un recordatorio de que puedes hacerlo, aquí estará tu mejor amigo, dispuesto a escucharte, darte consejos que quizás no pediste y molestarte un poquito para sacarte una sonrisa.

Estoy orgulloso de ti, incluso por esas pequeñas batallas que nadie más sabe que estás ganando.

Tú puedes, bonita. Y si hoy no puedes con todo, mañana lo intentamos de nuevo. ❤️`
  },
  {
    title: 'Para cuando no puedas dormir',
    text: `Hola, desvelada. ❤️

Si abriste este sobre a estas horas, probablemente tu cabeza decidió que era buena idea pensar en absolutamente todo justo cuando deberías estar descansando. JAJAJA.

Pero quiero que por un momento te olvides del reloj, de las cosas pendientes, de las conversaciones que te quedaron dando vueltas y de todo aquello que no puedes controlar.

No tienes que encontrar respuestas esta noche. No tienes que solucionar los problemas de mañana ni volver a pensar en las cosas que ya pasaron.

Quiero que te permitas descansar.

A veces somos demasiado duros con nosotros mismos. Nos exigimos estar bien, entenderlo todo, tomar las decisiones correctas y no equivocarnos nunca. Pero somos humanos, y también necesitamos momentos en los que simplemente podamos respirar y dejar que el mundo siga girando sin nosotros por unas horas.

Si pudiera pedirte algo, sería que aprendieras a tratarte con la misma ternura con la que tratas a las personas que quieres. Que no te hables mal cuando cometas un error y que no te castigues por cosas que ya no puedes cambiar.

Ojalá pudiera estar ahí para acompañarte un ratito, escuchar todas esas cosas que se te pasan por la cabeza y hacerte reír con alguna tontería hasta que se te olvidara mirar la hora.

Y después, obviamente, decirte que ya duermas porque mañana vas a estar quejándote de tener sueño. JAJAJA.

Quiero que cierres los ojos sabiendo que eres una persona muy especial, que mereces cosas bonitas y que no tienes que ganarte el cariño de nadie siendo perfecta.

Mañana será otro día. Tendrás nuevas oportunidades, nuevas sonrisas y quién sabe cuántas historias más para contarme.

Por ahora, descansa. Deja que tu mente tenga un poquito de paz.

Buenas noches, bonita. Si pudiera mandarte un abrazo a través de estas palabras, espero que sintieras uno de esos que hacen que todo parezca un poquito menos pesado.

Y recuerda algo: hay amistades que se vuelven hogar sin necesidad de compartir el mismo techo. Gracias por ser una de esas personas para mí.

Duerme bien, mi niña. ❤️🌙`
  }
];

// 20 fotos. Cada espacio usa automáticamente  fotos/mila1.jpg ... fotos/mila20.jpg
// Solo guarda tus imágenes en la carpeta "fotos" con esos nombres y listo.
// Si una imagen no existe todavía, se ve el degradado de siempre.
// Si tus fotos son .png (o .jpeg), cambia PHOTO_EXT.
const PHOTO_FOLDER = 'fotos/';
const PHOTO_EXT = '.jpg';

const PHOTOS = [
  'Tu sonrisa ilumina cualquier día', 'Brillas sin siquiera intentarlo', 'La doctora más bonita del mundo', 'Contigo todo es mejor',
  'Eres arte en cada foto', 'Nadie es como tú', 'Eres mi lugar seguro', 'Hermosa por dentro y por fuera',
  'Tu mirada lo dice todo', 'Única e irrepetible', 'Mi persona favorita', 'Eres pura luz',
  'Cada día más bonita', 'Tu alegría es contagiosa', 'Eres magia', 'La mejor amiga que existe',
  'Un corazón enorme', 'Siempre tan tú', 'Eres mi orgullo', 'Te quiero infinito'
].map((cap, i) => ({ cap, img: `${PHOTO_FOLDER}mila${i + 1}${PHOTO_EXT}` }));

// Razones: 8 tarjetas, cada una con 3 corazones y una razón distinta por corazón.
// Orden de cada tarjeta: [💜 morado, 🩷 rosado, ❤️ rojo]
const HEARTS = ['💜', '🩷', '❤️'];

const REASONS = [
  // Tarjeta #1
  ['Tu risa contagia a cualquiera',
   'Porque contigo hasta los días aburridos tienen gracia',
   'Porque tu sonrisa me arregla el día sin que te des cuenta'],
  // Tarjeta #2
  ['Siempre estás cuando más te necesito',
   'Porque me escuchas sin juzgarme',
   'Porque nunca me haces sentir que molesto, ni cuando hablo de más'],
  // Tarjeta #3
  ['Eres la persona más inteligente que conozco',
   'Porque luchas por tus sueños incluso cuando estás cansada',
   'Porque vas a ser una doctora increíble y voy a presumir que te conozco'],
  // Tarjeta #4
  ['Me entiendes sin que diga nada',
   'Porque hasta tus regaños se sienten con cariño',
   'Porque sabes cuándo necesito un abrazo, un consejo o una burla'],
  // Tarjeta #5
  ['Tus consejos de doctora (y de amiga)',
   'Porque eres igual con todos: sincera y auténtica',
   'Porque siempre tienes un detalle bonito para quienes quieres'],
  // Tarjeta #6
  ['Haces que todo sea más divertido',
   'Porque contigo cualquier plan, hasta el más tonto, sale bien',
   'Porque tus ocurrencias me sacan carcajadas cuando menos lo espero'],
  // Tarjeta #7
  ['Tu corazón enorme',
   'Porque eres paciente conmigo, incluso cuando no me lo merezco',
   'Porque tu cariño se siente de verdad, sin condiciones'],
  // Tarjeta #8
  ['Escribe aquí la razón #8 del corazón morado',
   'Porque me haces querer ser mejor sin presionarme',
   'Porque simplemente eres tú, y con eso me basta']
];

const HISTORY = [
  { label: 'Érase una vez',
    title: 'Un 27 de junio',
    text: 'En un rinconcito del mundo, dos desconocidos se encontraron preparando La Atalaya. Ninguno sabía que ese día empezaba una historia.' },
  { label: 'El hechizo',
    title: 'Primero, dos conocidos',
    text: 'Una palabra aquí, una risa allá, y sin darse cuenta el hechizo ya estaba hecho: cada conversación los acercaba un poquito más.' },
  { label: 'El pacto',
    title: 'Se volvieron amigos',
    text: 'Poco a poco, las charlas largas se hicieron costumbre, y un buen día ya eran parte de los días del otro.' },
  { label: 'El gran título',
    title: 'El mejor amigo de la doctora',
    text: 'Entre secretos, bobadas y consejos, él se ganó el título más bonito del reino: ser su mejor amigo. 💜' },
  { label: 'Magia a distancia',
    title: 'Un castillo hecho de mensajes',
    text: 'Nunca se han visto frente a frente, pero la magia de WhatsApp construyó un puente que ninguna distancia ha podido romper.' },
  { label: 'La profecía',
    title: 'El día del primer abrazo',
    text: 'Dicen que algún día los dos amigos se encontrarán, y ese abrazo valdrá por todos los que ya se deben. ✨' }
];

const COUPONS = [
  { e: '🤗', t: 'Vale por un abrazo gigante' },
  { e: '🍦', t: 'Vale por un helado (yo invito)' },
  { e: '🎬', t: 'Vale por una noche de películas' },
  { e: '📞', t: 'Vale por una llamada a cualquier hora' },
  { e: '☕', t: 'Vale por un café y chisme' },
  { e: '🛍️', t: 'Vale por acompañarte de compras' },
  { e: '🍕', t: 'Vale por una pizza' },
  { e: '🎤', t: 'Vale por cantar juntos sin vergüenza' }
];


/* ==========================================================================
   03. ESTADO GLOBAL
   ========================================================================== */
let currentUser = null;
let extraPhotos = [];                 // { id, src, cap, ts }
let extraLetters = [];                // { id, title, text, ts }
let db = null;                        // Firestore (si está configurado)
const useFirebase = !FIREBASE_CONFIG.apiKey.startsWith('TU_') && window.firebase;
const redeemed = new Set(JSON.parse(localStorage.getItem('gift_coupons') || '[]'));


/* ==========================================================================
   04. UTILIDADES
   ========================================================================== */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const isAdmin = () => currentUser?.role === 'admin';

// Evita que un texto con < > " rompa el HTML
const esc = str => String(str).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// Cierra un overlay (modal / lightbox) al hacer clic en el fondo o en su botón
function bindClose(overlaySel, buttonSel) {
  const overlay = $(overlaySel);
  const hide = () => overlay.classList.add('hidden');
  if (buttonSel) $(buttonSel).addEventListener('click', hide);
  overlay.addEventListener('click', e => { if (e.target === overlay) hide(); });
}


/* ==========================================================================
   05. SESIÓN (LOGIN / LOGOUT)
   ========================================================================== */
function initSession() {
  $('#loginForm').addEventListener('submit', e => {
    e.preventDefault();
    const u = $('#user').value.trim().toLowerCase();
    const p = $('#pass').value;
    const acc = USERS[u];

    if (acc && acc.pass === p) {
      localStorage.setItem('gift_user', u);
      enter(u);
    } else {
      $('#loginError').textContent = 'Usuario o clave incorrectos 💔';
    }
  });

  $('#logout').addEventListener('click', () => {
    localStorage.removeItem('gift_user');
    location.reload();
  });
}

function enter(u) {
  currentUser = USERS[u];
  document.body.classList.toggle('is-admin', isAdmin());
  $('#login').classList.add('hidden');
  $('#app').classList.remove('hidden');
  const start = location.hash.slice(1);
  const first = $('#view-' + start) ? start : 'inicio';
  history.replaceState(null, '', '#' + first);
  showView(first);
  loadExtraPhotos();
  loadExtraLetters();
}


/* ==========================================================================
   06. NAVEGACIÓN Y MENÚ LATERAL
   ========================================================================== */
// Muestra una vista (sin tocar el historial)
function showView(view) {
  $$('.view').forEach(v => v.classList.toggle('active', v.id === 'view-' + view));
  $$('.drawer nav a').forEach(a => a.classList.toggle('active', a.dataset.go === view));
  closeDrawer();
  window.scrollTo({ top: 0 });
}

// Navega a una vista y la guarda en el historial (botones atrás/adelante)
function go(view) {
  if (location.hash.slice(1) === view) showView(view);
  else location.hash = view;          // dispara 'hashchange' -> showView
}

function openDrawer() {
  $('#drawer').classList.add('open');
  $('#overlay').classList.add('open');
}

function closeDrawer() {
  $('#drawer').classList.remove('open');
  $('#overlay').classList.remove('open');
}

function initNavigation() {
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-go]');
    if (t) {
      e.preventDefault();
      go(t.dataset.go);
    }
  });

  // Botones atrás / adelante del navegador
  window.addEventListener('hashchange', () => {
    const v = location.hash.slice(1);
    if (currentUser && $('#view-' + v)) showView(v);
  });

  $('#burger').addEventListener('click', openDrawer);
  $('#drawerClose').addEventListener('click', closeDrawer);
  $('#overlay').addEventListener('click', closeDrawer);
}


/* ==========================================================================
   07. CORAZONES DEL LOGIN
   ========================================================================== */
function initHearts() {
  const box = $('#hearts');
  const colors = ['#9b3cf0', '#d9569e', '#b5102e', '#ff69b4'];

  for (let i = 0; i < 9; i++) {
    const s = document.createElement('span');
    s.textContent = '♥';
    s.style.left = Math.random() * 95 + '%';
    s.style.fontSize = 28 + Math.random() * 50 + 'px';
    s.style.color = colors[i % colors.length];
    s.style.animationDuration = 9 + Math.random() * 9 + 's';
    s.style.animationDelay = -Math.random() * 12 + 's';
    box.appendChild(s);
  }
}


/* ==========================================================================
   08. CARTAS
   ========================================================================== */
/* ---- Almacenamiento de cartas extra ---- */
function saveLocalLetters() {
  localStorage.setItem('gift_letters', JSON.stringify(extraLetters));
}

async function loadExtraLetters() {
  try {
    if (useFirebase) {
      const snap = await db.collection('letters').orderBy('ts').get();
      extraLetters = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } else {
      extraLetters = JSON.parse(localStorage.getItem('gift_letters') || '[]');
    }
  } catch (err) {
    console.error(err);
  }
  renderLetters();
}

/* ---- Render ---- */
function letterHTML(l, i, extra) {
  const del = extra
    ? `<span class="letter-del" data-id="${l.id}" title="Eliminar">✕</span>`
    : '';
  return `<button class="letter" data-i="${i}" data-extra="${extra ? 1 : 0}"><span>💌</span>${esc(l.title)}${del}</button>`;
}

function renderLetters() {
  $('#lettersGrid').innerHTML =
    LETTERS.map((l, i) => letterHTML(l, i, false)).join('') +
    extraLetters.map((l, i) => letterHTML(l, i, true)).join('') +
    `<button class="letter add" id="addLetter" title="Agregar carta">+</button>`;
}

/* ---- Crear / eliminar (solo admin) ---- */
function openCompose() {
  $('#newLetterTitle').value = '';
  $('#newLetterText').value = '';
  $('#composeModal').classList.remove('hidden');
  $('#newLetterTitle').focus();
}

async function saveNewLetter() {
  const title = $('#newLetterTitle').value.trim();
  const text = $('#newLetterText').value.trim();
  if (!title || !text) { alert('Escribe el título y la carta'); return; }

  const item = { title, text, ts: Date.now() };
  try {
    if (useFirebase) {
      const ref = await db.collection('letters').add(item);
      item.id = ref.id;
    } else {
      item.id = 'l' + item.ts;
    }
    extraLetters.push(item);
    if (!useFirebase) saveLocalLetters();
    renderLetters();
    $('#composeModal').classList.add('hidden');
  } catch (err) {
    alert('No se pudo guardar la carta: ' + err.message);
  }
}

async function deleteLetter(id) {
  if (!confirm('¿Eliminar esta carta?')) return;
  if (useFirebase) await db.collection('letters').doc(id).delete();
  extraLetters = extraLetters.filter(l => l.id !== id);
  if (!useFirebase) saveLocalLetters();
  renderLetters();
}

/* ---- Eventos ---- */
function initLetters() {
  renderLetters();

  // Ventana para escribir una carta nueva (se crea aquí, no hace falta tocar el HTML)
  document.body.insertAdjacentHTML('beforeend', `
    <div class="modal hidden" id="composeModal">
      <div class="modal-box">
        <h3 class="script grad">Nueva carta</h3>
        <input class="compose-input" id="newLetterTitle" type="text" placeholder="Título (ej: Para cuando...)">
        <textarea class="compose-input" id="newLetterText" rows="10" placeholder="Escribe aquí tu carta..."></textarea>
        <div class="compose-actions">
          <button class="btn small" id="composeSave">Guardar carta</button>
          <button class="btn small ghost" id="composeCancel">Cancelar</button>
        </div>
      </div>
    </div>`);
  bindClose('#composeModal', '#composeCancel');
  $('#composeSave').addEventListener('click', saveNewLetter);

  $('#lettersGrid').addEventListener('click', async e => {
    // Botón "+" (solo admin)
    if (e.target.closest('#addLetter')) {
      if (isAdmin()) openCompose();
      return;
    }

    // Eliminar carta extra (solo admin)
    const del = e.target.closest('.letter-del');
    if (del) {
      if (isAdmin()) await deleteLetter(del.dataset.id);
      return;
    }

    // Abrir carta
    const b = e.target.closest('.letter');
    if (!b) return;
    const l = b.dataset.extra === '1' ? extraLetters[b.dataset.i] : LETTERS[b.dataset.i];
    $('#modalTitle').textContent = l.title;
    $('#modalText').textContent = l.text;
    $('#modal').classList.remove('hidden');
  });

  bindClose('#modal', '#modalClose');
}


/* ==========================================================================
   09. FOTOS
   ========================================================================== */

/* ---- Firebase (opcional) ---- */
function initFirebase() {
  if (!useFirebase) return;
  firebase.initializeApp(FIREBASE_CONFIG);
  db = firebase.firestore();
}

/* ---- Render ---- */
function photoHTML(p, idx, extra) {
  const src = p.src || p.img;
  const style = src ? `style="background-image:url('${src}'), var(--grad-diag)"` : '';
  return `<div class="photo" data-idx="${idx}" data-extra="${extra ? 1 : 0}">
    <div class="img" ${style}></div><div class="cap">${p.cap || ''}</div>
    ${extra ? `<button class="del" data-id="${p.id}" title="Eliminar">✕</button>` : ''}
  </div>`;
}

function renderPhotos() {
  $('#photoGrid').innerHTML =
    PHOTOS.map((p, i) => photoHTML(p, i, false)).join('') +
    extraPhotos.map((p, i) => photoHTML(p, i, true)).join('') +
    `<div class="photo add" id="addPhoto" title="Agregar foto">+</div>`;
}

/* ---- Almacenamiento ---- */
function saveLocalPhotos() {
  localStorage.setItem('gift_photos', JSON.stringify(extraPhotos));
}

async function loadExtraPhotos() {
  try {
    if (useFirebase) {
      const snap = await db.collection('photos').orderBy('ts').get();
      extraPhotos = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } else {
      extraPhotos = JSON.parse(localStorage.getItem('gift_photos') || '[]');
    }
  } catch (err) {
    console.error(err);
  }
  renderPhotos();
}

/* ---- Compresión de imagen ---- */
function compress(file, max = 900, q = 0.72) {
  return new Promise(res => {
    const img = new Image();
    img.onload = () => {
      const k = Math.min(1, max / Math.max(img.width, img.height));
      const c = document.createElement('canvas');
      c.width = img.width * k;
      c.height = img.height * k;
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      res(c.toDataURL('image/jpeg', q));
    };
    img.src = URL.createObjectURL(file);
  });
}

/* ---- Acciones ---- */
async function deletePhoto(id) {
  if (!confirm('¿Eliminar esta foto?')) return;
  if (useFirebase) await db.collection('photos').doc(id).delete();
  extraPhotos = extraPhotos.filter(p => p.id !== id);
  if (!useFirebase) saveLocalPhotos();
  renderPhotos();
}

function openLightbox(card) {
  const p = card.dataset.extra === '1'
    ? extraPhotos[card.dataset.idx]
    : PHOTOS[card.dataset.idx];
  const src = p.src || p.img;
  if (!src) return;

  // Solo se abre si la imagen existe (si no, no pasa nada)
  const test = new Image();
  test.onload = () => {
    $('#lightImg').src = src;
    $('#lightCap').textContent = p.cap || '';
    $('#lightbox').classList.remove('hidden');
  };
  test.src = src;
}

async function addPhoto(file) {
  const cap = prompt('Frase para esta foto:', 'Eres mi persona favorita') || '';
  const src = await compress(file);
  const item = { src, cap, ts: Date.now() };

  try {
    if (useFirebase) {
      const ref = await db.collection('photos').add(item);
      item.id = ref.id;
    } else {
      item.id = 'l' + item.ts;
    }
    extraPhotos.push(item);
    if (!useFirebase) saveLocalPhotos();
    renderPhotos();
  } catch (err) {
    alert('No se pudo guardar la foto: ' + err.message);
  }
}

/* ---- Eventos ---- */
function initPhotos() {
  initFirebase();
  renderPhotos();

  $('#photoGrid').addEventListener('click', async e => {
    // Botón "+" (solo admin)
    if (e.target.closest('#addPhoto')) {
      if (isAdmin()) $('#photoInput').click();
      return;
    }

    // Botón eliminar (solo admin)
    const del = e.target.closest('.del');
    if (del && isAdmin()) {
      e.stopPropagation();
      await deletePhoto(del.dataset.id);
      return;
    }

    // Ampliar foto
    const card = e.target.closest('.photo:not(.add)');
    if (card) openLightbox(card);
  });

  $('#photoInput').addEventListener('change', async e => {
    const file = e.target.files[0];
    if (!file) return;
    await addPhoto(file);
    e.target.value = '';
  });

  bindClose('#lightbox', '#lightClose');
}


/* ==========================================================================
   10. RAZONES
   ========================================================================== */
function initReasons() {
  const grid = $('#reasonsGrid');

  // 8 tarjetas, cada una con 3 corazones
  grid.innerHTML = REASONS.map((_, c) =>
    `<div class="reason multi"><span class="num">#${c + 1}</span><div class="hrow">` +
    HEARTS.map((h, i) => `<button class="hbtn" data-c="${c}" data-i="${i}">${h}</button>`).join('') +
    `</div></div>`
  ).join('');

  // Al tocar un corazón se revela su razón
  grid.addEventListener('click', e => {
    const h = e.target.closest('.hbtn');
    if (!h || h.classList.contains('open')) return;
    h.classList.add('open');
    h.textContent = HEARTS[h.dataset.i] + ' ' + REASONS[h.dataset.c][h.dataset.i];
  });
}


/* ==========================================================================
   11. HISTORIA
   ========================================================================== */
function initHistory() {
  $('#timeline').innerHTML = HISTORY.map(h =>
    `<div class="t-item"><span class="t-label">${h.label}</span>
     <div class="t-card"><h3>${h.title}</h3><p>${h.text}</p></div></div>`
  ).join('');
}


/* ==========================================================================
   12. CUPONES (se guardan como canjeados en el navegador)
   ========================================================================== */
function renderCoupons() {
  $('#couponsGrid').innerHTML = COUPONS.map((c, i) => {
    const done = redeemed.has(i);
    return `<div class="coupon ${done ? 'done' : ''}" data-i="${i}">
      <span class="emo">${c.e}</span><h3>${c.t}</h3>
      ${done ? '<small>¡Canjeado! 💖</small>' : '<small>Válido para siempre</small>'}
    </div>`;
  }).join('');
}

function initCoupons() {
  renderCoupons();

  $('#couponsGrid').addEventListener('click', e => {
    const c = e.target.closest('.coupon');
    if (!c) return;
    const i = +c.dataset.i;
    if (redeemed.has(i)) return;

    redeemed.add(i);
    localStorage.setItem('gift_coupons', JSON.stringify([...redeemed]));
    renderCoupons();
  });
}


/* ==========================================================================
   13. INICIO DE LA APP
   ========================================================================== */
function init() {
  initHearts();
  initSession();
  initNavigation();
  initLetters();
  initPhotos();
  initReasons();
  initHistory();
  initCoupons();

  // Auto-login si ya había sesión
  const saved = localStorage.getItem('gift_user');
  if (saved && USERS[saved]) enter(saved);
}

init();