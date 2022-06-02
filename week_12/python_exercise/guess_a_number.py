import random
rand = random.randint(1, 100)
counter = 0

while True:
    counter += 1
    guess = int(input("Please guess a number between 1 ile 100:"))
    if guess > rand:
        print("Please enter lower number")
        continue
    elif guess < rand:
        print("Please enter higher number")
        continue
    else:
        print("Random number is {0}!".format(rand))
        print("You guessed right in the {0}th option".format(counter))
        break
