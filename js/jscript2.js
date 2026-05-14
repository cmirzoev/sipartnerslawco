
    

const servicesData = {
    migration: {
        icon: "🛂",
        title: "Миграционные вопросы",
        description: `
            <h3>Помощь иностранным гражданам и их работодателям</h3>
            <p><strong>Быстрое и законное решение миграционных задач.</strong> Поможем оформить все необходимые документы, избежать штрафов и депортации.</p>
            
            <h3>Основные услуги:</h3>
            <ul>
                <li>Обжалование решений УВМ МВД (отказ в РВП/ВНЖ, выдворение)</li>
                <li>Восстановление миграционного статуса</li>
            </ul>
            
            <h3>Для работодателей:</h3>
            <ul>
                <li>Уведомления о приёме/увольнении иностранца</li>
                <li>Помощь при проверках МВД и прокуратуры</li>
                <li>Разрешение на привлечение иностранных работников</li>
            </ul>
            
            <h3>Дополнительно:</h3>
            <ul>
                <li>Обжалование решений УВМ МВД (отказ в РВП/ВНЖ, выдворение)</li>
                <li>Восстановление миграционного статуса</li>
            </ul>
            
            <h3>Стоимость:</h3>
            <p><strong>от 2 000 ₽</strong> — консультация и подготовка типовых документов<br>
            <h3>Гарантия:</h3>
            <p>✅ <strong>Фиксированная цена</strong> — без скрытых доплат.<br>
            ✅ <strong>Сопровождение до результата</strong> — помогаем даже при отказах.</p>
            
            <div class="modal-buttons1">
                <button class="btn-primary1" onclick="location.href='#contacts_form'; closeModal();">Заказать услугу</button>
                <button class="btn-secondary1" onclick="closeModal()">Закрыть</button>
            </div>
        `
    }
,
    arbitrage: {
        icon: "⚖️",
        title: "Арбитраж и суды",
        description: `
            <h3>Полное юридическое сопровождение</h3>
            <p><strong>Профессиональная защита интересов в арбитражных судах всех инстанций.</strong> Наша команда имеет успешный опыт ведения дел в арбитражных судах всех инстанций, включая Верховный Суд РФ.</p>
            
            <h3>Что входит в услугу:</h3>
            <ul>
                <li><strong>Анализ ситуации</strong> — оценка перспектив дела и разработка правовой позиции</li>
                <li><strong>Досудебное урегулирование</strong> — претензионная работа, попытка мирного решения спора</li>
                <li><strong>Подготовка процессуальных документов</strong> — исковые заявления, отзывы, ходатайства, апелляции</li>
                <li><strong>Представительство в суде</strong> — личное участие адвоката на всех заседаниях</li>
                <li><strong>Обжалование</strong> — апелляционная, кассационная, надзорная инстанции</li>
                <li><strong>Исполнительное производство</strong> — контроль исполнения судебного решения</li>
            </ul>
            
            <h3>Результат:</h3>
            <p>✓ Защита ваших прав и законных интересов<br>
            ✓ Взыскание задолженности и убытков<br>
            ✓ Оспаривание незаконных решений<br>
            ✓ Экономия времени и денег</p>
            
            <h3>Стоимость:</h3>
            <p><strong>от 30 000 ₽</strong> — фиксированная цена за ведение дела "под ключ". Возможна оплата поэтапно.</p>
            
            <h3>Сроки:</h3>
            <p>от 2 месяцев в зависимости от сложности дела</p>
            
            <div class="modal-buttons1">
                <button class="btn-primary1" onclick="location.href='#contacts_form', closeModal()">Заказать услугу</button>
                <button class="btn-secondary1" onclick="closeModal()">Закрыть</button>
            </div>
        `
    },
    business: {
        icon: "📄",
        title: "Регистрация бизнеса",
        description: `
            <h3>Открытие бизнеса без ошибок и отказов</h3>
            <p><strong>Поможем открыть своё дело с нуля за минимальное время.</strong> Работаем со всеми организационно-правовыми формами. Гарантируем успешную регистрацию с первого раза.</p>
            
            <h3>Что входит в услугу:</h3>
            <ul>
                <li><strong>Консультация</strong> — выбор ОПФ (ООО, ИП, АО, НКО) и системы налогообложения</li>
                <li><strong>Подготовка документов</strong> — устав, решение/договор об учреждении, заявления, протоколы</li>
                <li><strong>Подача в ФНС</strong> — лично, через МФЦ или нотариально</li>
                <li><strong>Получение документов</strong> — лист записи ЕГРЮЛ/ЕГРИП, устав, свидетельство ИНН</li>
                <li><strong>Открытие расчётного счёта</strong> — подбор лучшего тарифа, помощь с документами</li>
                <li><strong>Печать и штамп</strong> — изготовление по желанию</li>
            </ul>
            
            <h3>Дополнительно (по запросу):</h3>
            <ul>
                <li>Внесение изменений в учредительные документы</li>
                <li>Реорганизация и ликвидация</li>
                <li>Регистрация изменений в ЕГРЮЛ</li>
            </ul>
            
            <h3>Стоимость:</h3>
            <p><strong>от 8 000 ₽</strong> — регистрация под ключ (включая госпошлину)<br>
            <strong>от 3 000 ₽/мес</strong> — юридическое обслуживание после регистрации</p>
            
            <h3>Гарантия:</h3>
            <p>✅ <strong>100% возврат денег</strong> при отказе в регистрации по нашей вине.<br>
            ✅ <strong>Бесплатная доработка</strong> документов при необходимости.</p>
            
            <div class="modal-buttons1">
                <button class="btn-primary1" onclick="location.href='#contacts_form', closeModal()">Заказать услугу</button>
                <button class="btn-secondary1" onclick="closeModal()">Закрыть</button>
            </div>
        `
    },
    contract: {
        icon: "🔒",
        title: "Договорное право",
        description: `
            <h3>Ваша юридическая безопасность в каждой сделке</h3>
            <p><strong>Составляем договоры, которые работают на вас.</strong> Исключаем риски, прописываем все важные условия, защищаем от недобросовестных контрагентов.</p>
            
            <h3>Виды договоров:</h3>
            <ul>
                <li><strong>Гражданско-правовые</strong> — купля-продажа, подряд, аренда, займ, дарение</li>
                <li><strong>Корпоративные</strong> — устав, договор об учреждении, корпоративный договор</li>
                <li><strong>Трудовые</strong> — трудовой договор, ГПХ, авторский заказ, лицензионный</li>
                <li><strong>Внешнеэкономические</strong> — контракты с иностранными партнерами</li>
                <li><strong>Предварительные и рамочные</strong> — соглашения о намерениях, меморандумы</li>
            </ul>
            
            <h3>Услуги в рамках договорного права:</h3>
            <ul>
                <li><strong>Составление</strong> — индивидуальный договор под вашу ситуацию</li>
                <li><strong>Правовая экспертиза</strong> — анализ готового договора, выявление рисков</li>
                <li><strong>Сопровождение подписания</strong> — контроль соблюдения процедуры</li>
                <li><strong>Претензионная работа</strong> — досудебное урегулирование споров</li>
            </ul>
            
            <h3>Стоимость:</h3>
            <p><strong>от 5 000 ₽</strong> — за один договор<br>
            <strong>от 30 000 ₽/мес</strong> — абонентское обслуживание (до 10 договоров в месяц)<br>
            <strong>от 50 000 ₽/мес</strong> — полное правовое сопровождение бизнеса</p>
            
            <div class="modal-buttons1">
                <button class="btn-primary1" onclick="location.href='#contacts_form', closeModal()">Заказать услугу</button>
                <button class="btn-secondary1" onclick="closeModal()">Закрыть</button>
            </div>
        `
    },
    property: {
        icon: "🏢",
        title: "Недвижимость",
        description: `
            <h3>Безопасные сделки с недвижимостью</h3>
            <p><strong>Проверим объект, подготовим документы, зарегистрируем право.</strong> Избавим от риска потерять деньги или квартиру. Работаем со всеми видами недвижимости.</p>
            
            <h3>Мы работаем с объектами:</h3>
            <ul>
                <li>Жилая недвижимость (квартиры, дома, комнаты, доли)</li>
                <li>Коммерческая недвижимость (офисы, склады, ТЦ, магазины)</li>
                <li>Земельные участки (ИЖС, СНТ, сельхоз назначение)</li>
                <li>Новостройки (ДДУ, переуступка прав)</li>
            </ul>
            
            <h3>Что входит в услугу:</h3>
            <ul>
                <li><strong>Юридическая проверка</strong> — анализ истории объекта, проверка обременений, прописки, долгов</li>
                <li><strong>Подготовка документов</strong> — договор, акт приёма-передачи, заявления в Росреестр</li>
                <li><strong>Регистрация перехода права</strong> — в Росреестре, получение выписки из ЕГРН</li>
                <li><strong>Ипотечные сделки</strong> — взаимодействие с банками, проверка заёмщика</li>
                <li><strong>Судебная защита</strong> — оспаривание сделок, признание права, выселение</li>
            </ul>
            
            <h3>Стоимость:</h3>
            <p><strong>от 10 000 ₽</strong> — полное сопровождение сделки<br>
            <strong>от 5 000 ₽</strong> — юридическая проверка объекта</p>
            
            <h3>Гарантия:</h3>
            <p>🛡️ <strong>Страховка сделки</strong> — в случае выявления юридических проблем после покупки мы компенсируем убытки до 5 000 000 ₽.</p>
            
            <div class="modal-buttons1">
                <button class="btn-primary1" onclick="location.href='#contacts_form', closeModal()">Записаться на консультацию</button>
                <button class="btn-secondary1" onclick="closeModal()">Закрыть</button>
            </div>
        `
    },
    bankruptcy: {
        icon: "⚡",
        title: "Банкротство физических и юридических лиц",
        description: `
            <h3>Законное списание долгов без последствий</h3>
            <p><strong>Избавим от долгов по закону.</strong> Кредиторы перестанут звонить, приставы закроют производства, запрет на выезд снимут. Полное освобождение от обязательств.</p>
            
            <h3>Кому подходит банкротство:</h3>
            <ul>
                <li>Долг от 500 000 ₽</li>
                <li>Просрочка более 3 месяцев</li>
                <li>Несколько кредитов и займов</li>
                <li>Нет возможности платить (потеря работы, болезнь, декрет)</li>
                <li>Исполнительное производство открыто</li>
            </ul>
            
            <h3>Что мы делаем:</h3>
            <ul>
                <li><strong>Консультация и анализ</strong> — оцениваем целесообразность и риски</li>
                <li><strong>Сбор документов</strong> — полный пакет для суда (помогаем собрать)</li>
                <li><strong>Подготовка заявления</strong> — юридически грамотное обоснование</li>
                <li><strong>Подача в арбитражный суд</strong> и отслеживание движения дела</li>
                <li><strong>Сопровождение процедуры</strong> — взаимодействие с финансовым управляющим и кредиторами</li>
                <li><strong>Получение решения о списании долгов</strong> — вы освобождаетесь от обязательств</li>
            </ul>
            
            <h3>Стоимость:</h3>
            <p><strong>от 100 000 ₽</strong> — банкротство физического лица (под ключ)<br>
            <strong>от 250 000 ₽</strong> — банкротство юридического лица</p>
            
            <h3>Результат:</h3>
            <p>✓ Все долги списаны (кроме алиментов, возмещения вреда)<br>
            ✓ Приставы прекращают взыскание<br>
            ✓ Аресты с имущества снимаются<br>
            ✓ Вы можете начать новую финансовую жизнь</p>
            
            <div class="modal-buttons1">
                <button class="btn-primary1" onclick="location.href='#contacts_form', closeModal()">Бесплатная консультация</button>
                <button class="btn-secondary1" onclick="closeModal()">Закрыть</button>
            </div>
        `
    },
family: {
    icon: "💑",
    title: "Семейное право",
    description: `
        <h3>Решаем семейные споры быстро и с минимальными потерями</h3>
        <p><strong>Защитим ваши права и интересы в любых семейных вопросах.</strong> Бережём нервы, деньги и время. Работаем во всех инстанциях.</p>
        
        <h3>Основные услуги:</h3>
        <ul>
            <li><strong>Расторжение брака</strong> — через ЗАГС (при взаимном согласии, без детей) или суд (при наличии споров, детей). Полное сопровождение от подачи заявления до получения решения.</li>
            <li><strong>Раздел совместно нажитого имущества</strong> — квартиры, машины, бизнес, дачи, счета. Поможем сохранить справедливость и уменьшить судебные издержки.</li>
            <li><strong>Алименты</strong> — взыскание в твёрдой денежной сумме или долях от дохода, уменьшение / увеличение размера, освобождение от уплаты, задолженность.</li>
            <li><strong>Определение места жительства ребенка</strong> — составление мировых соглашений, представление интересов в суде, привлечение органов опеки.</li>
            <li><strong>Порядок общения с ребенком</strong> — график встреч, ограничение / лишение родительских прав, восстановление в правах.</li>
            <li><strong>Оспаривание и установление отцовства</strong> — добровольное или через суд, генетическая экспертиза.</li>
            <li><strong>Брачный договор и соглашение о разделе имущества</strong> — составление, заверение, изменение, признание недействительным.</li>
            <li><strong>Защита от домашнего насилия</strong> — судебные приказы, изолирование обидчика, консультации.</li>
        </ul>
        
        <h3>Дополнительные услуги:</h3>
        <ul>
            <li>Признание брака недействительным</li>
            <li>Раздел долгов супругов (ипотека, кредиты)</li>
            <li>Выдел доли из общего имущества</li>
            <li>Обжалование решений судов по семейным делам</li>
            <li>Представление интересов в опеке и попечительстве</li>
        </ul>
        
        <h3>Стоимость:</h3>
        <p><strong>от 3 000 ₽</strong> — устная консультация и первичный анализ документов<br>
        <strong>от 10 000 ₽</strong> — подготовка иска о расторжении брака / взыскании алиментов<br>
        <strong>от 25 000 ₽</strong> — раздел имущества или спор о детях «под ключ» (включая суд)<br>
        <strong>от 40 000 ₽</strong> — полное ведение сложного дела (апелляция, кассация)</p>
        
        <h3>Почему мы:</h3>
        <p>✅ <strong>Фиксированная стоимость</strong> — никаких доплат по ходу дела.<br>
        ✅ <strong>Досудебное урегулирование</strong> — помогаем сохранить семью или разойтись мирно.<br>
        ✅ <strong>Опыт в судах общей юрисдикции</strong> — выигранные дела по алиментам, разделу и определению детей.<br>
        ✅ <strong>Индивидуальный подход</strong> — учитываем интересы всех членов семьи, особенно детей.</p>
        
        <div class="modal-buttons1">
            <button class="btn-primary1" onclick="location.href='#contacts_form'; closeModal();">Записаться на консультацию</button>
            <button class="btn-secondary1" onclick="closeModal()">Закрыть</button>
        </div>
    `
},
autolaw: {
    icon: "🚗",
    title: "Автоюрист",
    description: `
        <h3>Полная юридическая защита автомобилистов</h3>
        <p><strong>Решаем любые проблемы, связанные с автомобилем, ДТП, ГИБДД и страховыми.</strong> Экономим ваши нервы, время и деньги.</p>
        
        <h3>Что мы делаем:</h3>
        <ul>
            <li><strong>Споры со страховыми компаниями</strong> — взыскание выплат по ОСАГО/КАСКО, неустойки, штрафы, компенсация морального вреда.</li>
            <li><strong>ДТП и европротокол</strong> — правильное оформление, оспаривание вины, помощь в получении страховой выплаты.</li>
            <li><strong>Обжалование штрафов ГИБДД</strong> — отмена незаконных постановлений (камеры, превышение, парковка, разметка).</li>
            <li><strong>Лишение водительских прав</strong> — за езду в нетрезвом виде, выезд на встречку, отказ от медосвидетельствования. Сокращаем срок, помогаем вернуть права досрочно.</li>
            <li><strong>Возврат прав после лишения</strong> — прохождение экзамена, получение удостоверения без задержек.</li>
            <li><strong>Защита в суде по делам об административных правонарушениях</strong> — превышение скорости, тонировка, ремень, перегруз, СИМ.</li>
            <li><strong>Споры с автосалонами и дилерами</strong> — возврат некачественного авто, гарантийный ремонт, обмен, расторжение договора.</li>
            <li><strong>Растаможка и регистрация авто</strong> — помощь с документами, пошлинами, прохождением таможни.</li>
            <li><strong>Снятие ограничений и арестов</strong> — с автомобиля, запрет на регистрационные действия.</li>
        </ul>
        
        <h3>Дополнительно:</h3>
        <ul>
            <li>Независимая техническая экспертиза (ущерб, стоимость ремонта, трасология)</li>
            <li>Помощь на месте ДТП — выезд юриста, составление схемы, фиксация нарушений</li>
            <li>Представление интересов в ГИБДД, прокуратуре, судах всех инстанций</li>
            <li>Обжалование решений о привлечении к ответственности (ст. 12.8, 12.26, 12.9 КоАП РФ и др.)</li>
        </ul>
        
        <h3>Стоимость:</h3>
        <p><strong>от 3 000 ₽</strong> — консультация и анализ документов<br>
        <strong>от 7 000 ₽</strong> — обжалование штрафа или лишения прав под ключ<br>
        <strong>от 12 000 ₽</strong> — полное ведение дела о ДТП или спора со страховой (судебное представительство)<br>
        <strong>от 25 000 ₽</strong> — возврат прав, сокращение срока лишения</p>
        
        <h3>Гарантия:</h3>
        <p>✅ <strong>Фиксированная цена</strong> — без скрытых доплат.<br>
        ✅ <strong>Опыт в судах</strong> — десятки выигранных дел по лишению прав и ДТП.<br>
        ✅ <strong>Результат в срок</strong> — ведём дело до полного исполнения.</p>
        
        <div class="modal-buttons1">
            <button class="btn-primary1" onclick="location.href='#contacts_form'; closeModal();">Записаться на консультацию</button>
            <button class="btn-secondary1" onclick="closeModal()">Закрыть</button>
        </div>
    `
}
};

