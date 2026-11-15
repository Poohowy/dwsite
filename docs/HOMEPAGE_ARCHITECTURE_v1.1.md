# Data Wildcat --- Homepage Architecture v1.0

**Status:** pierwszy draft do weryfikacji\
**Wersja:** 1.0\
**Dokument nadrzędny:** `PROJECT_OVERVIEW_v1.1.md`\
**Zakres:** architektura i logika strony głównej Data Wildcat\
**Język dokumentu:** polski\
**Docelowe języki strony:** polski i angielski

------------------------------------------------------------------------

## 1. Cel dokumentu

Dokument określa proponowaną strukturę strony głównej Data Wildcat:
kolejność sekcji, ich cel, kluczowy przekaz, zawartość, sugerowany układ
oraz działania dostępne dla odwiedzającego.

To dokument architektury informacji i doświadczenia użytkownika (UX), a
nie finalny projekt graficzny ani gotowy copywriting. Konkretne
nagłówki, teksty, wartości liczbowe, animacje i szczegóły interakcji
zostaną dopracowane w kolejnych etapach.

Wszystkie założenia muszą być zgodne z `PROJECT_OVERVIEW_v1.1.md`. W
razie konfliktu pierwszeństwo ma zatwierdzony Project Overview.

## 2. Rola strony głównej

Strona główna ma w prosty sposób przeprowadzić potencjalnego klienta
przez następującą ścieżkę:

1.  Zrozumieć, czym zajmuje się Data Wildcat.
2.  Rozpoznać w opisanych sytuacjach problemy swojej firmy.
3.  Uświadomić sobie, że te problemy mogą generować realny koszt czasu i
    pracy.
4.  Zrozumieć, że istnieją różne sposoby rozwiązania problemu i nie
    zawsze potrzebne jest AI.
5.  Zobaczyć konkretne przykłady rozwiązań Data Wildcat.
6.  Dowiedzieć się, jak wygląda współpraca.
7.  Poznać zespół i powody, dla których warto z nim porozmawiać.
8.  Uzyskać odpowiedzi na najważniejsze pytania.
9.  Przejść do kontaktu i umówić bezpłatną konsultację.

### Główna konwersja

Najważniejszym działaniem jest przejście do podstrony **Kontakt** przez
CTA:

**„Umów bezpłatną konsultację"**

Nie planujemy formularza kontaktowego. Podstrona Kontakt ma prezentować
adres e-mail i numer telefonu.

### Zasada projektowa

Strona ma sprzedawać przede wszystkim zrozumienie problemów klienta i
sposób współpracy z Data Wildcat. Nie powinna być katalogiem technologii
ani prezentacją wszystkich narzędzi, z których korzysta zespół.

## 3. Proponowana struktura strony

Poniższa kolejność jest rekomendacją do zatwierdzenia. Zawiera sekcje
uzgodnione wcześniej oraz nowy kalkulator kosztu powtarzalnej pracy.

  ---------------------------------------------------------------------
                    Kolejność Sekcja               Główna funkcja
  --------------------------- -------------------- --------------------
                            0 Nawigacja            Orientacja, dostęp
                                                   do produktów i
                                                   kontaktu

                            1 Hero                 Natychmiastowe
                                                   wyjaśnienie, czym
                                                   jest Data Wildcat

                            2 Czy brzmi to         Rozpoznanie
                              znajomo?             problemów klienta

                            3 Kalkulator kosztu    Uświadomienie skali
                              powtarzalnej pracy   kosztu ręcznych
                                                   czynności

                            4 Dobieramy            Wyjaśnienie
                              rozwiązanie do       filozofii i
                              problemu             możliwych podejść

                            5 Przykładowe          Prezentacja Pricer i
                              rozwiązania          ArchiFlow

                            6 Jak pracujemy?       Zmniejszenie
                                                   niepewności
                                                   dotyczącej
                                                   współpracy

                            7 Dopasowujemy         Pokazanie możliwości
                              rozwiązanie do       technicznych i
                              Twojej firmy         elastyczności
                                                   wdrożenia

                            8 Dlaczego warto z     Budowanie zaufania i
                              nami pracować?       przedstawienie
                                                   zespołu

                            9 FAQ                  Rozwianie
                                                   pozostałych obaw

                           10 Końcowe CTA          Zachęcenie do
                                                   kontaktu

                           11 Footer               Nawigacja, produkty
                                                   i dane firmy
  ---------------------------------------------------------------------

