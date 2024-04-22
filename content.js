




function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    // 画像ファイルのURL
    const imageURL = chrome.runtime.getURL('images/George.png');
    const imageElement = document.createElement('img');

    imageElement.onload = function() {
        // 画像の読み込みが完了したときの処理
        document.documentElement.innerHTML = '';
        // document.documentElement.appendChild(imageElement);
    };
    // await sleep(1000);
    imageElement.src = imageURL;

    // // 音声ファイルのURL
    // const audioURL = chrome.runtime.getURL('audio/gatide_kikikan.mp3');

    // // 音声要素を作成
    // const audioElement = new Audio(audioURL);

    // // 音声再生
    // audioElement.play();



    msgs = [
        "弱いって",
        "厳しいって",
        "モテないって",
        "マジで危機感持った方がいい"
    ]
    const randomMsg = msgs[Math.floor(Math.random() * msgs.length)];
    // window.alert(randomMsg);
    // window.alert(randomMsg);
    
    document.addEventListener("DOMContentLoaded", function() {
        const messageDiv = document.createElement("div");
        messageDiv.textContent = randomMsg;
        
        const container = document.createElement("div");
        container.classList.add("center");
        container.appendChild(imageElement);
        container.appendChild(messageDiv);
        document.body.appendChild(container);
    });




    // 画像がクリックされたときのイベントリスナーを設定
    imageElement.addEventListener("click", function() {
        // 音声ファイルのURLを取得
        const audioURL = chrome.runtime.getURL('audio/gatide_kikikan.mp3');

        // 音声要素を作成
        const audioElement = new Audio(audioURL);

        // 音声再生
        audioElement.play();
    });
}

main();

// // popup the Geroge.png in window and aloud the Kibisii.mp3


// // 音声ファイルのURL
// const audioURL = chrome.runtime.getURL('audio/gatide_kikikan.mp3');

// // 音声要素を作成
// const audioElement = new Audio(audioURL);

// // 音声再生
// audioElement.play();
