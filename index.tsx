/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

// --- TRANSLATION DATA ---
const translations = {
    en: {
        select_language: "Select your language:", main_title: "Digital Tool Library Feedback",
        item_name_label: "What item are you providing feedback for?", item_name_placeholder: "e.g., 'Ukulele' or '3D Printer'",
        barcode_label: "What is the barcode number?", barcode_placeholder: "e.g., '3400001234567'",
        feedback_type_label: "What is the nature of your feedback?", feedback_problem: "I have a problem to report",
        feedback_suggestion: "I have a suggestion for the collection", feedback_creation: "I want to share something I created!",
        details_label: "Please provide more details", details_placeholder: "Describe the issue, your suggestion, or your creation story here",
        suggestion_details_label: "What is your suggestion?",
        link_label: "Optional: Share a link to your creation", link_placeholder: "e.g., a link to a YouTube video, blog post, or photo",
        creation_details_label: "Tell us about your creation",
        creation_link_label: "Share a link to your creation",
        submit_button: "Submit", confirm_title: "Thank You!", confirm_message: "Your feedback has been received We appreciate you helping us improve our collection",
        submit_another_button: "Submit Another Response"
    },
    zh: { // Mandarin
        select_language: "选择您的语言：", main_title: "Digital Tool Library Feedback",
        item_name_label: "您要为哪个物品提供反馈？", item_name_placeholder: "例如：'尤克里里'或'3D打印机'",
        barcode_label: "条形码编号是多少？", barcode_placeholder: "例如：'3400001234567'",
        feedback_type_label: "您的反馈性质是什么？", feedback_problem: "我有一个问题要报告",
        feedback_suggestion: "我对收藏有建议", feedback_creation: "我想分享我创作的东西！",
        details_label: "请提供更多细节", details_placeholder: "在这里描述问题、您的建议或您的创作故事",
        suggestion_details_label: "您有什么建议？",
        link_label: "可选：分享您的创作链接", link_placeholder: "例如：YouTube视频、博客文章或照片的链接",
        creation_details_label: "告诉我们关于您的创作",
        creation_link_label: "分享您的创作链接",
        submit_button: "提交", confirm_title: "谢谢！", confirm_message: "您的反馈已收到 感谢您帮助我们改进我们的收藏",
        submit_another_button: "提交另一份回复"
    },
    yue: { // Cantonese
        select_language: "選擇您嘅語言：", main_title: "Digital Tool Library Feedback",
        item_name_label: "您要為邊個物品提供反饋？", item_name_placeholder: "例如：'夏威夷小結他'或'3D打印機'",
        barcode_label: "條碼編號係幾多？", barcode_placeholder: "例如：'3400001234567'",
        feedback_type_label: "您嘅反饋性質係咩？", feedback_problem: "我有一個問題要報告",
        feedback_suggestion: "我對收藏有建議", feedback_creation: "我想分享我創作嘅嘢！",
        details_label: "請提供更多細節", details_placeholder: "喺度描述問題、您嘅建議或您嘅創作故事",
        suggestion_details_label: "您有咩建議？",
        link_label: "可選：分享您嘅創作連結", link_placeholder: "例如：YouTube影片、博客文章或相片嘅連結",
        creation_details_label: "講下你嘅創作",
        creation_link_label: "分享你嘅創作連結",
        submit_button: "提交", confirm_title: "多謝！", confirm_message: "您嘅反饋已收到 感謝您幫助我哋改進我哋嘅收藏",
        submit_another_button: "提交另一份回覆"
    },
    ne: { // Nepali
        select_language: "आफ्नो भाषा चयन गर्नुहोस्:", main_title: "Digital Tool Library Feedback",
        item_name_label: "तपाईं कुन वस्तुको लागि प्रतिक्रिया दिनुहुन्छ?", item_name_placeholder: "उदाहरण: 'उकुलेले' वा '3D प्रिन्टर'",
        barcode_label: "बारकोड नम्बर के हो?", barcode_placeholder: "उदाहरण: '3400001234567'",
        feedback_type_label: "तपाईंको प्रतिक्रियाको प्रकृति के हो?", feedback_problem: "मसँग रिपोर्ट गर्न एउटा समस्या छ",
        feedback_suggestion: "मसँग संग्रहको लागि सुझाव छ", feedback_creation: "मैले सिर्जना गरेको केहि साझा गर्न चाहन्छु!",
        details_label: "कृपया थप विवरण प्रदान गर्नुहोस्", details_placeholder: "यहाँ समस्या, तपाईंको सुझाव, वा तपाईंको सिर्जना कथा वर्णन गर्नुहोस्",
        suggestion_details_label: "तपाईंको सुझाव के हो?",
        link_label: "वैकल्पिक: तपाईंको सिर्जनाको लिङ्क साझा गर्नुहोस्", link_placeholder: "उदाहरण: YouTube भिडियो, ब्लग पोस्ट, वा फोटोको लिङ्क",
        creation_details_label: "आफ्नो सिर्जनाको बारेमा हामीलाई बताउनुहोस्",
        creation_link_label: "तपाईंको सिर्जनाको लिङ्क साझा गर्नुहोस्",
        submit_button: "पेश गर्नुहोस्", confirm_title: "धन्यवाद!", confirm_message: "तपाईंको प्रतिक्रिया प्राप्त भयो हाम्रो संग्रह सुधार गर्न मद्दत गर्नुभएकोमा हामी तपाईंको कदर गर्दछौं",
        submit_another_button: "अर्को प्रतिक्रिया पेश गर्नुहोस्"
    },
    el: { // Greek
        select_language: "Επιλέξτε τη γλώσσα σας:", main_title: "Digital Tool Library Feedback",
        item_name_label: "Για ποιο αντικείμενο παρέχετε σχόλια;", item_name_placeholder: "π.χ., 'Ουκουλέλε' ή '3D Εκτυπωτής'",
        barcode_label: "Ποιος είναι ο αριθμός barcode;", barcode_placeholder: "π.χ., '3400001234567'",
        feedback_type_label: "Ποια είναι η φύση των σχολίων σας;", feedback_problem: "Έχω ένα πρόβλημα να αναφέρω",
        feedback_suggestion: "Έχω μια πρόταση για τη συλλογή", feedback_creation: "Θέλω να μοιραστώ κάτι που δημιούργησα!",
        details_label: "Παρακαλώ δώστε περισσότερες λεπτομέρειες", details_placeholder: "Περιγράψτε το ζήτημα, την πρότασή σας ή την ιστορία της δημιουργίας σας εδώ",
        suggestion_details_label: "Ποια είναι η πρότασή σας;",
        link_label: "Προαιρετικό: Μοιραστείτε έναν σύνδεσμο για τη δημιουργία σας", link_placeholder: "π.χ., ένας σύνδεσμος για ένα βίντεο στο YouTube, μια ανάρτηση σε blog ή μια φωτογραφία",
        creation_details_label: "Πείτε μας για τη δημιουργία σας",
        creation_link_label: "Μοιραστείτε έναν σύνδεσμο για τη δημιουργία σας",
        submit_button: "Υποβολή", confirm_title: "Ευχαριστούμε!", confirm_message: "Τα σχόλια σας έχουν ληφθεί Εκτιμούμε τη βοήθειά σας για τη βελτίωση της συλλογής μας",
        submit_another_button: "Υποβολή Άλλης Απάντησης"
    },
    ar: { // Arabic
        select_language: "اختر لغتك:", main_title: "Digital Tool Library Feedback",
        item_name_label: "لأي عنصر تقدم ملاحظاتك؟", item_name_placeholder: "مثال: 'يوكوليلي' أو 'طابعة ثلاثية الأبعاد'",
        barcode_label: "ما هو رقم الباركود؟", barcode_placeholder: "مثال: '3400001234567'",
        feedback_type_label: "ما هي طبيعة ملاحظاتك؟", feedback_problem: "لدي مشكلة للإبلاغ عنها",
        feedback_suggestion: "لدي اقتراح للمجموعة", feedback_creation: "أريد أن أشارك شيئًا صنعته!",
        details_label: "الرجاء تقديم المزيد من التفاصيل", details_placeholder: "صف المشكلة أو اقتراحك أو قصة إبداعك هنا",
        suggestion_details_label: "ما هو اقتراحك؟",
        link_label: "اختياري: شارك رابطًا لإبداعك", link_placeholder: "مثال: رابط لفيديو على يوتيوب أو منشور مدونة أو صورة",
        creation_details_label: "أخبرنا عن إبداعك",
        creation_link_label: "شارك رابطًا لإبداعك",
        submit_button: "إرسال", confirm_title: "شكرًا لك!", confirm_message: "تم استلام ملاحظاتك نحن نقدر مساعدتك في تحسين مجموعتنا",
        submit_another_button: "إرسال رد آخر"
    },
    es: { // Spanish
        select_language: "Seleccione su idioma:", main_title: "Digital Tool Library Feedback",
        item_name_label: "¿Sobre qué artículo estás dando tu opinión?", item_name_placeholder: "p. ej., 'Ukelele' o 'Impresora 3D'",
        barcode_label: "¿Cuál es el número de código de barras?", barcode_placeholder: "p. ej., '3400001234567'",
        feedback_type_label: "¿Cuál es la naturaleza de tus comentarios?", feedback_problem: "Tengo un problema que reportar",
        feedback_suggestion: "Tengo una sugerencia para la colección", feedback_creation: "¡Quiero compartir algo que he creado!",
        details_label: "Por favor, proporcione más detalles", details_placeholder: "Describe el problema, tu sugerencia o la historia de tu creación aquí",
        suggestion_details_label: "¿Cuál es tu sugerencia?",
        link_label: "Opcional: Comparte un enlace a tu creación", link_placeholder: "p. ej., un enlace a un video de YouTube, una publicación de blog o una foto",
        creation_details_label: "Cuéntanos sobre tu creación",
        creation_link_label: "Comparte un enlace a tu creación",
        submit_button: "Enviar", confirm_title: "¡Gracias!", confirm_message: "Hemos recibido tus comentarios Agradecemos que nos ayudes a mejorar nuestra colección",
        submit_another_button: "Enviar Otra Respuesta"
    },
    it: { // Italian
        select_language: "Seleziona la tua lingua:", main_title: "Digital Tool Library Feedback",
        item_name_label: "Per quale articolo stai fornendo un feedback?", item_name_placeholder: "es. 'Ukulele' o 'Stampante 3D'",
        barcode_label: "Qual è il numero del codice a barre?", barcode_placeholder: "es. '3400001234567'",
        feedback_type_label: "Qual è la natura del tuo feedback?", feedback_problem: "Ho un problema da segnalare",
        feedback_suggestion: "Ho un suggerimento per la collezione", feedback_creation: "Voglio condividere qualcosa che ho creato!",
        details_label: "Si prega di fornire maggiori dettagli", details_placeholder: "Descrivi il problema, il tuo suggerimento o la storia della tua creazione qui",
        suggestion_details_label: "Qual è il tuo suggerimento?",
        link_label: "Opzionale: Condividi un link alla tua creazione", link_placeholder: "es. un link a un video di YouTube, un post di un blog o una foto",
        creation_details_label: "Parlaci della tua creazione",
        creation_link_label: "Condividi un link alla tua creazione",
        submit_button: "Invia", confirm_title: "Grazie!", confirm_message: "Il tuo feedback è stato ricevuto Apprezziamo il tuo aiuto per migliorare la nostra collezione",
        submit_another_button: "Invia un'altra risposta"
    },
    id: { // Indonesian
        select_language: "Pilih bahasa Anda:", main_title: "Digital Tool Library Feedback",
        item_name_label: "Untuk item apa Anda memberikan umpan balik?", item_name_placeholder: "misalnya, 'Ukulele' atau 'Printer 3D'",
        barcode_label: "Berapa nomor barcode-nya?", barcode_placeholder: "misalnya, '3400001234567'",
        feedback_type_label: "Apa sifat umpan balik Anda?", feedback_problem: "Saya punya masalah untuk dilaporkan",
        feedback_suggestion: "Saya punya saran untuk koleksi ini", feedback_creation: "Saya ingin membagikan sesuatu yang saya buat!",
        details_label: "Harap berikan lebih banyak detail", details_placeholder: "Jelaskan masalah, saran, atau kisah kreasi Anda di sini",
        suggestion_details_label: "Apa saran Anda?",
        link_label: "Opsional: Bagikan tautan ke kreasi Anda", link_placeholder: "misalnya, tautan ke video YouTube, postingan blog, atau foto",
        creation_details_label: "Ceritakan kepada kami tentang kreasi Anda",
        creation_link_label: "Bagikan tautan ke kreasi Anda",
        submit_button: "Kirim", confirm_title: "Terima Kasih!", confirm_message: "Umpan balik Anda telah diterima Kami menghargai bantuan Anda dalam meningkatkan koleksi kami",
        submit_another_button: "Kirim Tanggapan Lain"
    },
    mk: { // Macedonian
        select_language: "Изберете го вашиот јазик:", main_title: "Digital Tool Library Feedback",
        item_name_label: "За кој предмет давате повратни информации?", item_name_placeholder: "на пр., 'Укулеле' или '3D печатач'",
        barcode_label: "Кој е бројот на баркодот?", barcode_placeholder: "на пр., '3400001234567'",
        feedback_type_label: "Каква е природата на вашите повратни информации?", feedback_problem: "Имам проблем да пријавам",
        feedback_suggestion: "Имам предлог за колекцијата", feedback_creation: "Сакам да споделам нешто што го создадов!",
        details_label: "Ве молиме наведете повеќе детали", details_placeholder: "Опишете го проблемот, вашиот предлог или приказната за вашата креација овде",
        suggestion_details_label: "Кој е вашиот предлог?",
        link_label: "Изборно: Споделете линк до вашата креација", link_placeholder: "на пр., линк до видео на YouTube, блог пост или фотографија",
        creation_details_label: "Кажете ни за вашата креација",
        creation_link_label: "Споделете линк до вашата креација",
        submit_button: "Испрати", confirm_title: "Ви благодариме!", confirm_message: "Вашите повратни информации се примени Ја цениме вашата помош во подобрувањето на нашата колекција",
        submit_another_button: "Испрати друг одговор"
    }
};
const languages = [
    { code: 'en', englishName: 'English', nativeName: '' },
    { code: 'zh', englishName: 'Mandarin', nativeName: '普通话' },
    { code: 'yue', englishName: 'Cantonese', nativeName: '粵語' },
    { code: 'ne', englishName: 'Nepali', nativeName: 'नेपाली' },
    { code: 'el', englishName: 'Greek', nativeName: 'Ελληνικά' },
    { code: 'ar', englishName: 'Arabic', nativeName: 'العربية' },
    { code: 'mk', englishName: 'Macedonian', nativeName: 'Македонски' },
    { code: 'es', englishName: 'Spanish', nativeName: 'Español' },
    { code: 'it', englishName: 'Italian', nativeName: 'Italiano' },
    { code: 'id', englishName: 'Indonesian', nativeName: 'Bahasa Indonesia' }
];

