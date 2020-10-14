#TASK 3
#SCRAPPING http://quotes.toscrape.com/page/1/ till page 10 and storing result in sqlite database.

#importing urllib.request library to open given url
from urllib.request import urlopen

#importing BeautifulSoup Package
from bs4 import BeautifulSoup

#ssl to make connection safe
import ssl

#sqlite for database
import sqlite3

# Ignore SSL certificate errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

#establishing connection to quotes.sqlite
conn = sqlite3.connect('quotes.sqlite')
cur = conn.cursor()

#If table already exists, than drop it first
cur.execute('DROP TABLE IF EXISTS Quotes')

#Creating table
cur.execute('CREATE TABLE Quotes (quote TEXT, author TEXT, page INTEGER)')

#inputting website (here, http://quotes.toscrape.com/page/1/)
url = input('Enter the website link to scrap :) - ')

#try opening link provided using urlopen else shows errrors in except block
try:
    #read() function for reading the file opened through urlopener
    html = urlopen(url, context=ctx).read()

    #parsing html of website
    soup = BeautifulSoup(html, "html.parser")

    #maintaing page no.
    x = 1

    #uptil 10 page it do same task
    while x < 11:
        print("Processing...... Wait!!")

        #extracting quotes and author name using find_all() function focusing on span than class = "text" or "author"
        quotes = soup.find_all('span', attrs={'class': 'text'})
        author = soup.find_all('small', attrs={'class': 'author'})

        #pushing all data to database
        for i in range(len(quotes)):
            #print(quotes[i].text, '---BY---' , author[i].text)
            #inserting data
            cur.execute('''INSERT INTO Quotes (quote, author, page) VALUES (?, ?, ?)''', (quotes[i].text, author[i].text, x))

        #checking availability of next page
        try:
            x += 1

            #getting the next page address
            nextp = soup.find('li', attrs={'class': 'next'})

            #OR

            #url = 'http://quotes.toscrape.com/page/' + x

            #appending it to main website
            url = 'http://quotes.toscrape.com' + nextp.find('a').get('href')

            html = urlopen(url, context=ctx).read()
            soup = BeautifulSoup(html, "html.parser")
        except:
            break
    conn.commit()
    print("Hurray!! Parsing has been done till page ", x-1)

except:
    print("Please check the link provided :)")

cur.close()

