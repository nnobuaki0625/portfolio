// Created by 2023 N.Nobuaki

const clock = () => {
    //現在の日時と詳細を取得する関数
    const d = new Date();

    let year = d.getFullYear();
    let month = d.getMonth() +1;
    let date = d.getDate();
    let dayNum = d.getDay();
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = weekday[dayNum];
    let hour = d.getHours()
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let msec = d.getMilliseconds();
    let formattedMsec = String(msec).charAt(0);

    //　１行の場合は０を足して２桁にする三項演算子
    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    //日付と時刻の文字列を作成
    let today = `${year}.${month}.${date}.${day}`;
    let time = `${hour}:${min}:${sec}.${formattedMsec}`;

    //文字列を出力
    document.querySelector(".clock-date").innerText = today;
    document.querySelector(".clock-time").innerText = time;
}

    //0.11秒ごとにclock関数を呼び出す記述
    setInterval(clock, 100);
