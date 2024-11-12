// tasks.js genereret automatisk
window.taskNumber = 1;
createTextBlock(tasksContainer, {
    textContent: `
        <h2>Lineære funktioner</h2>
        <h3>Introduktion</h3>
        <p>En <em>lineær funktion</em> beskriver en sammenhæng, hvor der lægges en fast værdi til den afhængige variabel \\(f(x)\\), hver gang den uafhængige variabel \\(x\\) stiger med 1. En lineær funktion kan repræsenteres ved en ret linje i et koordinatsystem og beskrives ved forskriften:</p>
        <p>\\( f(x) = a \\cdot x + b \\)</p>
        <p>Her er \\( a \\) hældningskoefficienten, som angiver grafens hældning, og \\( b \\) er skæringen med y-aksen.</p>
    `
});

createMultipleChoiceTask(tasksContainer, {
    taskText: `Hvilken af følgende forskrifter repræsenterer en lineær funktion?`,
    options: [{"value":"A","label":"\\( f(x) = 4x + 3 \\)"},{"value":"B","label":"\\( f(x) = x^2 + 5 \\)"},{"value":"C","label":"\\( f(x) = 3x^2 - 2x + 1 \\)"}],
    correctAnswer: ["A"]
});

createMultipleChoiceTask(tasksContainer, {
    taskText: `Hvilken funktionstype er \\( f(x) = 5x - 7 \\)?`,
    options: [{"value":"A","label":"Lineær funktion"},{"value":"B","label":"Andengradspolynomium"},{"value":"C","label":"Eksponentiel funktion"}],
    correctAnswer: ["A"]
});

createTextBlock(tasksContainer, {
    textContent: `
        <h3>Eksempel: Beregning af funktionsværdi</h3>
        <p>For en funktion \\( f(x) = 2x + 3 \\) kan vi finde funktionsværdien for en givet \\( x \\)-værdi. Lad os beregne \\( f(5) \\):</p>
        <p>\\( f(5) = 2 \\cdot 5 + 3 = 10 + 3 = 13 \\)</p>
        <p>Prøv selv at beregne \\( f(10) \\) i næste opgave.</p>
    `
});

createCalculationTask(tasksContainer, {
    taskText: `Bestem \\( f(10) \\) for funktionen \\( f(x) = 2x + 3 \\).`,
    correctAnswer: ["23"]
});

createCalculationTask(tasksContainer, {
    taskText: `Beregn \\( f(-4) \\) for funktionen \\( f(x) = 2x + 3 \\).`,
    correctAnswer: ["-5"]
});

createTextBlock(tasksContainer, {
    textContent: `
        <h3>Aflæsning af funktionsværdi fra graf</h3>
        <p>En anden måde at finde værdien af \\( f(x) \\) er ved at aflæse det på en graf. I næste opgave skal du aflæse funktionsværdierne for en given funktion.</p>
        <p>Eksempel: På nedenstående graf kan vi aflæse, at hvis \\( x = 2 \\), så er \\( f(x) = 3 \\), da punktet (2,3) ligger på grafen.</p>
        <img src="opgave4.png" alt="Graf" width="400" height="400">
    `
});

createDragAndDropTask(tasksContainer, {
    taskText: `Match de følgende \\( x \\)-værdier med deres funktionsværdier ud fra ovenstående graf:`,
    pairs: [{"draggableId":"x1","draggable":"x = 0","dropzone":"2"},{"draggableId":"x2","draggable":"x = 6","dropzone":"5"},{"draggableId":"x3","draggable":"x = 4","dropzone":"4"}]
});

createDragAndDropTask(tasksContainer, {
    taskText: `Match de følgende \\( y \\)-værdier med deres \\( x \\)-værdier fra grafen:`,
    pairs: [{"draggableId":"y1","draggable":"y = 2","dropzone":"x = 0"},{"draggableId":"y2","draggable":"y = 4","dropzone":"x = 4"},{"draggableId":"y3","draggable":"y = 5","dropzone":"x = 6"}]
});

createTextBlock(tasksContainer, {
    textContent: `
        <h3>Punkt på grafen</h3>
        <p>Vi kan beregne de punkter der ligger på grafen for en lineær funktion. Eksempel: For grafen \\( f(x) = 2x + 3 \\) ser vi, at punktet (3, 9) ligger på grafen, da \\( f(3) = 2 \\cdot 3 + 3=9 \\).</p>
        <p>I næste opgave skal du matche punkter med deres korrekte placeringer på grafen.</p>
    `
});

createDragAndDropTask(tasksContainer, {
    taskText: `Match de følgende punkter med deres placering på grafen for \\( f(x) = 2x + 3 \\):`,
    pairs: [{"draggableId":"p1","draggable":"(1, ?)","dropzone":"5"},{"draggableId":"p2","draggable":"(2, ?)","dropzone":"7"},{"draggableId":"p3","draggable":"(3, ?)","dropzone":"9"}]
});

createDragAndDropTask(tasksContainer, {
    taskText: `Identificer de korrekte funktionsværdier for punkterne på grafen \\( f(x) = 3x - 2 \\):`,
    pairs: [{"draggableId":"p4","draggable":"(0, ?)","dropzone":"-2"},{"draggableId":"p5","draggable":"(2, ?)","dropzone":"4"},{"draggableId":"p6","draggable":"(-1, ?)","dropzone":"-5"}]
});