Kalkulator umieszczamy bezpośrednio po sekcji problemowej. Dzięki temu
najpierw pokazujemy sytuacje znane odbiorcy, a następnie pozwalamy mu
oszacować ich potencjalny koszt. Dopiero później przedstawiamy możliwe
sposoby działania.

------------------------------------------------------------------------

## 4. Nawigacja

### Cel

Umożliwić szybkie przejście do najważniejszych obszarów witryny bez
odciągania uwagi od głównego przekazu.

### Proponowane elementy

-   Logo Data Wildcat --- powrót na stronę główną.
-   Rozwiązania / Produkty --- odnośniki do Pricer i ArchiFlow.
-   Jak pracujemy --- przewinięcie do odpowiedniej sekcji strony
    głównej.
-   O nas --- przewinięcie do sekcji zespołu / „Dlaczego warto z nami
    pracować?".
-   Kontakt --- przejście do podstrony Kontakt.
-   Przełącznik języka PL / EN.
-   Główne CTA: „Umów bezpłatną konsultację".

### Zachowanie

-   Nawigacja powinna być czytelna i dostępna podczas przeglądania
    strony; sticky header można zastosować, jeśli nie będzie nadmiernie
    zajmował miejsca.
-   Na urządzeniach mobilnych menu powinno być proste i wygodne w
    obsłudze.
-   CTA powinno być widoczne, ale nie może konkurować z każdym innym
    elementem.
-   Logo prowadzi do odpowiedniej wersji językowej strony głównej.

**Do dopracowania później:** dokładne nazwy pozycji menu, zachowanie
sticky headera i wygląd menu mobilnego.

## 5. Sekcja 1 --- Hero

### Cel

W ciągu kilku sekund odpowiedzieć na pytania: - Czym zajmuje się Data
Wildcat? - Komu pomaga? - Co powinienem zrobić, jeśli mam problem do
rozwiązania?

### Główny przekaz

**„Ty przychodzisz z problemem. My znajdujemy rozwiązanie."**

### Proponowana zawartość

-   Główne hasło.
-   Krótki opis wyjaśniający, że Data Wildcat pomaga firmom usprawniać
    procesy, automatyzować powtarzalną pracę i dobierać rozwiązania
    technologiczne do konkretnych potrzeb.
-   Główne CTA: „Umów bezpłatną konsultację".
-   Drugie CTA: „Zobacz, jak pracujemy".

### Proponowany układ

-   Mocna typografia i wyraźna hierarchia.
-   Duży nagłówek, krótki tekst i dwa czytelne działania.
-   Ograniczona liczba elementów dekoracyjnych.
-   Bez dużego zdjęcia stockowego lub dominującej ilustracji.
-   Można rozważyć subtelny element graficzny, typograficzny lub
    interfejsowy, który podkreśla ideę łączenia problemu z rozwiązaniem.

Hero powinien czerpać z referencji Nerve --- szczególnie z kompozycji i
sposobu budowania efektu bez dużego zdjęcia --- oraz z ogólnego
nowoczesnego, ciemnego charakteru Neurona.

### Interakcje

-   Główne CTA prowadzi do podstrony Kontakt.
-   Drugie CTA przewija do sekcji „Jak pracujemy?".
-   Ewentualna animacja wejścia powinna być subtelna i nie opóźniać
    dostępu do treści.

### Czego unikać

-   Długiego opisu firmy.
-   Listy technologii i logotypów narzędzi w hero.
-   Ogólnych haseł typu „Transformujemy biznes dzięki AI".
-   Automatycznie odtwarzanych filmów i ciężkich animacji.

------------------------------------------------------------------------

## 6. Sekcja 2 --- Czy brzmi to znajomo?

### Cel

