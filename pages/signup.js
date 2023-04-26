import React from "react";
import Head from 'next/head'
import Navbar from "../components/navbar";
import Form from "../components/Form";
import Footer from "../components/Footer";

export default function Signup(){
    return(
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
                <Navbar/>
            </header>
            <main class="">
                <Form/>
            </main>
            <footer>        
                <Footer/>
            </footer>
        </>
    )
}
