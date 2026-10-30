/**
 * Sistema de Gerenciamento de Idiomas (i18n)
 * - Persistência automática com localStorage
 * - Detecção automática do idioma do navegador na primeira visita
 * - Sincronização do atributo <html lang>, <title> e classe .active nos botões
 */
const I18n = {
    storageKey: 'portfolio_lang',

    getInitialLanguage() {
        // 1. Verifica se o usuário já escolheu anteriormente
        const savedLang = localStorage.getItem(this.storageKey);
        if (savedLang && typeof translations !== 'undefined' && translations[savedLang]) {
            return savedLang;
        }

        // 2. Se não houver preferência salva, detecta idioma do navegador
        const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
        if (browserLang.startsWith('pt')) {
            return 'pt';
        }

        // 3. Padrão para visitantes internacionais: inglês
        return 'en';
    },

    setLanguage(lang) {
        if (typeof translations === 'undefined' || !translations[lang]) {
            lang = 'pt';
        }

        // Salva a escolha no localStorage
        localStorage.setItem(this.storageKey, lang);

        // Atualiza a tag <html lang="...">
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

        // Atualiza o <title> se tiver data-i18n
        const titleEl = document.querySelector('title[data-i18n]');
        if (titleEl) {
            const titleKey = titleEl.getAttribute('data-i18n');
            if (translations[lang][titleKey]) {
                document.title = translations[lang][titleKey];
            }
        }

        // Atualiza todos os elementos marcados com [data-i18n]
        document.querySelectorAll('[data-i18n]').forEach(element => {
            if (element.tagName.toLowerCase() === 'title') return;
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key] !== undefined) {
                element.innerHTML = translations[lang][key];
            }
        });

        // Atualiza o estado visual (.active) nos botões de idioma
        document.querySelectorAll('.lang-buttons button').forEach(button => {
            const btnLang = (button.getAttribute('data-lang') || button.textContent).trim().toLowerCase();
            const isActive = btnLang === lang;
            button.classList.toggle('active', isActive);
            button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });

        // Atualiza dinamicamente o link do currículo para a versão correspondente (PT / EN)
        const resumeFile = (translations[lang] && translations[lang].resume_file)
            ? translations[lang].resume_file
            : (lang === 'en' ? 'cv Jonas Sena EN 2026.docx.pdf' : 'cv Jonas Sena PT 2026.docx.pdf');

        document.querySelectorAll('[data-resume-link]').forEach(element => {
            element.setAttribute('href', encodeURI(resumeFile));
        });

        // Emite evento para outros scripts que precisem reagir à troca de idioma
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    },

    init() {
        const initialLang = this.getInitialLanguage();
        this.setLanguage(initialLang);

        // Adiciona listeners aos botões com data-lang
        document.querySelectorAll('.lang-buttons button').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const targetLang = (button.getAttribute('data-lang') || button.textContent).trim().toLowerCase();
                this.setLanguage(targetLang);
            });
        });
    }
};

// Mantém retrocompatibilidade caso alguma tag ainda chame onclick="changeLanguage('...')"
window.changeLanguage = function(lang) {
    I18n.setLanguage(lang);
};

window.I18n = I18n;

// Inicializa assim que o DOM estiver pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => I18n.init());
} else {
    I18n.init();
}