Sprawić, żeby odwiedzający rozpoznał sytuacje występujące w jego własnej
firmie. To jedna z najważniejszych sekcji całej strony.

### Proponowana zawartość

Wprowadzenie krótkim tekstem i zestaw konkretnych problemów:

1.  **Oferty i wyceny** --- ręczne przepisywanie informacji i
    powtarzanie podobnych czynności przy każdej ofercie.
2.  **Maile i komunikacja** --- ważne informacje rozproszone po wielu
    wątkach i ręcznie przenoszone między narzędziami.
3.  **Dokumenty** --- trudności ze znalezieniem właściwego pliku, wersji
    lub konkretnej informacji.
4.  **Raportowanie** --- czasochłonne zbieranie danych z różnych
    systemów i arkuszy.
5.  **Powtarzalne czynności** --- zadania wykonywane codziennie według
    tego samego schematu.
6.  **Brak integracji** --- systemy, które nie wymieniają między sobą
    informacji.
7.  **Kontrola projektów** --- trudności z monitorowaniem zadań,
    terminów i dokumentów.
8.  **Niepewność dotycząca AI** --- brak pewności, czy AI rzeczywiście
    może pomóc i czy warto w nią inwestować.

### Proponowany układ

-   Sekcja z wyraźnym nagłówkiem i krótkim wprowadzeniem.
-   Karty lub inny uporządkowany układ treści.
-   Każdy problem powinien mieć krótki, zrozumiały tytuł i jedno--dwa
    zdania opisujące sytuację.
-   Nie wszystkie karty muszą mieć identyczną wagę wizualną; można
    wyróżnić kilka najważniejszych, ale bez tworzenia przypadkowej
    hierarchii.
-   Na telefonie układ powinien pozostać czytelny i nie wymagać
    poziomego przewijania.

### Interakcje

Nie są wymagane. Możliwe są delikatne efekty hover lub wejścia elementów
podczas przewijania, ale treść musi być dostępna bez animacji.

### Ważne

Nie przedstawiać problemów jako ośmiu usług Data Wildcat. To mają być
sytuacje rozpoznawane przez klienta, a nie katalog produktów.

------------------------------------------------------------------------

## 7. Sekcja 3 --- Kalkulator kosztu powtarzalnej pracy

### Cel

Pomóc odwiedzającemu oszacować, ile czasu i pieniędzy firma przeznacza
na powtarzalne czynności. Kalkulator ma przełożyć abstrakcyjny problem
na konkretne liczby.

To element interaktywny inspirowany kalkulatorem ROI z szablonu Nerve.

### Dane wejściowe

Użytkownik ustawia trzy wartości za pomocą suwaków:

1.  **Liczba osób** wykonujących powtarzalne czynności.
2.  **Liczba godzin dziennie** poświęcanych przez jedną osobę na te
    czynności.
3.  **Koszt jednej godziny pracy**.

Każdy suwak powinien mieć widoczną aktualną wartość liczbową. Warto
rozważyć możliwość ręcznego wpisania wartości, jeśli nie skomplikuje to
interfejsu.

### Wyniki

Wyniki aktualizują się na bieżąco po zmianie suwaków:

-   **Godziny tygodniowo** --- łączny czas poświęcany przez wszystkie
    wskazane osoby.
-   **Koszt miesięczny** --- szacunkowy koszt powtarzalnej pracy.
-   **Koszt roczny** --- szacunkowy koszt powtarzalnej pracy.

### Proponowany układ

-   Nagłówek i krótkie wyjaśnienie po lewej lub nad kalkulatorem.
-   Panel wejściowy z trzema suwakami.
-   Wyraźny panel wyników po prawej stronie na desktopie.
-   Na urządzeniach mobilnych: dane wejściowe, a następnie wyniki.
-   Najważniejsze liczby powinny być wizualnie czytelne, ale bez
    przesadnych efektów.

### Logika i uczciwość prezentacji

Kalkulator pokazuje **szacunkowy koszt czasu poświęcanego na powtarzalne
czynności**, a nie gwarantowane oszczędności możliwe do uzyskania po
wdrożeniu rozwiązania.

