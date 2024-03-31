> „Věčný boj ajťáků - světlé nebo tmavé téma? Nebo snad oboje?“

Pro značku coalfamily byly vybrány následující tři primární barvy. Od těchto barev je možné v případě potřeby odvozovat barvy doplňkové s přihlédnutím k dobrému vkusu a zachování barevné harmonie. V této kapitole se budeme věnovat definici těchto barev, popíšeme vhodné použití a uvedeme jejich barevné kódy.

## Primární a sekundární barvy
> jejich použití, HEX, RGB a CMYK kódy

#### Mentolová zelená
Nebeská modrá je základní barvou značky, používá se ve znaku loga, i jako barva dekorací. Lze použít i jako barva podkladová za zachování dobrého vkusu.

#### Bílá
Pro práci s materiály značky coalfamily je bílá doporučována jako hlavní podkladová barva. Inverzní barevný model využívejte co nejméně.

#### Tmavá šedá
Tato téměř černá barva (označována však jako tmavá šedá) se používá jako barva textů. Pakliže využíváme inverzní model, lze ji použít jako barvu podkladu.

```color
span: 3
name: "Mentolová zelená"
value: "#26C672"
```

```color
span: 1.5
name: "Bílá"
value: "#FFFFFF"
```

```color
span: 1.5
name: "Tmavá šedá"
value: "#27251F"
```

```table
span: 6
rows:
  - Barva: Mentolová zelená
    HEX kód: "#26C672"
    RGB kód: 38/198/114
    CMYK kód: 70/0/70/0
  - Barva: Bílá
    HEX kód: "#FFFFFF"
    RGB kód: 255/255/255
    CMYK kód: 0/0/0/0
  - Barva: Tmavá šedá
    HEX kód: "#27251F"
    RGB kód: 39/37/31
    CMYK kód: 0/0/0/97  
```
## Doporučení pro práci s barvami
Primární barva vychází z hexadecimálního kódu, resp. z vyjádření barvy v prostoru RGB. Její následný zápis v barevném prostoru CMYK je upravený tak, aby hodnotami byla celá čísla. Pokud budou z primární zelené vyvozovány další doplňkové barvy, apelujeme na zachování barevné harmonie s primární barvou.

Stějně jako u primární barvy, i sekundární vycházejí z vyjádření v barevném prostoru RGB. U těchto barev je třeba dbát zvýšené pozornosti zejména při změně barevného prostoru z RGB na CMYK nebo opačně. Tmavě šedá RGB barva totiž přímo neodpovídá svému ekvivalentu v prostoru CMYK, tudíž je třeba vždy kód barvy mírně upravit. Povšimněte si, že v prostoru CMYK je tmavá šedá složena pouze z 97% černé. Zřetel také berte na přesné definování barev, aby nevznikaly lehce odlišné odstíny.