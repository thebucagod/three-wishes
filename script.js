/* =========================================================
   «Три желания» — интерактив сайта (чистый JavaScript, без библиотек)

   Что делает этот файл:
     1. DISHES        — список блюд (редактируйте здесь)
     2. Меню          — рисует карточки и переключает вкладки
     3. Окно «Состав» — открывается по кнопке на карточке
     4. FAQ           — раскрывает ответы
     5. Моб. меню     — выезжающая панель
     6. Форма         — проверка полей (данные никуда не уходят)
   Все данные меню лежат в массиве DISHES ниже — правьте их здесь.
   Для фото блюд укажите путь в поле img (например "img/pie.jpg").
   Если img пустой — покажется цветная заглушка с эмодзи.
   ========================================================= */

const DISHES = [
  // ---------- ОСНОВНОЕ ----------
  {
    cat: 'main', bg: 'bg-yellow', emoji: '🍔',
    name: 'Крабсбургер с картошкой фри', sub: 'по мотивам мультсериала о подводном городе',
    weight: '350 г', price: '590 ₽',
    desc: 'Сочный бургер с сыром, свежими овощами и золотистой картошкой фри — настоящее приключение для любителей сытных блюд.',
    img: 'https://cdn.poehali.dev/projects/532c6493-d9cd-4922-af3b-96de0398b985/files/6f7c830f-4af1-42ec-a56d-163dbff93a28.jpg',
    groups: [{ items: [
      ['Булочка для бургера', '80 г'], ['Говяжий фарш', '100 г'], ['Яйцо', '1 шт.'], ['Сухари', '10 г'],
      ['Сыр', '20 г'], ['Салат', '15 г'], ['Помидор', '30 г'], ['Огурец маринованный', '20 г'],
      ['Лук', '10 г'], ['Соус', '20 г'], ['Кетчуп', '10 г'], ['Картофель', '150 г'],
      ['Масло', '15 г'], ['Соль и перец', '2 г'],
    ]}],
  },
  {
    cat: 'main', bg: 'bg-sky', emoji: '🥟',
    name: 'Пельмешки «Кунг-фу Панда»', sub: 'по мотивам мультфильма «Кунг-фу Панда»',
    weight: '295 г', price: '520 ₽',
    desc: 'Сочные пельмешки с мясной начинкой и овощами — сытное блюдо для настоящих мастеров вкуса.',
    img: 'https://cdn.poehali.dev/projects/532c6493-d9cd-4922-af3b-96de0398b985/files/fd14176f-a161-4eaf-a92a-2755f6b42530.jpg',
    groups: [{ items: [
      ['Пельменное тесто', '90 г'], ['Свиной фарш', '90 г'], ['Лук', '25 г'], ['Морковь', '20 г'],
      ['Капуста', '30 г'], ['Соевый соус', '15 г'], ['Масло', '10 г'], ['Зелень', '5 г'],
      ['Соль', '3 г'], ['Перец', '2 г'], ['Вода', '5 г'],
    ]}],
  },
  {
    cat: 'main', bg: 'bg-coral', emoji: '🌮',
    name: 'Шляпа из начос', sub: 'закуска с необычным характером',
    weight: '260 г', price: '390 ₽',
    desc: 'Хрустящая кукурузная основа, расплавленный сыр, яркие овощи и пикантные нотки — закуска с необычным характером.',
    img: 'https://cdn.poehali.dev/projects/532c6493-d9cd-4922-af3b-96de0398b985/files/8ea5ca26-78b3-48e8-a660-2bc9199036b0.jpg',
    groups: [{ items: [
      ['Кукурузная мука', '80 г'], ['Вода', '45 г'], ['Сырный соус', '40 г'], ['Чеддер', '30 г'],
      ['Помидор', '20 г'], ['Халапеньо', '15 г'], ['Кукуруза', '20 г'], ['Майонез', '10 г'],
    ]}],
  },
  {
    cat: 'main', bg: 'bg-lilac', emoji: '🍕',
    name: 'Пицца с ананасами из «Черепашек-ниндзя»', sub: 'по мотивам мультсериала «Черепашки-ниндзя»',
    weight: '430 г', price: '590 ₽',
    desc: 'Аппетитная пицца с тягучей моцареллой, курицей и сочным ананасом. Яркое сочетание вкусов для большой компании.',
    img: 'https://cdn.poehali.dev/projects/532c6493-d9cd-4922-af3b-96de0398b985/files/6bfb9df3-5b4c-4ef4-b85c-5c9a7386cb02.jpg',
    groups: [{ items: [
      ['Тесто', '155 г'], ['Томатный соус', '55 г'], ['Моцарелла', '100 г'], ['Куриное филе', '55 г'],
      ['Ананас', '45 г'], ['Чеддер', '10 г'], ['Орегано', '3 г'], ['Масло', '7 г'],
    ]}],
  },

  // ---------- ДЕСЕРТЫ ----------
  {
    cat: 'desserts', bg: 'bg-yellow', emoji: '🥧',
    name: 'Пирог из «Маши и Медведя»', sub: 'домашний пирог',
    weight: '257 г', price: '390 ₽',
    desc: 'Домашний пирог с нежной текстурой, яблоками и лёгкой ягодной ноткой. Сладкое настроение в каждом кусочке.',
    img: 'imgs/food/dessert1.jpg',
    groups: [{ items: [
      ['Мука', '70 г'], ['Молоко', '45 г'], ['Яйцо', '1 шт.'], ['Сахар', '30 г'],
      ['Сливочное масло', '30 г'], ['Яблоки', '35 г'], ['Клубника', '7 г'],
      ['Разрыхлитель', '3 г'], ['Ванильный сахар', '2 г'],
    ]}],
  },
  {
    cat: 'desserts', bg: 'bg-sky', emoji: '🍰',
    name: 'Вишнёво-шоколадный торт «Лило и Стич»', sub: 'целый торт',
    weight: '1000 г', price: '1300 ₽', priceNote: 'цена целого торта',
    desc: 'Насыщенный шоколадный бисквит, сочная вишнёвая начинка и нежный крем. Торт для особенных моментов и сладких встреч.',
    img: 'imgs/food/dessert2.jpg',
    groups: [
      { title: 'Шоколадный бисквит', items: [['Пшеничная мука', '120 г'], ['Яйца', '120 г'], ['Сахар', '80 г'], ['Какао', '25 г'], ['Молоко', '20 г']] },
      { title: 'Вишнёвая начинка', items: [['Вишня', '120 г'], ['Вишнёвое пюре', '80 г'], ['Сахар', '40 г'], ['Кукурузный крахмал', '10 г']] },
      { title: 'Шоколадный крем', items: [['Сливки 33%', '180 г'], ['Сливочный сыр', '120 г'], ['Сахарная пудра', '35 г']] },
      { title: 'Шоколадный слой', items: [['Тёмный шоколад', '35 г'], ['Сливочное масло', '15 г']] },
      { title: 'Украшение', items: [['Шоколадная глазурь', '40 г'], ['Вишня', '30 г']] },
    ],
  },
  {
    cat: 'desserts', bg: 'bg-coral', emoji: '🍦',
    name: 'Лапка-эскимо из «Зверополиса»', sub: 'мороженое в форме лапки',
    weight: '133 г', price: '190 ₽',
    desc: 'Нежное молочное мороженое с шоколадом и хрустящей крошкой в забавной форме лапки.',
    img: 'imgs/food/dessert3.jpg',
    groups: [{ items: [
      ['Молочное мороженое', '90 г'], ['Шоколадная крошка', '12 г'], ['Сливки', '12 г'],
      ['Сахарный сироп', '8 г'], ['Вафельная крошка', '6 г'], ['Шоколад', '5 г'],
    ]}],
  },
  {
    cat: 'desserts', bg: 'bg-lilac', emoji: '🐟',
    name: 'Печенье «Рыбки» из «Маши и Медведя»', sub: 'печенье в форме рыбок',
    weight: '150 г', price: '320 ₽',
    desc: 'Румяное печенье в форме рыбок с нежным сливочным вкусом и ванильным ароматом.',
    img: 'imgs/food/dessert4.jpg',
    groups: [{ items: [
      ['Мука', '82 г'], ['Сливочное масло', '41 г'], ['Сахар', '26 г'], ['Яйцо', '1 шт.'],
      ['Сметана', '15 г'], ['Разрыхлитель', '2 г'], ['Ванильный сахар', '2 г'], ['Соль', '1 г'],
    ]}],
  },

  // ---------- НАПИТКИ ----------
  {
    cat: 'drinks', bg: 'bg-yellow', emoji: '🥤',
    name: 'Ванильный коктейль с печеньем из «Корпорации монстров»', sub: 'молочный коктейль',
    weight: '350 г', price: '390 ₽',
    desc: 'Густой ванильный коктейль с мороженым, печеньем и шоколадной крошкой — сладкое удовольствие в каждом глотке.',
    img: 'imgs/food/drink1.jpg',
    groups: [{ items: [
      ['Молоко', '180 г'], ['Ванильное мороженое', '70 г'], ['Печенье', '45 г'],
      ['Сливки', '25 г'], ['Сахарный сироп', '15 г'], ['Шоколадная крошка', '15 г'],
    ]}],
  },
  {
    cat: 'drinks', bg: 'bg-sky', emoji: '🍹',
    name: 'Блю Кюрасао из «Лило и Стич»', sub: 'безалкогольный лимонад',
    weight: '315 г', price: '290 ₽',
    desc: 'Яркий голубой напиток с лимоном и льдом, который словно переносит на тропический остров.',
    img: 'imgs/food/drink2.jpg',
    groups: [{ items: [
      ['Газированная вода', '180 г'], ['Сироп Блю Кюрасао', '35 г'], ['Лимон', '30 г'],
      ['Сахарный сироп', '20 г'], ['Лёд', '50 г'],
    ]}],
  },
  {
    cat: 'drinks', bg: 'bg-coral', emoji: '🍓',
    name: 'Клубничная кола из «Гравити Фолз»', sub: 'кола с клубникой',
    weight: '400 г', price: '350 ₽',
    desc: 'Знакомая кола, сочная клубника, лёд и лёгкая цитрусовая нотка — напиток для маленьких загадок и больших открытий.',
    img: 'imgs/food/drink3.jpg',
    groups: [{ items: [
      ['Кока-кола', '300 г'], ['Клубника', '45 г'], ['Сахарный сироп', '20 г'],
      ['Лёд', '30 г'], ['Лимон', '5 г'],
    ]}],
  },
  {
    cat: 'drinks', bg: 'bg-lilac', emoji: '🍍',
    name: 'Ананасовый смузи из «Моаны»', sub: 'тропический смузи',
    weight: '350 г', price: '390 ₽',
    desc: 'Тропический микс из ананаса, банана и кокосового молока с освежающей ноткой лайма.',
    img: 'imgs/food/drink4.jpg',
    groups: [{ items: [
      ['Ананас консервированный', '110 г'], ['Банан', '60 г'], ['Кокосовое молоко', '100 г'],
      ['Лайм', '20 г'], ['Мёд', '10 г'], ['Лёд', '50 г'],
    ]}],
  },
];

