# Kalkulator darowizny w walucie obcej


Instalacja i uruchomienie

  npm i
  npm start



1. Tytuł projektu

"Kalkulator darowizny w walucie obcej"


2. Użyte technologie i biblioteki
- HTML
- CSS / Sass
- JavaScript
- Bootstrap
- Font Awesome


3. Opis projektu

"Kalkulator" to aplikacja łącząca w sobie 2 narzędzia:
- kalkulator walutowy
- kalkulator należnego podatku

"Kalkulator darowizny w walucie obcej" to pierwsza aplikacja tego typu.
Użytkownik w jednym miejscu otrzymuje dane niezbędne do wypełnienia deklaracji podatkowej oraz informacje o wysokości podatku do zapłacenia. 


Na podstawie danych, jakie wprowadza użytkownik, tj.:
- grupa podatkowa
- data otrzymania darowizny
- waluta
- wartość

kalkulator automatycznie wybiera właściwe notowanie i zwraca wynik w postaci:
- nazwy waluty
- data notowania
- kurs średni waluty
- darowizna PLN
- podatek PLN

W celu pobrania danych do nowych zapytań kalkulator łączy się z API NBP.
Menu z listą walut obcych wypełnia się po otrzymaniu tabeli z NBP.

Ponowne zapytania do tej samej daty (nawet po wielokrotnej zmianie daty) zwracane są z obiektu w aplikacji celem oszczędności zasobów oraz przyspieszeniem działania.


4. Budowa projektu

Projekt składa się z 4 stron:
- strona startowa z opisem
- kalkulator
- formularze
- filmy


Piotr Pelikan