// ========== ФУНКЦИИ ДЛЯ РАБОТЫ С МОДАЛЬНЫМ ОКНОМ ==========

// Функция открытия модального окна
function openModal(serviceId) {
    const modal = document.getElementById('modal1');
    const modalTitle = document.getElementById('modal-title1');
    const modalBody = document.getElementById('modal-body1');
    const data = servicesData[serviceId];
    
    if (data) {
        modalTitle.innerHTML = `${data.icon} ${data.title}`;
        modalBody.innerHTML = data.description;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
    }
};

// Функция закрытия модального окна
function closeModal() {
    const modal = document.getElementById('modal1');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Возвращаем скролл страницы
};




// ========== НАЗНАЧАЕМ ОБРАБОТЧИКИ ==========

// Обработчики для всех кнопок "Узнать"
// Находим элементы один раз (глобально или при загрузке страницы)
const closeButton = document.getElementById("btn-primary1");
const modal = document.getElementById("modal1");



// Обработчики открытия на каждой кнопке-услуге
document.querySelectorAll('.service-btn1').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const service = this.getAttribute('data-service');
        if (service) {
            openModal(service);
            // дополнительная логика, если нужна (например, показывать модалку)
            // но закрытие уже обрабатывается отдельно
        }
    });
});


// Вешаем обработчик закрытия один раз (если элементы существуют)
if (closeButton && modal) {
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
} else {
    console.error('Кнопка закрытия или модальное окно не найдены');
}