let currentLanguage = 'en';

// --- DOM ELEMENT REFERENCES ---
const languageSelectorContainer = document.querySelector("#languageSelector div");
const feedbackForm = document.getElementById('feedbackForm') as HTMLFormElement;
const creationLinkContainer = document.getElementById('creationLinkContainer');
const creationLinkLabel = document.querySelector('label[for="creationLink"]') as HTMLLabelElement;
const feedbackTypeButtons = document.querySelectorAll('.feedback-type-button');
const feedbackTypeInput = document.getElementById('feedbackType') as HTMLInputElement;
const submitButton = document.getElementById('submitButton') as HTMLButtonElement;
const appContainer = document.getElementById('appContainer');
const confirmationMessage = document.getElementById('confirmationMessage');
const resetFormButton = document.getElementById('resetFormButton');
const errorMessageDiv = document.getElementById('errorMessage');
const mainFormContent = document.getElementById('mainFormContent');
const itemNameContainer = document.getElementById('itemNameContainer');
const barcodeContainer = document.getElementById('barcodeContainer');
const detailsLabel = document.getElementById('detailsLabel') as HTMLLabelElement;
const itemNameInput = document.getElementById('itemName') as HTMLInputElement;


// --- LANGUAGE FUNCTIONS ---
function setLanguage(langCode: string) {
    currentLanguage = langCode;
    const translation = translations[langCode as keyof typeof translations];
    document.querySelectorAll('[data-translate-key]').forEach(el => {
        const key = el.getAttribute('data-translate-key') as keyof typeof translation;
        if (translation[key]) {
            if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
                el.placeholder = translation[key];
            } else {
                el.textContent = translation[key];
            }
        }
    });
    updateActiveLanguageButton(langCode);
}

