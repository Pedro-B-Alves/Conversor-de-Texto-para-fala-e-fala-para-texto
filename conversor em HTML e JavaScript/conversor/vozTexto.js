const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
console.log(new SpeechRecognition())

var recognition = new SpeechRecognition()

var textbox = $('#textbox')

var instructions = $('#instructions')

var content = ''

recognition.continuous = true

//função start

recognition.onstart = function () {
  instructions.text('Gravando')
}

recognition.onspeechend = function () {
  instructions.text('Pausado')
}

recognition.onerror = function () {
  instructions.text('Tente novamente')
}

recognition.onresult = function (event) {
  var current = event.resultIndex

  var transcript = event.results[current][0].transcript

  content += transcript

  textbox.val(content)
}

$('#falar-btn').click(function (event) {
  if (content.length) {
    content += ''
  }

  recognition.start()
})

textbox.on('input', function () {
  content = $(this).val()
})