if(modal.style.display === 'flex'){
        console.error('Flexed');
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

// if(closeButton.addEventListener)


// Закрытие по кнопке "×"
const closeBtn = document.getElementById('closeModalBtn1');
if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}

// Закрытие при клике на фон (оверлей)
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal1');
    if (event.target === modal) {
        closeModal();
    }
});

// Закрытие по клавише Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('modal1');
        if (modal.style.display === 'flex') {
            closeModal();
        }
    }
});




// Анимация счётчика при прокрутке (появляется, когда блок виден)
function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentValue = Math.floor(progress * (end - start) + start);
        element.innerText = currentValue;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Проверка, виден ли элемент
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Запускаем счётчики, когда они появляются на экране
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.stat-number');
    let animated = new Set(); // Отслеживаем уже анимированные счётчики
    
    function checkCounters() {
        counters.forEach(counter => {
            if (!animated.has(counter) && isElementInViewport(counter)) {
                const targetCount = parseInt(counter.getAttribute('data-count'));
                if (!isNaN(targetCount)) {
                    animated.add(counter);
                    animateCounter(counter, 0, targetCount, 2000);
                }
            }
        });
    }
    
    // Проверяем при загрузке
    checkCounters();
    
    // Проверяем при прокрутке
    window.addEventListener('scroll', checkCounters);
    window.addEventListener('resize', checkCounters);
});