function updateActiveLanguageButton(langCode: string) {
    document.querySelectorAll('.language-button').forEach(btn => {
        if ((btn as HTMLElement).dataset.lang === langCode) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

function populateLanguageSelector() {
    if (!languageSelectorContainer) return;
    languageSelectorContainer.innerHTML = '';
    languages.forEach(lang => {
        const button = document.createElement('button');
        button.dataset.lang = lang.code;
        button.className = 'language-button';

        const primaryText = lang.nativeName || lang.englishName;
        const secondaryText = lang.nativeName ? lang.englishName : '';

        const primarySpan = document.createElement('span');
        primarySpan.className = 'english-name'; // Use the style for the primary text
        primarySpan.textContent = primaryText;
        button.appendChild(primarySpan);

        if (secondaryText) {
            const secondarySpan = document.createElement('span');
            secondarySpan.className = 'native-name'; // Use the style for the secondary text
            secondarySpan.textContent = secondaryText;
            button.appendChild(secondarySpan);
        }

        button.addEventListener('click', () => setLanguage(lang.code));
        languageSelectorContainer.appendChild(button);
    });
}


// --- EVENT LISTENERS ---
feedbackTypeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedType = (button as HTMLElement).dataset.feedbackType;
        if (!selectedType || !feedbackTypeInput) return;

        // Update hidden input
        feedbackTypeInput.value = selectedType;

        // Update button styles
        feedbackTypeButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        mainFormContent?.classList.remove('hidden');

        // Toggle visibility of form fields
        const isSuggestion = selectedType === 'suggestion';
        const isCreation = selectedType === 'creation';
        
        if (itemNameContainer) itemNameContainer.style.display = (isSuggestion || isCreation) ? 'none' : 'block';
        if (barcodeContainer) barcodeContainer.style.display = (isSuggestion || isCreation) ? 'none' : 'block';
        if(creationLinkContainer) {
             creationLinkContainer.classList.toggle('visible', isCreation);
        }
        
        const translation = translations[currentLanguage as keyof typeof translations];

        // Update details label
        if (detailsLabel) {
            let newKey = 'details_label';
            if (isSuggestion) {
                newKey = 'suggestion_details_label';
            } else if (isCreation) {
                newKey = 'creation_details_label';
            }
            detailsLabel.setAttribute('data-translate-key', newKey);
            detailsLabel.textContent = translation[newKey as keyof typeof translation];
        }

        // Update creation link label
        if (creationLinkLabel) {
            const newKey = isCreation ? 'creation_link_label' : 'link_label';
            creationLinkLabel.setAttribute('data-translate-key', newKey);
            creationLinkLabel.textContent = translation[newKey as keyof typeof translation];
        }

        // Update item name requirement
        if (itemNameInput) {
            itemNameInput.required = !(isSuggestion || isCreation);
        }
    });
});

