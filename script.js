// 駅のデータ
const stations = {
    "千種": {
        exits: {
            "1番出口": "c1号車",
            "2番出口": "c2号車"
        }
    },

    "今池": {
        exits: {
            "1番出口": "m1号車",
            "2番出口": "m2号車"
        }
    },

    "池下": {
        exits: {
            "1番出口": "k1号車",
            "2番出口": "k2号車"
        }
    }
};


// 検索
function search() {

    const start = document.getElementById("start").value;
    const goal = document.getElementById("goal").value;
    const result = document.getElementById("result");

    if (start === "" || goal === "") {
        result.innerHTML = "始点と終点を選択してください。";
        return;
    }

    if (start === goal) {
        result.innerHTML = "始点と終点が同じ駅です。";
        return;
    }

    // とりあえず終点の出口情報を表示
    const exits = stations[goal].exits;

    result.innerHTML = `
        <strong>${start} → ${goal}</strong>
        <br><br>
        ${Object.entries(exits).map(
            ([exit, car]) => `${exit}：${car}`
        ).join("<br>")}
    `;
}