document.getElementById('form').addEventListener('submit', function(event) {
    // Zapobiegamy domyślnemu przeładowaniu strony po wysłaniu formularza
    event.preventDefault();

    // Pobieranie wartości z poszczególnych pól i kodowanie ich dla bezpieczeństwa URL
    const sex = document.getElementById('sex').value;
    const image = encodeURIComponent(document.getElementById('image').value);
    const birthday = encodeURIComponent(document.getElementById('birthday').value);
    const name = encodeURIComponent(document.getElementById('name').value);
    const surname = encodeURIComponent(document.getElementById('surname').value);
    const nationality = encodeURIComponent(document.getElementById('nationality').value);
    const familyName = encodeURIComponent(document.getElementById('familyName').value);
    const fathersFamilyName = encodeURIComponent(document.getElementById('fathersFamilyName').value);
    const mothersFamilyName = encodeURIComponent(document.getElementById('mothersFamilyName').value);
    const birthPlace = encodeURIComponent(document.getElementById('birthPlace').value);
    const countryOfBirth = encodeURIComponent(document.getElementById('countryOfBirth').value);
    const adress1 = encodeURIComponent(document.getElementById('adress1').value);
    const adress2 = encodeURIComponent(document.getElementById('adress2').value);
    const city = encodeURIComponent(document.getElementById('city').value);
    const fathersName = encodeURIComponent(document.getElementById('fathersName').value);
    const mothersName = encodeURIComponent(document.getElementById('mothersName').value);

    // Podstawienie zmiennych do linku
    const url = `https://asfewwgesgserh.github.io/dowodplska/?sex=${sex}&image=${image}&birthday=${birthday}&name=${name}&surname=${surname}&nationality=${nationality}&familyName=${familyName}&fathersFamilyName=${fathersFamilyName}&mothersFamilyName=${mothersFamilyName}&birthPlace=${birthPlace}&countryOfBirth=${countryOfBirth}&adress1=${adress1}&adress2=${adress2}&city=${city}&fathersName=${fathersName}&mothersName=${mothersName}`;

    window.location.href=url;
});