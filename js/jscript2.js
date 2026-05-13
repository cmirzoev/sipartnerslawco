

const servicesData = {
    arbitrage: {
        icon: "⚖️",
        title: "Арбитраж и суды",
        description: `
            <h3>Полное юридическое сопровождение</h3>
            <p><strong>Профессиональная защита интересов в арбитражных судах всех инстанций.</strong> Наши адвокаты имеют успешный опыт ведения дел в арбитражных судах всех инстанций, включая Верховный Суд РФ. За нашими плечами более 500 выигранных дел.</p>
            
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
            <p><strong>от 50 000 ₽</strong> — фиксированная цена за ведение дела "под ключ". Возможна оплата поэтапно.</p>
            
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
            <p><strong>от 40 000 ₽</strong> — полное сопровождение сделки<br>
            <strong>от 15 000 ₽</strong> — юридическая проверка объекта</p>
            
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
    tax: {
        icon: "🛡️",
        title: "Налоговое право и защита бизнеса",
        description: `
            <h3>Снижаем налоги законно и защищаем от налоговой</h3>
            <p><strong>Минимизируйте налоговые риски и платите меньше.</strong> Наши специалисты имеют опыт работы в ФНС и знают все схемы проверок изнутри.</p>
            
            <h3>Наши услуги:</h3>
            <ul>
                <li><strong>Налоговое планирование и оптимизация</strong> — подбор законных схем снижения нагрузки на 30-50%</li>
                <li><strong>Сопровождение налоговых проверок</strong> — выездных и камеральных, подготовка возражений</li>
                <li><strong>Обжалование решений ФНС</strong> — в вышестоящем органе, арбитражном суде</li>
                <li><strong>Защита при доначислениях</strong> — оспаривание штрафов, пени, требований об уплате</li>
                <li><strong>Аудит налоговой безопасности</strong> — выявление рисков, разработка рекомендаций</li>
                <li><strong>Блокировка счетов</strong> — снятие незаконных ограничений</li>
            </ul>
            
            <h3>Стоимость:</h3>
            <p><strong>от 25 000 ₽</strong> — разовая консультация и анализ<br>
            <strong>от 80 000 ₽/мес</strong> — полное налоговое сопровождение бизнеса</p>
            
            <h3>Результат:</h3>
            <p>✔ Снижение доначислений на 70-90%<br>
            ✔ Отмена штрафов и пеней<br>
            ✔ Спокойное ведение бизнеса без риска блокировки<br>
            ✔ Оптимальная налоговая нагрузка</p>
            
            <div class="modal-buttons1">
                <button class="btn-primary1" onclick="location.href='#contacts_form', closeModal()">Получить консультацию</button>
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
