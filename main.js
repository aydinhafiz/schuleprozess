const data = [
    {
        id: 1,
        title: "1. Als teil der Unternehmenskultur etablieren.",
        images: "src=./assets/win-win.png alt=win-win",
        emojis: "Win-Win 💵 = 💪",
        arrow: "⬇️",
        description: "Die Gewährung von Prämien an die Mitarbeiter auf diese Weise bewirkt, dass sie schneller und effektiver arbeiten."
    },
    {
        id: 2,
        title: "2. Verantwotliche festlegen.",
        images: "src=assets/Teamleader.png.jpg alt=Teamleader",
        emojis: "Team leader👍",
        arrow: "⬇️",
        description: "Eine Manager wählen oder Teamleiter damit er ganze Team Kordiniert"
    },
    {
        title: "3. Kernprozesse identifizieren und priorisieren",
        images: "src=./assets/Mission.jpg alt=Teamleader",
        emojis: "Vision 👀",
        arrow: "⬇️",
        description: "Identifizieren Sie wichtige Arbeiten und erledigen Sie diese zuerst zum Beispiel:Vervollständigen Sie Ihre Word-Datei, anstatt das Büro aufzuräumen."
    },
    {
        title: "4. Aufnehmen.",
        images: "src=./assets/Filmen.jpg alt=Filmen",
        emojis: "Filmen oder Notizen machen.📹",
        arrow: "⬇️",
        description: "Filmen Sie Mitarbeiter bei der Arbeit oder Ende des Tages machen Sie sich Notizen darüber, was der Mitarbeiter heute gemacht hat"
    },
    {
        title: "5. Visualisieren",
        images: "src=./assets/Visualisieren.jpg alt=Filmen",
        emojis: "Sichtbar machen,Zeigen 👁️",
        arrow: "⬇️",
        description: "Wir teilen die Notizen, die wir zur Lösung der Probleme gemacht haben, mit unseren Kollegen."
    },
    {
        title: "6. Messen",
        images: "src=./assets/zufriedenheitmessen.jpg alt=Filmen",
        emojis: "Zufriedenheit messen 📊",
        arrow: "⬇️",
        description: "wenn Sie ein Produkt haben und den Kommentar der Leute erhalten möchten machen sie Umfragen."
    },
    {
        title: "7. Ziele definieren",
        images: "src=./assets/Disziplin.jpg alt=Filmen",
        emojis: "Diszipliniert arbeiten 🔍",
        arrow: "⬇️",
        description: "die Arbeit konzentriert und diszipliniert erledigen zum Beispiel: Am Ende des Tages erledige ich meine Computerarbeit diszipliniert und konzentriert, um einen guten Job zu leisten."
    },
    {
        title: "8. Optimieren",
        images: "src=./assets/Optimieren.jpg alt=Filmen",
        emojis: "Verbessern 📈",
        arrow: "⬇️",
        description: "alles tun, damit der Mitarbeiter besser arbeitet zum Beispiel: Anstatt Notizen in einem Notizbuch zu machen, besorgen Sie dem Arbeiter einen Laptop, damit er besser arbeiten kann."
    },
    {
        title: "9. Trainieren",
        images: "src=./assets/Trainieren.jpg alt=Filmen",
        emojis: "Fähigkeit Verbessern 🔧",
        arrow: "⬇️",
        description: "machen Sie regelmäßige Übungen, um die Arbeit besser zu machen zum Beispiel: Es dauert lange, eine Wertetabelle in Excel zu erstellen, ich kann mich Verbessern wenn ich zu Hause übe."
    },
    {
        title: "10. Kontrolieren",
        images: "src=./assets/Kontrollieren.jpg alt=Filmen",
        emojis: "Überprüfen 🛂",
        arrow: "⬇️",
        description: "Schließlich kontrolliere ich meine Arbeit, um zu sehen, ob sie richtig ist, wenn sie falsch ist, fange ich von vorne an zum Beispiel: Nachdem ich in Excel gearbeitet habe, überprüfe ich die Werte die ich mir aufgeschrieben hab. Wenn ich es falsch geschrieben habe, werde ich es löschen und korrigieren."
    },
]

const jobs = document.querySelector(".jobs")
data.forEach(
    function (a) {
        const jobString = `<div class="job">
        <h2>${a.title}</h2>
        <div class="for-example">
            <img ${a.images}>
            <span>${a.emojis}</span>
            <div class="arrow">
                <span>⬇${a.arrow}</span>
            </div>
            <p>${a.description}</p>
        </div>`
        jobs.insertAdjacentHTML("beforeend", jobString)
    }
)