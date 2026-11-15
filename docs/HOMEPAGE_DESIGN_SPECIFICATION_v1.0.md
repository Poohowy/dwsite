# Data Wildcat --- Homepage Design Specification v1.0

**Status:** pierwszy projekt do weryfikacji\
**Wersja:** 1.0\
**Dokument nadrzędny:** `PROJECT_OVERVIEW_v1.1.md`\
**Architektura strony:** `HOMEPAGE_ARCHITECTURE_v1.1.md`\
**Zakres:** szczegółowa koncepcja wizualna i treściowa strony głównej
Data Wildcat\
**Referencja wizualna:** Nerve (AeroLaunch) --- główna inspiracja\
**Dodatkowa inspiracja:** Neuron --- ogólny ciemny, nowoczesny charakter

------------------------------------------------------------------------

## 1. Cel dokumentu

Ten dokument przekłada zatwierdzoną architekturę strony głównej na
konkretną propozycję projektu: treści, układ sekcji, hierarchię
informacji, kierunek wizualny i zachowanie interakcji.

Dokument ma umożliwić rozpoczęcie pierwszej implementacji w Astro z
pomocą Claude Code. Nie jest jeszcze ostatecznym design systemem całej
witryny ani specyfikacją podstron Pricer, ArchiFlow i Kontakt.

### Zasada nadrzędna

Strona ma czerpać z Nerve sposób prezentacji: wyrazista typografia,
mocna kompozycja, nowoczesne panele, oszczędne grafiki, subtelne
animacje i dopracowane detale. Nie kopiujemy szablonu jeden do jednego.
Przenosimy jego estetykę na identyfikację i komunikację Data Wildcat.

**Nie projektujemy generycznej strony agencji AI. Projektujemy stronę
partnera technologicznego, który rozwiązuje problemy biznesowe.**

## 2. Kierunek wizualny

### 2.1. Główna inspiracja: Nerve

Nerve powinien być główną referencją dla: - kompozycji hero i mocnej
typografii; - kontrastu pomiędzy dużymi nagłówkami a krótkimi opisami; -
panelowego, uporządkowanego układu sekcji; - wykorzystania ciemnych i
jasnych powierzchni; - technicznych, ale oszczędnych detali; - animacji
i interakcji, które wzmacniają przekaz, a nie odwracają od niego
uwagę; - prezentowania procesów i wartości przez UI-like components
zamiast dużych zdjęć stockowych.

Szczególnie ważne jest to, że hero Nerve buduje charakter głównie
typografią i kompozycją, bez potrzeby używania wielkiego zdjęcia lub
ilustracji. Ten kierunek chcemy zachować.

### 2.2. Rola Neurona

Neuron jest inspiracją uzupełniającą: - ciemniejsza, nowoczesna
estetyka; - wrażenie technologicznej dojrzałości; - wyraziste panele i
kontrasty; - subtelne elementy sugerujące automatyzację i przepływ
informacji.

Nie przejmujemy jego komunikacji „AI automation agency" ani elementów,
które sugerują skalę, liczbę klientów lub wyniki, których Data Wildcat
nie potwierdziło.

### 2.3. Ogólne wrażenie

Strona powinna być: - nowoczesna i technologiczna, ale nie
futurystyczna; - elegancka, uporządkowana i profesjonalna; - ciemna jako
główny kierunek, z jasnymi sekcjami lub panelami dla kontrastu; -
typograficzna, nie fotograficzna; - dynamiczna, ale spokojna; -
wyrazista, ale nie krzykliwa.

Nie chcemy: - neonowych gradientów i świecących obwódek; - dużych zdjęć
stockowych jako głównej atrakcji sekcji; - robotów, mózgów AI,
hologramów i generycznych ilustracji technologicznych; - animacji na
każdym elemencie; - ogromnej liczby kart o identycznym wyglądzie; -
ściany logotypów narzędzi i technologii.

## 3. Logo i paleta kolorystyczna

### 3.1. Kolory odczytane z dostarczonego logo

Logo Data Wildcat zawiera dwa główne kolory:

  Rola w logo           Kolor       Przybliżony HEX    RGB
  --------------------- ----------- ------------------ -----
  Turkus / niebieski    `#1F8CA5`   RGB 31, 140, 165   
  Czerwony / malinowy   `#E4003A`   RGB 228, 0, 58     

Są to przybliżone wartości pobrane z obrazu logo. Przed wdrożeniem warto
sprawdzić oryginalny plik wektorowy, jeśli jest dostępny, aby ustalić
dokładne wartości brandowe.

### 3.2. Proponowana rola kolorów

