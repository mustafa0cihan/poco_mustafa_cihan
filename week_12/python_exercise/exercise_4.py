users = [
    {
        "first_name": "Brain",
        "last_name": "Mohr",
        "age": 54
    },
    {
        "first_name": "Bella",
        "last_name": "VonRueden",
        "age": 17
    },
    {
        "first_name": "Franz",
        "last_name": "Raynor",
        "age": 28
    },
    {
        "first_name": "Celestino",
        "last_name": "Bailey",
        "age": 61
    }
]


def hello_users(users):
    for user in users:
        print(
            f' My name is {user["first_name"]} and I am {user["age"]} years old ')


hello_users(users)


def filter(users):
    adults = []
    children = []
    for user in users:
        if int(user["age"]) > 18:
            adults.append(user["first_name"])
        else:
            children.append(user["first_name"])
    print(adults, children)


filter(users)