/* ---------- утилиты ---------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
// Экранируем текст, чтобы его нельзя было принять за HTML
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
// Иконка из набора в начале index.html
const icon = (name) => `<svg class="icon"><use href="#i-${name}"/></svg>`;

const priceText = (d) => (d.price ? d.price : 'Цена уточняется');

function imageBlock(d, alt) {
  if (d.img) {
    return `<img src="${esc(d.img)}" alt="${esc(alt)}" loading="lazy" decoding="async">`;
  }
  return `<div class="dish__noimg" aria-hidden="true">${d.emoji || '✨'}</div>`;
}

/* =========================================================
   2. МЕНЮ
   ========================================================= */
const panel = $('#menu-panel');

// HTML одной карточки блюда
function cardHTML(d, idx) {
  return `
  <article class="card dish">
    <div class="dish__photo ${d.bg}">
      ${imageBlock(d, `${d.name} — блюдо кафе «Три желания»`)}
      <span class="dish__weight">${esc(d.weight)}</span>
    </div>
    <div class="dish__body">
      <h3 class="dish__name">${esc(d.name)}</h3>
      <p class="dish__sub">${esc(d.sub)}</p>
      <p class="dish__desc">${esc(d.desc)}</p>
      <div class="dish__footer">
        <span class="dish__price ${d.price ? '' : 'dish__price--tbd'}">${esc(priceText(d))}</span>
        <button type="button" class="btn btn--purple dish__more" data-dish="${idx}" aria-label="Состав блюда ${esc(d.name)}">${icon('list-tree')} Состав</button>
      </div>
    </div>
  </article>`;
}