Nie należy używać obu kolorów logo w równym stopniu na każdym ekranie.
Mogłoby to dać zbyt jaskrawy, „gamingowy" efekt.

Proponowany podział: - **Ciemne tło** --- główna baza strony. - **Biel /
jasny szary** --- podstawowy tekst na ciemnym tle. - **Turkus
`#1F8CA5`** --- kolor wspierający: detale, elementy informacyjne,
wybrane stany UI, drobne akcenty. - **Malinowa czerwień `#E4003A`** ---
mocniejszy kolor akcentowy: główne CTA, podkreślenia, aktywne elementy i
wybrane detale. - **Neutralne szarości** --- obramowania, separatory,
tekst drugorzędny i powierzchnie paneli.

Czerwień powinna być stosowana oszczędnie, ale konsekwentnie. Turkus
może równoważyć ją w elementach technicznych i informacyjnych.

### 3.3. Wstępne tokeny kolorystyczne

Poniższe wartości są propozycją startową do sprawdzenia w przeglądarce,
a nie ostatecznym systemem kolorystycznym.

  Token                      Proponowana wartość   Zastosowanie
  -------------------------- --------------------- ---------------------------------
  `--color-bg`               `#0B0D0F`             główne ciemne tło
  `--color-surface`          `#121619`             karty i panele na ciemnym tle
  `--color-surface-raised`   `#1A2024`             elementy wyżej w hierarchii
  `--color-text`             `#F3F4F4`             główny tekst na ciemnym tle
  `--color-text-muted`       `#A4AAAD`             tekst drugorzędny
  `--color-border`           `#30373B`             separatory i obramowania
  `--color-brand-red`        `#E4003A`             CTA i główny akcent
  `--color-brand-teal`       `#1F8CA5`             akcent pomocniczy
  `--color-light-bg`         `#F1F2F0`             jasne sekcje / panele
  `--color-light-text`       `#151719`             tekst na jasnych powierzchniach

Nie używać czystej czerwieni jako tła dużych powierzchni. Główne CTA
powinno mieć odpowiedni kontrast i czytelny stan hover/focus.

### 3.4. Logo na stronie

-   Używać dostarczonego oryginalnego logo bez zmiany proporcji.
-   Nie odtwarzać logotypu tekstem ani nie zmieniać jego kolorów.
-   Na ciemnym tle sprawdzić czytelność obecnej wersji logo. Jeśli
    potrzebna będzie wersja alternatywna, przygotować ją na bazie
    oryginalnego pliku, a nie przez przypadkowe filtry.
-   W nawigacji logo powinno być wyraźne, ale nie dominować nad hero.

## 4. Typografia

### Kierunek

Typografia ma być jednym z głównych elementów identyfikacji strony ---
podobnie jak w Nerve.

Propozycja: - nowoczesny krój bezszeryfowy o dobrej czytelności; -
mocne, zwarte nagłówki; - neutralny i bardzo czytelny krój dla dłuższych
opisów; - opcjonalny krój monospace wyłącznie dla małych etykiet
technicznych, numerów sekcji lub oznaczeń kalkulatora.

Nie używać zbyt wielu rodzin fontów. Maksymalnie dwie rodziny plus
ewentualny monospace jako detal.

### Hierarchia

-   H1: duży, mocny, najlepiej w 2--4 liniach na desktopie, zależnie od
    szerokości.
-   H2: wyraźny nagłówek sekcji, krótszy niż H1.
-   H3: tytuły kart i podsekcji.
-   Body: wygodny do czytania, bez zbyt małego rozmiaru.
-   Eyebrow / label: małe etykiety nad nagłówkami, np.
    `DATA WILDCAT / WHAT WE DO`.

Dokładne fonty i rozmiary zostaną wybrane podczas implementacji na
podstawie dostępności i wyglądu w przeglądarce.

## 5. Layout i siatka

-   Główny kontener treści powinien mieć ograniczoną maksymalną
    szerokość, aby długie linie tekstu nie były męczące.
-   Na desktopie stosować wyraźną siatkę i równe marginesy boczne.
-   Sekcje powinny mieć odpowiednio dużo pionowej przestrzeni.
-   Karty nie powinny być zbyt zaokrąglone; preferowane umiarkowane
    promienie lub ostrożniejsze, bardziej techniczne krawędzie.
-   Cienkie linie i separatory mogą porządkować treść.
-   Unikać nadmiaru cieni, efektu szkła i dekoracyjnych obwódek.

Wartości spacingu, szerokości kontenera i breakpointy należy ujednolicić
w implementacji jako design tokens.

------------------------------------------------------------------------

