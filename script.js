// العناصر
const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

// إرسال الرسالة
sendButton.addEventListener('click', () => {
    const messageText = messageInput.value.trim();
    if (messageText !== '') {
        addMessage(messageText, 'sent');
        messageInput.value = '';
        simulateReply();
    }
});

// إضافة رسالة إلى الشات
function addMessage(text, type) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', type);
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; // التمرير إلى الأسفل
}

// محاكاة رد الطرف الآخر
function simulateReply() {
    setTimeout(() => {
        addMessage('تم استلام رسالتك!', 'received');
    }, 1000);
}
