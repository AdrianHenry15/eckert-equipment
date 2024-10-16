import Splash from "@/components/splash";
import FieldPic from "@/public/machine-2.jpg";
import ProductRow from "../components/products/product-row";

export default function Home() {
    return (
        <div className="flex flex-col justify-between relative w-full">
            <Splash
                link1="/contact"
                link_title_1="Contact Us"
                link2="/parts-services"
                link_title_2="Parts & Services"
                img={FieldPic}
                title="Eckert Equipment"
            />
            <ProductRow category="Synthetic" />
            <ProductRow category="Natural" />
            <ProductRow category="Aerator" />
            <ProductRow category="Debris Blower" />
        </div>
    );
}