# 6. Szczegółowy projekt strony głównej

## 6.1. Nawigacja

### Cel

Zapewnić prosty dostęp do produktów, sekcji procesu i kontaktu.

### Układ desktop

-   Logo po lewej.
-   Nawigacja pośrodku lub po prawej: `Pricer`, `ArchiFlow`,
    `Jak pracujemy?`.
-   Przełącznik `PL / EN`.
-   CTA `Umów konsultację`.

### Układ mobile

-   Logo po lewej.
-   Przycisk menu po prawej.
-   W rozwiniętym menu: linki do produktów, „Jak pracujemy?",
    przełącznik języka i CTA.

### Zachowanie

-   Możliwy sticky header z subtelnym tłem po rozpoczęciu przewijania.
-   Nie używać dużej wysokości nagłówka.
-   Aktywny stan linków i focus muszą być czytelne.
-   CTA prowadzi do `/kontakt/` lub odpowiedniej ścieżki językowej;
    dokładny routing ustali implementacja.

## 6.2. Hero

### Cel

W ciągu kilku sekund wyjaśnić, czym zajmuje się Data Wildcat i zachęcić
do dalszego poznania strony.

### Proponowana treść --- wersja robocza

Eyebrow: `DATA WILDCAT / PARTNER TECHNOLOGICZNY`

H1: **Ty przychodzisz z problemem.\
My znajdujemy rozwiązanie.**

Opis:
`Pomagamy firmom usprawniać procesy, ograniczać powtarzalną pracę i lepiej wykorzystywać technologię. Dobieramy rozwiązania do realnych potrzeb - od automatyzacji i integracji po dedykowane aplikacje i AI.`

CTA primary: **Umów bezpłatną konsultację**

CTA secondary: **Zobacz, jak pracujemy**

### Układ desktop

-   Ciemne tło.
-   Duży nagłówek po lewej lub w centralnej części siatki.
-   Tekst i CTA pod nagłówkiem.
-   Po prawej stronie niewielki, abstrakcyjny element UI/diagramu albo
    kompozycja typograficzna --- nie duża ilustracja.
-   Alternatywnie hero może być bardziej typograficzny i szeroki, jeśli
    prawa grafika nie wnosi realnej wartości.

### Kierunek wizualny

Najbliższy hero Nerve: mocna typografia, dużo oddechu, oszczędny akcent
koloru, subtelny detal techniczny. Czerwień z logo może podkreślić
fragment nagłówka lub mały element kompozycji; nie należy kolorować
całego H1.

### Interakcje

-   Wejście treści z delikatnym fade/translate.
-   Opcjonalny subtelny ruch w elemencie graficznym.
-   Brak autoplay video i ciężkich efektów WebGL.

### Uwagi

Hero ma być zrozumiały bez grafiki. Jeśli element po prawej nie wzmacnia
przekazu, lepiej z niego zrezygnować.

## 6.3. Sekcja „Czy brzmi to znajomo?"

### Cel

Pokazać konkretne problemy, w których klient może rozpoznać własną
firmę.

### Proponowany nagłówek

**W Twojej firmie też tak to wygląda?**

Tekst wprowadzający:
`W wielu firmach wartościowy czas zespołu znika na czynnościach, które powtarzają się każdego dnia. Informacje są rozproszone, dane trzeba przepisywać, a proste zadania zajmują więcej czasu, niż powinny.`

### Karty problemów --- treści robocze

1.  **Oferty i wyceny**\
    `Przygotowanie każdej oferty oznacza ponowne zbieranie informacji, przepisywanie danych i pracę z podobnymi dokumentami.`

2.  **Maile i komunikacja**\
    `Ważne ustalenia giną w skrzynkach, a informacje trzeba ręcznie przenosić między wiadomościami i systemami.`

3.  **Dokumenty**\
    `Znalezienie właściwego pliku, aktualnej wersji lub konkretnej informacji zajmuje zbyt dużo czasu.`

4.  **Raportowanie**\
    `Zanim powstanie raport, ktoś musi zebrać dane z kilku narzędzi i arkuszy.`

5.  **Powtarzalne czynności**\
    `Zespół codziennie wykonuje zadania według tego samego schematu, zamiast poświęcać czas na ważniejszą pracę.`

6.  **Brak integracji**\
    `Systemy nie wymieniają danych, więc pracownicy stają się ręcznym łącznikiem między nimi.`

7.  **Kontrola projektów**\
    `Trudno szybko sprawdzić, co jest zrobione, co się opóźnia i gdzie znajdują się potrzebne dokumenty.`

