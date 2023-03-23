# kalkulator


Instalacja i uruchomienie

1. npm i
2. npm start




1. Tytu� projektu

"Kalkulator darowizny w walucie obcej"


2. U�yte technologie i biblioteki
- HTML
- CSS / Sass
- JavaScript
- Bootstrap
- Font Awesome


3. Opis projektu

"Kalkulator" to aplikacja ��cz�ca w sobie 2 narz�dzia:
- kalkulator walutowy
- kalkulator nale�nego podatku

"Kalkulator darowizny w walucie obcej" to pierwsza aplikacja tego typu.
U�ytkownik w jednym miejscu otrzymuje dane niezb�dne do wype�nienia deklaracji podatkowej oraz informacje o wysoko�ci podatku do zap�acenia. 


Na podstawie danych, jakie wprowadza u�ytkownik, tj.:
- grupa podatkowa
- data otrzymania darowizny
- waluta
- warto��

kalkulator automatycznie wybiera w�a�ciwe notowanie i zwraca wynik w postaci:
- nazwy waluty
- data notowania
- kurs �redni waluty
- darowizna PLN
- podatek PLN

W celu pobrania danych do nowych zapyta� kalkulator ��czy si� z API NBP.
Menu z list� walut obcych wype�nia si� po otrzymaniu tabeli z NBP.

Ponowne zapytania do tej samej daty (nawet po wielokrotnej zmianie daty) zwracane s� z obiektu w aplikacji celem oszcz�dno�ci zasob�w oraz przyspieszeniem dzia�ania.


4. Budowa projektu

Projekt sk�ada si� z 4 stron:
- strona startowa z opisem
- kalkulator
- formularze
- filmy


Piotr Pelikan