// ---------------------------------


const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw1HhIrFDe0trvUUyYRtE1cAPbPZfIh1ZMCEsFBH2JTVcnlIjDMASBYrT9k48MJuUB5/exec"

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('consultation-form');
    
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Показываем загрузку
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Отправка...';
            
            // Собираем данные из формы
            const formData = new FormData(form);
            const urlParams = new URLSearchParams();
            
            // Преобразуем FormData в URLSearchParams
            for (const [key, value] of formData.entries()) {
                urlParams.append(key, value);
            }
            
            try {
                const response = await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    mode: 'no-cors', // Важно для Google Apps Script
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: urlParams.toString()
                });
                
                // Показываем сообщение об успехе
                showMessage(form, '✅ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.', 'success');
                form.reset();
                
            } catch (error) {
                console.error('Ошибка:', error);
                showMessage(form, '❌ Произошла ошибка. Пожалуйста, попробуйте позже или позвоните нам.', 'error');
                
            } finally {
                // Возвращаем кнопку
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }
        });
    }
});

// Функция для показа сообщений
function showMessage(form, text, type) {
    // Удаляем старое сообщение, если есть
    const oldMessage = form.querySelector('.form-message');
    if (oldMessage) {
        oldMessage.remove();
    }
    
    // Создаём новое сообщение
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message--${type}`;
    messageDiv.innerHTML = `
        <div class="message-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${text}</span>
        </div>
    `;
    
    // Добавляем стили
    messageDiv.style.cssText = `
        margin-top: 20px;
        padding: 12px 16px;
        border-radius: 12px;
        background: ${type === 'success' ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)'};
        border: 1px solid ${type === 'success' ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)'};
        color: ${type === 'success' ? 'rgb(34, 197, 94)' : 'rgb(239, 68, 68)'};
    `;
    
    // Вставляем после кнопки
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.insertAdjacentElement('afterend', messageDiv);
    
    // Через 5 секунд удаляем сообщение
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        messageDiv.style.transition = 'opacity 0.3s';
        setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
}


//<a id="yaMapLink" href="#">📍 Открыть в Яндекс.Картах (приложение)</a>

document.getElementById('open-map').addEventListener('click', (event) => {
    const appScheme = 'https://yandex.ru/maps/-/CPgyQM5V'; // Замените на нужные параметры
    const webFallback = 'https://yandex.ru/maps/-/CPgyQM5V'; // Резервная ссылка на сайт
    
    const timeout = setTimeout(() => { window.location.href = webFallback; }, 500);
    window.location.href = appScheme;
    setTimeout(() => clearTimeout(timeout), 1000);
    
    event.preventDefault();
});

document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.carousel-dots');
    let cards = document.querySelectorAll('.review-card');
    let currentIndex = 0;
    let autoScrollInterval;

    function updateDots() {
        if (!dotsContainer) return;
        dotsContainer.innerHTML = '';
        cards.forEach((_, i) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === currentIndex) dot.classList.add('active');
            dot.addEventListener('click', () => scrollToCard(i));
            dotsContainer.appendChild(dot);
        });
    }

    function scrollToCard(index) {
        if (!cards.length || !track) return;
        index = Math.min(Math.max(index, 0), cards.length - 1);
        const card = cards[index];
        if (card) {
            // Прокручиваем только трек (горизонтальную область отзывов), а не всю страницу
            const scrollLeft = card.offsetLeft - track.offsetLeft;
            track.scrollTo({ left: scrollLeft, behavior: 'smooth' });
            currentIndex = index;
            updateDots();
            resetAutoScroll();
        }
    }

    function scrollByDirection(direction) {
        if (!track) return;
        const scrollAmount = track.clientWidth * 0.9;
        track.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
        resetAutoScroll();
        setTimeout(() => {
            const scrollLeft = track.scrollLeft;
            let closestIndex = 0;
            let minDiff = Infinity;
            cards.forEach((card, idx) => {
                const offset = card.offsetLeft - track.offsetLeft;
                const diff = Math.abs(scrollLeft - offset);
                if (diff < minDiff) {
                    minDiff = diff;
                    closestIndex = idx;
                }
            });
            if (closestIndex !== currentIndex) {
                currentIndex = closestIndex;
                updateDots();
            }
        }, 300);
    }

    function resetAutoScroll() {
        if (autoScrollInterval) clearInterval(autoScrollInterval);
        autoScrollInterval = setInterval(() => {
            if (cards.length) {
                let nextIndex = (currentIndex + 1) % cards.length;
                scrollToCard(nextIndex);
            }
        }, 5000);
    }

    function initCarousel() {
        if (!track || !cards.length) return;
        prevBtn.addEventListener('click', () => scrollByDirection(-1));
        nextBtn.addEventListener('click', () => scrollByDirection(1));
        track.addEventListener('scroll', () => {
            clearTimeout(window.scrollEndTimer);
            window.scrollEndTimer = setTimeout(() => {
                const scrollLeft = track.scrollLeft;
                let closestIndex = 0;
                let minDiff = Infinity;
                cards.forEach((card, idx) => {
                    const offset = card.offsetLeft - track.offsetLeft;
                    const diff = Math.abs(scrollLeft - offset);
                    if (diff < minDiff) {
                        minDiff = diff;
                        closestIndex = idx;
                    }
                });
                if (closestIndex !== currentIndex) {
                    currentIndex = closestIndex;
                    updateDots();
                    resetAutoScroll();
                }
            }, 100);
        });
        updateDots();
        resetAutoScroll();
    }

    initCarousel();
});