8.  **Niepewność dotycząca AI**\
    `Wszyscy mówią o AI, ale nie wiadomo, czy w Twojej firmie rozwiąże konkretny problem, czy tylko doda kolejne narzędzie.`

### Układ

-   Sekcja na ciemnej lub kontrastującej powierzchni.
-   8 kart w siatce desktopowej, np. 4 × 2 lub 3 kolumny z asymetrycznym
    ostatnim rzędem --- do oceny podczas implementacji.
-   Na tabletach 2 kolumny, na telefonach 1 kolumna.
-   Każda karta: mały numer lub prosty znak graficzny, tytuł i opis.
-   Nie dodawać osobnych CTA do każdej karty.

### Interakcje

-   Delikatny hover: zmiana obramowania, tła lub małego akcentu.
-   Nie ukrywać tekstu w hover ani w animacji.

## 6.4. Kalkulator kosztu powtarzalnej pracy

### Cel

Przełożyć problem ręcznych, powtarzalnych czynności na zrozumiałe
liczby.

### Nagłówek

**Ile kosztuje Twoją firmę powtarzalna praca?**

Tekst:
`Sprawdź, ile czasu i pieniędzy Twój zespół przeznacza na zadania, które być może można uprościć lub zautomatyzować.`

### Layout

Inspiracja bezpośrednio z dostarczonego zrzutu kalkulatora Nerve: - Dwie
kolumny na desktopie. - Lewy panel jasny, prawy panel ciemny. - Po lewej
trzy poziome suwaki. - Po prawej trzy duże wartości wynikowe. - Na
mobile układ pionowy: panel suwaków, potem wyniki.

### Lewy panel --- suwaki

**01 --- Osoby wykonujące powtarzalną pracę** - Minimum: 2 osoby. -
Maksimum: 250 osób. - Wartość początkowa do ustalenia przy
implementacji; propozycja: 25.

**02 --- Powtarzalna praca na osobę / tydzień** - Minimum: 1 godzina. -
Maksimum: 20 godzin. - Wartość początkowa: 6 godzin.

**03 --- Średni koszt godziny pracownika** - Minimum: 20. - Maksimum:
400. - Wartość początkowa: 55. - Waluta: PLN w polskiej wersji, USD w
angielskiej.

Wartości początkowe są propozycją, a nie twierdzeniem o typowym koszcie
lub typowej firmie. Można je zmienić po pierwszym teście UX.

### Prawy panel --- wyniki

Nad wynikami mała etykieta: `SZACOWANY WPŁYW`

Trzy wartości:

1.  **Godziny odzyskane / tydzień**\
    Wartość: liczba osób × godziny na osobę w tygodniu.

2.  **Szacunkowy koszt / miesiąc**\
    Koszt tygodniowy × 52 / 12.

3.  **Szacunkowy koszt / rok**\
    Koszt tygodniowy × 52.

### Waluty

-   PL: PLN / zł.
-   EN: USD / \$.
-   Nie przeliczać kursu walutowego. W angielskiej wersji użytkownik
    wprowadza koszt wyrażony w USD.

### Opis pod wynikami

`To szacunek oparty na podanych wartościach. Rzeczywiste możliwości ograniczenia kosztów zależą od procesu, zakresu zmian i sposobu wdrożenia.`

### Zachowanie

-   Wszystkie wyniki aktualizują się natychmiast podczas przesuwania
    suwaków.
-   Nie ma ręcznego wpisywania wartości.
-   Pokazać aktualną wartość oraz minimum i maksimum każdego suwaka.
-   Suwaki powinny być obsługiwane klawiaturą i dotykiem.
-   Zapewnić czytelne etykiety dostępności.
-   Nie animować cyfr zbyt długo; aktualizacja ma być szybka i czytelna.

### Ważne ograniczenie komunikacyjne

Nie używać określenia „oszczędności, które uzyskasz". Kalkulator
pokazuje szacunkowy koszt czasu poświęcanego na powtarzalną pracę, a nie
gwarantowany zwrot z wdrożenia.

## 6.5. Sekcja „Dobieramy rozwiązanie do problemu"

### Cel

Wyjaśnić, że Data Wildcat nie zaczyna od sprzedaży konkretnej
technologii.

### Proponowany nagłówek

**Nie zaczynamy od technologii. Zaczynamy od problemu.**

Tekst:
`Każda firma działa inaczej. Dlatego najpierw poznajemy sposób pracy i szukamy miejsca, w którym można coś uprościć. Dopiero później dobieramy rozwiązanie - takie, które ma sens biznesowy i technologiczny.`

### Cztery obszary

