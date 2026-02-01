import axios from 'axios'

const commonApi=async(reqMethod,reqUrl,reqData,reqHeader)=>{
    const config={
        method:reqMethod,
        url:reqUrl,
        data:reqData,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"} 
    }
    return await axios(config).then(res=>{
        return res
    }).catch(err=>{
        return err
    })
}

export default commonApi;