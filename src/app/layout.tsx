import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
const inter = Inter({ subsets: ['latin'] })
import Image from 'next/image'
import iconpic from '../../public/Vk-vN6Pv_400x400.jpg'

export const metadata: Metadata = {
    title: 'ocepowerhouse',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
            <nav>
                <a href='/'><Image id="logo" alt="icon" src="/Vk-vN6Pv_400x400.svg" width={50} height={50} ></Image></a>
                <a href='/'>Home</a>
                <a href='/about'>Our Org</a>
                <a href='/match'>Match History</a>
                <a href='/chad'>UwuKnives Rap Career</a>
                <div id="SocialMediaIcons">
                        <a id="Discord" href='https://discord.gg/v7hJ7ksRwY'><Image alt="discordIcon" src="icons8-discord.svg" width={50} height={50}></Image></a>
                        <a id="Twitter1"  href='https://twitter.com/OCEPowerhouseOW'><Image alt="twitterIcon" src="icons8-twitter (1).svg" width={50} height={50}></Image></a>
                </div>
            </nav> 
                {children}
            </body>
        </html>
    )
}