**Automatyzacja procesów**\
`Ograniczamy ręczne, powtarzalne zadania i usprawniamy przepływ pracy.`

**Sztuczna inteligencja**\
`Wykorzystujemy AI tam, gdzie pomaga analizować informacje, pracować z dokumentami lub wspierać decyzje.`

**Dedykowane aplikacje**\
`Tworzymy narzędzia dopasowane do procesów, których nie obsługują dobrze gotowe rozwiązania.`

**Integracje systemów**\
`Łączymy używane narzędzia, aby informacje przepływały między nimi bez ręcznego kopiowania.`

### Mocny komunikat pomocniczy

**Nie każda firma potrzebuje AI. Każda potrzebuje rozwiązania, które ma
sens.**

### Układ

-   Nagłówek i opis w jednej części.
-   Cztery obszary w siatce lub jako cztery uporządkowane bloki.
-   Wyróżniony komunikat może być osobnym pasem lub typograficznym
    akcentem.
-   Bez listy narzędzi i logotypów.

## 6.6. Sekcja „Przykładowe rozwiązania"

### Cel

Pokazać dwa konkretne produkty Data Wildcat.

### Nagłówek

**Od problemu do działającego rozwiązania.**

Tekst:
`Zobacz przykłady narzędzi, które rozwijamy, aby usprawniać konkretne procesy biznesowe.`

### Karta Pricer

Etykieta statusu: `GOTOWY PRODUKT`

Tytuł: **Pricer**

Opis:
`Automatyzacja przygotowywania ofert na podstawie wiadomości i informacji otrzymanych od klienta. Mniej ręcznego przepisywania, bardziej uporządkowany proces przygotowania wyceny.`

CTA: **Poznaj Pricer**

Wizualizacja: - Preferowany zrzut interfejsu, fragment wygenerowanej
oferty lub oszczędna makieta. - Nie używać generycznej grafiki AI.

### Karta ArchiFlow

Etykieta statusu: `W TRAKCIE ROZWOJU`

Tytuł: **ArchiFlow**

Opis:
`System rozwijany z myślą o biurach architektonicznych, który ma wspierać organizację projektów, harmonogramów, zespołu i dokumentacji.`

CTA: **Poznaj ArchiFlow**

Wizualizacja: - Zrzut rzeczywistego interfejsu lub makieta oparta na
aktualnym stanie produktu. - Nie sugerować, że wszystkie planowane
funkcje są już dostępne.

### Układ

-   Dwie duże karty o wyraźnej hierarchii.
-   Możliwy układ naprzemienny: tekst i wizualizacja w pierwszej karcie,
    odwrócony w drugiej.
-   Na mobile układ pionowy.
-   Status produktu widoczny, ale nie dominujący.

## 6.7. Sekcja „Jak pracujemy?"

### Cel

Pokazać prosty, zrozumiały proces współpracy.

### Nagłówek

**Od pierwszej rozmowy do rozwiązania.**

Tekst:
`Nie musisz wiedzieć, jakiej technologii potrzebujesz. Wystarczy, że opowiesz nam, co chcesz usprawnić.`

### Etapy

**01 --- Rozmawiamy**\
`Zaczynamy od bezpłatnej konsultacji i poznania problemu.`

**02 --- Poznajemy proces**\
`Sprawdzamy, jak wygląda obecna praca i gdzie pojawiają się trudności.`

**03 --- Proponujemy rozwiązanie**\
`Przedstawiamy możliwe podejście, zakres i kolejne kroki.`

**04 --- Budujemy i wdrażamy**\
`Tworzymy rozwiązanie i pomagamy uruchomić je w firmie.`

**05 --- Rozwijamy**\
`W razie potrzeby rozwijamy rozwiązanie wraz ze zmieniającymi się potrzebami.`

### Układ

-   Timeline lub pięć kroków połączonych linią.
-   Na desktopie poziomo, na mobile pionowo.
-   Każdy krok ma numer, tytuł i krótki opis.
-   Subtelne ujawnianie kolejnych etapów podczas scrollowania; bez
    wymuszania scroll-jackingu.

### CTA

Po sekcji można umieścić jedno CTA: **Porozmawiajmy o Twoim problemie**
→ Kontakt.

## 6.8. Sekcja „Dopasowujemy rozwiązanie do Twojej firmy"

### Cel

Pokazać, że Data Wildcat potrafi dobrać środowisko i formę rozwiązania
do wymagań firmy.

### Nagłówek

**Technologia powinna pasować do Twojej firmy. Nie odwrotnie.**

Tekst:
`Niezależnie od tego, czy potrzebujesz prostej automatyzacji, dedykowanej aplikacji czy rozwiązania wykorzystującego AI, dobieramy sposób wdrożenia do Twoich procesów i warunków.`

