def czytaj_plik(nazwa_pliku):
    slowa = []
    with open(nazwa_pliku) as plik:
        for linia in plik.read().split("\n"):
            if linia:
                slowa.append(linia)
    return slowa

def zadanie1():
    slowa = czytaj_plik("slowa.txt")
    with open("wyniki4_1.txt", "w") as plik:
        for slowo in slowa:
            if slowo.count("w") == slowo.count("k"):
                plik.write(slowo + "\n")

def ile_wakacje(slowo):
    max_liczba = None
    for litera in "wakcje":
        if max_liczba is None:
            max_liczba = slowo.count(litera)
            continue
        elif litera == "a":
            liczba = slowo.count(litera) // 2
        else:
            liczba = slowo.count(litera)

        if liczba < max_liczba:
            max_liczba = liczba
    return max_liczba

def zadanie2():
    slowa = czytaj_plik("slowa.txt")
    with open("wyniki4_2.txt", "w") as plik:
        for slowo in slowa:
            plik.write(str(ile_wakacje(slowo)) + " ")

def skresl(slowo):
    pelne_slowo = False
    wakacje = "wakacje"
    indeks = 0
    ile = 0
    for litera in slowo:
        if litera == wakacje[indeks]:
            indeks += 1
        else:
            ile += 1
        if indeks >= len(wakacje):
            pelne_slowo = True
            indeks = 0

    if pelne_slowo:
        return ile + indeks
    return len(slowo)

def zadanie3():
    slowa = czytaj_plik("slowa.txt")
    with open("wyniki4_3.txt", "w") as plik:
        for slowo in slowa:
            plik.write(str(skresl(slowo)) + " ")

zadanie1()
zadanie2()
zadanie3()
