const translations = {
    pt: {
        nav_home: "Início",
        nav_projects: "Projetos",
        nav_experience: "Experiência",
        nav_contact: "Contato",
        intro_hello: "Olá, eu sou o <span class='highlight'>Jonas Sena</span>",
        intro_role: "Unity Game Developer",
        intro_desc: "Oi, eu sou o Jonas! Sou Unity Game Developer com 3 anos de experiência.<br><br>Atualmente estou trabalhando na Santos Games, desenvolvendo e mantendo os jogos Grau é Arte Online e Fixa Brasil. Além disso, atuo como freelancer na Baladeira Studios; meu último trabalho foi no jogo Refúgio do Banzé, onde atuei na programação de UI e correção de bugs.<br><br>Antes da Santos Games, trabalhei na DeadPixel Studios no jogo Machick. Não atuei apenas como programador, mas como parte essencial da equipe, participando ativamente de todo o processo criativo e técnico, desde a concepção da ideia até o seu lançamento.<br><br>Antes disso, estive na Iamandu Studios desenvolvendo sistemas para o jogo Eclipse: Shine of Dawn. Além da programação, tive um papel fundamental na representação do estúdio, realizando apresentações e exibições do jogo diretamente para o público em grandes eventos como a Brasil Game Show (BGS) em 2023.",
        
        title_projects: "Projetos em Destaque",
        proj1_title: "Grau é Arte Online",
        proj1_desc: "Focado na implementação e otimização de sistemas multiplayer em tempo real utilizando Unity Netcode, além do desenvolvimento da física de veículos e animações.",
        proj2_title: "Fixa Brasil",
        proj2_desc: "Manutenção e implementação de sistemas de controle de UI, integração de anúncios, Firebase Crashlytics e suporte contínuo para sincronização multiplayer.",
        proj3_title: "Refúgio do Banzé",
        proj3_desc: "Foco em programação de UI, correção de bugs, polimento de gameplay e desenvolvimento de sistemas autônomos de balanceamento para Game Designers.",
        proj4_title: "Machick",
        proj4_desc: "Ciclo completo de desenvolvimento. Criação de progressão de fases, geração de inimigos, UI, localização e direção técnica de todo o sistema de áudio.",
        proj5_title: "Eclipse: Shine of Dawn",
        proj5_desc: "Melhoria nos sistemas de combate e movimentação, integração de áudio e representação do estúdio apresentando o jogo na Brasil Game Show (BGS).",
        
        /* Novas traduções das Tags */
        tag_unity: "Unity",
        tag_unity3d: "Unity3D",
        tag_unity2d: "Unity2D",
        tag_mobile: "Mobile",
        tag_pc: "PC", /* <-- Adicione esta linha aqui! */
        tag_multiplayer: "Multiplayer",
        tag_firebase: "Firebase",
        tag_ad_system: "Sistema de Anúncios",
        tag_gameplay_prog: "Programação de Gameplay",
        tag_ui: "UI",
        tag_gameplay: "Gameplay",
        tag_ui_prog: "Programação de UI",
        tag_tooling: "Ferramentas",
        tag_localization: "Localização",
        tag_audio_int: "Integração de Áudio",
        tag_audio: "Áudio",
        tag_navmesh: "NavMesh IA",

        title_experience: "Experiência Profissional",
        exp1_title: "Unity Game Developer - Santos Games",
        exp1_desc: "Manutenção e implementação de features como física de veículos, sistemas de anúncios e UI. Implementação e otimização de multiplayer usando Unity Netcode for GameObjects e Relay.",
        exp2_title: "Junior Unity Game Developer - Baladeira Studios",
        exp2_desc: "Envolvimento direto no jogo Refúgio do Banzé, construindo ferramentas para Game Designers e refinando a programação de UI e gameplay.",
        exp3_title: "Unity Game Developer - DeadPixel Studios",
        exp3_desc: "Membro fundador da equipe do jogo Machick. Gerenciamento do ciclo completo, controle de mapas, UI, localização e integração de áudio ponta a ponta.",
        exp4_title: "Unity Game Developer - Iamandu Studios",
        exp4_desc: "Representação do jogo Eclipse na BGS. Integração de sistemas de áudio e otimização de mecânicas de combate e movimentação.",
        
        title_contact: "Educação e Contato",
        edu_title: "Formação Acadêmica",
        edu_1: "<strong>Bacharelado em Tecnologia da Informação</strong><br>UFRN (2021 - 2027)",
        edu_2: "<strong>Desenvolvimento de Jogos Eletrônicos</strong><br>UFRN (03/2020 - 09/2020)",
        edu_langs: "<strong>Idiomas:</strong> Português (Nativo), Inglês (Avançado), Espanhol (Básico)",
        contact_title: "Vamos Conversar?",
        contact_linkedin: "Meu LinkedIn",
        footer_text: "© 2026 Jonas Alves de Sena Neto. Construído com HTML, CSS e JS.",

        /* Textos genéricos da página de projeto */
        btn_back: "Voltar aos Projetos",
        proj_about_title: "Sobre o Projeto",
        proj_exp_title: "Minha Experiência e Contribuição",

        /* --- Traduções da Página de Projeto (Grau é Arte) --- */
        btn_back: "Voltar aos Projetos",
        proj_resp_title: "Minhas Responsabilidades",
        proj_exp_title: "Minha Experiência",
        
        grau_desc: "Jogo casual multiplayer em 3D focado na cultura do motociclismo. Nele, os jogadores podem realizar manobras, ganhar dinheiro fazendo entregas, modificar e personalizar suas motos na oficina, além de comprar, vender ou alugar veículos. O jogo oferece diversos mapas inspirados no Brasil e permite forte interação social através de chat e encontros virtuais com outros jogadores.",
        
        grau_resp_list: "<li>Melhoria e adição de novas mecânicas de manobras utilizando Cinemática Inversa (IK), física 3D e geometria analítica.</li><li>Refatoração e organização da base de código pré-existente, aplicando princípios SOLID para maior escalabilidade.</li><li>Desenvolvimento de sistemas de entrega que simulam aplicativos reais, ciclo dinâmico de dia e noite, e mecânicas de sobrevivência (fome e sede).</li><li>Sincronização de todos os sistemas em tempo real para o modo multiplayer utilizando Unity Netcode for GameObjects.</li><li>Integração do Firebase Crashlytics para monitoramento e resolução de falhas estruturais.</li><li>Identificação e correção de gargalos de scripts e renderização utilizando o Unity Profiler, melhorando a performance geral.</li>",
        grau_exp_text: "Estou trabalhando neste projeto há 1 ano e 8 meses e tem sido uma jornada de imenso aprendizado. No início, foi um grande desafio, pois eu ainda não havia trabalhado com jogos multiplayer e nem com desenvolvimento focado em plataformas mobile. Ter a oportunidade de aprimorar minhas habilidades nessas duas áreas simultaneamente foi fantástico. Além disso, pude ter contato prático e dominar diversas ferramentas cruciais para a indústria atual de jogos, como SDKs de monetização (Ads), Firebase e Unity Netcode.",
        /* --------------------------------------------------- */

        /* --- Traduções da Página de Projeto (Fixa Brasil) --- */
        fixa_desc: "Jogo casual multiplayer em 3D focado na cultura de customização automotiva. Os jogadores podem rebaixar, modificar e personalizar seus carros e sistemas de som (paredões), além de importar suas próprias músicas para tocar durante o jogo. Tudo isso ambientado em um amplo mapa de mundo aberto inspirado nas ruas do Brasil.",
        
        fixa_resp_list: "<li>Correção de bugs e otimização de performance do jogo base logo após o lançamento.</li><li>Refatoração e organização da arquitetura de código pré-existente, aplicando princípios SOLID para facilitar a escalabilidade e manutenção.</li><li>Desenvolvimento e integração de um sistema de importação de arquivos de áudio locais, permitindo aos jogadores ouvirem suas próprias músicas nos carros.</li><li>Implementação do 'Modo Foto' (Photo Mode) imersivo para os jogadores registrarem suas customizações.</li><li>Sincronização de todos os novos sistemas e mecânicas em tempo real para o modo multiplayer utilizando Unity Netcode for GameObjects.</li>",
        
        fixa_exp_text: "Ingressei neste projeto há pouco mais de duas semanas, coincidindo com o período pós-lançamento oficial. Como é um jogo recém-lançado com uma base de jogadores ativa e crescente, há um vasto escopo de funcionalidades a serem exploradas e adicionadas. Tem sido uma experiência extremamente recompensadora poder aplicar de forma direta e rápida a bagagem técnica e os conhecimentos de arquitetura que adquiri em projetos anteriores para estabilizar e expandir o jogo.",

        /* --- Traduções da Página de Projeto (Refúgio do Banzé) --- */
        banze_desc: "Refúgio do Banzé é um jogo mobile 2D de Tower Defense (defesa de torre) com viés educacional, ambientado na época da colonização do Brasil. O objetivo central é defender o seu Mocambo contra os ataques dos invasores europeus. Para isso, o jogador precisa progredir pelos níveis, acumular recursos e fortalecer suas defesas construindo e aprimorando instalações. A cada nova conquista, o jogador enfrenta novos desafios e desbloqueia conteúdos históricos reais sobre esse importante momento do Brasil.",
        
        banze_resp_list: "<li>Desenvolvimento e implementação de novas funcionalidades na interface de usuário (UI), incluindo barras de progresso dinâmicas e sistemas de botões para compra de habilidades nas lojas.</li><li>Identificação e correção de bugs relacionados a mecânicas de gameplay e usabilidade da interface.</li><li>Integração contínua de assets de arte, animações 2D e efeitos de áudio na engine.</li><li>Adaptação e desenvolvimento de ferramentas de sistema para permitir que os Game Designers pudessem balancear o jogo de forma autônoma e independente.</li><li>Participação ativa em code reviews, garantindo a qualidade e a padronização do código da equipe.</li>",

        banze_exp_text: "Este projeto marcou meu primeiro contato prático com metodologias ágeis estruturadas, como a utilização do Git Flow e a participação em processos rigorosos de code review. Além do imenso aprendizado técnico e da imersão em boas práticas de versionamento em equipe, foi uma experiência riquíssima e gratificante poder contribuir para o desenvolvimento de um jogo com um propósito educacional voltado para a rica história do Brasil.",

        /* --- Traduções da Página de Projeto (Machick) --- */
        machick_desc: "Derrote um exército fortemente armado de sapos anti-magia e liberte a floresta da destruição. Machick é um jogo casual (roguelite) onde você constrói suas próprias varinhas, sobrevive a hordas de inimigos, coleta XP e seleciona aprimoramentos para ir cada vez mais longe na jornada.",
        
        machick_resp_list: "<li>Desenvolvimento de sistemas core de gameplay, incluindo progressão de nível, geração procedural e controle de eventos de mapa, além das mecânicas de movimentação.</li><li>Implementação de algumas funções da interface de usuário (UI) e estruturação de um sistema dinâmico de localização para suportar múltiplos idiomas.</li><li>Liderança e planejamento em conjunto com a equipe de som, atuando na integração técnica de todo o áudio na engine para garantir o 'game feel' ideal.</li><li>Resolução de bugs complexos, polimento de gameplay e aprimoramento contínuo dos sistemas gerais do jogo.</li>",        

        machick_exp_text: "Este foi um marco imenso na minha carreira por ser o meu primeiro jogo comercial lançado. Trabalhando em uma equipe indie dedicada, tive a oportunidade única de participar ativamente de todo o ciclo de vida do projeto: desde as reuniões iniciais de brainstorm e concepção da ideia, passando por todo o desenvolvimento pesado, até o suporte e envio de correções (patches) no pós-lançamento. Essa vivência ponta a ponta expandiu incrivelmente minha visão tanto técnica quanto de produto.",
    },
    en: {
        nav_home: "Home",
        nav_projects: "Projects",
        nav_experience: "Experience",
        nav_contact: "Contact",
        intro_hello: "Hi, I'm <span class='highlight'>Jonas Sena</span>",
        intro_role: "Unity Game Developer",
        intro_desc: "Hi, I'm Jonas! I'm a Unity Game Developer with 3 years of experience.<br><br>Currently, I work at Santos Games, developing and maintaining Grau é Arte Online and Fixa Brasil. Additionally, I work as a freelancer at Baladeira Studios; my latest project was Refúgio do Banzé, where I worked on UI programming and bug fixing.<br><br>Before Santos Games, I worked at DeadPixel Studios on the game Machick. I wasn't just a programmer, but an essential part of the team, actively participating in the entire creative and technical process, from the idea's conception to its launch.<br><br>Prior to that, I worked at Iamandu Studios developing systems for Eclipse: Shine of Dawn. Besides programming, I played a key role in representing the studio, presenting and showcasing the game directly to the public at major events like the Brasil Game Show (BGS) in 2023.",
        
        title_projects: "Featured Projects",
        proj1_title: "Grau é Arte Online",
        proj1_desc: "Focused on the implementation and optimization of real-time multiplayer systems using Unity Netcode, as well as the development of vehicle physics and animations.",
        proj2_title: "Fixa Brasil",
        proj2_desc: "Maintenance and implementation of UI control systems, ad integration, Firebase Crashlytics, and continuous support for multiplayer synchronization.",
        proj3_title: "Refúgio do Banzé",
        proj3_desc: "Focused on UI programming, bug fixing, gameplay polishing, and developed autonomous balancing systems for Game Designers.",
        proj4_title: "Machick",
        proj4_desc: "Full development cycle from conception to launch. Developed level progression, enemy generation, UI, localization, and directed all audio systems.",
        proj5_title: "Eclipse: Shine of Dawn",
        proj5_desc: "Improved combat and movement systems, integrated game audio, and represented the studio at Brasil Game Show (BGS).",
        
        /* Novas traduções das Tags (Inglês) */
        tag_unity: "Unity",
        tag_unity3d: "Unity3D",
        tag_unity2d: "Unity2D",
        tag_mobile: "Mobile",
        tag_pc: "PC", /* <-- Adicione esta linha aqui! */
        tag_multiplayer: "Multiplayer",
        tag_firebase: "Firebase",
        tag_ad_system: "Ad System",
        tag_gameplay_prog: "Gameplay Programming",
        tag_ui: "UI",
        tag_gameplay: "Gameplay",
        tag_ui_prog: "UI Programming",
        tag_tooling: "Tooling",
        tag_localization: "Localization",
        tag_audio_int: "Audio Integration",
        tag_audio: "Audio",
        tag_navmesh: "NavMesh AI",

        title_experience: "Professional Experience",
        exp1_title: "Unity Game Developer - Santos Games",
        exp1_desc: "Responsible for feature implementation (vehicle physics, ads, UI) and multiplayer systems using Unity Netcode for GameObjects and Relay.",
        exp2_title: "Junior Unity Game Developer - Baladeira Studios",
        exp2_desc: "Directly involved in the development of Refúgio do Banzé, building tools for Game Designers and polishing UI and gameplay.",
        exp3_title: "Unity Game Developer - DeadPixel Studios",
        exp3_desc: "Founding team member for Machick. Managed full-cycle development, map control, UI, localization, and end-to-end audio integration.",
        exp4_title: "Unity Game Developer - Iamandu Studios",
        exp4_desc: "Represented the game Eclipse at BGS. Integrated audio systems and optimized combat and movement mechanics.",
        
        title_contact: "Education & Contact",
        edu_title: "Academic Background",
        edu_1: "<strong>Bachelor of Information Technology</strong><br>UFRN (2021 - 2027)",
        edu_2: "<strong>Electronic Game Development</strong><br>UFRN (03/2020 - 09/2020)",
        edu_langs: "<strong>Languages:</strong> Portuguese (Native), English (Advanced), Spanish (Basic)",
        contact_title: "Let's Talk?",
        contact_linkedin: "My LinkedIn",
        footer_text: "© 2026 Jonas Alves de Sena Neto. Built with HTML, CSS, and JS.",

        /* Textos genéricos da página de projeto */
        btn_back: "Back to Projects",
        proj_about_title: "About the Project",
        proj_exp_title: "My Experience and Contribution",

        /* --- Project Page Translations (Grau é Arte) --- */
        btn_back: "Back to Projects",
        proj_resp_title: "My Responsibilities",
        proj_exp_title: "My Experience",
        
        grau_desc: "A casual 3D multiplayer game focused on motorcycle culture. Players can perform stunts, earn money through deliveries, modify and customize their bikes in the workshop, as well as buy, sell, or rent vehicles. The game features several maps inspired by Brazil and allows for strong social interaction through chat and virtual meetups with other players.",
        
        grau_resp_list: "<li>Improved and added new stunt mechanics using Inverse Kinematics (IK), 3D physics, and analytical geometry.</li><li>Refactored and organized the pre-existing codebase, applying SOLID principles for better scalability.</li><li>Developed delivery systems simulating real-world apps, a dynamic day/night cycle, and survival mechanics (hunger and thirst).</li><li>Synchronized all systems in real-time for multiplayer mode using Unity Netcode for GameObjects.</li><li>Integrated Firebase Crashlytics for real-time monitoring and crash resolution.</li><li>Identified and resolved scripting and rendering bottlenecks using the Unity Profiler, significantly improving overall performance.</li>",
        
        grau_exp_text: "I have been working on this project for 1 year and 8 months, and it has been a journey of immense learning. At first, it was a huge challenge because I had never worked with multiplayer games or mobile-focused development before. Having the opportunity to hone my skills in both areas simultaneously was fantastic. Furthermore, I was able to gain hands-on experience and master several crucial tools for today's gaming industry, such as monetization SDKs (Ads), Firebase, and Unity Netcode.",
        /* --------------------------------------------------- */

        /* --- Project Page Translations (Fixa Brasil) --- */
        fixa_desc: "A casual 3D multiplayer game focused on car customization culture. Players can lower, modify, and personalize their cars and sound systems, as well as import their own music to play in-game. All of this is set in a large open-world map inspired by the streets of Brazil.",
        
        fixa_resp_list: "<li>Bug fixing and performance optimization of the base game right after launch.</li><li>Refactored and organized the existing code architecture, applying SOLID principles to facilitate scalability and maintenance.</li><li>Developed and integrated a local audio import system, allowing players to listen to their own music in their cars.</li><li>Implemented an immersive Photo Mode for players to capture their customizations.</li><li>Synchronized all new systems and mechanics in real-time for multiplayer mode using Unity Netcode for GameObjects.</li>",
        
        fixa_exp_text: "I joined this project just over two weeks ago, coinciding with the post-launch period. As a newly released game with an active and growing player base, there is a vast scope of features to be explored and added. It has been a highly rewarding experience to directly and quickly apply the technical background and architectural knowledge I acquired in previous projects to stabilize and expand the game.",

        /* --- Project Page Translations (Refúgio do Banzé) --- */
        banze_desc: "Refúgio do Banzé is an educational 2D mobile tower defense game set during the colonization era of Brazil. The main objective is to defend your Mocambo against attacks from European invaders. To do this, players must progress through levels, gather resources, and strengthen their defenses by building and upgrading facilities. With each milestone, players face new challenges and unlock real historical content about this pivotal moment in Brazil.",
        
        banze_resp_list: "<li>Developed and implemented new User Interface (UI) features, including dynamic progress bars and skill purchase button systems in the in-game shops.</li><li>Identified and fixed bugs related to gameplay mechanics and interface usability.</li><li>Continuously integrated art assets, 2D animations, and audio effects into the engine.</li><li>Adapted and developed system tools to allow Game Designers to balance the game autonomously and independently.</li><li>Actively participated in code reviews, ensuring code quality and standardization across the team.</li>",
        
        banze_exp_text: "This project marked my first hands-on experience with structured agile methodologies, such as using Git Flow and participating in rigorous code review processes. Beyond the immense technical learning and team version control best practices, it was an incredibly rich and rewarding experience to contribute to the development of an educational game focused on Brazil's rich history.",

        /* --- Project Page Translations (Machick) --- */
        machick_desc: "Defeat a heavily armed army of anti-magic frogs and free the forest from destruction. Machick is a casual roguelite game where you build your own wands, survive enemy hordes, collect XP, and select upgrades to go further in your journey.",
        
        machick_resp_list: "<li>Developed core gameplay systems, including level progression, procedural map event generation and control, as well as movement mechanics.</li><li>Implemented some User Interface (UI) functions and structured a dynamic localization system to support multiple languages.</li><li>Led and planned alongside the sound team, acting on the technical end-to-end integration of all audio within the engine to ensure the ideal 'game feel'.</li><li>Resolved complex bugs, polished gameplay, and continuously improved general game systems.</li>",        
        
        machick_exp_text: "This was a massive milestone in my career as it was my first released commercial game. Working within a dedicated indie team, I had the unique opportunity to actively participate in the entire lifecycle of the project: from initial brainstorming and concept meetings, through heavy development, to post-launch support and patching. This end-to-end experience incredibly expanded both my technical and product vision.",
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
}

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});