Nie wolno sugerować, że Data Wildcat odzyska 100% wskazanego kosztu.
Warto dodać krótką informację, że wynik jest szacunkiem opartym na
danych wprowadzonych przez użytkownika.

### Założenia wymagające decyzji w specyfikacji UX

-   Ile dni roboczych przyjmujemy w tygodniu.
-   Jak przeliczamy średni miesiąc.
-   Jaki zakres i wartości początkowe mają suwaki.
-   Czy koszt godziny jest podawany jako kwota brutto, pełny koszt
    pracodawcy czy inna wartość.
-   Jak prezentujemy walutę (domyślnie PLN w polskiej wersji,
    odpowiednia waluta lub neutralna prezentacja w wersji angielskiej
    --- do ustalenia).
-   Czy użytkownik może wpisać wartość ręcznie oprócz przesuwania
    suwaka.

Nie wpisywać arbitralnych założeń jako faktów bez ich zatwierdzenia.

### CTA

Można rozważyć krótkie przejście do kontaktu pod wynikami, np.
zaproszenie do rozmowy o tym, które czynności w firmie można uprościć.
Nie powinno ono sugerować, że wyliczona kwota jest obietnicą
oszczędności.

------------------------------------------------------------------------

## 8. Sekcja 4 --- Dobieramy rozwiązanie do problemu

### Cel

Wyjaśnić najważniejszą zasadę działania Data Wildcat: nie zaczynamy od
technologii, tylko od zrozumienia problemu.

### Główny przekaz

**Nie każda firma potrzebuje AI. Każda firma potrzebuje rozwiązania,
które ma sens w jej sytuacji.**

### Proponowana zawartość

Przedstawiamy cztery możliwe kierunki rozwiązań:

1.  **Automatyzacja procesów** --- ograniczenie ręcznych i powtarzalnych
    zadań.
2.  **Sztuczna inteligencja** --- analiza, klasyfikacja i praca z
    informacjami tam, gdzie AI daje praktyczną wartość.
3.  **Dedykowane aplikacje** --- narzędzia dopasowane do specyfiki pracy
    firmy.
4.  **Integracje systemów** --- połączenie używanych narzędzi i
    przepływu danych.

Można podkreślić, że rozwiązanie może łączyć kilka podejść albo być
prostsze, niż klient początkowo zakłada.

### Proponowany układ

-   Wyraźny nagłówek i krótki tekst.
-   Cztery obszary przedstawione w uporządkowanym układzie.
-   Możliwa subtelna grafika lub schemat pokazujący przejście od
    problemu do dobranego rozwiązania.
-   Nie eksponować nazw frameworków, dostawców modeli ani technologii
    infrastrukturalnych.

### Interakcje

Nie są konieczne. Jeśli pojawi się schemat, może mieć subtelną animację,
ale jego sens musi być zrozumiały również jako statyczny element.

------------------------------------------------------------------------

## 9. Sekcja 5 --- Zobacz przykładowe rozwiązania

### Cel

Pokazać, że Data Wildcat potrafi przełożyć problemy biznesowe na
konkretne produkty. To dowód w postaci rzeczywistych przykładów, a nie
fikcyjnych case studies.

### Karta 1 --- Pricer

**Status:** gotowy produkt.

Opis powinien koncentrować się na automatyzacji przygotowywania ofert na
podstawie informacji otrzymanych od klienta.

Elementy karty: - nazwa i krótki opis; - wizualizacja produktu lub
fragment interfejsu, jeśli dostępne materiały będą odpowiednie; -
najważniejsza korzyść; - link do strony produktu.

CTA: **„Poznaj Pricer"**.

### Karta 2 --- ArchiFlow

**Status:** produkt w trakcie prac.

Opis powinien przedstawiać ArchiFlow jako rozwiązanie rozwijane z myślą
o organizacji pracy i zarządzaniu projektami w biurach
architektonicznych.

Elementy karty: - nazwa i krótki opis; - odpowiednio dobrana
wizualizacja interfejsu, jeśli będzie dostępna; - obszar problemowy,
który produkt ma wspierać; - link do strony produktu.

