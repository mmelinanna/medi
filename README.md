#Einführung

Diese Webanwendung soll Sanitätshäuser bei dem Beratungsprozess bei Kompressionsstrümpfen unterstützen. Die Anwendung ermöglicht das Einscannen von Rezepten, das Ausfüllen eines Fragebogens und liefert darauf basierend passende Produkte. 
Technologien
•	Frontend: Angular
•	Backend: Node.js, Express
•	Datenbank: MySQL

##Installationen
Voraussetzungen installieren
1.	Node.js und npm installieren
o	Gehe zur Node.js Website und lade die neueste LTS-Version herunter.
o	Folge den Installationsanweisungen für dein Betriebssystem.
o	Überprüfe die Installation, indem du die folgenden Befehle in deinem Terminal ausführst:
```
node -v
npm -v
```
2.	Angular CLI installieren
o	Installiere die Angular CLI global, indem du den folgenden Befehl in deinem Terminal ausführst:
npm install -g @angular/cli
o	Überprüfe die Installation, indem du den folgenden Befehl ausführst:
```
ng version
```
3.	MySQL installieren
o	Lade MySQL von der offiziellen MySQL-Website herunter und installiere es.
o	Stelle sicher, dass der MySQL-Server läuft und du Zugriff auf die MySQL-Shell hast.
o	Überprüfe die Installation, indem du die MySQL-Shell öffnest:
```
mysql -u root -p
```
4.	Repository klonen
•	Klone das Angular-Projekt-Repository von GitHub:
```
git clone https://github.com/benutzername/projektname.git
cd projektname
```
5.	Abhängigkeiten installieren
•	Navigiere in das Verzeichnis des Frontend-Projekts und installiere die notwendigen Abhängigkeiten:
```cd frontend```
npm install
6.	Backend-Konfiguration 
•	Navigiere in das Backend-Verzeichnis und installiere die notwendigen Abhängigkeiten:
```
cd ../backend
npm install
```

7.	Datenbankkonfiguration
1.	Erstelle eine MySQL-Datenbank. 
(Nutze die sql Skripte zur Erstellung der DB und Tabellen, sowie das Einfügen der Produktdaten)

2.	Füge eine .env Datei im backend Verzeichnis hinzu und konfiguriere sie wie folgt:
```
env
DB_HOST=localhost
DB_USER=dein_mysql_benutzername
DB_PASSWORD=dein_mysql_passwort
DB_NAME=dein_datenbankname
```

Anwendung starten
1.	Backend starten
Navigiere zum backend Verzeichnis und starte den Server (über das Terminal):

```
cd backend
npm start oder node server.js
```
Der Server sollte jetzt unter http://localhost:3000 laufen.
2.	Frontend starten
Navigiere zum frontend Verzeichnis und starte die Angular Anwendung 
(über das Terminal):
```
cd frontend
ng serve
```
Die Anwendung sollte jetzt unter http://localhost:4200 verfügbar sein.

##Weitere Infos zur Projektstruktur

Backend Struktur:
•	config/dbConfig.js: Separate Konfigurationsdatei für die MySQL-Verbindung.
•	models/Product.js: Modell für Produktoperationen, das auf die Datenbank zugreift.
•	controllers/ProductController.js: Controller, der die Geschäftslogik für Produktoperationen enthält.
•	routes/productRoutes.js: Definiert API-Routen für Produktoperationen und nutzt den entsprechenden Controller.
•	server.js: Hauptdatei für die Express.js App, konfiguriert Middleware, registriert Routen und startet den Server.

Frontend Struktur:
Das Frontend-Projekt ist in verschiedene Komponenten unterteilt, die jeweils spezifische Funktionen und Bereiche der Anwendung abdecken. Diese Komponenten sind in Verzeichnissen organisiert.
Hauptverzeichnis app
•	app-routing.module.ts: Konfiguriert die Routen für die Anwendung.
•	app.component.html: Haupt-HTML-Template der Anwendung.
•	app.component.spec.ts: Spezifikationsdatei für Komponententests.
•	app.component.ts: Hauptkomponente der Anwendung.
•	app.module.ts: Hauptmodul der Anwendung, welches die Abhängigkeiten und Deklarationen enthält.
Die Frontend-Struktur besteht aus verschiedenen Komponenten, die jeweils ihre eigenen CSS-, HTML-, Spezifikations- und TypeScript-Dateien haben. Diese Komponenten sind nach Funktionen und Bereichen der Anwendung organisiert, wie Measurements, Prescription, Product Detail, Product Suggestions, Questionaire und Stepper. Zusätzlich gibt es Services für Datenoperationen, Produktoperationen und Stepper-Operationen. 
Services
•	data.service.ts: Service-Datei für Datenoperationen.
•	product.service.ts: Service-Datei für Produktoperationen.
•	stepper.service.ts: Service-Datei für Stepper-Operationen.

