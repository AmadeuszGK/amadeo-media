import React from 'react';
import Helmet from 'react-helmet';
import Footer from '../components/Footer/Footer';
import MenuMobile from '../components/Menu/MenuMobile/MenuMobile';
import '../styles/main.scss';
import logo from '../images/agrzesiak-logo.png';
import MenuDesktop from '../components/Menu/MenuDesktop/MenuDesktop';

class PrivacyPolicy extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      showMenu: false,
    };
  }

  toglleMenu = () => {
    const currentState = this.state.showMenu;
    this.setState({ showMenu: !currentState });
  };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    return (
      <div className={this.state.showMenu ? 'website-content--show-menu' : 'website-content'}>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Polityka prywatności - Amadeo Media</title>
          <meta
            name="keywords"
            content="strony internetowe,sklepy internetowe,front end developer,wrocław,lubań,e-commerce,grafika,tanio, tanie, grafik"
          />
          <meta name="author" content="Amadeusz Grzesiak" />
          <meta
            name="description"
            content="Zajmujemy się tworzeniem stron internetowych, sklepów (e-commerce), grafiką i nie tylko,
            sprawdź naszą ofertę! Stwórzmy coś razem."
          />
          <html lang="pl-PL" />
        </Helmet>
        <MenuMobile passedFunction={this.toglleMenu} showMenu={this.state.showMenu} />

        <div className="main-content">
          <div className="main-content-button" onClick={this.toglleMenu.bind(this)} />
          <div className="suqare-logo">
            <a href="/">
              <img src={logo} alt="amadeo media" />
            </a>
          </div>

          <div className="header-small">
            <MenuDesktop />
          </div>
          <main>
            <div className="privacyPolicy__section">
              <h1 className="h1">POLITYKA PRYWATNOŚCI</h1>
              <p>
                POLITYKA PRYWATNOŚCI Postanowienia ogólne Niniejsza polityka prywatności Sklepu
                Internetowego ma charakter informacyjny, co oznacza że nie jest ona źródłem
                obowiązków dla Usługobiorców lub Klientów Sklepu Internetowego. Polityka prywatności
                zawiera przede wszystkim zasady dotyczące przetwarzania danych osobowych przez
                Administratora w Sklepie Internetowym, w tym podstawy, cele i okres przetwarzania
                danych osobowych oraz prawa osób, których dane dotyczą, a także informacje w
                zakresie stosowania w Sklepie Internetowym plików cookies oraz narzędzi
                analitycznych. Administratorem danych osobowych zbieranych za pośrednictwem Sklepu
                Internetowego jest OSKAR WILDE prowadzący działalność gospodarczą pod firmą OSKAR
                WILDE wpisany do Centralnej Ewidencji i Informacji o Działalności Gospodarczej
                Rzeczypospolitej Polskiej prowadzonej przez ministra właściwego do spraw gospodarki,
                posiadający: adres miejsca wykonywania działalności i adres do doręczeń: ul.
                Konduktorska 2/40, 52-130 Wrocław, NIP 6121820082, REGON 366530740, adres poczty
                elektronicznej: sklep@inlei.pl, numer telefonu: 531223533 – zwany dalej
                „Administratorem” i będący jednocześnie Usługodawcą Sklepu Internetowego i
                Sprzedawcą. Dane osobowe w Sklepie Internetowym przetwarzane są przez Administratora
                zgodnie z obowiązującymi przepisami prawa, w szczególności zgodnie z rozporządzeniem
                Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie
                ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie
                swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne
                rozporządzenie o ochronie danych) – zwane dalej „RODO” lub „Rozporządzenie RODO”.
                Oficjalny tekst Rozporządzenia RODO:
                http://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX%3A32016R0679. Korzystanie
                ze Sklepu Internetowego, w tym dokonywanie zakupów jest dobrowolne. Podobnie
                związane z tym podanie danych osobowych przez korzystającego ze Sklepu Internetowego
                Usługobiorcę lub Klienta jest dobrowolne, z zastrzeżeniem dwóch wyjątków: (1)
                zawieranie umów z Administratorem – niepodanie w przypadkach i w zakresie wskazanym
                na stronie Sklepu Internetowego oraz w Regulaminie Sklepu Internetowego i niniejszej
                polityce prywatności danych osobowych niezbędnych do zawarcia i wykonania Umowy
                Sprzedaży lub umowy o świadczenie Usługi Elektronicznej z Administratorem skutkuje
                brakiem możliwości zawarcia tejże umowy. Podanie danych osobowych jest w takim
                wypadku wymogiem umownym i jeżeli osoba, które dane dotyczą chce zawrzeć daną umowę
                z Administratorem, to jest zobowiązana do podania wymaganych danych. Każdorazowo
                zakres danych wymaganych do zawarcia umowy wskazany jest uprzednio na stronie Sklepu
                Internetowego oraz w Regulaminie Sklepu Internetowego; (2) obowiązki ustawowe
                Administratora – podanie danych osobowych jest wymogiem ustawowym wynikającym z
                powszechnie obowiązujących przepisów prawa nakładających na Administratora obowiązek
                przetwarzania danych osobowych (np. przetwarzanie danych w celu prowadzenia ksiąg
                podatkowych lub rachunkowych) i brak ich podania uniemożliwi Administratorowi
                wykonanie tychże obowiązków. Administrator dokłada szczególnej staranności w celu
                ochrony interesów osób, których przetwarzane przez niego dane osobowe dotyczą, a w
                szczególności jest odpowiedzialny i zapewnia, że zbierane przez niego dane są: (1)
                przetwarzane zgodnie z prawem; (2) zbierane dla oznaczonych, zgodnych z prawem celów
                i niepoddawane dalszemu przetwarzaniu niezgodnemu z tymi celami; (3) merytorycznie
                poprawne i adekwatne w stosunku do celów, w jakich są przetwarzane; (4)
                przechowywane w postaci umożliwiającej identyfikację osób, których dotyczą, nie
                dłużej niż jest to niezbędne do osiągnięcia celu przetwarzania oraz (5) przetwarzane
                w sposób zapewniający odpowiednie bezpieczeństwo danych osobowych, w tym ochronę
                przed niedozwolonym lub niezgodnym z prawem przetwarzaniem oraz przypadkową utratą,
                zniszczeniem lub uszkodzeniem, za pomocą odpowiednich środków technicznych lub
                organizacyjnych. Uwzględniając charakter, zakres, kontekst i cele przetwarzania oraz
                ryzyko naruszenia praw lub wolności osób fizycznych o różnym prawdopodobieństwie i
                wadze zagrożenia, Administrator wdraża odpowiednie środki techniczne i
                organizacyjne, aby przetwarzanie odbywało się zgodnie z niniejszym rozporządzeniem i
                aby móc to wykazać. Środki te są w razie potrzeby poddawane przeglądom i
                uaktualniane. Administrator stosuje środki techniczne zapobiegające pozyskiwaniu i
                modyfikowaniu przez osoby nieuprawnione, danych osobowych przesyłanych drogą
                elektroniczną. Wszelkie słowa, wyrażenia i akronimy występujące w niniejszej
                polityce prywatności i rozpoczynające się dużą literą (np. Sprzedawca, Sklep
                Internetowy, Usługa Elektroniczna) należy rozumieć zgodnie z ich definicją zawartą w
                Regulaminie Sklepu Internetowego dostępnym na stronach Sklepu Internetowego.
                Podstawy przetwarzania danych Administrator uprawniony jest do przetwarzania danych
                osobowych w przypadkach, gdy – i w takim zakresie, w jakim – spełniony jest co
                najmniej jeden z poniższych warunków: (1) osoba, której dane dotyczą wyraziła zgodę
                na przetwarzanie swoich danych osobowych w jednym lub większej liczbie określonych
                celów; (2) przetwarzanie jest niezbędne do wykonania umowy, której stroną jest
                osoba, której dane dotyczą, lub do podjęcia działań na żądanie osoby, której dane
                dotyczą, przed zawarciem umowy; (3) przetwarzanie jest niezbędne do wypełnienia
                obowiązku prawnego ciążącego na Administratorze; lub (4) przetwarzanie jest
                niezbędne do celów wynikających z prawnie uzasadnionych interesów realizowanych
                przez Administratora lub przez stronę trzecią, z wyjątkiem sytuacji, w których
                nadrzędny charakter wobec tych interesów mają interesy lub podstawowe prawa i
                wolności osoby, której dane dotyczą, wymagające ochrony danych osobowych, w
                szczególności gdy osoba, której dane dotyczą, jest dzieckiem. Przetwarzanie danych
                osobowych przez Administratora wymaga każdorazowo zaistnienia co najmniej jednej z
                podstaw wskazanych w pkt. 2.1 polityki prywatności. Konkretne podstawy przetwarzania
                danych osobowych Usługobiorców i Klientów Sklepu Internetowego przez Administratora
                są wskazane w kolejnym punkcie polityki prywatności – w odniesieniu do danego celu
                przetwarzania danych osobowych przez Administratora. Cel, podstawa i okres
                przetwarzania danych w Sklepie Internetowym Każdorazowo cel, podstawa i okres oraz
                odbiorcy danych osobowych przetwarzanych przez Administratora wynika z działań
                podejmowanych przez danego Usługobiorcę lub Klienta w Sklepie Internetowym lub przez
                Administratora. Przykładowo jeżeli Klient decyduje się na dokonanie zakupów w
                Sklepie Internetowym i wybierze odbiór osobisty zakupionego Produktu zamiast
                przesyłki kurierskiej, to jego dane osobowe będą przetwarzane w celu wykonania
                zawartej Umowy Sprzedaży, ale nie będą już udostępniane przewoźnikowi realizującemu
                przesyłki na zlecenie Administratora. Administrator może przetwarzać dane osobowe w
                ramach Sklepu Internetowego w następujących celach, na podstawach, oraz w okresach
                wskazanych w poniższej tabeli: CEL PRZETWARZANIA DANYCH PODSTAWA PRAWNA
                PRZETWARZANIA DANYCH OKRES PRZECHOWYWANIA DANYCH Wykonanie Umowy Sprzedaży lub umowy
                o świadczenie Usługi Elektronicznej lub podjęcie działań na żądanie osoby, której
                dane dotyczą, przed zawarciem w/w umów Artykuł 6 ust. 1 lit. b) Rozporządzenia RODO
                (wykonanie umowy) – przetwarzanie jest niezbędne do wykonania umowy, której stroną
                jest osoba, której dane dotyczą, lub do podjęcia działań na żądanie osoby, której
                dane dotyczą, przed zawarciem umowy Dane są przechowywane przez okres niezbędny do
                wykonania, rozwiązania lub wygaśnięcia w inny sposób zawartej Umowy Sprzedaży lub
                umowy o świadczenie Usługi Elektronicznej. Marketing bezpośredni Artykuł 6 ust. 1
                lit. f) Rozporządzenia RODO (prawnie uzasadniony interes administratora) –
                przetwarzanie jest niezbędne do celów wynikających z prawnie uzasadnionych interesów
                Administratora – polegających na dbaniu o interesy i dobry wizerunek Administratora,
                jego Sklepu Internetowego oraz dążeniu do sprzedaży Produktów Dane są przechowywane
                przez okres istnienia prawnie uzasadnionego interesu realizowanego przez
                Administratora, nie dłużej jednak niż przez okres przedawnienia roszczeń
                Administratora w stosunku do osoby, której dane dotyczą, z tytułu prowadzonej przez
                Administratora działalności gospodarczej. Okres przedawnienia określają przepisy
                prawa, w szczególności kodeksu cywilnego (podstawowy termin przedawnienia dla
                roszczeń związanych z prowadzeniem działalności gospodarczej wynosi trzy lata, a dla
                umowy sprzedaży dwa lata). Administrator nie może przetwarzać danych w celu
                marketingu bezpośredniego w przypadku wyrażenia skutecznego sprzeciwu w tym zakresie
                przez osobę, której dane dotyczą. Marketing Artykuł 6 ust. 1 lit. a) Rozporządzenia
                RODO (zgoda) – osoba, której dane dotyczą wyraziła zgodę na przetwarzanie swoich
                danych osobowych w celach marketingowych przez Administratora Dane przechowywane są
                do momentu wycofania zgody przez osobę, której dane dotyczą na dalsze przetwarzanie
                jej danych w tym celu. Wyrażenie przez Klienta opinii o zawartej Umowie Sprzedaży
                Artykuł 6 ust. 1 lit. a) Rozporządzenia RODO – osoba, której dane dotyczą wyraziła
                zgodę na przetwarzanie swoich danych osobowych w celu wyrażenia opinii Dane
                przechowywane są do momentu wycofania zgody przez osobę, której dane dotyczą na
                dalsze przetwarzanie jej danych w tym celu. Prowadzenie ksiąg podatkowych Artykuł 6
                ust. 1 lit. c) Rozporządzenia RODO w zw. z art. 86 § 1 Ordynacji podatkowej tj. z
                dnia 17 stycznia 2017 r. (Dz.U. z 2017 r. poz. 201) – przetwarzanie jest niezbędne
                do wypełnienia obowiązku prawnego ciążącego na Administratorze Dane są przechowywane
                przez okres wymagany przepisami prawa nakazującymi Administratorowi przechowywanie
                ksiąg podatkowych (do czasu upływu okresu przedawnienia zobowiązania podatkowego,
                chyba że ustawy podatkowe stanowią inaczej). Ustalenie, dochodzenie lub obrona
                roszczeń jakie może podnosić Administrator lub jakie mogą być podnoszone wobec
                Administratora Artykuł 6 ust. 1 lit. f) Rozporządzenia RODO (prawnie uzasadniony
                interes administratora) – przetwarzanie jest niezbędne do celów wynikających z
                prawnie uzasadnionych interesów Administratora – polegających na ustaleniu,
                dochodzeniu lub obronie roszczeń jakie może podnosić Administrator lub jakie mogą
                być podnoszone wobec Administratora Dane są przechowywane przez okres istnienia
                prawnie uzasadnionego interesu realizowanego przez Administratora, nie dłużej jednak
                niż przez okres przedawnienia roszczeń jakie mogą być podnoszone wobec
                Administratora (podstawowy termin przedawnienia dla roszczeń wobec Administratora
                wynosi sześć lat). Korzystanie ze strony Sklepu Internetowego i zapewnienie jej
                prawidłowego działania Artykuł 6 ust. 1 lit. f) Rozporządzenia RODO (prawnie
                uzasadniony interes administratora) – przetwarzanie jest niezbędne do celów
                wynikających z prawnie uzasadnionych interesów Administratora – polegających na
                prowadzeniu i utrzymaniu strony Sklepu Internetowego Dane są przechowywane przez
                okres istnienia prawnie uzasadnionego interesu realizowanego przez Administratora,
                nie dłużej jednak niż przez okres przedawnienia roszczeń Administratora w stosunku
                do osoby, której dane dotyczą, z tytułu prowadzonej przez Administratora
                działalności gospodarczej. Okres przedawnienia określają przepisy prawa, w
                szczególności kodeksu cywilnego (podstawowy termin przedawnienia dla roszczeń
                związanych z prowadzeniem działalności gospodarczej wynosi trzy lata, a dla umowy
                sprzedaży dwa lata). Prowadzenie statystyk i analiza ruchu w Sklepie Internetowym
                Artykuł 6 ust. 1 lit. f) Rozporządzenia RODO (prawnie uzasadniony interes
                administratora) – przetwarzanie jest niezbędne do celów wynikających z prawnie
                uzasadnionych interesów Administratora – polegających na prowadzeniu statystyk i
                analizie ruchu w Sklepie Internetowym celem poprawy funkcjonowania Sklepu
                Internetowego i zwiększenia sprzedaży Produktów Dane są przechowywane przez okres
                istnienia prawnie uzasadnionego interesu realizowanego przez Administratora, nie
                dłużej jednak niż przez okres przedawnienia roszczeń Administratora w stosunku do
                osoby, której dane dotyczą, z tytułu prowadzonej przez Administratora działalności
                gospodarczej. Okres przedawnienia określają przepisy prawa, w szczególności kodeksu
                cywilnego (podstawowy termin przedawnienia dla roszczeń związanych z prowadzeniem
                działalności gospodarczej wynosi trzy lata, a dla umowy sprzedaży dwa lata).
                Odbiorcy danych w Sklepie Internetowym Dla prawidłowego funkcjonowania Sklepu
                Internetowego, w tym dla realizacji zawieranych Umów Sprzedaży konieczne jest
                korzystanie przez Administratora z usług podmiotów zewnętrznych (takich jak np.
                dostawca oprogramowania, kurier, czy podmiot obsługujący płatności). Administrator
                korzysta wyłącznie z usług takich podmiotów przetwarzających, którzy zapewniają
                wystarczające gwarancje wdrożenia odpowiednich środków technicznych i
                organizacyjnych, tak by przetwarzanie spełniało wymogi Rozporządzenia RODO i
                chroniło prawa osób, których dane dotyczą. Przekazanie danych przez Administratora
                nie następuje w każdym wypadku i nie do wszystkich wskazanych w polityce prywatności
                odbiorców lub kategorii odbiorców – Administrator przekazuje dane wyłącznie wtedy,
                gdy jest to niezbędne do realizacji danego celu przetwarzania danych osobowych i
                tylko w zakresie niezbędnym do jego zrealizowania. Przykładowo, jeżeli Klient
                korzysta z odbioru osobistego, to jego dane nie będą przekazywane przewoźnikowi
                współpracującemu z Administratorem. Dane osobowe Usługobiorców i Klientów Sklepu
                Internetowego mogą być przekazywane następującym odbiorcom lub kategoriom odbiorców:
                przewoźnicy / spedytorzy / brokerzy kurierscy / podmioty obsługujące magazyn i/lub
                proces wysyłki – w przypadku Klienta, który korzysta w Sklepie Internetowym ze
                sposobu dostawy Produktu przesyłką pocztową lub przesyłką kurierską, Administrator
                udostępnia zebrane dane osobowe Klienta wybranemu przewoźnikowi, spedytorowi lub
                pośrednikowi realizującemu przesyłki na zlecenie Administratora, a jeżeli wysyłka
                następuje z magazynu zewnętrznego – podmiotowi obsługującemu magazyn i/lub proces
                wysyłki – w zakresie niezbędnym do zrealizowania dostawy Produktu Klientowi.
                podmioty obsługujące płatności elektroniczne lub kartą płatniczą – w przypadku
                Klienta, który korzysta w Sklepie Internetowym ze sposobu płatności elektronicznych
                lub kartą płatniczą Administrator udostępnia zebrane dane osobowe Klienta wybranemu
                podmiotowi obsługującemu powyższe płatności w Sklepie Internetowym na zlecenie
                Administratora w zakresie niezbędnym do obsługi płatności realizowanej przez
                Klienta. dostawcy usług zaopatrujący Administratora w rozwiązania techniczne,
                informatyczne oraz organizacyjne, umożliwiające Administratorowi prowadzenie
                działalności gospodarczej, w tym Sklepu Internetowego i świadczonych za jego
                pośrednictwem Usług Elektronicznych (w szczególności dostawcy oprogramowania
                komputerowego do prowadzenia Sklepu Internetowego, dostawcy poczty elektronicznej i
                hostingu oraz dostawcy oprogramowania do zarządzania firmą i udzielania pomocy
                technicznej Administratorowi) – Administrator udostępnia zebrane dane osobowe
                Klienta wybranemu dostawcy działającemu na jego zlecenie jedynie w przypadku oraz w
                zakresie niezbędnym do zrealizowania danego celu przetwarzania danych zgodnego z
                niniejszą polityką prywatności. dostawcy usług księgowych, prawnych i doradczych
                zapewniający Administratorowi wsparcie księgowe, prawne lub doradcze (w
                szczególności biuro księgowe, kancelaria prawna lub firma windykacyjna) –
                Administrator udostępnia zebrane dane osobowe Klienta wybranemu dostawcy
                działającemu na jego zlecenie jedynie w przypadku oraz w zakresie niezbędnym do
                zrealizowania danego celu przetwarzania danych zgodnego z niniejszą polityką
                prywatności. Profilowanie w Sklepie Internetowym Rozporządzenie RODO nakłada na
                Administratora obowiązek informowania o zautomatyzowanym podejmowaniu decyzji, w tym
                o profilowaniu, o którym mowa w art. 22 ust. 1 i 4 Rozporządzenia RODO, oraz –
                przynajmniej w tych przypadkach – istotne informacje o zasadach ich podejmowania, a
                także o znaczeniu i przewidywanych konsekwencjach takiego przetwarzania dla osoby,
                której dane dotyczą. Mając to na uwadze Administrator podaje w tym punkcie polityki
                prywatności informacje dotyczące możliwego profilowania. Administrator może
                korzystać w Sklepie Internetowym z profilowania do celów marketingu bezpośredniego,
                ale decyzje podejmowane na jego podstawie przez Administratora nie dotyczą zawarcia
                lub odmowy zawarcia Umowy Sprzedaży, czy też możliwości korzystania z Usług
                Elektronicznych w Sklepie Internetowym. Efektem korzystania z profilowania w Sklepie
                Internetowym może być np. przyznanie danej osobie rabatu, przesłanie jej kodu
                rabatowego, przypomnienie o niedokończonych zakupach, przesłanie propozycji
                Produktu, który może odpowiadać zainteresowaniom lub preferencjom danej osoby lub
                też zaproponowanie lepszych warunków w porównaniu do standardowej oferty Sklepu
                Internetowego. Mimo profilowania to dana osoba podejmuje swobodnie decyzję, czy
                będzie chciała skorzystać z otrzymanego w ten sposób rabatu, czy też lepszych
                warunków i dokonać zakupu w Sklepie Internetowym. Profilowanie w Sklepie
                Internetowym polega na automatycznej analizie lub prognozie zachowania danej osoby
                na stronie Sklepu Internetowego np. poprzez dodanie konkretnego Produktu do koszyka,
                przeglądanie strony konkretnego Produktu w Sklepie Internetowym, czy też poprzez
                analizę dotychczasowej historii dokonanych zakupów w Sklepie Internetowym. Warunkiem
                takiego profilowania jest posiadanie przez Administratora danych osobowych danej
                osoby, aby móc jej następnie przesłać np. kod rabatowy. Osoba, której dane dotyczą,
                ma prawo do tego, by nie podlegać decyzji, która opiera się wyłącznie na
                zautomatyzowanym przetwarzaniu, w tym profilowaniu, i wywołuje wobec tej osoby
                skutki prawne lub w podobny sposób istotnie na nią wpływa. Prawa osoby, której dane
                dotyczą Prawo dostępu, sprostowania, ograniczenia, usunięcia lub przenoszenia –
                osoba, której dane dotyczą, ma prawo żądania od Administratora dostępu do swoich
                danych osobowych, ich sprostowania, usunięcia („prawo do bycia zapomnianym”) lub
                ograniczenia przetwarzania oraz ma prawo do wniesienia sprzeciwu wobec
                przetwarzania, a także ma prawo do przenoszenia swoich danych. Szczegółowe warunki
                wykonywania wskazanych wyżej praw wskazane są w art. 15-21 Rozporządzenia RODO.
                Prawo do cofnięcia zgody w dowolnym momencie – osoba, której dane przetwarzane są
                przez Administratora na podstawie wyrażonej zgody (na podstawie art. 6 ust. 1 lit.
                a) lub art. 9 ust. 2 lit. a) Rozporządzenia RODO), to ma ona prawo do cofnięcia
                zgody w dowolnym momencie bez wpływu na zgodność z prawem przetwarzania, którego
                dokonano na podstawie zgody przed jej cofnięciem. Prawo wniesienia skargi do organu
                nadzorczego – osoba, której dane przetwarzane są przez Administratora, ma prawo
                wniesienia skargi do organu nadzorczego w sposób i trybie określonym w przepisach
                Rozporządzenia RODO oraz prawa polskiego, w szczególności ustawy o ochronie danych
                osobowych. Organem nadzorczym w Polsce jest Prezes Urzędu Ochrony Danych Osobowych.
                Prawo do sprzeciwu – osoba, której dane dotyczą, ma prawo w dowolnym momencie wnieść
                sprzeciw – z przyczyn związanych z jej szczególną sytuacją – wobec przetwarzania
                dotyczących jej danych osobowych opartego na art. 6 ust. 1 lit. e) (interes lub
                zadania publiczne) lub f) (prawnie uzasadniony interes administratora), w tym
                profilowania na podstawie tych przepisów. Administratorowi w takim przypadku nie
                wolno już przetwarzać tych danych osobowych, chyba że wykaże on istnienie ważnych
                prawnie uzasadnionych podstaw do przetwarzania, nadrzędnych wobec interesów, praw i
                wolności osoby, której dane dotyczą, lub podstaw do ustalenia, dochodzenia lub
                obrony roszczeń. Prawo do sprzeciwu dot. marketingu bezpośredniego – jeżeli dane
                osobowe są przetwarzane na potrzeby marketingu bezpośredniego, osoba, której dane
                dotyczą, ma prawo w dowolnym momencie wnieść sprzeciw wobec przetwarzania
                dotyczących jej danych osobowych na potrzeby takiego marketingu, w tym profilowania,
                w zakresie, w jakim przetwarzanie jest związane z takim marketingiem bezpośrednim. W
                celu realizacji uprawnień, o których mowa w niniejszym punkcie polityki prywatności
                można kontaktować się z Administratorem poprzez przesłanie stosownej wiadomości
                pisemnie lub pocztą elektroniczną na adres Administratora wskazany na wstępie
                polityki prywatności lub korzystając z formularza kontaktowego dostępnego na stronie
                Sklepu Internetowego. Cookies w Sklepie Internetowym i analityka Pliki Cookies
                (ciasteczka) są to niewielkie informacje tekstowe w postaci plików tekstowych,
                wysyłane przez serwer i zapisywane po stronie osoby odwiedzającej stronę Sklepu
                Internetowego (np. na dysku twardym komputera, laptopa, czy też na karcie pamięci
                smartfona – w zależności z jakiego urządzenia korzysta odwiedzający nasz Sklep
                Internetowy). Szczegółowe informacje dot. plików Cookies, a także historię ich
                powstania można znaleźć m.in. tutaj: https://pl.wikipedia.org/wiki/Ciasteczko.
                Administrator może przetwarzać dane zawarte w plikach Cookies podczas korzystania
                przez odwiedzających ze strony Sklepu Internetowego w następujących celach:
                identyfikacji Usługobiorców jako zalogowanych w Sklepie Internetowym i pokazywania,
                że są zalogowani; zapamiętywania Produktów dodanych do koszyka w celu złożenia
                Zamówienia; zapamiętywania danych z wypełnianych Formularzy Zamówienia, ankiet lub
                danych logowania do Sklepu Internetowego; dostosowywania zawartości strony Sklepu
                Internetowego do indywidualnych preferencji Usługobiorcy (np. dotyczących kolorów,
                rozmiaru czcionki, układu strony) oraz optymalizacji korzystania ze stron Sklepu
                Internetowego; prowadzenia anonimowych statystyk przedstawiających sposób
                korzystania ze strony Sklepu Internetowego; remarketingu, to jest badania cech
                zachowania odwiedzających Sklep Internetowy poprzez anonimową analizę ich działań
                (np. powtarzające się wizyty na określonych stronach, słowa kluczowe itp.) w celu
                stworzenia ich profilu i dostarczenia im reklam dopasowanych do ich przewidywanych
                zainteresowań, także wtedy kiedy odwiedzają oni inne strony internetowe w sieci
                reklamowej firmy Google Ireland Ltd. oraz Facebook Ireland Ltd. Standardowo
                większość przeglądarek internetowych dostępnych na rynku domyślnie akceptuje
                zapisywanie plików Cookies. Każdy ma możliwość określenia warunków korzystania z
                plików Cookies za pomocą ustawień własnej przeglądarki internetowej. Oznacza to, że
                można np. częściowo ograniczyć (np. czasowo) lub całkowicie wyłączyć możliwość
                zapisywania plików Cookies – w tym ostatnim wypadku jednak może to mieć wpływ na
                niektóre funkcjonalności Sklepu Internetowego (przykładowo niemożliwym może okazać
                się przejście ścieżki Zamówienia poprzez Formularz Zamówienia z uwagi na
                niezapamiętywanie Produktów w koszyku podczas kolejnych kroków składania
                Zamówienia). Ustawienia przeglądarki internetowej w zakresie plików Cookies są
                istotne z punktu widzenia zgody na korzystanie z plików Cookies przez nasz Sklep
                Internetowy – zgodnie z przepisami taka zgoda może być również wyrażona poprzez
                ustawienia przeglądarki internetowej. W braku wyrażenia takiej zgody należy
                odpowiednio zmienić ustawienia przeglądarki internetowej w zakresie plików Cookies.
                Szczegółowe informacje na temat zmiany ustawień dotyczących plików Cookies oraz ich
                samodzielnego usuwania w najpopularniejszych przeglądarkach internetowych dostępne
                są w dziale pomocy przeglądarki internetowej oraz na poniższych stronach (wystarczy
                kliknąć w dany link): w przeglądarce Chrome w przeglądarce Firefox w przeglądarce
                Internet Explorer w przeglądarce Opera w przeglądarce Safari w przeglądarce
                Microsoft Edge Administrator może korzystać w Sklepie Internetowym z usług Google
                Analytics, Universal Analytics dostarczanych przez firmę Google Ireland Limited
                (Gordon House, Barrow Street, Dublin 4, Irlandia). Usługi te pomagają
                Administratorowi prowadzić statystyki i analizować ruch w Sklepie Internetowym.
                Gromadzone dane przetwarzane są w ramach powyższych usług do generowania statystyk
                pomocnych w administrowaniu Sklepie Internetowym i analizie ruchu w Sklepie
                Internetowym. Dane te mają charakter zbiorczy. Administrator korzystając z
                powyższych usług w Sklepie Internetowym gromadzi takie dane jak źródła i medium
                pozyskania odwiedzających Sklep Internetowy oraz sposób ich zachowania na stronie
                Sklepu Internetowego, informacje na temat urządzeń i przeglądarek z których
                odwiedzają stronę, IP oraz domenę, dane geograficzne oraz dane demograficzne (wiek,
                płeć) i zainteresowania. Możliwe jest zablokowanie w łatwy sposób przez daną osobę
                udostępniania do Google Analytics informacji o jej aktywności na stronie Sklepu
                Internetowego – w tym celu można na przykład zainstalować dodatek do przeglądarki
                udostępniany przez firmę Google Ireland Ltd. dostępny tutaj:
                https://tools.google.com/dlpage/gaoptout?hl=pl. Administrator może korzystać w
                Sklepie Internetowym z usługi Piksel Facebooka dostarczanej przez firmę Facebook
                Ireland Limited (4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irlandia).
                Usługa ta pomaga Administratorowi mierzyć skuteczność reklam oraz dowiadywać się,
                jakie działania podejmują odwiedzający Sklep Internetowy, a także wyświetlać tym
                osobom dopasowane reklamy. Szczegółowe informacje o działaniu Piksela Facebooka
                możesz znaleźć pod następującym adresem internetowym:
                https://www.facebook.com/business/help/742478679120153?helpref=page_content.
                Zarządzanie działaniem Piksela Facebooka jest możliwe poprzez ustawienia reklam w
                swoim koncie na portalu Facebook.com:
                https://www.facebook.com/ads/preferences/?entry_product=ad_settings_screen.
                Postanowienia końcowe 8.1. Sklep Internetowy może zawierać odnośniki do innych stron
                internetowych. Administrator namawia by po przejściu na inne strony, zapoznać się z
                polityką prywatności tam ustaloną. Niniejsza polityka prywatności dotyczy tylko
                Sklepu Internetowego Administratora.
              </p>
            </div>
          </main>

          <Footer />
        </div>
      </div>
    );
  }
}

export default PrivacyPolicy;