CTA: **„Poznaj ArchiFlow"**.

Nie przedstawiać ArchiFlow jako w pełni gotowego produktu. Nie opisywać
funkcji, które nie zostały potwierdzone.

### Proponowany układ

-   Dwie wyraźne karty lub dwa większe bloki.
-   Nie używać generycznych zdjęć stockowych.
-   Preferować zrzuty interfejsów, makiety produktu lub oszczędne
    wizualizacje.
-   Oba produkty powinny być łatwe do odróżnienia, ale prezentowane w
    ramach jednego systemu wizualnego.

------------------------------------------------------------------------

## 10. Sekcja 6 --- Jak pracujemy?

### Cel

Zmniejszyć niepewność klienta. Pokazać, że współpraca ma zrozumiały
przebieg i nie wymaga od niego znajomości technologii.

### Proponowane etapy

1.  **Rozmawiamy** --- klient opowiada o problemie i obecnym sposobie
    pracy. Pierwsza konsultacja jest bezpłatna.
2.  **Poznajemy proces** --- ustalamy, jak wygląda praca i gdzie
    występują trudności.
3.  **Proponujemy rozwiązanie** --- analizujemy możliwe podejścia i
    przedstawiamy rekomendację.
4.  **Budujemy i wdrażamy** --- realizujemy uzgodnione rozwiązanie.
5.  **Rozwijamy** --- w razie potrzeby wspieramy dalszy rozwój
    rozwiązania.

### Proponowany układ

-   Oś procesu, timeline lub sekwencja pięciu kroków.
-   Na desktopie może być układ poziomy, jeśli zachowa czytelność.
-   Na telefonie preferowany układ pionowy.
-   Krótkie opisy, bez długich akapitów.
-   Subtelne animacje mogą podkreślać kolejne etapy.

### Ważne

-   Nie podawać czasu realizacji bez znajomości projektu.
-   Nie sugerować, że każdy etap jest taki sam dla wszystkich klientów.
-   Nie przedstawiać warsztatów jako bezpłatnych. Bezpłatna jest
    konsultacja; warsztaty są płatne.

### CTA

Możliwe CTA po sekcji: **„Porozmawiajmy o Twoim problemie"** ---
prowadzące do Kontakt.

------------------------------------------------------------------------

## 11. Sekcja 7 --- Dopasowujemy rozwiązanie do Twojej firmy

### Cel

Pokazać, że Data Wildcat ma kompetencje i elastyczność, by dostarczać
rozwiązania w różnych środowiskach. Nie ma to być lista technologii dla
specjalistów IT.

### Proponowane obszary

1.  **Chmura** --- możliwość wykorzystania AWS, Azure lub Google Cloud,
    gdy takie podejście pasuje do potrzeb klienta.
2.  **Środowisko lokalne** --- możliwość wdrożenia rozwiązania w
    infrastrukturze klienta.
3.  **AI i automatyzacja** --- od prostych workflow po bardziej
    zaawansowane rozwiązania wykorzystujące modele AI.
4.  **Dedykowane aplikacje i integracje** --- tworzenie narzędzi i
    łączenie systemów zgodnie z procesem firmy.

### Proponowany układ

-   Sekcja z nagłówkiem i krótkim wprowadzeniem.
-   Cztery obszary w formie kart, kolumn lub uporządkowanego układu.
-   Nazwy technologii mogą pojawić się jako drugorzędne oznaczenia, nie
    jako główny przekaz.
-   Unikać ściany logotypów i długich list narzędzi.

### Ważne

Sekcja ma komunikować elastyczność i kompetencje, a nie sugerować, że
każdy wymieniony wariant jest właściwy dla każdego klienta.

------------------------------------------------------------------------

## 12. Sekcja 8 --- Dlaczego warto z nami pracować?

### Cel

Zbudować zaufanie przez pokazanie sposobu pracy, doświadczenia i ludzi
stojących za Data Wildcat.

### Proponowana zawartość

Filarami sekcji są: - zaczynamy od problemu, a nie od sprzedaży
technologii; - mówimy zrozumiałym językiem; - dopasowujemy rozwiązanie
do firmy; - pracujemy transparentnie; - jesteśmy elastyczni.