### Cztery obszary

**Chmura**\
`Możemy wykorzystać AWS, Azure lub Google Cloud, jeśli chmura jest właściwym wyborem dla danego rozwiązania.`

**Środowisko lokalne**\
`Rozwiązania mogą działać również w infrastrukturze Twojej firmy, jeśli wymagają tego procesy lub zasady organizacji.`

**AI i automatyzacja**\
`Od prostych przepływów pracy po rozwiązania wykorzystujące modele AI — wybieramy poziom złożoności odpowiedni do zadania.`

**Aplikacje i integracje**\
`Budujemy narzędzia i łączymy systemy, aby lepiej wspierały codzienną pracę.`

### Układ

-   Cztery bloki w siatce.
-   Można dodać niewielkie abstrakcyjne schematy lub etykiety.
-   Nazwy dostawców chmurowych jako drugorzędne oznaczenia, nie wielkie
    logotypy.
-   Nie dodawać technicznego diagramu architektury, który będzie
    niezrozumiały dla odbiorcy.

## 6.9. Sekcja „Dlaczego warto z nami pracować?"

### Cel

Budować zaufanie przez sposób działania firmy i przedstawienie zespołu.

### Nagłówek

**Technologia to narzędzie. Najważniejsze jest to, co dzięki niej
zmienisz.**

### Argumenty

**Najpierw słuchamy**\
`Zanim zaproponujemy rozwiązanie, chcemy zrozumieć, jak działa Twoja firma.`

**Bez niepotrzebnego żargonu**\
`Wyjaśniamy możliwości i ograniczenia prostym językiem.`

**Bez wciskania technologii**\
`Nie proponujemy AI ani skomplikowanego systemu, jeśli prostsze rozwiązanie wystarczy.`

**Jasne zasady współpracy**\
`Wiesz, co proponujemy, dlaczego i jakie są kolejne kroki.`

### Zespół

Nagłówek pomocniczy: **Poznaj ludzi, z którymi będziesz pracować.**

Tekst:
`Data Wildcat tworzy zespół z kilkunastoletnim doświadczeniem w branży, szczególnie w przetwarzaniu dużych zbiorów danych i automatyzacji procesów.`

Układ: - Trzy portretowe zdjęcia członków zespołu. - Krótkie imię i
nazwisko oraz zatwierdzony opis kompetencji --- dane do uzupełnienia. -
Bez wymyślonych stanowisk i tytułów. - Zdjęcia w umiarkowanej wielkości,
nie jako pełnoekranowy blok.

## 6.10. FAQ

### Cel

Usunąć ostatnie bariery przed kontaktem.

### Proponowane pytania i odpowiedzi --- szkic

**Czy moja firma musi korzystać z AI, żeby współpracować z Data
Wildcat?**\
Nie. AI jest tylko jednym z narzędzi. Czasami lepszym rozwiązaniem
będzie automatyzacja, integracja systemów lub dedykowana aplikacja.
Zaczynamy od problemu i dobieramy do niego odpowiednie podejście.

**Czy współpracujecie z małymi firmami?**\
Tak. Koncentrujemy się na potrzebach małych i średnich przedsiębiorstw.
Rozwiązanie powinno być dopasowane do skali i możliwości firmy.

**Nie wiem dokładnie, czego potrzebuję. Czy mimo to mogę się odezwać?**\
Oczywiście. Nie musisz znać technologii ani gotowego rozwiązania.
Wystarczy, że opowiesz nam, co chciałbyś usprawnić.

**Jak wygląda pierwsza konsultacja?**\
To bezpłatna rozmowa, podczas której poznajemy problem i obecny sposób
pracy. Wspólnie zastanawiamy się, jakie mogą być kolejne kroki.

**Ile kosztuje stworzenie rozwiązania?**\
Koszt zależy od problemu, zakresu i złożoności projektu. Po poznaniu
potrzeb możemy zaproponować odpowiednie podejście i określić zakres
prac.

**Czy rozwiązanie musi działać w chmurze?**\
Nie. W zależności od wymagań może działać w chmurze lub w środowisku
lokalnym firmy.

**Co z bezpieczeństwem danych?**\
Sposób przetwarzania i przechowywania danych dobieramy do wymagań
projektu i środowiska klienta. Konkretne zasady bezpieczeństwa ustalamy
przed wdrożeniem.

**Czy możecie połączyć rozwiązanie z systemami, których już używamy?**\
To jeden z obszarów, którymi się zajmujemy. Możliwość integracji zależy
od konkretnych systemów i dostępnych sposobów wymiany danych.

