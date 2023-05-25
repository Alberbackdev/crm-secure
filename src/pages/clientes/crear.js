import React, { useState} from "react";
import Layout from "../../components/Layout";
import { FormClientData } from "../../components/FormClientData";


//This is form for new client

export default function crear() {

    return (
        <Layout>
            <FormClientData />
        </Layout>
    )
}
