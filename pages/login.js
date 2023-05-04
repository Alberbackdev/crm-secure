import Head from "next/head";
import Layout from "../layout/layout";


export default function Login() {
    return (
        <Layout>    
            <Head>
                <title>Login</title>
            </Head>
            <section className="w-3/4 mx-au
            flex flex-col gap-10">
                <div className="title">
                    <h1 className="text-gray-800 text-4xl font-bold py-4">Inicio de Session</h1>
                    <p className="w-3/4 mx-auto text-gray-400 ">Lorem</p>
                </div>

            </section>
        </Layout>
    )
}