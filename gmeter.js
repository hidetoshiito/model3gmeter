const express = require("express");
const cors = require('cors');
const app  = express();
app.use(cors());
const port = 3000;

function drive_state(id, token, res) {
    const axios = require('axios');
    axios.get(`https://owner-api.teslamotors.com/api/1/vehicles/${id}/data_request/drive_state`, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
            console.dir(response.data.response);
            res.json({drive_state: response.data.response, id: id});
        })
        .catch((error) => {
            console.dir(error.response.data);
            res.json({result: 'error', msg:'drive_state error', drive_state: error.response.data.response, id: id});
        });
}

// ルーティングの設定
app.get("/", (req, res) =>{
    const axios = require('axios');
    console.log("/ へアクセスがありました");
    console.log('クエリパラメータ(token,id)の取得');
    const token = req.query.token;
    let id = req.query.id;

    // token指定がなければ終了(ヘルスチェック対応で何もしない=200 OK)
    if (!token) {
        console.log('token指定なし');
        res.json({});
        return
    }

    // idがあればID取得を端折る
    if (id) {
        drive_state(id, token, res);
    } else {
        axios.get('https://owner-api.teslamotors.com/api/1/vehicles', { headers: { Authorization: `Bearer ${token}` } })
            .then((response) => {
                console.log('車を１台しか持っていない想定で最初のidを利用する');
                id = response.data.response[0].id;
                console.log('現在のドライブ状態取得');
                drive_state(id, token, res);
            })
            .catch((error) => {
                console.dir(error.response.data);
                res.json({'result': 'error', 'msg':'vehicles get error'});
            });
    }
});

// HTTPサーバを起動する
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});
