const {mysql} = require('../qcloud')

module.exports = async (ctx) => {
    const {bookid, comment, openid, location, phone} = ctx.request.body
    console.log('123456', bookid, comment, openid, location, phone)
    try {
        await mysql('comments').insert({bookid, comment, openid, location, phone})
        ctx.state.data = {
            msg: 'success'
        }
    } catch (e) {
        ctx.state = {
            code: -1,
            data: {
                msg: '评论失败' + e.sqlMessage
            }
        }
    }
}
