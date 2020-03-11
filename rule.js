module.exports = {
    * beforeSendResponse(requestDetail, responseDetail) {
        const _url = requestDetail.url;
        const newResponse = responseDetail.response;

        if (_url.includes('mp.weixin.qq.com')) {

            if (_url.includes("mp.weixin.qq.com/mp/profile_ext")) {
                if (requestDetail.requestOptions.method == "GET") {
                    console.log(_url);
                    // console.log(responseDetail.response.body.toString());
                }
            }

            if (_url.includes("mp.weixin.qq.com/mp/appmsg_comment")) {
                if (_url.includes("getcomment")) {
                    const myURL = new URL(_url);
                    console.log(myURL.searchParams.get("appmsgid"), "appmsg_comment");
                    // console.log(JSON.parse(responseDetail.response.body.toString()));
                }
            }

            if (_url.includes("mp.weixin.qq.com/mp/getappmsgext")) {
                const myURL = new URL(requestDetail.requestOptions.headers.Referer);
                console.log(myURL.searchParams.get("mid"), "getappmsgext");
                // console.log(JSON.parse(responseDetail.response.body.toString()));
            }

            // 
            if (_url.includes("mp.weixin.qq.com/s?__biz=")) {

            }

            return responseDetail;
        }


        // const localResponse = {
        //     statusCode: 200,
        //     header: { 'Content-Type': 'application/json' },
        //     body: '{"hello": "this is local response"}'
        // };
        // if (requestDetail.url.indexOf('http://httpbin.org') === 0) {
        //     return {
        //         response: localResponse
        //     };
        // }
    },
};