// Показать блюда одной категории и подсветить нужную вкладку
function renderMenu(cat) {
  panel.setAttribute('aria-labelledby', 'tab-' + cat);
  panel.innerHTML = DISHES.map((d, i) => (d.cat === cat ? cardHTML(d, i) : '')).join('');

  // перезапуск анимации появления
  panel.style.animation = 'none';
  void panel.offsetWidth;
  panel.style.animation = '';

  $$('[data-tab]').forEach((btn) => {
    const active = btn.dataset.tab === cat;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-selected', active);
  });
}

$$('[data-tab]').forEach((btn) => btn.addEventListener('click', () => renderMenu(btn.dataset.tab)));

// Нажатие на «Состав» (одна подписка на всю панель — работает и для новых карточек)
panel.addEventListener('click', (e) => {
  const b = e.target.closest('[data-dish]');
  if (b) openDish(+b.dataset.dish, b);
});
renderMenu('main');

/* =========================================================
   3. ОКНО «СОСТАВ»
   ========================================================= */
let modalEl = null;
let lastFocus = null;

function openDish(idx, trigger) {
  const d = DISHES[idx];
  lastFocus = trigger || document.activeElement;
  closeDish(true);

  const groups = d.groups.map((g) => `
      ${g.title ? `<h4 class="composition__group">${esc(g.title)}</h4>` : ''}
      <ul class="composition">
        ${g.items.map(([n, w]) => `<li><span>${esc(n)}</span><span>${esc(w)}</span></li>`).join('')}
      </ul>`).join('');

  const price = d.price ? `Цена: ${esc(d.price)}${d.priceNote ? ' (' + esc(d.priceNote) + ')' : ''}` : 'Цена уточняется';

  modalEl = document.createElement('div');
  modalEl.className = 'modal';
  modalEl.innerHTML = `
    <div class="card modal__box" role="dialog" aria-modal="true" aria-labelledby="dish-title">
      <button type="button" class="modal__close" data-close aria-label="Закрыть">${icon('x')}</button>
      <div class="modal__scroll">
        <div class="modal__photo ${d.bg}">${imageBlock(d, d.name)}</div>
        <div class="modal__body">
          <h3 class="modal__title" id="dish-title">${esc(d.name)}</h3>
          <p class="modal__desc">${esc(d.desc)}</p>
          <div class="modal__tags">
            <span class="tag bg-yellow">Вес: ${esc(d.weight)}</span>
            <span class="tag bg-sky">${price}</span>
          </div>
          <h4 class="modal__heading">Состав</h4>
          ${groups}
        </div>
      </div>
    </div>`;
  document.body.appendChild(modalEl);
  document.body.classList.add('modal-open');
  $('[data-close]', modalEl).focus();

  // клик по тёмному фону или по крестику закрывает окно
  modalEl.addEventListener('click', (e) => {
    if (e.target === modalEl || e.target.closest('[data-close]')) closeDish();
  });
}

