        // Sticky Nav
        const nav = document.getElementById('nav');
        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.scrollY > 30);
        });

        // Mobile Nav Toggle
        const hbg = document.getElementById('hbg');
        const mnav = document.getElementById('mnav');
        hbg.addEventListener('click', () => {
            const open = hbg.classList.toggle('open');
            mnav.classList.toggle('open', open);
        });
        mnav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hbg.classList.remove('open');
                mnav.classList.remove('open');
            });
        });

        // FAQ Accordion
        document.querySelectorAll('.faq-item').forEach(item => {
            const q = item.querySelector('.faq-q');
            q.addEventListener('click', () => {
                item.classList.toggle('open');
            });
        });

        // Counter Animation
        const counters = document.querySelectorAll('[data-count]');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.count, 10);
                    let current = 0;
                    const step = Math.ceil(target / 40);
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) {
                            el.textContent = target;
                            clearInterval(timer);
                        } else {
                            el.textContent = current;
                        }
                    }, 30);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(c => observer.observe(c));

        // Cookie Banner
        const cookieBanner = document.getElementById('cookie-banner');
        const cookieAccept = document.getElementById('cookie-accept');
        const cookieDecline = document.getElementById('cookie-decline');

        if (!localStorage.getItem('cookieConsent')) {
            setTimeout(() => {
                cookieBanner.style.display = 'block';
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        cookieBanner.classList.add('visible');
                    });
                });
            }, 1200);
        }

        function dismissCookie(choice) {
            localStorage.setItem('cookieConsent', choice);
            cookieBanner.classList.remove('visible');
            setTimeout(() => cookieBanner.style.display = 'none', 450);
        }

        cookieAccept.addEventListener('click', () => dismissCookie('accepted'));
        cookieDecline.addEventListener('click', () => dismissCookie('declined'));


    (function () {
        "use strict";
        var STORE = "king_lang";

        var I18N = {
            de: {
                "meta.title": "King Fahrschule Neuwied – Ihr königlicher Weg zur mobilen Freiheit",
                "meta.desc": "King Fahrschule in Neuwied. Führerschein Klasse B, BE, B197 und mehr. Moderne Ausbildung, geduldige Fahrlehrer und königlicher Service in Neuwied.",
                "nav.ausbildung": "Ausbildung",
                "nav.preise": "Preise",
                "nav.angebot": "Angebot 🔥",
                "nav.fahrzeuge": "Fahrzeuge",
                "nav.fahrlehrer": "Fahrlehrer",
                "nav.kontakt": "Kontakt",
                "nav.book": "Termin buchen",
                "nav.call_now": "Jetzt Anrufen",
                "hero.badge": "👑 Sicher fahren • Königlicher Service",
                "hero.title_sub": "Ihr königlicher Weg zur mobilen Freiheit.",
                "hero.lead": "Moderne Cupra-Fahrzeuge, geduldige Fahrlehrer, flexible Termine und ein hochwertiges Lernerlebnis in Neuwied. Wir begleiten Sie vom ersten Tag an stressfrei zum Führerschein.",
                "hero.btn_prices": "Preise & Kurse",
                "hero.success_rate": "Erfolgsquote",
                "hero.students": "Fahrschüler",
                "hero.rating": "Bewertung",
                "stats.happy_students": "Glückliche Fahrschüler",
                "stats.practical_rate": "Erfolgsquote Praxis",
                "stats.team_exp_num": "Gute",
                "stats.team_exp_label": "Erfahrung im Team",
                "stats.fleet_num": "Cupra",
                "stats.fleet_label": "Moderne Premiumflotte",
                "prices.badge": "Transparente Preise",
                "prices.title": "Unsere Führerscheinklassen & Tarife",
                "prices.sub": "Keine versteckten Kosten. Alle Positionen transparent und fair nach Führerscheinklasse aufgeführt.",
                "class_b.title": "Führerscheinklasse B",
                "class_b.desc": "PKW-Führerschein mit modernen Schalter- & Automatikfahrzeugen (Cupra Formentor).",
                "class_b.t1": "Grundbetrag Ersterwerb",
                "class_b.t2": "Vorstellung Theorieprüfung",
                "class_b.t3": "Vorstellung praktische Prüfung",
                "class_b.t4": "Fahrstunde (45 Min.)",
                "class_b.t5": "Überlandfahrt / Autobahn / Nacht",
                "class_b.t6": "Versäumte Fahrstunde",
                "class_b.btn": "Klasse B Buchen",
                "class_be.badge": "Anhänger",
                "class_be.title": "Führerscheinklasse BE",
                "class_be.desc": "Umfassende Ausbildung für schwere Anhängerkombinationen.",
                "class_be.t1": "Grundbetrag Erweiterung",
                "class_be.t2": "Vorstellung praktische Prüfung",
                "class_be.t3": "Fahrstunde / Sonderfahrten",
                "class_be.t4": "Unterweisung",
                "class_be.t5": "Versäumte Fahrstunde",
                "class_be.btn": "Klasse BE Buchen",
                "about.badge": "Über Uns",
                "about.title": "Königlicher Service & modernes Lernen in Neuwied.",
                "about.text": "Egal ob Sie ganz neu anfangen oder Ihre Kenntnisse auffrischen möchten – bei der King Fahrschule stehen Sie im Mittelpunkt. Mit viel Geduld, modernen Schulungsfahrzeugen und entspannter Atmosphäre begleiten wir Sie sicher zur praktischen Prüfung.",
                "about.usp1_title": "Schalt & Automatik",
                "about.usp1_desc": "Flexible Ausbildung auf modernsten Fahrzeugen.",
                "about.usp2_title": "Geduldige Fahrlehrer",
                "about.usp2_desc": "Ruhiger Unterricht ohne Stress oder Hektik.",
                "about.btn": "Unverbindlich Anfragen",
                "process.badge": "Schritt für Schritt",
                "process.title": "In 4 Schritten zum Führerschein",
                "process.sub": "Wir führen Sie strukturiert durch Theorie und Praxis.",
                "step1.title": "Anmelden",
                "step1.desc": "Kommen Sie in unserer Filiale vorbei oder buchen Sie direkt online.",
                "step2.title": "Theorie",
                "step2.desc": "Interaktiver Theorieunterricht in Neuwied.",
                "step3.title": "Praxis",
                "step3.desc": "Fahrstunden im modernen Cupra Formentor nach Ihrem Zeitplan.",
                "step4.title": "Führerschein",
                "step4.desc": "Prüfung gut vorbereitet beim ersten Anlauf bestehen!",
                "fleet.badge": "Unsere Flotte",
                "fleet.title": "Fahren lernen in Top-Neuwagen.",
                "fleet.sub": "Sichere, moderne und bestens gepflegte Fahrzeuge. So macht Fahrpraxis Spaß!",
                "fleet.item1": "✅ Cupra Formentor (Baujahr 2024, Schaltgetriebe)",
                "fleet.item2": "✅ Cupra Formentor (Baujahr 2024, Automatikgetriebe)",
                "fleet.item3": "✅ Klimaanlage, Navigation & Rückfahrkamera",
                "fleet.btn": "Probestunde Anfragen",
                "fleet.auto": "Automatik",
                "fleet.manual": "Schaltung",
                "gallery.badge": "Unsere Galerie",
                "gallery.title": "Eindrücke aus der King Fahrschule",
                "gallery.sub": "Moderne Fahrzeuge, königliches Ambiente – überzeugen Sie sich selbst.",
                "team.badge": "Ihr Fahrlehrer",
                "team.title": "Kompetente & geduldige Ausbilder",
                "team.role": "Inhaber & Fahrlehrer",
                "team.quote": "„Unser Ziel ist es, dass du nicht nur die Prüfung bestehst, sondern dich dein ganzes Leben lang sicher und wohl hinter dem Steuer fühlst.“",
                "testi.badge": "Erfahrungsberichte",
                "testi.title": "Was unsere Fahrschüler sagen",
                "testi.q1": "„Es war eine hervorragende Erfahrung und der Professor schenkte dem Studenten viel Aufmerksamkeit.“",
                "testi.q2": "„Die beste Fahrschule mit Fahrlehrer Ahmed“",
                "testi.q3": "„Hallo,<br>ich hatte eine großartige Erfahrung mit der Al Malik Fahrschule. Der gesamte Ablauf war erfolgreich – sowohl hinsichtlich der benötigten Zeit als auch des Ergebnisses.<br>Mein besonderer Dank gilt Herrn Ahmed für seine freundliche und flexible Art sowie seine professionelle Vermittlung von Wissen und Erfahrung.<br>Ich wünsche allen viel Erfolg!“",
                "faq.badge": "Häufige Fragen",
                "faq.title": "Antworten auf Ihre Fragen",
                "faq.q1": "Wann sind die Büro- und Unterrichtszeiten?",
                "faq.a1": "Wir sind Montag und Freitag jeweils von 13:00 bis 16:00 Uhr für Sie da.",
                "faq.q2": "Welche Fahrzeuge stehen zur Verfügung?",
                "faq.a2": "Wir schulen auf modernen Cupra Formentor Fahrzeugen – sowohl als Schaltgetriebe als auch als Automatik.",
                "faq.q3": "Kann ich von einer anderen Fahrschule wechseln?",
                "faq.a3": "Ja! Ein Wechsel ist jederzeit problemlos möglich. Zahlen Sie für den Wechsel nur 150 €.",
                "faq.q4": "Wo befindet sich die King Fahrschule?",
                "faq.a4": "Sie finden uns in der Bahnhofstraße 8, 56564 Neuwied, nahe dem Hauptbahnhof.",
                "cta.title": "Bereit für Ihren Führerschein?",
                "cta.text": "Nehmen Sie jetzt Kontakt mit uns auf oder besuchen Sie uns zu den Öffnungszeiten in Neuwied.",
                "cta.btn": "Jetzt Anfragen",
                "contact.badge": "Kontakt",
                "contact.title": "Kontaktieren Sie uns",
                "contact.sub": "Wir freuen uns auf Ihre Anfrage!",
                "contact.info_title": "King Fahrschule",
                "contact.info_text": "Besuchen Sie uns oder rufen Sie uns direkt an.",
                "contact.label_phone": "Telefon",
                "contact.label_email": "E-Mail",
                "contact.label_address": "Adresse",
                "contact.label_hours": "Öffnungszeiten",
                "contact.val_hours": "Montag & Freitag: 13:00 – 16:00 Uhr",
                "form.title": "Nachricht Senden",
                "form.label_name": "Name *",
                "form.ph_name": "Ihr Name",
                "form.label_email": "E-Mail / Telefon *",
                "form.ph_email": "E-Mail oder Telefonnummer",
                "form.label_course": "Ausbildung",
                "form.opt_b": "Führerscheinklasse B",
                "form.opt_be": "Führerscheinklasse BE",
                "form.opt_switch": "Fahrschulwechsel",
                "form.label_msg": "Nachricht",
                "form.ph_msg": "Ihre Nachricht an uns...",
                "form.submit": "Anfrage Absenden",
                "form.success": "✓ Vielen Dank für Ihre Anfrage! Wir werden uns in Kürze bei Ihnen melden.",
                "foot.desc": "King Fahrschule Neuwied – Ihr königlicher Weg zur mobilen Freiheit.",
                "foot.col1": "Ausbildung",
                "foot.col2": "Fahrschule",
                "foot.col3": "Rechtliches",
                "foot.about": "Über uns",
                "foot.fleet": "Fahrzeuge",
                "foot.team": "Fahrlehrer",
                "foot.imprint": "Impressum",
                "foot.privacy": "Datenschutz",
                "foot.rights": "© 2026 King Fahrschule. Alle Rechte vorbehalten.",
                "cookie.title": "Wir verwenden Cookies",
                "cookie.text": "Um Ihre Erfahrung zu verbessern und den Website-Verkehr zu analysieren. Weitere Infos in unserer <a href=\"datenschutz.html\">Datenschutzerklärung</a>.",
                "cookie.accept": "Akzeptieren",
                "cookie.decline": "Ablehnen"
            },
            ar: {
                "meta.title": "مدرسة كينغ لتعليم القيادة نويفيد – طريقك الملكي إلى حرية التنقل",
                "meta.desc": "مدرسة كينغ لتعليم القيادة في نويفيد. رخصة القيادة الفئة B و BE و B197 والمزيد. تدريب حديث ومدربون صبورون وخدمة ملكية.",
                "nav.ausbildung": "التدريب",
                "nav.preise": "الأسعار",
                "nav.angebot": "العروض 🔥",
                "nav.fahrzeuge": "السيارات",
                "nav.fahrlehrer": "المدربون",
                "nav.kontakt": "اتصل بنا",
                "nav.book": "احجز موعداً",
                "nav.call_now": "اتصل الآن",
                "hero.badge": "👑 قيادة آمنة • خدمة ملكية",
                "hero.title_sub": "طريقك الملكي إلى حرية التنقل.",
                "hero.lead": "سيارات كوبرا حديثة، مدربون صبورون، مواعيد مرنة وتجربة تعلم عالية الجودة في نويفيد. نرافقك من اليوم الأول بدون توتر للحصول على رخصتك.",
                "hero.btn_prices": "الأسعار والدورات",
                "hero.success_rate": "نسبة النجاح",
                "hero.students": "طلاب السياقة",
                "hero.rating": "التقييم",
                "stats.happy_students": "طلاب سعداء",
                "stats.practical_rate": "نسبة نجاح العملي",
                "stats.team_exp_num": "خبرة",
                "stats.team_exp_label": "خبرة عريقة في الفريق",
                "stats.fleet_num": "كوبرا",
                "stats.fleet_label": "أسطول سيارات حديث",
                "prices.badge": "أسعار شفافة",
                "prices.title": "فئات رخص القيادة والأسعار",
                "prices.sub": "لا توجد تكاليف خفية. جميع البنود مدرجة بشفافية وعدالة حسب فئة رخصة القيادة.",
                "class_b.title": "رخصة القيادة الفئة B",
                "class_b.desc": "رخصة قيادة السيارات مع سيارات حديثة عادي وأوتوماتيك (Cupra Formentor).",
                "class_b.t1": "المبلغ الأساسي للتسجيل لأول مرة",
                "class_b.t2": "التقديم للاختبار النظري",
                "class_b.t3": "التقديم للاختبار العملي",
                "class_b.t4": "حصّة قيادة (45 دقيقة)",
                "class_b.t5": "قيادة خارج المدينة / طريق سريع / ليلي",
                "class_b.t6": "حصّة قيادة ملغاة أو فائتة",
                "class_b.btn": "احجز الفئة B",
                "class_be.badge": "مقطورة",
                "class_be.title": "رخصة القيادة الفئة BE",
                "class_be.desc": "تدريب شامل لمجموعات المقطورات الثقيلة.",
                "class_be.t1": "المبلغ الأساسي للتوسيع",
                "class_be.t2": "التقديم للاختبار العملي",
                "class_be.t3": "حصّة قيادة / حصص خاصة",
                "class_be.t4": "التوجيه والتعليمات",
                "class_be.t5": "حصّة قيادة ملغاة أو فائتة",
                "class_be.btn": "احجز الفئة BE",
                "about.badge": "من نحن",
                "about.title": "خدمة ملكية وتعلم حديث في نويفيد.",
                "about.text": "سواء كنت تبدأ من الصفر أو ترغب في تنشيط معلوماتك – في مدرسة كينغ لتعليم القيادة أنت في مركز اهتمامنا. بكل صبر وسيارات حديثة وأجواء مريحة نرافقك بأمان إلى الامتحان العملي.",
                "about.usp1_title": "عادي وأوتوماتيك",
                "about.usp1_desc": "تدريب مرن على أحدث السيارات.",
                "about.usp2_title": "مدربون صبورون",
                "about.usp2_desc": "دروس هادئة بدون توتر أو عجلة.",
                "about.btn": "استفسر بدون إلتزام",
                "process.badge": "خطوة بخطوة",
                "process.title": "في 4 خطوات للحصول على رخصتك",
                "process.sub": "نرافقك بشكل منظم خلال النظرية والتطبيق العملي.",
                "step1.title": "التسجيل",
                "step1.desc": "تفضل بزيارة فرعنا أو احجز مباشرة عبر الإنترنت.",
                "step2.title": "النظرية",
                "step2.desc": "دروس نظرية تفاعلية في نويفيد.",
                "step3.title": "العملي",
                "step3.desc": "دروس قيادة في سيارة كوبرا فورمنطور الحديثة حسب جدولك.",
                "step4.title": "الرخصة",
                "step4.desc": "اجتز الامتحان بنجاح من المحاولة الأولى بتجهيز ممتاز!",
                "fleet.badge": "أسطولنا",
                "fleet.title": "تعلم القيادة في أحدث السيارات.",
                "fleet.sub": "سيارات آمنة وحديثة ومصانة بشكل ممتاز. هكذا تصبح القيادة ممتعة!",
                "fleet.item1": "✅ كوبرا فورمنطور (موديل 2024، عادي)",
                "fleet.item2": "✅ كوبرا فورمنطور (موديل 2024، أوتوماتيك)",
                "fleet.item3": "✅ تكييف هواء، نظام ملاحة وكاميرا خلفية",
                "fleet.btn": "اطلب حصة تجريبية",
                "fleet.auto": "أوتوماتيك",
                "fleet.manual": "عادي",
                "gallery.badge": "معرض الصور",
                "gallery.title": "انطباعات من مدرسة كينغ لتعليم القيادة",
                "gallery.sub": "مركبات حديثة، أجواء ملكية – اقنع نفسك بنفسك.",
                "team.badge": "مدرب السياقة",
                "team.title": "مدربون أكفاء وصبورون",
                "team.role": "المالك ومدرب السياقة",
                "team.quote": "«هدفنا ليس فقط أن تجتاز الامتحان، بل أن تشعر بالأمان والراحة خلف عجلة القيادة طوال حياتك.»",
                "testi.badge": "آراء الطلاب",
                "testi.title": "ماذا يقول طلابنا عنا",
                "testi.q1": "«لقد كانت تجربة ممتازة وكان الأستاذ يولي اهتماماً كبيراً للطالب.»",
                "testi.q2": "«أفضل مدرسة قيادة مع المدرب أحمد»",
                "testi.q3": "«مرحباً، كانت لدي تجربة رائعة مع مدرسة الملك لتعليم القيادة. كان السير الكلي ممتازاً وسريعاً وناجحاً.<br>أتقدم بالشكر الخاص للمدرب أحمد على معاملته الطيبة والمرنة ونقله الاحترافي للمعرفة والخبرة.<br>أتمنى التوفيق للجميع!»",
                "faq.badge": "الأسئلة الشائعة",
                "faq.title": "إجابات على أسئلتك",
                "faq.q1": "ما هي أوقات المكتب والدروس؟",
                "faq.a1": "نحن هنا من أجلك يومي الإثنين والجمعة من الساعة 13:00 حتى 16:00.",
                "faq.q2": "ما هي السيارات المتاحة للتدريب؟",
                "faq.a2": "ندرب على سيارات كوبرا فورمنطور الحديثة – عادي وأوتوماتيك.",
                "faq.q3": "هل يمكنني الانتقال من مدرسة قيادة أخرى؟",
                "faq.a3": "نعم! التغيير ممكن في أي وقت بدون مشاكل. رسوم التغيير 150 يورو فقط.",
                "faq.q4": "أين تقع مدرسة كينغ لتعليم القيادة؟",
                "faq.a4": "تجدنا في Bahnhofstraße 8, 56564 Neuwied بالقرب من المحطة الرئيسية.",
                "cta.title": "هل أنت مستعد للحصول على رخصتك؟",
                "cta.text": "تواصل معنا الآن أو زرنا خلال أوقات العمل في نويفيد.",
                "cta.btn": "استفسر الآن",
                "contact.badge": "اتصل بنا",
                "contact.title": "تواصل معنا",
                "contact.sub": "نسعد بتواصلك معنا!",
                "contact.info_title": "مدرسة كينغ لتعليم القيادة",
                "contact.info_text": "زرنا أو اتصل بنا مباشرة.",
                "contact.label_phone": "الهاتف",
                "contact.label_email": "البريد الإلكتروني",
                "contact.label_address": "العنوان",
                "contact.label_hours": "أوقات العمل",
                "contact.val_hours": "الإثنين والجمعة: 13:00 – 16:00",
                "form.title": "إرسال رسالة",
                "form.label_name": "الاسم *",
                "form.ph_name": "اسمك",
                "form.label_email": "البريد الإلكتروني / الهاتف *",
                "form.ph_email": "البريد الإلكتروني أو رقم الهاتف",
                "form.label_course": "الدورة التدريبية",
                "form.opt_b": "رخصة الفئة B",
                "form.opt_be": "رخصة الفئة BE",
                "form.opt_switch": "تغيير مدرسة القيادة",
                "form.label_msg": "الرسالة",
                "form.ph_msg": "رسالتك إلينا...",
                "form.submit": "إرسال الطلب",
                "form.success": "✓ شكراً جزيلاً لطلبك! سنتواصل معك قريباً.",
                "foot.desc": "مدرسة كينغ لتعليم القيادة نويفيد – طريقك الملكي إلى حرية التنقل.",
                "foot.col1": "التدريب",
                "foot.col2": "مدرسة القيادة",
                "foot.col3": "الشؤون القانونية",
                "foot.about": "من نحن",
                "foot.fleet": "السيارات",
                "foot.team": "المدربون",
                "foot.imprint": "إشعار قانوني",
                "foot.privacy": "سياسة الخصوصية",
                "foot.rights": "© 2026 مدرسة كينغ لتعليم القيادة. جميع الحقوق محفوظة.",
                "cookie.title": "نحن نستخدم ملفات تعريف الارتباط",
                "cookie.text": "لتحسين تجربتك وتحليل حركة المرور على الموقع. المزيد من المعلومات في <a href=\"datenschutz.html\">سياسة الخصوصية</a>.",
                "cookie.accept": "قبول",
                "cookie.decline": "رفض"
            },
            en: {
                "meta.title": "King Fahrschule Neuwied – Your royal path to mobile freedom",
                "meta.desc": "King Driving School in Neuwied. Driving license category B, BE, B197 and more. Modern training, patient instructors and royal service.",
                "nav.ausbildung": "Training",
                "nav.preise": "Prices",
                "nav.angebot": "Offers 🔥",
                "nav.fahrzeuge": "Vehicles",
                "nav.fahrlehrer": "Instructors",
                "nav.kontakt": "Contact",
                "nav.book": "Book appointment",
                "nav.call_now": "Call now",
                "hero.badge": "👑 Safe driving • Royal service",
                "hero.title_sub": "Your royal path to mobile freedom.",
                "hero.lead": "Modern Cupra vehicles, patient driving instructors, flexible schedules, and a high-quality learning experience in Neuwied. Stress-free path to your license from day one.",
                "hero.btn_prices": "Prices & Courses",
                "hero.success_rate": "Success rate",
                "hero.students": "Students",
                "hero.rating": "Rating",
                "stats.happy_students": "Happy students",
                "stats.practical_rate": "Practical pass rate",
                "stats.team_exp_num": "Great",
                "stats.team_exp_label": "Experience in team",
                "stats.fleet_num": "Cupra",
                "stats.fleet_label": "Modern premium fleet",
                "prices.badge": "Transparent prices",
                "prices.title": "Our License Classes & Rates",
                "prices.sub": "No hidden costs. All items listed transparently and fairly by license class.",
                "class_b.title": "Driving License Class B",
                "class_b.desc": "Car driving license with modern manual & automatic vehicles (Cupra Formentor).",
                "class_b.t1": "Basic fee initial acquisition",
                "class_b.t2": "Theory exam registration",
                "class_b.t3": "Practical exam registration",
                "class_b.t4": "Driving lesson (45 min.)",
                "class_b.t5": "Special drives (Highway / Night)",
                "class_b.t6": "Missed driving lesson",
                "class_b.btn": "Book Class B",
                "class_be.badge": "Trailer",
                "class_be.title": "Driving License Class BE",
                "class_be.desc": "Comprehensive training for heavy trailer combinations.",
                "class_be.t1": "Basic fee extension",
                "class_be.t2": "Practical exam registration",
                "class_be.t3": "Driving lesson / Special drives",
                "class_be.t4": "Instruction",
                "class_be.t5": "Missed driving lesson",
                "class_be.btn": "Book Class BE",
                "about.badge": "About Us",
                "about.title": "Royal service & modern learning in Neuwied.",
                "about.text": "Whether you're starting from scratch or refreshing your skills – at King Driving School, you come first. With patience, modern training vehicles, and a relaxed atmosphere, we guide you safely to your exam.",
                "about.usp1_title": "Manual & Automatic",
                "about.usp1_desc": "Flexible training on state-of-the-art vehicles.",
                "about.usp2_title": "Patient Instructors",
                "about.usp2_desc": "Calm lessons without stress or rush.",
                "about.btn": "Inquire Non-bindingly",
                "process.badge": "Step by Step",
                "process.title": "4 Steps to Your License",
                "process.sub": "We guide you in a structured way through theory and practice.",
                "step1.title": "Sign Up",
                "step1.desc": "Visit our branch or book directly online.",
                "step2.title": "Theory",
                "step2.desc": "Interactive theory lessons in Neuwied.",
                "step3.title": "Practice",
                "step3.desc": "Driving lessons in a modern Cupra Formentor on your schedule.",
                "step4.title": "License",
                "step4.desc": "Pass your exam well-prepared on the first attempt!",
                "fleet.badge": "Our Fleet",
                "fleet.title": "Learn to drive in top new cars.",
                "fleet.sub": "Safe, modern, and perfectly maintained vehicles. Driving practice is fun!",
                "fleet.item1": "✅ Cupra Formentor (2024 model, Manual)",
                "fleet.item2": "✅ Cupra Formentor (2024 model, Automatic)",
                "fleet.item3": "✅ Air conditioning, navigation & rearview camera",
                "fleet.btn": "Request Trial Lesson",
                "fleet.auto": "Automatic",
                "fleet.manual": "Manual",
                "gallery.badge": "Our Gallery",
                "gallery.title": "Impressions from King Fahrschule",
                "gallery.sub": "Modern vehicles, royal atmosphere – see for yourself.",
                "team.badge": "Your Instructor",
                "team.title": "Competent & Patient Instructors",
                "team.role": "Owner & Driving Instructor",
                "team.quote": "“Our goal is not just for you to pass the test, but to feel safe and confident behind the wheel for a lifetime.”",
                "testi.badge": "Testimonials",
                "testi.title": "What Our Students Say",
                "testi.q1": "“It was an excellent experience and the instructor paid great attention to the student.”",
                "testi.q2": "“The best driving school with instructor Ahmed”",
                "testi.q3": "“Hello, I had a great experience with the King Driving School. The overall process was successful – both in terms of time and result.<br>Special thanks to Mr. Ahmed for his friendly and flexible attitude and professional teaching.<br>I wish everyone success!”",
                "faq.badge": "FAQ",
                "faq.title": "Answers to Your Questions",
                "faq.q1": "What are the office and lesson hours?",
                "faq.a1": "We are here for you on Mondays and Fridays from 1:00 PM to 4:00 PM.",
                "faq.q2": "Which vehicles are available?",
                "faq.a2": "We train on modern Cupra Formentor vehicles – both manual and automatic.",
                "faq.q3": "Can I transfer from another driving school?",
                "faq.a3": "Yes! A transfer is easily possible at any time. Transfer fee is only €150.",
                "faq.q4": "Where is King Driving School located?",
                "faq.a4": "You can find us at Bahnhofstraße 8, 56564 Neuwied, near the main station.",
                "cta.title": "Ready for Your License?",
                "cta.text": "Get in touch with us now or visit us during opening hours in Neuwied.",
                "cta.btn": "Inquire Now",
                "contact.badge": "Contact",
                "contact.title": "Contact Us",
                "contact.sub": "We look forward to hearing from you!",
                "contact.info_title": "King Driving School",
                "contact.info_text": "Visit us or call us directly.",
                "contact.label_phone": "Phone",
                "contact.label_email": "Email",
                "contact.label_address": "Address",
                "contact.label_hours": "Opening hours",
                "contact.val_hours": "Monday & Friday: 1:00 PM – 4:00 PM",
                "form.title": "Send a Message",
                "form.label_name": "Name *",
                "form.ph_name": "Your Name",
                "form.label_email": "Email / Phone *",
                "form.ph_email": "Email or phone number",
                "form.label_course": "Course",
                "form.opt_b": "License Class B",
                "form.opt_be": "License Class BE",
                "form.opt_switch": "Driving school transfer",
                "form.label_msg": "Message",
                "form.ph_msg": "Your message to us...",
                "form.submit": "Submit Request",
                "form.success": "✓ Thank you for your inquiry! We will contact you shortly.",
                "foot.desc": "King Driving School Neuwied – Your royal path to mobile freedom.",
                "foot.col1": "Training",
                "foot.col2": "Driving School",
                "foot.col3": "Legal",
                "foot.about": "About us",
                "foot.fleet": "Vehicles",
                "foot.team": "Instructors",
                "foot.imprint": "Imprint",
                "foot.privacy": "Privacy Policy",
                "foot.rights": "© 2026 King Driving School. All rights reserved.",
                "cookie.title": "We use cookies",
                "cookie.text": "To improve your experience and analyze website traffic. More info in our <a href=\"datenschutz.html\">Privacy Policy</a>.",
                "cookie.accept": "Accept",
                "cookie.decline": "Decline"
            },
            ru: {
                "meta.title": "King Fahrschule Neuwied – Ваш королевский путь к мобильной свободе",
                "meta.desc": "Автошкола King в Нойвиде. Водительские права категории B, BE, B197 и др. Современное обучение, терпеливые инструкторы.",
                "nav.ausbildung": "Обучение",
                "nav.preise": "Цены",
                "nav.angebot": "Акции 🔥",
                "nav.fahrzeuge": "Автомобили",
                "nav.fahrlehrer": "Инструкторы",
                "nav.kontakt": "Контакты",
                "nav.book": "Записаться",
                "nav.call_now": "Позвонить сейчас",
                "hero.badge": "👑 Безопасное вождение • Королевский сервис",
                "hero.title_sub": "Ваш королевский путь к мобильной свободе.",
                "hero.lead": "Современные автомобили Cupra, терпеливые инструкторы, гибкий график и качественное обучение в Нойвиде. Сопровождаем вас к правам без стресса.",
                "hero.btn_prices": "Цены и курсы",
                "hero.success_rate": "Успеваемость",
                "hero.students": "Учеников",
                "hero.rating": "Оценка",
                "stats.happy_students": "Довольных учеников",
                "stats.practical_rate": "Успех на практике",
                "stats.team_exp_num": "Отличный",
                "stats.team_exp_label": "Опыт команды",
                "stats.fleet_num": "Cupra",
                "stats.fleet_label": "Премиум автопарк",
                "prices.badge": "Прозрачные цены",
                "prices.title": "Категории прав и тарифы",
                "prices.sub": "Без скрытых расходов. Все позиции четко и честно указаны по категориям.",
                "class_b.title": "Категория B",
                "class_b.desc": "Права на легковой авто с современными МКПП и АКПП (Cupra Formentor).",
                "class_b.t1": "Базовый взнос (впервые)",
                "class_b.t2": "Представление на теор. экзамен",
                "class_b.t3": "Представление на практ. экзамен",
                "class_b.t4": "Урок вождения (45 мин.)",
                "class_b.t5": "Спец. вождение (трасса / ночь)",
                "class_b.t6": "Пропущенное занятие",
                "class_b.btn": "Записаться на кат. B",
                "class_be.badge": "Прицеп",
                "class_be.title": "Категория BE",
                "class_be.desc": "Полное обучение для управления авто с тяжелым прицепом.",
                "class_be.t1": "Базовый взнос (расширение)",
                "class_be.t2": "Представление на практ. экзамен",
                "class_be.t3": "Урок вождения / спец. поездки",
                "class_be.t4": "Инструктаж",
                "class_be.t5": "Пропущенное занятие",
                "class_be.btn": "Записаться на кат. BE",
                "about.badge": "О нас",
                "about.title": "Королевский сервис и современное обучение в Нойвиде.",
                "about.text": "Начинаете ли вы с нуля или хотите освежить навыки – в автошколе King вы в центре внимания. С терпением, на современных авто и в спокойной обстановке мы доведем вас до экзамена.",
                "about.usp1_title": "МКПП и АКПП",
                "about.usp1_desc": "Гибкое обучение на современных авто.",
                "about.usp2_title": "Терпеливые инструкторы",
                "about.usp2_desc": "Спокойные уроки без стресса и суеты.",
                "about.btn": "Оставить заявку",
                "process.badge": "Шаг за шагом",
                "process.title": "4 шага к водительским правам",
                "process.sub": "Мы структурировано проведем вас через теорию и практику.",
                "step1.title": "Регистрация",
                "step1.desc": "Загляните к нам в филиал или зарегистрируйтесь онлайн.",
                "step2.title": "Теория",
                "step2.desc": "Интерактивные теоретические занятия в Нойвиде.",
                "step3.title": "Практика",
                "step3.desc": "Уроки вождения на Cupra Formentor по вашему графику.",
                "step4.title": "Получение прав",
                "step4.desc": "Сдайте экзамен с первой попытки благодаря отличной подготовке!",
                "fleet.badge": "Наш автопарк",
                "fleet.title": "Обучение на новейших авто.",
                "fleet.sub": "Безопасные, современные и ухоженные авто. Практика в радость!",
                "fleet.item1": "✅ Cupra Formentor (2024 г., МКПП)",
                "fleet.item2": "✅ Cupra Formentor (2024 г., АКПП)",
                "fleet.item3": "✅ Кондиционер, навигация и камера заднего вида",
                "fleet.btn": "Запросить пробный урок",
                "fleet.auto": "Автомат",
                "fleet.manual": "Механика",
                "team.badge": "Ваш инструктор",
                "team.title": "Компетентные и терпеливые инструкторы",
                "team.role": "Владелец и инструктор",
                "team.quote": "«Наша цель — не просто сдача экзамена, а чтобы вы всю жизнь чувствовали себя уверенно за рулем.»",
                "testi.badge": "Отзывы",
                "testi.title": "Что говорят наши ученики",
                "testi.q1": "«Это был отличный опыт, инструктор уделял ученику много внимания.»",
                "testi.q2": "«Лучшая автошкола с инструктором Ахмедом»",
                "testi.q3": "«Здравствуйте, у меня остался отличный опыт работы с автошколой King. Весь процесс прошёл успешно — и по времени, и по результату.<br>Особая благодарность г-ну Ахмеду за доброжелательность и профессионализм.<br>Желаю всем успехов!»",
                "faq.badge": "Часто задаваемые вопросы",
                "faq.title": "Ответы на ваши вопросы",
                "faq.q1": "Каковы часы работы офиса и занятий?",
                "faq.a1": "Мы открыты по понедельникам и пятницам с 13:00 до 16:00.",
                "faq.q2": "Какие автомобили доступны?",
                "faq.a2": "Обучение проходит на современных Cupra Formentor (МКПП и АКПП).",
                "faq.q3": "Можно ли перейти из другой автошколы?",
                "faq.a3": "Да! Перевод возможен в любое время. Стоимость перевода всего 150 €.",
                "faq.q4": "Где находится автошкола King?",
                "faq.a4": "Мы находимся по адресу Bahnhofstraße 8, 56564 Neuwied, рядом с вокзалом.",
                "cta.title": "Готовы получить права?",
                "cta.text": "Свяжитесь с нами прямо сейчас или посетите нас в рабочие часы в Нойвиде.",
                "cta.btn": "Отправить запрос",
                "contact.badge": "Контакты",
                "contact.title": "Свяжитесь с нами",
                "contact.sub": "Мы будем рады вашему обращению!",
                "contact.info_title": "Автошкола King",
                "contact.info_text": "Посетите нас или позвоните напрямую.",
                "contact.label_phone": "Телефон",
                "contact.label_email": "Эл. почта",
                "contact.label_address": "Адрес",
                "contact.label_hours": "Часы работы",
                "contact.val_hours": "Понедельник и пятница: 13:00 – 16:00",
                "form.title": "Отправить сообщение",
                "form.label_name": "Имя *",
                "form.ph_name": "Ваше имя",
                "form.label_email": "Эл. почта / Телефон *",
                "form.ph_email": "Эл. почта или номер телефона",
                "form.label_course": "Курс обучения",
                "form.opt_b": "Категория B",
                "form.opt_be": "Категория BE",
                "form.opt_switch": "Смена автошколы",
                "form.label_msg": "Сообщение",
                "form.ph_msg": "Ваше сообщение...",
                "form.submit": "Отправить заявку",
                "form.success": "✓ Спасибо за ваш запрос! Мы свяжемся с вами в ближайшее время.",
                "foot.desc": "King Fahrschule Neuwied – Ваш королевский путь к мобильной свободе.",
                "foot.col1": "Обучение",
                "foot.col2": "Автошкола",
                "foot.col3": "Правовая информация",
                "foot.about": "О нас",
                "foot.fleet": "Автомобили",
                "foot.team": "Инструкторы",
                "foot.imprint": "Выходные данные",
                "foot.privacy": "Конфиденциальность",
                "foot.rights": "© 2026 King Fahrschule. Все права защищены.",
                "cookie.title": "Мы используем куки",
                "cookie.text": "Чтобы улучшить ваш опыт и анализировать трафик сайта. Подробнее в нашей <a href=\"datenschutz.html\">Политике конфиденциальности</a>.",
                "cookie.accept": "Принять",
                "cookie.decline": "Отклонить"
            },
            tr: {
                "meta.title": "King Fahrschule Neuwied – Mobil özgürlüğe giden kraliyet yolunuz",
                "meta.desc": "Neuwied'de King Sürücü Kursu. B, BE, B197 sınıfı ehliyet ve daha fazlası. Modern eğitim, sabırlı eğitmenler ve krallara layık hizmet.",
                "nav.ausbildung": "Eğitim",
                "nav.preise": "Fiyatlar",
                "nav.angebot": "Teklif 🔥",
                "nav.fahrzeuge": "Araçlar",
                "nav.fahrlehrer": "Eğitmenler",
                "nav.kontakt": "İletişim",
                "nav.book": "Randevu Al",
                "nav.call_now": "Hemen Ara",
                "hero.badge": "👑 Güvenli sürüş • Kraliyet hizmeti",
                "hero.title_sub": "Mobil özgürlüğe giden kraliyet yolunuz.",
                "hero.lead": "Neuwied'de modern Cupra araçları, sabırlı eğitmenler, esnek çalışma saatleri ve kaliteli bir öğrenme deneyimi. İlk günden itibaren stressiz ehliyet süreci.",
                "hero.btn_prices": "Fiyatlar ve Kurslar",
                "hero.success_rate": "Başarı oranı",
                "hero.students": "Sürücü adayı",
                "hero.rating": "Değerlendirme",
                "stats.happy_students": "Mutlu öğrenciler",
                "stats.practical_rate": "Direksiyon başarı oranı",
                "stats.team_exp_num": "Harika",
                "stats.team_exp_label": "Ekip deneyimi",
                "stats.fleet_num": "Cupra",
                "stats.fleet_label": "Modern premium filo",
                "prices.badge": "Şeffaf Fiyatlar",
                "prices.title": "Ehliyet Sınıflarımız ve Tarifelerimiz",
                "prices.sub": "Gizli ücret yok. Tüm kalemler ehliyet sınıfına göre şeffaf ve adil bir şekilde listelenmiştir.",
                "class_b.title": "B Sınıfı Ehliyet",
                "class_b.desc": "Modern manuel ve otomatik araçlarla otomobil ehliyeti (Cupra Formentor).",
                "class_b.t1": "İlk kayıt temel ücreti",
                "class_b.t2": "Teori sınavı sunumu",
                "class_b.t3": "Direksiyon sınavı sunumu",
                "class_b.t4": "Direksiyon dersi (45 dk.)",
                "class_b.t5": "Özel sürüş (Otoyol / Gece)",
                "class_b.t6": "Kaçırılan ders ücreti",
                "class_b.btn": "B Sınıfı Kayıt Ol",
                "class_be.badge": "Römork",
                "class_be.title": "BE Sınıfı Ehliyet",
                "class_be.desc": "Ağır römork kombinasyonları için kapsamlı eğitim.",
                "class_be.t1": "Ehliyet yükseltme temel ücreti",
                "class_be.t2": "Direksiyon sınavı sunumu",
                "class_be.t3": "Direksiyon dersi / Özel sürüş",
                "class_be.t4": "Bilgilendirme dersi",
                "class_be.t5": "Kaçırılan ders ücreti",
                "class_be.btn": "BE Sınıfı Kayıt Ol",
                "about.badge": "Hakkımızda",
                "about.title": "Neuwied'de krallara layık hizmet ve modern eğitim.",
                "about.text": "Sıfırdan başlıyor veya bilgilerinizi tazelemek istiyor olun – King Sürücü Kursu'nda odak noktası sizsiniz. Sabır, modern eğitim araçları ve rahat bir atmosferle sizi direksiyon sınavına güvenle hazırlıyoruz.",
                "about.usp1_title": "Manuel ve Otomatik",
                "about.usp1_desc": "En modern araçlarda esnek eğitim.",
                "about.usp2_title": "Sabırlı Eğitmenler",
                "about.usp2_desc": "Stressiz ve telaşsız sakin dersler.",
                "about.btn": "Bilgi Alın",
                "process.badge": "Adım Adım",
                "process.title": "4 Adımda Ehliyete Ulaşın",
                "process.sub": "Teori ve direksiyon sürecinde size adım adım rehberlik ediyoruz.",
                "step1.title": "Kayıt Olun",
                "step1.desc": "Şubemize gelin veya doğrudan online kayıt olun.",
                "step2.title": "Teori Dersleri",
                "step2.desc": "Neuwied'de interaktif teorik dersler.",
                "step3.title": "Direksiyon Dersleri",
                "step3.desc": "Zaman planınıza göre modern Cupra Formentor ile sürüş dersleri.",
                "step4.title": "Ehliyetinizi Alın",
                "step4.desc": "İyi bir hazırlıkla sınavı ilk denemede geçin!",
                "fleet.badge": "Filomuz",
                "fleet.title": "En yeni araçlarla sürüş öğrenin.",
                "fleet.sub": "Güvenli, modern ve bakımlı araçlar. Sürüş pratiği yapmak çok keyifli!",
                "fleet.item1": "✅ Cupra Formentor (2024 model, Manuel)",
                "fleet.item2": "✅ Cupra Formentor (2024 model, Otomatik)",
                "fleet.item3": "✅ Klima, navigasyon ve geri görüş kamerası",
                "fleet.btn": "Deneme Dersi İste",
                "fleet.auto": "Otomatik",
                "fleet.manual": "Manuel",
                "team.badge": "Eğitmeniniz",
                "team.title": "Uzman ve Sabırlı Eğitmenler",
                "team.role": "Kurucu ve Sürücü Eğitmeni",
                "team.quote": "“Amacımız sadece sınavı geçmeniz değil, hayatınız boyunca direksiyon başında kendinizi güvende hissetmenizdir.”",
                "testi.badge": "Öğrenci Yorumları",
                "testi.title": "Öğrencilerimiz Ne Diyor",
                "testi.q1": "“Mükemmel bir deneyimdi ve eğitmen öğrenciye çok dikkat ve özen gösterdi.”",
                "testi.q2": "“Eğitmen Ahmed ile en iyi sürücü kursu”",
                "testi.q3": "“Merhaba, King Sürücü Kursu ile harika bir deneyim yaşadım. Tüm süreç hem zaman hem de sonuç açısından çok başarılıydı.<br>Sayın Ahmed'e samimi, esnek yaklaşımı ve profesyonel bilgi aktarımı için özel teşekkürler.<br>Herkese başarılar!”",
                "faq.badge": "Sıkça Sorulan Sorular",
                "faq.title": "Sorularınızın Yanıtları",
                "faq.q1": "Ofis ve ders saatleri ne zaman?",
                "faq.a1": "Pazartesi ve Cuma günleri 13:00 - 16:00 saatleri arasında hizmetinizdeyiz.",
                "faq.q2": "Hangi araçlar mevcut?",
                "faq.a2": "Modern Cupra Formentor araçlarında hem manuel hem otomatik eğitim veriyoruz.",
                "faq.q3": "Başka bir sürücü kursundan geçiş yapabilir miyim?",
                "faq.a3": "Evet! İstediğiniz zaman sorunsuz geçiş yapabilirsiniz. Geçiş ücreti sadece 150 €.",
                "faq.q4": "King Sürücü Kursu nerede bulunuyor?",
                "faq.a4": "Bizi Bahnhofstraße 8, 56564 Neuwied adresinde, ana tren istasyonunun yakınında bulabilirsiniz.",
                "cta.title": "Ehliyetinizi Almaya Hazır Mısınız?",
                "cta.text": "Hemen bizimle iletişime geçin veya Neuwied'deki çalışma saatlerimizde bizi ziyaret edin.",
                "cta.btn": "Hemen Başvurun",
                "contact.badge": "İletişim",
                "contact.title": "Bizimle İletişime Geçin",
                "contact.sub": "Mesajınızı bekliyoruz!",
                "contact.info_title": "King Sürücü Kursu",
                "contact.info_text": "Bizi ziyaret edin veya doğrudan arayın.",
                "contact.label_phone": "Telefon",
                "contact.label_email": "E-Posta",
                "contact.label_address": "Adres",
                "contact.label_hours": "Çalışma Saatleri",
                "contact.val_hours": "Pazartesi & Cuma: 13:00 – 16:00",
                "form.title": "Mesaj Gönderin",
                "form.label_name": "Adınız *",
                "form.ph_name": "Adınız",
                "form.label_email": "E-Posta / Telefon *",
                "form.ph_email": "E-posta veya telefon numarası",
                "form.label_course": "Eğitim",
                "form.opt_b": "B Sınıfı Ehliyet",
                "form.opt_be": "BE Sınıfı Ehliyet",
                "form.opt_switch": "Sürücü Kursu Değişimi",
                "form.label_msg": "Mesajınız",
                "form.ph_msg": "Bize mesajınız...",
                "form.submit": "Talebi Gönder",
                "form.success": "✓ Talebiniz için teşekkür ederiz! En kısa sürede sizinle iletişime geçeceğiz.",
                "foot.desc": "King Fahrschule Neuwied – Mobil özgürlüğe giden kraliyet yolunuz.",
                "foot.col1": "Eğitim",
                "foot.col2": "Sürücü Kursu",
                "foot.col3": "Yasal",
                "foot.about": "Hakkımızda",
                "foot.fleet": "Araçlar",
                "foot.team": "Eğitmenler",
                "foot.imprint": "Künye",
                "foot.privacy": "Gizlilik Politikası",
                "foot.rights": "© 2026 King Fahrschule. Tüm hakları saklıdır.",
                "cookie.title": "Çerez kullanıyoruz",
                "cookie.text": "Deneyiminizi geliştirmek ve web sitesi trafiğini analiz etmek için. Daha fazla bilgi <a href=\"datenschutz.html\">Gizlilik Politikamızda</a>.",
                "cookie.accept": "Kabul Et",
                "cookie.decline": "Reddet"
            }
        };

        var currentLang = "de";
        var LANG_LABELS = { de: "DE", ar: "AR", en: "EN", ru: "RU", tr: "TR" };

        function t(lang, key) {
            var m = I18N[lang] || {};
            if (Object.prototype.hasOwnProperty.call(m, key)) return m[key];
            if (Object.prototype.hasOwnProperty.call(I18N.de, key)) return I18N.de[key];
            return "";
        }

        function applyLanguage(lang) {
            if (!I18N[lang]) lang = "de";
            currentLang = lang;

            var htmlRoot = document.getElementById("html-root") || document.documentElement;
            htmlRoot.setAttribute("lang", lang);
            if (lang === "ar") {
                htmlRoot.setAttribute("dir", "rtl");
            } else {
                htmlRoot.removeAttribute("dir");
            }

            document.querySelectorAll("[data-i18n]").forEach(function (el) {
                var v = t(lang, el.getAttribute("data-i18n"));
                if (v !== "") el.textContent = v;
            });
            document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
                var v = t(lang, el.getAttribute("data-i18n-html"));
                if (v !== "") el.innerHTML = v;
            });
            document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
                var v = t(lang, el.getAttribute("data-i18n-ph"));
                if (v !== "") el.setAttribute("placeholder", v);
            });

            var tt = t(lang, "meta.title"); if (tt) document.title = tt;
            var md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute("content", t(lang, "meta.desc"));

            document.querySelectorAll(".lang-current, #langCurrent").forEach(function (cur) {
                cur.textContent = LANG_LABELS[lang] || lang.toUpperCase();
            });

            document.querySelectorAll(".lang-opt, .m-lang-opt").forEach(function (b) {
                b.setAttribute("aria-selected", b.getAttribute("data-lang") === lang ? "true" : "false");
            });

            try { localStorage.setItem(STORE, lang); } catch (e) {}
        }

        // Form handler with i18n feedback
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert(t(currentLang, "form.success"));
                form.reset();
            });
        }

        function initI18n() {
            var start = "de";
            try {
                var s = localStorage.getItem(STORE);
                if (s && I18N[s]) start = s;
            } catch (e) {}
            applyLanguage(start);

            document.querySelectorAll(".lang-switch").forEach(function (sw) {
                var tog = sw.querySelector(".lang-toggle");
                if (tog) {
                    tog.addEventListener("click", function (e) {
                        e.stopPropagation();
                        // Close other switches if open
                        document.querySelectorAll(".lang-switch").forEach(function (otherSw) {
                            if (otherSw !== sw) {
                                otherSw.classList.remove("open");
                                var otherTog = otherSw.querySelector(".lang-toggle");
                                if (otherTog) otherTog.setAttribute("aria-expanded", "false");
                            }
                        });
                        var open = sw.classList.toggle("open");
                        tog.setAttribute("aria-expanded", open ? "true" : "false");
                    });
                }
                sw.querySelectorAll(".lang-opt").forEach(function (b) {
                    b.addEventListener("click", function () {
                        applyLanguage(b.getAttribute("data-lang"));
                        sw.classList.remove("open");
                        if (tog) tog.setAttribute("aria-expanded", "false");
                    });
                });
            });

            document.addEventListener("click", function (e) {
                document.querySelectorAll(".lang-switch").forEach(function (sw) {
                    if (!sw.contains(e.target)) {
                        sw.classList.remove("open");
                        var tog = sw.querySelector(".lang-toggle");
                        if (tog) tog.setAttribute("aria-expanded", "false");
                    }
                });
            });
        }

        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", initI18n);
        } else {
            initI18n();
        }
    })();


        (function () {
            const track = document.getElementById('sliderTrack');
            const slides = track ? track.querySelectorAll('.slider-slide') : [];
            const total = slides.length;
            const dotsContainer = document.getElementById('sliderDots');
            const currEl = document.getElementById('sliderCurr');
            const totalEl = document.getElementById('sliderTotal');
            let current = 0;
            let autoTimer = null;

            if (!track || total === 0) return;

            if (totalEl) totalEl.textContent = total;

            // Build dots
            const dots = [];
            slides.forEach((_, i) => {
                const dot = document.createElement('button');
                dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
                dot.setAttribute('role', 'tab');
                dot.setAttribute('aria-label', `Bild ${i + 1}`);
                dot.addEventListener('click', () => goTo(i));
                if (dotsContainer) dotsContainer.appendChild(dot);
                dots.push(dot);
            });

            function goTo(index) {
                current = (index + total) % total;
                track.style.transform = `translateX(-${current * 100}%)`;
                dots.forEach((d, i) => d.classList.toggle('active', i === current));
                if (currEl) currEl.textContent = current + 1;
                resetAuto();
            }

            const prevBtn = document.getElementById('sliderPrev');
            const nextBtn = document.getElementById('sliderNext');
            if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
            if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));

            // Touch / swipe support
            let startX = 0;
            const wrapper = document.getElementById('sliderWrapper');
            if (wrapper) {
                wrapper.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
                wrapper.addEventListener('touchend', e => {
                    const diff = startX - e.changedTouches[0].clientX;
                    if (Math.abs(diff) > 40) goTo(diff > 0 ? current + 1 : current - 1);
                });
                wrapper.addEventListener('mouseenter', () => clearInterval(autoTimer));
                wrapper.addEventListener('mouseleave', startAuto);
            }

            // Auto-play
            function startAuto() { autoTimer = setInterval(() => goTo(current + 1), 4500); }
            function resetAuto() { clearInterval(autoTimer); startAuto(); }

            startAuto();
        })();


        (function() {
            var pre = document.getElementById('preloader');
            if (!pre) return;

            var canvas = document.getElementById('pl-particles');
            var animating = true;
            if (canvas) {
                var ctx = canvas.getContext('2d');
                var dpr = Math.min(window.devicePixelRatio || 1, 2);
                var W = window.innerWidth, H = window.innerHeight;
                canvas.width = W * dpr; canvas.height = H * dpr; ctx.scale(dpr, dpr);
                var N = W < 768 ? 25 : 55, pts = [];
                for (var i = 0; i < N; i++) pts.push({
                    x: Math.random() * W, y: Math.random() * H,
                    s: Math.random() * 1.4 + .3,
                    vx: (Math.random() - .5) * .12, vy: -(Math.random() * .25 + .08),
                    o: Math.random() * .25 + .04, ph: Math.random() * 6.28
                });
                (function draw() {
                    if (!animating) return;
                    ctx.clearRect(0, 0, W, H);
                    for (var i = 0; i < pts.length; i++) {
                        var p = pts[i]; p.x += p.vx; p.y += p.vy; p.ph += .012;
                        var op = p.o * (.5 + .5 * Math.sin(p.ph));
                        if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
                        if (p.x < -10) p.x = W + 10; if (p.x > W + 10) p.x = -10;
                        ctx.beginPath(); ctx.arc(p.x, p.y, p.s, 0, 6.28);
                        ctx.fillStyle = 'rgba(234,179,8,' + op + ')'; ctx.fill();
                    }
                    requestAnimationFrame(draw);
                })();
            }

            function runTimeline() {
                var tl = gsap.timeline({
                    timeScale: 0.65,
                    defaults: { ease: 'power3.out' },
                    onComplete: function() {
                        var isMobile = window.innerWidth <= 980;
                        if (isMobile) document.body.classList.remove('is-loading');
                        gsap.to(pre, {
                            opacity: 0, scale: isMobile ? 1 : 1.03, duration: isMobile ? 1.2 : 1.5, ease: 'power2.inOut',
                            onComplete: function() {
                                pre.classList.add('done');
                                pre.style.display = 'none';
                                if (!isMobile) document.body.classList.remove('is-loading');
                                animating = false;
                            }
                        });
                    }
                });

                tl.to('.pl-glow', { opacity: 1, duration: 1.5, stagger: .2, ease: 'power1.inOut' }, 0);
                tl.to('.pl-hstreak-1', { left: '120%', opacity: .8, duration: 2.5, ease: 'power1.inOut' }, .3);
                tl.to('.pl-hstreak-1', { opacity: 0, duration: .8 }, 2.2);

                tl.to('#plLogoImg', { opacity: 1, scale: 1, duration: 1.2, ease: 'back.out(1.7)' }, .5);
                tl.to('.pl-logo-glow', { opacity: 1, duration: .8, ease: 'power1.in' }, .8);
                tl.to('.pl-logo-glow', { opacity: .5, scale: 1.2, duration: 1.5, ease: 'power1.inOut' }, 1.6);

                tl.to('.pl-label', { opacity: 1, y: 0, duration: .7 }, 1.1);
                tl.to('.pl-name', { opacity: 1, y: 0, duration: .8 }, 1.3);
                tl.to('.pl-divider', { width: '80px', duration: .8, ease: 'power2.inOut' }, 1.5);
                tl.to('.pl-sub', { opacity: 1, y: 0, duration: .6 }, 1.8);
                tl.to('.pl-countdown-wrap', { opacity: 1, y: 0, duration: .6 }, 1.8);

                var counterObj = { val: 0 };
                var countEl = document.getElementById('plCountdown');
                tl.to(counterObj, {
                    val: 100,
                    duration: 2.2,
                    ease: 'power1.inOut',
                    onUpdate: function() {
                        if (countEl) countEl.textContent = Math.round(counterObj.val) + '%';
                    }
                }, 1.8);

                tl.to('.pl-hstreak-2', { right: '120%', opacity: .6, duration: 2, ease: 'power1.inOut' }, 1.5);
                tl.to('.pl-hstreak-2', { opacity: 0, duration: .6 }, 2.8);

                tl.to({}, { duration: .6 }, '+=.2');
            }

            window.addEventListener('load', function() {
                if (typeof gsap !== 'undefined') {
                    setTimeout(runTimeline, 200);
                } else {
                    setTimeout(function() {
                        pre.style.opacity = '0'; pre.style.transition = 'opacity .8s';
                        setTimeout(function() { pre.style.display = 'none'; document.body.classList.remove('is-loading'); }, 800);
                    }, 1000);
                }
            });
        })();


