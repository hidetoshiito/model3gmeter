const express = require("express");
const app  = express();
const port = 3000;

// ルーティングの設定
app.get("/", (req, res) =>{

    const axios = require('axios');

    const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ilg0RmNua0RCUVBUTnBrZTZiMnNuRi04YmdVUSJ9.eyJpc3MiOiJodHRwczovL2F1dGgudGVzbGEuY29tL29hdXRoMi92MyIsImF1ZCI6WyJodHRwczovL293bmVyLWFwaS50ZXNsYW1vdG9ycy5jb20vIiwiaHR0cHM6Ly9hdXRoLnRlc2xhLmNvbS9vYXV0aDIvdjMvdXNlcmluZm8iXSwiYXpwIjoib3duZXJhcGkiLCJzdWIiOiJjMTM0Mjc4Zi1hZWFjLTRjOWEtYmMwZi00NjJjYzRjNTZlMjMiLCJzY3AiOlsib3BlbmlkIl0sImFtciI6WyJwd2QiLCJtZmEiLCJvdHAiXSwiZXhwIjoxNjQwMTkzMTc5LCJpYXQiOjE2NDAxNjQzNzksImF1dGhfdGltZSI6MTY0MDA5Mzk1MH0.u_AtmBKVd3OP81VqaD23CAalPJPi7p7RPh2sClt60bFakOmWNmnFMGVJB-vQf91BxiobUVgrKJ-ACgh2ylqVAI5yW3HMQcaiWi8QpQePDewxb6HP7GqASQwyHqKkTwUBGHWulKtSrLe70zzNCbr9fHmujs2s-nF9-z2CHumzjpUWDN6zxRLin2XoMV_U1b7VTWe00sImtqW-yIGRN6IhmHTpup8vE1JeXrebq9k6bwv30LOepRffR89P5NLQGF7-DpzwEzo_ywczYJPtrbWyt2aPuSUtZHVdXEg-tX4PiQgwrtwBQnFTlLRiaI_DMGnkV7eWA9-w_o11l4hnTKM9np1na2KcGZoJYuMqueC5J9sKduc3PizBd0C5tHRhR8nBY0XJPEWzxD6u4KH-rjr2At7KbXtcGEFRJqGEF21hC6MmJ8O5zY1EsTURygNNXA3deqwNg0fafcTl_kvurJTYszWFNw63rZv1QSyfo3D7siKj1A5YiweUbyKyFpE0kXLaYceI-ieihsPTRUvdTZC5ppU8XxYuGVaQjnO62W6P8VcB2GziL8j9vrPkQ-sMf_I_aT_CSF0DLZpXT3ZJq0gILpuSdZJC0Ja243awSeqxTtOAuv06TaYrCoVwJq2dtNTQiyMG37FdT6Vbv24dILbM_HDhoXI2C-TEne9Nkxv4h2o";
    axios.get('https://owner-api.teslamotors.com/api/1/vehicles', { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
            // 処理成功2xx時のコールバック
            console.dir(response.data);
            // this.nakcat_results = response.data;
            // this.loading_member.nakcat = false;
        })
        .catch((error) => {
            // 処理失敗!not2xx時のコールバック
            // console.error(error);
            console.log('失敗');
            // this.nakcat_results = { msg: 'エラー' };
            // this.loading_member.nakcat = false;
        });


    res.json({'test': 'Hello World!'});
    console.log("/ へアクセスがありました");
});

// HTTPサーバを起動する
app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`);
});