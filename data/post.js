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
            "https://scontent.fhan17-1.fna.fbcdn.net/v/t39.30808-1/395588387_1136423854005733_3720426923695898212_n.jpg?stp=dst-jpg_p480x480&_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHx0gETMEoh7NaI90avPHhyiYav0kNKtJCJhq_SQ0q0kKQSvcUskUPPQE1wU258H9BbXXEqKFN5iND4iD4lo3Qf&_nc_ohc=OeS1_qocnGoAX8CliXd&_nc_ht=scontent.fhan17-1.fna&oh=00_AfANAZDkiYXvr827c0v42_UwF4G385yxShIk8-zxGgKgvA&oe=6559E227",
        user: USER[1].user,
        likes: 524,
        caption: "tim nguoi yeu =))",
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
