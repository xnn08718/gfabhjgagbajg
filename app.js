// 模擬配對過程
let isChatting = false;
let chatPartner = null;

function startChat() {
    // 如果已經在聊天中，提醒用戶
    if (isChatting) {
        alert('您已經在聊天中!');
        return;
    }

    // 顯示「正在配對中...」
    document.querySelector('.main-content').innerHTML = `
        <p>開始隨機聊天！正在配對中...</p>
    `;

    // 模擬配對過程，假設 3 秒後匹配成功
    setTimeout(() => {
        isChatting = true;
        chatPartner = '匿名用戶'; // 假設匹配到一個隨機的聊天對象

        // 顯示配對結果並顯示聊天介面
        document.querySelector('.main-content').innerHTML = `
            <div class="chat-box">
                <h2>與 ${chatPartner} 的聊天</h2>
                <div class="messages" id="messages"></div>
                <input type="text" id="message-input" placeholder="輸入訊息...">
                <button onclick="sendMessage()">發送訊息</button>
            </div>
        `;
    }, 3000); // 配對過程持續 3 秒
}

function sendMessage() {
    let messageInput = document.getElementById('message-input');
    let message = messageInput.value;

    if (message) {
        let messageBox = document.getElementById('messages');
        messageBox.innerHTML += `<p><strong>您:</strong> ${message}</p>`;
        messageInput.value = ''; // 清空輸入框
    }
}