feedbackForm?.addEventListener('submit', async (event) => {
    event.preventDefault();
    setLoadingState(true);
    hideError();

    const formData = new FormData(feedbackForm);
    const feedbackData: { [key: string]: any } = {
        itemName: formData.get('itemName'),
        feedbackType: formData.get('feedbackType'),
        details: formData.get('details'),
        language: currentLanguage,
        timestamp: new Date().toISOString()
    };
    if (formData.get('barcode')) {
        feedbackData.barcode = formData.get('barcode');
    }
    if (formData.get('feedbackType') === 'creation' && formData.get('creationLink')) {
        feedbackData.creationLink = formData.get('creationLink');
    }

    console.log("Form data submitted (no backend):", feedbackData);

    // Simulate network delay
    setTimeout(() => {
        showConfirmation();
        setLoadingState(false);
    }, 500);
});

resetFormButton?.addEventListener('click', () => resetUI());

// --- UI HELPER FUNCTIONS ---
function setLoadingState(isLoading: boolean) {
    if (!submitButton) return;
    const buttonText = document.getElementById('buttonText');
    const buttonSpinner = document.getElementById('buttonSpinner');
    submitButton.disabled = isLoading;
    buttonText?.classList.toggle('hidden', isLoading);
    buttonSpinner?.classList.toggle('hidden', !isLoading);
    submitButton.classList.toggle('cursor-not-allowed', isLoading);
    submitButton.classList.toggle('opacity-75', isLoading);
}