function closeDish(silent) {
  if (!modalEl) return;
  modalEl.remove();
  modalEl = null;
  document.body.classList.remove('modal-open');
  if (!silent && lastFocus && lastFocus.focus) lastFocus.focus();
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeDish(); closeDrawer(); }
});

/* =========================================================
   4. FAQ — раскрывающиеся вопросы
   ========================================================= */
$$('.faq-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const open = item.classList.toggle('open');   // сам эффект — в style.css (.faq-item.open)
    btn.setAttribute('aria-expanded', open);
  });
});

/* =========================================================
   5. МОБИЛЬНОЕ МЕНЮ
   ========================================================= */
let drawer = null, backdrop = null;
const menuBtn = $('#mobile-menu-btn');

function openDrawer() {
  if (drawer) return;
  backdrop = document.createElement('div');
  backdrop.className = 'backdrop';
  drawer = document.createElement('nav');
  drawer.className = 'drawer';
  drawer.setAttribute('aria-label', 'Мобильное меню');
  drawer.innerHTML = `
    <div class="drawer__top">
      <span class="drawer__logo">Три желания</span>
      <button type="button" class="drawer__close" data-close aria-label="Закрыть меню">${icon('x')}</button>
    </div>
    <a class="drawer__link" href="#top">Главная</a>
    <a class="drawer__link" href="#menu">Меню</a>
    <a class="drawer__link" href="#concept">О кафе</a>
    <a class="drawer__link" href="#reviews">Отзывы</a>
    <a class="drawer__link" href="#contacts">Контакты</a>
    <a class="btn btn--yellow" href="#booking">Забронировать столик</a>`;
  document.body.append(backdrop, drawer);
  document.body.classList.add('modal-open');
  menuBtn.setAttribute('aria-expanded', 'true');
  requestAnimationFrame(() => drawer.classList.add('open'));   // запускаем выезд
  backdrop.addEventListener('click', closeDrawer);
  drawer.addEventListener('click', (e) => {
    if (e.target.closest('a') || e.target.closest('[data-close]')) closeDrawer();
  });
}
function closeDrawer() {
  if (!drawer) return;
  drawer.remove(); backdrop.remove();
  drawer = backdrop = null;
  document.body.classList.remove('modal-open');
  menuBtn.setAttribute('aria-expanded', 'false');
}
menuBtn.addEventListener('click', () => (drawer ? closeDrawer() : openDrawer()));

