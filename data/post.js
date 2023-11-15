import { USER } from "./user";

export const POSTS = [
    {
        imageURL:
            "https://f64-zpg-r.zdn.vn/803139752451094659/caf6b42dba256c7b3534.jpg",
        user: USER[2].user,
        likes: 1903,
        caption: "Mãi mãi một tình yêu =))",
        profile_picture: USER[2].image,
        address: "Hanoi, Vietnam",
        comments: [
            {
                user: "im.hieu037",
                comment: "Bú bú bú bú 😝",
            },
            {
                user: "vietemmm03",
                comment: "Đẹp đôi đấy 🤡",
            },
        ],
    },
    {
        imageURL:
            "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.15752-9/332060186_1851521718546713_1408545194970932353_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFHlfD1w4GLHZLOlhdKUhnnYwTo7TZcLZRjBOjtNlwtlD4P9FeJLXM0EAb_pdtkdHP5LxXOwhSWU3XXTV4v8X7E&_nc_ohc=e6fdZr4lEHIAX_Esdxg&_nc_ht=scontent.fhan3-2.fna&oh=03_AdT5fwAF_1xSZFExabBXBSbA1om4pn0qREOGH9IBFBaW_Q&oe=657C2C23",
        user: USER[1].user,
        likes: 524,
        caption: "Quá đẹp trai =))",
        profile_picture: USER[1].image,
        address: "Thaibinh, Vietnam",
        comments: [
            {
                user: "hieeus.ngx",
                comment: "Đần 😬",
            },
            {
                user: "hailn15_",
                comment: "Đêm qua em tuyệt lắm 🫣",
            },
        ],
    },
    {
        imageURL:
            "https://f12-zpc.zdn.vn/84235859802612019/023e3216351ee340ba0f.jpg",
        user: USER[3].user,
        likes: 1672,
        caption: "Vợ anh =))",
        profile_picture: USER[3].image,
        address: "Hanoi, Vietnam",
        comments: [
            {
                user: "hieeus.ngx",
                comment: "Anh đến đây để thu họ. Nộp họ đi em",
            },
        ],
    },
];
