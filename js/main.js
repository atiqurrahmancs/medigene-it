const sendMessage = document.getElementById('send-message');
const popupContainer = document.getElementById("feedback");
const nameInput = document.getElementById("sender"); // input field
const senderMail = document.getElementById('sender-mail');
const senderCompany = document.getElementById('sender-company');
const senderMessage = document.getElementById('sender-message');

sendMessage.addEventListener("click", function(event){
  event.preventDefault();

  const userName = nameInput.value; // input value

  popupContainer.innerHTML = `
    <div class="fixed inset-0 flex items-center justify-center bg-black/50">
      <div class="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 class="text-xl font-bold mb-4">✅ Thank You, ${userName}!</h2>
        <p>Your message has been received.</p>
        <button id="close-popup" class="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Close
        </button>
      </div>
    </div>
  `;
    // popup close
  document.getElementById("close-popup").addEventListener("click", function () {
    popupContainer.innerHTML = ""; 
    nameInput.value = '';
    senderMail.value = '';
    senderCompany.value = '';
    senderMessage.value = '';
  });
});

