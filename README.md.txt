# kalkulator


Instalacja i uruchomienie

1. npm i
2. npm start




1. Tytu³ projektu

"Kalkulator darowizny w walucie obcej"


2. U¿yte technologie i biblioteki
- HTML
- CSS / Sass
- JavaScript
- Bootstrap
- Font Awesome


3. Opis projektu

"Kalkulator" to aplikacja ³¹cz¹ca w sobie 2 narzêdzia:
- kalkulator walutowy
- kalkulator nale¿nego podatku

"Kalkulator darowizny w walucie obcej" to pierwsza aplikacja tego typu.
U¿ytkownik w jednym miejscu otrzymuje dane niezbêdne do wype³nienia deklaracji podatkowej oraz informacje o wysokoœci podatku do zap³acenia. 


Na podstawie danych, jakie wprowadza u¿ytkownik, tj.:
- grupa podatkowa
- data otrzymania darowizny
- waluta
- wartoœæ

kalkulator automatycznie wybiera w³aœciwe notowanie i zwraca wynik w postaci:
- nazwy waluty
- data notowania
- kurs œredni waluty
- darowizna PLN
- podatek PLN

W celu pobrania danych do nowych zapytañ kalkulator ³¹czy siê z API NBP.
Menu z list¹ walut obcych wype³nia siê po otrzymaniu tabeli z NBP.

Ponowne zapytania do tej samej daty (nawet po wielokrotnej zmianie daty) zwracane s¹ z obiektu w aplikacji celem oszczêdnoœci zasobów oraz przyspieszeniem dzia³ania.


4. Budowa projektu

Projekt sk³ada siê z 4 stron:
- strona startowa z opisem
- kalkulator
- formularze
- filmy


Piotr Pelikan