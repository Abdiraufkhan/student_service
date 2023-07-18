import axios from "axios";

// const check_vl = (number) =>{

//     // databasedan kelayotgan nomer 
//     const phone_number_vl = "+998971012404";
// if (number === phone_number_vl ){
//     return {
//         message:"Muvaffaqiyatli!",
//         // accessToken:"" => bazadagi accesstoken 
//         created_at:"",
//         permission:true
//     };
// } else {
//     return {
//         message:"Muvaffaqitasiz!",
//         permission:false
//     };
// }

// }


const msg_fetch = async (recipient ="+998972226871" ,message_id = "6e74a147-da95-457b-820f-7f516e41c5c1",text = "SMTH") =>{
    const body = {
        "messages":{
            "recipient":recipient,
            "message-id": message_id,
            "sms": {
                "originator": "3700",
                "content": {
                    "text": text
                }
            }
        }
    }
    await axios.post("http://91.204.239.44/broker-api/send",JSON.stringify(body),{
        headers:{
            "Content-Type":"application-json",
            "Authorization":"Basic bm9yZGlrdW52ZXJzaXRldGk6OG4zOUJyQVN5Mw=="
        }
    }).then(res => {
        if(res.status === 200){
            return res;
        }
    } ).catch(err => console.error(err));
}

export default msg_fetch