/* Insync International - Romanian / English language switcher.
   Romanian is the default. The English source text in the HTML is used as the
   lookup key, so no markup changes are needed when copy is edited: add a new
   line to RO below and it is translated. Anything missing simply stays English. */
(function () {
  "use strict";

  var STORE_KEY = "insync-lang";
  var DEFAULT_LANG = "ro";

  var RO = {
    /* --- Navigation --- */
    "Home": "Acasă",
    "About Us": "Despre noi",
    "Services": "Servicii",
    "Projects": "Proiecte",
    "FAQ": "Întrebări frecvente",
    "Contact Us": "Contact",
    "Get a Quote": "Cere o ofertă",

    /* --- Hero --- */
    "Construction & Development": "Construcții și dezvoltare",
    "Building Quality. Creating Value.": "Construim calitate. Creăm valoare.",
    "From contemporary villas and family homes to multi-storey residential and commercial buildings, Insync International delivers construction with a focus on quality, precision and long-term value.": "De la vile contemporane și case de familie până la clădiri rezidențiale și comerciale multietajate, Insync International execută lucrări de construcții cu accent pe calitate, precizie și valoare pe termen lung.",
    "Our Projects": "Proiectele noastre",
    "From Concept to Completion": "De la concept la finalizare",
    "Your Vision. Built With Precision.": "Viziunea ta. Construită cu precizie.",
    "We bring planning, technical coordination, construction and finishing together to transform ideas into high-quality spaces built for the future.": "Îmbinăm planificarea, coordonarea tehnică, execuția și finisajele pentru a transforma ideile în spații de calitate, construite pentru viitor.",
    "Our Services": "Serviciile noastre",
    "Construction You Can Trust": "Construcții în care poți avea încredere",
    "Built Right. Built to Last.": "Construit corect. Construit să dureze.",
    "From foundations and structural works to installations and final finishes, we focus on quality at every stage of construction.": "De la fundații și lucrări structurale până la instalații și finisaje finale, ne concentrăm pe calitate în fiecare etapă a construcției.",
    "Start Your Project": "Începe proiectul tău",

    /* --- Highlights --- */
    "Residential": "Rezidențial",
    "Villas & Houses": "Vile și case",
    "Multi-Storey": "Multietajat",
    "Building Construction": "Construcții de clădiri",
    "Complete Delivery": "Livrare completă",
    "Turnkey Projects": "Proiecte la cheie",
    "Every Stage": "Fiecare etapă",
    "Quality Focused": "Orientați spre calitate",

    /* --- About --- */
    "About Insync International": "Despre Insync International",
    "Building Better Spaces for Today and Tomorrow": "Construim spații mai bune pentru azi și pentru mâine",
    "Insync International SRL is a Romania-based construction company focused on residential and commercial construction.": "Insync International SRL este o companie de construcții din România, specializată în construcții rezidențiale și comerciale.",
    "Our capabilities range from individual villas and family homes to multi-storey residential and commercial buildings, renovations and complete turnkey projects.": "Realizăm de la vile individuale și case de familie până la clădiri rezidențiale și comerciale multietajate, renovări și proiecte complete la cheie.",
    "We believe successful construction starts with careful planning and continues through every detail of execution, from foundations and structural works to building services, insulation and finishing.": "Credem că o construcție reușită începe cu o planificare atentă și continuă prin fiecare detaliu de execuție, de la fundații și structură până la instalații, izolații și finisaje.",
    "Quality Construction": "Construcții de calitate",
    "Proper construction methods, appropriate materials and careful execution throughout every stage.": "Metode de construcție corecte, materiale potrivite și execuție atentă în fiecare etapă.",
    "Complete Project Delivery": "Livrarea completă a proiectului",
    "Planning, construction, finishing and handover coordinated through one practical construction process.": "Planificare, execuție, finisaje și predare, coordonate printr-un singur proces practic de construcție.",
    "Contact Our Team": "Contactează echipa noastră",

    /* --- Services --- */
    "What We Do": "Ce facem",
    "Complete Construction Solutions": "Soluții complete de construcții",
    "From a private family home to a larger residential or commercial development, Insync International provides coordinated construction solutions designed around the requirements of each project.": "De la o casă de familie până la o dezvoltare rezidențială sau comercială de amploare, Insync International oferă soluții de construcții coordonate, adaptate cerințelor fiecărui proiect.",
    "Villa & House Construction": "Construcții de vile și case",
    "Contemporary villas and family homes from foundation through final finishing, with careful attention to structural quality, comfort and appearance.": "Vile contemporane și case de familie, de la fundație până la finisajul final, cu atenție deosebită pentru calitatea structurii, confort și aspect.",
    "Multi-Storey Buildings": "Clădiri multietajate",
    "Multi-level residential and commercial buildings with coordinated structural, architectural and technical execution.": "Clădiri rezidențiale și comerciale cu mai multe niveluri, cu execuție structurală, arhitecturală și tehnică coordonată.",
    "Turnkey Construction": "Construcții la cheie",
    "Structural works, masonry, roofing, MEP installations, insulation, interior and exterior finishing and preparation for handover.": "Lucrări structurale, zidărie, învelitori, instalații electrice, sanitare și HVAC, izolații, finisaje interioare și exterioare și pregătirea pentru predare.",
    "Design & Build Coordination": "Coordonare proiectare și execuție",
    "A coordinated approach bringing architectural planning, structural engineering, technical requirements and construction execution together.": "O abordare coordonată care îmbină planificarea arhitecturală, ingineria structurală, cerințele tehnice și execuția lucrărilor.",
    "Discuss Your Project": "Discută proiectul tău",
    "Renovation & Extensions": "Renovări și extinderi",
    "Modernization, property extensions and structural improvements designed to improve functionality, appearance and value.": "Modernizări, extinderi de imobile și îmbunătățiri structurale menite să crească funcționalitatea, aspectul și valoarea.",
    "Project & Construction Management": "Management de proiect și execuție",
    "Planning, contractor coordination, procurement support, supervision, progress monitoring and quality control throughout execution.": "Planificare, coordonarea antreprenorilor, sprijin în achiziții, supraveghere, monitorizarea progresului și control al calității pe tot parcursul execuției.",

    /* --- Projects --- */
    "From Vision to Reality": "De la viziune la realitate",
    "Every construction project presents different requirements. Our approach is built around careful planning, coordinated execution and attention to the details that determine the quality of the finished building.": "Fiecare proiect de construcție are cerințe diferite. Abordarea noastră se bazează pe planificare atentă, execuție coordonată și atenție la detaliile care determină calitatea clădirii finite.",
    "All": "Toate",
    "Villas": "Vile",
    "Commercial": "Comercial",
    "Upcoming": "În curând",
    "Modern Villa Development": "Ansamblu modern de vile",
    "Residential Development | Balotesti, Ilfov, Romania": "Dezvoltare rezidențială | Balotești, Ilfov, România",
    "Contemporary Family Residence": "Reședință contemporană de familie",
    "Villa Construction | Romania": "Construcție vilă | România",
    "Under Construction": "În construcție",
    "Residential Building": "Clădire rezidențială",
    "Multi-Storey Residential | Romania": "Rezidențial multietajat | România",

    /* --- Approach --- */
    "The Insync Approach": "Abordarea Insync",
    "Quality Is Built Into Every Stage": "Calitatea se construiește în fiecare etapă",
    "What you see when a building is completed is only part of the story. The quality of a property depends on decisions and workmanship throughout construction, from ground preparation and foundations to structure, waterproofing, insulation, installations and final finishes.": "Ceea ce se vede la finalizarea unei clădiri este doar o parte din poveste. Calitatea unui imobil depinde de deciziile și de manopera din timpul execuției, de la pregătirea terenului și fundații până la structură, hidroizolații, termoizolații, instalații și finisaje finale.",
    "At Insync International, we focus on the complete construction process because the details that eventually become invisible are often the ones that matter most.": "La Insync International ne concentrăm pe întregul proces de construcție, pentru că detaliile care devin invizibile sunt adesea cele mai importante.",

    /* --- Why choose us --- */
    "Why Choose Insync International": "De ce să alegi Insync International",
    "A Better Approach to Construction": "O abordare mai bună a construcțiilor",
    "Correct construction methods, workmanship and appropriate materials throughout execution.": "Metode de construcție corecte, manoperă îngrijită și materiale potrivite pe tot parcursul execuției.",
    "Clear Communication": "Comunicare clară",
    "Clients should understand project progress, milestones and decisions that need to be made.": "Clienții trebuie să înțeleagă stadiul proiectului, etapele importante și deciziile care trebuie luate.",
    "Coordinated Execution": "Execuție coordonată",
    "Structural, architectural, electrical, plumbing, HVAC and finishing activities handled as parts of one project.": "Lucrările structurale, arhitecturale, electrice, sanitare, HVAC și de finisaj sunt tratate ca părți ale aceluiași proiect.",
    "Attention to Detail": "Atenție la detalii",
    "Good construction is often determined by details that become invisible once a building is finished.": "O construcție bună este determinată adesea de detalii care devin invizibile după finalizarea clădirii.",
    "Practical Solutions": "Soluții practice",
    "Design, cost, durability, maintenance and functionality are considered when evaluating solutions.": "Designul, costul, durabilitatea, întreținerea și funcționalitatea sunt luate în calcul la evaluarea soluțiilor.",
    "Long-Term Value": "Valoare pe termen lung",
    "Properties should remain functional, attractive and valuable over time.": "Imobilele trebuie să rămână funcționale, atractive și valoroase în timp.",

    /* --- How we work --- */
    "How We Work": "Cum lucrăm",
    "From Idea to Completed Building": "De la idee la clădire finalizată",
    "Consultation & Requirements": "Consultanță și cerințe",
    "We start by understanding the location, land, building type, requirements, budget and timeline.": "Începem prin a înțelege amplasamentul, terenul, tipul clădirii, cerințele, bugetul și termenele.",
    "Planning & Coordination": "Planificare și coordonare",
    "Architectural, structural and technical requirements are reviewed and coordinated for construction.": "Cerințele arhitecturale, structurale și tehnice sunt analizate și coordonate pentru execuție.",
    "Construction & Quality Control": "Execuție și control al calității",
    "Activities, contractors, materials, schedules and workmanship are coordinated and monitored.": "Activitățile, antreprenorii, materialele, graficele și manopera sunt coordonate și monitorizate.",
    "Completion & Handover": "Finalizare și predare",
    "Finishing works, inspections, testing and final checks are completed before handover.": "Lucrările de finisaj, inspecțiile, testările și verificările finale sunt încheiate înainte de predare.",

    /* --- What we build --- */
    "What We Build": "Ce construim",
    "Construction for Different Ambitions": "Construcții pentru ambiții diferite",
    "Private Villas": "Vile private",
    "Family Homes": "Case de familie",
    "Residential Developments": "Ansambluri rezidențiale",
    "Commercial Buildings": "Clădiri comerciale",
    "Renovations & Extensions": "Renovări și extinderi",

    /* --- Standards --- */
    "Our Construction Standards": "Standardele noastre de construcție",
    "Built Right From the Foundation Up": "Construit corect, de la fundație în sus",
    "Construction quality is shaped by the standards applied before the final surfaces are visible.": "Calitatea unei construcții este dată de standardele aplicate înainte ca suprafețele finale să devină vizibile.",
    "Structural Integrity": "Integritate structurală",
    "Careful execution of foundations, reinforced concrete, masonry and structural components.": "Execuție atentă a fundațiilor, betonului armat, zidăriei și elementelor structurale.",
    "Protection & Energy Performance": "Protecție și performanță energetică",
    "Roofing, waterproofing, thermal insulation, windows and exterior systems planned for durability.": "Învelitori, hidroizolații, termoizolații, tâmplărie și sisteme exterioare proiectate pentru durabilitate.",
    "Technical Installations": "Instalații tehnice",
    "Electrical, plumbing, heating, ventilation and other systems coordinated with the construction programme.": "Instalații electrice, sanitare, de încălzire, ventilație și alte sisteme, corelate cu programul de execuție.",
    "Finishing Excellence": "Finisaje de calitate",
    "Interior and exterior finishes completed with attention to appearance, functionality and workmanship.": "Finisaje interioare și exterioare realizate cu atenție la aspect, funcționalitate și manoperă.",

    /* --- FAQ --- */
    "Frequently Asked Questions": "Întrebări frecvente",
    "Planning a Construction Project?": "Planifici un proiect de construcție?",
    "What types of projects does Insync International undertake?": "Ce tipuri de proiecte realizează Insync International?",
    "We undertake private villas, family homes, residential developments, multi-storey buildings, selected commercial projects, renovations and property extensions.": "Realizăm vile private, case de familie, ansambluri rezidențiale, clădiri multietajate, proiecte comerciale selectate, renovări și extinderi de imobile.",
    "Do you provide turnkey construction?": "Oferiți construcții la cheie?",
    "Yes. Depending on the agreed scope, we can coordinate the complete construction process from structural works through technical installations, finishing and final handover.": "Da. În funcție de scopul agreat, putem coordona întregul proces de construcție, de la lucrările structurale până la instalații tehnice, finisaje și predarea finală.",
    "Can you build on land that I already own?": "Puteți construi pe un teren pe care îl dețin deja?",
    "Yes. We can review the property, available documentation, proposed design and project requirements and discuss an appropriate construction approach.": "Da. Putem analiza terenul, documentația disponibilă, proiectul propus și cerințele lucrării și putem discuta o abordare potrivită de execuție.",
    "Can you assist with architectural and engineering coordination?": "Ne puteți ajuta cu coordonarea arhitecturală și de inginerie?",
    "Yes. We can coordinate architectural, structural and technical requirements with the relevant project professionals as part of the construction process.": "Da. Putem coordona cerințele arhitecturale, structurale și tehnice cu specialiștii implicați în proiect, ca parte a procesului de construcție.",
    "How long does it take to build a house or villa?": "Cât durează construcția unei case sau a unei vile?",
    "The construction period depends on the building size, complexity, approvals, structural system, specifications and finishing requirements.": "Durata execuției depinde de suprafața și complexitatea clădirii, de avize, de sistemul structural, de specificații și de cerințele de finisaj.",
    "Where does Insync International operate?": "Unde activează Insync International?",
    "Insync International is based in Prahova, Romania, and undertakes projects in Romania based on project location, scope and requirements.": "Insync International are sediul în Prahova, România, și realizează proiecte în România, în funcție de amplasament, amploare și cerințe.",

    /* --- Contact + form --- */
    "Let's Build Together": "Să construim împreună",
    "Tell Us About Your Project": "Spune-ne despre proiectul tău",
    "Whether you are planning a private villa, family home, multi-storey development, commercial property or renovation, we would be pleased to discuss your requirements.": "Fie că planifici o vilă privată, o casă de familie, o dezvoltare multietajată, un spațiu comercial sau o renovare, ne-ar face plăcere să discutăm cerințele tale.",
    "Full Name*": "Nume complet*",
    "Email Address*": "Adresă de e-mail*",
    "Phone Number": "Număr de telefon",
    "Project Location": "Locația proiectului",
    "City / County": "Oraș / județ",
    "Project Type*": "Tipul proiectului*",
    "Select project type": "Alege tipul proiectului",
    "Villa / House Construction": "Construcție vilă / casă",
    "Multi-Storey Residential": "Rezidențial multietajat",
    "Residential Development": "Dezvoltare rezidențială",
    "Commercial Building": "Clădire comercială",
    "Renovation / Extension": "Renovare / extindere",
    "Other": "Altele",
    "Approximate Project Size": "Suprafață aproximativă",
    "e.g. 250 m2": "ex. 250 m2",
    "Message*": "Mesaj*",
    "Tell us briefly about your project...": "Spune-ne pe scurt despre proiectul tău...",
    "By submitting this form, you agree that Insync International SRL may contact you regarding your enquiry.": "Prin trimiterea acestui formular, ești de acord ca Insync International SRL să te contacteze în legătură cu solicitarea ta.",
    "Send Enquiry": "Trimite solicitarea",
    "Let's Discuss Your Next Project": "Să discutăm despre următorul tău proiect",
    "Company": "Companie",
    "Address": "Adresă",
    "Phone": "Telefon",
    "Email": "E-mail",
    "Website": "Site web",
    "Judet Prahova, Romania": "Județ Prahova, România",
    "Call Us": "Sună-ne",
    "Send Email": "Trimite e-mail",
    "Get Directions": "Vezi harta",

    /* --- Form popup --- */
    "Sending...": "Se trimite...",
    "Thank you!": "Îți mulțumim!",
    "Your enquiry has been sent. Our team will review it and get back to you shortly.": "Solicitarea ta a fost trimisă. Echipa noastră o va analiza și te va contacta în curând.",
    "Something went wrong": "A apărut o problemă",
    "Your enquiry could not be sent. Please try again, or email us directly at info@insyncbuilders.com.": "Solicitarea nu a putut fi trimisă. Te rugăm să încerci din nou sau să ne scrii direct la info@insyncbuilders.com.",
    "Close": "Închide",

    /* --- Final CTA --- */
    "Have a Project in Mind?": "Ai un proiect în minte?",
    "Let's Build Something That Lasts.": "Să construim ceva care durează.",
    "From private homes to larger developments, Insync International brings together construction expertise, coordination and attention to detail to deliver quality buildings.": "De la locuințe private până la dezvoltări de amploare, Insync International îmbină experiența în construcții, coordonarea și atenția la detalii pentru a livra clădiri de calitate.",

    /* --- Footer --- */
    "Residential and commercial construction with a focus on quality, responsible execution and long-term value.": "Construcții rezidențiale și comerciale, cu accent pe calitate, execuție responsabilă și valoare pe termen lung.",
    "Quick Links": "Linkuri rapide",
    "Str. Aricisteni 18, Strejnicu, Prahova, Romania": "Str. Aricisteni 18, Strejnicu, Prahova, România",
    "Copyright 2026 Insync International SRL. All Rights Reserved.": "Copyright 2026 Insync International SRL. Toate drepturile rezervate.",
    "Privacy Policy": "Politica de confidențialitate",
    "Terms & Conditions": "Termeni și condiții",

    /* --- Privacy policy page --- */
    "This policy explains how Insync International SRL handles information submitted through this website.": "Această politică explică modul în care Insync International SRL gestionează informațiile transmise prin acest site.",
    "Information We Collect": "Informațiile pe care le colectăm",
    "When you send an enquiry, we may collect your name, email address, phone number, project location, project type, approximate project size and message.": "Când trimiți o solicitare, putem colecta numele, adresa de e-mail, numărul de telefon, locația proiectului, tipul proiectului, suprafața aproximativă și mesajul tău.",
    "How We Use Information": "Cum folosim informațiile",
    "We use enquiry information to review your project request, contact you about your enquiry and provide relevant construction information or quotations.": "Folosim informațiile din solicitare pentru a analiza cererea ta, pentru a te contacta în legătură cu aceasta și pentru a-ți oferi informații sau oferte relevante privind lucrările de construcții.",
    "Sharing Information": "Partajarea informațiilor",
    "We do not sell personal information. We may share enquiry details with relevant project professionals or service providers only when needed to respond to your request or operate the website.": "Nu vindem date cu caracter personal. Putem partaja detaliile solicitării cu specialiștii implicați în proiect sau cu furnizorii de servicii doar atunci când este necesar pentru a răspunde cererii tale sau pentru funcționarea site-ului.",
    "Data Retention": "Păstrarea datelor",
    "We keep enquiry information only as long as reasonably necessary for communication, project assessment, legal, accounting or business purposes.": "Păstrăm informațiile din solicitări doar atât timp cât este necesar în mod rezonabil pentru comunicare, evaluarea proiectului și scopuri legale, contabile sau de afaceri.",
    "Contact": "Contact",
    "For privacy questions, contact": "Pentru întrebări privind confidențialitatea, scrie la",

    /* --- Terms page --- */
    "By using this website, you agree to these terms and conditions.": "Prin utilizarea acestui site, ești de acord cu acești termeni și condiții.",
    "Website Information": "Informații despre site",
    "The content on this website is provided for general information about Insync International SRL and its construction services. It does not create a contract, quotation or guarantee.": "Conținutul acestui site are caracter informativ general despre Insync International SRL și serviciile sale de construcții. Acesta nu constituie un contract, o ofertă sau o garanție.",
    "Project Enquiries": "Solicitări de proiect",
    "Any quotation, timeline, scope or project commitment must be confirmed separately in writing after the project requirements, documentation and site conditions are reviewed.": "Orice ofertă, termen, scop al lucrării sau angajament contractual trebuie confirmat separat, în scris, după analizarea cerințelor proiectului, a documentației și a condițiilor din teren.",
    "Images and Project Status": "Imagini și stadiul proiectelor",
    "Images used on the website may include concept, upcoming or illustrative construction imagery. Project status labels should be reviewed before final public launch.": "Imaginile folosite pe site pot include reprezentări conceptuale, proiecte viitoare sau imagini ilustrative. Etichetele privind stadiul proiectelor trebuie verificate înainte de lansarea publică finală.",
    "External Services": "Servicii externe",
    "The website may use external services for forms, maps or hosting. Those services may process technical data according to their own terms and policies.": "Site-ul poate folosi servicii externe pentru formulare, hărți sau găzduire. Aceste servicii pot procesa date tehnice conform propriilor termeni și politici.",
    "For questions about these terms, contact": "Pentru întrebări legate de acești termeni, scrie la",

    /* --- Page titles / meta --- */
    "Insync International SRL | Construction & Development in Romania": "Insync International SRL | Construcții și dezvoltare în România",
    "Romania-based residential and commercial construction for villas, family homes, multi-storey buildings, turnkey projects, renovations and project management.": "Companie de construcții din România: vile, case de familie, clădiri multietajate, proiecte la cheie, renovări și management de proiect.",
    "Privacy Policy | Insync International SRL": "Politica de confidențialitate | Insync International SRL",
    "Privacy Policy for Insync International SRL website enquiries.": "Politica de confidențialitate pentru solicitările trimise prin site-ul Insync International SRL.",
    "Terms & Conditions | Insync International SRL": "Termeni și condiții | Insync International SRL",
    "Terms and Conditions for the Insync International SRL website.": "Termeni și condiții pentru site-ul Insync International SRL."
  };

  var originals = null;
  var current = null;

  function collect() {
    if (originals) return originals;
    originals = { nodes: [], attrs: [] };

    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        var parent = node.parentNode;
        if (!parent) return NodeFilter.FILTER_REJECT;
        var tag = parent.nodeName;
        if (tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT") return NodeFilter.FILTER_REJECT;
        if (parent.hasAttribute && parent.hasAttribute("data-no-translate")) return NodeFilter.FILTER_REJECT;
        return node.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    var node;
    while ((node = walker.nextNode())) {
      originals.nodes.push({ node: node, text: node.nodeValue });
    }

    ["placeholder", "aria-label", "title", "alt", "value"].forEach(function (attr) {
      var selector = attr === "value" ? 'input[type="submit"][value]' : "[" + attr + "]";
      document.querySelectorAll(selector).forEach(function (el) {
        originals.attrs.push({ el: el, attr: attr, text: el.getAttribute(attr) });
      });
    });

    originals.title = document.title;
    var desc = document.querySelector('meta[name="description"]');
    originals.desc = desc ? desc.getAttribute("content") : null;

    return originals;
  }

  function translate(value, dict) {
    if (!dict) return value;
    var trimmed = value.trim();
    if (!trimmed) return value;
    var hit = dict[trimmed];
    if (!hit) return value;
    // keep the original leading / trailing whitespace so inline layout is unchanged
    var lead = value.slice(0, value.indexOf(trimmed[0]));
    var tail = value.slice(value.lastIndexOf(trimmed[trimmed.length - 1]) + 1);
    return lead + hit + tail;
  }

  function apply(lang) {
    var store = collect();
    var dict = lang === "ro" ? RO : null;

    store.nodes.forEach(function (item) {
      var next = translate(item.text, dict);
      if (item.node.nodeValue !== next) item.node.nodeValue = next;
    });
    store.attrs.forEach(function (item) {
      var next = translate(item.text, dict);
      if (item.el.getAttribute(item.attr) !== next) item.el.setAttribute(item.attr, next);
    });

    document.title = translate(store.title, dict);
    var desc = document.querySelector('meta[name="description"]');
    if (desc && store.desc) desc.setAttribute("content", translate(store.desc, dict));

    document.documentElement.setAttribute("lang", lang);
    current = lang;

    document.querySelectorAll("[data-lang-option]").forEach(function (button) {
      var active = button.getAttribute("data-lang-option") === lang;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });

    document.dispatchEvent(new CustomEvent("insync:languagechange", { detail: { lang: lang } }));
  }

  function stored() {
    try {
      var value = window.localStorage.getItem(STORE_KEY);
      return value === "ro" || value === "en" ? value : null;
    } catch (err) {
      return null;
    }
  }

  function setLang(lang, remember) {
    if (lang !== "ro" && lang !== "en") lang = DEFAULT_LANG;
    apply(lang);
    if (remember !== false) {
      try {
        window.localStorage.setItem(STORE_KEY, lang);
      } catch (err) { /* private browsing - fine, just don't persist */ }
    }
  }

  window.insyncI18n = {
    set: setLang,
    get: function () { return current || DEFAULT_LANG; },
    t: function (text) { return translate(text, current === "ro" ? RO : null); }
  };

  function init() {
    setLang(stored() || DEFAULT_LANG, false);

    document.querySelectorAll("[data-lang-option]").forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        setLang(button.getAttribute("data-lang-option"), true);
      });
    });

    document.documentElement.classList.remove("lang-loading");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // failsafe: never leave the page hidden if something above throws
  window.setTimeout(function () {
    document.documentElement.classList.remove("lang-loading");
  }, 1500);
})();