### Zespół

-   Przedstawienie trzyosobowego zespołu.
-   Wykorzystanie rzeczywistych zdjęć członków zespołu.
-   Krótka informacja o kilkunastoletnim doświadczeniu w branży,
    szczególnie w przetwarzaniu dużych zbiorów danych i automatyzacji
    procesów.
-   Bez sztucznych tytułów korporacyjnych.
-   Szczegółowe biogramy i przypisanie kompetencji do konkretnych osób
    zostaną dodane po zatwierdzeniu.

### Proponowany układ

-   Połączenie krótkich argumentów i zdjęć zespołu.
-   Zdjęcia mają wspierać wiarygodność, nie dominować całej strony.
-   Preferowany naturalny, profesjonalny wygląd --- bez przesadnie
    korporacyjnej stylizacji.
-   Można rozważyć zdjęcia w niewielkich portretowych kadrach zamiast
    jednego dużego zdjęcia na całą sekcję.

------------------------------------------------------------------------

## 13. Sekcja 9 --- FAQ

### Cel

Odpowiedzieć na pytania i obawy, które mogą powstrzymywać odwiedzającego
przed kontaktem.

### Proponowane pytania

1.  **Czy moja firma musi korzystać z AI, żeby współpracować z Data
    Wildcat?**\
    Odpowiedź powinna wyjaśniać, że AI jest jedną z możliwości, a
    rozwiązanie dobierane jest do problemu.

2.  **Czy współpracujecie z małymi firmami?**\
    Wyjaśnić, że oferta jest kierowana do MŚP i nie wymaga skali dużej
    korporacji.

3.  **Nie wiem dokładnie, czego potrzebuję. Czy mimo to mogę się
    odezwać?**\
    Zachęcić do opisania problemu --- klient nie musi znać rozwiązania
    ani technologii.

4.  **Jak wygląda pierwsza konsultacja?**\
    Wyjaśnić, że jest to rozmowa o problemie, obecnym procesie i
    możliwych kierunkach działania. Konsultacja jest bezpłatna; nie
    określamy sztywno jej czasu ani zakresu.

5.  **Ile kosztuje stworzenie rozwiązania?**\
    Wyjaśnić, że koszt zależy od zakresu i złożoności, a konkretna
    propozycja wymaga poznania potrzeb.

6.  **Czy rozwiązanie musi działać w chmurze?**\
    Wyjaśnić, że możliwe są również wdrożenia lokalne, zależnie od
    wymagań.

7.  **Co z bezpieczeństwem danych?**\
    Odpowiedź powinna być ostrożna i oparta na faktycznych możliwościach
    oraz uzgodnieniach projektowych. Nie składać ogólnych gwarancji bez
    podstaw.

8.  **Czy możecie połączyć rozwiązanie z systemami, których już
    używamy?**\
    Wyjaśnić, że integracje są jednym z obszarów działalności, ale
    możliwość realizacji zależy od konkretnych systemów i dostępnych
    interfejsów.

### Proponowany układ

-   Lista pytań w formie akordeonu.
-   Pytania widoczne od razu, odpowiedzi rozwijane po kliknięciu.
-   Obsługa klawiaturą i czytelne stany focus.
-   Nie rozwijać automatycznie wielu odpowiedzi naraz.

Treści odpowiedzi zostaną opracowane w etapie copywritingu.

------------------------------------------------------------------------

## 14. Sekcja 10 --- Końcowe CTA

### Cel

Zamienić zainteresowanie w działanie. Po zapoznaniu się z problemami,
podejściem, produktami i zespołem odwiedzający powinien dostać prostą
zachętę do rozmowy.

### Proponowany kierunek komunikatu

**„Masz problem, który można rozwiązać lepiej? Porozmawiajmy."**

### Zawartość

-   Krótki, bezpośredni nagłówek.
-   Jedno--dwa zdania zachęty.
-   CTA: **„Umów bezpłatną konsultację"**.
-   CTA prowadzi do podstrony Kontakt.

### Proponowany układ

