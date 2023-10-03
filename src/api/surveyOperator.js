import request from "/src/api/request"

const api_name = `/survey`

export default {
    /**
     * 通过玩家uid找回干员信息
     * @param data  用户凭证，uid等
     * @returns {*} 是否成功的状态
     */
    retrievalOperatorDataByUid(data){
        return request({
            url: `${api_name}/operator/retrieval/uid`,
            method: "post",
            data: data,
        })
    },

    /**
     * 到入森空岛数据
     * @param data
     * @returns {*} 是否成功的状态
     */
    importSKLandOperatorData(data){
        return request({
            url: `${api_name}/operator/retrieval/uid`,
            method: "post",
            data: data,
        })
    },

    /**
     * 重置干员练度数据
     * @param data
     * @returns {*} 是否成功的状态
     */
    resetOperatorData(data){
        return request({
            url: `${api_name}/operator/reset`,
            method: "post",
            data: data,
        })
    }

}
