cupcakes = open('CupcakeInvoices.csv')

for i in cupcakes:
    print(i)

for i in cupcakes:
    print(i.split(',')[2])

for i in cupcakes:
  things = i.split(',')
  total = int(things[3]) * float(things[4])
  print(total)

total = 0

for i in cupcakes:
  things = i.split(',')
  total = total + (int(things[3]) * float(things[4]))

print(total)