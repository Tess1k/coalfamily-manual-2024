> „Coalfamily je rodina. Jak se ale píše coalfamily?“

V rámci společné vizuální identity coalfamily využíváme dvě rodiny typu písma pro všechny značky. Rozdělujeme jej na primární a sekundární. Primární typ písma neboli primární font, patří do rodiny patkových. Sekundární naopak do kategorie bezpatkových. Primární font využíváme zejména pro nadpisy, sekundární spíše pro odstavcový text.

## Primární font
> Lekton

Primární font s názvem Lekton je volně dostupným typem písma z knihovny Google Fonts. Jeho licenční ujednání jej povolují používat pro nekomerční, i komerční účely. Autorem fontu Lekton je společnost ISIA Urbino.
Jeho použití je ve srovnání s fontem sekundárním spíše menšinové, zejména pro nadpisy a dekorativní texty. Tvar připomínající patková písma využívaná v editorech kódu odkazuje na zaměření organizací rodiny coalfamily. Pro zachování dobrého vkusu je povolené použití pouze řezů Regular a Bold.

Pro jeho dekorativní povahu je font používán jen pro dostatečně velké nadpisy a dekorativní texty. Díky jeho konzolovému vzhledu jej lze použít například ve stylu počítačového terminálu, nebo kusu kódu.

```type
{
  "headings": [98,28,21,16,14,12],
  "font": "Lekton",
}
```
```download
title: Font Lekton (.zip)
subtitle: 85 kB
url: assets/Lekton.zip
```

## Sekundární font
> Inter

Font Inter je sekundárním typem písma používající se především pro odstavcový text. Autorem je Rasmus Andersson a font disponuje stejným licenčním ujednáním jako font primární. Stejně tak je dostupný v knihovně písem Google Fonts.

Bezpatkový font, který používáme pro odstavce a všechny texty vyžadující snadnou čitelnost. Narozdíl od primárního typu písma zde využíváme řezy: Thin, Light, Regular, Semibold, Bold a Black.

Pozor: rodina Inter neobsahuje řez Italic neboli kurzívu.

Používá se pro většinu textů, neboť se jedná o standardní bezpatkový font, který stejně jako font primární disponuje kompletní českou diakritikou. V případě potřeby lze tento font využít i jako podnadpis, pakliže požadujeme méně dekorativní vzhled textu.

```type
{
    "headings": [
        { "label": "Podnadpis", "value": 30 }
    ],
    "paragraphs": [
        { "label": "Odstavec", "value": "15/30" },
        { "label": "Odstavec", "value": "12/22.5" }
    ],
    "font": "Inter",
}
```
```download
title: Font Inter (.zip)
subtitle: 1.8 MB
url: assets/Inter.zip
```
