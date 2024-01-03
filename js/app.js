// Seleção de elementos

const container = document.getElementById("container")
const qrCodeBtn = document.getElementById("btn-generator")
const qrCodeInput = document.getElementById("input-QrCode")
const qrCodeImg = document.getElementById("img-qr-code")

// Funções 

function generatorQrCode () {
  const qrCodeInputValue = qrCodeInput.value

  if(!qrCodeInputValue) return

  qrCodeBtn.innerText = "Gerando Qr Code...."

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

  qrCodeImg.addEventListener("load", () =>{
    container.classList.add("active")
    qrCodeBtn.innerText = "Qr Code gerado!"
  })
}

// Eventos

// Gerar Codigo Qr

qrCodeBtn.addEventListener("click", () => {
  generatorQrCode()
})

// Gerar Codigo Qr com a tecla enter 

qrCodeInput.addEventListener("keydown", (e) => {
  if(e.code === "Enter"){
    generatorQrCode()
  }
})

// Limpar Qr Code

qrCodeInput.addEventListener("keyup", () => {
  if(!qrCodeInput.value){
    container.classList.remove("active")
    qrCodeBtn.innerText = "Gerar QR Code"

  }
})