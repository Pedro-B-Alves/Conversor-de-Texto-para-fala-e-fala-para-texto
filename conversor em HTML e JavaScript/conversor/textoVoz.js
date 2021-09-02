
var txtinput = document.querySelector('#textbox')
var voicelist = document.querySelector('#voicelist')
var bntspeak = document.querySelector('#ouvir-bnt')
var synth = window.speechSynthesis;
var voices = [];

newVoices()
if (speechSynthesis !== undefined) {
    speechSynthesis.onvoiceschanged = newVoices
}

bntspeak.addEventListener('click', () => {
    var toSpeak = new SpeechSynthesisUtterance(txtinput.value)
    var selectedVoiceName = voicelist.selectedOptions[0].getAttribute('data-name')
    voices.forEach((voice) => {
        if (voice.name === selectedVoiceName) {
            toSpeak.voice = voice
        }
    })
    synth.speak(toSpeak);
})

function newVoices() {
    voices = synth.getVoices()
    var selectedIndex = voicelist.selectedIndex < 0 ? 0 : voicelist.selectedIndex
    voicelist.innerHTML = ''
    voices.forEach((voice) => {
        var listItem = document.createElement('option')
        listItem.textContent = voice.name
        listItem.setAttribute('data-lang', voice.lang)
        listItem.setAttribute('data-name', voice.name)
        voicelist.appendChild(listItem)
    })
    voicelist.selectedIndex = selectedIndex
}