### Układ i interakcje

-   Akordeon z pytaniami.
-   Domyślnie odpowiedzi zwinięte.
-   Otwieranie kliknięciem lub klawiaturą.
-   Nie otwierać automatycznie wielu odpowiedzi.
-   Zachować czytelne focus i stany aktywne.

Odpowiedzi są szkicem do zatwierdzenia. Nie należy dodawać szczegółowych
obietnic dotyczących bezpieczeństwa, terminów czy cen bez potwierdzenia.

## 6.11. Końcowe CTA

### Nagłówek

**Masz problem, który można rozwiązać lepiej? Porozmawiajmy.**

### Tekst

`Opowiedz nam, co zajmuje czas Twojego zespołu lub utrudnia codzienną pracę. Wspólnie sprawdzimy, czy możemy to usprawnić.`

### CTA

**Umów bezpłatną konsultację**

Link do podstrony Kontakt.

### Układ

-   Mocna, kontrastowa sekcja.
-   Duży nagłówek i krótki tekst.
-   Jeden główny przycisk.
-   Bez formularza.

## 6.12. Footer

Proponowane elementy: - Logo. - Krótkie hasło: „Ty przychodzisz z
problemem. My znajdujemy rozwiązanie." - Linki: Pricer, ArchiFlow, Jak
pracujemy?, Kontakt. - Adres e-mail. - LinkedIn --- tylko jeśli adres
profilu zostanie potwierdzony. - Polityka prywatności. - Informacja o
prawach autorskich. - PL / EN, jeśli nie będzie wystarczająco widoczne w
nawigacji.

------------------------------------------------------------------------

## 7. Responsywność

### Desktop

-   Hero może mieć układ dwukolumnowy, ale tekst pozostaje dominujący.
-   Karty problemów w 3--4 kolumnach zależnie od szerokości.
-   Kalkulator w dwóch panelach obok siebie.
-   Timeline procesu poziomy.
-   Produkty jako dwie duże karty lub naprzemienne bloki.

### Tablet

-   Zmniejszyć liczbę kolumn.
-   Kalkulator może nadal być dwukolumnowy tylko wtedy, gdy suwaki i
    wyniki zachowują czytelność; w przeciwnym razie przejść do układu
    pionowego.
-   Timeline może przejść w układ pionowy lub dwurzędowy.

### Mobile

-   Jedna kolumna.
-   Hero bez przeładowania i bez małych tekstów.
-   Karty problemów jedna pod drugą.
-   Kalkulator: suwaki przed wynikami.
-   Produkty jeden pod drugim.
-   Proces pionowy.
-   CTA szerokie i łatwe do kliknięcia.
-   Menu w formie prostego panelu mobilnego.

Nie ustalać breakpointów na sztywno wyłącznie na podstawie popularnych
urządzeń. Dostosować je do momentu, w którym układ przestaje być
czytelny.

## 8. Animacje i mikrointerakcje

Animacje powinny być inspirowane płynnym, nowoczesnym charakterem Nerve,
ale używane oszczędnie.

Dozwolone i rekomendowane: - subtelne wejście nagłówków i treści przy
pierwszym pojawieniu się; - delikatna zmiana koloru lub obramowania kart
na hover; - płynne aktualizowanie wartości kalkulatora; - lekkie
przejścia w menu i akordeonie FAQ; - subtelne podkreślenie aktywnego
etapu timeline.

Unikać: - długich animacji blokujących treść; - scroll-jackingu; -
automatycznie odtwarzanych filmów; - efektów paralaksy na dużych
powierzchniach; - intensywnego ruchu dekoracyjnych elementów; -
animowania każdej karty niezależnie i w różnym czasie.

Wszystkie istotne treści muszą być dostępne przy
`prefers-reduced-motion: reduce`.

## 9. SEO, semantyka i wydajność

-   Jedno H1 na stronie.
-   Sekcje z logiczną hierarchią H2/H3.
-   Unikalny title i meta description dla wersji PL i EN.
-   Poprawne canonical i hreflang dla wersji językowych.
-   Opisy alternatywne dla zdjęć zespołu i istotnych grafik.
-   Logo jako SVG lub zoptymalizowany format rastrowy, jeśli dostępny
    jest tylko taki plik.
-   Nie ładować ciężkich bibliotek animacji, jeśli prostsze rozwiązanie
    wystarczy.
-   Kalkulator powinien działać po stronie klienta bez potrzeby
    backendu.
-   Ograniczyć liczbę zewnętrznych skryptów.
-   Zadbać o stabilność layoutu i szybkie wyświetlenie treści.