createTextBlock(tasksContainer, {
    textContent: `<h3>Betydningen af hældning og skæring</h3>
        <p>Hældningskoefficienten \\( a \\) i en lineær funktion viser, hvor meget funktionen ændrer sig hver gang \\( x \\) vokser med 1. Skæringen \\( b \\) viser, hvor grafen skærer y-aksen, når \\( x = 0 \\).</p>
 <b>Eksempel: Hældning og skæring</b>
        <p>I forskriften \\( f(x) = 3x - 4 \\) er hældningskoefficienten \\( a = 3 \\) og skæringen med y-aksen \\( b = -4 \\). Det betyder, at grafen stiger med 3 enheder for hver gang \\( x \\) øges med 1, og grafen skærer y-aksen ved \\( y = -4 \\).</p>
        <p>Prøv selv at identificere hældning og skæring i næste opgave.</p>
    `
});

createMultipleChoiceTask(tasksContainer, {
    taskText: `Hvilken af følgende funktioner har hældningen \\( a = -2 \\) og skæringen med y-aksen \\( b = 3 \\)?`,
    options: [{"value":"A","label":"\\( f(x) = -2x + 3 \\)"},{"value":"B","label":"\\( f(x) = 2x + 3 \\)"},{"value":"C","label":"\\( f(x) = -2x - 3 \\)"}],
    correctAnswer: ["A"]
});

createMultipleChoiceTask(tasksContainer, {
    taskText: `Hvad er hældningen og skæringen med y-aksen i funktionen \\( f(x) = -5x + 6 \\)?`,
    options: [{"value":"A","label":"Hældning = -5, Skæring = 6"},{"value":"B","label":"Hældning = 6, Skæring = -5"},{"value":"C","label":"Hældning = -6, Skæring = 5"}],
    correctAnswer: ["A"]
});

createTextBlock(tasksContainer, {
    textContent: `
        <h3>Find x-værdien for en given funktionsværdi</h3>
        <p>Hvis vi ved, at \\( f(x) = 2x + 3 \\) og vi ønsker at finde \\( x \\)-værdien for \\( f(x) = 9 \\), kan vi opstille ligningen:</p>
        <p>\\( 2x + 3 = 9 \\)<br>\\( 2x = 6 \\)<br>\\( x = 3 \\)</p>
    `
});

createCalculationTask(tasksContainer, {
    taskText: `Bestem \\( x \\)-værdien, der giver \\( f(x) = 11 \\) for funktionen \\( f(x) = 3x + 2 \\).`,
    correctAnswer: ["3"]
});

createCalculationTask(tasksContainer, {
    taskText: `Bestem \\( x \\)-værdien, der giver \\( f(x) = 8 \\) for funktionen \\( f(x) = 4x - 4 \\).`,
    correctAnswer: ["3"]
});

createTextBlock(tasksContainer, {
    textContent: `
        <h3>Bogstavudtryk i funktioner</h3>
        <p>En funktion kan også have bogstavudtryk som input, fx \\( f(k+1) \\) for en funktion \\( f(x) = \\frac{1}{2}x + 3 \\). Her indsætter vi \\( k+1 \\) på \\( x \\)'s plads i forskriften:</p>
        <p>\\( f(k+1) = \\frac{1}{2}(k+1) + 3 = \\frac{1}{2}k + \\frac{1}{2} + 3 \\)</p>
    `
});

createCalculationTask(tasksContainer, {
    taskText: `Beregn \\( f(a) \\) for funktionen \\( f(x) = 2x + 5 \\) ved at indsætte \\( x = a \\).`,
    correctAnswer: ["2a+5","2*a+5"]
});

createCalculationTask(tasksContainer, {
    taskText: `Beregn \\( f(k-2) \\) for funktionen \\( f(x) = 4x - 1 \\) ved at indsætte \\( x = k-2 \\).`,
    correctAnswer: ["4k-9","4*k-9"]
});

createTextBlock(tasksContainer, {
    textContent: `
        <h3>Anvendelse af lineære funktioner i praksis</h3>
        <p>Lineære funktioner bruges ofte til at modellere hverdagsproblemer. Fx kan omkostninger til en fest være lineært afhængige af antallet af gæster, hvis prisen per person er fast.</p>
        <p>Eksempel: Hvis prisen pr. gæst er 300 kr., og der er faste omkostninger på 4500 kr., så kan den samlede udgift udtrykkes som:</p>
        <p>\\( f(x) = 300x + 4500 \\)</p>
    `
});

createCalculationTask(tasksContainer, {
    taskText: `Hvis prisen pr. gæst er 250 kr. og der er faste omkostninger på 5000 kr., hvad er den samlede pris for 20 gæster?`,
    correctAnswer: ["10000"]
});

createCalculationTask(tasksContainer, {
    taskText: `Et biludlejningsfirma har en fast dagspris på 150 kr. og opkræver 5 kr. per kørt kilometer. Hvad bliver den samlede pris, hvis du kører 120 kilometer?`,
    correctAnswer: ["750"]
});

