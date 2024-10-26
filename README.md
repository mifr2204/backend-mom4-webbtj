I detta repository har jag skapat en enkel REST API med Express
Jag har använt Mongodb som databas. 
Funktionalitet för CRUD finns

Apiet använder port 3000



Länk till webbsida
https://studenter.miun.se/~mifr2204/backend/azure-backend-mom4-sida/index.html

länk till app
https://squid-app-uysgr.ondigitalocean.app/workplaces

länk till git webbtjänst
https://github.com/mifr2204/backend-mom4-webbtj.git

länk till git webbsida
https://github.com/mifr2204/backend-mom4-sida.git


Installation och databas
Mongodb används som databas av APIet. 
Klona ner källkodsfilerna, kör kommandona: npm install sedan node server.js (npm start)

Användning
Hur man nå APIet:

Metod	Ändpunkt	    Beskrivning
GET	    /workplaces	    Hämtar alla tillgängliga arbetsplatser.
POST	/workplaces	    Lagrar en ny arbetsplats.
PUT	    /workplaces/:ID	Uppdaterar en arbetsplats. 
DELETE	/workplaces/:ID	Raderar en arbetsplats.


Ett arbetsplats-objekt returneras/skickas som JSON med följande struktur:

{
   "companyname": "Frösunda",
   "location": "Nässjö",
   "startdate": "2010-01-01",
   "enddate": "2016-02-01",
   "title": "Personlig assistent/teamleader",
   "description": "Vara hos olika kunder och hjälpa dom i vardagen, planera schema med mera"
}