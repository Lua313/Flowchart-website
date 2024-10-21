function decision(answer) {
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const followup1 = document.getElementById('followup1');
    const arrow1 = document.getElementById('arrow1');

    if (answer === 'yes') {
        // If yes, show step 2 and arrow 1
        step1.style.display = 'none';
        arrow1.style.display = 'block'; // Show arrow
        step2.style.display = 'block';
        followup1.style.display = 'block'; // Show follow-up question
    } else {
        // If no, show result
        step1.style.display = 'none';
        document.getElementById('result').innerHTML = "<p>Fenster A Vorausrechnung und Checkout Kein Versand.</p>";
        document.getElementById('result').style.display = 'block';
    }
}

function decision2(answer) {
    const followup1 = document.getElementById('followup1');
    const emailQuestion = document.getElementById('emailQuestion');
    const changeRecipient = document.getElementById('changeRecipient');
    const arrow2 = document.getElementById('arrow2');
    const arrow3 = document.getElementById('arrow3');

    if (answer === 'yes') {
        // If yes, show email question
        followup1.style.display = 'none';
        arrow2.style.display = 'block'; // Show arrow
        emailQuestion.style.display = 'block';
    } else {
        // If no, show change recipient
        followup1.style.display = 'none';
        arrow2.style.display = 'block'; // Show arrow
        changeRecipient.style.display = 'block';
    }
}

function finish() {
    const emailQuestion = document.getElementById('emailQuestion');
    const changeRecipient = document.getElementById('changeRecipient');
    const optionC = document.getElementById('optionC');
    const result = document.getElementById('result');

    // Hide all steps
    emailQuestion.style.display = 'none';
    changeRecipient.style.display = 'none';
    optionC.style.display = 'none';
    result.innerHTML = "<p>Prozess abgeschlossen.</p>";
    result.style.display = 'block';
}

// To display Option C if needed
function showOptionC() {
    const optionC = document.getElementById('optionC');
    optionC.style.display = 'block';
}

