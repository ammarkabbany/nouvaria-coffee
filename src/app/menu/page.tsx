import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Menu from "@/components/pages/menu/Menu";

const Page = () => {
    
    return (
        <div className="flex min-h-screen flex-col">
            <Header />

            <Menu />

            <Footer />
        </div>
    )
}

export default Page;