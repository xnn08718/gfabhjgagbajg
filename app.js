// 假設這裡是用來處理隨機匹配的邏輯
let isChatting = false;
let chatPartner = null;

function startChat() {
    // 假設這裡會進行用戶匹配
    if (isChatting) {
        alert('您已經在聊天中!');
        return;
    }

    isChatting = true;
    chatPartner = '匿名用戶';  // 假設匹配到一個隨機的聊天對象
    alert('您已經與 ' + chatPartner + ' 開始聊天!');

    // 假設開始顯示聊天介面
    displayChat();
}

function displayChat() {
    // 顯示聊天介面（例如，切換視圖，顯示聊天訊息區）
    document.querySelector('.main-content').innerHTML = `
        <div class="chat-box">
            <h2>與 ${chatPartner} 的聊天</h2>
            <div class="messages" id="messages"></div>
            <input type="text" id="message-input" placeholder="輸入訊息...">
            <button onclick="sendMessage()">發送訊息</button>
        </div>
    `;
}

function sendMessage() {
    let messageInput = document.getElementById('message-input');
    let message = messageInput.value;

    if (message) {
        let messageBox = document.getElementById('messages');
        messageBox.innerHTML += `<p><strong>您:</strong> ${message}</p>`;
        messageInput.value = '';  // 清空輸入框
    }
}

