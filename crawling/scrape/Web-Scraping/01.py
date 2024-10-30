""" from urllib.request import urlopen
html = urlopen("http://pythonscraping.com/pages/page1.html")
print(html.read()) """


""" from urllib.request import urlopen
from bs4 import BeautifulSoup

html = urlopen("http://pythonscraping.com/pages/page1.html")
bs = BeautifulSoup(
    html, "html.parser"
)  # html: 파일 객체, html.parser: html 파서 (lxml, html5lib 등이 있으나 설치해야함)
print(bs.h1) """


from urllib.request import urlopen
from urllib.error import HTTPError
from bs4 import BeautifulSoup

def getTitle(url):
    try:
        html = urlopen(url)
    except HTTPError as e:
        return None
    try:
        bs = BeautifulSoup(html.read(), "html.parser")
        title = bs.body.h1
    except AttributeError as e:
        return None
    return title

title = getTitle("http://pythonscraping.com/pages/page1.html")
if title == None:
    print("Title could not be found")
else:
    print(title)