## 10. Wymagania dla pierwszej implementacji

Aby możliwe było przygotowanie pierwszej wersji strony jeszcze dziś,
implementację należy podzielić na priorytety.

### P0 --- wymagane w pierwszej wersji

-   Nawigacja i routing strony głównej.
-   Hero z zatwierdzonym hasłem i CTA.
-   Sekcja problemów (osiem kart).
-   Kalkulator z trzema suwakami i poprawnymi obliczeniami.
-   Sekcja „Dobieramy rozwiązanie do problemu".
-   Karty Pricer i ArchiFlow.
-   Sekcja „Jak pracujemy?".
-   Sekcja „Dopasowujemy rozwiązanie do Twojej firmy".
-   Sekcja zespołu i powodów współpracy.
-   FAQ.
-   Końcowe CTA.
-   Footer.
-   Responsywność desktop/mobile.
-   Spójny ciemny design inspirowany Nerve i kolorami Data Wildcat.

### P1 --- można dopracować po pierwszym podglądzie

-   Subtelne animacje wejścia.
-   Zaawansowane stany hover.
-   Drobne dekoracyjne elementy typograficzne.
-   Dopracowanie mikrointerakcji.
-   Finalne wartości fontów, odstępów i breakpointów.

### P2 --- nie blokuje pierwszej wersji

-   Pełne dopracowanie angielskich tekstów, jeśli na pierwszą
    prezentację wystarczy polska wersja.
-   Zaawansowane animacje.
-   Dodatkowe warianty wizualne i eksperymenty z układem.

Nie pomijać żadnej sekcji P0 tylko po to, aby dodać bardziej efektowne
animacje. Pierwsza wersja ma być kompletna strukturalnie i responsywna,
nawet jeśli część detali będzie później poprawiana.

## 11. Instrukcje dla Claude Code

Przy implementacji: 1. Najpierw przeanalizuj istniejący projekt Astro i
jego strukturę. 2. Nie usuwaj ani nie nadpisuj istniejących plików bez
sprawdzenia ich zawartości. 3. Wykorzystaj istniejące komponenty i
style, jeśli są dobrej jakości. 4. Zaimplementuj stronę główną zgodnie z
tym dokumentem i nadrzędnym Project Overview. 5. Nie kopiuj bezpośrednio
kodu ani płatnych zasobów Nerve lub Neuron. Traktuj je jako referencje
wizualne. 6. Użyj dostarczonego logo Data Wildcat i zachowaj jego
proporcje. 7. Nie wymyślaj danych, referencji, klientów, statystyk ani
funkcji produktów. 8. Nie dodawaj formularza kontaktowego. 9. Nie
dodawaj dodatkowych CTA poza ustalonymi miejscami. 10. Zadbaj o
responsywność i dostępność od początku, a nie jako osobny etap po
desktopie. 11. Utrzymuj implementację prostą. Nie dodawaj biblioteki do
każdej drobnej animacji. 12. Po ukończeniu pierwszego przebiegu uruchom
projekt, sprawdź build i napraw błędy. 13. Przed zakończeniem przedstaw
listę zaimplementowanych elementów, znanych ograniczeń i rzeczy
wymagających weryfikacji.

### Ważne dla treści

Teksty w tym dokumencie są pierwszym draftem copywritingu. Można
poprawić drobne sformułowania dla naturalności i długości, ale nie
zmieniać sensu, obietnic ani pozycjonowania bez uzgodnienia.

## 12. Otwarte kwestie poza zakresem tej specyfikacji

Nie blokują pierwszej wersji strony głównej: - finalny wybór fontów; -
dokładne breakpointy; - finalne zdjęcia i biogramy członków zespołu; -
ostateczne wartości początkowe kalkulatora po teście; - finalna
angielska wersja copywritingu; - szczegóły polityki prywatności i
analityki; - szczegółowa treść i UI podstron Pricer, ArchiFlow i
Kontakt.

------------------------------------------------------------------------

## 13. Podsumowanie kierunku

Strona główna Data Wildcat ma łączyć mocną, nowoczesną estetykę Nerve z
kolorami i charakterem logo Data Wildcat.

Ma być ciemna, typograficzna, elegancka i technologiczna, ale nie
przeładowana grafikami. Jej treść ma prowadzić od rozpoznania
codziennych problemów, przez zrozumienie ich kosztu i możliwych
rozwiązań, do poznania zespołu i kontaktu.

**Nie sprzedajemy technologii dla samej technologii. Pokazujemy, że
rozumiemy problem i potrafimy znaleźć rozwiązanie, które ma sens.**
