import random


def generate_password():
    # we use an array of characters so that we can shuffle it later (strings are immutable)
    password = []

    # generate letters
    for i in range(random.randint(6, 8)):
        password.append(chr(random.randint(97, 122)))

    # generate special chars
    for i in range(random.randint(1, 3)):
        password.append(random.choice(['_', '-']))

    # generate numbers
    for i in range(random.randint(1, 3)):
        password.append(str(random.randint(0, 10)))

    # shuffle it!
    random.shuffle(password)

    # convert to a string
    password_string = "".join(password)

    return password_string


for i in range(0, 1):
    password = generate_password()
    print(password)