-   Wyraźna sekcja odróżniająca się od poprzedzających treści.
-   Może wykorzystywać kontrast jasnej i ciemnej powierzchni.
-   Bez dodatkowych formularzy i nadmiaru informacji.

------------------------------------------------------------------------

## 15. Sekcja 11 --- Footer

### Cel

Zapewnić dodatkową nawigację i łatwy dostęp do najważniejszych
informacji.

### Proponowane elementy

-   Logo Data Wildcat.
-   Krótki opis firmy lub główne hasło.
-   Link do strony głównej.
-   Linki do Pricer i ArchiFlow.
-   Link do Kontakt.
-   E-mail.
-   LinkedIn, jeśli adres profilu zostanie potwierdzony.
-   Polityka prywatności.
-   Informacja o prawach autorskich.
-   Przełącznik języka, jeśli będzie to uzasadnione spójnością
    nawigacji.

Nie dodawać niepotwierdzonych adresów, profili ani danych firmy.

------------------------------------------------------------------------

## 16. Wspólne zasady UX i UI

### 16.1. Hierarchia informacji

-   Każda sekcja ma jeden główny cel i jeden dominujący przekaz.
-   Nagłówki powinny być zrozumiałe bez czytania całego tekstu.
-   Teksty mają być krótkie i konkretne.
-   Szczegóły techniczne pozostają drugorzędne.
-   CTA powinno być używane konsekwentnie.

### 16.2. Wizualny charakter

-   Ciemny, nowoczesny kierunek inspirowany Neuronem.
-   Inspiracja Nerve w kompozycji hero, typografii i ograniczonym
    wykorzystaniu dużych grafik.
-   Kolory dobierane do istniejącego logo Data Wildcat.
-   Dużo przestrzeni i wyraźna hierarchia.
-   Ograniczone wykorzystanie dużych zdjęć i ilustracji.
-   Preferowane typografia, karty, schematy, elementy interfejsowe i
    subtelne detale graficzne.
-   Jasne sekcje mogą być stosowane dla kontrastu, jeśli będą pasować do
    całości.

### 16.3. Animacje i elementy dynamiczne

-   Animacje mają wspierać zrozumienie i nadać stronie nowoczesny
    charakter.
-   Nie mogą utrudniać czytania ani opóźniać dostępu do treści.
-   Kalkulator jest głównym elementem interaktywnym strony głównej.
-   Pozostałe interakcje powinny być subtelne: hover, rozwijane FAQ,
    lekkie animacje wejścia lub elementy nawigacyjne.
-   Strona musi pozostawać użyteczna przy ograniczonym ruchu
    (`prefers-reduced-motion`).

### 16.4. Responsywność

-   Projektować z myślą o telefonach, tabletach i desktopach.
-   Nie zakładać, że desktopowy układ kart lub timeline można bez zmian
    zmniejszyć na telefonie.
-   Kalkulator musi być wygodny na ekranie dotykowym.
-   Wszystkie CTA i elementy interaktywne muszą mieć odpowiednie
    rozmiary i odstępy.
-   Unikać poziomego przewijania całej strony.

### 16.5. Dostępność i czytelność

-   Odpowiedni kontrast tekstu i elementów interfejsu.
-   Semantyczna struktura nagłówków.
-   Obsługa klawiaturą.
-   Widoczne stany focus.
-   Czytelne etykiety suwaków i wartości kalkulatora.
-   FAQ dostępne dla technologii asystujących.
-   Uwzględnienie `prefers-reduced-motion`.

------------------------------------------------------------------------

## 17. Nawigacja między stronami

Strona główna jest częścią niewielkiej witryny obejmującej: - stronę
główną, - stronę produktu Pricer, - stronę produktu ArchiFlow, -
podstronę Kontakt.

Trzy pierwsze strony są głównymi stronami prezentującymi firmę i
produkty. Kontakt jest prostą stroną użytkową, do której prowadzą CTA i
nawigacja.

### Proponowane zasady

-   Linki do Pricer i ArchiFlow prowadzą do osobnych podstron
    produktowych.