function displayError(message: string) {
    if (!errorMessageDiv) return;
    errorMessageDiv.textContent = message;
    errorMessageDiv.classList.remove('hidden');
}

function hideError() {
    errorMessageDiv?.classList.add('hidden');
}

function showConfirmation() {
    appContainer?.classList.add('hidden');
    confirmationMessage?.classList.remove('hidden');
}

function resetUI() {
    confirmationMessage?.classList.add('hidden');
    appContainer?.classList.remove('hidden');

    feedbackTypeButtons.forEach(btn => btn.classList.remove('active'));
    if (feedbackTypeInput) {
        feedbackTypeInput.value = '';
    }

    feedbackForm?.reset();
    
    mainFormContent?.classList.add('hidden');
    creationLinkContainer?.classList.remove('visible');
    
    if (detailsLabel) {
        detailsLabel.setAttribute('data-translate-key', 'details_label');
        const translation = translations[currentLanguage as keyof typeof translations];
        if (translation) {
            detailsLabel.textContent = translation['details_label' as keyof typeof translation];
        }
    }
    if (creationLinkLabel) {
        creationLinkLabel.setAttribute('data-translate-key', 'link_label');
        const translation = translations[currentLanguage as keyof typeof translations];
        if (translation) {
            creationLinkLabel.textContent = translation['link_label' as keyof typeof translation];
        }
    }
    if (itemNameInput) {
        itemNameInput.required = true;
    }

    hideError();
}

// --- INITIALIZATION ---
function init() {
    populateLanguageSelector();
    setLanguage('en'); // Set default language to English
}

// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', init);