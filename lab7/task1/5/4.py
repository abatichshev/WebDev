def Election(x, y, z):
    count_true = int(x) + int(y) + int(z)
    if count_true > 1:
        return True
    else:
        return False

x, y, z = map(int, input().split())


print(int(Election(x, y, z)))