-   CTA kontaktowe prowadzą do Kontakt.
-   Nawigacja i footer są spójne między stronami.
-   Każda strona ma wersję polską i angielską.
-   Przełącznik języka powinien, jeśli to możliwe, przenosić użytkownika
    do odpowiednika aktualnie oglądanej strony w drugim języku.

Szczegółowa architektura podstron produktowych i Kontakt będzie opisana
w osobnych dokumentach.

------------------------------------------------------------------------

## 18. Rzeczy, których nie dodajemy do strony głównej

Dla utrzymania koncentracji i wiarygodności nie dodajemy bez
uzasadnienia:

-   fikcyjnych referencji, opinii i logotypów klientów;
-   niepotwierdzonych statystyk, liczby wdrożeń i wyników ROI;
-   rozbudowanego katalogu usług technicznych;
-   listy wszystkich języków programowania, frameworków i narzędzi;
-   dużych, generycznych ilustracji AI i zdjęć stockowych;
-   bloga lub sekcji newsów w pierwszej wersji, jeśli nie będzie
    realnego planu ich regularnego prowadzenia;
-   dodatkowych podstron tylko dlatego, że zawiera je szablon;
-   formularza kontaktowego;
-   globalnego przełącznika jasnego/ciemnego motywu.

------------------------------------------------------------------------

## 19. Kryteria akceptacji architektury strony głównej

Architektura będzie gotowa do dalszego projektowania, gdy:

-   kolejność sekcji będzie zatwierdzona;
-   każda sekcja będzie miała jasny cel;
-   ścieżka użytkownika od hero do kontaktu będzie logiczna;
-   kalkulator będzie miał zatwierdzone miejsce i podstawową logikę;
-   sekcje nie będą niepotrzebnie powtarzać tych samych argumentów;
-   strona będzie mówiła językiem problemów i efektów biznesowych;
-   produkty będą przedstawione zgodnie z ich rzeczywistym statusem;
-   kontakt będzie prosty i zgodny z ustaleniami;
-   architektura będzie możliwa do zrealizowania w Astro bez zbędnej
    złożoności.

## 20. Decyzje wymagane po przeglądzie dokumentu

Poniższe elementy są propozycjami do zatwierdzenia, a nie nieodwołalnymi
decyzjami:

1.  Czy zaproponowana kolejność sekcji jest właściwa?
2.  Czy kalkulator powinien znajdować się bezpośrednio po sekcji
    problemowej?
3.  Czy wszystkie osiem problemów powinno być pokazanych na stronie
    głównej, czy lepiej wybrać mniejszą liczbę?
4.  Czy sekcja „Dobieramy rozwiązanie do problemu" powinna poprzedzać
    prezentację produktów?
5.  Czy „Dopasowujemy rozwiązanie do Twojej firmy" i „Dlaczego warto z
    nami pracować?" są wystarczająco odrębne, czy należy je połączyć?
6.  Czy FAQ powinno zawierać wszystkie proponowane pytania?
7.  Czy nawigacja powinna mieć osobny link „O nas", czy wystarczy „Jak
    pracujemy?" i sekcja zespołu?
8.  Czy na stronie głównej powinny pojawić się dodatkowe CTA poza hero,
    sekcją procesu i końcowym CTA?

Nie trzeba rozstrzygać wszystkich kwestii jednocześnie. Można komentować
dokument sekcja po sekcji.

------------------------------------------------------------------------

## 21. Podsumowanie

Strona główna Data Wildcat ma prowadzić odwiedzającego od rozpoznania
problemu do decyzji o rozmowie.

Najpierw pokazujemy sytuacje, które klient zna z własnej firmy.
Następnie pomagamy mu zrozumieć skalę powtarzalnej pracy, wyjaśniamy
nasze podejście, pokazujemy przykłady rozwiązań i sposób współpracy. Na
końcu budujemy zaufanie przez przedstawienie zespołu i odpowiadamy na
najważniejsze pytania.

**Główna zasada:** odwiedzający nie musi znać technologii ani wiedzieć,
jak rozwiązać swój problem. Ma zrozumieć, że może przyjść z problemem do
Data Wildcat i rozpocząć rozmowę.