/* =========================================================
   6. ФОРМА БРОНИРОВАНИЯ (демо — ничего не отправляет)
   ========================================================= */
const form = $('#booking-form');
const fName = $('#b-name'), fPhone = $('#b-phone'), fDate = $('#b-date'),
      fTime = $('#b-time'), fGuests = $('#b-guests'), fBirthday = $('#b-birthday');

// Нельзя выбрать дату в прошлом
const now = new Date();
const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
fDate.min = todayStr;

// Кнопки «−» и «+» у количества гостей
$$('.guests .round-btn', form).forEach((b) => b.addEventListener('click', () => {
  const delta = b.getAttribute('aria-label') === 'Больше гостей' ? 1 : -1;
  fGuests.value = Math.min(30, Math.max(1, (parseInt(fGuests.value, 10) || 1) + delta));
  clearError(fGuests);
}));

// Переключатель «Хочу отметить день рождения» (внешний вид — в CSS через aria-checked)
fBirthday.addEventListener('click', () => {
  fBirthday.setAttribute('aria-checked', fBirthday.getAttribute('aria-checked') !== 'true');
});

function setError(input, msg) {
  clearError(input);
  input.classList.add('field-invalid');
  input.setAttribute('aria-invalid', 'true');
  const p = document.createElement('p');
  p.className = 'field-error';
  p.dataset.err = input.id;
  p.textContent = msg;
  (input.closest('.guests') || input).insertAdjacentElement('afterend', p);
}
function clearError(input) {
  input.classList.remove('field-invalid');
  input.setAttribute('aria-invalid', 'false');
  const old = form.querySelector(`[data-err="${input.id}"]`);
  if (old) old.remove();
}
[fName, fPhone, fDate, fTime, fGuests].forEach((i) => i.addEventListener('input', () => clearError(i)));

function validate() {
  let ok = true;
  const fail = (el, msg) => { setError(el, msg); ok = false; };
  [fName, fPhone, fDate, fTime, fGuests].forEach(clearError);

  if (fName.value.trim().length < 2) fail(fName, 'Укажите ваше имя');

  const digits = fPhone.value.replace(/\D/g, '');
  if (!digits) fail(fPhone, 'Укажите номер телефона');
  else if (!/^(7|8)?\d{10}$/.test(digits)) fail(fPhone, 'Введите корректный номер, например +7 965 594-70-77');

  if (!fDate.value) fail(fDate, 'Выберите дату');
  else if (fDate.value < todayStr) fail(fDate, 'Дата не может быть в прошлом');

  if (!fTime.value) fail(fTime, 'Выберите время');

  const g = parseInt(fGuests.value, 10);
  if (!g || g < 1 || g > 30) fail(fGuests, 'Количество гостей — от 1 до 30');
  return ok;
}

let successEl = null;
form.addEventListener('submit', (e) => {
  e.preventDefault();                       // не даём браузеру перезагрузить страницу
  if (!validate()) {
    const first = form.querySelector('.field-invalid');
    if (first) first.focus();
    return;
  }
  // ВНИМАНИЕ: здесь НЕТ отправки данных на сервер — это только демонстрация.
  // Чтобы заявки реально приходили, сюда нужно добавить отправку (fetch на ваш сервер/почтовый сервис).
  Array.from(form.children).forEach((c) => (c.hidden = true));
  successEl = document.createElement('div');
  successEl.className = 'success';
  successEl.innerHTML = `
    <div class="success__icon">${icon('check')}</div>
    <h3>Заявка отправлена!</h3>
    <p>Спасибо! Твоё желание принято. До встречи в «Трёх желаниях»! ✨</p>
    <button type="button" class="btn btn--purple">Заполнить заново</button>`;
  form.appendChild(successEl);
  $('button', successEl).addEventListener('click', resetForm);
});

function resetForm() {
  if (successEl) successEl.remove();
  successEl = null;
  form.reset();
  fGuests.value = 2;
  fBirthday.setAttribute('aria-checked', 'false');
  Array.from(form.children).forEach((c) => (c.hidden = false));
  fName.focus();
}
