import { ConnectButton } from "web3uikit";
import Link from "next/link";

export default function Header(){
    return(
        <nav className="p-5 border-b-2 flex flex-row justify-between items-center">
            <h1 className="py-4 px-4 font-bold text-3xl">NFT MARKETPLACE</h1>
            <div className="flex flex-row items-center">
                <Link href="/" legacyBehavior>
                    <a className="mr-4 p-6">HOME</a>
                </Link>
                <Link href="/sell-nft" legacyBehavior>
                    <a className="mr-4 p-6">SELL NFT</a>
                </Link>
                <ConnectButton moralisAuth={false}/>
            </div>
        </nav>
        
    )
}