import { NextRequest, NextResponse } from "next/server";
import { title } from "process";
const data =[{
    id:1,
    title:"Power Stage RR",
    price:9477,
    image: "https://images.ctfassets.net/x7j9qwvpvr5s/2Std1zZousaUeO90ffGA54/47964fc5eca54c766e0357b4d1fda082/Powerstage-RR-MY23-slider-card-625x405.png?fm=webp&q=90"
},{
    id:2,
    title:"Panigale V4 SP2 30 Anniversario 916",
    price:34295,
    image: "https://images.ctfassets.net/x7j9qwvpvr5s/7cROWz34OLgptVctPXpPwM/90f1e33f81dee176f8995ee5e6d5a143/Panigale-V4-SP2-30-Anniversario-916-MY24-slider-card-625x405.png?fm=webp&q=90"
},
{
    id:3,
    title:"Hpermotard 698 Mono",
    price: 24457,
    image: "https://images.ctfassets.net/x7j9qwvpvr5s/6GK9yNWAMwXFm6L6RR5gg8/bd122f2ee0559d459202ff2ba48b24e8/Hypermotard-698-Mono-RVE-MY24-slider-card-625x405.png?fm=webp&q=90"
},
{
    id:4,
    title:"Diavel for Bentley",
    price: 71000,
    image: "https://images.ctfassets.net/x7j9qwvpvr5s/7M4II3oZWdrG7qJqGO5ptK/6fc4f261c32521f14e15e14c0a1838d1/Diavel-for-Bentley-MY24-slider-card-625x405.png?fm=webp&q=90"
},

{
    id:5,
    title:"Panigale V2",
    price:35663,
    image: "https://images.ctfassets.net/x7j9qwvpvr5s/54oFKjZQCR2BP9sGChYQ07/a3436702f0704f36d6ae9832f375199a/Panigale-V2-Bk-MY23-slider-card-625x405.png?fm=webp&q=90"
}
]
export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    // console.log(id);
    if(id){
        const detailProduct = data.find((item) => item.id === Number(id));
        if(detailProduct){
            return NextResponse.json({ status: 200, message: "mantap BJIR", data: detailProduct });
        }else{
            return NextResponse.json({ status: 404, message: "data nda ada bodoh" });
        }
    }
   
    return NextResponse.json({ status: 200, message: "mantap", data });
}