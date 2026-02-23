import Image from "next/image";
import { Product } from "../types";

interface ProductProps {
    data: Product;
}

export function ProdactCard({ data }: ProductProps) {
    return (

        <div>
            <Image src={data.image} alt={data.title} width={200} height={200}></Image>
            <h2>{data.title}</h2>
            <p>Ціна: {data.price} $</p>
            <button>+</button>



        </div>


    )}