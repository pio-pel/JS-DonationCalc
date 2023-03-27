// Tax-groups selector
export function groupSelect(e) {
    const taxArea = document.querySelector(".tArea");
    const target = e.target;
    const buttons = document.querySelectorAll(".tButtons");

    if (target.classList.contains("buttonClicked")) {
        target.classList.remove("buttonClicked");
        taxArea.innerHTML = "Kim jesteś dla darczyńcy? Kliknij w przycisk, aby zobaczyć opis i wybrać odpowiednią grupę podatkową.<br>UWAGA! Możesz pominąć ten krok, jeśli nie chcesz liczyć należnego podatku.";
    } else {
        for (let button of buttons) {
            button.classList.remove("buttonClicked");
        };
        if (target.id ==="taxZero") {
            taxArea.textContent = 'Tzw. "0" grupa podatkowa, czyli najbliższa rodzina: małżonek, wstępni (rodzice, dziadkowie, pradziadkowie), zstępni (dzieci, wnuki, prawnuki), pasierb, ojczym, macocha, rodzeństwo. UWAGA: Jeżeli nie zgłosisz spadku w ciągu 6 miesięcy, wówczas zapłacisz podatek na zasadach określonych dla I grupy podatkowej!';
            target.classList.add("buttonClicked");
        }
        if (target.id ==="taxOne") {
            taxArea.textContent = "I grupa podatkowa: małżonek, wstępni (rodzice, dziadkowie, pradziadkowie), zstępni (dzieci, wnuki, prawnuki), pasierb, ojczym, macocha, rodzeństwo, teściowie, zięć, synowa";
            target.classList.add("buttonClicked");
        }
        if (target.id ==="taxTwo") {
            taxArea.textContent = "II grupa podatkowa: zstępni rodzeństwa (np. dzieci siostry, wnuki brata), rodzeństwo rodziców (np. ciotki, wujowie), zstępni i małżonkowie pasierbów, małżonkowie rodzeństwa i rodzeństwo małżonków, małżonkowie rodzeństwa małżonków, małżonkowie innych zstępnych (np. mąż wnuczki)";
            target.classList.add("buttonClicked");
        }
        if (target.id ==="taxThree") {
            taxArea.textContent = "III grupa podatkowa: pozostali nabywcy.";
            target.classList.add("buttonClicked");
        }
        return target.id;
    }
}