import { USER } from "./user";

export const POSTS = [
    {
        imageURL:
            "https://scontent.fhan3-1.fna.fbcdn.net/v/t39.30808-6/361619189_2104218889926158_7784223562316445152_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGw79JmW9Su8jk8hLXbanGQnkAGwjvsOh-eQAbCO-w6H6jc1Bsu9sn8vCx1SFVr3mKNVJUWumRn90pyIRjNlOaQ&_nc_ohc=QhLBGNFfUroAX-MQOMI&_nc_ht=scontent.fhan3-1.fna&oh=00_AfAhExDEercUbPl38DxbzTxoB8LkUSX4dIKoWsUXd-bJYA&oe=65453782",
        user: USER[0].user,
        likes: 1903,
        caption: "Quá đẹp trai =))",
        profile_picture: USER[0].image,
        address: "Hanoi, Vietnam",
        comments: [
            {
                user: "im.hieu037",
                comment: "X 🫣",
            },
            {
                user: "nghieu2103",
                comment: "Bạn này có thật ngoài đời không 🤡",
            },
        ],
    },
    {
        imageURL:
            "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.15752-9/332060186_1851521718546713_1408545194970932353_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFHlfD1w4GLHZLOlhdKUhnnYwTo7TZcLZRjBOjtNlwtlD4P9FeJLXM0EAb_pdtkdHP5LxXOwhSWU3XXTV4v8X7E&_nc_ohc=4x-GTT_RiukAX8P5gWD&_nc_ht=scontent.fhan3-2.fna&oh=03_AdTAEU4bGUTNpgxu-iOWmI5z1gXlyEMX7anp-mNi3aK8bg&oe=656357E3",
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
                user: "nghieu2103",
                comment: "Đêm qua em tuyệt lắm 🫣",
            },
        ],
    },
    {
        imageURL:
            "https://instagram.fhan3-1.fna.fbcdn.net/v/t51.2885-15/385848035_1124420795636070_6667028566889535162_n.jpg?stp=dst-jpg_e35_p1080x1080&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=instagram.fhan3-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=Gs90w3JJPqcAX9iTuJg&edm=ACWDqb8BAAAA&ccb=7-5&ig_cache_key=MzIwNjQ0MDU2NjcxMjI4OTE1MA%3D%3D.2-ccb7-5&oh=00_AfCuSSTG44rqmd0Ao0fUe54zvKz1NC0pr75s-CMaJBQJJQ&oe=6540772B&_nc_sid=ee9879",
        user: USER[3].user,
        likes: 1672,
        caption: "Vợ anh =))",
        profile_picture: USER[3].image,
        address: "Hanoi, Vietnam",
        comments: [
            {
                user: "hieeus.ngx",
                comment: "Cinh :))",
            },
        ],
    },
];
