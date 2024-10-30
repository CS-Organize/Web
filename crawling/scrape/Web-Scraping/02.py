""" 
findAll(tag, attributes, recursive, string, limit, keywords)
find(tag, attributes, recursive, string, keywords)
"""

""" from urllib import request
from bs4 import BeautifulSoup

html = request.urlopen('https://www.pythonscraping.com/pages/warandpeace.html')
bs = BeautifulSoup(html, 'html.parser')

nameList = bs.findAll('span', {'class': 'green'})
for name in nameList:
    print(name.get_text()) """


""" from urllib import request
from bs4 import BeautifulSoup

html = request.urlopen("https://www.pythonscraping.com/pages/warandpeace.html")
bs = BeautifulSoup(html, "html.parser")

nameList = bs.findAll(string = "the prince") # string
print(len(nameList)) """


from urllib import request
from bs4 import BeautifulSoup

html = request.urlopen("https://www.pythonscraping.com/pages/warandpeace.html")
bs = BeautifulSoup(html, "html.parser")
print(bs)

texts = bs.findAll(class_ = "red") # class는 예약어이므로 class_로 사용
for text in texts:
    print(text.get_text())

# ~p 43
