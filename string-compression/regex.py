import re
s = 'a12b56c1a2b4b40a22c3'

dictionary = {}


def betterCompression(s):
    regex = re.findall(r'([a-z]+)([0-9]+)', s)

    for pairing in regex:
        if pairing[0] in dictionary:
            dictionary[pairing[0]] = dictionary[pairing[0]] + int(pairing[1])
        else:
            dictionary[pairing[0]] = int(pairing[1])

    characters = list(map(chr, range(97, 123)))
    final = ''

    for letter in characters:
        pairing = dictionary.get(letter)
        if pairing != None:
            final += letter + str(pairing)

    print(final)
    return final


betterCompression(s)
